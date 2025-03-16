import Form from "@/app/ui/Form/Form";
import ContactDetail from "@/app/ui/ContactUs/ContactDetail";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import ImageContainer from "@/app/ui/Components/ImageContainer";
export default function ContactUs() {
  return (
    <div className="w-full h-full flex-col justify-center items-start gap-5 inline-flex">
      <div className="w-full h-full justify-center items-center gap-16 inline-flex">
        <div className="w-full max-w-[500px] h-full flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-full h-fit flex-col justify-start items-start gap-5 inline-flex">
            <HeaderH1 title={"Get in Touch!"} id={"contact"} />
            <div className="w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
              Got a home repair question or need a helping hand with a small
              project? I'm here for you! Reach out via phone or the contact
              form, and let's chat about how we can make your space feel even
              better.
            </div>
          </div>
          <Form />
        </div>
        <div className="w-fit h-full hidden sm:flex flex-col justify-center items-center gap-5 pt-5">
          <ImageContainer
            src="/contactme-form2.jpg"
            alt="Contact Us"
            className="w-full max-w-[520px]"
          />
          <ContactDetail
            key={1}
            name={"Call Me"}
            title={"24/7 Availability"}
            value={"+1 619 510 1998"}
          >
            <FaPhoneAlt size={18} />
          </ContactDetail>
          {/* <ContactDetail
            key={3}
            name={"WhatsUp"}
            title={"24/7 Availability"}
            value={"+1 619 510 1998"}
          >
            <MdOutlineWhatsapp size={18} />
          </ContactDetail> */}
          <ContactDetail
            key={2}
            name={"Contact Me"}
            title={"Leave me a message"}
            value={"alexhandyman@gmail.com"}
          >
            <MdAlternateEmail size={18} />
          </ContactDetail>
          {/* <ContactDetail
            key={4}
            name={"Facebook"}
            title={"Contact me on Facebook"}
            value={"Alex Handyman"}
          >
            <MdFacebook size={18} />
          </ContactDetail> */}
        </div>
      </div>
    </div>
  );
}
