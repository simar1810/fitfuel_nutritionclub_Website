import Image from "next/image";
import Link from "next/link";

export default function Provide() {
  const data = [
    {
      img: "/yoga.svg",
      name: "Yoga",
      des: "Embrace life's vastness, venture forth",
    },
    {
      img: "/zumba.svg",
      name: "Zumba",
      des: "Embrace life's vastness, venture forth",
    },
    {
      img: "/cardio.svg",
      name: "Cardio",
      des: "Embrace life's vastness, venture forth",
    },
  ];

  const data2 = [
    {
      img: "/i1.svg",
      name: "Workout Videos",
      des: "Access to hundreds Of free. full-length workout videos.",
    },
    {
      img: "/i2.svg",
      name: "Workout Programs",
      des: "Affordable and effective workout programs.",
    },
    {
      img: "/i3.svg",
      name: "Meal Plans",
      des: "Plans built with registered dietitians and nutritionists.",
    },
    {
      img: "/i4.svg",
      name: "Personal Trainers",
      des: "Educating clients regarding safe and proper use of equipment.",
    },
  ];
  return (
    <section className="w-[100%] flex flex-col bg-white px-4 md:px-20 py-6">
      <div className="flex flex-col lg:flex-row justify-between font-semibold gap-10 lg:gap-0 lg:mt-14 w-[100%]">
        <div className="flex flex-col gap-3 lg:w-[50%] xl:pr-[14rem]">
          <h1 className=" text-[1.2rem] text-primary">WHAT WE PROVIDE</h1>
          <h1 className="leading-8 text-[2rem]">
            Embrace the Power of Fitness
          </h1>
          <p className="opacity-60 hidden md:block">
            Unlock Your Potential, Transform Your Body
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:px-4 lg:px-6 gap-2 justify-center item-center"
            >
              <Image
                src={item.img}
                alt="image"
                width={100}
                height={100}
                className="self-center"
              ></Image>
              <h1 className="text-[1.2rem] text-center">{item.name}</h1>
              <p className="text-[0.8rem] opacity-60 px-7 md:px-0 text-center">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* where to start */}
      <div className="mt-[6rem] flex flex-col items-center py-4 gap-3 font-semibold text-center">
        <h1 className="text-[1.3rem] md:text-[2rem] text-primary">
          Not Sure Where to Start?
        </h1>
        <p className="opacity-70 text-[0.9rem]">
          Programs Offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </p>

        <div className="flex flex-col lg:flex-row mt-4 gap-12 lg:gap-4 w-[100%] justify-between">
          {data2.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:gap-2 lg:w-[25%] cursor-pointer group hover:scale-[1.1] ease-in-out duration-200"
            >
              <Image
                src={item.img}
                alt="image"
                width={300}
                height={219}
                className="rounded-2xl self-center w-[90%]"
              ></Image>
              <h1 className="text-[1.2rem] text-left pl-4 lg:pl-0">
                {item.name}
              </h1>
              <div className="flex justify-between items-center text-left pl-4 pr-3 lg:pl-0 lg:pr-12">
                <p className="text-[0.8rem] opacity-60 group-hover:opacity-80 pr-4 max-w-[85%]">
                  {item.des}
                </p>
                <Link href={"#register"}>
                  <Image
                    src="/rightArrow.svg"
                    alt="image"
                    width={25}
                    height={25}
                  ></Image>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
