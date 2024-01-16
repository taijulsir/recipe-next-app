

const Banner = () => {
    return (
        <div className="w-full h-[760px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://i.ibb.co/ZGnJwZf/photo.jpg)'}}>
          <div className=" container mx-auto flex flex-col h-full">
          <h1 className="text-7xl  text-white font-bold mt-40 ">Flavorful Delights</h1>
          <p className=" w-2/5  text-slate-200 mt-4 px-2">Indulge in a world of culinary wonders. Unleash your inner chef with our curated recipes that promise a symphony of flavors in every bite. Elevate your dining experience. Epicurean Eats – where passion meets the plate.</p> 
          </div>
        </div>
    );
};

export default Banner;