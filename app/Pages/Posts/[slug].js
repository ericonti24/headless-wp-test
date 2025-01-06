import { getPostBySlug, getAllPosts } from "@/lib/wordpress";

const PostPage = async ({ params }) => {
  const { slug } = params; // Extract the slug from the URL
  const post = await getPostBySlug(slug);

  if (!post) {
    return <h1>404 - Post Not Found</h1>;
  }

  console.log("params", params)

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

// Tell Next.js to pre-render paths for all posts at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default PostPage;
