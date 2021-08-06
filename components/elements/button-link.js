import Link from "next/link";

export default function ButtonLink({attribute}) {
  return (
    <Link key={attribute.label} href={attribute.url}>
        <a className={`inline-block w-full mx-2 px-6 py-3 border-secondary transition duration-200 ease-in-out border rounded-md sm:w-auto ${attribute.type && attribute.type !== 'primary' ? 'text-secondary bg-white border-secondary hover:bg-secondary hover:text-lightest' : 'text-lightest bg-secondary hover:bg-secondary-dark'}`}>
        {attribute.label}
      </a>
    </Link>
  );
}
