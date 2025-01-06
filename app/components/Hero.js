import React from "react";
import { getPagesBySlug } from "@/lib/wordpress";
import { stripHTML } from "@/removeHTML";
import { extractImageURL } from "@/removeHTML";

// export default async function Hero() {

//   const homePage = await getPagesBySlug("home-page");

//   if (!homePage) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <section className="flex-grow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center">
//             {homePage && (
//                     <div key={homePage.id}>
//                         <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
//                             {homePage.title.rendered}
//                         </h1>
//                     <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
//                         {stripHTML(homePage.content.rendered)}
//                     </p>
//                     {extractImageURL(homePage.content.rendered) && (
//                         <img
//                         src={extractImageURL(homePage.content.rendered)}
//                         alt="Page Content"
//                         className="mx-auto"
//                         />
//                     )}
//                     </div>
//                 )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

export default async function Hero() {
  try {
    const homePage = await getPagesBySlug("home-page");
    console.log("Fetched Home Page:", homePage);

    if (!homePage) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
        </div>
      );
    }

    return (
      <section className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              {homePage.title.rendered}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              {stripHTML(homePage.content.rendered)}
            </p>
            {extractImageURL(homePage.content.rendered) && (
              <img
                src={extractImageURL(homePage.content.rendered)}
                alt="Page Content"
                className="mx-auto"
              />
            )}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error in Hero component:", error);
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center">Error Loading Page</h1>
      </div>
    );
  }
}
