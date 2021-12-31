import Link from "next/link";

export default function ButtonLink({ data }) {
  return (
    <Link key={data.type} href={data.url}>
      <a className={`btn btn-${data.type}`}>{data.label}</a>
    </Link>
  );
}
