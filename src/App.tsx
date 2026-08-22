import { Analytics } from "@vercel/analytics/react";
import { Contact } from "./components/sections/Contact";
import { Credentials } from "./components/sections/Credentials";
import { Expertise } from "./components/sections/Expertise";
import { Hero } from "./components/sections/Hero";
import { ProfessionalExperience } from "./components/sections/ProfessionalExperience";
import { Projects } from "./components/sections/Projects";
import { SectorExperience } from "./components/sections/SectorExperience";
import { SelectedEngagements } from "./components/sections/SelectedEngagements";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { portfolio } from "./data/portfolio";

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.person.name,
    jobTitle: portfolio.person.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolio.person.location
    },
    email: `mailto:${portfolio.person.email}`,
    url: portfolio.seo.canonicalUrl,
    sameAs: [portfolio.person.linkedin].filter(Boolean),
    knowsAbout: portfolio.expertise.flatMap((category) => category.items)
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <SectorExperience />
        <ProfessionalExperience />
        <SelectedEngagements />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
