import TextImageContainer from "@/app/ui/Containers/TextImageContainer";
import Services from "@/app/ui/Services/Services";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center items-start min-h-screen flex-col mx-16 my-8 gap-20">
      <Services/>
      <TextImageContainer/>
    </main>
  );
}
