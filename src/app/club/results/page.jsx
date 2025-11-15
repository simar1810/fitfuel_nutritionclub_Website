"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "primary",
        borderRadius: "50%",
        padding: "15px",
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "primary",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default function Results() {
  const data = [
    { img: "/t1.svg" },
    { img: "/t2.svg" },
    { img: "/t3.svg" },
    { img: "/t1.svg" },
    { img: "/t2.svg" },
    { img: "/t3.svg" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center bg-white p-3 md:px-10 lg:px-20 lg:py-6 relative mb-10">
      <h2 className="mb-2 md:text-[1.5rem] font-semibold text-primary">
        Amazing Transformations
      </h2>
      <p className="opacity-50 md:text-[0.9rem] mb-10 text-center p-2 md:font-semibold">
        Our Champiaon results<br />{" "}
        you can be the next...
      </p>

      <div className="w-full max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-center h-[400px] overflow-hidden px-2"
            >
              <Image
                src={item.img}
                alt="image"
                width={308}
                height={415}
                className="w-full h-full bg-cover hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
