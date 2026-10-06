export const projects = [
  {
    name: "Pai Nam Nae — Carpooling Web Application",
    year: "2026",
    tags: ["Full Stack", "Testing"],
    stack: "Nuxt.js · Vue · Express.js · Prisma · PostgreSQL · Supabase · Robot Framework",
    image: "/projects/pai-nam-nae.png",
    points: [
      "เว็บแชร์รถร่วมเดินทางที่มี workflow สำหรับ Passenger, Driver และ Admin",
      "พัฒนา RESTful API ด้วย Express.js เชื่อม PostgreSQL ผ่าน Prisma พร้อมระบบอัปโหลดไฟล์",
      "ออกแบบ Role-based access control ตามบทบาทและสิทธิ์",
      "เขียน Automated UAT และ Unit Test ครอบคลุมรายงาน เคส ค้นหา/กรอง อัปโหลดไฟล์ และสิทธิ์",
    ],
    href: "#", // TODO: ลิงก์ GitHub ของโปรเจกต์
  },
  {
    name: "Learning Management System with Course Recommendation",
    year: "2026",
    tags: ["Front-end", "Full Stack"],
    stack: "React · Supabase · Python",
    image: "/projects/lms.png",
    points: [
      "พัฒนา LMS สำหรับค้นหา ดูรายละเอียด และจัดการคอร์ส พร้อมระบบโปรไฟล์และยืนยันตัวตน",
      "พัฒนาระบบค้นหาและกรองคอร์ส พร้อมระบบจัดการคอร์สและข้อมูลผู้ใช้",
      "พัฒนาระบบแนะนำคอร์สเฉพาะบุคคลด้วย Python โดยวิเคราะห์ข้อมูลโปรไฟล์และเนื้อหาคอร์ส",
      "พัฒนาต้นแบบ Chatbot สำหรับช่วยค้นหาและแนะนำคอร์ส โดยเชื่อมต่อกับ Ollama และปรับแต่งการทำงานให้เหมาะกับระบบ",
    ],
    href: "#",
  },
  {
    name: "Student Short Notes Web Application",
    year: "2025",
    tags: ["Back-end"],
    stack: "Express.js · MongoDB",
    image: "/projects/student-notes.png",
    points: [
      "RESTful backend ด้วย Express.js และ MongoDB",
      "ระบบ RBAC และแดชบอร์ดผู้ดูแลสำหรับติดตามผู้ใช้และรายงาน",
    ],
    href: "#",
  },
];