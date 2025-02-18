import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import InputField from "@/app/ui/Form/InputField";
import TextArea from "@/app/ui/Form/TextArea";
import {MdOutlineMail} from "react-icons/md";
import {LuMessageCircleMore, LuSend} from "react-icons/lu";
import InputLineField from "@/app/ui/Form/InputLineField";

export default function Form () {
  return (
    <form className="w-full h-fit flex-col justify-center items-start gap-5 inline-flex">
       <InputLineField
        name='name'
        label="Full Name"
        placeholder={'John Doe'}
        isRequired={true}
        labelClassName={'text-black'}
        inputClassName={'rounded-lg w-full text-[#595959] bg-slate-100 text-sm font-normal font-[\'Plus Jakarta Sans\'] leading-tight tracking-tight'}
      >
          <div className="z-10 absolute bottom-3 left-2">
            <MdOutlineMail size={18}/>
          </div>
      </InputLineField>
      <InputLineField
        name='email'
        label="Email Address"
        placeholder={'john.doe@gmail.com'}
        isRequired={true}
        labelClassName={'text-black'}
        inputClassName={'rounded-lg w-full text-[#595959] bg-slate-100 text-sm font-normal font-[\'Plus Jakarta Sans\'] leading-tight tracking-tight'}
      >
          <div className="z-10 absolute bottom-3 left-2">
            <MdOutlineMail size={18}/>
          </div>
      </InputLineField>
      <InputLineField
        name='phone'
        label="Phone Number"
        placeholder={'+01 123-45-67-000'}
        isRequired={false}
        labelClassName={'text-black'}
        inputClassName={'rounded-lg w-full text-[#595959] bg-slate-100 text-sm font-normal font-[\'Plus Jakarta Sans\'] leading-tight tracking-tight'}
      >
          <div className="z-10 absolute bottom-3 left-2">
            <MdOutlineMail size={18}/>
          </div>
      </InputLineField>
      <TextArea name={'message'} label={'Enter your message'} placeholder={'Enter your message'} isRequired={false}>
        <LuMessageCircleMore size={18}/>
      </TextArea>
      <CTAPrimary className={'bg-[#fe7800]'}/>
    </form>
  )
}