import projectCover from "../assets/project_placeholder.jpg";

export interface Project {
  id: number;
  slug: string;
  title: string;
  date: string;
  desc: string;
  img: string;
  link: string;
  featured: boolean;
}

const projects: Project[] = [
  { 
		id: 4, 
    slug: "java-project",
		title: "Java Project", 
		date: "Work In Progress", 
		desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit. 
    Quisque faucibus ex sapien vitae pellentesque sem placerat.`, 
		img: projectCover, 
		link: "/projects", 
		featured: false 
	},
  { 
		id: 3, 
    slug: "personal-website",
		title: "Personal Website", 
		date: "Aug 2025 - Present", 
		desc: `In id cursus mi pretium tellus duis convallis. 
    Tempus leo eu aenean sed diam urna tempor.`, 
		img: projectCover, 
		link: "/projects", 
		featured: true 
	},
  { 
		id: 2, 
    slug: "chit-chat",
		title: "Chit Chat", 
		date: "2023 (Refactored 2025)", 
		desc: `Quisque faucibus ex sapien vitae pellentesque sem placerat. 
    In id cursus mi pretium tellus duis convallis.`, 
		img: projectCover, 
		link: "/projects", 
		featured: true 
	},
  { 
		id: 1, 
    slug: "nittany-reads",
		title: "Nittany Reads", 
		date: "2023 (Refactored 2025)", 
		desc: `Tempus leo eu aenean sed diam urna tempor. 
    Pulvinar vivamus fringilla lacus nec metus bibendum egestas.`, 
		img: projectCover, 
		link: "/projects", 
		featured: true 
	},
];

export default projects;