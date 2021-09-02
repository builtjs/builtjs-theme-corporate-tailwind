import getConfig from "next/config";
import Image from "next/image";

export default function Cover3({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  return (
    <article id="cover-3" className="px-4 py-20 template lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="preheading-secondary">{attributes.preheading.text}</p>
        <h1 className="mb-8 text-6xl font-bold leading-none text-gray-900 lg:text-8xl">{attributes.heading}</h1>
        <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700">{attributes.blurb}</p>
      </div>
      <div className="relative w-full mx-auto xl:w-3/4 h-96 py-96">
        <Image layout="fill" className="object-cover mx-auto bg-gray-200" src={`${publicRuntimeConfig.API_URL || ""}${attributes.image.url}`} alt="" />
      </div>
    </article>
  );
}
