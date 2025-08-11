type Props = { title: string; description: string; children?: React.ReactNode };
export default function ContactCard({ title, description, children }: Props) {
  return (
    <div className="rounded border border-slate-200 dark:border-slate-800 p-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
