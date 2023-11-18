import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="max-h-[500px] max-w-6xl mx-auto">
           <Marquee className="max-w-5xl" speed={20} pauseOnHover={true}>
  <img className="h-[450px] w-full" src="https://i.ibb.co/M72N0Hd/pexels-asad-photo-maldives-169198.jpg" alt="" />
  <img className="h-[450px] w-full" src="https://i.ibb.co/59qsLv1/pexels-ivan-samkov-9628320.jpg" alt="" />
  <img  className="h-[450px] w-full" src="https://i.ibb.co/02zCH2B/pexels-ivan-samkov-7922176.jpg" alt="" />
  <img className="h-[450px] w-full" src="https://i.ibb.co/gj8W653/pexels-pixabay-34763.jpg" alt="" />
  <img className="h-[450px] w-full" src="https://i.ibb.co/zQbLcr3/pexels-caleb-oquendo-3038145.jpg" alt="" />
  <img className="h-[450px] w-full" src="https://i.ibb.co/W06Sckd/pexels-rdne-stock-project-7867437.jpg" alt="" />
           </Marquee> 
        </div>
    );
};

export default Banner;