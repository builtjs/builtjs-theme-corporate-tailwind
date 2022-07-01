import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

export default function SocialLink({ attributes }) {
  const { publicRuntimeConfig } = getConfig();
  return (
    <Link key={attributes.url} href={attributes.url}>
      <a>
        <Image
          height={attributes?.icon?.data.attributes.height || '24px'}
          width={attributes?.icon?.data.attributes.width || '24px'}
          src={`${publicRuntimeConfig.BACKEND_URL || ""}${attributes?.icon?.data.attributes.url}`}
          alt={attributes.slug}
        />
      </a>
    </Link>
  );
}
