export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  video?: string;
  image?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wedding Halls",
    description:
      "A streamlined platform that lets couples browse, compare, and book wedding halls, catering, and transportation — all in one place. With immersive 360° virtual venue tours, users can explore available halls remotely, eliminating the need for in-person visits and saving valuable time during the planning process.",
    tags: ["Next.js", "MongoDB", "nest.js"],
    github: "https://github.com/yara769/wedding-Halls.git",
    video: "/videos/wedinghall_demo.mp4",
    image: "/images/image.png",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Precision",
    description:
      "A web-based task management system that streamlines team productivity by enabling real-time task tracking, automated progress updates, and insightful dashboard analytics for developers and managers..",
    tags: ["React", "TypeScript", "vite", "mongoose"],
    github: "https://github.com/yara769/Precision-App.git",
    video: "https://demo.com",
    image: "/images/precision.png",
    gradient: "from-violet-500 via-fuchsia-500 to-rose-500",
  },
  {
    id: 3,
    title: "Learnovo",
    description:
      "Learnovo is a smart, web-based management platform for training institutes that replaces manual paperwork and spreadsheets with automated workflows, quick course registration, real-time progress tracking, and instant digital certificate generation..",
    tags: ["nest.js", "MongoDB", "react"],
    github: "https://github.com/yara769/learnovo.git",
    video: "https://demo.com",
    image: "/images/learnovoApp.jpeg",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
];
