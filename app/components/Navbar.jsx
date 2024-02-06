'use client'
import {useState } from "react"
import navlogo from '../img/belief_ministrie.png'

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Footer from "./Footer"
export default function Navbar() {
const router = useRouter()
const [isFooterVisible, setIsFooterVisible] = useState(false);
const toggleFooter = () => {
setIsFooterVisible(!isFooterVisible);
};
        
return (
<>
<div className="nav">
<Image placeholder="blur" onClick={() => router.push('/')} src={navlogo} height={36} alt='...' />
{/* <div style={overlayStyle}></div>
<form style={{ width: '100%',position:'relative',  }} onSubmit={handleSearch}>
<input
placeholder="Search iTruth News"
type="search"
spellCheck="false"
dir="auto"
tabIndex={0}
value={searchTerm}
onChange={(e) => {
setSearchTerm(e.target.value);
setIsOverlayActive(e.target.value.trim().length > 0);
}}
/>


{searchResults.length > 0 && searchTerm && !loading && (
<div className="search-results-container">
{searchResults.slice(0,10).map((result) => (
<div key={result.id} className="search-result-item">
<Link key={result.id} href={getLink(result.collection, result.id)}>
<p>{result.title}</p>
</Link>
</div>
))}
</div>
)}
</form> */}

<div className="navlinks">




<Link href="/">Home</Link>
<Link href="/pages/Events">Events</Link>
<Link href="/pages/Visit">Visit Us</Link>

<Link href="/pages/About">About Us</Link>

<Link href='#!' onClick={toggleFooter}>More:</Link>


</div>


</div>
{/* footer dropdown */}
<div style={{position:'relative',width:'100%'}}>
<div style={{position:'absolute',width:'100%'}}>
{isFooterVisible && <Footer />}</div>
</div>


{/* footer dropdown */}
</>


)
}
