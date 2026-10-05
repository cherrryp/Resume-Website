import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experiences";
import { education as edu } from "@/data/profile";

export default function Experiences() {
  return (
    <section id="experiences" className="sec alt">
      <div className="wrap two">
        <div>
          <SectionHeading eyebrow="Experiences" title="ประสบการณ์" />
          {experiences.map((e) => (
            <article className="timeline" key={e.role}>
              <h3>{e.role}</h3>
              <p className="meta">{e.org} · {e.period}</p>
              <ul className="list">{e.points.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
        <div>
          <SectionHeading eyebrow="Education" title="การศึกษา" />
          <article className="timeline">
            <h3>{edu.degree}</h3>
            <p className="meta">{edu.school}</p>
            <p>{edu.note}<br />{edu.graduation}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
