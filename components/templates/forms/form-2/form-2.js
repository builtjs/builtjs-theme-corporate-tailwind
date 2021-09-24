import React from "react";
import { Preheading, SocialLink, Field, ContextualLink, Button } from "@/elements";

export default function Form1({ content }) {
  let { attributes, collections } = content;
  if (!collections) {
    throw new Error(`No collections attribute provided in sections.json for template`);
  }
  let socialLinks = [];
  if (collections["social-link"]) {
    socialLinks = collections["social-link"].items;
  }
  return (
    <section id="form-2" className="template bg-light">
      <div className="px-4 py-24">
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-center">
            <Preheading attribute={attributes.preheading}></Preheading>
          </div>
          <h2 className="mb-5 text-4xl font-bold leading-none text-center md:text-7xl">{attributes.heading}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="mb-12 text-lg text-center lg:mb-20">{attributes.blurb}</p>
            <div className="flex flex-col">
              {attributes.contextualLinks.map((contextualLink, i) => {
                return <ContextualLink key={i} attribute={contextualLink}></ContextualLink>;
              })}
              <div className="flex items-center mx-10 mb-16">
                {socialLinks.map((socialLink, i) => {
                  return <SocialLink key={i} attribute={socialLink}></SocialLink>;
                })}
              </div>
            </div>
            <form action="#" method="POST">
              {attributes.fields.map((field, i) => {
                return <Field key={i} attribute={field}></Field>;
              })}
              {/* TODO: Form button needs wiring up */}
              <Button attribute={attributes.button}></Button>
            </form>
          </div>
          <style jsx>{`
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          `}</style>
        </div>
      </div>
    </section>
  );
}
