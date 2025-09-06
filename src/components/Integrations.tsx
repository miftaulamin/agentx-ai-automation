export const Integrations = () => {
  const integrations = [
    { name: "Facebook", logo: "🔵" },
    { name: "Google", logo: "🔴" },
    { name: "Gmail", logo: "📧" },
    { name: "Slack", logo: "💬" },
    { name: "HubSpot", logo: "🟠" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Zoom", logo: "📹" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Zapier", logo: "⚡" },
    { name: "Notion", logo: "📝" },
    { name: "Airtable", logo: "📊" }
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

        <div className="space-y-12 px-8">
          {/* First row - left to right */}
          <div className="relative py-8 -mx-8">
            <div className="flex animate-marquee whitespace-nowrap px-8">
              {[...firstRow, ...firstRow].map((integration, index) => (
                <div 
                  key={`${integration.name}-${index}`}
                  className="mx-8 flex items-center space-x-4 px-6 py-4 bg-card border border-border rounded-lg shadow-card-dark min-w-[200px] hover:shadow-neon hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="text-3xl">{integration.logo}</span>
                  <span className="font-medium text-foreground">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div className="relative py-8 -mx-8">
            <div className="flex animate-marquee-reverse whitespace-nowrap px-8">
              {[...secondRow, ...secondRow].map((integration, index) => (
                <div 
                  key={`${integration.name}-reverse-${index}`}
                  className="mx-8 flex items-center space-x-4 px-6 py-4 bg-card border border-border rounded-lg shadow-card-dark min-w-[200px] hover:shadow-neon hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="text-3xl">{integration.logo}</span>
                  <span className="font-medium text-foreground">{integration.name}</span>
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