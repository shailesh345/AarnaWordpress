import { useInView } from "@/hooks/useInView";
import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
};
export default function Reveal({ children, delayMs = 0, className }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={clsx(
        "transform-gpu transition duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className
      )}
    >
      {children}
    </div>
  );
}
