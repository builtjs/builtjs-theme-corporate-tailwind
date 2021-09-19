import React from "react";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover5({ content }) {
  let { attributes } = content;
  return (
    <section id="cover-5" className="min-h-screen template">
      <div className="relative min-h-screen px-4 py-32 bg-gray-100 services-bg-image">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 max-w-3xl p-8 ml-auto bg-white rounded-lg lg:p-14 bg-opacity-90">
            <Preheading attribute={attributes.preheading}></Preheading>
            <h1 className="mb-6 text-4xl font-bold leading-none md:text-5xl dark:text-darkest">{attributes.heading}</h1>
            <p className="max-w-xl mb-16 font-light leading-loose dark:text-darkest">{attributes.blurb}</p>
            {attributes.buttonLinks && (
              <div className="flex flex-col items-center sm:flex-row">
                {attributes.buttonLinks.map((button) => {
                  return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .services-bg-image {
          background: #f7fafc url("/images/main-landing.jpg") no-repeat top center/cover;
        }
      `}</style>
    </section>
  );
}
