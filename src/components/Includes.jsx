import React from 'react';
import Img1 from '../assets/Gall/count.png';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Includes = () => {
    return (
        <div className="w-full pl-4 ">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                
                {/* Left Content - Text Section */}
                <div className="w-full lg:w-1/2">
                    <p className="text-[#ba7894] text-lg mb-2">WHAT INCLUDES</p>
                    <h1 className="font-bold text-2xl text-black mb-4">The start of the journey</h1>
                    <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                        ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem
                        with the fragmented service industry in Denmark. There were thousands of small
                        businesses offering services, but it was difficult for consumers to find them and know
                        which ones to choose. They developed the idea of creating a platform that would bring all
                        these service providers together in one place, making it easier for consumers to find what
                        they need and get their issues resolved quickly and easily. Without having to go to many
                        different websites, each with their own booking system.
                    </p>

                    <h1 className="font-bold text-lg text-black mb-3">Our Methodology:</h1>

                    {[
                        { title: "The Assessment Stage" },
                        { title: "The Initialisation Stage" },
                        { title: "The Treatment Stage" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start mb-4">
                            <IoMdCheckmarkCircleOutline className="text-[#ba7894] text-2xl mt-1 mr-2" />
                            <div>
                                <h2 className="font-semibold text-md text-black">{item.title}</h2>
                                <p className="text-sm text-gray-600 mt-1">
                                    The point of using Lorem Ipsum is that it has a more-or-less normal letters.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Image (Shown first in mobile via flex-col-reverse) */}
                <div className="w-full lg:w-1/2 flex justify-center mb-6   lg:mb-0">
                    <img
                        src={Img1}
                        alt="Includes"
                        className="w-full  h-130 object-cover "
                    />
                </div>
            </div>
        </div>
    );
};

export default Includes;
