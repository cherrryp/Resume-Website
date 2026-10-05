import SectionHeading from "@/components/ui/SectionHeading";
import TagList from "@/components/ui/TagList";
import { roles } from "@/data/roles";

export default function Roles() {
  return (
    <section id="roles" className="sec">
      <div className="wrap">
        <SectionHeading eyebrow="Roles" title="ตำแหน่งที่สนใจ" />
        <div className="grid3">
          {roles.map((r) => (
            <article className="card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.pitch}</p>
              <TagList items={r.stack} />
              <p className="proof">{r.proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
