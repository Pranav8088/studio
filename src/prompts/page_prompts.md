
# AI Prompts for Nitya Marketing Website Pages & Styles

This document provides detailed prompts for an AI to understand or recreate the various pages and the global stylesheet of the Nitya Marketing Management website.

---

## File: `src/app/globals.css`

*   **Purpose**: Defines the global styles, Tailwind CSS base layers, utility classes, CSS custom properties (variables) for light and dark themes, and animations used throughout the application. It leverages Shadcn UI's theme structure.
*   **Content**:
    *   Tailwind CSS directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).
    *   CSS Custom Properties (`:root`, `.dark`) defining the color palette (background, foreground, primary, secondary, accent, destructive, muted, border, input, ring, chart colors) using HSL values for both light and dark themes.
        *   **Dark Theme (Active)**: Uses Navy Blue (`220 40% 10%` for background) as the base, with Copper/Gold (`30 70% 55%`) as primary and Yellow (`55 100% 60%`) as accent. Foreground is near-white (`0 0% 95%`).
    *   Base Styles (`@layer base`): Applies default border color, body background/text colors, font smoothing (`antialiased`), and default heading styles (font-weight, tracking, color). Sets up the Inter font via a CSS variable (`--font-inter`). Defines focus-visible styles using the `ring` color.
    *   Utility Classes (`@layer utilities`): Defines custom animation classes (`animate-fade-in`, `animate-fade-in-up`, `animate-fade-in-left`, `animate-fade-in-right`).
    *   Keyframes (`@keyframes`): Defines the actual animation steps for `fade-in`, `fade-in-up`, `fade-in-left`, `fade-in-right`.
*   **Styling**:
    *   **Color Scheme**: Defines HSL variables for a professional look (Navy Blue, Copper/Gold, Yellow). Dark mode is the default applied via the `<html>` tag class.
    *   **Typography**: Sets base font styles and heading styles.
    *   **Layout**: Implicitly affects layout through Tailwind base styles.
    *   **Animation**: Provides fade-in animations for enhancing user experience on element load/scroll.
*   **Components Used**: Affects all components using Tailwind CSS and the defined theme variables.
*   **Redirection**: N/A.
*   **AI Hints**: The core task is defining the `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--muted`, `--border`, `--input`, `--ring` variables correctly for the `.dark` theme as specified (Navy base, Copper primary, Yellow accent). Ensure animations (`fade-in-*`) are defined with appropriate keyframes.

---

## File: `src/app/layout.tsx`

*   **Purpose**: Defines the root layout structure for the entire application. It sets up the HTML document structure, applies global styles and fonts, includes the Header and Footer components, and renders the main content area.
*   **Content**:
    *   Imports global CSS (`./globals.css`).
    *   Imports `Inter` font from `next/font/google`.
    *   Imports `Header`, `Footer`, and `Toaster` components.
    *   Defines root `Metadata` (title, description).
    *   Renders `<html>` tag with `lang="en"`, `className="scroll-smooth dark"` (sets dark mode default) and the Inter font variable.
    *   Renders `<body>` tag with `font-sans`, `bg-background`, `text-foreground`, `flex flex-col min-h-screen`, `antialiased` classes.
    *   Includes `<Header />` component at the top.
    *   Renders the main content area (`<main className="flex-grow pt-16">{children}</main>`) which allows child pages/layouts to be inserted. `pt-16` compensates for the fixed header height.
    *   Includes `<Footer />` component at the bottom.
    *   Includes `<Toaster />` component for displaying notifications.
*   **Styling**:
    *   Applies the Inter font globally via `inter.variable` and `font-sans`.
    *   Sets the default dark theme on the `<html>` tag.
    *   Uses flexbox (`flex flex-col`) on the body to ensure the footer stays at the bottom (`min-h-screen` and `flex-grow` on main).
    *   Applies base background and foreground colors from `globals.css`.
    *   Adds top padding to `main` to prevent content from being hidden under the fixed header.
*   **Components Used**: `Header`, `Footer`, `Toaster`.
*   **Redirection**: N/A (contains navigation components).
*   **AI Hints**: Ensure the `<html>` tag has the `dark` class applied. Set up the Inter font correctly using `next/font/google`. Structure the body using flexbox to position header, main content, and footer correctly. Include the `Toaster` component.

---

## File: `src/app/loading.tsx`

*   **Purpose**: Provides a global loading UI skeleton that is displayed while page content or data is being fetched, improving perceived performance. Uses Next.js file-based loading UI convention.
*   **Content**: Renders a simple skeleton structure using Shadcn `Skeleton` components.
    *   A large top skeleton bar.
    *   Two smaller text-like skeleton lines below it.
    *   Three medium-sized skeleton cards in a grid layout further down.
*   **Styling**:
    *   Uses `flex flex-col space-y-3` for overall vertical spacing.
    *   Applies padding (`p-4 md:p-8`).
    *   Uses `grid grid-cols-1 md:grid-cols-3 gap-4` for the bottom card skeletons.
    *   `Skeleton` components themselves have a pulsing animation and `bg-muted` background defined in `globals.css` and the component itself.
*   **Components Used**: `Skeleton` (from `@/components/ui/skeleton`).
*   **Redirection**: N/A.
*   **AI Hints**: Recreate the specific arrangement and sizing of the `Skeleton` components to mimic a typical page structure loading state (header area, text lines, content cards).

---

## File: `src/app/error.tsx`

*   **Purpose**: Defines a global error boundary UI for the application. Catches runtime errors during rendering and provides a user-friendly message with an option to retry. Uses Next.js file-based error handling convention. Must be a Client Component (`'use client'`).
*   **Content**:
    *   Displays a heading "Something went wrong!".
    *   Shows the error message (`error.message`).
    *   Provides a "Try again" `Button` which calls the `reset` function (passed as a prop by Next.js) to attempt re-rendering the failed segment.
*   **Styling**:
    *   Uses `container mx-auto flex flex-col items-center justify-center` to center the content vertically and horizontally.
    *   Sets a minimum height (`min-h-[calc(100vh-10rem)]`) to roughly fill the viewport minus header/footer.
    *   Applies text alignment (`text-center`) and spacing (`mb-4`, `mb-6`).
    *   Heading uses `text-2xl font-semibold text-destructive`.
    *   Error message uses `text-muted-foreground`.
*   **Components Used**: `Button` (from `@/components/ui/button`).
*   **Redirection**: The `reset` function attempts to reload the current segment.
*   **AI Hints**: Mark the component with `'use client'`. Use the `error` and `reset` props correctly. Display the `error.message`. Style the elements appropriately, especially using the `text-destructive` color for the main title.

---

## File: `src/app/not-found.tsx`

*   **Purpose**: Defines the UI for the 404 Not Found page, displayed when a user navigates to a route that doesn't exist. Uses Next.js file-based Not Found UI convention.
*   **Content**:
    *   Displays a large "404" heading.
    *   Shows a message "Oops! Page Not Found".
    *   Provides a brief explanation that the requested page doesn't exist.
    *   Includes a "Go Back Home" `Button` linking to the homepage (`/`).
*   **Styling**:
    *   Uses `container mx-auto flex flex-col items-center justify-center text-center` for centering.
    *   Sets a minimum height (`min-h-[calc(100vh-10rem)]`).
    *   "404" heading uses `text-9xl font-extrabold text-primary opacity-80 mb-4`.
    *   Secondary heading uses `text-3xl font-semibold text-foreground mb-2`.
    *   Paragraph uses `text-muted-foreground mb-8`.
    *   Button uses `size="lg"`.
*   **Components Used**: `Button` (from `@/components/ui/button`), `Link` (from `next/link`).
*   **Redirection**: The button links back to the Home page (`/`).
*   **AI Hints**: Ensure the styling creates a clear and standard 404 page appearance. Use large, prominent text for the "404". Link the button correctly to the root path.

---

## File: `src/app/page.tsx` (Home Page)

*   **Purpose**: Serves as the main entry point and landing page for the website. It introduces Nitya Marketing Management, highlights key strengths and services, showcases core values, features recent blog posts, and provides clear calls to action.
*   **Content**:
    *   **Hero Section (`#home`)**: Main headline ("Navigate Your B2B Growth..."), sub-headline, CTAs ("Explore Services", "Request Consultation"), animated statistics ("10+ Years Experience", "1000+ Categories Served"), image carousel (3 images, visible `md`+).
    *   **About Us Snippet (`#about-snippet`)**: Placeholder image, "About Nitya Marketing" heading, brief description, "Learn More About Us" CTA.
    *   **Our Values Snippet (`#values-snippet`)**: "Our Core Values" heading, grid of 4 core values with icons (`Users`, `Award`, `BrainCircuit`, `CheckCircle`), "Discover Our Guiding Principles" CTA.
    *   **Featured Services Section (`#featured-services`)**: "Featured Services" heading, sub-headline, grid of 3 service `Card` components (SEO, Web Development, Marketing Technologies) with icons, descriptions, and "View Service" links. "View All Services" CTA.
    *   **Blog Posts Snippet (`#blog-snippet`)**: "Latest Insights" heading, sub-headline, grid of 3 blog post `Card` components (using placeholder data) with images, titles, dates (`CalendarDays` icon), excerpts, and "Read More" links.
*   **Styling**:
    *   **Layout**: Uses `section` elements for structure, `container` for centering content (`max-w-7xl`), various `grid` layouts (hero, values, services, blog), `flex` where needed. Padding (`py-16 md:py-24 lg:py-32`) defines vertical spacing between sections. Responsive adjustments for grid columns and element visibility (`md:`, `lg:` prefixes).
    *   **Appearance**: Alternating background colors (`bg-background`, `bg-secondary`) for sections. Uses theme colors (primary, accent, muted) extensively. Cards (`Card`) have consistent styling (border, shadow, hover effects). Images use `object-cover`, `rounded-lg`/`rounded-xl`, `shadow-md`/`shadow-lg`. Specific text styling for headings and paragraphs.
    *   **Animation**: Fade-in animations (`animate-fade-in-up`, `animate-fade-in-left`, `animate-fade-in-right`) applied to sections and elements, often with staggered delays (`style={{ animationDelay: ... }}`). `AnimatedCounter` component used for statistics. Carousel has built-in transitions. Hover effects on cards, icons, and links.
*   **Components Used**: `Image`, `Button`, `ArrowRight`, `Target`, `TrendingUp`, `CheckCircle`, `Award`, `BrainCircuit`, `Users`, `BookOpen`, `CalendarDays`, `AnimatedCounter`, `Link`, `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `CardFooter`, `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious`.
*   **Redirection**:
    *   Hero CTAs -> `/services`, `/contact`.
    *   About Snippet CTA -> `/about`.
    *   Values Snippet CTA -> `/about#values`.
    *   Featured Service Links -> `/digital-marketing/seo`, `/web-development`, `/marketing-technologies`.
    *   Featured Services CTA -> `/services`.
    *   Blog "Read More" Links -> Placeholder blog URLs (e.g., `/blog/b2b-seo-guide`).
*   **AI Hints**: Use `https://picsum.photos/width/height?random=N` for placeholder images, adding descriptive `alt` text and `data-ai-hint` attributes (e.g., "digital marketing strategy", "team meeting discussion", "marketing article illustration"). Use `priority` for the first hero image, `loading="lazy"` for others. Implement `sizes` attribute for image optimization. Use the placeholder data arrays (`blogPosts`, `coreValues`, `featuredServices`). Ensure correct application of staggered animations.

---

## File: `src/app/about/page.tsx`

*   **Purpose**: Provides detailed information about Nitya Marketing Management, including its mission, vision, and core values.
*   **Content**:
    *   **Hero Section**: Centered heading "Who We Are", introductory paragraph about the company's focus (B2B growth partner for SMEs & MSMEs).
    *   **Mission/Vision/Values Section**: A grid layout containing three `Card` components:
        *   **Mission Card**: `Target` icon, "Our Mission" title, descriptive paragraph.
        *   **Vision Card**: `TrendingUp` icon, "Our Vision" title, descriptive paragraph.
        *   **Values Card (`#values`)**: `Award` icon, "Our Core Values" title, bulleted list of core values.
*   **Styling**:
    *   **Layout**: Full-width section with vertical padding (`py-16 md:py-24 lg:py-32`). Uses `container` (`max-w-7xl`) with increased vertical spacing (`space-y-16`). Hero section text is centered (`text-center max-w-3xl mx-auto`). Cards are arranged in a responsive grid (`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`). Cards use `flex flex-col` to ensure consistent height and alignment. Card content uses `flex-grow`.
    *   **Appearance**: Background gradient (`bg-gradient-to-b from-background to-secondary/50`). Hero heading is large (`text-4xl` to `text-6xl`), bold, `text-primary`. Paragraphs use `text-lg` to `text-2xl`, `text-muted-foreground`, `leading-relaxed`. Cards have hover shadow (`hover:shadow-lg transition-shadow`). Icons are styled within colored circular backgrounds (`bg-primary/10` or `bg-accent/10`) with corresponding text colors (`text-primary` or `text-accent`). Value list uses `list-disc list-inside`.
    *   **Animation**: Elements fade in (`animate-fade-in-up`) with staggered delays.
*   **Components Used**: `Card`, `CardContent`, `CardHeader`, `CardTitle`, `Target`, `TrendingUp`, `Award` (Lucide icons).
*   **Redirection**: N/A.
*   **AI Hints**: Use `flex flex-col` and `flex-grow` on cards and content respectively for consistent card heights within the grid. Ensure the `#values` ID is added to the Values Card for potential deep linking. Apply staggered fade-in animations.

---

## File: `src/app/contact/page.tsx`

*   **Purpose**: Provides contact information and a form for users to send inquiries or request consultations.
*   **Content**:
    *   **Hero Section**: Centered heading "Ready to Elevate Your Business?", introductory paragraph encouraging consultation.
    *   **Contact Layout**: A two-column grid (`lg:grid-cols-2`) containing:
        *   **Contact Form (`ContactForm` component)**: Fields for Name, Email, Company (optional), Message. Includes submission logic and toast notifications. Positioned on the right (`lg:order-last`).
        *   **Contact Details**: Heading "Contact Information", sections for Address (`MapPin` icon), Phone (`Phone` icon, `tel:` link), and Email (`Mail` icon, `mailto:` link). Positioned on the left (`lg:order-first`).
*   **Styling**:
    *   **Layout**: Full-width section with vertical padding (`py-16 md:py-24 lg:py-32`). Uses `container` (`max-w-6xl`, wider than some other pages) with `space-y-16`. Hero section text is centered (`text-center max-w-3xl mx-auto`). Main content uses a grid (`lg:grid-cols-2 gap-12 lg:gap-16`) with `items-start`. Contact details section uses `space-y-8`. Individual contact items use `flex items-start gap-4`.
    *   **Appearance**: Background gradient (`bg-gradient-to-b from-background to-secondary/50`). Hero heading is large, bold, `text-primary`. Paragraphs are `text-lg md:text-xl`, `text-muted-foreground`. Contact info uses `text-muted-foreground`, with subheadings (`font-medium text-foreground`) and icons (`text-accent`). Links have hover effect (`hover:text-primary`). The `ContactForm` component is styled within a `Card`.
    *   **Animation**: Elements use fade-in animations (`animate-fade-in-up`, `animate-fade-in-left`, `animate-fade-in-right`).
*   **Components Used**: `ContactForm` (custom shared component), `Mail`, `Phone`, `MapPin` (Lucide icons). Inside `ContactForm`: `Card`, `CardHeader`, `CardTitle`, `CardContent`, `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`, `Input`, `Textarea`, `Button`, `Send` icon, `use-toast`.
*   **Redirection**: Phone number links using `tel:`. Email address links using `mailto:`. Form submission triggers a (dummy) server action.
*   **AI Hints**: Use the correct Lucide icons for each contact method. Ensure the `tel:` and `mailto:` links are correctly formatted. The `ContactForm` handles its own state and submission logic. Apply directional fade-in animations.

---

## File: `src/app/digital-marketing/layout.tsx`

*   **Purpose**: Serves as a basic layout wrapper specifically for pages within the `/digital-marketing/*` route segment. In this case, it's a minimal pass-through layout.
*   **Content**: Simply renders its `children`.
*   **Styling**: Applies no additional styling itself. Inherits styles from the root layout.
*   **Components Used**: None.
*   **Redirection**: N/A.
*   **AI Hints**: This is a simple pass-through layout, often used if shared UI elements specific to this section were needed (though none are present here).

---

## File: `src/app/digital-marketing/design-thinking/page.tsx`

*   **Purpose**: Describes the Design Thinking service offered by Nitya Marketing Management.
*   **Content**:
    *   **Hero Section**: Centered "Design Thinking" title, descriptive paragraph about the human-centered approach.
    *   **Features Grid**: A grid (`sm:grid-cols-2 lg:grid-cols-4`) of four `Card` components, each highlighting a key aspect of the service:
        *   User Empathy & Research (`Users` icon)
        *   Problem Framing & Strategy (`BrainCircuit` icon)
        *   Ideation & Prototyping (`Lightbulb` icon)
        *   Iterative Testing & Refinement (`Wand2` icon)
        *   Each card includes an icon, title, and description.
    *   **CTA Section**: Centered "Innovate with Design Thinking" `Button` linking to the contact page.
*   **Styling**:
    *   **Layout**: Standard section padding (`py-16 md:py-24 lg:py-32`), `container` (`max-w-7xl`), `space-y-16`. Hero text centered (`text-center max-w-3xl mx-auto`). Features use responsive grid (`gap-6 md:gap-8`). Cards use `flex flex-col`. CTA section has top margin (`mt-12`).
    *   **Appearance**: Background gradient (`bg-gradient-to-b from-background to-secondary/50`). Hero title large, bold, `text-primary`. Paragraph `text-lg md:text-xl text-muted-foreground`. Feature cards have icons in styled spans (`p-4 bg-primary/10 rounded-full text-primary`) with hover effects (`group-hover:bg-primary group-hover:text-primary-foreground`), centered text (`text-center`). Card titles are `text-lg md:text-xl`. Button uses `size="lg"` and includes `ArrowRight` icon.
    *   **Animation**: Hero text `animate-fade-in-up`. Feature cards `animate-fade-in-up` with staggered delays (`index * 100}ms`). CTA `animate-fade-in-up delay-500`.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Lightbulb`, `BrainCircuit`, `Users`, `Wand2`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Ensure correct icons are used for each feature. Implement card hover effects on the icon background/color. Apply staggered animations to cards.

---

## File: `src/app/digital-marketing/google-ads/page.tsx`

*   **Purpose**: Details the Google Ads (PPC) Management service.
*   **Content**:
    *   **Hero Section**: "Google Ads (PPC) Management" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Campaign Strategy & Setup (`Target` icon)
        *   Ad Copywriting & A/B Testing (`Filter` icon)
        *   Bid Management & Budget Optimization (`BadgeDollarSign` icon)
        *   Performance Tracking & Reporting (`BarChartBig` icon)
    *   **CTA Section**: "Launch Your Google Ads" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Similar structure to Design Thinking page (section padding, container, centered hero, responsive grid for features, CTA margin).
    *   **Appearance**: Similar structure to Design Thinking page (gradient background, text styles, card styles with icon spans, hover effects, button size/icon). Uses `primary` color theme for icons/hover.
    *   **Animation**: Similar animations (fade-in-up with delays).
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Target`, `BadgeDollarSign`, `BarChartBig`, `Filter`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Use the specified icons for each Google Ads feature. Implement hover effects and staggered animations.

---

## File: `src/app/digital-marketing/orm/page.tsx` (Online Reputation Management)

*   **Purpose**: Explains the Online Reputation Management (ORM) service.
*   **Content**:
    *   **Hero Section**: "Online Reputation Management (ORM)" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Comprehensive Monitoring (`Search` icon)
        *   Negative Feedback Mitigation (`ShieldCheck` icon)
        *   Positive Review Amplification (`MessageSquareHeart` icon)
        *   Proactive Brand Building (`TrendingUp` icon)
    *   **CTA Section**: "Manage Your Reputation" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout with other service pages.
    *   **Appearance**: Consistent appearance but uses `accent` color theme for icons/hover (`bg-accent/10`, `text-accent`, `group-hover:bg-accent`, `group-hover:text-accent-foreground`, `hover:border-accent`).
    *   **Animation**: Consistent fade-in-up animations with delays.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `ShieldCheck`, `Search`, `MessageSquareHeart`, `TrendingUp`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `accent` theme to the card hover states and icon backgrounds for this specific page.

---

## File: `src/app/digital-marketing/seo/page.tsx` (Search Engine Optimization)

*   **Purpose**: Details the Search Engine Optimization (SEO) service.
*   **Content**:
    *   **Hero Section**: "Search Engine Optimization (SEO)" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Keyword Research & Strategy (`Search` icon)
        *   On-Page & Content Optimization (`Link2` icon)
        *   Off-Page SEO & Link Building (`BarChart` icon)
        *   Technical SEO Audit & Implementation (`CheckCircle` icon)
    *   **CTA Section**: "Boost Your SEO Today" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `accent` color theme for icons/hover (similar to ORM page).
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `CheckCircle`, `Search`, `BarChart`, `Link2`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `accent` theme for card hover/icons. Use the correct icons for SEO features.

---

## File: `src/app/digital-marketing/social-media-marketing/page.tsx`

*   **Purpose**: Explains the Social Media Marketing service.
*   **Content**:
    *   **Hero Section**: "Social Media Marketing" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Platform Strategy & Management (`Users` icon)
        *   Content Creation & Curation (`Share2` icon)
        *   Paid Social Advertising Campaigns (`Megaphone` icon)
        *   Analytics, Reporting & Optimization (`TrendingUp` icon)
    *   **CTA Section**: "Engage Your Audience" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `primary` color theme for icons/hover (similar to Design Thinking/Google Ads pages).
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Users`, `Share2`, `TrendingUp`, `Megaphone`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `primary` theme for card hover/icons. Use the correct icons for SMM features.

---

## File: `src/app/digital-marketing/video-production/page.tsx`

*   **Purpose**: Details the Video Production service.
*   **Content**:
    *   **Hero Section**: "Video Production" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Concept Development & Scripting (`Clapperboard` icon)
        *   Professional Filming & Production (`Film` icon)
        *   Post-Production & Editing (`Sparkles` icon)
        *   Video Strategy & Distribution (`Video` icon)
    *   **CTA Section**: "Start Your Video Project" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `primary` color theme for icons/hover.
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Video`, `Clapperboard`, `Film`, `Sparkles`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `primary` theme for card hover/icons. Use the correct icons for Video Production features.

---

## File: `src/app/faq/page.tsx`

*   **Purpose**: Presents answers to frequently asked questions in an accordion format.
*   **Content**:
    *   **Hero Section**: Centered "Frequently Asked Questions" title, introductory paragraph.
    *   **Accordion Section**: Uses Shadcn `Accordion` component (`type="single" collapsible`) to display a list of questions and answers (from `faqs` array).
        *   Each `AccordionItem` contains an `AccordionTrigger` (the question) and `AccordionContent` (the answer).
        *   The answer content includes a small "Get Solution" `Button` (link variant) linking to the contact page.
*   **Styling**:
    *   **Layout**: Standard section padding, `container` (`max-w-4xl`), `space-y-16`. Hero text centered (`text-center`). Accordion takes full width (`w-full`), with vertical spacing between items (`space-y-4`).
    *   **Appearance**: Background gradient. Hero title large, bold, `text-primary`. Paragraph `text-lg md:text-xl text-muted-foreground`. `AccordionItem` styled like a card (`border`, `rounded-lg`, `bg-card`, `shadow-sm`). `AccordionTrigger` styled with padding, font size, hover effect (`hover:text-primary`), and chevron icon. `AccordionContent` styled with padding and text styles (`text-muted-foreground`, `text-sm md:text-base`). "Get Solution" button is small, link variant, `text-accent`.
    *   **Animation**: Hero text `animate-fade-in-up`. Accordion items `animate-fade-in-up` with staggered delays (`index * 50}ms`). Accordion open/close uses built-in animations (`animate-accordion-down`, `animate-accordion-up`).
*   **Components Used**: `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`, `Button`, `Send` (Lucide icon), `Link`.
*   **Redirection**: "Get Solution" buttons link to `/contact`.
*   **AI Hints**: Use the `faqs` array data to populate the accordion. Style `AccordionItem` to look like distinct cards. Ensure the `AccordionTrigger` chevron rotates on open/close. Apply staggered animation delays to items.

---

## File: `src/app/hosting-support/page.tsx`

*   **Purpose**: Describes the Website Hosting & Support services.
*   **Content**:
    *   **Hero Section**: "Hosting & Support" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Reliable Hosting Solutions (`Server` icon)
        *   Performance Optimization (`Gauge` icon)
        *   Robust Security Measures (`ShieldAlert` icon)
        *   Dedicated Technical Support (`LifeBuoy` icon)
    *   **CTA Section**: "Get Reliable Hosting" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout with other service pages.
    *   **Appearance**: Consistent appearance, using `accent` color theme for icons/hover.
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Server`, `ShieldAlert`, `Gauge`, `LifeBuoy`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `accent` theme for card hover/icons. Use the correct icons for Hosting features.

---

## File: `src/app/insights/page.tsx`

*   **Purpose**: Explains the importance of dedicated marketing expertise for SMEs & MSMEs, highlighting key benefits and insights.
*   **Content**:
    *   **Hero Section**: Centered "Why SMEs & MSMEs Need Dedicated Marketing Expertise" title, introductory paragraph.
    *   **Insights Grid**: A grid (`sm:grid-cols-2 lg:grid-cols-3`) of `Card` components, each detailing a key marketing insight/benefit (from `insightsData` array).
        *   Examples: Strategic Brand Positioning (`Building2`), Targeted Lead Generation (`Target`), Cost-Effective Marketing (`TrendingUp`), Digital Transformation (`Lightbulb`), etc.
        *   Each card has an icon, title, and description.
    *   **CTA Section**: Separated by a top border, includes a heading "Ready to Leverage These Insights?", a paragraph, and a "Get Your Free Consultation" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Standard section padding, `container` (`max-w-7xl`), `space-y-16`. Hero text centered (`text-center max-w-4xl mx-auto`). Insights use responsive grid (`gap-6 md:gap-8`). Cards use `flex flex-col`. CTA section has `mt-12 pt-12 border-t`, centered text (`text-center max-w-2xl mx-auto`).
    *   **Appearance**: Background gradient. Hero title large, bold, `text-primary`. Paragraph `text-lg md:text-xl text-muted-foreground`. Insight cards have header with icon (`p-3 bg-primary/10 rounded-full text-primary` with hover effect) and title (`text-lg md:text-xl`). Card content (`flex-grow`) contains the description. CTA section heading `text-2xl md:text-3xl font-semibold`. Button `size="lg"`.
    *   **Animation**: Hero text `animate-fade-in-up`. Insight cards `animate-fade-in-up` with staggered delays (`index * 50}ms`). CTA section `animate-fade-in-up delay-500`.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `ArrowRight`, various Lucide icons (`Building2`, `Target`, `TrendingUp`, `Lightbulb`, `Search`, `Handshake`, `CalendarCheck`, `MessageCircleQuestion`, `Megaphone`, `BarChart`), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Populate cards using the `insightsData` array. Implement the card header structure with icon and title side-by-side. Ensure the CTA section has a top border separator.

---

## File: `src/app/marketing-technologies/page.tsx`

*   **Purpose**: Describes the Marketing Technologies implementation and optimization services.
*   **Content**:
    *   **Hero Section**: "Marketing Technologies" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Platform Selection & Consultation (`Settings` icon)
        *   Marketing Automation Setup (`Zap` icon)
        *   CRM Integration & Optimization (`DatabaseZap` icon)
        *   Analytics & Data Integration (`AreaChart` icon)
    *   **CTA Section**: "Optimize Your MarTech Stack" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `accent` color theme for icons/hover.
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Settings`, `Zap`, `AreaChart`, `DatabaseZap`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `accent` theme for card hover/icons. Use the correct icons for MarTech features.

---

## File: `src/app/mobile-app/page.tsx`

*   **Purpose**: Details the Mobile App Development services.
*   **Content**:
    *   **Hero Section**: "Mobile App Development" title, descriptive paragraph.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Native iOS & Android Development (`Smartphone` icon)
        *   Cross-Platform App Development (`TabletSmartphone` icon)
        *   Intuitive UI/UX Design for Mobile (`Layers` icon)
        *   App Maintenance & Ongoing Support (`Settings2` icon)
    *   **CTA Section**: "Develop Your Mobile App" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `accent` color theme for icons/hover.
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Smartphone`, `TabletSmartphone`, `Layers`, `Settings2`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `accent` theme for card hover/icons. Use the correct icons for Mobile App features.

---

## File: `src/app/web-development/page.tsx`

*   **Purpose**: Explains the Web Development services.
*   **Content**:
    *   **Hero Section**: "Web Development" title, descriptive paragraph emphasizing the website as a crucial asset.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Custom Web Design & Development (`Laptop` icon)
        *   Responsive & Mobile-First Design (`Palette` icon)
        *   B2B E-commerce Solutions (`ShoppingCart` icon)
        *   CMS Integration & Development (`Code` icon)
    *   **CTA Section**: "Build Your Website" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `primary` color theme for icons/hover.
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Code`, `Laptop`, `ShoppingCart`, `Palette`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `primary` theme for card hover/icons. Use the correct icons for Web Dev features.

---

## File: `src/app/website-maintenance/page.tsx`

*   **Purpose**: Details the Website Maintenance services.
*   **Content**:
    *   **Hero Section**: "Website Maintenance" title, descriptive paragraph about ensuring security and performance.
    *   **Features Grid**: Four `Card` components (`sm:grid-cols-2 lg:grid-cols-4`):
        *   Security Updates & Monitoring (`ShieldCheck` icon)
        *   Software & Plugin Management (`Wrench` icon)
        *   Reliable Regular Backups (`DatabaseBackup` icon)
        *   Performance Optimization Checks (`Activity` icon)
    *   **CTA Section**: "Secure Your Website" `Button` linking to `/contact`.
*   **Styling**:
    *   **Layout**: Consistent layout.
    *   **Appearance**: Consistent appearance, using `primary` color theme for icons/hover.
    *   **Animation**: Consistent animations.
*   **Components Used**: `Card`, `CardContent`, `CardDescription`, `CardHeader`, `CardTitle`, `Button`, `Wrench`, `ShieldCheck`, `Activity`, `DatabaseBackup`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Apply the `primary` theme for card hover/icons. Use the correct icons for Maintenance features.

---

## File: `src/app/why-us/page.tsx`

*   **Purpose**: Articulates the key reasons and advantages for choosing Nitya Marketing Management as a partner.
*   **Content**:
    *   **Layout**: Two-column grid (`lg:grid-cols-2`) with text content on the left and an image on the right (reversed order on mobile).
    *   **Text Content**:
        *   Heading: "Why Partner with Nitya Marketing?".
        *   Introductory paragraph emphasizing partnership and results.
        *   Grid (`grid-cols-1 sm:grid-cols-2`) of six key differentiators/points (from `whyChooseUsPoints` array), each with an icon (`Award`, `Target`, `TrendingUp`, `BrainCircuit`, `Handshake`, `Users`), title, and description, styled within bordered cards.
        *   CTA: "Let's Collaborate" `Button` linking to `/contact`.
    *   **Image**: Placeholder image representing growth/partnership.
*   **Styling**:
    *   **Layout**: Standard section padding, `container` (`max-w-7xl`), main grid (`lg:grid-cols-2 gap-12 lg:gap-16 items-center`). Text content uses `space-y-8`. Points grid uses `gap-6 pt-4`. Image order changes (`order-first lg:order-last`). Text aligned center on mobile, left on `lg`+.
    *   **Appearance**: Background gradient. Main heading large, bold, `text-primary`. Paragraph `text-lg md:text-xl text-muted-foreground`. Points are styled as small cards (`p-4 rounded-lg bg-card border shadow-sm`) with icon (`p-2 bg-accent/10 rounded-full text-accent`), title (`font-semibold text-base md:text-lg`), and description (`text-sm text-muted-foreground`). CTA button `size="lg"`. Image `rounded-xl shadow-lg object-cover aspect-[5/6]`.
    *   **Animation**: Text content `animate-fade-in-left`. Image `animate-fade-in-right`.
*   **Components Used**: `Image`, `Button`, `CheckCircle`, `Target`, `TrendingUp`, `Handshake`, `Award`, `BrainCircuit`, `Users`, `ArrowRight` (Lucide icons), `Link`.
*   **Redirection**: CTA button links to `/contact`.
*   **AI Hints**: Use the `whyChooseUsPoints` array for content. Use `https://picsum.photos/500/600?random=10` for the image with appropriate `alt` and `data-ai-hint="business growth partnership success"`. Ensure the image uses `priority` prop. Implement the two-column layout with responsive order changes.

---

## File: `src/app/services/page.tsx`

*   **Purpose**: Provides a high-level overview of the main service categories offered by Nitya Marketing, linking to more specific service areas. Acts as a central hub for service exploration.
*   **Content**:
    *   **Hero Section**: Centered `BriefcaseBusiness` icon, "Our Comprehensive B2B Services" title, introductory paragraph summarizing the offerings.
    *   **Service Categories Grid**: A grid (`md:grid-cols-3`) displaying the main service categories (from `serviceCategories` array):
        *   Digital Marketing Suite (`LayoutGrid` icon)
        *   Marketing Technologies (`Cog` icon)
        *   Web & Mobile Solutions (`Laptop` icon)
        *   Each category is presented in a styled card/box with an icon, title, description, and an "Explore Solutions" button linking to the relevant section/page.
    *   **CTA Section**: Separated by a top border, includes "Ready to Elevate Your Marketing?" heading, paragraph, and "Get Your Free Consultation" `Button`.
*   **Styling**:
    *   **Layout**: Standard section padding, `container` (`max-w-7xl`), `space-y-16`. Hero section centered (`text-center max-w-3xl mx-auto`). Service categories use responsive grid (`grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto`). Category boxes use `flex flex-col items-center text-center p-6`. CTA section styled similarly to the Insights page CTA (`mt-16 pt-12 border-t`, centered text).
    *   **Appearance**: Background gradient. Hero icon large (`w-10 h-10`) in styled span (`bg-primary/10 text-primary`). Title large, bold, `text-primary`. Paragraph `text-lg md:text-xl text-muted-foreground`. Category boxes styled like cards (`bg-card rounded-lg shadow-md border hover:shadow-lg hover:border-accent`). Icons in styled spans (`p-4 bg-accent/10 rounded-full text-accent`). Titles `text-xl md:text-2xl font-semibold`. Descriptions `text-muted-foreground flex-grow`. Buttons are `variant="outline" size="sm"`. CTA button `size="lg"`.
    *   **Animation**: Hero `animate-fade-in-up`. Category boxes `animate-fade-in-up` with staggered delays (`index * 150}ms`). CTA section `animate-fade-in-up delay-500`.
*   **Components Used**: `Button`, `ArrowRight`, `LayoutGrid`, `Cog`, `Laptop`, `BriefcaseBusiness` (Lucide icons), `Link`.
*   **Redirection**: "Explore Solutions" buttons link to respective service pages (`/digital-marketing/seo`, `/marketing-technologies`, `/web-development`). CTA button links to `/contact`.
*   **AI Hints**: Populate service categories from the `serviceCategories` array. Use `flex-grow` on the description `<p>` tag within category boxes to help maintain consistent button alignment if descriptions vary in length. Apply hover effects and staggered animations.

---

    