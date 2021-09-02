import React from "react";

export default function Form1({ content }) {
  let { attributes } = content;
  return (
    <section id="form-2" className="template bg-light">
      <div className="px-4 py-24">
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="mb-5 text-4xl font-bold leading-none text-center text-gray-900 md:text-5xl">{attributes.heading}</h2>
          <p className="mb-12 text-lg text-center lg:mb-20">{attributes.blurb}</p>
          <form action="#" method="POST">
            <div className="mb-6">
              <label className="block text-sm text-gray-700 leading-5 dark:text-gray-400">Your Full Name</label>
              <input className="w-full px-5 py-3 mt-2 border rounded-md" />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-700 leading-5 dark:text-gray-400">Your Phone Number</label>
              <input className="w-full px-5 py-3 mt-2 border rounded-md" />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-700 leading-5 dark:text-gray-400">Your Email Address</label>
              <input className="w-full px-5 py-3 mt-2 border rounded-md" />
            </div>
            <div className="mb-8">
              <label className="block text-sm text-gray-700 leading-5 dark:text-gray-400">Your Message</label>
              <textarea rows="5" className="w-full p-5 mt-2 border rounded-md"></textarea>
            </div>
            <div className="text-center form-button">
              <button className="flex items-center justify-center w-full p-0 text-center transition duration-200 ease-in-out rounded-md text-lightest bg-secondary-light hover:bg-secondary">
                <span className="w-full p-3 text-center d-block">Send</span>
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
