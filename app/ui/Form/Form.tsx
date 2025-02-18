import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import InputField from "@/app/ui/Form/InputField";
import TextArea from "@/app/ui/Form/TextArea";
import {MdOutlineMail} from "react-icons/md";
import {LuMessageCircleMore} from "react-icons/lu";

export default function Form () {
  return (
    <form className="w-full h-fit flex-col justify-center items-start gap-5 inline-flex">
      <InputField name='name' label="Full Name" placeholder={'John Doe'} isRequired={true}>
        <MdOutlineMail size={18}/>
      </InputField>
      <InputField name='email' label="Email Address" placeholder={'john.doe@gmail.com'} isRequired={true}>
        <MdOutlineMail size={18}/>
      </InputField>
      <InputField name='phone' label="Phone Number" placeholder={'+01 123-45-67-000'} isRequired={false}>
        <MdOutlineMail size={18}/>
      </InputField>
      <TextArea name={'message'} label={'Enter your message'} placeholder={'Enter your message'} isRequired={false}>
        <LuMessageCircleMore size={18}/>
      </TextArea>
      <CTAPrimary/>
    </form>
  )
}