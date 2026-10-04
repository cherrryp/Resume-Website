const me = {
  name: "Kanyapat Chaiphad",
  title: "Full Stack Developer · Software Tester",
  intro:
    "นักศึกษาวิทยาการคอมพิวเตอร์ปี 4 มหาวิทยาลัยขอนแก่น มีประสบการณ์พัฒนาเว็บแอปแบบ Full-Stack และทดสอบซอฟต์แวร์ ทั้งแบบ Manual และ Automation",
  phone: "+66 99 960 8955",
  email: "kanyapat.chaiphad@gmail.com",
  linkedin: "https://www.linkedin.com/in/kanyapat-chaiphad",
  github: "https://github.com/cherrryp", 
  photo: null,
  resumePdf: "/resume.pdf" 
};

const positions = ["Full Stack Developer", "Software Tester / QA Engineer"];

const interests = [
  { title: "พัฒนาเว็บแอปแบบ Full-stack", text: "ออกแบบ API ฐานข้อมูล และหน้าเว็บให้ทำงานร่วมกันได้อย่างเป็นระบบ" },
  { title: "Test Automation", text: "เขียน UAT และ Unit Test อัตโนมัติด้วย Robot Framework" },
  { title: "Backend & Database", text: "RESTful API, Prisma, PostgreSQL และการควบคุมสิทธิ์ผู้ใช้ (RBAC)" },
  { title: "คุณภาพซอฟต์แวร์", text: "วิเคราะห์ requirement ออกแบบ test scenario และตรวจสอบความถูกต้องของข้อมูล" },
];

const skills = [
  { group: "Programming & Web", items: ["JavaScript", "Node.js", "Express.js", "React", "Next.js", "Java (Spring Boot)", "Kotlin", "HTML", "CSS"] },
  { group: "Backend & Databases", items: ["RESTful API", "MySQL", "PostgreSQL", "MongoDB", "Supabase", "Prisma"] },
  { group: "Testing & Tools", items: ["Manual Testing", "Test Case Design", "UAT", "Unit Testing", "Postman", "Robot Framework", "SeleniumLibrary", "Git / GitHub"] },
];

const experience = {
  role: "Software Tester Intern",
  org: "G-Able — IGA Project (KBTG)",
  period: "April – October 2026",
  points: [
    "ทดสอบการทำงานของระบบ User Access Management (UAM) ระดับองค์กร",
    "วิเคราะห์ requirement และ end-to-end workflow ระหว่างระบบต้นทางและปลายทาง",
    "ตรวจสอบ Source-to-Target และทำ Parallel Run เพื่อหาความคลาดเคลื่อนของข้อมูล",
    "เตรียมข้อมูลทดสอบ ออกแบบ scenario รายงาน defect และประสานงานเพื่อยืนยันการแก้ไข",
  ],
};

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Khon Kaen University, College of Computing",
  note: "2023 – ปัจจุบัน · GPA 3.57/4.00 · คาดว่าจะจบ พฤศจิกายน 2026",
};

const projects = [
  {
    name: "Pai Nam Nae — Carpooling Web App",
    stack: "Nuxt.js, Express.js, Prisma, PostgreSQL, Supabase, Robot Framework",
    desc: "เว็บแชร์รถร่วมเดินทางที่มี workflow สำหรับ Passenger, Driver และ Admin พร้อม RBAC และชุดทดสอบอัตโนมัติ",
    href: "#",
  },
  {
    name: "Learning Management System",
    stack: "React, Supabase, Python",
    desc: "ระบบเรียนออนไลน์พร้อมระบบแนะนำคอร์สตามโปรไฟล์ผู้ใช้ และต้นแบบแชตบอตช่วยค้นหาคอร์ส",
    href: "#",
  },
  {
    name: "Student Short Notes Web App",
    stack: "Express.js, MongoDB",
    desc: "ระบบโน้ตสำหรับนักศึกษา มี RESTful backend, RBAC และแดชบอร์ดผู้ดูแลระบบ",
    href: "#",
  },
];

// ───────── PAGE ─────────
export default function Home() {
  const initials = "KC";
  return (
    <>
      <header className="top">
        <a className="brand" href="#hero">
          <span className="dot" aria-hidden="true" />
          {me.name}
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="photo">
            {me.photo ? <img src={me.photo} alt={me.name} /> : <span>{initials}</span>}
          </div>
          <div className="hero-text">
            <h1>Hello</h1>
            <h2>{me.title}</h2>
            <p>{me.intro}</p>
            <div className="circles">
              <a className="circle c1" href={me.resumePdf || "#resume"} {...(me.resumePdf ? { download: true } : {})}>Resume</a>
              <a className="circle c2" href="#projects">Projects</a>
              <a className="circle c3" href="#contact">Contact</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="block">
          <div className="wrap">
            <h2>ตำแหน่งที่สนใจ</h2>
            <ul className="tags big">
              {positions.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <h2>สนใจด้านอะไร</h2>
            <div className="grid">
              {interests.map((i) => (
                <div className="card" key={i.title}>
                  <h3>{i.title}</h3>
                  <p>{i.text}</p>
                </div>
              ))}
            </div>

            <h2>ทักษะ</h2>
            {skills.map((s) => (
              <div className="skill" key={s.group}>
                <h3>{s.group}</h3>
                <ul className="tags">
                  {s.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="block alt">
          <div className="wrap">
            <h2>ประสบการณ์</h2>
            <article>
              <h3>{experience.role}</h3>
              <p className="meta">{experience.org} · {experience.period}</p>
              <ul className="list">
                {experience.points.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>

            <h2>การศึกษา</h2>
            <article>
              <h3>{education.degree}</h3>
              <p className="meta">{education.school}</p>
              <p>{education.note}</p>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="block">
          <div className="wrap">
            <h2>ผลงาน</h2>
            <div className="grid">
              {projects.map((p) => (
                <article className="card" key={p.name}>
                  <h3>{p.name}</h3>
                  <p className="meta">{p.stack}</p>
                  <p>{p.desc}</p>
                  {p.href !== "#" && <a href={p.href}>ดูโปรเจกต์</a>}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="foot">
        <div className="wrap foot-grid">
          <div><h4>Phone</h4><a href={`tel:${me.phone.replace(/\s/g, "")}`}>{me.phone}</a></div>
          <div><h4>Email</h4><a href={`mailto:${me.email}`}>{me.email}</a></div>
          <div>
            <h4>Follow Me</h4>
            <a href={me.linkedin}>LinkedIn</a>{" "}
            <a href={me.github}>GitHub</a>
          </div>
          <small>© {new Date().getFullYear()} {me.name}</small>
        </div>
      </footer>
    </>
  );
}