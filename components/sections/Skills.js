import SectionHeading from "@/components/ui/SectionHeading";
import TagList from "@/components/ui/TagList";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="sec alt">
      <div className="wrap">
        <SectionHeading eyebrow="Skills" title="ทักษะ" />
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <article className="card" key={s.title}>
                <h3>{s.group}</h3>
                <TagList items={s.items} />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
