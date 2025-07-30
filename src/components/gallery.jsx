import Img12 from '../assets/Gall/12.jpg';
import Img22 from '../assets/Gall/22.jpg';
import Img32 from '../assets/Gall/32.jpg';
import Img42 from '../assets/Gall/42.jpg';
import Img52 from '../assets/Gall/52.jpg';

const Gallery = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
          We are Experienced in making you <br className="hidden sm:block" /> very Beautiful
        </h1>
        <p className="text-sm sm:text-base max-w-lg">
          Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-2 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img
            src={Img12}
            alt="img12"
            className="w-full sm:w-96 h-64 sm:h-80 object-cover rounded-2xl lg:rounded-l-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img
            src={Img22}
            alt="img22"
            className="w-72 sm:w-80 h-40 sm:h-48 object-cover rounded-xl"
          />
          <img
            src={Img32}
            alt="img32"
            className="w-72 sm:w-80 h-40 sm:h-48 object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img
            src={Img42}
            alt="img42"
            className="w-72 sm:w-80 h-40 sm:h-48 object-cover rounded-xl lg:rounded-r-2xl"
          />
          <img
            src={Img52}
            alt="img52"
            className="w-72 sm:w-80 h-40 sm:h-48 object-cover rounded-xl lg:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
