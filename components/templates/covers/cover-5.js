export default function Cover5({ content }) {
  let { attributes } = content;
  return (
    <section id="cover-5" className="template">
      <div className="relative px-4 py-32 bg-gray-100 services-bg-image">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h4 className="preheading-primary">
            { attributes.preheading.text }
          </h4>
          <h1 className="mb-10 text-4xl font-bold leading-none md:text-5xl dark:text-darkest">
            {attributes.heading}
          </h1>
          <p className="max-w-xl mx-auto mb-12 font-light leading-loose dark:text-darkest">
            {attributes.blurb}
          </p>
          <svg 
            className="w-12 mx-auto text-darkest dark:text-darkest"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="14"
            fill="none"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M1 1l20 12L41 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .services-bg-image {
          background: #f7fafc url("https://source.unsplash.com/vbxyFxlgpjM")
            no-repeat top center/cover;
        }

        .services-bg-image::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(247, 250, 252, 0.9);
        }
      `}</style>
    </section>
  );
}
