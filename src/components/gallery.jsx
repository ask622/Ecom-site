import Img12 from '../assets/Gall/12.jpg';
import Img22 from '../assets/Gall/22.jpg';
import Img32 from '../assets/Gall/32.jpg';
import Img42 from '../assets/Gall/42.jpg';
import Img52 from '../assets/Gall/52.jpg';
const Gallery = () => {
    return(
        <div>
        <div className='flex flex-col items-center justify-center mt-10 p-5'>
            <h1 className='text-4xl font-bold text-center py-6' >We are Experienced in making you <br/>very Beautiful</h1>
             <p>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque</p>
            </div>
            <div className='flex flex-row justify-between items-center  px-100 bg-gray-100'>
            <div>
            <img src={Img12} alt="img12" className='w-100 h-125 rounded-l-2xl'/>
            </div>
            <div className='flex flex-col justify-between items-center gap-4 ml-5'>
            <img src={Img22} alt="img22" className='w-90 h-60'/>
            <img src={Img32} alt="img32" className='w-90 h-60'/>
            </div>
            <div className='flex flex-col justify-between items-center gap-4 p-4'>
            <img src={Img42} alt="img42" className='w-90 h-60 rounded-r-2xl'/>
            <img src={Img52} alt="img52" className='w-90 h-60 rounded-r-2xl'/>
            </div>
          </div>
        </div>
    );
};
export default Gallery;