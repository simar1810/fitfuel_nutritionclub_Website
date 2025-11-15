"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import RegistrationForm from "@/components/RegistrationForm";

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

export default function ClubFormSection() {
  return (
    <section className="w-100 flex flex-col xl:flex-row bg-white p-4 md:px-20 justify-between md:py-24 items-center">
      <div className="flex flex-col xl:w-[50%] gap-10 mt-16" id="club-form">
        <h1 className="text-[1.5rem] md:text-[4rem] md:leading-[4rem] font-semibold">
          Get ready to reach Your fitness Goals
        </h1>
        <p className="opacity-50 font-semibold md:pr-16">
          {`Embark on a transformative wellness journey with us`}
          <br />
          {`Setting clear, achievable goals is the first step towards attaining lasting success. Whether you're looking to refine your diet, elevate your fitness routine, or benefit from personalized mentorship, our comprehensive programs are tailored to guide you towards your targets. With our expert support, you’ll not only meet but exceed your health and fitness aspirations. Start your journey to a healthier, more fulfilled you today!, enhance your fitness routine, or receive personalized mentorship, our comprehensive programs will help you reach your targets.`}
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

      <RegistrationForm />
    </section>
  );
}
