// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Blog from "../pages/Blog";
import ProjectArticle from "../pages/ProjectArticle";
import BlogArticle from "../pages/BlogArticle";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects/:slug" element={<ProjectArticle/>} />
        <Route path="blog/:slug" element={<BlogArticle/>} />
      </Route>
    </Routes>
  );
}
