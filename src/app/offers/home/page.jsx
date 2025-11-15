"use client";
import RegistrationForm from "@/components/RegistrationForm";
import Image from "next/image";

export default function Home3() {
  return (
    <section className="w-100 flex flex-col bg-white p-3 md:px-10 lg:px-20 lg:py-6">
      <Image
        src="/logo.svg"
        alt="image"
        width={150}
        height={150}
        className="md:self-start md:-ml-2 w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
      ></Image>

      <section
        className="w-100 flex flex-col xl:flex-row bg-white my-10"
        id="form"
      >
        <div className="md:w-[50%] flex flex-col gap-4">
          <h1 className="lg:leading-[4.4rem] font-semibold text-[2rem] md:text-[3rem] md:leading-[3rem] leading-8 lg:text-[4rem] mt-4">
            Get <span className="text-primary">Healthy body</span>
            <br />
            With the Perfect <span className="text-primary">Workouts</span>
          </h1>
          <p className="opacity-50 font-semibold xl:text-[0.8rem] xl:pr-[15rem]">
            We are always there fo help to make a healthy body and mind through
            the power of fitness.
          </p>
        </div>

        <RegistrationForm />
      </section>
    </section>
  );
}
