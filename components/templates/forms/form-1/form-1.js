import {
  Preheading,
  SocialLink,
  Field,
  ContextualLink,
  Button,
} from "@/elements";

export default function Form1({ content }) {
  let { attributes, collections } = content;
  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let socialLinks = [];
  if (collections["social-link"]) {
    socialLinks = collections["social-link"].items;
  }
  return (
    <section id="form-1" className="template">
      <div className="px-4 py-16 lg:py-24">
        <div className="flex flex-col items-start lg:flex-row">
          <div className="flex-1 lg:pr-10 xl:px-20">
            <Preheading attribute={attributes.preheading}></Preheading>
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-none font-bold mb-6">
              {attributes.heading}
            </h2>
            <p className="max-w-xl text-lg mb-16 lg:mb-10">{attributes.blurb}</p>
            <div className="flex flex-col">
              {attributes.contextualLinks.map((contextualLink, i) => {
                return (
                  <ContextualLink
                    key={i}
                    attribute={contextualLink}
                  ></ContextualLink>
                );
              })}
              <div className="flex items-center mx-10 mb-16">
                {socialLinks.map(
                    (socialLink, i) => {
                      return (
                        <SocialLink key={i} attribute={socialLink}></SocialLink>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
          <div className="flex-1 w-full mt-10 mb-10 xl:pr-20">
            <form action="#" method="POST">
              {attributes.fields.map((field, i) => {
                return <Field key={i} attribute={field}></Field>;
              })}
              {/* FIXME */}
              {/* <Button attribute={attributes.button}></Button> */}
            </form>
            <style jsx>{`
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
