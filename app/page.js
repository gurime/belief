import Dashboard from "./components/Dashoboard";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
export const metadata = {
  title: 'Belief Ministries - Spreading Faith, Church Events and Spiritual Insights',
  description: 'Join us at Belief Ministries, your guide to spreading faith and staying connected with church events. Explore uplifting spiritual insights, timely coverage of church happenings, and meaningful analyses to deepen your connection with your faith community. Your trusted platform for actively participating in the spiritual journey and upcoming church events.',
  keywords: 'spreading faith, church events, spiritual insights, faith community, meaningful analyses, spiritual journey, religious gatherings'
}


export default function Home() {
  return (
<>
<Navbar/>
<Dashboard/>
<Footer/>
</>
);
}
