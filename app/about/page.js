import { fetchPageBySlug } from "@/lib/api";

export default async function AboutPage() {
  const page = await fetchPageBySlug("about");

  if (!page) {
    return <p>Content not found.</p>;
  }

  return (
    <div>
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}
