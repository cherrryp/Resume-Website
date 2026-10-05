import { profile as p, facts } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-in">
        <div>
          <p className="status"><span className="pulse" aria-hidden="true" />{p.status}</p>
          <h1>{p.name}</h1>
          <p className="headline">{p.headline}</p>
          <p className="intro">{p.intro}</p>
          <div className="actions">
            <a className="btn primary" href="#projects">Project</a>
            <a className="btn ghost" href={p.resumePdf} download>Download Resume</a>
          </div>
        </div>
        <aside className="panel" aria-label="ข้อมูลโดยย่อ">
          {p.photo && <img className="avatar" src={p.photo} alt={p.name} />}
          <dl>
            {facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
