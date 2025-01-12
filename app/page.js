import { fetchPageBySlug, fetchAllPages } from "@/lib/api";
export default async function HomePage() {
  const samplePage = await fetchPageBySlug("sample-page")
  const allPages = await fetchAllPages()
  console.log(allPages);
  

  return (
    <div>
      <h1>{samplePage.title.rendered}</h1>
    </div>
  );
}
