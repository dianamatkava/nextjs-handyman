import Form from "@/app/ui/Form/Form";
import ContactDetail from "@/app/ui/ContactUs/ContactDetail";
import {FaPhoneAlt} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import HeaderH1 from "@/app/ui/Components/HeaderH1";



export default function ContactUs () {
  return (
    <div className="w-full h-full flex-col justify-center items-start gap-5 inline-flex">
      <div className="w-full sm:w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
        <HeaderH1 title={'Get in Touch!'} id={'contact'}/>
        <div className="w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
        </div>
      </div>
      <div className="w-full h-full justify-center items-start gap-10 inline-flex">
        <div className="w-full sm:w-1/2 h-full flex-col justify-start items-start gap-5 inline-flex">
          <Form/>
        </div>
        <div className="w-1/2 h-full hidden sm:flex flex-col justify-end items-center gap-5 pt-5">
          <ContactDetail key={1} name={'Call Me'} title={'24/7 Availability'} value={'+01 123-12-12-00'}>
            <FaPhoneAlt size={18}/>
          </ContactDetail>
          <ContactDetail key={2} name={'Contact Me'} title={'Leave me a message'} value={'alexandr@gmail.com'}>
            <MdAlternateEmail size={18}/>
          </ContactDetail>
          <ContactDetail key={3} name={'WhatsUp'} title={'24/7 Availability'} value={'+01 123-12-12-00'}>
            <MdFacebook size={18}/>
          </ContactDetail>
          <ContactDetail key={4} name={'Facebook'} title={'Contact me on Facebook'} value={'Alexandr'}>
            <MdOutlineWhatsapp size={18}/>
          </ContactDetail>
        </div>
      </div>
    </div>
  )
}