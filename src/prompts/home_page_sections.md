
# AI Prompts for Nitya Marketing Website Sections

This document provides detailed prompts for an AI to understand or recreate the various sections of the Nitya Marketing Management website, focusing on the Home page, Header, and Footer.

## Header (`src/components/shared/Header.tsx`)

*   **Purpose**: Serves as the primary navigation interface for the website, displaying the brand logo, main navigation links, service category dropdowns, and a call-to-action button. Ensures consistent branding and accessibility across all pages.
*   **Content**:
    *   **Logo**: `BriefcaseBusiness` icon (Lucide) with accent color, followed by the text "Nitya Marketing Navigator" (or "Nitya" on small screens) in primary color, linked to the Home page (`/`).
    *   **Main Navigation (Desktop - `lg` breakpoint and up)**: Links for "Home" (`/`), "About" (`/about`), "Why Us" (`/why-us`), "Insights" (`/insights`), and "FAQs" (`/faq`). Uses Shadcn `NavigationMenu`.
    *   **Dropdown Menus (Desktop)**:
        *   "Digital Marketing": Trigger with dropdown (`NavigationMenuTrigger`, `NavigationMenuContent`) containing links to specific services (SEO, Social Media Marketing, Design Thinking, Video Production, ORM, Google Ads) with icons and short descriptions (`ListItem` component).
        *   "MarTech": Trigger with dropdown containing links to Marketing Technologies aspects (Platform Selection, Automation, CRM Integration, Analytics) with icons and descriptions.
        *   "Web Solutions": Trigger with dropdown combining Web Development, Mobile App, Maintenance, and Hosting links (Custom Web Dev, Responsive Design, E-commerce, CMS, Mobile App Dev, Maintenance, Hosting) with icons and descriptions.
    *   **Call-to-Action (Desktop)**: "Get Consultation" `Button` (primary variant, small size) linking to `/contact`. Positioned on the right.
    *   **Mobile Navigation (Below `lg` breakpoint)**: Hamburger `Menu` icon `Button` (outline variant) triggers a `Sheet` component sliding from the right.
        *   **Sheet Content**: Header with logo ("Nitya Marketing") and description. Scrollable navigation area with main links, separators, and collapsible sections for "Digital Marketing", "MarTech", and "Web Solutions", listing individual service links with icons. Footer section with a full-width "Get Consultation" `Button`.
*   **Styling**:
    *   **Layout**: `fixed` at the top (`top-0`), full width (`w-full`), `z-index: 50`. Uses a `container` with `max-w-7xl` for content alignment. `flex` layout to position logo, navigation, and CTA. Height is `h-16`.
    *   **Appearance**: Background uses `bg-background/90` with `backdrop-blur` for a semi-transparent effect. `border-b` with `border-border/40`. Navigation links use `navigationMenuTriggerStyle` with hover/focus states. Mobile `Sheet` uses `SheetContent` styling (right side slide-in).
    *   **Responsiveness**: Desktop navigation (`NavigationMenu`) is hidden below `lg`. Mobile trigger (`SheetTrigger`) is hidden `lg` and up. Logo text changes on `sm` breakpoint.
*   **Components Used**: `Link` (from `next/link`), `Button`, `Sheet`, `SheetContent`, `SheetTrigger`, `SheetClose`, `SheetHeader`, `SheetTitle`, `SheetDescription`, `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`, `ListItem` (custom helper), `BriefcaseBusiness` icon, `Menu` icon, various service icons (Lucide).
*   **Redirection**: All links navigate to their respective page URLs (e.g., `/about`, `/digital-marketing/seo`, `/contact`).
*   **AI Hints**: Ensure correct responsive behavior between desktop (`NavigationMenu`) and mobile (`Sheet`). Dropdown items use the `ListItem` helper component for structure and styling.

## Footer (`src/components/shared/Footer.tsx`)

*   **Purpose**: Provides supplementary navigation, contact information, copyright details, and social media links at the bottom of every page.
*   **Content**:
    *   **Column 1 (About)**: Logo (`BriefcaseBusiness` icon + "Nitya Marketing Navigator" / "Nitya Marketing"), brief company description, copyright notice (`© {currentYear} Nitya Marketing Management. All rights reserved.`).
    *   **Column 2 (Quick Links)**: Heading ("Quick Links"), list of links: Home, About Us, Why Choose Us, Insights, FAQs, Contact Us.
    *   **Column 3 (Services)**: Heading ("Services"), list of key service links: SEO, Social Media Marketing, Web Development, Marketing Technologies, Google Ads, and a "View All Services" link.
    *   **Column 4 (Get In Touch)**: Heading ("Get In Touch"), Contact details with icons (`MapPin`, `Phone`, `Mail`): Address (Office no. 302...), Phone (+91 7021038009), Email (info@nityamarketing.com). Social media icons (`Linkedin`, `Twitter`, `Facebook`) linking to placeholders (`#`).
*   **Styling**:
    *   **Layout**: Uses a `container` with `max-w-7xl`. `grid` layout with 4 columns on `lg` screens, 2 columns on `sm`, and 1 column on mobile. `padding-y-12`, `margin-top-16`. `border-t` with `border-border/40`. Text is generally `text-sm`.
    *   **Appearance**: Background is `bg-muted`, text is `text-muted-foreground`. Headings are `font-semibold`, `text-foreground`, `uppercase`, `tracking-wider`, `text-base`. Links have `hover:text-primary` transition. Icons have `text-accent`. Contact details use `flex` for icon and text alignment.
    *   **Responsiveness**: Grid columns adjust based on screen size. Logo text might change based on screen size (similar to header).
*   **Components Used**: `Link` (from `next/link`), `BriefcaseBusiness`, `MapPin`, `Phone`, `Mail`, `Linkedin`, `Twitter`, `Facebook` icons (Lucide).
*   **Redirection**: Navigation and service links point to respective pages. Contact links use `tel:` and `mailto:` protocols. Social links currently point to `#`.
*   **AI Hints**: Dynamically calculate and display the `currentYear` in the copyright notice. Ensure correct grid layout adjustments for responsiveness. Use appropriate `<a>` tags for telephone and email links.

## Home Page: Hero Section (`src/app/page.tsx`, `id="home"`)

*   **Purpose**: To immediately capture visitor attention, communicate the core value proposition, provide clear calls to action, and establish credibility with key statistics and visuals.
*   **Content**:
    *   **Headline**: "Navigate Your B2B Growth with Nitya Marketing" (emphasizing "Nitya Marketing" with `text-accent`).
    *   **Sub-headline**: "Your dedicated partner empowering SMEs & MSMEs. We bridge the gap between ambition and achievement through expert marketing strategies."
    *   **CTAs**: "Explore Services" `Button` (primary) linking to `/services`, "Request Consultation" `Button` (outline) linking to `/contact`. Both large (`size="lg"`) with `ArrowRight` icon.
    *   **Statistics**: Animated counters (`AnimatedCounter` component) for "10+ Years Experience" and "1000+ Categories Served", displayed in a 2-column grid.
    *   **Visuals**: Image `Carousel` (Shadcn) with 3 placeholder images, navigation arrows (`CarouselPrevious`, `CarouselNext`). Visible on `md` screens and up.
*   **Styling**:
    *   **Layout**: `relative` positioning for background elements. `padding-top/bottom` adjusted for different screen sizes (`pt-24 pb-16`, `md:pt-36 md:pb-24`, etc.). `min-h-[85vh]` / `md:min-h-[90vh]`. Uses `container` (`max-w-7xl`). `grid` layout (`md:grid-cols-2`) for text and image carousel. `items-center`, `gap-12 lg:gap-16`. Statistics in a nested 2-column grid (`max-w-sm`). Text aligned center on mobile, left on `md`+.
    *   **Appearance**: `bg-gradient-to-b from-background via-secondary/30 to-background`. Subtle blurred decorative elements (`div` with `bg-accent/5`, `bg-primary/5`, `filter blur-3xl`, `opacity-30`, absolute positioning, `pointer-events-none`). Headline uses `font-extrabold`, `tracking-tight`, `!leading-tight`. Paragraphs use `text-lg md:text-xl`, `text-muted-foreground`. Counters use `text-3xl sm:text-4xl`, `font-bold`, `text-accent`. Counter containers have `bg-card/50`, `rounded-lg`. Carousel images are `rounded-xl`, `shadow-lg`, `object-cover`, `aspect-[6/5]`.
    *   **Animation**: Text content uses `animate-fade-in-up`. Image carousel uses `animate-fade-in-right`. Counters animate when in view.
*   **Components Used**: `Link`, `Button`, `ArrowRight` icon, `AnimatedCounter`, `Image`, `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`.
*   **Redirection**: "Explore Services" -> `/services`, "Request Consultation" -> `/contact`.
*   **AI Hints**: Use `https://picsum.photos/600/500?random=N` for carousel images. Add descriptive `alt` text. Add `data-ai-hint` attributes: "digital marketing strategy", "team collaboration", "business analytics chart". Ensure the first image has `priority` prop, others have `loading="lazy"`. Add `sizes` attribute to images for optimization. Carousel uses `opts={{ loop: true, align: "start" }}`.

## Home Page: About Us Snippet (`src/app/page.tsx`, `id="about-snippet"`)

*   **Purpose**: To provide a concise overview of the company's mission and experience, encouraging users to learn more on the dedicated About page.
*   **Content**:
    *   **Image**: Placeholder image on the left (or top on mobile).
    *   **Heading**: "About Nitya Marketing".
    *   **Text**: Two paragraphs describing the company's focus on SMEs/MSMEs, experience (> decade), and mission (tailored strategies, brand value, lead gen, measurable growth).
    *   **CTA**: "Learn More About Us" `Button` (outline) with `ArrowRight` icon.
*   **Styling**:
    *   **Layout**: `padding-y-16 md:py-24`. Uses `container` (`max-w-7xl`). `grid` layout (`lg:grid-cols-2`) with `gap-12 lg:gap-16`, `items-center`. Image order changes (`order-last lg:order-first`). Text content aligned center on mobile, left on `lg`+.
    *   **Appearance**: `bg-background`. Heading is `text-3xl md:text-4xl`, `font-bold`, `text-primary`. Paragraphs are `text-lg`, `text-muted-foreground`, `max-w-xl`. Image is `rounded-lg`, `shadow-md`, `object-cover`, `aspect-[11/9]`.
    *   **Animation**: Image uses `animate-fade-in-left`. Text content uses `animate-fade-in-right`.
*   **Components Used**: `Link`, `Button`, `ArrowRight` icon, `Image`.
*   **Redirection**: "Learn More About Us" button -> `/about`.
*   **AI Hints**: Use `https://picsum.photos/550/450?random=4` for the image. Add descriptive `alt` text (e.g., "Nitya Marketing Team Discussion"). Add `data-ai-hint="team meeting discussion"`. Image uses `loading="lazy"` and `sizes` attribute.

## Home Page: Our Values Snippet (`src/app/page.tsx`, `id="values-snippet"`)

*   **Purpose**: To highlight the core principles guiding the company's work and culture. Links to the full values list on the About page.
*   **Content**:
    *   **Heading**: "Our Core Values".
    *   **Values Grid**: 4 core values ("Client-Centric Approach", "Excellence", "Innovation", "Integrity") displayed in a grid. Each value has an associated `Icon` (`Users`, `Award`, `BrainCircuit`, `CheckCircle`) and title.
    *   **CTA**: "Discover Our Guiding Principles" `Button` (primary).
*   **Styling**:
    *   **Layout**: `padding-y-16 md:py-24`. Uses `container` (`max-w-7xl`), `text-center`. Heading has `margin-bottom-12`. Values grid uses `grid` layout (`grid-cols-2 md:grid-cols-4`), `gap-8 md:gap-12`, `max-w-4xl mx-auto`. CTA has `margin-top-12`.
    *   **Appearance**: `bg-secondary`. Heading is `text-3xl md:text-4xl`, `font-bold`, `text-primary`. Each value item is `flex flex-col items-center space-y-3`. Icons are inside a rounded span (`p-2 bg-accent/10 rounded-full text-accent`), which is inside another rounded div (`p-3 bg-background rounded-full shadow`). Value titles are `font-semibold`, `text-base md:text-lg`.
    *   **Animation**: Each value item uses `animate-fade-in-up` with a staggered `animationDelay` (`index * 100}ms`).
*   **Components Used**: `Link`, `Button`, `Users` icon, `Award` icon, `BrainCircuit` icon, `CheckCircle` icon (Lucide).
*   **Redirection**: "Discover Our Guiding Principles" button -> `/about#values`.
*   **AI Hints**: Ensure the icon styling with nested spans/divs is recreated accurately. Apply staggered animation delays.

## Home Page: Featured Services Section (`src/app/page.tsx`, `id="featured-services"`)

*   **Purpose**: To showcase a selection of key services offered, driving traffic to specific service pages and the main services overview page.
*   **Content**:
    *   **Heading**: "Featured Services".
    *   **Sub-headline**: "Driving growth through specialized B2B marketing solutions tailored for SMEs & MSMEs."
    *   **Service Cards**: Grid of 3 featured services (SEO, Web Development, Marketing Technologies). Each `Card` includes:
        *   Icon (`TrendingUp`, `Target`, `BrainCircuit`).
        *   Title (e.g., "SEO").
        *   Description (e.g., "Boost visibility and drive organic traffic.").
        *   "View Service" link (`Button` - link variant).
    *   **CTA**: "View All Services" `Button` (outline, large).
*   **Styling**:
    *   **Layout**: `padding-y-16 md:py-24`. Uses `container` (`max-w-7xl`), `text-center` for headings. Cards use `grid` layout (`sm:grid-cols-2 lg:grid-cols-3`), `gap-8`. CTA has `margin-top-16`.
    *   **Appearance**: `bg-background`. Heading is `text-3xl md:text-4xl`, `font-bold`, `text-primary`, `mb-4`. Sub-headline is `text-lg`, `text-muted-foreground`, `mb-12`, `max-w-3xl mx-auto`. Cards are `flex flex-col`, `text-left`, `group`, `overflow-hidden`. Card header is `flex flex-row items-center gap-4 pb-4`. Icon span is `p-3 bg-primary/10 rounded-full text-primary` with hover state (`group-hover:bg-primary group-hover:text-primary-foreground`). Card title is `text-xl`. Card description is in `CardContent`. "View Service" button is `variant="link"`, `p-0 h-auto text-accent group-hover:underline`, includes `ArrowRight` icon with hover translate effect.
    *   **Animation**: Cards use `animate-fade-in-up` with staggered `animationDelay` (`index * 150}ms`).
*   **Components Used**: `Link`, `Button`, `ArrowRight` icon, `Card`, `CardHeader`, `CardTitle`, `CardContent`, `CardDescription`, `CardFooter`, `TrendingUp` icon, `Target` icon, `BrainCircuit` icon (Lucide).
*   **Redirection**: "View Service" links -> respective service pages (`/digital-marketing/seo`, `/web-development`, `/marketing-technologies`). "View All Services" button -> `/services`.
*   **AI Hints**: Implement the hover effects on the card icons and "View Service" links accurately. Use the correct icons for each service.

## Home Page: Blog Posts Snippet (`src/app/page.tsx`, `id="blog-snippet"`)

*   **Purpose**: To display recent articles or insights, positioning the company as a thought leader and driving engagement with content.
*   **Content**: (Uses placeholder data `blogPosts`)
    *   **Heading**: "Latest Insights".
    *   **Sub-headline**: "Stay updated with B2B marketing trends, strategies, and tips relevant for SMEs & MSMEs."
    *   **Blog Cards**: Grid of 3 blog post cards. Each `Card` includes:
        *   Placeholder Image.
        *   Title (e.g., "The Ultimate Guide to B2B SEO").
        *   Date (`CalendarDays` icon + formatted date).
        *   Excerpt (short description, line-clamped).
        *   "Read More" link (`Button` - link variant).
    *   **CTA (Optional/Commented Out)**: Link to a main blog page.
*   **Styling**:
    *   **Layout**: `padding-y-16 md:py-24`. Uses `container` (`max-w-7xl`). Headings `text-center`, `mb-12`. Cards use `grid` layout (`sm:grid-cols-2 lg:grid-cols-3`), `gap-8`.
    *   **Appearance**: `bg-secondary`. Heading is `text-3xl md:text-4xl`, `font-bold`, `text-primary`. Sub-headline is `text-lg`, `text-muted-foreground`, `mt-2`, `max-w-2xl mx-auto`. Cards are `flex flex-col`, `overflow-hidden`, `group`. Image container has `aspect-video`, `relative`, `overflow-hidden`. Image uses `object-cover`, `w-full`, `h-full`, `transition-transform duration-300 group-hover:scale-105`. Gradient overlay on image (`bg-gradient-to-t from-black/30`). Card title is `text-lg lg:text-xl`, `leading-tight`, `group-hover:text-accent`. Date description is `flex items-center gap-1.5 text-xs pt-1 text-muted-foreground`. Excerpt uses `text-sm`, `line-clamp-3`. "Read More" button is `variant="link"`, `p-0 h-auto text-accent group-hover:underline`, includes `ArrowRight` icon with hover translate effect.
    *   **Animation**: Cards use `animate-fade-in-up` with staggered `animationDelay` (`index * 100}ms`).
*   **Components Used**: `Link`, `Button`, `ArrowRight` icon, `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `Image`, `CalendarDays` icon (Lucide).
*   **Redirection**: "Read More" links -> placeholder blog URLs (e.g., `/blog/b2b-seo-guide`).
*   **AI Hints**: Use `https://picsum.photos/400/225?random=N` for blog images. Add descriptive `alt` text. Add `data-ai-hint="marketing article illustration"`. Images use `loading="lazy"` and `sizes` attribute. Implement `line-clamp-3` for the excerpt. Use the placeholder `blogPosts` array for content.
```