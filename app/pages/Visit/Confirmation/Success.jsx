'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import navlogo from '../../../img/belief_ministrie.png'
import Image from 'next/image';

export default function Success() {
    const router = useRouter()

return (
<> 
<div className='successVisit'>
<div style={{textAlign:'center'}}> 
<Image style={{padding:'20px',cursor:'none'}}  src={navlogo} width={600} alt='...'  />
<h1 style={{color:'#fff',letterSpacing:'1px'}}>      
Thank You for Contacting Belief Ministries
</h1>
<p style={{color:'#fff',lineHeight:'2',letterSpacing:'1px'}}>
"Thank you for reaching out to us! Your inquiry has been successfully submitted. We appreciate your interest and will do our best to respond promptly. In the meantime, feel free to explore more about our church community on our website. If you have any urgent concerns or additional questions, please don't hesitate to contact us directly. May you be blessed as you continue your journey with us."




</p>
<button onClick={() => router.push('/')}
style={{
display: 'inline-block',
padding: '5px 10px',
fontSize:'18px',
color:'#fff',
backgroundColor:'#1aa80f',
border:'none',
borderRadius:'4px',
textTransform:'capitalize',
cursor:'pointer',
margin:'auto 0'
}}
> go home </button>
</div>
</div>

</>
);
}