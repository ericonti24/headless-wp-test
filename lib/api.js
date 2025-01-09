const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchPageBySlug(slug) {
  const res = await fetch(`${API_URL}pages?slug=${slug}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch page: ${res.statusText}`);
  }

  const pages = await res.json();
  return pages.length > 0 ? pages[0] : null;
}
