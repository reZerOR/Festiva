import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero rounded-lg my-12"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay rounded-lg bg-opacity-40"></div>
      <div className="hero-content text-neutral-content my-52">
        <div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex flex-col"
          >
            <h1 className="mb-5 text-5xl text-black font-bold leading-[60px]">
              Crafting <span className="text-white">Unforgettable Events</span>,{" "}
              <br /> Every Time.
            </h1>
            <p className="max-w-md font-medium mb-5 leading-8">
              Your premier event planner, turning dreams into reality. From
              weddings to corporate gatherings, we create memorable experiences
              with flair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
