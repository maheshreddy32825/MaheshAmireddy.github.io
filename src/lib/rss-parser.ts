import { parseStringPromise } from 'xml2js';

interface BlogPost {
  title: string;
  url: string;
  summary: string;
  date: string;
  tags: string[];
}

export async function fetchMediumArticles(): Promise<BlogPost[]> {
  try {
    const rssFeedUrl = 'https://medium.com/feed/@mahesh.r0608';
    
    const response = await fetch(rssFeedUrl);
    if (!response.ok) {
      console.error('Failed to fetch Medium RSS feed:', response.statusText);
      return [];
    }
    
    const feedXml = await response.text();
    const parsedFeed = await parseStringPromise(feedXml);
    
    // Extract items from the RSS feed
    const items = parsedFeed.rss?.channel?.[0]?.item || [];
    
    const articles: BlogPost[] = items.map((item: any) => {
      const title = item.title?.[0] || 'Untitled';
      const link = item.link?.[0] || '';
      const description = item.description?.[0] || item.summary?.[0] || '';
      const pubDate = item.pubDate?.[0] || new Date().toISOString();
      const category = item.category || [];
      
      // Extract tags from categories
      const tags = category.map((cat: any) => typeof cat === 'string' ? cat : cat._);
      
      // Clean up HTML from description
      const cleanSummary = description
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .substring(0, 150) // Limit to 150 characters
        .trim() + '...';
      
      return {
        title,
        url: link,
        summary: cleanSummary,
        date: new Date(pubDate).toISOString().split('T')[0], // YYYY-MM-DD format
        tags: tags.length > 0 ? tags : ['DevOps']
      };
    });
    
    // Sort by date, newest first
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
}
