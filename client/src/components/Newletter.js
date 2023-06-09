import React ,{useState } from "react";
import "../style/newsletter.css";
import { Container, Row, Col } from "reactstrap";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Newsletter = () => {
  const [change , setChange]=useState("")
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message:"Welcome to Learners Over the next 14 days, you'll get helpful tips and motivation to help you to increase your knowledge",
    reply_to: '',
  });

  const handleChange = (e)=>{
    setChange(e.target.value)

    setToSend({
      from_name: '',
      to_name: '',
      message:"Welcome to Learners Over the next 14 days, you'll get helpful tips and motivation to help you to increase your knowledge",
      reply_to: e.target.value
    })

   
  }
  const onSubmit = (e) => {
    e.preventDefault();

    
    

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
     
      setChange("")
  };

  return (
    <div>
      <Container className="newsletter" style={{marginBottom:'20px'}} >
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" onChange={handleChange}  value ={change}/>
              <button className="btn" style={{background:'#28334AFF'}} onClick={onSubmit}>Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Newsletter;