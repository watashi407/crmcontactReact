import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {  useRef , useState} from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [errors, setErrors] = useState({});

  const emailRef = useRef();

  const firstNameRef = useRef();

  const lastNameRef = useRef();

  const descriptionRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    const email = emailRef.current.value;
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const description = descriptionRef.current.value;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email) || !emailRef) {
      errors.emailRef = 'Please enter your valide email and correct type of email.';
    }
    if (!firstname) {
      errors.firstNameRef = 'Please enter your first name.';
    }

    if (!lastname) {
      errors.lastNameRef = 'Please enter your last name.';
    }
    if (!description) {
      errors.descriptionRef = 'Please enter a message.';
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

    
    const form = event.target;
    console.log(form);
    const data = new FormData(form);
  
    fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      body: data,
    })

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



     // Do something with the form data
  };
  return (
<>
<div className="bg-[#f7f7f6] relative p-3 m-5  h-[450px] sm:w-[450px] md:w-[450px] lg:w-[450px]  xl:w-[450px] rounded-[32px]   overflow-hidden flex justify-center items-center lg:p-12 lg:mr-[550px] drop-shadow-2xl shadow-lg shadow-indigo-500/40 ">
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




 <form className="mt-2 " onSubmit={handleSubmit}>
 <div className="hidden" dangerouslySetInnerHTML={{ __html: <script id='formScript5663701000000453003' src='https://crm.zoho.com/crm/WebFormServeServlet?rid=6148e19dbcdd88b2423ccb2b51f88e8cd71c60bb2d2cca86a389f084ec051845gidc501eab30839030bfbb7babf665366ebfac3028079f031f35a9668131a35a1bd&script=$sYG'></script> }} />

  
 <input type='hidden'  name='xnQsjsdp' value='c501eab30839030bfbb7babf665366ebfac3028079f031f35a9668131a35a1bd'/>
 <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
 <input type='hidden'  name='xmIwtLD' value='6148e19dbcdd88b2423ccb2b51f88e8cd71c60bb2d2cca86a389f084ec051845'/>
 <input type='hidden'   name='actionType' value='TGVhZHM='/>
 <input type='hidden'  name='returnURL' value='https&#x3a;&#x2f;&#x2f;crm.zoho.com' />

 <div className={`flex justify-evenly mb-4  mx-1`}>

  <div className={`relative flex items-center m-1 drop-shadow-2xl ${errors.firstNameRef?'text-[#a09494]': 'text-[#942727]'} `}>
  <div className="absolute pointer-events-none pl-3 text-[#999]"><BsFillPersonFill/></div>
  <input type="text" name="First Name"   placeholder={errors.firstNameRef?errors.firstNameRef:`Name`} ref={firstNameRef} className={` ${errors.firstNameRef?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} text-[11px] pl-9 rounded-r-[30px] w-15 sm:w-30  lg:w-30  rounded-l-[30px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none hover:bg-slate-300  shadow-sm`}  />
  </div>
 
  <div className={ `relative flex items-center m-1 drop-shadow-2xl ${errors.lastNameRef?'text-[#a09494]': 'text-[#942727]'} `}>
  <div className="absolute pointer-events-none pl-3 text-[#999]"><BsFillPersonFill/></div>
  <input type="text" name="Last Name" ref={lastNameRef} placeholder={errors.lastNameRef? errors.lastNameRef:`Last Name`} className={`  ${errors.lastNameRef?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} font-sans static w-15 sm:w-30   lg:w-30 font-medium  placeholder-[#999] border border-none'} text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none hover:bg-slate-300  shadow-sm`}  />
  </div>



</div>

  <div className="relative flex items-center mb-4  mx-2 drop-shadow-2xl">
  <div className="absolute pointer-events-none pl-3 text-[#999]"><AiFillMail/></div>
  <input type="email" name="Email" ref={emailRef}   placeholder={errors.emailRef?errors.emailRef:`Email`} className={` ${errors.emailRef?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} font-sans static sm:w-60  w-50 md:w-80 lg:w-100 font-medium  border border-none'}  text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`}  />

  </div>

  <div className={`relative flex items-center  mx-2 drop-shadow-2xl ${errors.descriptionRef?'text-[#a09494]': 'text-[#942727]'}`}>
  <textarea rows="6" name="Description"  ref={descriptionRef}  placeholder={errors.descriptionRef?errors.descriptionRef:` Message `} className={`${errors.descriptionRef?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} font-sans static sm:w-[400px]  w-[400px] md:w-[400px] lg:w-[400px] font-medium placeholder-[#999]border border-none  text-[11px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`}  />
  </div>


  <div className=" justify-center items-center absolute bottom-50 right-0 mt-[50px] pr-2 z-40 drop-shadow-2xl">
  <button type="Submit"  className="font-sans  bg-[#8b0d94] hover:bg-[#9e0947]  w-[150px] font-medium text-white text-[10px]  rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#aa17dc]  p-3 focus:outline-none  shadow-sm text-center ">Send</button>
  </div>
  
</form>



</div>
    </>
  );
}
