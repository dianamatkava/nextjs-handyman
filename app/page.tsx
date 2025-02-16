import Services from "@/app/ui/Services/Services";
import ContactUsBlock from "@/app/ui/Containers/ContactUsBlock";
import WhoAmI from "@/app/ui/AboutMe/WhoAmI";
import AboutMe from "@/app/ui/AboutMe/AboutMe";
import Testimonial from "@/app/ui/Testimonial/Testimonial";
import ContactUs from "@/app/ui/ContactUs/ContactUs";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center items-start min-h-screen flex-col px-20 py-8 gap-20">
      <WhoAmI/>
      <Services/>
      <AboutMe/>
      <ContactUsBlock/>
      <Testimonial/>
      <ContactUs/>
    </main>
  );
}
