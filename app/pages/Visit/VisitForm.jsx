'use client'
import React from 'react'
import {  useState } from 'react';
import { addDoc, collection,  getFirestore } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { BeatLoader } from 'react-spinners';

export default function VisitForm() {
const [names, setNames] = useState('');
const [ email, setEmail ] = useState('');
const [ subject, setSubject ] = useState('');
const [contact, setContact] = useState("");
const [content, setContent] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [autoFocus, setAutoFocus] = useState(true);
const router = useRouter()
const handleSubmit = async (e) => {e.preventDefault();
try {
setIsLoading(true);
const db = getFirestore();
const docRef = await addDoc(collection(db, 'contacts'), {
names:names,
email:email,
content: content,
timestamp: new Date(),
});
setContact((prevComments) => [...prevComments,
{id: docRef.id,
names:names,
email:email,
content: content,
timestamp: new Date(),
},
]);
router.push('/pages/Visit/Confirmation');
setNames('');
setEmail('');
setSubject('');
setContent('');} 
catch (error) {
setErrorMessage('Error submitting form. Please try again');
setTimeout(() => {
setErrorMessage('');
}, 3000);
} finally {
setIsLoading(false);
}
};
  
return (
<>
<form className="visitform" onSubmit={handleSubmit}>
    
<label htmlFor='fname' aria-label="Name">Name</label>
<input
type="text"
name="fname"
value={names} 
onChange={(e) => 
setNames(e.target.value)} required
/>

<label htmlFor='email' aria-label="Email">Email</label>
<input
type="email"
name="email"
aria-describedby="emailError"
value={email}
onChange={(e) => {
setEmail(e.target.value);
}}
          />

<label htmlFor='subject' aria-label="Subject">Subject</label>
<input
type="text"
name="subject"
aria-describedby="subjectError"
value={subject}
onChange={(e) => setSubject(e.target.value)} />

<label htmlFor='content' aria-label="Type Your Message">Type Your Message</label>
<textarea
type="text"
name="content"
rows={17}
required
value={content}
onChange={(e) => setContent(e.target.value)}
autoFocus={autoFocus}
aria-describedby="messageError"
/>

<button className="contact-btn" type="submit" disabled={!content || !names || !email|| isLoading}>
{isLoading ? <BeatLoader color='blue' /> : 'Submit'}
</button>

{errorMessage && <p className='error'>{errorMessage.toString()}</p>}
{successMessage && <p className="success">{successMessage}</p>}
</form>
</>
)
}
