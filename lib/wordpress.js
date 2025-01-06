const baseURL = process.env.WORDPRESS_URL;

/**
 * Fetches all pages from the WordPress API.
 * 
 * @returns {Promise<Array>} An array of pages or an empty array if an error occurs.
 */
export const getAllPages = async () => {
  try {
    const response = await fetch(`${baseURL}/index.php/wp-json/wp/v2/pages`);
    if (!response.ok) {
      throw new Error(`Error fetching pages: ${response.statusText}`);
    }
    const pages = await response.json();
    return pages;
  } catch (error) {
    console.error("Failed to fetch pages:", error);
    return [];
  }
};

// /**
//  * Fetches a specific page by slug from the WordPress API.
//  *
//  * @param {string} slug - The slug of the page to fetch.
//  * @returns {Promise<Object|null>} The page object or null if not found.
//  */
// export const getPagesBySlug = async (slug) => {
//   try {
//     const url = `${baseURL}/index.php/wp-json/wp/v2/pages?slug=${slug}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error fetching page with slug "${slug}": ${response.statusText}`);
//     }
//     const pageData = await response.json();
//     return pageData.length ? pageData[0] : null;
//   } catch (error) {
//     console.error(`Failed to fetch page with slug "${slug}":`, error);
//     return null;
//   }
// };

/**
 * Fetch a WordPress page by its slug.
 *
 * @param {string} slug - The slug of the page to fetch.
 * @returns {Promise<Object|null>} The page object or null if not found.
 */
export const getPagesBySlug = async (slug) => {
  try {
    const url = `${baseURL}/index.php/wp-json/wp/v2/pages?slug=${slug}`;
    
    // Log the constructed URL for debugging
    console.log("Fetching URL:", url);

    const response = await fetch(url);

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`Error fetching page with slug "${slug}": ${response.status} ${response.statusText}`);
    }

    const pageData = await response.json();

    // Log the API response for debugging
    console.log("API Response for slug:", slug, pageData);

    // Return the first page object or null if not found
    return pageData.length ? pageData[0] : null;

  } catch (error) {
    // Log the error with detailed context
    console.error(`Failed to fetch page with slug "${slug}":`, error);
    return null;
  }
};


/**
 * Fetches all posts from the WordPress API.
 * 
 * @returns {Promise<Array>} An array of posts or an empty array if an error occurs.
 */
export const getAllPosts = async () => {
  try {
    const url = `${baseURL}/index.php/wp-json/wp/v2/posts`;
    console.log("Fetching posts from:", url);
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text(); // Fetch response text for debugging
      throw new Error(`Error fetching posts: ${response.status} - ${response.statusText} - ${errorText}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};

export async function getPostBySlug(slug) {
  const baseURL = process.env.WORDPRESS_URL;
  const res = await fetch(`${baseURL}/wp-json/wp/v2/posts?slug=${slug}`);
  const posts = await res.json();

  if (!res.ok || posts.length === 0) {
    return null;
  }

  return posts[0]; // Return the first match
}



