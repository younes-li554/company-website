import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });
    try {
      const res = await axios.post("http://localhost:5000/api/messages", formData);
      setStatus({ message: res.data.message, type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ message: error.response?.data?.error || "Failed to send message", type: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {status.message && 
        <div className={`alert alert-${status.type}`} role="alert">
          {status.message}
        </div>
      }
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Message:</label>
        <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ) : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
