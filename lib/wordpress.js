const baseURL = process.env.WORDPRESS_URL;

/**
 * Fetches all pages from the WordPress API.
 * 
 * @returns {Promise<Array>} An array of pages or an empty array if an error occurs.
 */
export const getAllPages = async () => {
  try {
    const response = await fetch(`${baseURL}index.php/wp-json/wp/v2/pages`);
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

/**
 * Fetches a specific page by its slug from the WordPress API.
 * 
 * @param {string} slug - The slug of the page to fetch.
 * @returns {Promise<Object|null>} The page object if found, or null if not found.
 */
export const getPagesBySlug = async (slug) => {
  try {
    const response = await fetch(
      `${baseURL}index.php/wp-json/wp/v2/pages?slug=${slug}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching page with slug "${slug}": ${response.statusText}`);
    }
    const pages = await response.json();

    // Return the first page object if available, or null otherwise
    return pages.length ? pages[0] : null;
  } catch (error) {
    console.error(`Failed to fetch page with slug "${slug}":`, error);
    return null;
  }
};

