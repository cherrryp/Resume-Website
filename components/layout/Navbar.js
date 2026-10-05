import { profile } from "@/data/profile";

const links = [
  ["#roles", "Roles"],
  ["#skills", "Skills"],
  ["#projects", "Projects"],
  ["#experiences", "Experience(s)"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top">{profile.name}</a>
        <nav aria-label="เมนูหลัก">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
