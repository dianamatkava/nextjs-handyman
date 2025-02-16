import Header from "@/app/ui/Header/Header";
import Tick from "@/app/ui/Components/Tick";
import CTAAvailable from "@/app/ui/Components/CTAAvailable";
import Profile from "@/app/ui/Components/Profile";

export default function HeroHeader () {
  return (
    <div className="w-full h-fit py-6 px-12 justify-center items-center"
         style={{
            background: ` 
              url("${'Header.png'}") no-repeat center / cover;
            `
      }}>
      <Header/>
      <div className="w-full h-fit flex-col justify-center items-center gap-20 inline-flex my-14">
        <div className="max-w-[750px] h-fit flex-col justify-start items-center gap-8 flex">
          <Profile/>
          <div className="self-stretch flex-col justify-start items-center gap-12 flex">
            <div className="self-stretch flex-col justify-start items-center gap-5 flex">
              <div
                className="self-stretch text-center text-white text-[45px] font-medium font-['Plus Jakarta Sans'] leading-[50px]">Reliable
                Handyman Services
              </div>
              <div className="flex-col justify-start items-center gap-8 flex">
                <div
                  className="self-stretch text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">As
                  a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
                  reconstruction services, including residential. and reconstruction services and reconstruction
                  services, including residential. and reconstruction services
                </div>
                <div className="justify-center items-center gap-5 flex flex-wrap ">
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-wide">Plumbing
                  </div>
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight"> •
                  </div>
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-wide">Electrical
                  </div>
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight"> •
                  </div>
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-wide">Repairs
                  </div>
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight"> •
                  </div>
                  <div
                    className="w-fit text-center text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-wide">Home
                    Maintenance
                  </div>
                </div>
              </div>
            </div>
            <CTAAvailable />
          </div>
        </div>
        <div className="max-w-[850px] inline-flex items-center justify-center">
          <div className="w-full self-stretch justify-center items-center gap-3 flex flex-wrap lg:gap-8 md:inline-flex md:flex-nowrap">
            <Tick key={1} title={'Working with Insurances'}/>
            <Tick key={2} title={'Virtual consultations from home'}/>
            <Tick key={3} title={'24/7 Emergency Repair Services'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
