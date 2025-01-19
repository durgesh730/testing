import React from "react";
import c3 from "../../assets/n4.jpg";
import c4 from "../../assets/n5.jpg";
import c2 from "../../assets/n6.jpg";
import Team from "../../component/JinraiUI/Home/Team";
import Goal from "../../component/JinraiUI/Home/Goal";
import Process from "../../component/JinraiUI/Home/Process";
import Marquee from "react-fast-marquee";
import Services from "../../component/JinraiUI/Home/Services";
import MovingBanner from "../../component/JinraiUI/Home/Moving";
import HomeDetails from "../../component/JinraiUI/Home/HomeDetails";
import WhyChooseUs from "../../component/JinraiUI/Home/WhyChooseUs";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/JinraiUI/Navbar";
import Footer from "../../component/JinraiUI/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
      <HomeDetails />
      <Goal />
      <Services />
      <section class="flex flex-wrap pt-12">
        <div class="md:w-[33%]">
          <span class="thumb-info thumb-info-no-borders thumb-info-lighten thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom">
            <span class="relative block overflow-hidden">
              <img
                src={c3}
                class="img-fluid object-cover h-[450px]"
                alt="Jinrai Technologies Leadership Team"
              />
              <div
                onClick={() => navigate("/about")}
                class=" cursor-pointer block absolute bottom-0 bg-[rgba(0,0,0,.5)] p-[30px] max-w-[100%] w-[100%]"
              >
                <p class=" text-white text-4xl font-semibold">Leadership</p>
                <p class=" text-white">
                  Meet our expert team{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="cyan"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </span>
          </span>
        </div>
        <div class="md:w-[33%]">
          <span class="thumb-info thumb-info-no-borders thumb-info-lighten thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom">
            <span class="relative block overflow-hidden">
              <img
                src={c4}
                class="img-fluid object-cover h-[450px]"
                alt="Lyca Mobile Supported Countries Map"
              />
              <div
                onClick={() => navigate("/portfolio")}
                class="cursor-pointer block absolute bottom-0 bg-[rgba(0,0,0,.5)] p-[30px] max-w-[100%] w-[100%]"
              >
                <p class=" text-white text-4xl font-semibold">Portfolio</p>
                <p class=" text-white">Discover about Company</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="cyan"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </span>
          </span>
        </div>
        <div class="md:w-[33%]">
          <span class="thumb-info thumb-info-no-borders thumb-info-lighten thumb-info-bottom-info thumb-info-bottom-info-dark thumb-info-bottom-info-show-more thumb-info-no-zoom">
            <span class="relative block overflow-hidden">
              <img
                src={c2}
                class="img-fluid object-cover h-[450px]"
                alt="Jinrai Technologies Career Opportunities"
              />
              <div
                onClick={() => navigate("/contact")}
                portfolio
                class="cursor-pointer block absolute bottom-0 bg-[rgba(0,0,0,.5)] p-[30px] max-w-[100%] w-[100%]"
              >
                <p class=" text-white text-4xl font-semibold">Careers</p>
                <span class=" text-white">
                  Join our worldwide family
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="cyan"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </span>
          </span>
        </div>
      </section>

      <section className="md:px-28 px-4 bg-[--bg-color]">
        <Marquee>
          <MovingBanner title={"Outstanding Outcome"} />
          <MovingBanner title={"Professional Solution"} />
          <MovingBanner title={"Innovative Design"} />
          <MovingBanner title={"Outstanding Outcome"} />
          <MovingBanner title={"Professional Solution"} />
          <MovingBanner title={"Innovative Design"} />
          <MovingBanner title={"Outstanding Outcome"} />
          <MovingBanner title={"Professional Solution"} />
          <MovingBanner title={"Innovative Design"} />
        </Marquee>
      </section>
      <WhyChooseUs />
      <Team />
      <Process />
      <Footer/>
    </>
  );
};

export default Home;
