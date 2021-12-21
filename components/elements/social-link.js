import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

export default function SocialLink({ data }) {
  const { publicRuntimeConfig } = getConfig();
  return (
    <Link key={data.url} href={data.url}>
      <a>
        <Image
          height={data.icon.height}
          width={data.icon.width}
          src={`${publicRuntimeConfig.API_URL || ""}${data.icon.url}`}
          alt={data.slug}
        />
      </a>
    </Link>
  );
}
