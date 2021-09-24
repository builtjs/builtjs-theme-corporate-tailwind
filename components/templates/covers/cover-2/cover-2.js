import React from "react";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover2({ content }) {
  let { attributes } = content;
  return (
    <article id="cover-2" className="relative flex items-center min-h-screen px-4 py-20 template lg:py-32 xl:py-48 bg-image">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center">
          <Preheading attribute={attributes.preheading}></Preheading>
        </div>
        <h1 className="mb-8 text-6xl font-bold leading-none dark:text-gray-900 lg:text-8xl">{attributes.heading}</h1>
        <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700">{attributes.blurb}</p>
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto sm:flex-row">
          {attributes.buttonLinks && (
            <div className="flex flex-col items-center sm:flex-row">
              {attributes.buttonLinks.map((button) => {
                return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
              })}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .bg-image {
          background: #f7fafc url("/images/main-landing.jpg") no-repeat top center/cover;
        }

        .bg-image::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(247, 250, 252, 0.9);
        }

        .bg-image > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </article>
  );
}
