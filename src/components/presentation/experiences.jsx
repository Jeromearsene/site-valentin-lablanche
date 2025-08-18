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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-tomarik">
            Expériences
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        {experiences.map(({ date, title, description }, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_0.5rem_1fr] items-stretch group hover:bg-opacity-50 transition-colors duration-300"
          >
            <section className="bg-white pr-8 sm:pr-12 flex flex-col justify-around items-end py-16 group-hover:bg-custom-white transition-colors duration-300">
              <div className="inline-flex items-center group-hover:scale-110 group-hover:font-bold transition">
                <p>{formatDate(date)}</p>
              </div>
            </section>

            <section className="bg-primary flex flex-col justify-around py-16 transition-colors duration-300">
              <span className="block w-8 text-3xl group-hover:scale-125 transition text-center relative text-primary -left-3">
                ◉
              </span>
            </section>

            <section className="bg-white pl-8 sm:pl-12 flex flex-col justify-around py-16 group-hover:bg-custom-white transition-colors duration-300">
              <h2 className="text-xl font-bold font-articulat group-hover:text-secondary group-hover:scale-105 transition">
                {title}
              </h2>
              <p className="italic">{description}</p>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
