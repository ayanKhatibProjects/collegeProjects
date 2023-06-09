import React from 'react'
import { AiOutlineInstagram ,AiOutlineTwitter,AiFillFacebook,AiOutlineTeam} from "react-icons/ai";
import ayans from '../images/ayanss.jpg'
import mrunals from "../images/mrunalss.jpeg"
import sahaj from "../images/sahaj.jpeg"
import "../style/team.css"
// import HeaderAll from './HeaderAll';
import Footer from './Footer';
import ALLHeader from './ALLHeader';

export default function Team() {
  return (
    <div>

<ALLHeader/>
<div class="team">
{/* <HeaderAll /> */}

     <h2 className='h2'> <AiOutlineTeam/> Meet Our Team</h2>
     <div class="container team_container">
          <div class="team_member">
               <div class="team__member-image">
                    <img src={ayans}  alt='' className='img_team' />
               </div>
               <div class="team_member-info">
                    <h4>Ayan Khatib</h4>
                    <p style={{color:'#28334AFF'}}>Full stack web developer</p>
               </div>
               <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blacnk"><AiOutlineInstagram className='uil uil-instagram'/></a>
                    <a href="https://instagram.com" target="_blacnk"><AiFillFacebook className='uil uil-instagram'/></a>
                    <a href="https://instagram.com" target="_blacnk"><AiOutlineTwitter className='uil uil-instagram'/></a>
               </div>
          </div>
          <div class="team_member">
               <div class="team__member-image">
                    <img src={mrunals} alt=''  className='img_team'/>
               </div>
               <div class="team_member-info">
                    <h4>Mrunal Khopkar</h4>
                    <p>web Designer</p>
               </div>
               <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blacnk"><AiOutlineInstagram className='uil uil-instagram'/></a>
                    <a href="https://instagram.com" target="_blacnk"><AiFillFacebook className='uil uil-instagram'/></a>
                    <a href="https://instagram.com" target="_blacnk"><AiOutlineTwitter className='uil uil-instagram'/></a>
               </div>
          </div>
          <div class="team_member">
               <div class="team__member-image">
                    <img src={sahaj} alt='' className='img_team'/>
               </div>
               <div class="team_member-info">
                    <h4>Sahaj Chugani</h4>
                    <p>Backend Developer</p>
               </div>
               <div class="team_member-socials">
                    <a href="https://instagram.com" target="_blacnk"><AiOutlineInstagram className='uil uil-instagram'/></a>
                    <a href="https://instagram.com" target="_blacnk"><AiFillFacebook className='uil uil-instagram'/></a>
                    <a href="https://instagram.com" target="_blacnk"><AiOutlineTwitter className='uil uil-instagram'/></a>
               </div>
          </div>
     </div>
</div>

<Footer />
</div>

    
  )
}
