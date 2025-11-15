import Image from "next/image";
import Link from "next/link";

export default function Why() {
  const data = [
    {
      name: "Virtual Zoom Club",
      des: "Our virtual zoom club offers a supportive community where you can join live fitness sessions, interact with trainers, and stay motivated from the comfort of your home.",
    },
    {
      name: "Personal Diet Plan",
      des: "Our expert nutritionists will help you create a personalized diet plan tailored to your health goals and dietary preferences, ensuring you achieve optimal results.",
    },
    {
      name: "Personal Mentorship and Consultancy",
      des: "Receive one-on-one mentorship and consultancy from our experienced trainers and consultants to guide you through every step of your fitness journey, providing personalized advice and support.",
    },
  ];

  return (
    <section className="w-100 flex flex-col-reverse lg:flex-row bg-white px-4 lg:px-14 xl:px-20 justify-between py-14 items-center gap-10">
      <div className="flex flex-col lg:w-[50%] gap-10">
        <h1 className="text-[1.5rem] lg:text-[2.5rem] lg:leading-[3rem] font-semibold hidden lg:block">
          Why Choose <br />
          True Fit
        </h1>

        <div className="flex flex-col gap-6">
          {data.map((item, idx) => (
            <div key={idx} className=" flex flex-col pr-4 gap-2">
              <div className="flex gap-3">
                <Image
                  src="/tick.svg"
                  alt="image"
                  width={26}
                  height={26}
                ></Image>
                <h1 className="font-bold text-[1.1rem] md:text-[1.3rem]">
                  {item.name}
                </h1>
              </div>
              <p className="text-[0.8rem] opacity-60 lg:pr-16">{item.des}</p>
            </div>
          ))}
        </div>

        <Link href={"#register"}>
          <div className="bg-primary flex justify-center items-center cursor-pointer text-white p-3 rounded-full w-[7rem] text-[0.8rem] md:text-[1rem] md:w-[11rem]">
            Get Started
          </div>
        </Link>
      </div>

      <div className="w-[276px] h-[276px] md:w-[530px] md:h-[530px] bg-[url('/s4.svg')] bg-cover bg-center rounded-full mt-2 relative">
      </div>

      <h1 className="text-[1.5rem] lg:hidden md:text-[3rem] md:leading-[4rem] font-semibold">
        Why Choose <br />
        True Fit
      </h1>
    </section>
  );
}
