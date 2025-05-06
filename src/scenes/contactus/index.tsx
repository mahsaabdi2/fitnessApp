import { SelectedPage } from "@/shared/types"
import {useForm} from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import {motion} from "framer-motion"
import Htext from "@/shared/HText"


type Props={
    setSelectedPage:(value:SelectedPage)=>void
}

const ContactUs=({setSelectedPage}: Props)=>{
                        
const inputStyles=` mb-5 w-full rounded-lg bg-purple-300 px-5 py-3 placeholder-white`
    const{
        register,
        trigger,
        formState:{errors}
    }=useForm()

    const onSubmit= async (e:any)=>{
        
        const isValid= await trigger();
        if(!isValid){
          e.preventDefault();
        }
    }

    return <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
              
              {/*Header */}
              <motion.div 
                 onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
              }}>
                <Htext>
                    <span className="text-primary-500">Join Now</span>
                    To Get In Shape
                </Htext>
                <p className="my-5">
                Coordinated movement and growth bring comfortable balance. The body and mind are aligned with strength and flexibility. 
                Placement and rhythm come naturally. There's a graceful flow to progress, even when challenges arise. 
                Now begins a focused journey forward.
                </p>
            </motion.div>
              {/*form and Image */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/mahsa.abdi2@gmail.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div 
          className="relative mt-16 basis-2/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>

            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img className="w-full" alt="contact-us" src={ContactUsPageGraphic}/>
            </div>

          </motion.div>

                </div>
    </section>
}
export default ContactUs