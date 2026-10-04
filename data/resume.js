export const resume = {
  name: "Kanyapat Chaiphad",
  title: "Full Stack Developer · Software Tester",
  summary:
    "นักศึกษาวิทยาการคอมพิวเตอร์ปี 4 ที่มีประสบการณ์พัฒนาเว็บแอปพลิเคชันแบบ Full-stack และการทดสอบซอฟต์แวร์ ทั้งการทดสอบด้วยมือและการเขียน Automated Test ด้วย Robot Framework กำลังมองหาโอกาสในตำแหน่ง Full Stack Developer เพื่อสร้างเว็บแอปพลิเคชันที่เชื่อถือได้และดูแลรักษาง่าย",
  contact: [
    { label: "โทรศัพท์", value: "+66 99 960 8955", href: "tel:+66999608955" },
    { label: "อีเมล", value: "kanyapat.chaiphad@gmail.com", href: "mailto:kanyapat.chaiphad@gmail.com" },
    { label: "LinkedIn", value: "kanyapat-chaiphad", href: "https://www.linkedin.com/in/kanyapat-chaiphad" },
    { label: "GitHub", value: "GitHub", href: "#" }, // TODO: ใส่ลิงก์ GitHub ของคุณ
    { label: "ที่อยู่", value: "Khon Kaen, Thailand" },
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Khon Kaen University, College of Computing",
    period: "2023 – ปัจจุบัน",
    note: "GPA 3.57/4.00 · คาดว่าจะสำเร็จการศึกษา พฤศจิกายน 2026",
  },
  skills: [
    { group: "Programming & Web", items: ["JavaScript (Node.js, Express.js)", "Java (Spring Boot)", "React", "Next.js", "Kotlin", "HTML", "CSS"] },
    { group: "Backend & Databases", items: ["RESTful API", "MySQL", "PostgreSQL", "MongoDB", "Supabase", "Prisma"] },
    { group: "Testing & Tools", items: ["Manual Testing", "Test Case Design", "UAT", "Unit Testing", "API Testing (Postman)", "Robot Framework", "SeleniumLibrary", "Git / GitHub"] },
  ],
  experience: [
    {
      role: "Software Tester Intern",
      org: "G-Able — IGA Project (KBTG)",
      period: "เมษายน – ตุลาคม 2026",
      points: [
        "ทดสอบการทำงานและทดสอบด้วยมือของระบบ User Access Management (UAM) ระดับองค์กร",
        "วิเคราะห์ความต้องการของระบบและ end-to-end workflow ระหว่าง source system, application และ target system",
        "ตรวจสอบ Source-to-Target และทำ Parallel Run เพื่อสืบหาความคลาดเคลื่อนของข้อมูล",
        "เตรียมข้อมูลทดสอบ ออกแบบ test scenario รายงาน defect และประสานงานกับทีมที่เกี่ยวข้องเพื่อยืนยันการแก้ไข",
      ],
    },
  ],
  projects: [
    {
      name: "Pai Nam Nae — Carpooling Web Application",
      stack: "Nuxt.js, Express.js, Robot Framework, Prisma, PostgreSQL, Supabase",
      year: "2026",
      href: "#",
      points: [
        "พัฒนาเว็บแอปแชร์รถร่วมเดินทางแบบ Full-stack ที่มี workflow สำหรับ Passenger, Driver และ Admin",
        "พัฒนา RESTful API ด้วย Express.js และเชื่อมต่อ PostgreSQL ผ่าน Prisma",
        "ออกแบบ Role-based access control ตามบทบาทและสิทธิ์ของผู้ใช้",
        "เขียน Automated UAT และ Unit Test ด้วย Robot Framework และ SeleniumLibrary ครอบคลุมการรายงาน การจัดการเคส การค้นหา/กรอง การอัปโหลดไฟล์ และการควบคุมสิทธิ์",
      ],
    },
    {
      name: "Learning Management System with Course Recommendation",
      stack: "React, Supabase, Python",
      year: "2026",
      href: "#",
      points: [
        "พัฒนา LMS ด้วย React และ Supabase มีระบบค้นหาคอร์ส หน้ารายละเอียดคอร์ส และโปรไฟล์ผู้ใช้",
        "ทำระบบยืนยันตัวตนและเชื่อมต่อ frontend กับ Supabase",
        "พัฒนาระบบแนะนำคอร์สด้วย Python จากข้อมูลโปรไฟล์ผู้ใช้และข้อมูลคอร์ส",
        "สร้างต้นแบบแชตบอตช่วยค้นหาและนำทางข้อมูลคอร์ส",
      ],
    },
    {
      name: "Student Short Notes Web Application",
      stack: "Express.js, MongoDB",
      year: "2025",
      href: "#",
      points: [
        "พัฒนา RESTful backend ด้วย Express.js และ MongoDB",
        "ทำ RBAC และแดชบอร์ดผู้ดูแลระบบสำหรับติดตามผู้ใช้และรายงาน",
      ],
    },
  ],
};
