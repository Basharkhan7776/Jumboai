"use client";

import { Navbar1 } from "@/components/navbar1";
import { About3 } from "@/components/about3";
import { Faq1 } from "@/components/faq1";
import { Footer2 } from "@/components/footer2";
import { Pricing4 } from "@/components/pricing4";
import { Casestudies2 } from "@/components/casestudies2";
import { Cta10 } from "@/components/cta10";
import { Contact7 } from "@/components/contact7";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/motion";
import Threads from "@/components/Threads";

const Home = () => {
  const jumboAILogo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "Jumbo AI Logo",
    title: "Jumbo AI",
  };

  const navMenu = [
    { title: "Home", url: "/" },
    { title: "About", url: "#about" },
    { title: "Pricing", url: "#pricing" },
    { title: "Contact", url: "#contact" },
    { title: "FAQ", url: "#faq" },
    {
      title: "Legal",
      url: "#",
      items: [
        {
          title: "Terms & Conditions",
          description: "Our terms and conditions for using our services",
          icon: <Shield className="size-5 shrink-0" />,
          url: "/terms",
        },
        {
          title: "Privacy Policy",
          description: "How we handle and protect your data",
          icon: <Shield className="size-5 shrink-0" />,
          url: "/privacy",
        },
      ],
    },
  ];

  const authButtons = {
    login: { title: "Book a Call", url: "#contact" },
    signup: { title: "Book a Call", url: "#contact" },
  };

  const faqItems = [
    {
      id: "faq-1",
      question: "What AI services does Jumbo AI provide?",
      answer:
        "Jumbo AI offers comprehensive AI consulting, custom machine learning solutions, AI integration, data analytics, and intelligent automation services tailored to your business needs.",
    },
    {
      id: "faq-2",
      question: "How can AI benefit my business?",
      answer:
        "AI can streamline operations, reduce costs, improve decision-making through data insights, enhance customer experiences, and unlock new revenue opportunities through intelligent automation and predictive analytics.",
    },
    {
      id: "faq-3",
      question: "What industries do you specialize in?",
      answer:
        "We work across various industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customized to meet the unique challenges of each sector.",
    },
    {
      id: "faq-4",
      question: "How long does an AI implementation typically take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple implementations can take 4-8 weeks, while comprehensive solutions may require 3-6 months. We provide detailed timelines during the consultation phase.",
    },
    {
      id: "faq-5",
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages to ensure your AI systems continue to perform optimally. Our team provides regular updates, monitoring, and optimization services.",
    },
    {
      id: "faq-6",
      question: "What makes Jumbo AI different from other AI consultancies?",
      answer:
        "We combine cutting-edge AI technology with deep industry expertise, offering personalized solutions rather than one-size-fits-all approaches. Our focus is on delivering measurable ROI and long-term partnerships.",
    },
    {
      id: "faq-7",
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement industry-leading security protocols, comply with all relevant data protection regulations (GDPR, CCPA, etc.), and use encryption and secure infrastructure to protect your sensitive data at all times.",
    },
  ];

  const footerMenuItems = [
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#about" },
        { text: "Pricing", url: "#pricing" },
        { text: "Case Studies", url: "#" },
        { text: "Contact", url: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "FAQ", url: "#faq" },
        { text: "Blog", url: "#" },
        { text: "Documentation", url: "#" },
        { text: "Support", url: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Terms & Conditions", url: "/terms" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    },
  ];

  const bottomLinks = [
    { text: "Terms and Conditions", url: "/terms" },
    { text: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <div className="min-h-screen">
      <header>
        <Navbar1 logo={jumboAILogo} menu={navMenu} auth={authButtons} />
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center" id="hero" aria-label="Hero">
        {/* Threads Background */}
        <div className="absolute inset-0 w-full h-full">
          <Threads
            color={[0, 0, 0]}
            amplitude={2.9}
            distance={0.8}
            enableMouseInteraction={false}
          />
        </div>

        <div className="container relative z-20 px-4">
          <motion.div
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 text-foreground"
              variants={fadeInUp}
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                AI
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-10"
              variants={fadeInUp}
            >
              Cutting-edge artificial intelligence solutions to help businesses innovate, automate, and scale.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="#contact">Book a Call</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        </section>

        {/* Case Studies Section */}
        <section aria-label="Case Studies">
          <Casestudies2 />
        </section>

        {/* CTA Section */}
        <section aria-label="Call to Action">
          <Cta10
        heading="Ready to Transform Your Business with AI?"
        description="Join hundreds of companies already leveraging AI to innovate, automate, and scale. Let's discuss how Jumbo AI can help you achieve your goals."
        buttons={{
          primary: {
            text: "Book a Free Consultation",
            url: "#contact",
          },
          secondary: {
            text: "View Case Studies",
            url: "#",
          },
        }}
          />
        </section>

        {/* About Section */}
        <section id="about" aria-label="About Us">
        <About3
          title="About Jumbo AI"
          description="We are a team of AI experts, data scientists, and engineers dedicated to helping businesses harness the power of artificial intelligence. With years of experience and cutting-edge expertise, we transform complex challenges into innovative solutions."
          breakout={{
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
            alt: "Jumbo AI logo",
            title: "Innovation at the forefront",
            description:
              "Leveraging the latest AI technologies to deliver exceptional results for our clients.",
            buttonText: "Learn more",
            buttonUrl: "#services",
          }}
          companiesTitle="Trusted by leading organizations"
          achievementsTitle="Our Impact"
          achievementsDescription="Delivering measurable results and driving innovation across industries."
          achievements={[
            { label: "Clients Served", value: "200+" },
            { label: "AI Projects", value: "500+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Industry Awards", value: "15+" },
          ]}
          />
        </section>

        {/* Contact Section */}
        <section id="contact" aria-label="Contact">
        <Contact7
          title="Get in Touch"
          description="Have questions about our AI solutions? Our team is here to help you transform your business."
          emailLabel="Email Us"
          emailDescription="We respond to all inquiries within 24 hours."
          email="hello@jumboai.tech"
          officeLabel="Visit Our Office"
          officeDescription="Schedule a meeting at our headquarters."
          officeAddress="123 AI Innovation Drive, Tech Valley, CA 94000"
          phoneLabel="Call Us"
          phoneDescription="Available Mon-Fri, 9am-6pm PST."
          phone="+1 (555) 123-4567"
          chatLabel="Live Chat"
          chatDescription="Get instant support from our AI experts."
          chatLink="Start Chat Now"
          />
        </section>

        {/* Pricing Section */}
        <section id="pricing" aria-label="Pricing">
        <Pricing4
          title="Flexible Pricing Plans"
          description="Choose the perfect plan for your AI transformation journey. Scale as you grow."
          plans={[
            {
              name: "Starter",
              badge: "Starter",
              monthlyPrice: "$2,999",
              yearlyPrice: "$29,990",
              features: [
                "AI Strategy Consultation",
                "1 Custom AI Model",
                "Basic Integration Support",
                "Email Support",
                "Monthly Progress Reports",
              ],
              buttonText: "Get Started",
            },
            {
              name: "Professional",
              badge: "Professional",
              monthlyPrice: "$7,999",
              yearlyPrice: "$79,990",
              features: [
                "Everything in Starter",
                "3 Custom AI Models",
                "Advanced Integration",
                "Priority Support",
                "Dedicated Account Manager",
                "Weekly Progress Meetings",
              ],
              buttonText: "Book a Call",
              isPopular: true,
            },
            {
              name: "Enterprise",
              badge: "Enterprise",
              monthlyPrice: "$19,999",
              yearlyPrice: "$199,990",
              features: [
                "Everything in Professional",
                "Unlimited AI Models",
                "Full-Stack AI Integration",
                "24/7 Premium Support",
                "On-site Training",
                "Custom SLA Agreement",
              ],
              buttonText: "Contact Sales",
            },
          ]}
          />
        </section>

        {/* FAQ Section */}
        <section id="faq" aria-label="FAQ">
        <Faq1
          heading="Frequently Asked Questions"
          items={faqItems}
          />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer2
        logo={jumboAILogo}
        tagline="AI-powered solutions for the future."
        menuItems={footerMenuItems}
        copyright="© 2024 Jumbo AI. All rights reserved."
          bottomLinks={bottomLinks}
        />
      </footer>
    </div>
  );
};

export default Home;
