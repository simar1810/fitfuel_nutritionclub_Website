import Image from "next/image";

export default function Features3() {
  const data = [
    {
      name: "Reduce belly fat, hips &side fat at home #reducebellyfat #homeworkout #weightloss #bellyfatworkout",
      video: "https://www.youtube.com/embed/V-NYIgllq1M",
    },
    {
      name: "Reduce belly fat and side fat #homeworkoutseries #fatloss #weightloss #homeworkout",
      video: "https://www.youtube.com/embed/ZYRspl-4l1w",
    },
    {
      name: "How to reduce belly fat at home #bellyfatworkout #homeworkout #stayfitathome #weightloss",
      video: "https://www.youtube.com/embed/1rWqqGzDOzo",
    },
    {
      name: "How to Enable or Disable Nutrition Facts on a Shared Link",
      img: "/clubImage4.svg",
    },
  ];

  return (
    <section className="w-100 md:bg-[url('/clubHomebg.svg')] bg-cover bg-bottom mb-6 flex flex-col items-center bg-white p-3 md:px-10 lg:px-20 lg:py-6 relative">
      <h2 className="text-[1rem] md:text-[1.5rem] font-semibold text-primary ">
        Explore Fitness Videos
      </h2>
      <p className="opacity-50 text-[0.8rem] md:text-[0.9rem] mb-10 text-center p-2 md:font-semibold">
      Dive into our selection of home fitness videos tailored to help you reduce belly and side fat efficiently.  <br />{" "}
      These quick, effective workouts are perfect for fitting into your busy schedule. Start transforming your body today!
      </p>

      <div className="flex flex-wrap justify-center gap-3 h-[30%]">
        {data.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-lg item-between shadow-xl bg-white mb-3 w-[45%] md:w-[30%] 
                    ${i > 2 ? "w-full hidden" : "block"}`}
          >
            <div className="relative cursor-pointer">
              <iframe
                src={item.video}
                width="100%"
                height="250"
                className="w-full h-[150px] md:h-[220px] rounded-t-lg"
              ></iframe>
            </div>
            <h1 className="p-4 md:mb-10 font-semibold text-[0.7rem] md:text-[1rem]">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
