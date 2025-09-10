import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface Post {
  id: string;
  type: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  [key: string]: any;
}

export const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const slug = file.replace(/\.md$/, "");

      return {
        id: slug,
        slug,
        type: data.type || 'article',
        title: data.title || '',
        date: data.date || '',
        image: data.image || '',
        ...data,
      };
    });
};

interface PostContent {
  contentHtml: string;
  title: string;
  date: string;
  image: string;
  [key: string]: any;
}

export const getPostContent = async (slug: string): Promise<PostContent> => {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { 
    contentHtml, 
    title: data.title || '',
    date: data.date || '',
    image: data.image || '',
    ...data 
  };
};
