"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Define the numbers data
const numbersData = [
  { value: 105, postfix: "+", label: "Expert Trainers" },
  { value: 870, postfix: "+", label: "Active Members" },
  { value: 185, postfix: "+", label: "Fitness Programs" },
];

const AnimatedNumber = ({ number }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of element is in view
    triggerOnce: false, // Allow animation to trigger every time it comes into view
  });

  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimatedNumber(number);
    } else {
      setAnimatedNumber(0);
    }
  }, [inView, number]);

  const props = useSpring({
    number: animatedNumber,
    from: { number: 0 },
    config: { mass: 1, tension: 120, friction: 20, duration: 2500 },
  });

  return (
    <animated.div ref={ref}>
      {props.number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

export default function Home() {
  return (
    <section className="w-100 flex flex-col bg-white p-3 md:px-10 lg:px-20 lg:py-6 relative overflow-x-hidden">
      <Image
        src="/logo.svg"
        alt="image"
        width={150}
        height={150}
        className="self-start md:-ml-2 w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
      />

      <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-center gap-[2rem] md:gap-[10rem] xl:gap-4 ">
        <div className="flex flex-col items-start xl:w-[50%] gap-6 ">
          <div className="flex justify-self-center -mb-4 md:mb-0 items-center cursor-pointer gap-1 md:gap-2 text-[0.8rem] md:px-4 px-2 py-2 border-[1px] border-[#144EE3] text-primary font-semibold rounded-2xl shadow-[9px_9px_6px_0px_#F2F1F8]">
            Feel the Strength
            <Image loading="lazy" src="/heart.svg" alt="image" width={30} height={30} />
          </div>
          <h1 className="lg:leading-[4.4rem] font-semibold text-[2rem] md:text-[3rem] md:leading-[3rem] leading-8 lg:text-[4rem] mt-4">
            Get <span className="text-primary">Healthy body</span>
            <br />
            With the Perfect <span className="text-primary">Workouts</span>
          </h1>
          <p className="opacity-50 font-semibold xl:text-[0.8rem] xl:pr-[15rem]">
            We are always there to help to make a healthy body and mind through
            the power of fitness.
          </p>
          <div className="flex gap-8">
            <Link
              href={"#register"}
              className="bg-primary md:px-6 text-[0.8rem] flex justify-center items-center px-4 rounded-3xl text-white cursor-pointer"
            >
              Get Started
            </Link>

            <div className="flex justify-center items-end text-[0.8rem] gap-3 font-semibold md:text-[0.9rem] py-2 cursor-pointer">
              <Image loading="lazy" src="/playButton.svg" alt="image" width={20} height={20} />{" "}
              Watch Demo
            </div>
          </div>

          {/* numbers div */}
          <div className="flex flex-wrap gap-8 mb-[6rem] md:gap-6 mt-2 justify-center">
            {numbersData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:leading-9 opacity-80 font-semibold md:text-left mr-2"
              >
                <span
                  className={`flex text-[1.7rem] self-center md:self-auto md:text-[2rem] ${index < numbersData.length - 1
                      ? "md:border-r-2 border-r-black"
                      : ""
                    }`}
                >
                  <AnimatedNumber number={item.value} /> {item.postfix}
                </span>
                <span className="text-[0.7rem] text-center md:text-[0.9rem] md:mr-4">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[230px] h-[230px] mb-4 md:mb-0 md:w-[536px] self-center md:h-[536px] rounded-full bg-[#0168a837] relative">
          <Image
            src="/homePeople.svg"
            alt="image"
            height={850}
            width={737}
            className="md:hidden absolute w-[284px] h-[324px] -right-[1rem] -top-[4rem] m-0 p-0"
          />
        </div>

        <Image
          src="/homePeople.svg"
          alt="image"
          height={700}
          width={608}
          className="hidden md:block absolute md:right-0 md:top-[4rem] m-0 p-0"
        />
      </div>
    </section>
  );
}
