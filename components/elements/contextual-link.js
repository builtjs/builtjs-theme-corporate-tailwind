import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

export default function ContextualLink({ attributes }) {
  const { publicRuntimeConfig } = getConfig();
  return (
    <div key={attributes.url} className="flex items-start">
      <Image
          height={attributes.icon.data.attributes.height || '24px'}
          width={attributes.icon.data.attributes.width || '24px'}
          src={`${publicRuntimeConfig.BACKEND_URL || ""}${attributes?.icon?.data.attributes.url}`}
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
