import alasql from "alasql";

export default class Model {
  constructor(doc, data, name) {
    this.doc = doc;
    this.data = data;
    this.name = name;
    this.table = `${this.name}s`;
    this.dataMap = {};
  }

  async getData() {
    let data = await this.fetchData(`/data/${this.table}.json`);
    return data[this.table];
  }

  async populate(property, table) {
    return new Promise(async (resolve) => {
      if(!this.doc){
        return;
      }
      table = !table ? property : table;
      let data = await this.fetchData(`/data/${table}.json`);
      let populateData = data[table];
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
              let data = await this.fetchData(`/data/templates.json`);
              let templatesData = data['templates'];
              let template = await this.getItem(entry.template.slug, 'templates', templatesData);
              if(!template){
                // template not found due to data changes, refresh page
                window.location = window.location; 
                return;
              }
              if(!item){
                continue;
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

  async fetchData(path) {
    const url = process.env.url || 'http://localhost:3000';
    return new Promise(async(resolve) => {
      let res = await fetch(`${url}${path}`);
      let data = res.json();
      resolve(data);
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
      let item = res.length ? new Model(res[0], null, table.slice(0, -1)) : null;
      resolve(item);
    });
  }
}
