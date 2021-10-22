import Link from "next/link";

export default function Tag({ item }) {
  return (
    <Link href={`/`} key={item.tag}>
      <a className="tag">{item.tag}</a>
    </Link>
  );
}
