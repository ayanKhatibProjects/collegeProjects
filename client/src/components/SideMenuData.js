import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { FcFaq } from "react-icons/fc";


export const SidebarData = [
  {
    title: 'Video',
    path: '/videoCourse',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'FAQs',
    path: '/faqs',
    icon: <FcFaq />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/services',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  
  {
    title: 'Support',
    path: '/ContactUs',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Certificate',
    path: '/certificate',
    icon: <FaIcons.FaPager style={{color:'white !important'}} />,
    cName: 'nav-text',
    
  }
];