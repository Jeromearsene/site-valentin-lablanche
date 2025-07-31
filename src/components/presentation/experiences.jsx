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
      title: "Stage cours Florent",
      description: "Ateliers pratiques...",
    },
  ];

  return (
    <section class="py-16">
      <div className="grid grid-cols-2 gap-6 items-stretch max-w-7xl mx-auto">
        <section className="bg-white pr-4 flex flex-col items-end h-full">
          {experiences.map(({ date, title }) => (
            <div className="inline-flex items-center" key={title}>
              <p>{formatDate(date)}</p>
              <div className="relative -right-6 bg-primary overflow-visible py-12">
                {/* <span className="block w-2 text-5xl text-center relative text-primary -left-2.5">
                    ●
                  </span> */}
                <span className="block w-2.5 text-3xl text-center relative text-primary -left-2.5">
                  ◉
                </span>
              </div>
            </div>
          ))}
        </section>
        <section className="bg-white pl-4 h-full flex flex-col justify-around">
          {experiences.map(({ title, description }) => (
            <div key={title}>
              <h2 class="text-xl font-bold font-articulat">{title}</h2>
              <p class="italic">{description}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
