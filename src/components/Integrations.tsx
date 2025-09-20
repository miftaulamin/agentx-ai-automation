export const Integrations = () => {
  const integrations = [
    { name: "Facebook", logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
    { name: "Google", logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg" },
    { name: "Gmail", logo: "https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" },
    { name: "Slack", logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
    { name: "HubSpot", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
    { name: "Salesforce", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
    { name: "Shopify", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
    { name: "Zoom", logo: "https://www.vectorlogo.zone/logos/zoom/zoom-icon.svg" },
    { name: "Microsoft", logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" },
    { name: "Zapier", logo: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
    { name: "Notion", logo: "https://www.vectorlogo.zone/logos/notionhq/notionhq-icon.svg" },
    { name: "Airtable", logo: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg" },
    { name: "LinkedIn", logo: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" },
    { name: "Twitter", logo: "https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg" },
    { name: "Trello", logo: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg" },
    { name: "Asana", logo: "https://www.vectorlogo.zone/logos/asana/asana-icon.svg" },
    { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "Stripe", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
    { name: "PayPal", logo: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" },
    { name: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    { name: "GitLab", logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
    { name: "Jira", logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
    { name: "Dropbox", logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg" },
    { name: "Discord", logo: "https://www.vectorlogo.zone/logos/discordapp/discordapp-icon.svg" }
  ];

  // Split integrations into two rows
  const half = Math.ceil(integrations.length / 2);
  const firstRow = integrations.slice(0, half);
  const secondRow = integrations.slice(half);

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

        <div className="space-y-6">
          {/* First row - left to right */}
          <div className="relative py-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...firstRow, ...firstRow].map((integration, index) => (
                <div 
                  key={`${integration.name}-${index}`}
                  className="px-6 flex items-center justify-center"
                >
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    loading="lazy"
                    className="h-10 w-auto md:h-12 lg:h-14 object-contain"
                    onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div className="relative py-4 overflow-hidden">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[...secondRow, ...secondRow].map((integration, index) => (
                <div 
                  key={`${integration.name}-reverse-${index}`}
                  className="px-6 flex items-center justify-center"
                >
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`}
                    loading="lazy"
                    className="h-10 w-auto md:h-12 lg:h-14 object-contain"
                    onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
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