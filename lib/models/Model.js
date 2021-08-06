import alasql from "alasql";
// import {Section, Template} from "./index";

export default class Model {
  constructor(doc, data, name) {
    this.doc = doc;
    this.data = data;
    this.name = name;
    this.table = `${this.name}s`;
  }

  async getData() {
    return (await import(`../../content/data/${this.table}.json`))[this.table];
  }

  async populate(property, table) {
    return new Promise(async (resolve) => {
      table = !table ? property : table;
      let populateData = (await import(`../../content/data/${table}.json`))[table];
      let isMultiple = property.endsWith("s");
      if (isMultiple) {
        let entries = this.doc[property];
        let items = [];
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          let item;
          if(typeof entry === 'string'){
            item = await this.getItem(entry, table, populateData);
          } else{
            item = await this.getItem(entry.slug, table, populateData);
            if(entry.template){
              let data = (await import(`../../content/data/templates.json`))['templates'];
              let template = await this.getItem(entry.template.slug, 'templates', data);
              if(!template){
                // template not found due to data changes, refresh page
                window.location = window.location; 
                return;
              }
              if(!item){
                throw new Error('No item found: ' + (entry === 'string' ? entry : entry.slug));
              } 
              item.template = template;
            }
          }
          items.push(item);
          
        }
        this.doc[property] = items;
      } else {
        const slug = this.doc[property];
        if(slug){
        let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
          populateData,
        ]);
        this.doc[property] = await this.getItem(slug, table, populateData);
        }
        
      }
      resolve();
    });
  }

  async findOne(slug) {
    if (!slug) {
      //TODO error handling
    }
    return new Promise(async(resolve) => {
if (!this.data) {
      this.data = await this.getData();
    }
    const res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [this.data]);
    this.doc = res.length ? res[0] : null;
    resolve(this);
    });
    
  }

  async findMany(filters) {
    if (!slug) {
      //TODO error handling
    }
    if (!this.data) {
      this.data = this.getData();
    }
    return new Promise(async(resolve) => {
    let res = alasql(
      `SELECT * FROM ?` + (filters.limit ? ` LIMIT ${filters.limit}` : ""),
      [this.data]
    );
    let items = [];
    res.map((doc) => {
      let item = new this.constructor(doc, this.data);
      items.push(item);
    });
    resolve(items);
    });
  }

  getItem(slug, table, populateData) {
    return new Promise((resolve) => {
      let res = alasql(`SELECT * FROM ? WHERE slug = '${slug}'`, [
        populateData,
      ]);
      let item = res.length ?new Model(res[0], null, table.slice(0, -1)) : null;
      resolve(item);
    });
  }
}
