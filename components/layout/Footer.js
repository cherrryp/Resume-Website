import { profile as p } from "@/data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="contact">
      <div className="wrap">
        <h2>ติดต่อ</h2>
        <p>สนใจร่วมงานหรือต้องการข้อมูลเพิ่มเติม ติดต่อได้ตามช่องทางด้านล่าง</p>
        <div className="links">
          <a href={`mailto:${p.email}`}>{p.email}</a>
          <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a>
          <a href={p.linkedin}>LinkedIn</a>
          <a href={p.github}>GitHub</a>
        </div>
        <small>© {new Date().getFullYear()} {p.name}</small>
      </div>
    </footer>
  );
}
