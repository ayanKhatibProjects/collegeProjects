import React,  { useState, useEffect ,useRef}  from 'react'

import "../style/faq.css"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import Footer from './Footer';
import ALLHeader from './ALLHeader';

function Faqs() {

    
  
        
      
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const handleClick = (index) => {
        // console.log("index",index)
      
        // 👇️ toggle isActive state on click
        index(current => !current);
      };




  
    return (
        
        <div>
        <ALLHeader title={"Frequently Asked Question"} />
       
        <div class="faqs">
      

    <div class="faqs_container" >
    
         <div className={isActive1?'faq open':'faq'}>
         
         <div class="faq_icon">{isActive1 ? <AiOutlineMinus className='uil' onClick={()=>{handleClick(setIsActive1)}}/> : <AiOutlinePlus className='uil uil-plus'  onClick={()=>{handleClick(setIsActive1)}}/>}
         
         </div>
             <div className="question_answer">
                 <h4>How doIknow the right courses for me?</h4>
               
                 <p style={{textTransform:'capitalize'}}>
                 Think about your existing experience and skill set. <br/>
Consider prospective careers and employment opportunities. <br/>
Think about what subjects interest you.<br/>
Talk to your employer, colleagues or peers about which courses are relevant and may improve your career.<br/>

</p>
             
            </div>
        </div>
        <div className={isActive2?'faq open':'faq'}>
        <div class="faq_icon">{isActive2 ? <AiOutlineMinus className='uil' onClick={()=>{handleClick(setIsActive2)}}/> : <AiOutlinePlus className='uil uil-plus'  onClick={()=>{handleClick(setIsActive2)}}/>}
         
         </div>
             <div class="question_answer">
                 <h4>How doIknow the right career  for me?</h4>
                 <p style={{textTransform:'capitalize'}}>
              1.   LEAD WITH YOUR STRENGTHS <br/>
2. EVALUATE YOUR PAST TO AVOID A DEAD END <br/>
3. TALK TO PEOPLE TO LEARN WHAT YOUR DREAM JOB IS <br/>
4. TAKE CLASSES FIRST, FIGURE OUT WHAT CAREER YOU WANT LATER <br/>
5. CONSIDER WHAT WORK ENVIRONMENT YOU NEED 

                 </p>
            </div>
        </div>
        <div className={isActive3?'faq open':'faq'}>        <div class="faq_icon">{isActive3 ? <AiOutlineMinus className='uil' onClick={()=>{handleClick(setIsActive3)}}/> : <AiOutlinePlus className='uil uil-plus'  onClick={()=>{handleClick(setIsActive3)}}/>}
         
         </div>
             <div class="question_answer">
                 <h4>How doIknow the right path for me?</h4>
                 <p style={{textTransform:'capitalize'}}>
                 1. You’ve quieted the noise <br/>
                 2. You’re doing what excites you the most <br/>
                 3. You’re a master at what you do. <br/>
                 4. You don’t settle for mediocrity. <br/>
                 5. You don’t work for your schedule, it works for you. <br/>
                 </p>
            </div>
        </div>
        <div className={isActive4?'faq open':'faq'}>
        <div class="faq_icon">{isActive4 ? <AiOutlineMinus className='uil' onClick={()=>{handleClick(setIsActive4)}}/> : <AiOutlinePlus className='uil uil-plus'  onClick={()=>{handleClick(setIsActive4)}}/>}
         
         </div>
             <div class="question_answer">
                 <h4>How doIknow the right piece of work for me?</h4>
                 <p style={{textTransform:'capitalize'}}>  
                 Make sure that you can embrace the goals of the prospective employer or, at the very least, are not alienated by the products and services supplied or the way business is conducted. For example, a person whose primary values center on advancing the public goodwill probably not be happy working for a company that produces tobacco products regardless of how well the job and salary fit them otherwise. 
                 </p>
            </div>
        </div>
        {/* <div className={isActive5?'faq open':'faq'}>
        <div class="faq_icon">{isActive5 ? <AiOutlineMinus className='uil' onClick={()=>{handleClick(setIsActive5)}}/> : <AiOutlinePlus className='uil uil-plus'  onClick={()=>{handleClick(setIsActive5)}}/>}
         
         </div>
             <div class="question_answer">
                 <h4>How doIknow the right path for me?</h4>
                 <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit laudantium quis qui similique quidem at
                     voluptatem ex.Est dolorum minima dolor aut ut,accusantium vitae architecto aliquid nostrum numquam
                     quibusdam.
                 </p>
            </div>
        </div> */}
        {/* <div className={isActive6?'faq open':'faq'}>
        <div class="faq_icon">{isActive6 ? <AiOutlineMinus className='uil' onClick={()=>{handleClick(setIsActive6)}}/> : <AiOutlinePlus className='uil uil-plus'  onClick={()=>{handleClick(setIsActive6)}}/>}
         
         </div>
             <div class="question_answer">
                 <h4>How doIknow the right courses for me?</h4>
                 <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit laudantium quis qui similique quidem at
                     voluptatem ex.Est dolorum minima dolor aut ut,accusantium vitae architecto aliquid nostrum numquam
                     quibusdam.
                 </p>
            </div>
        </div> */}
    </div>
</div>
<Footer/>
    </div>
    )
  }
export default Faqs;

