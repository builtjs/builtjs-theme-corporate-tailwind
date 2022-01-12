import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

export default function SocialLink({ attributes }) {
  const { publicRuntimeConfig } = getConfig();
  return (
    <Link key={attributes.url} href={attributes.url}>
      <a>
        <Image
          height={attributes.icon.height}
          width={attributes.icon.width}
          src={`${publicRuntimeConfig.API_URL || ""}${attributes.icon.url}`}
          alt={attributes.slug}
        />
      </a>
    </Link>
  );
}
