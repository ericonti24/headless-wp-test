const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error("Missing WORDPRESS_API_URL environment variable");
}

/**
 * Fetch a page by its slug from the WordPress API.
 * @param {string} slug - The slug of the page to fetch.
 * @returns {Promise<Object|null>} The page data or null if not found.
 */
export async function fetchPageBySlug(slug) {
  try {
    // Construct the URL to fetch the page by its slug
    const res = await fetch(`${WORDPRESS_API_URL}pages?slug=${slug}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch page: ${res.statusText}`);
    }

    const pages = await res.json();

    if (pages.length === 0) {
      throw new Error(`Page not found for slug: ${slug}`);
    }

    return pages[0]; // Return the first matching page
  } catch (error) {
    console.error("Error fetching page:", error.message);
    return null; // Return null if the fetch fails
  }
}

/**
 * Fetch all pages from the WordPress API.
 * @returns {Promise<Array>} An array of all pages or an empty array if none are found.
 */
export async function fetchAllPages() {
  try {
    // Fetch all pages
    const res = await fetch(`${WORDPRESS_API_URL}pages`);

    if (!res.ok) {
      throw new Error(`Failed to fetch pages: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching all pages:", error.message);
    return []; // Return an empty array if the fetch fails
  }
}
