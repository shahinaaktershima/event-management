import Marquee from "react-fast-marquee";

const AosSlider = () => {
    return (
        <div className="my-20 mx-auto">
              <Marquee className="max-w-5xl my-3 gap-2" speed={50} pauseOnHover={true} direction="up">
  <img className="h-[450px] w-full" src="https://i.ibb.co/mBhRPm4/wedding-bands-hands-bride-groom-with-beautiful-wedding-bouquet-made-greenery-white-flowers-1.jpg" alt="" />
  <img className="h-[450px] w-full" src="https://i.ibb.co/PZyyhmY/front-view-smiley-woman-playing-guitar.jpg" alt="" />
  <img  className="h-[450px] w-full" src="https://i.ibb.co/GMXHTWD/luxurious-dinner-hall-with-large-crystal-chandelier.jpg" alt="" />
  <img className="h-[450px] w-full" src="https://i.ibb.co/3hKh3Sz/classy-wedding-rings-sparkle-standing-white-velvet-box.jpg" alt="" />
  
           </Marquee> 
        </div>
    );
};

export default AosSlider;