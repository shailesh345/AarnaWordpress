type Props = { title: string; subtitle?: string };
export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <header className="mb-6">
      <div className="group inline-block">
        <h2 className="text-2xl pixel-font font-bold text-cyan-400 uppercase">
          {title}
        </h2>
        <span
          aria-hidden
          className="block h-2 w-12 pixel-perfect bg-gradient-to-r from-yellow-400 to-orange-500 mt-2 transition-all group-hover:w-20"
        />
      </div>
      {subtitle && (
        <div className="mt-4 bg-black border-2 border-green-400 pixel-perfect p-3">
          <p className="text-green-300 pixel-font">{subtitle}</p>
        </div>
      )}
    </header>
  );
}
