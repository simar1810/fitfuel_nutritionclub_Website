import Image from "next/image";

export default function Trainer() {
  const data = [
    {
      img: "/clubTrainer1.svg",
    }
  ];

  return (
    <section className="w-[100%] flex flex-col items-center bg-white px-8 py-12">
      <h1 className="opacity-70 text-[1.5rem] md:text-[2rem] font-semibold">
        GET TO KNOW YOUR TRAINERS
      </h1>
      <div className="flex flex-col md:flex-row gap-[16rem] md:gap-12 w-full xl:mt-[20rem] justify-center mt-[13rem] md:mt-[10rem] pb-[5rem]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-primary rounded-2xl md:w-[25%] h-[140px] relative"
          >
            <Image
              src={item.img}
              alt="image"
              width={324}
              height={390}
              className="absolute hover:scale-105 ease-in-out duration-200 xl:left-[1rem] w-[90%] left-3 -top-[13rem] md:-top-[6rem] lg:-top-[12rem] xl:-top-[16rem]"
            ></Image>
          </div>
        ))}
      </div>
      <div className="text-3xl font-semibold -mt-4">Inderpreet Sunny & Amrit Kaur</div> 
    </section>
  );
}
