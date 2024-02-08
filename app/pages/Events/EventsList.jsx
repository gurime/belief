'use client'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/config/firebase';

async function getArticles(orderBy) {

const querySnapshot = await getDocs(collection(db,"events"));
const data = [];
querySnapshot.forEach((doc) => {
data.push({ id: doc.id, ...doc.data() });
});
return data;
}
export default function EventsList() {
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
<><div className="event-section">
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
