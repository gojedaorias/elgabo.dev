import Layout from "@/components/Layout";
import Content from "./Content";
import Features from "./Features";
import Introduction from "./Introduction";

interface Project {
  title: string;
  description: string;
  features: any[];
  images: string[];
  introduction: string;
  problem: any[];
  solution: any[];
  benefits: any[];
  introductions: any[];
  [key: string]: any;
}

interface ProjectPageProps {
  project: Project;
}

export const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <Layout title="project">
      <Content project={project} />
      <Introduction project={project} />
      <Features project={project} />
    </Layout>
  );
};

export default ProjectPage;
