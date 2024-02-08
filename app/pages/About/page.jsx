import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/navbar'
import Image from 'next/image'
import React from 'react'
import history from '../../img/history-church.png'
import values from '../../img/value-img.png'
import vision from '../../img/vision-about.jpg'


  
  export const metadata = {
    title: 'About Belief Ministries',
    description: 'Discover the mission, values, and history of Belief Ministries. Learn about our commitment to fostering a welcoming community, promoting spiritual growth, and making a positive impact in the lives of individuals and the community..',
    keywords: 'Belief Ministries, mission, values, history, community, spiritual growth, positive impact'
  }

export default function About() {
return (
<>
<Navbar/>
<section  className="events-tagline">
<h1  style={{color:'#9e7b11'}}>About Us</h1>
</section> 

<div className="join-container" 
style={{
marginBottom:'2rem'
}}>

<Image className='histroy-img' width={500}  src={history} alt='../'/>
<div className="join-title" >
<h1 >History</h1>
<p className="lead">God's merciful, marvelous, and tremendous acts are recorded in <br/>Church History, demonstrating how his Grace and Word dominate his Church and take over the world.</p>
</div>
</div>

<div className="join-container" 
style={{
marginBottom:'2rem'
}}>

<Image width={500}  src={values} alt='../'/>
<div className="join-title" >
<h1 >Values</h1>
<p className="lead">How much more valuable then is a man than a sheep! <br/> So then, it is lawful to do good on the Sabbath.</p>
</div>
</div>

<div className="join-container" 
style={{
marginBottom:'2rem'
}}>

<Image width={500}  src={vision} alt='../'/>
<div className="join-title" >
<h1 >Vision</h1>
<p className="lead">A Place For Everyone to Fell Welcomed.</p>

</div>
</div>
<Footer/>
</>
)
}
