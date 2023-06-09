import React, { Component } from "react";

import Logo from "../images/SignUp.svg";

import Register from "../images/signIn.svg";

import MainLogo from "../images/MainLogo.png"
import { useNavigate  } from "react-router-dom";

import {
  FaUserAlt,
  FaLock,
  FaFacebook,
  FaTwitterSquare,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import "../style/App.css";
// import { json } from "stream/consumers";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      
      passWord: "",
      cpassWord:"",
     
      Email: "",
    };
  }

  clear = ()=>{
    this.setState({
      userName: "",
     
      passWord: "",
     
      Email: "",
      cpassWord:""
    }
    )
  }
  componentDidMount() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
      this.clear();
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
      this.clear();
    });
    this.setState({ userName: "" });
  }

  noti = (msg) => {
    toast.error('🦄 Fill your detail properly', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    

  }

  handleChange = (data) => {
    this.setState({
      [data.target.name]: data.target.value,
    });
  };

  getUserDetail = (e)=>{
    e.preventDefault();
    var data ={
      name:this.state.userName,
      password:this.state.passWord
    }
    axios.post("http://localhost:8000/signin",data).then(function (res) {
      if(res.data.error){
        toast.error('🤦‍♂️' + res.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'toast-container',
      toastClassName: 'toast',
      style:{background:'yellow',color:'#1fa4f6'},
      progressClassName: 'progress',
          });
        }else if(res.data.message){

          toast.success('🙋‍♂️ '+ res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style:{background:'yellow',color:'#1fa4f6'},
            });
            
      
            setTimeout(()=>{
              window.location.replace("http://localhost:3000/home");
            },1000)
            
        }
   
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  this.clear();
  
  }
 
  
  handleSubmit = async(e)=>{
    e.preventDefault();
    var UserData = {
      name:this.state.userName,
      password:this.state.passWord,
      cpassword:this.state.cpassWord,
      email:this.state.Email
    }
axios.post("http://localhost:8000/register",UserData).then(function (res) {

  
  if(res.data.error){
    toast.error('🤦‍♂️' + res.data.error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toast-container',
  toastClassName: 'toast',
  style:{background:'yellow',color:'#1fa4f6'},
  progressClassName: 'progress',
      });
  }else if(res.data.msg){


    toast.success('🙋‍♂️ '+ res.data.msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style:{background:'yellow',color:'#1fa4f6'},
      });
      

      setTimeout(()=>{
        window.location.replace("http://localhost:3000/home");
      },1000)
      

  }
})
.catch(function (error) {
  console.log(error);
});
  
this.clear();
  }

  render() {
    return (
      <>
        <div className="container signDesign" style={{ maxWidth: '100%',position:'relative',backgroundColor:'#fff',minHeight:'100vh',overflow:'hidden' }}>
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" method='POST' className="sign-in-form">
                <h2 className="title" style={{ color: '#1f194c', fontWeight: 'bold' }}>Sign in</h2>
                <div className="input-field">
                  {/* <i className="fas fa-user" />
                   */}
                   
                  <FaUserAlt className=" iStyle" />
                 
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="none"
                    name="userName"
                    id="userName"
                    onChange={this.handleChange}
                    value={this.state.userName}
                  />
                </div>
                <div className="input-field">
                  <FaLock className="iStyle" />
                  <input
                    type="password"
                    placeholder="Password"
                    autocomplete="off"
                    name="passWord"
                    id="passWord"
                    onChange={this.handleChange}
                    value={this.state.passWord}
                  />
                </div>
                <input type="submit" Value="Login" className="btn-1 solid"  onClick={this.getUserDetail}/>
                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <button href="#" className="social-icon">
                    <FaFacebook />
                  </button>
                  <button href="#" className="social-icon">
                    <FaTwitterSquare />
                  </button>
                  <button href="#" className="social-icon">
                    <FaGoogle />
                  </button>
                  <button href="#" className="social-icon">
                    <FaLinkedin />
                  </button>
                </div>
              </form>
              <form action="#" method = "POST" className="sign-up-form">
                <h1  style={{
                  position:'relative',left:'-159px',top:'-11px',color:'white',marginBottom:'80px',fontWeight:'bolder' ,filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))'
                }} > Learners </h1>
                <h2 className="title" style={{ color: '#1f194c', fontWeight: 'bold' }}>Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="none"
                    name="userName"
                    id="userName"
                    onChange={this.handleChange}
                    value={this.state.userName}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    name="Email"
                    id="Email"
                    value={this.state.Email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    placeholder="Password"
                    autocomplete="off"
                    name="passWord"
                    id="passWord"
                    onChange={this.handleChange}
                    value={this.state.passWord}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input
                    type="password"
                    placeholder="confirm password"
                    autocomplete="off"
                    name="cpassWord"
                    id="cpassWord"
                    onChange={this.handleChange}
                    value={this.state.cpassWord}
                  />
                </div>
                <input type="submit" className="btn-1" Value="Sign up" onClick={this.handleSubmit} disabled={this.state.Email === "" || this.state.userName === "" || this.state.passWord === "" || this.state.cpassWord === "" ?true:false} />
                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                  <button href="#" className="social-icon">
                    <FaFacebook />

                  </button>
                  <button href="#" className="social-icon">
                    <FaTwitterSquare />

                  </button>
                  <button href="#" className="social-icon">
                    <FaGoogle />

                  </button>
                  <button href="#" className="social-icon">
                    <FaLinkedin />

                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here?</h3>
                <p style={{ color: 'white', fontSize: 'larger', wordSpacing: '8px', letterSpacing: '2px' }}>
                  Then what are you waiting for hurry up! <br />
                  Hit the <span style={{ color: 'yellow', margin: 'inherit', fontSize: 'larger' }}>Sign Up </span> button below...
                </p>
                <button className="btn-1 transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
              <img src={Logo} className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>
                  {/* <img src={MainLogo} alt="" /> */}
                </h3>
                <h1 style={{ color: 'white', fontWeight: 'bolder' }}>
                  Time to boost your knowledge and skills
                </h1>
                <button className="btn-1 transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src={Register} className="image" alt="" />
            </div>
          </div>
          <ToastContainer />
        </div>
      </>
    );
  }
}
