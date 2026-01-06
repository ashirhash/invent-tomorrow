import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Invest from "@/components/Invest";
import People from "@/components/People";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";

const services = [
  {
    key: 0,
    imgUrl: "/images/microphone.svg",
    title: "Attract",
    desc: "We support your marketing team. Collect and segment customer data for precise targeting. Launch multi-channel campaigns with personalized emails, ads, and content.",
  },
  {
    key: 1,
    imgUrl: "/images/contact-doller.svg",
    title: "Convert",
    desc: "We support your sales team. Identify high-value prospects and route them to the right reps. Send personalized outreach, follow-ups, and update CRM automatically.",
  },
  {
    key: 2,
    imgUrl: "/images/notes-pen.svg",
    title: "Custom",
    desc: "If you already have basic systems and are ready to scale, we automate Product Ops, RevOps, processes and more. We identify opportunities to support other teams and create custom automations across your business.",
  },
];

const processes = [
  {
    key: 1,
    step: "01",
    title: "System Breakdown",
    description:
      "We break down your process step by step to create a clear automation plan",
    icon: "/images/search.svg",
    alt: "System Breakdown",
  },
  {
    key: 2,
    step: "02",
    title: "Build Phase",
    description:
      "We build the AI automation workflow exactly as planned. You check it and approve.",
    icon: "/images/chip.svg",
    alt: "Build Phase",
  },
  {
    key: 3,
    step: "03",
    title: "Check and Run",
    description:
      "We run a final check to ensure it's ready. Then it goes into your system.",
    icon: "/images/rocket.svg",
    alt: "Check and Run",
  },
];

const whys = [
  {
    key: 0,
    imgUrl: "/images/refresh-bg.svg",
    title: "Adaptive Approach",
    desc: "We don't believe in rigid templates. Our systems evolve as your business grows, ensuring your automation remains relevant and powerful.",
  },
  {
    key: 1,
    imgUrl: "/images/search-bg.svg",
    title: "Deep Business Audit",
    desc: "Most agencies start coding immediately. We start by living in your workflows for a week.",
  },
  {
    key: 2,
    imgUrl: "/images/handshake-bg.svg",
    title: "Long-Term Partnership",
    desc: "We're not a project shop; we're your outsourced automation department.",
  },
  {
    key: 3,
    imgUrl: "/images/contacts-blue.svg",
    title: "Dedicated Team",
    desc: "You get a team that talks to you clearly, checks in regularly, and makes sure everything gets done on time.",
  },
];

const people = [
  {
    key: 0,
    imgUrl: "/images/placeholder.png",
    title: "Abdul Haadi",
    designation: "Co-founder & CEO",
    inUrl: "https://www.linkedin.com/",
  },
  {
    key: 1,
    imgUrl: "/images/placeholder.png",
    title: "Tabish Almas",
    designation: "Co-founder & CEO",
    inUrl: "https://www.linkedin.com/",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* <main>
        <Banner />
        <Work services={services} />
        <Process processes={processes} />
        <WhyUs whys={whys} />
        <Invest />
        <CTA />
        <People people={people} />
      </main>
      <Footer /> */}
    </>
  );
}
