import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  children,
}: Readonly<{
  kicker: string;
  children: React.ReactNode;
}>) {
  return (
    <Reveal className="mb-12">
      <p className="kicker mb-3">{kicker}</p>
      <h2 className="section-heading text-3xl sm:text-4xl lg:text-[2.75rem]">
        {children}
      </h2>
    </Reveal>
  );
}
