import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="page">
      <h1 className="mb-4">Contact Us</h1>

      <div className="row g-4">
        <div className="col-md-5">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: contact@company.com</p>
            <p>Phone: +123 456 789</p>
            <p>Address: New York, USA</p>
          </div>
        </div>

        <div className="col-md-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
