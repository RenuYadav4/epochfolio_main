import React from "react";
import img from "../../assets/aboutus.jpg";
import profile from "../../assets/profile.png";
import profile2 from "../../assets/co-founder.png";
import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";
import addres from "../../assets/addres.png";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import Button from "../Home/Button";
const About = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center mt-10">
        <p className="w-[526px] h-[366px] rotate-0 opacity-100 font-alexandria font-bold text-[50px] leading-[100%] tracking-[2%] text-center">
          “Every student, regardless of their background, deserves a real chance
          at success.”
        </p>
      </div>
      <div className="flex justify-between h-[412px] mx-20">
        <div
          className="flex-1 flex justify-center items-center"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-1 flex justify-center items-center h-full w-full bg-[#21040473]">
            <p className="font-alexandria text-white font-bold text-[24px] leading-[100%] tracking-[0%] text-center w-[464px] h-[257px] rotate-0 opacity-100 top-[64px] left-[45px]">
              <span className="text-bold text-[73px]">T</span>
              he EpochFolio, we are not just tackling the problem of poor
              placements — we’re redefining what’s possible for millions of
              students who’ve been overlooked, underserved, and underestimated
              by the traditional system.
            </p>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-1 flex flex-col justify-center items-center h-full w-full bg-[#ffffff88]">
            <p className="font-alexandria text-[30px] font-bold leading-[100%] tracking-[0%] text-center">
              Driven by Purpose
            </p>
            <p className="font-alexandria text-[30px] font-bold leading-[100%] tracking-[0%] text-center mt-5 text-[#8F1015]">
              Built on Impact
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-10 lg:px-20 py-20 gap-10">
        <div className="flex-1 flex flex-col items-center gap-20">
          <div className="flex-1 flex flex-col items-center gap-10 ">
            <h2 className="text-4xl 2xl:text-6xl font-bold text-[#ff7e56]  h-[55px] top-[1107px] left-[174px] rotate-0 opacity-100">
              {" "}
              <span className="text-[#E94D65]">Our</span> Mission
            </h2>
            <p className="text-gray-600 text-lg 2xl:text-3xl md:w-[518px] h-[210px] rotate-0 opacity-100 top-[1210px] left-[90px] font-alexandria font-light text-[25px] leading-[100%] tracking-[0%]">
              In today’s world, a degree isn’t enough. Students from Tier 2 and
              Tier 3 colleges, rural campuses, and small towns often find
              themselves stuck in a cycle of endless online courses, broken
              promises, and recruiters who never call back. We’ve lived that
              reality. And we decided to change it.
            </p>
          </div>

          <div className="w-[357.1051025390625px] h-[400.63037109375px] top-[1609px] 2xl:top-[1909px] md:left-[103px] rounded-[19.78px] rotate-0 opacity-100 shadow-[0px_3.96px_3.96px_0px_#00000040] flex flex-col items-center">
            <h2 className="w-[210px] h-[80px]  top-[31.02px] left-[74px] rotate-0 opacity-100 font-alexandria font-bold text-[33.2px] leading-[100%] tracking-[0%] text-center">
              {" "}
              Epochfolio’s Mission
            </h2>
            <p className="text-[#FF484A] w-[305.6661376953125px] h-[233.45375061035156px] mt-10 rotate-0 opacity-100 font-alexandria font-normal text-[19.3px] leading-[100%] tracking-[0%]">
              We aim to be India’s most trusted link between colleges and
              companies — where talent meets opportunity without compromis
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10 items-center justify-between text-center">
          <img
            src={img}
            alt="About Us"
            className="rounded-lg shadow-lg w-[381px] h-[619px] rotate-0 opacity-100 object-cover"
          />
          <h3 className="md:w-[390px] md:h-[70px] xl:w-[522px] xl:h-[108px] rotate-0 opacity-100 top-[1733px] left-[631px] font-alexandria font-normal md:text-[22px] xl:text-[29.24px] leading-[100%] tracking-[0%]">
            A future where no capable student is left behind because of a lack
            of network, exposure, or opportunity.
          </h3>
          <h2 className="text-2xl lg:text-4xl 2xl:text-8xl font-bold text-[#ff7e56]">
            {" "}
            <span className="text-[#E94D65]">Our</span> Vision
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[357.1051025390625px] h-[400.63037109375px]  rounded-[19.78px] rotate-0 opacity-100 shadow-[0px_3.96px_3.96px_0px_#00000040] flex flex-col items-center">
          <h2 className="w-[210px] h-[80px]  top-[31.02px] left-[74px] rotate-0 opacity-100 font-alexandria font-bold text-[33.2px] leading-[100%] tracking-[0%] text-center">
            {" "}
            Epochfolio’s Mission
          </h2>
          <p className="text-[#FF484A] w-[305.6661376953125px] h-[233.45375061035156px] mt-10 rotate-0 opacity-100 font-alexandria font-normal text-[19.3px] leading-[100%] tracking-[0%]">
            We aim to be India’s most trusted link between colleges and
            companies — where talent meets opportunity without compromis
          </p>
        </div>
      </div>
      <div className="flex justify-end items-end px-20 py-20 gap-40">
       
        <div className="w-[357.1051025390625px] h-[400.63037109375px]  rounded-[19.78px] rotate-0 opacity-100 shadow-[0px_3.96px_3.96px_0px_#00000040] flex flex-col items-center">
          <h2 className="w-[210px] h-[80px]  top-[31.02px] left-[74px] rotate-0 opacity-100 font-alexandria font-bold text-[33.2px] leading-[100%] tracking-[0%] text-center">
            {" "}
            Epochfolio’s Mission
          </h2>
          <p className="text-[#FF484A] w-[305.6661376953125px] h-[233.45375061035156px] mt-10 rotate-0 opacity-100 font-alexandria font-normal text-[19.3px] leading-[100%] tracking-[0%]">
            We aim to be India’s most trusted link between colleges and
            companies — where talent meets opportunity without compromis
          </p>
        </div>
      </div>

      <div className="text-3xl flex  justify-center md:text-4xl lg:text-5xl xl:text-7xl  mb-10 mt-[-50px] font-bold">
          <h1 className="text-[#E94D65]">Our <span className="text-[#F3B164]">Founders</span></h1>

        </div>
      <div className="px-10 md:px-20">
        {/* Pink Section */}
        <div className="bg-[#FEF4F2] max-w-[95vw] w-full rounded-sm p-10 flex  h-[65vh] items-center justify-center gap-10 shadow-[-2px_0_2px_rgba(0,0,0,0.1),2px_0_2px_rgba(0,0,0,0.1),0_5px_1px_rgba(0,0,0,0.2)]">

          {/* Profiles with Individual Boxes */}
          <div className="flex justify-center md:gap-20  lg:gap-50">
            {/* Founder 1 */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={profile}
                alt="Founder 1"
                className="w-[250px] h-[250px] rounded-full object-cover shadow-md"
              />
              <div className="bg-white rounded-4xl p-3 w-60 max-w-xs text-center shadow-[-2px_2px_6px_rgba(0,0,0,0.1),2px_2px_6px_rgba(0,0,0,0.1),0_6px_12px_rgba(0,0,0,0.15)]">
                {/* Founder Name */}
                <h3 className="text-lg md:text-2xl text-[#FF725E] font-bold">Naitik Joshi</h3>

                {/* Role */}
                <p className="text-sm md:text-xl font-semibold text-gray-600 mt-3">(Founder)</p>
              </div>

            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={profile2}
                alt="Founder 2"
                className="w-[250px] h-[250px] rounded-full object-cover shadow-md bg-white"
              />
              <div className="bg-white rounded-4xl p-3 w-60 max-w-xs text-center shadow-[-2px_2px_6px_rgba(0,0,0,0.1),2px_2px_6px_rgba(0,0,0,0.1),0_6px_12px_rgba(0,0,0,0.15)] inset-shadow-sm inset-shadow-gray-400">
                {/* Founder Name */}
                <h3 className="text-lg md:text-xl  text-[#FF725E] font-bold">Nitesh Kumar Sharma</h3>

                {/* Role */}
                <p className="text-sm md:text-xl font-semibold text-gray-600 mt-3">(Co-Founder)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#ff7e56] mb-15 mt-25 text-left">
          <span className="text-[#E94D65]">Founder’s</span> Notes
        </h2>
      </div>
{/* First Note */}
<div className="h-auto flex flex-col items-center justify-center rounded-[30px] bg-[#FF1C3F24] mx-5 md:mx-20 my-5 p-6 md:p-10">
  <p className="w-full max-w-3xl font-alexandria font-normal text-lg md:text-[22.75px] leading-snug text-center md:text-left">
    "I wasn’t from a Tier 1 college. I didn’t have IIT-IIM networks. But I had fire. 
    I built EpochFolio for students like me — who just need one chance to change everything."
  </p>
  <div className="flex w-full justify-end pt-5 md:px-20">
    <p className="font-alexandria font-bold text-base md:text-[21.76px] leading-tight text-right">
      <span className="text-[#E94D65]">— Naitik Joshi</span>, Founder, EpochFolio
    </p>
  </div>
</div>

{/* Second Note */}
<div className="h-auto flex flex-col items-center justify-center rounded-[30px] bg-[#FF1C3F24] mx-5 md:mx-20 my-5 p-6 md:p-10">
  <p className="w-full max-w-3xl font-alexandria font-normal text-lg md:text-[22.75px] leading-snug text-center md:text-left">
    "With over 10 years of experience working closely with companies, colleges, and students, 
    I’ve come to understand the unique needs of each stakeholder in the placement ecosystem, 
    ensuring that we are building a robust and sustainable bridge between academic excellence 
    and industry demands."
  </p>
  <div className="flex w-full justify-end pt-5 md:px-20">
    <p className="font-alexandria font-bold text-base md:text-[21.76px] leading-tight text-right">
      <span className="text-[#E94D65]">— Nitesh Kumar Sharma</span>, Co-Founder and Director, EpochFolio
    </p>
  </div>
</div>


      {/* contact us */}
      <div className="flex mx-20 my-10 justify-center items-center h-[600px] gap-40">
        <div className="flex flex-col items-center justify-center gap-15 w-1/2">
          <div className="flex items-center justify-center gap-5">
            {" "}
            <div className="w-[59.20433044433594px] h-0 top-[79.73px] left-[197.19px] rotate-0 opacity-100 border-[2.86px]"></div>
            <p className="font-inter font-semibold text-[15px] leading-[100%] tracking-[0%]">
              CONTACT US WITH EASE
            </p>
            <div className="w-[59.20433044433594px] h-0 top-[79.73px] left-[197.19px] rotate-0 opacity-100 border-[2.86px]"></div>
          </div>
          <h1 className="font-inter font-semibold text-[46.26px] leading-[100%] tracking-[0%]">
            {" "}
            Get in <span className="text-[#FF9761]">touch</span>{" "}
          </h1>
          <p className="font-inter font-medium text-[14.04px] leading-[100%] tracking-[0%] text-center">
            visit our agency or simply send us an email anytime you want.if you
            have any questions,please feel free to contact us.
          </p>
          <div className="flex items-start justify-center gap-5">
            <div className="flex-1 flex flex-col items-start justify-center gap-5 ">
              <img
                src={addres}
                alt=""
                width={78}
                height={78}
                className="w-[78.30250549316406px] h-[78.30250549316406px] top-[327.53px] left-[118.41px] rotate-0 opacity-100 object-bottom"
              />
              <h1 className="font-inter font-bold text-[17.19px] leading-[100%] tracking-[0%]">
                Address
              </h1>{" "}
              <p className="font-inter font-normal text-[9.77px] leading-[100%] tracking-[0%]">
                EpochFolio HQ, Pataudi, India
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-5">
              {" "}
              <img
                src={call}
                width={78}
                height={78}
                alt=""
                className="w-[78.30250549316406px] h-[78.30250549316406px] top-[327.53px] left-[118.41px] rotate-0 opacity-100 object-cover"
              />
              <h1 className="font-inter font-bold text-[17.19px] leading-[100%] tracking-[0%]">
                Call Us
              </h1>{" "}
              <p className="font-inter font-normal text-[9.77px] leading-[100%] tracking-[0%]">
                9016731145
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-5">
              {" "}
              <img
                src={mail}
                width={78}
                height={78}
                alt=""
                className="w-[78.30250549316406px] h-[78.30250549316406px] top-[327.53px] left-[118.41px] rotate-0 opacity-100 object-cover"
              />
              <h1 className="font-inter font-bold text-[17.19px] leading-[100%] tracking-[0%]">
                Mail Us
              </h1>{" "}
              <p className="font-inter font-normal text-[9.77px] leading-[100%] tracking-[0%]">
                contact@epochfolio.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-[43px] top-[109.81px] left-[633.1px] rotate-0 opacity-100 rounded-[4.77px] border-[0.95px] px-3"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-full h-[43px] top-[109.81px] left-[633.1px] rotate-0 opacity-100 rounded-[4.77px] border-[0.95px] px-3"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="w-full h-[43px] top-[109.81px] left-[633.1px] rotate-0 opacity-100 rounded-[4.77px] border-[0.95px] px-3"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-full h-[101.22030639648438px] top-[308.43px] left-[633.1px] rotate-0 opacity-100 rounded-[4.77px] border-[0.95px] px-3"
          ></textarea>
          <div className="flex w-full">
            <Button text={"Send Message"} color={"bg-black text-white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
