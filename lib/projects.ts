import { projects } from '@/mocks/projects';

export async function getProject(title: string) {
  const project = projects.find((p) => p.title === title);
  return project;
}

export { projects };