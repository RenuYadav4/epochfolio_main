import React from "react";
import hero from "../../assets/herosec.png";
import Button from "../../component/Home/Button";
import { PiStudentBold } from "react-icons/pi";
import { LuWarehouse } from "react-icons/lu";
import { LuWaypoints } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import service from "../../assets/future.jpg";
import hereo from "../../assets/c2.png";
import { TiTick } from "react-icons/ti";

const Solution = () => {
  return (
    <>
      <div
        className="flex gap-5 h-[950px] bg-cover bg-center bg-no-repeat object-fill"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="bg-[#ffffffd0] flex h-[950px] bg-cover bg-center bg-no-repeat object-fill">
          <div className="md:w-[80%] p-25">
            <div className="flex items-center md:gap-5 md:pt-30">
              <div className="w-15 border-b-2 border-b-amber-600"></div>
              <div className="text-xl">
                <p>Empowering Futures, Not Just Resumes</p>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#ff7e56] ">
              <span className="text-[#e94d65]">Smarter</span>
              <br />
              Solutions
            </h1>
            <div className="flex gap-5 my-8 w-[50%]">
              <div>
                <p>
                  At EpochFolio, we deliver smart, scalable solutions that
                  bridge the gap between education and employability
                </p>
              </div>
            </div>
            <div className=" w-[50%] border-b-2 border-b-gray-300 my-10"></div>
            <div className="flex gap-10 w-full justify-between">
              <div className="flex-1">
                <p>
                  Our integrated ecosystem offers more than just tools — it
                  provides an end-to-end journey. From dynamic portfolio
                  creation to seamless connections with recruiters and industry
                  experts, students are equipped with the resources they need to
                  thrive, so they graduate not only job-ready but future-ready.
                </p>
              </div>
              <div className="flex-1">
                <p>
                  For institutions and training centers, our solutions bring
                  clarity, accountability, and impact. Track student progress,
                  showcase institutional achievements, and foster industry
                  collaboration — all within a streamlined digital environment.
                  With EpochFolio.
                </p>
              </div>
              <div className="flex flex-2 flex-col md:flex-row items-baseline-last justify-between pb-2 gap-5">
                <div className="flex flex-col items-center justify-center gap-3">
                  <PiStudentBold className="w-[60px] text-[#e94d65] h-[60px] object-cover" />
                  <h1 className="text-2xl font-bold text-[#f69273]">
                    Students
                  </h1>
                  <p className="text-center text-md">
                    Build standout portfolios and grow faster with expert career
                    guidance.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <LuWarehouse className="w-[60px] text-[#e94d65] h-[60px] object-cover" />
                  <h1 className="text-2xl font-bold text-[#f69273]">College</h1>
                  <p className="text-center text-md">
                    Track student progress and proudly showcase success with
                    strong industry connections.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* hero sec 2 */}
        </div>
      </div>
      <div className="flex-col md:flex-row flex w-full justify-between md:pl-10 my-15">
        {/* 2nd section */}
        <div className="md:w-[55%] md:h-[100%] w-auto h-auto">
          <img
            src={service}
            alt=""
            className="w-auto h-auto md:w-[1000px] md:h-[900px] object-cover"
          />
        </div>
        <div className="md:w-[40%] p-5">
          <div className="flex items-center md:gap-5 md:pt-30">
            <div className="w-15 border-b-2 border-b-amber-600"></div>
            <div className="text-xl">
              <p>Our 5-Step Process to Empower Careers</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#e94d65]">
            <span className="text-[#ff7e56]">Future-Ready </span> <br />
            Students
          </h1>
          <div className="flex gap-5 mt-8">
            <div>
              <p>
                EpochFolio transforms how students prepare for their careers by
                offering powerful, easy-to-use tools. From building impactful
                portfolios to tracking growth, we ensure every learner is
                supported through a complete digital journey.
              </p>
            </div>
            <div>
              <p>
                Our solutions simplify the entire career preparation
                process—giving students, colleges, and recruiters a common
                platform for real-time visibility, achievement tracking, and
                industry engagement.It bridges the gap between academic learning
                and practical opportunities.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center text-gray-700 gap-5 mt-10">
            <div className="flex flex-col gap-10">
              <div className="flex items-center md:text-lg gap-2">
                <LuWaypoints className="text-3xl text-[#e94d65]" />
                Roadmaps
              </div>
              <div className="flex items-center md:text-lg gap-2">
                {" "}
                <MdOutlineReduceCapacity className="text-3xl text-[#e94d65]" />
                Mentorship
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center md:text-lg gap-2 ">
                <LuNewspaper className="text-3xl text-[#e94d65]" />
                Protfolios
                <br /> building
              </div>
              <div className="flex items-center md:text-lg gap-2">
                {" "}
                <MdFactory className="text-3xl text-[#e94d65]" />
                Training
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center md:text-lg gap-2">
                <FaArrowsDownToPeople className="text-3xl text-[#e94d65]" />{" "}
                Placement <br />
                Strategy
              </div>
              <div className="flex items-center md:text-lg gap-2">
                {" "}
                <GiLevelThreeAdvanced className="text-3xl text-[#e94d65]" />{" "}
                Support
              </div>
            </div>
          </div>

          <div className="w-full border-b-2 border-b-gray-300 my-20"></div>
          <div className="flex gap-2">
            <Button
              text="Explore Solutions"
              color="bg-[#e94d65] text-white hover:transparent hover:bg-white hover:text-[#e94d65] transition duration-300F"
            />
            <Button
              text="Get Started Free"
              color="text-white bg-[#ff7e56] hover:bg-white hover:text-[#ff7e56] transition duration-300"
            />
          </div>
        </div>
      </div>
      <div
        className="h-[550px] mt-10 flex flex-col justify-center items-center bg-no-repeat object-top"
        style={{
          backgroundImage: `url(${hereo})`,
        }}
      >
        <div className="flex mt-10">
          <div className="text-center flex flex-col items-center text-white">
            <p className="text-5xl font-bold">90%</p>
            <h1 className="font-bold text-2xl text-[#F3B164] ">
              Discover Potential
            </h1>
            <div className="w-15 border-b-3 border-b-white mt-2 mb-5"></div>
            <p className="w-80 text-[#F3B164]">
              Identify student strengths with expert-designed assessment tools
            </p>
          </div>
          <div className="text-center flex flex-col items-center text-white">
            <p className="text-5xl font-bold">500+</p>
            <h1 className="font-bold text-2xl text-[#F3B164]">
              Build Portfolio
            </h1>
            <div className="w-15 border-b-3 border-b-white mt-2 mb-5"></div>
            <p className="w-80 text-[#F3B164]">
              Guide them in crafting resumes, personal brands, and project
              showcases
            </p>
          </div>
          <div className="text-center flex flex-col items-center text-white">
            <p className="text-5xl font-bold">170+</p>
            <h1 className="font-bold text-2xl text-[#F3B164]">Gain Exposure</h1>
            <div className="w-15 border-b-3 border-b-white mt-2 mb-5"></div>
            <p className="w-80 text-[#F3B164]">
              Connect them with real recruiters, internships, and industry
              simulations
            </p>
          </div>
          <div className="text-center flex flex-col items-center text-white">
            <p className="text-5xl font-bold">30+</p>
            <h1 className="font-bold text-2xl text-[#F3B164]">Track Success</h1>
            <div className="w-15 border-b-3 border-b-white mt-2 mb-5"></div>
            <p className="w-80 text-[#F3B164]">
              Continuously monitor growth and optimize career-readiness programs
            </p>
          </div>
        </div>
      </div>

      

      {/* newssection  */}
      <div
        className="flex items-center justify-center gap-5 h-[550px] bg-cover bg-center bg-no-repeat object-fill mb-5"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="bg-[#ffffffd0] flex flex-col items-center justify-center gap-5 h-[550px] w-full bg-cover bg-center bg-no-repeat object-fill ">
          <div className="font-sarabun font-extrabold text-[60px] leading-[60px] tracking-[-1.8px] text-center align-middle">
            Hungry for <span className="text-[#E94D65]"> Guidance?</span>
          </div>
          <p className="font-roboto font-normal text-lg leading-[27px] tracking-normal text-center align-middle">
            Let our experts guide you through every step of your student success
            strategy.  We offer free, personalized insights tailored to your
            institution’s goals.
          </p>
          <div className=" flex gap-2 w-[786.66px] h-[99px]">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-[644.55px] h-[52px] p-2 border-1 bg-white border-black"
            />
            <button type="button" className="w-[133px] h-[52px] bg-[#E94D65]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
      );
};
export default Solution;      