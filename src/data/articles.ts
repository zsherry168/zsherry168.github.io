import articleCover from "../assets/article_placeholder.jpg";
import snowflakeNYCCover from "../assets/snowflake_nyc_cover.jpg";

export interface Article {
  id: number;
  title: string;
  date: string;
  desc: string;
  img: string;
  link: string;
}

const articles: Article[] = [
  { 
    id: 5, 
    title: "AWS She Builds Mentorship Program", 
    date: "November DD, 2025", 
    desc: `In id cursus mi pretium tellus duis convallis. 
    Tempus leo eu aenean sed diam urna tempor. `, 
    img: articleCover, 
    link: "/blogs/blog-5" 
  },
  { 
    id: 4, 
    title: "Dell Technologies Forum", 
    date: "November DD, 2025", 
    desc: `Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
    Iaculis massa nisl malesuada lacinia integer nunc posuere.`, 
    img: articleCover, 
    link: "/blogs/blog-4" 
  },
  { 
    id: 3, 
    title: "Snowflake BUILD 2025", 
    date: "October DD, 2025", 
    desc: `Ut hendrerit semper vel class aptent taciti sociosqu. 
    Ad litora torquent per conubia nostra inceptos himenaeos.`, 
    img: articleCover, 
    link: "/blogs/blog-3" 
  },
  { 
    id: 2, 
    title: "MetLife 2025 Triangle Tech X", 
    date: "October DD, 2025", 
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit. 
    Quisque faucibus ex sapien vitae pellentesque sem placerat.`, 
    img: articleCover, 
    link: "/blogs/blog-2" 
  },
  { 
    id: 1, 
    title: "Inside the Data Revolution", 
    date: "October 04, 2025", 
    desc: `Key takeaways from Snowflake World Tour NYC 2025 — 
    from building trustworthy AI with Nasdaq to lessons in 
    scaling technology and credibility.`, 
    img: snowflakeNYCCover, 
    link: "/blogs/blog-1" 
  },
];

export default articles;