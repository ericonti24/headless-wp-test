// wordpress.js
const WORDPRESS_BASE_URL = 'http://localhost/wordpress/index.php';

export async function fetchPages() {
    try {
        const response = await fetch(`${WORDPRESS_BASE_URL}/wp-json/wp/v2/pages`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pages:', error);
        throw error;
    }
}
