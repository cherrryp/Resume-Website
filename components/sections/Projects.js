import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <SectionHeading eyebrow="Projects" title="ผลงาน" />
        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <header>
                <h3>{p.href !== "#" ? <a href={p.href}>{p.name}</a> : p.name}</h3>
                <span className="year">{p.year}</span>
              </header>
              <div className="chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              <p className="stack">{p.stack}</p>
              <ul className="list">{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
