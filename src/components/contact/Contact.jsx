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
      
      <div className="contact-form w-full max-w-4xl bg-gradient-to-r from-[#32004e] to-[#4b006e] opacity-80 p-8 mt-10 rounded-lg shadow-2xl">
     
      <div className="sp text-gray-100 text-xl w-[100%] mx-auto text-center mb-4">
      <span >Puedes contactarme por medio del siguiente formulario</span>
      </div>
        <form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
          <div className="control-group mb-4">
            <input
              type="text"
              name="name"
              className="form-control w-full p-4 rounded-lg border border-transparent bg-[#2b002f] text-white placeholder-gray-400 focus:outline-none focus:border-[#7a00a9] focus:ring-2 focus:ring-[#7a00a9] transition-all duration-300 ease-in-out"
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
              className="form-control w-full p-4 rounded-lg border border-transparent bg-[#2b002f] text-white placeholder-gray-400 focus:outline-none focus:border-[#7a00a9] focus:ring-2 focus:ring-[#7a00a9] transition-all duration-300 ease-in-out"
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
              className="form-control w-full p-4 rounded-lg border border-transparent bg-[#2b002f] text-white placeholder-gray-400 focus:outline-none focus:border-[#7a00a9] focus:ring-2 focus:ring-[#7a00a9] transition-all duration-300 ease-in-out"
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
              className="form-control w-full p-4 rounded-lg border border-transparent bg-[#2b002f] text-white placeholder-gray-400 focus:outline-none focus:border-[#7a00a9] focus:ring-2 focus:ring-[#7a00a9] transition-all duration-300 ease-in-out"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <p className="help-block"></p>
          </div>
          <div className='w-full flex items-center justify-center'>
            <button
              className="btn w-full sm:w-1/2 rounded-lg bg-gradient-to-r from-[#6d00b9] to-[#9c00ff] text-white py-3 mt-4 hover:from-[#7a00a9] hover:to-[#a800ff] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md shadow-[#32004e]/50"
              type="submit"
              id="sendMessageButton"
            >
              Enviar mensaje
            </button>
          </div>
          {isSent && <p className="text-green-500 mt-4 text-center">Mensaje enviado!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
