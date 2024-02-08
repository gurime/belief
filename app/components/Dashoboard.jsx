'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import pastor from '../img/pssd.png'
import Link from 'next/link'
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getArticles(orderBy) {

    const querySnapshot = await getDocs(collection(db,"events"));
    const data = [];
    querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}
export default function Dashboard() {
    const [fetchError, setFetchError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [useArticle, setUseArticle] = useState([]);
  
       
    
    
    
    useEffect(() => {
    const fetchData = async () => {
    try {
    const data = await getArticles();
    
    setUseArticle(data);
    } catch (error) {
    setFetchError('Error fetching articles. Please try again later.');
    } finally {
    setLoading(false); 
    }
    };
      
    fetchData();
    }, [])
return (
<>
<div style={{
textAlign:'center',
fontSize:'5rem',
color:'#ffc107',
fontWeight:'300'

}}> Welcome to Belief Ministries</div>

<div className='hope'>
<div className='hopeblock' >
HOPE
</div>

<div className='godsmsg'>
<h1>GOD WILL PROVIDE A WAY OUT</h1>
<p style={{
color: '#4f3a0b',
}}>"No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it. "</p>
<p>[1 CORINTHIANS 10:13]</p>
</div>
</div>

<div className='flexpastor'>
<div className='pastor-img'>
<Image src={pastor} alt='...'></Image>

</div>
<div className="flex-pastor-block">
<h1  style={{color: "#9e7b11",fontSize:'3.5rem',textAlign: 'center',fontWeight:'300'}}>Pastor <br/> John Doe</h1>
<p style={{
width:'50%',
margin:'auto',
fontSize:'1.25rem',
fontWeight:'300',
lineHeight:'30px'

}}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio porro reprehenderit corrupti quod a incidunt harum inventore natus sint illo, voluptate repellat dolores iste adipisci id atque recusandae illum.</p>
</div>
</div>

<section  className="events-tagline">
<h1  style={{color:'#9e7b11'}}>Upcoming Events</h1>
</section>  


<div className="event-section">
  {useArticle.map((blog) => (
    <div className="card" key={blog.id}>
      <img src={blog.cover_img}   alt='...' />
      <div className="card-title">
        <p className="lead">{blog.subtitle}</p>
      </div>
      <div className="card-date">{blog.date}</div>
      <button className="card-btn">{blog.register}</button>
    </div>
  ))}
</div>


</>
)
}
