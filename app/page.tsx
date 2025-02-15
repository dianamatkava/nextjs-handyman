import TextImageContainer from "@/app/ui/Containers/TextImageContainer";
import Services from "@/app/ui/Services/Services";
import ContactUsBlock from "@/app/ui/Containers/ContactUsBlock";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center items-start min-h-screen flex-col px-20 py-8 gap-24">
      <Services/>
      <TextImageContainer/>
      <ContactUsBlock/>
    </main>
  );
}
