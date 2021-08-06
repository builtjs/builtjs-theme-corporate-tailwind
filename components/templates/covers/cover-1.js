import Image from "next/image";
import getConfig from 'next/config';
import {
  ButtonLink,
  Preheading
} from './../../elements';

export default function Cover1({ content }) {
  let { attributes } = content;
  console.log('att', attributes)
  const { publicRuntimeConfig } = getConfig();
  return (
    <section id="cover-1" className="template overflow-hidden bg-light">
        <div className="relative flex flex-col lg:flex-row lg:py-36 ">
          <div className="relative z-20 flex-1 mb-12 lg:order-1 lg:mb-0 lg:mr-20">
            <Image
              width={attributes.image.width}
              height={attributes.image.height}
              className="relative z-10 object-cover object-top w-full h-full bg-light lg:shadow-2xl lg:rounded-lg"
              src={`${publicRuntimeConfig.API_URL || ''}${attributes.image.url}`}
            />
            <div className="absolute bottom-0 right-0 z-10 text-gray-300 dark:text-gray-300 pattern-dots"></div>
          </div>
          <div className="relative z-20 flex-1 px-4 mb-20 lg:py-10 xl:32 lg:my-auto">
            <div className="mx-auto text-center sm:w-4/5 lg:text-left">
            <Preheading attribute={attributes.preheading}></Preheading>
              <h1>
                {attributes.heading}
              </h1>
              <p className="mb-10 text-lg xl:pr-20 lg:mb-16">
                {attributes.blurb}
              </p>
              {attributes.buttonLinks && (
                <div className="flex flex-col items-center sm:flex-row">
                  {attributes.buttonLinks.map((button) => {
                    return (
                      <ButtonLink key={button.label} attribute={button}></ButtonLink>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
      </div>
      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(currentColor 2px, transparent 2px);
          background-size: calc(10 * 2px) calc(10 * 2px);
          right: -112px;
          bottom: -100px;
          width: 50%;
          height: 60%;
        }
      `}</style>
    </section>
  );
}