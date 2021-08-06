import Link from "next/link";

export default function ContextualLink({ attribute }) {
  return (
    <div key={attribute.url} className="flex items-start mb-10 mr-20">
      <svg
        className="text-gray-600 w-5 mt-1 mr-5"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox={
          "0 0 " + attribute.icon.viewboxWidth + " " + attribute.icon.viewboxHeight
        }
        fill="currentColor"
      >
        <path d={attribute.icon.svgPath} transform={attribute.icon.pathTransform}></path>
      </svg>
      <div>
        <p>{attribute.text}</p>
        <Link href="#">
          <a
            className="font-light text-secondary hover:text-secondary-dark hover:underline"
            href={attribute.url}
          >
            {attribute.label}
          </a>
        </Link>
      </div>
    </div>
  );
}
