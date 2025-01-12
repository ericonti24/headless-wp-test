import { fetchPageBySlug } from "@/lib/api";
import { stripHTML, extractImageURL } from "@/removeHTML";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AboutPage() {
  const aboutPage = await fetchPageBySlug("about");

  // Extract the image URL from the content
  const imageURL = extractImageURL(aboutPage.content.rendered);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Card for the About Content */}
      <Card className="shadow-lg border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            {stripHTML(aboutPage.title.rendered)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Flex layout for text and image */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Text Section */}
            <div className="flex-1">
              {/* Render the text content with the required spacing */}
              <div
                className="text-lg text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: aboutPage.content.rendered.replace(/<figure[^>]+>.*?<\/figure>/, ""), // Remove <figure> tag containing the image
                }}
              />
            </div>

            {/* Image Section */}
            {imageURL && (
              <div className="flex-1">
                <img 
                  src={imageURL} 
                  alt="About Image" 
                  className="rounded-lg w-full md:w-1/1" 
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

