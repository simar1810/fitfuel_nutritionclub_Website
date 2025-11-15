import Carousel from "@/components/core/Carousel";
import { classSection, howItWorks, subscriptionPlans, trustedPartners, whyChooseSection } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaRegEnvelope, } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import FreeTrialCustomerModal from "@/components/core/FreeTrialCustomerModal";

export default async function FreeTrialClient() {
  return (
    <div className="">

      {/* HERO SECTION STARTSx */}
      <div className="h-[40vh] sm:h-[50vh] md:h-[75vh] lg:h-[95vh] bg-[url('/s1mobile.png')] bg-cover bg-top-center p-8">
        <div className="max-w-[1200px] h-full bg-red- 200 text-white mx-auto px-8 hidden md:flex flex-col">
          {/* <Image
            src="/nav-logo.png"
            width={760}
            height={760}
            alt="logo of true fit"
            className="h-[80px] w-[80px] object-contain"
          /> */}
          <h1 className="max-w-[18ch] text-[36px] lg:text-[50px] font-semibold leading-[1.2] mt-[40px] lg:mt-[80px]">
            Flow Into Wellness - One Step at a Time
          </h1>
          <p className="max-w-[64ch] text-[15px] leading-[1.2] mt-[12px]">
            Discover a healthier lifestyle with personalized nutrition plans, AI-powered tools, and expert guidance to help you manage or prevent diabetes.
          </p>
          <Link target="_blank" href="/app" className="w-fit bg-[var(--accent-1)] text-[var(--color-1)] text-[15px] font-bold px-4 py-2 mt-[20px] relative rounded-full">
            <span>Start Free Today</span>
            <span className="h-full bg-[var(--accent-2)] p-1 absolute right-0 top-0 translate-x-2/3 aspect-square flex items-center justify-center rounded-full">
              <MdOutlineArrowOutward className="w-full h-full" />
            </span>
          </Link>
          <div className="w-fit text-center mt-auto flex items-center justify-evenly gap-4 divide-x-[1px] divide-[#FFFFFF33] whitespace-nowrap">
            <div className="flex-1 px-1 sm:px-2">
              <p className="text-[32px]">10,000</p>
              <p className="text-[14px]">Lives Impacted</p>
            </div>
            <div className="flex-1 px-1 sm:px-2">
              <p className="text-[32px]">5000+</p>
              <p className="text-[14px]">Personalized Plans Delivered</p>
            </div>
            <div className="flex-1 px-1 sm:px-2">
              <p className="text-[32px]">95%</p>
              <p className="text-[14px]">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[16px] py-[12px] md:hidden">
        <h1 className="text-[24px] sm:text-[40px] font-bold leading-[1.2]">
          Flow Into Wellness - One Step at a Time
        </h1>
        <p className="text-[10px] leading-[1.2] mt-[12px]">
          Discover a healthier lifestyle with personalized nutrition plans, AI-powered tools, and expert guidance to help you manage or prevent diabetes.
        </p>
        <Link target="_blank" href="/app" className="block w-fit bg-[var(--accent-1)] text-[var(--color-1)] text-[12px] font-bold px-4 py-2 mt-[12px] relative rounded-full">
          <span>Start Free Today</span>
          <span className="h-full bg-[var(--accent-2)] p-1 absolute right-0 top-0 translate-x-2/3 aspect-square flex items-center justify-center rounded-full">
            <MdOutlineArrowOutward className="w-full h-full" />
          </span>
        </Link>
        <div className="text-center mt-[20px] flex items-center justify-evenly gap-4 divide-x-[1px] divide-black">
          <div className="flex-1 px-1 sm:px-2">
            <p className="text-[20px] sm:text-[24px]">10,000</p>
            <p className="text-[8px]">Lives Impacted</p>
          </div>
          <div className="flex-1 px-1 sm:px-2">
            <p className="text-[20px] sm:text-[24px]">5000+</p>
            <p className="text-[8px]">Personalized Plans Delivered</p>
          </div>
          <div className="flex-1 px-1 sm:px-2">
            <p className="text-[20px] sm:text-[24px]">95%</p>
            <p className="text-[8px]">Customer Satisfaction Rate</p>
          </div>
        </div>
      </div>
      {/* HERO SECTION ENDS */}


      {/* HOW IT WORKS SECTION STARTS */}
      <div className="w-full bg-[var(--accent-1)] text-white flex justify-center items-center p-4 pt-8 pb-28 md:p-[4rem] md:pb-32 relative">
        <div className="max-w-[1200px] mx-auto lg:flex flex-row justify-between items-start">
          <div className="w-full text-left mb-[40px]">
            <h1 className="text-[32px] md:text-[50px] font-semibold leading-[1] mb-[8px] md:mb-[14px]">How it Works</h1>
            <p className="text-[12px] md:text-[20px] text-[#D9D9D9] mb-[12px] md:mb-[20px]">See how we understand your problem and make the best suitable plan for you</p>
            <Link
              target="_blank"
              href="/app"
              className="bg-white text-[12px] md:text-[16px] text-[var(--accent-1)] font-semibold rounded-full px-4 py-2"
            >
              Start Free Today
            </Link>
          </div>

          <div className="max-w-[600px] w-full">
            {howItWorks.map((item) => (
              <div key={item.i} className="min-h-20 pb-[20px] flex gap-4">
                <div className=" flex flex-col items-center gap-1 relative">
                  <div className="w-10 h-10 bg-[var(--accent-2)] flex justify-center items-center rounded-full aspect-square z-[100]">{item.i}</div>
                  {item.i <= 3 && <div className={`w-[1px] h-[calc(100%+20px)] absolute top-0 translate-y-4 bg-[var(--accent-2)]`} />}
                </div>
                <div className="text-left">
                  <h1 className="font-semibold text-[15px] md:text-[20px] mb-[4px] md:mb-[10px]">{item.h}</h1>
                  <p className="text-[12px] md:text-[20px] text-[#FFFFFF80] leading-[1.2]">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <Image
            src="/logo-large-light.png"
            className="absolute w-[120px] lg:w-[350px] aspect-square bottom-0 left-1/2 lg:left-0 translate-x-[-50%] lg:translate-x-[20%] xl:translate-x-[40%] object-bottom object-contain"
            height={548}
            width={548}
            alt="lightened image of true fit logo"
          /> */}
        </div>
      </div>
      {/* HOW IT WORKS SECTION ENDS */}


      {/* COACHES ENDS */}
      {/* <div className="text-center px-[20px] py-[28px] md:py-[40px]">
        <h1 className="text-[var(--accent-1)] font-semibold text-[20px] leading-[1.2]">COACHES</h1>
        <h2 className="text-[24px] md:text-[48px] font-semibold text-center leading-[1.2] mb-[8px] md:mb-[48px]">Meet your Fitness Coaches</h2>
        <div className="max-w-[1200px] mx-auto lg:flex gap-[40px]">
          <Image
            height={1024}
            width={1024}
            src="/meet_coach.jpg"
            alt="image of true fit coaches"
            className="max-w-[350px] lg:max-w-[500px] w-full mx-auto aspect-square object-cover rounded-md"
          />
          <div className="mt-[20px] lg:mt-0">
            <h2 className="text-[20px] md:text-[36px] font-semibold text-center text-[var(--accent-1)] leading-[] mb-[8px] md:mb-[12px]">
              Inderpreet Singh&nbsp;
              <span className="text-black">&</span>&nbsp;
              Amrit Kaur
            </h2>
            <p className="max-w-[70ch] text-[#00000080] text-center text-[12px] md:tex t-[16px] text-left leading-[1.1] mx-auto mb-[60px] md:mb-[20px]">Are you ready to transform your fitness journey? Setting clear, achievable goals is the first step towards success. Whether you&nbsp;re aiming to lose weight, build muscle, or improve endurance, a diverse workout routine incorporating cardio, strength, and flexibility exercises will help you reach your targets.</p>
            <h2 className="text-[20px] md:text-[28px] font-bold mb-[16px]">Our Transformation</h2>
            <div className="md:flex items-center justify-center gap-4">
              <div>
                <Image
                  src="/before.jpg"
                  alt="true fit coaches transformation"
                  height={1024}
                  width={1024}
                  className="max-w-[300px] md:max-w-[250px] mx-auto aspect-square object-cover object-top mb-[10px] rounded-[12px]"
                />
                <p className="text-[var(--accent-1)] font-bold">Before</p>
              </div>
              <div>
                <Image
                  src="/arrow-down.svg"
                  alt="arrow left"
                  height={100}
                  width={100}
                  className="block md:hidden h-[50px] mx-auto my-4"
                />
                <Image
                  src="/arrow-left.svg"
                  alt="arrow left"
                  height={100}
                  width={100}
                  className="hidden lg:block min-w-[50px] mx-auto my-4"
                />
              </div>
              <div>
                <Image
                  src="/after.jpg"
                  alt="true fit coaches transformation"
                  height={1024}
                  width={1024}
                  className="max-w-[300px] md:max-w-[250px] mx-auto aspect-square object-cover object-[left_top]  object-center mb-[10px] rounded-[12px]"
                />
                <p className="text-[var(--accent-1)] font-bold">After</p>
              </div>
            </div>
          </div>

        </div>
      </div> */}

      <div className="text-center px-[20px] py-[28px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[28px] font-bold mb-[16px]">Our Transformation</h2>
        <div className="md:flex items-center justify-center gap-4">
          <div>
            <Image
              src="/before.jpg"
              alt="true fit coaches transformation before"
              height={1024}
              width={1024}
              className="max-w-[300px] md:max-w-[250px] mx-auto aspect-square object-cover object-top mb-[10px] rounded-[12px]"
            />
            <p className="text-[var(--accent-1)] font-bold">Before</p>
          </div>
          <div>
            <Image
              src="/arrow-down.svg"
              alt="arrow down"
              height={100}
              width={100}
              className="block md:hidden h-[50px] mx-auto my-4"
            />
            <Image
              src="/arrow-left.svg"
              alt="arrow left"
              height={100}
              width={100}
              className="hidden lg:block min-w-[50px] mx-auto my-4"
            />
          </div>
          <div>
            <Image
              src="/after.jpg"
              alt="true fit coaches transformation after"
              height={1024}
              width={1024}
              className="max-w-[300px] md:max-w-[250px] mx-auto aspect-square object-cover object-[left_top]  mb-[10px] rounded-[12px]"
            />
            <p className="text-[var(--accent-1)] font-bold">After</p>
          </div>
        </div>
      </div>

      {/* COACHES ENDS */}


      {/* TRUSTED PARTNERS SECTION STARTS */}
      <div className="bg-gradient-to-tr from-[#449B9E1A] via-[#16BA980D] to-[#16A7621A] text-center px-4 py-[3rem] p b-[5rem] gap-3 w-full">
        <h1 className="text-[var(--accent-1)] font-semibold text-[20px] leading-[1.2]">ABOUT US</h1>
        <h2 className="text-[24px] md:text-[48px] font-semibold text-center leading-[1.2] mb-[8px] md:mb-[12px]">Your Trusted Partner in Health</h2>
        <p className="max-w-[60ch] text-[10px] md:text-[14px] text-center mx-auto mb-[12px] md:mb-[16px]">True Fit combines the power of science-backed nutrition with personalized guidance to help you reclaim your health and live diabetes-free.</p>
        <button className="rounded-full text-white bg-[var(--accent-1)] text-[12px] md:text-[16px] font-semibold py-2 px-4">Download Now</button>
        <div className="md:max-w-[1400px] w-full flex flex-wrap justify-center items-start gap-y-8 gap-3 mt-8">
          {trustedPartners.map((item, index) => (
            <div key={index} className={`w-[48%] md:max-w-[23%] flex flex-col items-center cursor-pointer relative ${index === 0 ? "md:mt-0" : index === 1 ? "md:mt-12" : index === 2 ? "md:mt-[5rem]" : "md:mt-4"}`}>
              <Image src={item.i} alt=" " width={279} height={256} className="w-full object-cover" />
              <div className={`w-full bg-white rounded-b-xl text-center leading-[1.2] px-3 pb-2 ${index === 3 && "hidden"}`}>
                <h1 className="text-[12px] sm:text-[16px] md:text-[20px] font-semibold mt-2">{item.h}</h1>
                <p className="text-[9px] sm:text-[11px] md:text-[12px] text-gray-500 mt-[4px]">{item.d}</p>
              </div>
              {index === 3 && <div
                className={"w-full absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center"}>
                + Many More
              </div>}
            </div>
          ))}
        </div>
      </div>
      {/* TRUSTED PARTNERS SECTION END */}


      {/* CLASSES SECTION STARTS */}
      <div className="hidden w-full h-full bg-[url('/s4.svg')] bg-cover md:flex flex-col justify-center items-start px-[20px] py-[3rem] gap-3">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[24px] md:text-[48px] font-bold text-left text-white leading-[1.2]">Classes for Every Level <br /> and Intention</h1>
          <p className="text-[8px] md:text-[16px] md:max-w-[60ch] xl:max-w-[35%] text-left text-white">From beginner-friendly sessions to advanced health workshops, our programs are designed to meet you where you are.</p>
          <div className="max-w-[1200px] w-full flex flex-wrap justify-between gap-3 mt-[12rem]">
            {classSection.map((item, index) => (
              <div key={index} className="w-[calc(50%-6px)] lg:w-[calc(25%-12px)] rounded-xl bg-white flex flex-col items-start text-left p-4 gap-3 md:gap-1 cursor-pointer transition-all duration-200 shadow-xl">
                <div className="bg-[#d9d9d942] w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-xl flex justify-center items-center mb-2 shadow-xl border-[1px]">
                  <Image src={item.i} alt=" " width={70} height={70} className="w-[30px]" />
                </div>
                <h1 className="text-[24px] md:text-[1.2rem] font-semibold mt-2 leading-[1.2]">{item.h}</h1>
                <p className="text-[10px] text-gray-500 leading-[1.2] text-[#00000080]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="w-full h-full bg-[url('/s4.svg')] bg-cover flex flex-col justify-center items-start px-4 md:px-[4rem] pt-[100px] pb-[40px] gap-3">
          <h1 className="text-[22px] font-bold leading-[1.2] text-left text-white mt-12">Classes for Every Level <br /> and Intention</h1>
          <p className="text-[10px] max-w-[60ch] text-left text-white">From beginner-friendly sessions to advanced health workshops, our programs are designed to meet you where you are.</p>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-3 p-3 my-4">
          {classSection.map((item, index) => (
            <div key={index} className="w-[48%] rounded-xl bg-white text-left p-4 gap-3 md:gap-1 cursor-pointer shadow-xl transition-all duration-200 mt-2">
              <div className="bg-[#d9d9d942] w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-xl flex justify-center items-center mb-4 shadow-xl border-[1px]">
                <Image src={item.i} alt=" " width={70} height={70} className="w-[30px]" />
              </div>
              <h1 className="text-[12px] leading-[1.2] font-semibold my-[8px]">{item.h}</h1>
              <p className="text-[7px] leading-[1.2] text-gray-500">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CLASSES SECTION ENDS */}


      {/* WHY CHOOSE SECTION STARTS */}
      <div className="bg-gradient-to-tr from-[#0168A826] via-[#0168A826] to-[#0168A826] px-4 py-[3rem] w-full">
        <h2 className="text-[24px] md:text-[48px] font-semibold text-center leading-[1.2] mb-[8px] md:mb-[12px]">Why Choose Lifetime Fitness and Nutrition Center </h2>
        <p className="max-w-[60ch] text-[10px] md:text-[14px] text-center text-[#00000080] mx-auto mb-[12px] md:mb-[16px]">Why you should choose us. Join Our Diabetes Prevention Challenges. Start a step-by-step journey with the support of experts and a like-minded community.</p>
        <button className="rounded-full text-white bg-[var(--accent-1)] text-[12px] md:text-[16px] font-semibold block mx-auto py-2 px-4">Join us Today</button>
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-start gap-y-8 gap-x-3 mt-8">
          {whyChooseSection.map((item, index) => (
            <div key={index} className="w-[calc(50%-8px)] md:w-[calc(33%-24px)] leading-[1.2] text-center mt-4">
              <div className="bg-white w-[100px] h-[100px] rounded-[24px] mx-auto flex justify-center items-center shadow-xl">
                <Image
                  src={item.i}
                  alt=" "
                  width={70}
                  height={70}
                  className="w-[64px]" />
              </div>
              <h1 className="text-[12px] md:text-[20px] font-semibold my-2">{item.h}</h1>
              <p className="text-[10px] md:text-[16px] text-[#00000080]">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* WHY CHOOSE SECTION ENDS */}

      {/* SUBSCRIPTION PLANS SECTION STARTS */}
      <div className="bg-white px-4 py-[3rem]">
        <h2 className="text-[24px] md:text-[48px] font-semibold text-center leading-[1.2] mb-[8px] md:mb-[12px]">Subscription Plans</h2>
        <p className="max-w-[60ch] text-[10px] font-semibold md:text-[14px] text-center text-[#00000080] mx-auto mb-[12px] md:mb-[16px]">
          Find a Plan That Works for You
        </p>

        <div className="max-w-[1200px] mx-auto lg:flex justify-center gap-y-8 gap-3 md:gap-6 mt-[20px] md:mt-[40px]">
          {subscriptionPlans.map((plan, index) => plan.planComponent(plan, index))}
        </div>
      </div>
      {/* SUBSCRIPTION PLANS SECTION ENDS */}

      {/* CONNECT SECTION STARTS */}
      <div className="bg-gradient-to-t from-[#0168A880] via-[#FFFFFF] to-[#FFFFFF] flex flex-col justify-center items-center px-4 pt-[20px] pb-[48px] md:py-[80px] gap-3 w-full relative overflow-hidden">
        <h1 className="max-w-[24ch] text-[20px] md:text-[48px] text-center font-bold mx-auto">Connect, Grow, and Thrive Together</h1>
        <p className="text-[8px] md:text-[14px] max-w-[60ch] text-center mx-auto">Join a thriving community of individuals committed to managing and preventing diabetes. Share experiences, learn together, and grow stronger.</p>
        <Link
          target="_blank"
          href="https://chat.whatsapp.com/DYjEDVDnjZDD37i6mRbBww"
          className="text-[12px] md:text-[16px] font-semibold rounded-full text-white bg-[var(--accent-1)] py-2 px-4"
        >
          Join the Community
        </Link>
        <Image
          src="/s71.png"
          alt=""
          width={340}
          height={256}
          className="absolute left-0 translate-x-[-20%] bottom-0 w-[120px] lg:w-[340px] object-contain object-bottom"
        />
        <Image
          src="/s72.png"
          alt=""
          width={340}
          height={256}
          className="absolute bottom-0 right-0 translate-x-[20%] w-[120px] lg:w-[340px] object-contain object-bottom"
        />
      </div>
      {/* CONNECT SECTION ENDS */}


      {/* CLIENT RESULT SECTION STARTS */}
      {/* <Carousel /> */}
      {/* CLIENT RESULT SECTION ENDS */}


      <FreeTrialCustomerModal />


      {/* APP DOWNLOAD SECTION STARTS */}
      <section className="w-full bg-gradient-to-t from-[#0049FF] to-[#0168A8] flex justify-center items-center py-[4rem] px-6 md:px-12 ">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full text-white gap-[2rem] lg:gap-[5rem]">
          <div className="lg:min-w-1/2 flex flex-col items-center lg:items-start lg:pl-6 md:mt-[10rem] lg:mt-0 text-center lg:text-left">
            <h1 className="text-[1.2rem] md:text-[1.5rem] lg:text-[3rem] font-bold lg:mb-12 lg:leading-[3.5rem] ">Download the <br />
              <span className='md:text-[2.7rem] text-[2rem] lg:text-[3rem] text-white opacity-100'>Lifetime Fitness and Nutrition Center App</span>
            </h1>
            <p className="text-sm md:text-xl mb-5 opacity-70 ">Begin your journey Towards Making People Healthy</p>
            <div className="flex justify-between items-center gap-5 mb-5">
              <Link href="https://play.google.com/store/apps/details?id=com.wellnessz.lifetime" target="_blank">
                <Image src="/playstore.png" alt="Google Store" width={150} height={40} className="cursor-pointer" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.wellnessz.lifetime" target="_blank">
                <Image src="/appStore.png" alt="App Store" width={150} height={60} className="cursor-pointer" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center mr-2 md:mr-12">
            <Image
              src="/LTFN APP Route.png"
              alt="True Fit App Screens"
              width={900}
              height={900}
              className="w-full self-center max-w-[650px] object-contain" />
          </div>
        </div>
      </section>
      {/* APP DOWNLOAD SECTION ENDS */}

      {/* FOOTER STARTS */}
      <footer className="w-full bg-white pb-4 px-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-20 md:gap-6 lg:gap-0 flex-wrap justify-between py-12 ">
            <div className="">
              <Image
                src="/Lifetime App icon.png"
                alt="True Fit"
                width={119}
                height={120}
                className="mb-4"
              />
              <div className="flex gap-4 cursor-pointer text-[1.1rem] text-primary ">

                <Link
                  target="_blank"
                  href="https://www.instagram.com/stories/uttamsingh4960/3716505937176730800?utm_source=ig_story_item_share&igsh=bHNvdXhxMDUzZnQw"
                >
                  <FaInstagram />
                </Link>
                <Link
                  target="_blank"
                  href="https://form.jotform.com/250421725695459"
                >



                  <CiLink />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.facebook.com/share/1JWnfErX5z/"
                >



                  <FaFacebookF />
                </Link >

                <Link
                  target="_blank"
                  href="https://youtube.com/@uttamsinghfaridabad1985?si=Ksjaq9ZdpWuAZ9HB"
                >



                  <FaYoutube />
                </Link>

              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="md:mb-4 opacity-100 font-bold">Contact us</h1>
              <Link href="mailto:amrithunjan98@gmail.com" className="opacity-60 flex items-center gap-3"><FaRegEnvelope /> Singhuttam6628@gmail.com </Link>
              <div className="opacity-60 flex items-center gap-3"><FaPhoneAlt /> +91 9999434526</div>
              <div className="opacity-60 flex items-center gap-3"><FaLocationDot /> 10540/1 Street no.9 Pratap Nagar near Bhagwan Chowk Ludhiana-141003</div>
            </div>
          </div>

          <p className="text-[#00000080] text-[16px] mb-4 flex item-center md:self-start gap-2">
            <span>Made with ❤️</span>
            <Image
              src="wlogo.svg"
              width={70}
              height={40}
              alt="WellnessZ logo"
            />
            <span>in India</span>
          </p>

          <div className="flex flex-col md:flex-row gap-2 items-center justify-between border-t-2 pt-4 border-gray-500">
            <p className="opacity-60">Copyright © 2023 Mohi Lifestile Solutions Pvt Ltd.</p>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <span className="px-2 opacity-70">All Rights Reserved</span>
              <div className="text-[0.7rem] md:text-[0.8rem]">
                <Link href="/terms" className="text-primary px-2 border-x-2 cursor-pointer border-gray-500">Terms and Conditions</Link>
                <Link href="/privacy-policy" className="text-primary px-2 cursor-pointer ">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER ENDS */}
    </div>
  );
}

export function BasicPlan({
  plan
}) {
  return <div className="w-fit bg-[#0168A826] mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex items-start">
    <div>
      <div className="flex gap-2">
        <h3 className="font-bold text-[var(--accent-1)] md:text-[20px]">Basic</h3>
        <button className="bg-white text-[var(--accent-1)] text-[8px] font-bold px-2 py-1 border-[1px] border-[var(--accent-1)] rounded-[4px]">3 Day Free Trial</button>
      </div>
      <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">Free</h3>
      <p className="max-w-[40ch] text-[8px] md:text-[10px] text-[#263238] mb-4 md:mb-6">
        <strong>Best For:</strong>&nbsp;
        Individuals looking to prevent diabetes with expert guidance
      </p>
      <Link href="#register" className="bg-[var(--accent-1)] text-white font-bold text-[12px] md:text-[20px] px-4 py-2 rounded-md">Enquire Now</Link>
    </div>
    <div className="min-w-[45%] md:ml-4">
      <h3 className="text-[7px] md:text-[12px] text-[#00000080] font-bold mb-2">What*nbsp;s Included</h3>
      {plan.included.map(item => <div
        key={item}
        className="mb-1 md:mb-2 flex items-center gap-1"
      >
        <IoCheckmarkCircle className="min-w-[20px] min-h-[20px]" />
        <p className="text-[8px] md:text-[16px] leading-[1.2]">{item}</p>
      </div>)}
    </div>
  </div>
}

export function PopularPlan({
  plan
}) {
  return <div className="w-fit mt-[40px] md:mt-[40px] lg:mt-0 mx-auto px-[16px] md:px-[24px] py-[24px] rounded-[16px] flex items-start border-[1px] border-[#0168A826] relative">
    <div className="bg-[var(--accent-1)] font-bold text-[8px] lg:text-[14px] text-white absolute left-4 top-0 px-4 py-1 rounded-t-[10px] translate-y-[-100%]">Most Popular</div>
    <div>
      <div className="flex gap-2">
        <h3 className="font-bold text-[var(--accent-1)] md:text-[20px]">Premium Plan</h3>
      </div>
      <h3 className="font-bold text-[20px] md:text-[40px] mb-2 md:mb-4">
        ₹7,999
        <span className="text-[12px] md:text-[22px]">/mo</span>
      </h3>
      <p className="max-w-[40ch] text-[8px] md:text-[10px] text-[#263238] mb-4 md:mb-6">
        <strong>Best For:</strong>&nbsp;
        Individuals looking to prevent diabetes with expert guidance
      </p>
      <Link href="#register" className="bg-[var(--accent-1)] text-white font-bold text-[8px] md:text-[20px] px-4 py-2 rounded-md">Enquire Now</Link>
    </div>
    <div className="min-w-[45%] md:ml-4">
      <h3 className="text-[7px] md:text-[12px] text-[#00000080] font-bold mb-2">What&nbsp;s Included</h3>
      {plan.included.map((item, index) => <div
        key={index}
        className="mb-1 md:mb-2 flex items-center gap-1"
      >
        <IoCheckmarkCircle className="min-w-[20px] min-h-[20px]" />
        <p className="text-[8px] md:text-[16px] leading-[1.2]">{item}</p>
      </div>)}
    </div>
  </div>
}