import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

export default function ContextualLink({ attributes }) {
  console.log({data: attributes});
  const { publicRuntimeConfig } = getConfig();
  return (
    <div key={attributes.url} className="flex items-start">
      <Image
          height={attributes.icon.height}
          width={attributes.icon.width}
          src={`${publicRuntimeConfig.API_URL || ""}${attributes.icon.url}`}
          alt={attributes.slug}
        />
      <div className="ml-4">
        <p>{attributes.text}</p>
        <Link href={attributes.url}>
          <a>{attributes.label}</a>
        </Link>
      </div>
    </div>
  );
}
