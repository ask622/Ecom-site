import React, { useState } from 'react';
import Img1 from '../assets/icon/1.jpg';
import Img2 from '../assets/icon/2.jpg';
import Img3 from '../assets/icon/3.jpg';
import Img4 from '../assets/icon/4.jpg';
import Img5 from '../assets/icon/5.jpg';
import Img6 from '../assets/icon/6.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Icon = () => {
    const icons = [Img1, Img2, Img3, Img4, Img5, Img6];
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex + 3 < icons.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleIcons = icons.slice(startIndex, startIndex + 3);

    return (
        <div className="mt-10 mb-12">
            {/* Mobile View: Slider */}
            <div className="flex items-center justify-center sm:hidden">
                {/* Left Arrow */}
                <button onClick={handlePrev} className="mx-0">
                    <IoIosArrowBack className={`text-black text-2xl  hover:text-[#b21858] ${startIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} />
                </button>
                

                {/* Icon Images */}
                <div className="flex gap-4 px-2">
                    {visibleIcons.map((imgSrc, index) => (
                        <div key={index} className="w-24 h-20 flex-shrink-0">
                            <img
                                src={imgSrc}
                                alt={`Icon ${startIndex + index + 1}`}
                                className="w-full h-full object-cover opacity-80 rounded-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button onClick={handleNext} className="mx-0">
                    <IoIosArrowForward className={`text-black text-2xl hover:text-[#b21858] ${startIndex + 3 >= icons.length ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} />
                </button>
            </div>


            {/* Desktop View: All Icons */}
            
            <div className="hidden sm:flex items-center justify-center gap-21">

                <button onClick={handlePrev} className="mx-0">
                    <IoIosArrowBack className={`text-black text-2xl  hover:text-[#b21858] ${startIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} />
                </button>
                {icons.map((imgSrc, index) => (
                    <div key={index} className="w-24 h-20  flex-shrink-0">
                        <img
                            src={imgSrc}
                            alt={`Icon ${index + 1}`}
                            className="w-full h-full object-cover   opacity-80 rounded-md"
                        />
                    </div>
                ))}
            <button onClick={handleNext} className="mx-0">
                    <IoIosArrowForward className={`text-black text-2xl hover:text-[#b21858] ${startIndex + 3 >= icons.length ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} />
                </button>
            </div>
        </div>
    );
};

export default Icon;
