import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "./shared/types"
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClassess from "./scenes/ourclassess";
import ContactUs from "./scenes/contactus";
import Footer from "./scenes/footer";


function App() {

const [selectedPage , setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
const [isTopOfPage , setIsTopOfPage]=useState<boolean>(true);

useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY===0)
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
  
    if(window.scrollY !==0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll", handleScroll)
  return()=> window.removeEventListener("scroll" , handleScroll)
}, []);


  return (
    <>
    <p className="bg-gray-20">
    <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClassess  setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </p>
    </>
  )
}

export default App
