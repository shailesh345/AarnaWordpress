type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
export default function Section({ title, description, children }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="pixel-perfect border-4 border-cyan-400 bg-gradient-to-br from-purple-800 to-blue-800 p-2">
        <div className="bg-black pixel-perfect border-2 border-green-400 p-8 h-full">
          <Reveal>
            <SectionHeader title={title} subtitle={description} />
            <div className="mt-8">{children}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
