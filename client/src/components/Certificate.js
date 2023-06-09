import React, { Component } from 'react'
import "../style/certificate.css";
var UserName = false;
export default class Certificate extends Component {
    constructor(props){
        super(props)
        this.state={
            UserName:"Learners"
            
        }
    }

    componentDidMount(){
        if(UserName === false){
            UserName = window.prompt("enter your name to dispay on certificate");
        }
         

        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log(date)
        this.setState({UserName,date})

      
    }
  render() {
    return (
        <>

      <div className='hidden-container' hidden={UserName === false?true:false}>
        <div className="container pm-certificate-container">
  <div className="outer-border" />
  <div className="inner-border" />
  <div className="pm-certificate-border col-xs-12">
    <div className="row pm-certificate-header">
      <div className="pm-certificate-title cursive col-xs-12 text-center">
        <h2>Learners  Certificate of Completion</h2>
      </div>
    </div>
    <div className="row pm-certificate-body">
      <div className="pm-certificate-block">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
            <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
              <span className="pm-name-text bold">{this.state.UserName}</span>
            </div>
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
            <div className="pm-earned col-xs-8 text-center">
              <span className="pm-earned-text padding-0 block cursive">
                has earned
              </span>
              <span className="pm-credits-text block bold sans">
              6.5 Credit score
              </span>
            </div>
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
            <div className="col-xs-12" />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
            <div className="pm-course-title col-xs-8 text-center">
              <span className="pm-earned-text block cursive">
                while completing the training course entitled
              </span>
            </div>
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
            <div className="pm-course-title underline col-xs-8 text-center">
              <span className="pm-credits-text block bold sans">
              Learners :- A journey to your knowledge
              </span>
            </div>
            <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        <div className="row">
          <div className="pm-certificate-footer">
            <div className="col-xs-4 pm-certified col-xs-4 text-center">
              <span className="pm-credits-text block sans">
              Learner KJIT Savli

              </span>
              <span className="pm-empty-space block underline" />
              <span className="bold block">
              
Handeled by Ayan Khatib , Sahaj Chaguni & Mrunal Khopkar
              </span>
            </div>
            <div className="col-xs-4">{/* LEAVE EMPTY */}</div>
            <div className="col-xs-4 pm-certified col-xs-4 text-center">
              <span className="pm-credits-text block sans">{this.state.date}</span>
              <span className="pm-empty-space block underline" />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
      </>
    )
  }
}
