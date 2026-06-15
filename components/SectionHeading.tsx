import Reveal from "./Reveal";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <h2 className="section-heading mb-12 text-center text-4xl sm:text-5xl">
        {children}
      </h2>
    </Reveal>
  );
}
