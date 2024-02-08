import Image from 'next/image'
import React from 'react'
import pastor from '../../img/church-bg.jpg'
import visitbib from '../../img/visit-bible.jpeg'
import visitchoir from '../../img/visit-choir.jpeg'
import VisitForm from './VisitForm'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/Footer'


export const metadata = {
    title: 'Visit Belief Ministries',
    description: 'Explore the mission, beliefs, and activities of Belief Ministries. Join us in our journey of faith and community.',
    keywords: 'Belief Ministries, faith, community, mission, beliefs, spirituality'
    // Add other relevant metadata properties as needed
  }
  

export default function Visit() {
return (
<>
<Navbar/>
<section  className="events-tagline">
<h1  style={{color:'#9e7b11'}}>Visit US</h1>
</section>  

<div className='flexpastor'>
<div className='pastor-img'>
<Image src={pastor} alt='...'></Image>

</div>
<div className="flex-visit-block">
<h4 style={{fontSize:'2.5rem',fontWeight:'300'}}>Address</h4>
<p>Fake Address 12345678</p>
<h4 style={{fontSize:'2.5rem',fontWeight:'300'}}>Service Times</h4>
<p>
Sundays 9:00 AM to 11: 00 AM <br />
Wednesdays 6:00PM to 8:00PM <br />
Fridays: Concert Night 8:00PM
</p>
<h4 style={{fontSize:'2.5rem',fontWeight:'300'}}>Phone Number</h4>
<p>123-456-7890</p>

</div>
</div>

<section  className="events-tagline">
<h1  style={{color:'#9e7b11'}}>Join US</h1>
</section>  

<div className="join-container"
style={{
marginBottom:'2rem'
}} >

<Image src={visitbib}/>
<div class="join-title">
    
<h1>JOIN CHURCH</h1>
<p> I'd like to extend and invitation to everyone reading this to come and join us <br/> for Sunday mass and prayers. Please
come and join us in praying <br/> to the lord Jesus Christ and betterment in this world.</p>
</div>
</div>

<div className="join-container sec-join-container"
style={{
marginBottom:'2rem'
}} >


<div class="join-title">
    
<h1>JOIN CHURCH</h1>
<p> I'd like to extend and invitation to everyone reading this to come and join us <br/> for Sunday mass and prayers. Please
come and join us in praying <br/> to the lord Jesus Christ and betterment in this world.</p>
</div>
<Image src={visitchoir}/>
</div>


<section  className="events-tagline">
<h1  style={{color:'#9e7b11'}}>Please contact US</h1>
</section>  
<VisitForm/>
<Footer/>
</>
)
}
