import Htext from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon , UserGroupIcon , AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits:Array<BenefitType>=[
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the art facilities",
        description:"Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]
const container= {
    hidden:{},
    visiable:{
        transition:{staggerChildren :0.2}
    }
}
type Props={
    setSelectedPage:(value:SelectedPage)=>void;
}
const Benefits=({setSelectedPage}:Props)=>{

    return(
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        
        </motion.div>
                {/*benefits*/}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}>

                    {benefits.map((benefit:BenefitType)=>(
                        <Benefit 
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}                        />
                    ))}
                </motion.div>
            </motion.div>

            {/*graphic and description*/}

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                  {/*graphic*/}
                  <img className="mx-auto" alt="benefitsPageGraphic"
                  src={BenefitsPageGraphic}/>
                 {/*description*/}
                 <div>

                    {/*title*/}
                    <motion.div
                         className="relative"
                         initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                            }}>
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <div>
                                <Htext>Milions of happy memebers getting fit
                                <span className="text-primary-500">Fit</span></Htext>
                            </div>

                        </div>

                    </motion.div>

                 {/*description*/}
                    <motion.div
                        className="md:my-5 md:w-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.2 ,duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                     <p className="my-5">
                        A strong sense of structure and purpose is taking shape. With confidence and capability,
                         it grows through learning and experience. Every challenge is met with determination. 
                         It pushes forward with focus and intention, never standing still. Progress is built step by step, 
                         with stability and strength at the core. Calm and bold, it rises above obstacles.
                    </p>
                    <p className="mb-5">
                        Moving steadily, 
                        it embraces change and adapts with ease. With strong foundations,
                         it overcomes difficulties and stays on course. There's a constant drive to improve, to grow, and to find balance. 
                         Even in times of pressure, it remains focused and ready to face what's next.
                    </p>

      
                    </motion.div>

                    {/*button*/}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-abstractwaves">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                join now
                            </ActionButton>
                        </div>
                    </div>
                 </div>
            </div>

    </section>
    )
};
export default Benefits