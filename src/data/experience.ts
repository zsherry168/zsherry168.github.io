import pruLogo from "../assets/prudential_logo.png";
import psuLogo from "../assets/psu_logo.png";
import awsLogo from "../assets/aws_logo.png";
import hknLogo from "../assets/hkn_logo.png";
import gwcLogo from "../assets/gwc_logo.png";

export interface ExperienceItem {
  title: string;
  org: string;
  dates: string;
  logoSrc: string;
  location?: string;
  bullets: string[];
}

export const professional: ExperienceItem[] = [
  {
    title: "Software Engineer",
    org: "Prudential Financial",
    location: "Newark, NJ",
    dates: "Jul 2025 – Present",
    logoSrc: pruLogo,
    bullets: [
      "Contribute to the Unified Live Chat platform, a new enterprise solution connecting Prudential’s insurance and retirement customers to live agents",
      "Led early front-end development and integrated the UI with Genesys Cloud via the JavaScript SDK for real-time customer interactions",
      "Extend and maintain a pre-existing JavaScript, HTML, and CSS codebase to implement custom UI features and business logic",
      "Collaborate with multiple cross-functional teams to align engineering decisions, gather technical requirements, and drive consistent delivery across platforms",
      "Partner with UX designers to ensure ADA compliance and alignment with Prudential’s brand and accessibility standards"
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Prudential Financial",
    location: "Newark, NJ",
    dates: "Jun 2024 – Aug 2024",
    logoSrc: pruLogo,
    bullets: [
      "Modernized and automated the claims intake process for Individual and Group Life Insurance in the U.S. Businesses division",
      "Built scalable solutions using Salesforce Platform, OmniStudio, and Apex to replace legacy workflows with streamlined digital experiences",
      "Enhanced operational efficiency and user experience for internal claims processing teams through improved automation and workflow integration"
    ],
  },
];

export const academic: ExperienceItem[] = [
  {
    title: "Research Assistant",
    org: "Penn State College of Engineering",
    location: "University Park, PA",
    dates: "Oct 2024 – May 2025",
    logoSrc: psuLogo,
    bullets: [
      "Conducted research in Penn State’s Natural Language Processing (NLP) Lab to support the development of a robust toxicity evaluation benchmark",
      "Co-developed annotation guidelines and helped manually label ~30,000 examples of toxic content (e.g., hate speech, abusive language) for a large-scale detection dataset",
      "Built a KNN-based one-shot classification baseline using Python, NumPy, and scikit-learn to evaluate dataset quality and generalization, enabling scalable LLM-driven annotation across the remaining 90% of the ~300,000-example dataset"
    ],
  },
  {
    title: "Teaching Assistant",
    org: "Penn State College of Engineering",
    location: "University Park, PA",
    dates: "Jan 2023 – May 2025",
    logoSrc: psuLogo,
    bullets: [
      "Supported 400–800 students per semester across CMPSC 131 (Programming Fundamentals in Python) and CMPSC 132 (Data Structures in Python)",
      "Led 1–2 recitations and held 5–6 office hours weekly, providing individualized guidance and reinforcing key programming concepts",
      "Graded 300+ assignments, exams, and projects each semester, ensuring timely feedback and improved learning outcomes"
    ],
  },
];

export const leadership: ExperienceItem[] = [
  {
    title: "Mentor",
    org: "Penn State EECS Alumni Mentoring Program",
    dates: "Sep 2025 - Present",
    logoSrc: psuLogo,
    bullets: [
      "Mentor current Penn State students, offering career guidance and professional support through the EECS Alumni Mentoring Program",
      "Engage with students through LionLink, Penn State’s alumni–student networking platform, offering guidance and one-on-one career conversations",
    ],
  },
  {
    title: "Mentee",
    org: "AWS She Builds Mentorship Program",
    dates: "Sep 2025 – Present",
    logoSrc: awsLogo,
    bullets: [
      "Selected for a 12-week mentorship program designed to empower women in technology through one-on-one mentorship and leadership development",
      "Participate in weekly sessions focused on professional growth, goal-setting, and career advancement within the tech industry",
    ],
  },
  {
    title: "Mentor",
    org: "Penn State Women in Engineering Program",
    location: "University Park, PA",
    dates: "Mar 2023 – May 2024",
    logoSrc: psuLogo,
    bullets: [
      "Mentored 6 first-year engineering students, offering academic, professional, and personal guidance throughout the year",
      "Led mentees through orientation week and networking events, helping them navigate workshops, connect with alumni, and build confidence in engineering"
    ],
  },
  {
    title: "Study Group Facilitator",
    org: "Penn State Women in Engineering Program",
    location: "University Park, PA",
    dates: "Aug 2023 – Dec 2023",
    logoSrc: psuLogo,
    bullets: [
      "Facilitated weekly Python sessions for CMPSC 131: Introduction to Programming, using slides and practice problems to reinforce programming fundamentals",
      "Retained 10–12 students per week and received a nomination for the WEP Outstanding Facilitator Award for teaching excellence",
    ],
  },
];

export const volunteering: ExperienceItem[] = [
  {
    title: "Peer Tutor",
    org: "IEEE-Eta Kappa Nu Honor Society",
    location: "University Park, PA",
    dates: "Sep 2023 – May 2024",
    logoSrc: hknLogo,
    bullets: [
      "Tutored undergraduate students in computer science courses during weekly help sessions",
      "Collaborated with fellow Eta Kappa Nu members to provide academic support and foster student success within the EECS community",
    ],
  },
  {
    title: "Instructor",
    org: "Girls Who Code",
    location: "University Park, PA",
    dates: "Jan 2024 – May 2024",
    logoSrc: gwcLogo,
    bullets: [
      "Taught Python programming fundamentals to middle and high school students through weekly coding sessions",
      "Collaborated with 9 fellow instructors to design lessons, rotate teaching topics, and provide hands-on support during classes",
    ],
  },
];

export default { professional, academic, leadership, volunteering };