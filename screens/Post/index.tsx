import Layout from "@/components/Layout";
import Content from "./Content";

interface Frontmatter {
  title: string;
  date: string;
  image: string;
}

interface PostPageProps {
  contentHtml: string;
  frontmatter: Frontmatter;
}

export const PostPage = ({ contentHtml, frontmatter }: PostPageProps) => {
  return (
    <Layout title="post">
      <Content contentHtml={contentHtml} frontmatter={frontmatter} />
    </Layout>
  );
};

export default PostPage;
