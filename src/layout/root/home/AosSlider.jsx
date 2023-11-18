import Marquee from "react-fast-marquee";

const AosSlider = () => {
    return (
        <div className="mx-auto max-w-5xl max-h-[500px]">
              <Marquee className="h-full" speed={50} pauseOnHover={true} direction="right">
  <img className="h-[400px] w-full" src="https://i.ibb.co/mBhRPm4/wedding-bands-hands-bride-groom-with-beautiful-wedding-bouquet-made-greenery-white-flowers-1.jpg" alt="" />
  <img className="h-[400px] w-full" src="https://i.ibb.co/PZyyhmY/front-view-smiley-woman-playing-guitar.jpg" alt="" />
  <img  className="h-[400px] w-full" src="https://i.ibb.co/GMXHTWD/luxurious-dinner-hall-with-large-crystal-chandelier.jpg" alt="" />
  <img className="h-[400px] w-full" src="https://i.ibb.co/3hKh3Sz/classy-wedding-rings-sparkle-standing-white-velvet-box.jpg" alt="" />
  
           </Marquee> 
        </div>
    );
};

export default AosSlider;