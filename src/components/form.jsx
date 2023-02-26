import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { useState ,useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',

  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!formState.name) {
      errors.name = 'Please enter your name.';
    }
    if (!formState.email) {
      errors.email = 'Please enter your email address.';
    }
    if (!formState.message) {
      errors.message = 'Please enter a message.';
    }
    
    // If there are errors, set them in state and return early
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      toast.error('🦄 Too Bad Need Fill Up All fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    

    emailjs.sendForm('service_970qz3p', 'template_a8470n9', form.current, 'qTj7p4_ukRXTE_tGf')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });

    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    console.log(formState);



     // Do something with the form data
  };
  return (
<>
<div className="bg-[#f7f7f6] relative p-3 m-5  h-[450px] sm:w-[450px] md:w-[450px] lg:w-[450px]  xl:w-[450px] rounded-[32px]   overflow-hidden flex justify-center items-center lg:p-12 lg:mr-[550px]">
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
<div className="absolute top-0 right-0 w-full h-12 bg-[#900f7d] flex items-center justify-start" >
<div className="pl-7 pointer-events-none p-3 text-[15px] rounded-lg text-white animate-pulse font-[Helvetica Neue]">GET IN TOUCH</div>

</div>




 <form ref={form} className="mt-2 " onSubmit={handleSubmit}>

 <div className={`flex justify-evenly mb-4  mx-1 ${errors.name?'text-[#a09494]': 'text-[#942727]'}`}>

  <div className="relative flex items-center m-1">
  <div className="absolute pointer-events-none pl-3 text-[#999]"><BsFillPersonFill/></div>
  <input type="text" name="name" placeholder={errors.name?errors.name:`Name`} className={`font-sans static w-15 sm:w-30   lg:w-30 font-medium  ${errors.name?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} text-[11px] pl-9 rounded-r-[30px] rounded-l-[30px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none hover:bg-slate-300  shadow-sm`} onChange={handleInputChange} />
  </div>
 
  <div className="relative flex items-center m-1">
  <div className="absolute pointer-events-none pl-3 text-[#999]"><BsFillPersonFill/></div>
  <input type="text" name="name" placeholder={errors.name?errors.name:`Name`} className={`font-sans static w-15 sm:w-30   lg:w-30 font-medium  ${errors.name?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none hover:bg-slate-300  shadow-sm`} onChange={handleInputChange} />
  </div>



</div>

  <div className="relative flex items-center mb-4  mx-2">
  <div className="absolute pointer-events-none pl-3 text-[#999]"><AiFillMail/></div>
  <input type="email" name="email" placeholder={errors.email?errors.email:`Email`}  className={`font-sans static sm:w-60  w-50 md:w-80 lg:w-100 font-medium ${errors.email?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'}  text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`} onChange={handleInputChange} />

  </div>

  <div className="relative flex items-center  mx-2">
  <textarea rows="6" name="message" placeholder={errors.message?errors.message:`Message`} className={`font-sans static sm:w-[400px]  w-[400px] md:w-[400px] lg:w-[400px] font-medium ${errors.message?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999]border border-none'}  text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`} onChange={handleInputChange} />
  </div>
{/* 
  <div class="relative justify-center items-center mt-5" data-te-input-wrapper-init>
  <div className="absolute mt-3  pointer-events-none pl-3 text-[#999]"><AiFillMail/></div>
      <input
        type="email"
        name="test"
        className={`peer font-sans static sm:w-60 w-50 md:w-80 lg:w-100 font-medium ${errors.message?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999]border border-none'}  text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`}
       />
      <label
        className={`pl-5 mt-1.5 font-sans pointer-events-none text-[11px]  absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  text-[#999] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.3rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200`}
        >Email</label>
    </div> */}

  <div className=" justify-center items-center absolute bottom-50 right-0 mt-[50px] pr-2 z-40">
  <button type="Submit"  className="font-sans  bg-[#8b0d94] hover:bg-[#9e0947]  w-[150px] font-medium text-white text-[10px]  rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#aa17dc]  p-3 focus:outline-none  shadow-sm text-center ">Send</button>
  </div>
  
</form>



</div>
    </>
  );
}
