import Link from "next/link";

export default function Block5() {
  return (
    <section id="block-5" className="template">
      <div className="max-w-5xl px-4 py-20 mx-auto">
        <h1 className="mb-8 font-bold leading-none text-center text-gray-900 text-7xl lg:text-8xl">
          Lorem ipsum dolor
        </h1>
        <div className="max-w-2xl px-8 mx-auto text-center sm:px-16">
          <p className="mb-16 text-center">
            Faucibus a pellentesque sit amet porttitor eget. Rhoncus mattis
            rhoncus urna neque viverra justo nec. Vitae suscipit tellus mauris a
            diam. Id eu nisl nunc mi ipsum faucibus. Nulla facilisi nullam
            vehicula ipsum a arcu cursus. Mi quis hendrerit dolor magna eget est
            lorem ipsum.
          </p>
          <Link href="/">
            <a className="flex items-center justify-center w-full px-6 py-3 border text-lightest transition duration-200 ease-in-out bg-secondary border-secondary rounded-md lg:inline-flex sm:w-auto hover:bg-secondary-darker hover:border-secondary-darker">
              Button
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
