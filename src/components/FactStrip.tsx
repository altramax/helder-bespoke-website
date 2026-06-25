const facts = [
  { value: "15", label: "Years cutting for Lagos and the diaspora" },
  { value: "26", label: "Measurements taken by hand, not six" },
  { value: "2", label: "Fittings minimum, before a seam is closed" },
  { value: "1hr", label: "Average reply time on a fabric enquiry" },
];

export default function FactStrip() {
  return (
    <section className="border-b border-onyx-line bg-onyx-soft">
      <div className="container-x grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:py-14">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-2 pr-4">
            <span className="font-display text-3xl text-gold md:text-4xl">
              {fact.value}
            </span>
            <span className="max-w-[180px] text-sm leading-snug text-ivory/60">
              {fact.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
