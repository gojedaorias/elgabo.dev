import { projects } from "@/mocks/projects";
import ProjectPage from "@/screens/Project";
import React from "react";

export async function getProject(title) {
  const project = projects.find((p) => p.title === title);
  return project;
}

export default async function Project({ params }) {
  const project = await getProject(params.project);

  return <ProjectPage project={project} />;
}
