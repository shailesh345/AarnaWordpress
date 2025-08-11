type Props = { label: string; value: string };
export default function Stat({ label, value }: Props) {
  return (
    <div className="glass-premium dark:glass-premium-dark rounded-3xl p-8 text-center hover-lift transition-all duration-500 shimmer group">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Premium content */}
      <div className="relative z-10">
        <div className="text-5xl font-black text-premium mb-3 group-hover:scale-110 transition-transform duration-300">
          {value}
        </div>
        <div className="text-slate-600 dark:text-slate-400 font-semibold text-lg group-hover:text-luxury dark:group-hover:text-premium transition-colors duration-300">
          {label}
        </div>

        {/* Premium accent line */}
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300 glow-premium" />
      </div>
    </div>
  );
}
