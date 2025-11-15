import Image from "next/image";

export default function ClubHome() {
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
      name: "online transformation weight loss",
      video: "https://www.youtube.com/embed/ehqSY4McjOU",
    },
    {
      name: "online weight loss prograam #fatlossworkoutathome #fastloss #weightloss",
      video: "https://www.youtube.com/embed/W3rOpjD_nbQ",
    },
    {
      name: "50 kg weight loss transformation online",
      video: "https://www.youtube.com/embed/TsQd_CPMwx4",
    },
  ];

  return (
    <section className="w-100 md:bg-[url('/clubHomebg.svg')] bg-cover bg-bottom flex flex-col items-center bg-white p-3 md:px-10 lg:px-20 lg:py-6 relative">
      <Image
        src="/logo.svg"
        alt="image"
        width={150}
        height={150}
        className="md:self-start md:-ml-2 w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
      ></Image>

      <h1 className="text-[1.3rem] md:text-[2.5rem] font-bold mb-14">
        <span className="text-primary">True Fit</span> Club
      </h1>

      <h2 className="text-[1rem] md:text-[1.5rem] font-semibold text-primary">
        What We Offer
      </h2>
      <div className="flex flex-wrap justify-center gap-6 h-[30%] my-10 w-full">
        <div className="relative cursor-pointer w-full sm:w-[47%]">
          <iframe
            src={"https://www.youtube.com/embed/bpA2N_hY85M"}
            width="100%"
            height="250"
            className="w-full h-[220px] md:h-[380px] rounded-lg"
          ></iframe>
        </div>
        {/* <div className="relative cursor-pointer w-full sm:w-[47%]">
          <iframe
            src={'https://www.youtube.com/embed/mKMV8Yzh3ck'}
            width="100%"
            height="250"
            className="w-full h-[220px] md:h-[380px] rounded-t-lg"
          ></iframe>
        </div> */}
      </div>

      <h2 className="text-[1rem] md:text-[1.5rem] font-semibold text-primary mt-[5rem]">
        Explore Our Fitness Videos
      </h2>
      <p className="opacity-50 text-[0.8rem] md:text-[0.9rem] mb-10 text-center p-2 md:font-semibold">
        From Wide Range of our fitness video libraries <br />{" "}
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 h-[30%]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-lg item-between shadow-xl bg-white mb-6 w-[45%] md:w-[30%] hover:scale-105 ease-in-out duration-200"
          >
            <div className="relative cursor-pointer">
              <iframe
                src={item.video}
                width="100%"
                height="250"
                className="w-full h-[150px] md:h-[220px] rounded-t-lg"
              ></iframe>
            </div>
            <h1 className="p-4 md:mb-5 font-semibold text-[0.7rem] md:text-[1rem]">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
