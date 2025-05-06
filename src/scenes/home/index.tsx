import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png"
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";

type Props={
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({ setSelectedPage }: Props) => {
   
  
    return (
      <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* image and main */}
        <motion.div
          className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* main  */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* heading */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  <img alt="home-page-text" src={HomePageText}  />
                </div>
              </div>
  
              <p className="mt-8 text-sm">
              Unmatched gym. Top-notch fitness classes. World-class studios to help you achieve your dream body. Get in shape today
              </p>
            </motion.div>
  
            {/* actions */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
  
          {/* image */}
          <div
            className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
          >
            <img alt="home-pageGraphic" src={HomePageGraphic} />
          </div>
        </motion.div>
  
        
      </section>
    );
  };
  
  export default Home;