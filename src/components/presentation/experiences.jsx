import { formatDate } from "../../utils/date.utils";

export function Experiences() {
  const experiences = [
    {
      date: new Date(2025, 7, 0),
      title: "Stage cours Florent",
      description: "Ateliers pratiques...",
    },
    {
      date: new Date(2025, 7, 0),
      title: "Stage cours Florent 2",
      description: "Ateliers pratiques...",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-tomarik">
            Expériences
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-[1fr_0.5rem_1fr] gap-12 items-stretch">
          <section className="bg-white pr-4 flex flex-col justify-around items-end h-full py-16 gap-14">
            {experiences.map(({ date, title }) => (
              <div className="inline-flex items-center" key={title}>
                <p>{formatDate(date)}</p>
              </div>
            ))}
          </section>
          <section class="bg-primary h-auto flex flex-col justify-around py-16 gap-14">
            {experiences.map((_, index) => (
              <div key={index}>
                <span className="block w-8 text-3xl text-center relative text-primary -left-3 ">
                  ◉
                </span>
              </div>
            ))}
          </section>
          <section className="bg-white pl-4 h-full flex flex-col justify-around py-16 gap-14">
            {experiences.map(({ title, description }) => (
              <div key={title}>
                <h2 class="text-xl font-bold font-articulat">{title}</h2>
                <p class="italic">{description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
