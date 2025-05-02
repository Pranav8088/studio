import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Lightbulb, Search, Handshake, BarChart, Building2, CalendarCheck, MessageCircleQuestion, Megaphone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Insights for SMEs & MSMEs - Nitya Marketing Navigator',
  description: 'Understand why dedicated marketing expertise is crucial for SMEs & MSMEs in today\'s competitive landscape. Explore key insights on branding, lead generation, and digital presence.',
};


// Insights Data
const insightsData = [
  { icon: Building2, title: "Strategic Brand Positioning", description: "Build credibility and trust with a consistent brand message." },
  { icon: Target, title: "Targeted Marketing & Lead Generation", description: "Leverage data for targeted campaigns and quality lead generation." },
  { icon: TrendingUp, title: "Cost-Effective Marketing Investment", description: "Optimize spending and maximize ROI with expert strategies." },
  { icon: Lightbulb, title: "Digital Transformation & Online Presence", description: "Stay visible and relevant with strong SEO, social media, and web presence." },
  { icon: Search, title: "Competitive Edge & Market Analysis", description: "Stay ahead by analyzing trends, customer behavior, and competitors." },
  { icon: Handshake, title: "Sales & Marketing Alignment", description: "Enhance customer engagement and conversion through collaboration." },
  { icon: CalendarCheck, title: "Consistency & Long-Term Growth", description: "Build brand recognition and relationships with ongoing campaigns." },
  { icon: MessageCircleQuestion, title: "Crisis Management & Reputation Building", description: "Manage PR and safeguard your brand's reputation effectively." },
  { icon: Megaphone, title: "Scalability & Expansion", description: "Adapt strategies to support growth into new markets and diversification." },
  { icon: BarChart, title: "Measurable Performance & Data-Driven Decisions", description: "Track, optimize, and ensure continuous improvement with analytics." },
];

export default function InsightsPage() {
  return (
      <section id="insights" className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container max-w-7xl space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-primary">Why SMEs & MSMEs Need Dedicated Marketing Expertise</h1>
                  <p className="text-lg text-muted-foreground">
                      In today’s competitive landscape, strategic marketing isn't a luxury—it's essential for survival and growth. Discover why dedicated expertise is crucial.
                  </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {insightsData.map((insight, index) => (
                      <Card key={index} className="hover:border-accent transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-3 text-lg">
                                  <span className="p-1.5 bg-primary/10 rounded-full text-primary">
                                    <insight.icon className="w-5 h-5" />
                                  </span>
                                  {insight.title}
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <CardDescription>{insight.description}</CardDescription>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
  );
}

    