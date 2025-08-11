type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Section({ title, description, children }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="old-phone-card p-8">
        <div className="text-center mb-8">
          <h2 className="old-phone-title text-2xl mb-4">
            {title}
          </h2>
          {description && (
            <p className="phone-font text-sm text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
