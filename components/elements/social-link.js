import Link from "next/link";

export default function SocialLink({ attribute }) {
  return (
    <Link key={attribute.url} href={attribute.url}>
      <a>
        <svg
          className="w-6 text-gray-400 transition-colors h- dark:text-gray-200 hover:text-gray-500 dark:hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={"0 0 " + attribute.icon.viewboxWidth + " " + attribute.icon.viewboxHeight}
          fill="currentColor"
        >
          {attribute.icon.svgPaths.map((iconSvgPath, i) => {
            return <path key={i} d={iconSvgPath} />;
          })}
        </svg>
      </a>
    </Link>
  );
}
