import Link from "next/link";

export default function ContextualLink({ attribute }) {
  return (
    <div key={attribute.url} className="flex items-start">
      <svg
        className="w-5 mt-1 mr-5 text-black dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={"0 0 " + attribute.icon.viewboxWidth + " " + attribute.icon.viewboxHeight}
        fill="currentColor"
      >
        <path d={attribute.icon.svgPath} transform={attribute.icon.pathTransform}></path>
      </svg>
      <div>
        <p>{attribute.text}</p>
        <Link href={attribute.url}>
          <a>{attribute.label}</a>
        </Link>
      </div>
    </div>
  );
}
