import { getPagesBySlug } from "@/lib/wordpress";
import { stripHTML } from "@/removeHTML";

const SamplePage = async () => {
  const samplePage = await getPagesBySlug("sample-page");

  if (!samplePage) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center">
        {samplePage.title.rendered}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
        {stripHTML(samplePage.content.rendered)}
      </p>
    </div>
  );
};

export default SamplePage;
