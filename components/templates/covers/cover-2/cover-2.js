
import {
  ButtonLink
} from '../../../elements';

export default function Cover2({ content }) {
  let { attributes } = content;
  return (
    <article id="cover-2" className="template px-4 py-20 lg:py-32 xl:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <p className="preheading-secondary">
            {attributes.preheading.text}
          </p>
          <h1 className="mb-8 text-6xl font-bold leading-none text-gray-900 lg:text-8xl">
            {attributes.heading}
          </h1>
          <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700">
            {attributes.blurb}
          </p>
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto sm:flex-row">
          {attributes.buttonLinks && (
                <div className="flex flex-col items-center sm:flex-row">
                  {attributes.buttonLinks.map((button) => {
                    return (
                      <ButtonLink key={button.label} attribute={button}></ButtonLink>
                    )
                  })}
                </div>
              )}
          </div>
        </div>
    </article>
  );
}