export default function Preheading({ attribute }) {
  return (
    <div className="flex items-center">
      <div className={attribute.type === 'dot' ? `w-2 h-2 mb-3 mr-3 bg-secondary-light rounded-full` : `hidden w-10 mb-3 mr-3 border border-secondary-light lg:block`}></div>
      <h4 className="preheading-primary">
        {attribute.text}
      </h4>
    </div>
  );
}
