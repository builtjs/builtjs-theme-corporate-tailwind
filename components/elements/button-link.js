import Link from "next/link";

export default function ButtonLink({ attributes }) {
  return (
    <Link key={attributes.type} href={attributes.url}>
      <a className={`btn btn-${attributes.type}`}>{attributes.label}</a>
    </Link>
  );
}
