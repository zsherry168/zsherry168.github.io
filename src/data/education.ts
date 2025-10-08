import psuLogo from "../assets/psu_logo.png";

export interface EducationItem {
  id: string;
  school: string;
  detailLines: string[];
  logoSrc: string;
}

const education: EducationItem[] = [
  {
    id: "psu",
    school: "The Pennsylvania State University",
    detailLines: ["B.S. in Computer Science", "Minor in Mathematics"],
    logoSrc: psuLogo,
  },
];

export default education;