import React from 'react'
import "../styles/Contact.css"


 const Contact = ()=>{
   return(
     <section id="contact">
      <h5>Get in touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">

          </article>
        </div>
        <div className="form-center">

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder= "Your Message" required></textarea>
          <button type="submit" className="btn-primary"> Send Message</button>
        </form>
        </div>
        </div>

     
     </section>
   )
 }

export default Contact;