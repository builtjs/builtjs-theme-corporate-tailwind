import Link from "next/link";

export default function SocialLink({ attribute }) {
  return (
    <Link key={attribute.url} href={attribute.url}>
      <a>
        <svg
          className="text-gray-600 dark:text-gray-400 w-6 mr-6"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox={
            "0 0 " +
            attribute.icon.viewboxWidth +
            " " +
            attribute.icon.viewboxHeight
          }
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
