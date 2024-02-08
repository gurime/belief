import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/navbar'
import React from 'react'
import EventsList from './EventsList'

export const metadata = {
title: 'Belief Ministries Upcoming Events',
description: 'Explore the upcoming events hosted by Belief Ministries. Stay informed about our latest activities, workshops, and gatherings aimed at fostering a welcoming community, promoting spiritual growth, and making a positive impact in the lives of individuals and the community.',
keywords: 'Belief Ministries, upcoming events, community, spiritual growth, positive impact, workshops, gatherings'
}



export default function page() {
return (
<>
<Navbar/>
<section  className="events-tagline">
<h1  style={{color:'#9e7b11'}}>upcoming events</h1>
</section> 
<EventsList/>
<Footer/>
</>
)
}
