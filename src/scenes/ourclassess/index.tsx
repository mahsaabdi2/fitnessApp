import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import {motion} from "framer-motion"
import Htext from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, improve endurance, and tone your muscles with expert-led weight training sessions. Perfect for all fitness levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility, reduce stress, and strengthen your body with calming and energizing yoga practices for all experience levels.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Target your abs and core muscles through focused exercises designed to build a stronger, leaner midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience fitness in a whole new way with dynamic, outdoor-inspired workouts that challenge your body and keep you moving.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Stay active and energized with a variety of full-body workouts designed to boost cardiovascular health, strength, and stamina.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Enhance your performance and technique through high-intensity training programs led by professional coaches.",
    image: image6,
  },
];

type Props={
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClassess=({setSelectedPage}:Props)=>{
    
    return <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
          }}>
                <div className="md:w-3/5">
                    <Htext>Our Classes</Htext>
                        <p className="py-5">
                        Flexible and supportive movement designed for better posture and balance.
                         With strong structure and flow, this workout improves core strength,
                          coordination, and overall stability.
                           Ideal for anyone looking to move with confidence and control.
                            </p>
                    
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item , index)=>(
                          <Class
                          key={`${item.name}-${index}`}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
} 
export default OurClassess;