'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import footLogo from '../img/belief_logo.png'
import Image from 'next/image'
import navlogo from '../img/belief_ministrie.png'

const Footer = () => {

const scrollTo = () =>{
window.scroll({top: 0,

})
}  

const router = useRouter()
return (
<>


<footer className="footer">
{/* <div className="support-itruth-box">
<div className="support-headline">Support iTruth News</div>
<div className="support-subtitle">iTruth News works hard to bring <br/> you the news you care about.</div>
<div className="support-flex-box">
<button onClick={() => router.push('/pages/Contribute')} id="subbtn1"  >Contribute</button>
<div style={{width: "2rem"}}></div>
</div>
    
    



</div> */}

<div className="flex-footer">
<div className="footer-tablebox"> 
<div className="footer-headline">Get To Know Us</div>

<ul className="footer-navlink">
<li><Link href='#!'>Career</Link></li>

<li><Link href='#!'>Company News</Link></li>

<li><Link href='/pages/About'>About Belief Ministries</Link></li>

<li><Link href='/pages/Investor'>Investor Relations </Link></li>

<li><Link href='/pages/Advertise' >Advertise</Link></li>


</ul>
</div>
{/*first tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Events</div>

<ul className="footer-navlink">
<li><Link href='/pages/Eat'>Eat & Greet</Link></li>

<li><Link href='/pages/Movie'>Movie Night</Link></li>

<li><Link href='/pages/Concert'>Concert Night</Link></li>

<li><Link href='/pages/School'>School Supplies</Link></li>

<li><Link href='/pages/Money'>Raise Money</Link></li>

<li><Link href='/pages/Bible'>Bible Study</Link></li>


</ul>
</div>
{/*seconds tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Mission</div>

<ul className="footer-navlink">
<li><Link href='/pages/Donate'>Donate</Link></li>

<li><Link href='/pages/Conservation'>Conservation</Link></li>

<li><Link href='/pages/Poverty'>Fight Poverty</Link></li>

<li><Link href='/pages/Rebuild'>Rebuild</Link></li>

<li><Link href='/pages/Faith'>Spread Faith</Link></li>



</ul>
</div>
{/* third tablebox stops here
<div className="footer-tablebox" style={{borderRight:'none'}}> 
<div className="footer-headline">Life Style</div>

<ul className="footer-navlink">
<li><Link  href='/pages/Food'>Food & Drinks</Link></li>

<li><Link  href='/pages/Cars'>Cars & Trucks</Link></li>

<li><Link  href='/pages/Home'>House & Home </Link></li>

<li><Link  href='/pages/Pets'> Pets & Tips </Link></li>

<li><Link  href='/pages/Fitness'>Fitness & Well-Being</Link></li>

<li><Link  href='/pages/Family'>Family & Friends</Link></li>

<li><Link href='/pages/Religion'>Faith & Religion</Link></li>

<li><Link href='/pages/Books'>Books & Literature</Link></li>

<li><Link href='/pages/Pride'>Pride & News</Link></li>

</ul>
</div> */}
{/*fourth tablebox stops here*/}
{/* <div className="footer-tablebox" style={{borderRight:'none',borderLeft:'solid 1px #fff'}}> 
<div className="footer-headline">Health</div>

<ul className="footer-navlink" style={{borderBottom:'none'}}>
<li><Link  href='/pages/MentalHealth'>Mental Health</Link></li>

<li><Link  href='/pages/ChildrensHealth'>Children's Health</Link></li>

<li><Link  href='/pages/HeartHealth'>Heart Health</Link></li>

<li><Link  href='/pages/PetHealth'>Pet Health</Link></li>

<li><Link  href='/pages/EyeHealth'>Eye Health</Link></li>

<li><Link  href='/pages/HealthyLiving'>Healthy Living </Link></li>

<li><Link  href='/pages/MedicalResearch'>Medical Reasearch</Link></li>

<li><Link  href='/pages/Cancer'> Cancer</Link></li>





</ul>
</div> */}
{/*fourth tablebox stops here*/}


</div>

<div style={{display:'flex',justifyContent:'space-evenly',padding:'1rem',alignItems:'center',placeContent:'center'}}  className="navfooter">
<Image style={{marginRight:'auto '}} onClick={() => router.push('/')} src={navlogo} height={36} alt='...'  />






<div className="navlinks sm-navlink" style={{flexWrap:'nowrap'}}>
<Link  href='/pages/Contact'>Contact iTruth News</Link>

<Link  href='/pages/Terms'>terms of Use</Link>

<Link  href='/pages/Privacy'>Privacy Policies </Link>

<Link style={{border:'none'}}  href='../pages/Cookie'>Cookie Policies</Link>


</div>
</div>





<hr />


<div style={{
color:'#fff',
padding:'1rem 0',
textAlign:'center'
}}>
   <br />
   © Belief Ministers or its affiliated companies. All rights reserved.

</div>


<div className="footer-logo-box">

<Image width={36} onClick={scrollTo}  src={footLogo} alt="..." />

</div>
</footer>






</>
)
}

export default Footer