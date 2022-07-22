import { useEffect, useState } from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};

/**
 * Give dark or light class to body
 */
export default function ModeToggleBtn() {
  const loaded = useLoaded();
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  });
  return (
    <div className="cursor-pointer mode-toggle-btn" onClick={darkMode.toggle}>
      {darkMode && loaded && darkMode.value && (
        <svg className="text-white stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 26 26" width="24">
          <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="m13.0004 18.4545c3.0125 0 5.4546-2.4421 5.4546-5.4545 0-3.01251-2.4421-5.45459-5.4546-5.45459-3.01242 0-5.4545 2.44208-5.4545 5.45459 0 3.0124 2.44208 5.4545 5.4545 5.4545z" />
            <path d="m13 1v2.18182" />
            <path d="m13 22.8182v2.1819" />
            <path d="m4.5127 4.5127 1.54909 1.54909" />
            <path d="m19.9385 19.9381 1.5491 1.5491" />
            <path d="m1 13h2.18182" />
            <path d="m22.8184 13h2.1818" />
            <path d="m4.5127 21.4872 1.54909-1.5491" />
            <path d="m19.9385 6.06179 1.5491-1.54909" />
          </g>
        </svg>
      )}
      {darkMode && loaded && !darkMode.value && (
        <svg className="text-black stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" height="20" viewBox="0 0 26 26" width="20">
          <path
            d="m25 14.0811c-.2102 2.2744-1.0638 4.4419-2.4609 6.249-1.3971 1.807-3.28 3.1787-5.4282 3.9547-2.1483.776-4.4731.9241-6.7025.427-2.22939-.4971-4.27109-1.6189-5.88621-3.234-1.61511-1.6151-2.73685-3.6568-3.23395-5.8862-.497095-2.2294-.348994-4.5542.42698-6.70247.77597-2.14827 2.14771-4.03112 3.95472-5.42824 1.80701-1.39711 3.97455-2.2507 6.24896-2.46089-1.3316 1.80151-1.97237 4.02113-1.8058 6.25516.1666 2.23402 1.1295 4.33404 2.7136 5.91814s3.6841 2.547 5.9181 2.7136c2.2341.1666 4.4537-.4742 6.2552-1.8058z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      )}
    </div>
  );
}
