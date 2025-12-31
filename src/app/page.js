import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Process from "@/components/Process";
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
    title: "Attract",
    desc: "If you already have basic systems and are ready to scale, we automate Product Ops, RevOps, processes and more. We identify opportunities to support other teams and create custom automations across your business.",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Work services={services}/>
        <Process/>
      </main>
    </>
  );
}
