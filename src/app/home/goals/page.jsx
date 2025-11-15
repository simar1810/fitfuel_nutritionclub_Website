"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const data = [
  { value: 105, postfix: "+", name: "Expert Trainers" },
  { value: 870, postfix: "+", name: "Members Joined" },
  { value: 105, postfix: "+", name: "Training Programs" },
  { value: 200, postfix: "+", name: "Online Classes" },
];

const AnimatedNumber = ({ number }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
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

export default function Goals() {
  return (
    <section className="w-full flex flex-col xl:flex-row bg-white p-4 md:px-20 justify-between md:py-24 items-center">
      <div className="w-[270px] md:w-[530px] aspect-square rounded-full bg-[#0168a837] mt-2 relative">
        <Image
          src="s3.svg"
          // src="/goals.svg"
          alt="image"
          width={850}
          height={737}
          className="absolute -top-5 left-6"
        />
      </div>

      <div className="flex flex-col xl:w-[50%] gap-10 mt-16 ">
        <h1 className="text-[1.5rem] md:text-[4rem] md:leading-[4rem] font-semibold">
          Get ready to reach Your fitness Goals
        </h1>
        <p className="opacity-50 font-semibold md:pr-16">
          Are you ready to transform your fitness journey?
          <br />
          Setting clear, achievable goals is the first step towards success.
          Whether you&apos;re aiming to lose weight, build muscle, or improve
          endurance, a diverse workout routine incorporating cardio, strength,
          and flexibility exercises will help you reach your targets.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-normal lg:w-[70%]">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[45%] md:w-[40%] flex flex-col border-[1px] border-primary rounded-3xl p-4"
            >
              <h1 className="text-[2rem] text-primary flex items-center">
                <AnimatedNumber number={item.value} /> {item.postfix}
              </h1>
              <h5 className="text-[0.9rem] font-semibold">{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
