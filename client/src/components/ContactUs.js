import React, { Component } from 'react'
import "../style/contactUs.css"
import ALLHeader from './ALLHeader'
import Footer from './Footer'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import k from "../images/k.jpg";

export default class ContactUs extends Component {
  constructor(props){
    super(props)
    this.state={
      fullname:"",
      message:""
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    var detail = "Hello" + " " + this.state.fullname + " " + "is here" + " " + this.state.message

    var toSend ={
      from_name: '',
      to_name: '',
      message:detail,
      reply_to: "ayankhatib0@gmail.com"
    }

    
   emailjs.send(
    'service_ep0xp0o',
    'template_jrtk20d',
    toSend,
    '7t1ZVfV3HznQEu5Dh'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('🙋‍♂️ '+ "email send successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style:{background:'yellow',color:'#1fa4f6'},
        });
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  
    this.setState({fullname:"",message:""})
  }
  render() {
    return (
        <div  >
        <ALLHeader title="Contact Us"/>

      <div className='body'>
        
  <div className="">
  
    <div className='headers'>
    
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam iure
        vitae nesciunt quaerat sed, et ullam placeat ut? Impedit dolorem nostrum
        itaque molestias nemo delectus animi fuga illum magnam earum pariatur
        reiciendis, explicabo id velit facilis, necessitatibus cum! Magnam.
      </p>
    </div>
    <div className="contents">
      <div className="content-form">
        <div className='sections'>
          <i className="fa fa-map-marker fa-2x icon-s" aria-hidden="true" />
          <h2>address</h2>
          <p>
          Address: K.J. Campus, <br/>
          Opp. I.T.I., javla-Savli, <br/>
          Savli <br/>
          </p>
        </div>
        <div className='sections'>
          <i className="fa fa-phone fa-2x icon-s" aria-hidden="true" />
          <h2>Phone</h2>
          <p>123-456-78901548</p>
        </div>
        <div className='sections'>
          <i className="fa fa-envelope fa-2x icon-s" aria-hidden="true" />
          <h2>E-mail</h2>
          <p>learners@gmail.com</p>
        </div>
      </div>
    </div>
    <form>
      <div className="forms">
        <div className="right">
          <div className="contact-form">
            <input type="text" required="" value={this.state.fullname} onChange={(e)=>{
              this.setState({fullname:e.target.value});
            }}/>
            <span style={{color:'white'}}>Full Name</span>
          </div>
        
          <div className="contact-form">
            <textarea
              name="message"
              defaultValue={"                    \n                  "}
              onChange={(e)=>{
             
                this.setState({message:e.target.value})}}
              value={this.state.message}
            />
            <span style={{color:'white'}}> Type your Message....</span>
          </div>
          <div className="contact-form">
            <button id='submit_btn'  name="submit" onClick={this.handleSubmit}> Submit </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="media">
    <li>
      <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
    </li>
    <li>
      <i className="fa fa-instagram fa-2x" aria-hidden="true" />
    </li>
    <li>
      <i className="fa fa-whatsapp fa-2x" aria-hidden="true" />
    </li>
    <li>
      <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
    </li>
  </div>
  <div className="empty"></div>


      </div>
      <Footer/>
      </div>
    )
  }
}
