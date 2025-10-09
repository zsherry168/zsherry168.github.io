declare module "*.png"  { const src: string; export default src }
declare module "*.jpg"  { const src: string; export default src }
declare module "*.jpeg" { const src: string; export default src }

declare module "*.mdx" {
  import { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
  export const frontmatter: any;
}