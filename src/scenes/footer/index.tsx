import logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="azalia logo"/>
          <p className="my-5">
            Life thrives when guided by growth and purpose.
             Pure intentions and a strong foundation lead to balance and direction. 
             Progress builds through challenge, and structure supports continued development.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
         
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">mahsa.abdi2@gmail.com</p>
          <p>+989906409003</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

