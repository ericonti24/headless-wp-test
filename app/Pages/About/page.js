import { getPagesBySlug } from "@/lib/wordpress";
import { stripHTML } from "@/removeHTML";
import { extractImageURL } from "@/removeHTML";

const AboutPage = async () => {
  const aboutPage = await getPagesBySlug("about");

  if (!aboutPage) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center">
        {aboutPage.title.rendered}
      </h1>
      <div className="mt-6 flex flex-col md:flex-row items-center md:items-start justify-between">
        <p className="text-lg leading-8 text-gray-600 md:mr-6 md:w-1/2">
          {stripHTML(aboutPage.content.rendered)}
        </p>
        {extractImageURL(aboutPage.content.rendered) && (
          <img
            src={extractImageURL(aboutPage.content.rendered)}
            alt="Page Content"
            className="w-full md:w-1/3 max-w-sm h-auto object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default AboutPage;
