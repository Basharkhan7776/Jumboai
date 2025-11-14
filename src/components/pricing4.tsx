"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

interface PricingPlan {
  name: string;
  badge: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

interface Pricing4Props {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
  className?: string;
}

const Pricing4 = ({
  title = "Pricing",
  description = "Check out our affordable pricing plans.",
  plans = [
    {
      name: "Free",
      badge: "Free",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        "Unlimited Integrations",
        "Windows, Linux, Mac support",
        "24/7 Support",
        "Free updates",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      badge: "Pro",
      monthlyPrice: "$29",
      yearlyPrice: "$249",
      features: [
        "Everything in FREE",
        "Live call suport every month",
        "Unlimited Storage",
      ],
      buttonText: "Purchase",
    },
    {
      name: "Elite",
      badge: "Elite",
      monthlyPrice: "$59",
      yearlyPrice: "$549",
      features: [
        "Everything in PRO",
        "Advanced analytics",
        "Custom branding",
        "Unlimited users",
      ],
      buttonText: "Purchase",
      isPopular: true,
    },
  ],
  className = "",
}: Pricing4Props) => {
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <section className={`py-24 ${className}`}>
      <div className="container">
        <motion.div
          className="mx-auto flex max-w-7xl flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-bold lg:text-5xl"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <motion.p
              className="text-muted-foreground max-w-3xl text-lg"
              variants={fadeInUp}
            >
              {description}
            </motion.p>
            <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="monthly"
                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
                  >
                    Monthly
                  </Label>
                </div>
                <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                  <RadioGroupItem
                    value="annually"
                    id="annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="annually"
                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                  >
                    Yearly
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <motion.div
            className="flex w-full flex-col items-stretch gap-6 md:flex-row"
            variants={staggerContainer}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`flex w-full flex-col rounded-lg border p-6 text-left transition-shadow hover:shadow-lg ${
                  plan.isPopular ? "border-2 border-primary shadow-md" : ""
                }`}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Badge className="mb-6 w-fit text-xs" variant={plan.isPopular ? "default" : "secondary"}>
                  {plan.badge}
                </Badge>
                <span className="text-3xl font-bold mb-1">
                  {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <p
                  className={`text-muted-foreground text-sm mb-6 ${plan.monthlyPrice === "$0" ? "invisible" : ""}`}
                >
                  {isAnnually ? "per year" : "per month"}
                </p>
                <Separator className="my-4" />
                <div className="flex h-full flex-col justify-between gap-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="size-4 mt-0.5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                    {plan.buttonText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Pricing4 };
