import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is FlowSync?",
    answer:
      "FlowSync is an intuitive project management platform designed to boost team coordination and productivity.",
  },
  {
    question: "How does FlowSync differ from other platforms?",
    answer:
      "FlowSync combines a simple, user-friendly interface with powerful features, making it suitable for teams looking for efficiency and ease.",
  },
  {
    question: "Is FlowSync suitable for freelancers and small teams?",
    answer:
      "Yes, FlowSync is designed to work for individuals, freelancers, and teams of any size, offering flexibility for varied project needs.",
  },
  {
    question: "What makes FlowSync unique?",
    answer:
      "FlowSync features customizable task lanes, milestone tracking, and performance analytics for effective project oversight.",
  },
  {
    question: "Does FlowSync support multi-project management?",
    answer:
      "Yes, FlowSync can handle multiple projects simultaneously, enabling you to track diverse tasks with ease",
  },
  {
    question: "Is FlowSync easy to use for new team members?",
    answer:
      "Absolutely, FlowSync is built to be intuitive, allowing new users to navigate and use the tool with minimal learning.",
  },
];

const features = [
  {
    title: "Customizable Task Lanes",
    description:
      "Easily organize tasks with flexible lanes that adapt to any workflow, making project tracking seamless.",
    icon: Layout,
  },
  {
    title: "Milestone Progress Tracking",
    description:
      "Set project milestones to help your team stay on schedule and focus on key deliverables.",
    icon: Calendar,
  },
  {
    title: "Real-Time Performance Insights",
    description:
      "Access a dynamic dashboard that offers real-time data on team performance and project progression.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-10 text-center">
      <div className="sequential-animation-container pb-20">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-title pb-4">
      <span className="text-sequential">Hi, I&apos;m KG Coder.</span>
      <span className="text-sequential">I created simple design for a Jira clone.</span>
    </h2>
  </div>
        <p className="animate-bounce text-[#ff0095] text-[30px]">👇</p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
        Power Up Your Projects with FlowSync <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with
            <Image
                src={"/logoFlowbg.png"}
                alt="Zscrum Logo"
                width={450}  // Increase width
                height={90}  // Increase height
                className="h-16 sm:h-28 w-auto object-contain"
              />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
        Simplify your project management with FlowSync, a versatile tool that enhances team collaboration, keeps tasks organized, and drives productivity.
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4 bg-[#ff0095] hover:bg-[#ff66b2] text-white">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-5">
  <div className="container mx-auto">
    <h3 className="text-3xl font-bold mb-12 text-center">Key Features</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-gray-800 border border-transparent hover:border-[#ff0095] hover:scale-105 hover:-translate-y-2 transition-transform duration-300"
        >
          <CardContent className="pt-6">
            <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
            <h4 className="text-xl font-semibold mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-300">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Companies Carousel */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
          Join countless teams worldwide who rely on FlowSync to organize tasks, stay on track, and achieve more. Start your journey to seamless project management today!
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce bg-[#ff0095] hover:bg-[#ff66b2] text-white">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
