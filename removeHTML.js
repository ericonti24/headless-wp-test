import he from "he";

// Function to strip HTML tags and decode HTML entities
export const stripHTML = (html) => {
  if (!html) return '';

  // Remove all HTML tags using regex
  const cleanHTML = html.replace(/<[^>]*>/g, '').trim();

  // Decode HTML entities
  return he.decode(cleanHTML);
};

// Function to extract the first image URL from content
export const extractImageURL = (html) => {
  const regex = /<img[^>]+src="([^">]+)"/i; // Matches the `src` attribute of the first <img> tag
  const match = html.match(regex);
  return match ? match[1] : null; // Return the URL or null if no image is found
};
