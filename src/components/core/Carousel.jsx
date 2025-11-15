"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { wellnessResults } from '@/utils/data';

export default function Carousel() {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='w-full flex flex-col p-4 md:p-[3rem] bg-gradient-to-tr from-[#FF61001A] via-[#16BA980D] to-[#0062311A] relative'>
            <div className='w-full flex justify-between'>
                <div className='w-[30%] hidden md:block'></div>
                <div className='w-full md:w-[60%] flex flex-col gap-3 mt-[5rem] z-30 md:absolute top-15 right-5'>
                    <h1 className='text-4xl font-semibold'>Wellness from Our Thriving Community</h1>
                    <div className='flex gap-4 items-center'>
                        <div className='flex gap-2 justify-start items-center'>
                            <button onClick={prev} className='w-8 h-8 flex justify-center items-center border border-black rounded-full bg-white shadow-md hover:bg-gray-200 transition-all'>&#8592;</button>
                            <button onClick={next} className='w-8 h-8 flex justify-center items-center border border-black rounded-full bg-white shadow-md hover:bg-gray-200 transition-all'>&#8594;</button>
                        </div>
                        <p className='text-[0.7rem] max-w-[40ch]'>Experience the best wellness transformations through our community-driven support and personal coaching.</p>
                    </div>
                </div>
            </div>

            <Slider
                ref={sliderRef}
                {...settings}
                className="w-full max-w-[1200px] mx-auto [&_.slick-track]:flex [&_.slick-track]:items-end pt-[40px] md:pt-[120px] lg:py-[1rem] gap-2 overflow-visible md:mt-64"
            >
                {wellnessResults.map((item, index) => {
                    return (
                        <div
                            key={item.i}
                            className={`pr-4 transition-all duration-700 ease-in-out transform mt-auto`}
                        >
                            <Image
                                src={item.img}
                                alt=''
                                width={419}
                                height={443}
                                className={`w-full aspect-square rounded-xl transition-all duration-700 ease-in-out transform object-cover origin-bottom`}
                            />
                            {index === activeIndex && <div className={"bg-[var(--accent-1)] rounded-xl flex flex-col px-4 py-2 md:p-4 text-white mt-4 md:mt-8 transition-all duration-700 ease-in-out "}>
                                <h1 className='font-semibold font-serif text-[12px] md:text-[24px]'>{item.name}</h1>
                                <p className='text-left text-[8px] md:text-[12px] leading-tight mt-1 md:mt-2'>{item.review}</p>
                            </div>}
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}