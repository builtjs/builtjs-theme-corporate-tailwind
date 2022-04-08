import { Preheading, SocialLink, Field, ContextualLink, Button } from "@/elements";

export default function Form1({ content }) {
  let { attributes, collections } = content;
  if (!collections) {
    throw new Error(`No collections attribute provided in sections.json for template`);
  }
  let socialLinks = [];
  if (collections && collections["social-links"]) {
    socialLinks = collections["social-links"].items;
  }

  return (
    <section id="form-2" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-20 text-center">
          <Preheading attributes={attributes.preheading}></Preheading>
          <h1>{attributes.title}</h1>
          <p className="max-w-xl mx-auto text-lg">{attributes.blurb}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="mb-16 grid grid-cols-1 gap-y-12">
              {attributes.contextualLinks.map((contextualLink, i) => {
                return <ContextualLink key={i} attributes={contextualLink}></ContextualLink>;
              })}
            </div>
            <div className="items-center ml-10 grid grid-flow-col auto-cols-max gap-x-6">
              {socialLinks.map((socialLink, i) => {
                return <SocialLink key={i} attributes={socialLink.attributes}></SocialLink>;
              })}
            </div>
          </div>
          <div>
            <form action="#" method="POST">
              {attributes.fields.map((field, i) => {
                return <Field key={i} attributes={field}></Field>;
              })}
              {/* TODO: Form button needs wiring up */}
              <Button attributes={attributes.button}></Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
