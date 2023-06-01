import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e03txnb', 'template_5hto5wt', form.current, 'rs9vFvkOWrg_3mgs0')
    e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title"> Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">ratuufaradyb.05@gmail.com</span>

              <a href="mailto:ratuufaradyb.05@gmail.com" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+62 8953-3036-0262</span>

              <a href="https://api.whatsapp.com/send?phone=62895330360262&text=Hello,Queen!" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>

              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@ratuufaradiiba</span>

              <a href="https://www.instagram.com/ratuufaradiiba" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title"> Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your project"></textarea>
            </div>

            <button className="button button--flex">
              Send Message &nbsp;
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="var(--container-color)"
                />
                <path opacity="0.34" d="M10.1094 13.6501L13.6894 10.0601" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="var(--container-color)" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
