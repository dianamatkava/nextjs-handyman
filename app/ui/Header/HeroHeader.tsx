import Header from "@/app/ui/Header/Header";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import Profile from "@/app/ui/Components/Profile";
import Thumbtack from "@/app/ui/Components/Thumbtack";
export default function HeroHeader() {
  return (
    <div
      className="w-full h-fit py-6 px-5 sm:px-12 justify-center items-center bg-[#0e1518]/60"
      style={{
        background: ` 
              url("${"Header.gif"}") no-repeat 80% center / cover;
            `,
      }}
    >
      <Header />
      <div className="w-full h-fit flex-col justify-center items-center inline-flex gap-8 py-20 sm:mt-[-0px]">
        <div className="max-w-[750px] h-fit flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center gap-8 sm:gap-12 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="w-full h-full self-stretch flex flex-col justify-center items-center gap-5">
                <h2 className="text-center text-white text-4xl sm:text-6xl font-semibold font-['Plus Jakarta Sans']">
                  Reliable Handyman Services
                </h2>
                <div className="w-full text-center text-[#e4e4e4] text-xs sm:text-sm font-medium font-['Plus Jakarta Sans'] sm:leading-6">
                  Hi, I am Alex. I provide reliable handyman services focused on
                  quality and precision. From fixing minor issues to handling
                  larger maintenance projects, I ensure every job is completed
                  with care and attention to detail. My goal is to offer you
                  peace of mind by keeping your home safe, comfortable, and
                  well-maintained.
                </div>
                <div className="justify-center items-center gap-5 flex flex-wrap">
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    Plumbing
                  </div>
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    {" "}
                    •
                  </div>
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    Electrical
                  </div>
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    {" "}
                    •
                  </div>
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    Repairs
                  </div>
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    {" "}
                    •
                  </div>
                  <div className="w-fit text-center text-white text-xs font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                    Home Maintenance
                  </div>
                </div>
              </div>
              <CTAGroup>
                <div className="text-center text-[#e4e4e4] text-xs font-medium font-['Plus Jakarta Sans']">
                  Available 24/7
                </div>
              </CTAGroup>
            </div>
            <div className=" w-full h-fit flex flex-col items-center justify-center gap-6">
              <div className="w-full h-fit flex items-center justify-center gap-8">
                <Thumbtack />
                {/* <span className="text-xxlg font-semibold text-white">4.9</span>
                <StartRating rating={4} /> */}
              </div>
              <div className="w-full h-fit flex items-center justify-center gap-8">
                <div className="max-w-[600px] self-stretch text-center text-[#e4e4e4] text-xs sm:text-sm font-medium font-['Plus Jakarta Sans'] sm:leading-6">
                  I take pride in delivering meticulous work and exceptional
                  customer care, my satisfaction rating speaks for itself.
                  Clients consistently highlight my attention to detail, respect
                  for their homes, and commitment to completing each task
                  efficiently. My goal is simple: to provide you with a
                  hassle-free experience and the peace of mind that comes from
                  knowing the job is done right the first time.
                </div>
              </div>
              <Profile
                mode={"dark"}
                name={"Alex Zakharov"}
                title={"Handyman"}
                image={"/MyImage.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
