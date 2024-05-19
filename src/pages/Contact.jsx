import '../styles/pages.css';
import { useState } from 'react';
export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message + ' ' + 'sent from' +' ' + email + ' ' + 'thank you' + ' ' + name);
    setName('');
    setEmail('');
    setMessage('');
  };
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Jeff'required/>
          </label>
          <label>
          Email:
          <input type="email" name="email" required value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='example@email.com'/>
          </label>
          <label>
          Leave a message:
          <textarea type="text" name="message"  value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='How can I help you?' required/>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
  