
export default function Header () {
  return (
    <div className="w-full h-fit justify-between inline-flex">
      <div className="justify-start items-center gap-5 inline-flex">
        <div className="w-[45px] h-[45px] bg-white rounded-full"/>
        <div className="text-white text-md font-medium font-['Poppins']">alexandr.lorem.com</div>
      </div>
      <div className="justify-start items-center gap-12 flex">
        <div className="justify-start items-center gap-8 flex">
          <div className="text-white text-sm font-normal font-['Plus Jakarta Sans']">About</div>
          <div className="text-white text-sm font-normal font-['Plus Jakarta Sans']">Services</div>
          <div className="text-white text-sm font-normal font-['Plus Jakarta Sans']">Contact</div>
        </div>
        <div
          className="w-[110px] h-[40px] rounded-[40px] justify-center items-center gap-2.5 flex bg-white">
          <div className="w-fit text-black text-sm font-medium font-['Plus Jakarta Sans']">Contact</div>
        </div>
      </div>
    </div>
  );
}
