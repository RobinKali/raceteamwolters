export async function GET() {
  try {
    // In production, fetch from the actual Flarum instance
    // Important: Flarum API might require an API key or proper CORS setup
    // const flarumUrl = import.meta.env.PUBLIC_FLARUM_URL || 'https://forum.raceteamwolters.nl';
    // const res = await fetch(`${flarumUrl}/api/discussions?sort=-createdAt&page[limit]=3`);
    // const data = await res.json();
    
    // For now, we return mock data since Flarum isn't live here
    const mockData = {
      data: [
        {
          id: "1",
          type: "discussions",
          attributes: {
            title: "Welkom bij het nieuwe Race Team Wolters Forum!",
            slug: "welkom-bij-rtw-forum",
            createdAt: new Date().toISOString(),
            lastPostedAt: new Date().toISOString()
          }
        },
        {
          id: "2",
          type: "discussions",
          attributes: {
            title: "Inschrijvingen Endurance Cup 2026 geopend",
            slug: "inschrijvingen-endurance-cup-2026",
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            lastPostedAt: new Date(Date.now() - 3600000).toISOString()
          }
        },
        {
          id: "3",
          type: "discussions",
          attributes: {
            title: "Setup delen: Porsche GT3 op Spa",
            slug: "setup-delen-porsche-gt3-spa",
            createdAt: new Date(Date.now() - 172800000).toISOString(),
            lastPostedAt: new Date(Date.now() - 86400000).toISOString()
          }
        }
      ]
    };

    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch discussions" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
