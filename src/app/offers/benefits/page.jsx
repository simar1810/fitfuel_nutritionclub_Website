import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function Benefits3() {
  const benefits = [
    {
      name: "Personalized Nutrition Plans",
      desc: "Get customized meal plans from our expert nutritionists, crafted to meet your unique health goals and dietary preferences. Whether you're aiming to lose weight, build muscle, or improve your overall health, our plans are designed to ensure you receive the optimal balance of nutrients. Start your journey to a healthier you today!",
      img: "/benefits1.svg",
    },
    {
      name: "Comprehensive Wellness Programs",
      desc: "Embrace a holistic approach to wellness with our diverse range of services, from fitness coaching to mindfulness and stress management. Our comprehensive programs are designed to enhance your physical and mental well-being, ensuring a balanced and healthier lifestyle. Join us to elevate your wellness journey!",
      img: "/benefits2.svg",
    },
    {
      name: "Daily Virtual Exercise",
      desc: "Join our daily virtual exercise sessions, designed to keep you active and engaged from the comfort of your own home. Our live-streamed workouts, led by experienced instructors, cater to all fitness levels and help you stay motivated alongside a community of like-minded individuals. Whether you're a beginner or looking to intensify your fitness routine, our diverse range of exercises offers something for everyone. Stay fit, connect with others, and boost your health every day!",
      img: "/benefits3.svg",
    },
  ];

  return (
    <section className="w-100mb-6 flex flex-col items-center bg-white p-3 pb-10 md:px-10 lg:px-20 lg:py-6 relative">
      <h2 className="text-[1rem] md:text-[1.5rem] font-semibold text-primary ">
        Benefits with Us
      </h2>
      <p className="md:opacity-50 text-[0.8rem] md:text-[0.9rem] mb-10 text-center p-2 md:px-[15rem] md:font-semibold">
        Experience the ultimate in health and wellness with our personalized
        nutrition plans and holistic wellness programs. Our expert team offers
        tailored meal plans, comprehensive fitness and mindfulness training, and
        continuous support to help you achieve and maintain a balanced, healthy
        lifestyle.
      </p>

      <div className="flex flex-col justify-center">
        {benefits.map((item, i) => (
          <div
            key={i}
            className={`flex justify-between item-between bg-white mb-6 p-3
                    ${i % 2
                ? "flex-col-reverse md:flex-row-reverse "
                : "flex-col-reverse md:flex-row"
              }`}
          >
            <div className="flex flex-col gap-4 md:max-w-[50%] md:mt-10">
              <h1 className="font-semibold md:text-[1.2rem]">{item.name}</h1>
              <p className="text-[0.8rem] md:text-[1rem]">{item.desc}</p>
            </div>
            <Image loading="lazy" src={item.img} alt="image" width={479} height={500}></Image>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center md:flex-row justify-between p-2 pb-6 md:p-10 rounded-lg bg-[#62a4cd6a]">
        <div className="flex flex-col gap-4 p-4 md:max-w-[70%] ">
          <h1 className="text-primary text-[1.2rem] md:text-[2.5rem] font-semibold">
            So Why wait, Join Now
          </h1>
          <p className="opacity-40 text-[0.9rem] md:text-[1rem]">
            Experience the ultimate in health and wellness with our personalized
            nutrition plans and holistic wellness programs. Our expert team
            offers tailored meal plans, comprehensive fitness and mindfulness
            training, and continuous support to help you achieve and maintain a
            balanced, healthy lifestyle.
          </p>
          <div className="flex gap-6 items-center cursor-pointer">
            <h1 className="md:text-[1.2rem] font-semibold">Learn More</h1>
            <FaChevronRight />
          </div>
        </div>

        <Image loading="lazy" src="/qrCode.svg" alt="image" width={219} height={219}></Image>
      </div>
    </section>
  );
}
