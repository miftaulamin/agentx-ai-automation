export const Integrations = () => {
  const integrations = [
    { name: "Facebook", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg", color: "#1877F2" },
    { name: "Google", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg", color: "#4285F4" },
    { name: "Gmail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg", color: "#EA4335" },
    { name: "Slack", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg", color: "#4A154B" },
    { name: "HubSpot", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg", color: "#FF7A59" },
    { name: "Salesforce", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg", color: "#00A1E0" },
    { name: "Shopify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg", color: "#7AB55C" },
    { name: "Zoom", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg", color: "#2D8CFF" },
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg", color: "#5E5E5E" },
    { name: "Zapier", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg", color: "#FF4A00" },
    { name: "Notion", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg", color: "#000000" },
    { name: "Airtable", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airtable.svg", color: "#18BFFF" }
  ];

  // Split integrations into two rows
  const firstRow = integrations.slice(0, 6);
  const secondRow = integrations.slice(6, 12);

  return (
    <section id="integrations" className="py-24 px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Seamless <span className="bg-gradient-hero bg-clip-text text-transparent">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with your favorite tools and platforms for unified automation workflows.
          </p>
        </div>

        <div className="space-y-6 px-8">
          {/* First row - left to right */}
          <div className="relative py-4 -mx-8 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap px-8">
              {[...firstRow, ...firstRow, ...firstRow].map((integration, index) => (
                <div 
                  key={`${integration.name}-${index}`}
                  className="mx-6 flex items-center justify-center p-4 bg-card/50 border border-border/50 rounded-xl shadow-card-dark min-w-[80px] h-[80px] hover:shadow-neon hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <img 
                    src={integration.logo} 
                    alt={integration.name}
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div className="relative py-4 -mx-8 overflow-hidden">
            <div className="flex animate-marquee-reverse whitespace-nowrap px-8">
              {[...secondRow, ...secondRow, ...secondRow].map((integration, index) => (
                <div 
                  key={`${integration.name}-reverse-${index}`}
                  className="mx-6 flex items-center justify-center p-4 bg-card/50 border border-border/50 rounded-xl shadow-card-dark min-w-[80px] h-[80px] hover:shadow-neon hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <img 
                    src={integration.logo} 
                    alt={integration.name}
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            And many more... We integrate with 200+ platforms and tools.
          </p>
        </div>
      </div>
    </section>
  );
};