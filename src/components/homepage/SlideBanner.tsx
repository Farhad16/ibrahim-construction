import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SlideBanner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="z-0 w-full">
      <SwiperSlide>
        <div
          style={{
            background: `url(/assets/slide-img1.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
          className="flex min-h-[400px] sm:min-h-[600px]"
        >
          <div className="flex flex-col px-8 sm:px-16 w-full justify-center">
            <div className="relative py-4 w-fit">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, easing: "ease" }}
                className="text-2xl sm:text-4xl font-bold text-white uppercase"
              >
                Hi there I am here
              </motion.h1>
              <motion.div
                initial={{ opacity: 1, width: "100%" }}
                whileInView={{ width: 0, display: "none" }}
                transition={{ duration: 0.8, easing: "ease" }}
                className="bg-white h-full py-4 absolute top-0"
              ></motion.div>
            </div>
            <div className="relative py-4 w-fit">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, easing: "ease" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase"
              >
                Hi there I am here Hi there I am here
              </motion.h1>
              <motion.div
                initial={{ opacity: 1, width: "100%" }}
                whileInView={{ right: 0, width: 0 }}
                transition={{ duration: 1, easing: "ease" }}
                className="bg-white h-full py-4 absolute top-0"
              ></motion.div>
            </div>
            <div className="w-fit">
              <motion.div
                initial={{ opacity: 1, width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, easing: "ease" }}
                className="bg-white h-[50px] rounded-full py-2 z-0 mt-[60px] flex items-center justify-center"
              >
                <Link
                  to="/contact"
                  className="w-[200px] h-[50px] rounded-full px-3 py-2 focus:no-underline no-underline transition duration-300 ease text-global hover:bg-global hover:text-white"
                >
                  <motion.button
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, easing: "ease" }}
                    className="text-lg font-bold w-full h-full"
                  >
                    Get in touch
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            background: `url(/assets/slide-img2.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
          className="flex items-center min-h-[400px] sm:min-h-[600px]"
        >
          <div className="flex flex-col  px-8 sm:px-16"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            background: `url(/assets/slide-img3.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
          }}
          className="flex items-center min-h-[400px] sm:min-h-[600px]"
        >
          <div className="flex flex-col px-8 sm:px-16"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideBanner;
