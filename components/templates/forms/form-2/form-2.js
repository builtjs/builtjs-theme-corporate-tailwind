import {
  Preheading,
  SocialLink,
  Field,
  ContextualLink,
  Button,
} from "../../../elements";

export default function Form1({content }) {
  let { attributes } = content;
  return (
    <section id="form-2" className="template bg-light">
      <div className="px-4 py-24">
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="mb-5 text-4xl font-bold leading-none text-center text-gray-900 md:text-5xl">
            {attributes.heading}
          </h2>
          <p className="mb-12 text-lg text-center lg:mb-20">
            {attributes.blurb}
          </p>
          <form action="#" method="POST">
            <div className="mb-6">
              <label className="block text-sm leading-5 text-gray-700 dark:text-gray-400">
                Your Full Name
              </label>
              <input className="mt-2 w-full border rounded-md py-3 px-5" />
            </div>
            <div className="mb-6">
              <label className="block text-sm leading-5 text-gray-700 dark:text-gray-400">
                Your Phone Number
              </label>
              <input className="mt-2 w-full border rounded-md py-3 px-5" />
            </div>
            <div className="mb-6">
              <label className="block text-sm leading-5 text-gray-700 dark:text-gray-400">
                Your Email Address
              </label>
              <input className="mt-2 w-full border rounded-md py-3 px-5" />
            </div>
            <div className="mb-8">
              <label className="block text-sm leading-5 text-gray-700 dark:text-gray-400">
                Your Message
              </label>
              <textarea
                rows="5"
                className="mt-2 w-full border rounded-md p-5"
              ></textarea>
            </div>
            <div className="form-button text-center">
              <button className="w-full flex items-center justify-center rounded-md p-0 text-center text-lightest bg-secondary-light hover:bg-secondary transition duration-200 ease-in-out">
                <span className="d-block w-full text-center p-3">Send</span>
              </button>
            </div>
          </form>
          <style jsx>{`
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          `}</style>
        </div>
      </div>
    </section>
  );
}
