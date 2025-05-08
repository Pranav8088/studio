
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp, Lightbulb, Search, Handshake, BarChart, Building2, CalendarCheck, MessageCircleQuestion, Megaphone, ArrowRight } from 'lucide-react'; // Added ArrowRight
import type { Metadata } from 'next';
import Link from 'next/link'; // Import Link
import { Button } from '@/components/ui/button'; // Import Button


export const metadata: Metadata = {
  title: 'Marketing Insights for SMEs & MSMEs - Nitya Marketing Navigator',
  description: 'Understand why dedicated marketing expertise is crucial for SMEs & MSMEs in today\'s competitive landscape. Explore key insights on branding, lead generation, and digital presence.',
};


// Insights Data
const insightsData = [
  { icon: Building2, title: "Strategic Brand Positioning", description: "Build credibility, differentiate from competitors, and foster trust with a consistent and compelling brand message across all touchpoints." },
  { icon: Target, title: "Targeted Lead Generation", description: "Leverage data analytics and market research for precision-targeted campaigns that generate high-quality, sales-ready leads." },
  { icon: TrendingUp, title: "Cost-Effective Marketing", description: "Optimize marketing spend, focus on high-ROI activities, and maximize impact with expert strategies tailored to your budget." },
  { icon: Lightbulb, title: "Digital Transformation", description: "Stay visible, relevant, and competitive with a strong digital footprint encompassing SEO, social media, and a high-performing website." },
  { icon: Search, title: "Competitive Edge", description: "Gain market advantage by analyzing industry trends, understanding customer behavior, and monitoring competitor activities." },
  { icon: Handshake, title: "Sales & Marketing Alignment", description: "Enhance customer engagement, shorten sales cycles, and improve conversion rates through seamless collaboration between sales and marketing." },
  { icon: CalendarCheck, title: "Consistency & Long-Term Growth", description: "Build lasting brand recognition and customer relationships through sustained, strategic marketing efforts and campaigns." },
  { icon: MessageCircleQuestion, title: "Reputation Management", description: "Proactively manage public relations, handle potential crises effectively, and safeguard your brand's hard-earned reputation online." },
  { icon: Megaphone, title: "Scalability & Market Expansion", description: "Develop adaptable marketing strategies that support business growth, diversification, and successful entry into new markets." },
  { icon: BarChart, title: "Data-Driven Decisions", description: "Track key performance indicators, measure results accurately, optimize campaigns based on insights, and ensure continuous improvement." },
];

export default function InsightsPage() {
  return (
      <section id="insights" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/50">
          <div className="container max-w-7xl space-y-16 px-4 md:px-6"> {/* Increased spacing */}
              <div className="text-center max-w-4xl mx-auto space-y-4 animate-fade-in-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Why SMEs & MSMEs Need Dedicated Marketing Expertise</h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      In today’s dynamic and competitive landscape, strategic marketing isn't just an advantage—it's essential for survival and growth. Discover why partnering with dedicated experts is crucial for unlocking your business's full potential.
                  </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {insightsData.map((insight, index) => (
                      <Card key={index} className="flex flex-col group hover:border-primary transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                          <CardHeader className="flex flex-row items-center gap-4 pb-4">
                               <span className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                 <insight.icon className="w-6 h-6" />
                               </span>
                              <CardTitle className="text-lg md:text-xl text-foreground">{insight.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                              <CardDescription>{insight.description}</CardDescription>
                          </CardContent>
                      </Card>
                  ))}
              </div>

              {/* Added CTA Section */}
              <div className="text-center mt-12 pt-12 border-t border-border/40 animate-fade-in-up delay-500">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Ready to Leverage These Insights?</h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Let Nitya Marketing Navigator be your guide. Partner with us to implement strategies that drive real results for your SME or MSME.
                  </p>
                  <Link href="/contact">
                      <Button size="lg">Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </Link>
              </div>
          </div>
      </section>
  );
}
