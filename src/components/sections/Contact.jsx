import Button from '../ui/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <h2 className="section-title">Say Hello! 💌</h2>
        <p className="contact-text">
          I'd love to hear from you. Drop me a message and let's be friends!
        </p>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Message sent! 🎉'); }}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="e.g. Alex Smith" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="alex@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" rows="4" placeholder="Type something nice... 🌟" required />
          </div>
          <Button type="submit" variant="primary">Send Message 🚀</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
