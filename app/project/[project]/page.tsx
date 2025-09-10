import { getProject } from '@/lib/projects';
import ProjectPage from '@/screens/Project';
import React from 'react';

interface ProjectParams {
  params: Promise<{
    project: string;
  }>;
}

export default async function Project({ params }: ProjectParams) {
  const { project: projectTitle } = await params;
  const project = await getProject(projectTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectPage project={project} />;
}
