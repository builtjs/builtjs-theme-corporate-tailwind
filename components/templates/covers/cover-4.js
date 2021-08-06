import Link from "next/link";
import {ButtonLink, Preheading} from './../../elements';

export default function Cover4({ content }) {
  let { attributes } = content;
  return (
    <section id="cover-4" className="template">
      <div className="px-4 py-16 lg:py-24">
        <div className="flex flex-col items-start lg:flex-row">
          <div className="relative flex-1 mb-12 lg:p-10 lg:order-1 lg:mb-0 sm:w-3/4 sm:mx-auto lg:w-full">
            <img
              className="relative z-10 bg-gray-100 rounded-full shadow-xl"
              src="https://source.unsplash.com/Oalh2MojUuk/1000x1000"
            />
            <div className="absolute top-0 left-0 w-full h-full text-secondary-light rounded-full rounded-tl-none pattern-offset-dots"></div>
            <div className="absolute bottom-0 right-0 w-full h-full text-secondary-lightrounded-full rounded-br-none pattern-offset-dots"></div>
          </div>
          <div className="flex-1 mb-10 lg:pr-10 xl:px-20 lg:mb-16 md:w-3/4 md:mx-auto lg:w-full">
            <Preheading attribute={attributes.preheading}></Preheading>
            <h1 className="mb-10 text-4xl font-bold leading-none text-gray-900 md:text-5xl">
              Turpis in eu mi bibendum neque egestas congue
            </h1>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Vel pretium lectus quam id leo in vitae. Nibh nisl condimentum id
              venenatis a condimentum vitae sapien. Id porta nibh venenatis cras
              sed felis. Ipsum dolor sit amet{" "}
              <Link href="/services">
                <a className="text-secondary hover:secondary-dark hover:underline">
                  consectetur adipiscing elit
                </a>
              </Link>{" "}
              ut. Platea dictumst quisque sagittis purus. Pulvinar proin gravida
              hendrerit lectus.
            </p>
            <ul className="mb-12 ml-5 font-light leading-loose text-gray-700 list-disc">
              <li>Accumsan sit amet nulla facilisi morbi tempus iaculis</li>
              <li>Curabitur vitae nunc sed velit dignissim sodales ut</li>
              <li>In egestas erat imperdiet sed euismod nisi</li>
            </ul>
            <h2 className="mb-5 text-xl font-bold leading-none text-gray-800">
              Let's get started
            </h2>
            <p className="mb-6 font-light leading-loose text-gray-700">
              Elementum sagittis vitae et leo duis ut. Netus et malesuada fames
              ac turpis egestas. Potenti nullam ac tortor vitae purus faucibus.
              Tellus mauris a diam maecenas sed. Enim sed faucibus turpis in.
              Tellus mauris a diam maecenas. At varius vel pharetra vel turpis
              nunc eget.
            </p>
            <p className="mb-12 font-light leading-loose text-gray-700">
              Quis commodo odio aenean sed. Amet cursus sit amet dictum.
            </p>
            <ButtonLink key={attributes.buttonLink.label} attribute={attributes.buttonLink}></ButtonLink>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pattern-offset-dots {
          background-image: radial-gradient(currentColor 1px, transparent 1px),
            radial-gradient(currentColor 1px, transparent 1px);
          background-size: calc(20 * 1px) calc(20 * 1px);
          background-position: 0 0, calc(10 * 1px) calc(10 * 1px);
        }
      `}</style>
    </section>
      // )}
  );
     
}
