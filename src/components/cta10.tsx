"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/motion";

interface Cta10Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta10 = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Buy Now",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Cta10Props) => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="bg-gradient-to-br from-primary/5 to-primary/10 border flex w-full flex-col gap-10 overflow-hidden rounded-2xl p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <motion.div className="flex-1" variants={fadeInUp}>
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl text-lg">
              {description}
            </p>
          </motion.div>
          <motion.div
            className="flex shrink-0 flex-col gap-3 sm:flex-row"
            variants={fadeInUp}
          >
            {buttons.secondary && (
              <Button variant="outline" size="lg" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Cta10 };
