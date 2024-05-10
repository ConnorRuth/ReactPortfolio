import '../styles/pages.css';

export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form>
        <label>
          Name:
          <input type="text" name="name" />
          </label>
          <label>
          Email:
          <input type="email" name="email" required/>
          </label>
          <label>
          Leave a message:
          <textarea type="text" name="message" required/>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
  