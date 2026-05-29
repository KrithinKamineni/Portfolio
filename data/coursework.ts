export type CourseStatus = "COMPLETED" | "RUNNING";

export interface Course {
  id: string;
  name: string;
  color: string;
  status: CourseStatus;
  tags: string[];
}

export interface Semester {
  label: string;
  current?: boolean;
  courses: Course[];
}

export const semesters: Semester[] = [
  {
    label: "Fall 2026",
    current: true,
    courses: [
      { id: "EECS 127", name: "Optimization Models in Engineering", color: "#E8A838", status: "RUNNING", tags: ["Optimization", "ML"] },
      { id: "CS 168", name: "Introduction to the Internet: Architecture & Protocols", color: "#E8A838", status: "RUNNING", tags: ["Networking", "Systems"] },
      { id: "EECS 149", name: "Introduction to Embedded & Cyber Physical Systems", color: "#E8A838", status: "RUNNING", tags: ["Embedded", "Systems"] },
    ],
  },
  {
    label: "Spring 2026",
    courses: [
      { id: "CS 61C", name: "Great Ideas of Computer Architecture (Machine Structures)", color: "#E8A838", status: "COMPLETED", tags: ["Core CS", "C/RISC-V"] },
      { id: "PHYSICS 7B", name: "Thermodynamics & Electromagnetism", color: "#3B82F6", status: "COMPLETED", tags: ["Physics", "EE"] },
      { id: "EDUC 155AC", name: "Pacific Islander & Asian American Educational Struggles", color: "#A855F7", status: "COMPLETED", tags: ["AC", "Humanities"] },
    ],
  },
  {
    label: "Fall 2025",
    courses: [
      { id: "CS 70", name: "Discrete Mathematics & Probability Theory", color: "#22C55E", status: "COMPLETED", tags: ["Discrete Math", "Probability"] },
      { id: "PHYSICS 7A", name: "Mechanics & Wave Motion", color: "#3B82F6", status: "COMPLETED", tags: ["Physics", "Mechanics"] },
      { id: "PBHLTH 116", name: "Seminar on Social, Political, & Ethical Issues in Health & Medicine", color: "#EC4899", status: "COMPLETED", tags: ["Health", "Ethics"] },
      { id: "ASTRON 7A", name: "Introduction to Astrophysics", color: "#EF4444", status: "COMPLETED", tags: ["Astrophysics", "Science"] },
    ],
  },
  {
    label: "Spring 2025",
    courses: [
      { id: "CS 61B", name: "Data Structures & Algorithms", color: "#E8A838", status: "COMPLETED", tags: ["Core CS", "Java"] },
      { id: "EECS 16B", name: "Introduction to Circuits & Devices", color: "#E8A838", status: "COMPLETED", tags: ["EE", "Circuits"] },
      { id: "SASIAN R5B", name: "India in the Writer's Eye", color: "#A855F7", status: "COMPLETED", tags: ["R&C", "Humanities"] },
    ],
  },
  {
    label: "Fall 2024",
    courses: [
      { id: "CS 61A", name: "Structure & Interpretation of Computer Programs", color: "#E8A838", status: "COMPLETED", tags: ["Core CS", "Python"] },
      { id: "EECS 16A", name: "Signals, Dynamical Systems, & Information Processing", color: "#E8A838", status: "COMPLETED", tags: ["EE", "Signals"] },
      { id: "SASIAN R5A", name: "Great Books of India", color: "#A855F7", status: "COMPLETED", tags: ["R&C", "Humanities"] },
    ],
  },
];
