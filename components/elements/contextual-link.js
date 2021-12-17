import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

export default function ContextualLink({ data }) {
  console.log({data});
  const { publicRuntimeConfig } = getConfig();
  return (
    <div key={data.url} className="flex items-start">
      <Image
          height={data.icon.height}
          width={data.icon.width}
          src={`${publicRuntimeConfig.API_URL || ""}${data.icon.url}`}
          alt={data.slug}
        />
      <div className="ml-4">
        <p>{data.text}</p>
        <Link href={data.url}>
          <a>{data.label}</a>
        </Link>
      </div>
    </div>
  );
}
