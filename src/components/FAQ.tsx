import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is workflow automation?",
    answer: "Workflow automation is the process of using technology to connect apps, systems, and tasks so they run automatically — without manual effort. Think of it as putting your business on \"autopilot\" for repetitive processes."
  },
  {
    question: "How can automation help my business?",
    answer: "Automation helps you:\n\n• Save time by eliminating repetitive tasks.\n• Reduce errors caused by manual work.\n• Improve team productivity and focus.\n• Connect tools that don't naturally integrate.\n• Scale processes without extra staff."
  },
  {
    question: "What kind of automations do you build?",
    answer: "We create customized automations such as:\n\n• Sales & CRM: lead capture, pipeline updates, follow-up reminders.\n• Marketing: social media posting, email campaigns, audience segmentation.\n• Finance & Reporting: invoice processing, expense tracking, dashboards.\n• Team Collaboration: notifications, project management, approvals.\n• Custom Integrations: connecting unique apps, APIs, or databases.\n\nIf your process is digital, we can probably automate it. 🚀"
  },
  {
    question: "Do I need to be technical or know coding?",
    answer: "Not at all. You explain your process, and we design, build, and deliver the automation for you."
  },
  {
    question: "How is automation different from using tools like Zapier?",
    answer: "• Flexibility: We build solutions tailored exactly to your needs.\n• Scalability: Works for startups and enterprises alike.\n• Ownership: Your data and workflows remain under your control.\n• Cost-effectiveness: Advanced automations without paying per-task limits."
  },
  {
    question: "Can you integrate with my tools?",
    answer: "Yes ✅. If your tool has an API, webhook, or connector, we can integrate it. We work with CRMs, spreadsheets, cloud apps, databases, chat platforms, and more."
  },
  {
    question: "Is automation secure for sensitive business data?",
    answer: "Yes. We follow strict security best practices and ensure automations are built with data privacy in mind. You always maintain full control over where your data is stored and how it flows. 🔒"
  },
  {
    question: "How do you charge for your services?",
    answer: "We offer:\n\n• One-time projects – custom workflow builds tailored to your needs.\n• Ongoing support & maintenance – monthly plans to keep automations running smoothly.\n• Enterprise solutions – large-scale automation strategies for bigger teams.\n\nPricing depends on complexity, integrations, and support level."
  },
  {
    question: "What's the process if I want to get started?",
    answer: "• Discovery Call – Understand your goals & processes.\n• Workflow Design – Map out your automation.\n• Implementation – Build, test, and refine the solution.\n• Delivery & Training – Ensure your team can use it confidently.\n• Ongoing Support (optional) – Continuous monitoring and improvements."
  },
  {
    question: "Do you provide long-term support?",
    answer: "Yes. We can either train your team to manage automations or provide ongoing support where we handle everything for you."
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6">
            <HelpCircle className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about workflow automation and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                
                <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-8">
                      {item.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6 animate-fade-in">
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};