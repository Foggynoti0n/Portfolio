import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y8zt28q', 'template_02pzlsp', e.target, 'u6-JcT554ro7jOIPZ')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact min-h-screen flex flex-col items-center justify-center bg-[#181818] p-8" id="contact">
      <span className='text-gray-100 text-xl'>Puedes contactarme por medio del siguiente formulario</span>
      <div className="contact-form w-full max-w-4xl bg-gray-800 p-8 mt-10 rounded-lg shadow-lg">
        <form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
          <div className="control-group mb-4">
            <input
              type="text"
              name="name"
              className="form-control w-[90%] p-3 rounded border border-gray-600 bg-gray-900 text-white"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <p className="help-block"></p>
          </div>
          <div className="control-group mb-4">
            <input
              type="email"
              name="email"
              className="form-control w-[90%] p-3 rounded border border-gray-600 bg-gray-900 text-white"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className="help-block"></p>
          </div>
          <div className="control-group mb-4">
            <input
              type="text"
              name="subject"
              className="form-control w-[90%] p-3 rounded border border-gray-600 bg-gray-900 text-white"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <p className="help-block"></p>
          </div>
          <div className="control-group mb-4">
            <textarea
              name="message"
              className="form-control w-[90%] p-3 rounded border border-gray-600 bg-gray-900 text-white"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <p className="help-block"></p>
          </div>
          <div className='w-full flex items-center justify-center'>
            <button
              className="btn w-[40%] rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
              type="submit"
              id="sendMessageButton"
            >
              Enviar mensaje
            </button>
          </div>
          {isSent && <p className="text-green-500 mt-4">Mensaje enviado!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
