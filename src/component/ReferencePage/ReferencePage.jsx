import { TiTick } from "react-icons/ti";
import herosec2 from "../../assets/h1.jpg";
import herosec3 from "../../assets/h2.jpg";
import herosec4 from "../../assets/h3.png";
import ref from "../../assets/ref.jpg";
import ref2 from "../../assets/ref2.jpg";
import ref3 from "../../assets/ref3.jpg";
import ref4 from "../../assets/ref4.jpg";
import ref5 from "../../assets/ref5.jpg";
import ref6 from "../../assets/ref6.jpg";

const Referencepage = () => {
  const heroMeto = [
    {
      id: 1,
      img: ref,
      h1: "Portfolio Building",
      p: "Craft professional, modern documents tailored to each career goal.",
    },
    {
      id: 2,
      img: ref2,
      h1: "Soft Skills + Technical Bootcamps",
      p: "Train students with real-world business communication and tech fluency.",
    },
    {
      id: 3,
      img: ref3,
      h1: "1:1 Career Mentorship",
      p: "Personalized coaching by industry experts for clarity and confidence.",
    },
    {
      id: 4,
      img: ref4,
      h1: "Placement & Internship Drives",
      p: "Connect your students with recruiters via verified drives and events.",
    },
    {
      id: 5,
      img: ref5,
      h1: "College Branding & Outreach",
      p: "Showcase your campus through digital campaigns and national exposure."},    
      {
      id: 6,
      img: ref6,
      h1: "HR & TPO Dashboard Tools",
      p: "Track student growth, attendance, performance, and hiring activity easily.",
    }
      ];

  return (
    <>
      <div className="md:w-full  flex flex-col items-center justify-center text-center p-25">
        <div className="flex items-center md:gap-5">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>WHY IT IS FREE?</p>
          </div>
          <div className="w-15 border-b-2 border-b-amber-600"></div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#ff7e56] ">
          <span className="text-[#e94d65]">Your Growth </span>
          Our Goal
        </h1>
        <div className="flex gap-5 my-8 w-[80%]">
          <div>
            <p>
              Whether you're a college, training center, or student, our system
              simplifies career preparation by integrating skill building,
              digital presence, and employer engagement into a seamless
              experience.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col flex-wrap md:flex-row md:justify-center items-center md:gap-8 my-20 mx-9 md:h-full md:mt-[20px] pb-18
    "
      >
        {heroMeto.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-4 w-auto md:w-[400px] border-2 border-gray-300 rounded-lg h-[400px] shadow-[5px_20px_20px_0px_gray] object-fill"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="">
              <img
                src={item.img}
                alt={`hero-section-${item.id}`}
                className="w-90 md:w-100 h-60 object-cover rounded-lg shadow-lg opacity-0.1 bg-gradient-to-tl "
              />
            
              
            </div>
            <div className="-mt-8 h-full px-4 bg-gradient-to-t from-[#e94d64cb] to-[#0e0b0bb7]  z-20">
              <h1
                className="text-2xl md:text-3xl shadow-2xl font-bold px-4 text-[#f2420d] border-none"
              >
                {item.h1}
              </h1>
              <p className="mt-2 px-4 w-80 md:w-auto text-lg text-white text-justify">
                {item.p}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFA361] flex flex-col text-white items-center justify-center gap-5 h-[550px] w-full bg-cover bg-center bg-no-repeat object-fill ">
        <div class="font-sarabun font-extrabold text-[60px] leading-[60px] tracking-[-1.8px] text-white text-center align-middle">
          Curious About Career Growth?
        </div>
        <p class="font-roboto font-normal text-lg leading-[27px] tracking-normal text-center align-middle">
          Let our experts guide you through every step of your student success
          strategy. We offer free, personalized insights tailored to your
          institution’s goals.
        </p>
        <div className=" flex gap-2 w-[786.66px] h-[99px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-[644.55px] h-[52px] p-2 border-1 bg-white border-black"
          />
          <button type="button" className="w-[133px] h-[52px] bg-[#E94D65]">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>

      

    </>
  );
};

export default Referencepage;
