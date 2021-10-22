import Link from "next/link";

export default function ButtonLink({ attribute }) {
  return (
    <Link key={attribute.type} href={attribute.url}>
      <a className={`btn btn-${attribute.type}`}>{attribute.label}</a>
    </Link>
  );
}
