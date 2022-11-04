import React from 'react'
import emailjs from "emailjs-com"
import "./Mailer.css"
export const Mailer = () => {

    function handleSentEmaail(e){
        e.preventDefault();

        emailjs.sendForm('service_pixbprz','template_72chx0t',e.target,'yYiOdE_iF-WzN1o_A').then(res=>{
            alert("Email sent to Ankur")
            e.target.reset()
            console.log(res)
        }).catch(err=>{
            alert("Technical Error")
            console.log(err)
        })
    }

  return (
    <div id='project' className='container border'>
    <form className='row' onSubmit={handleSentEmaail}>
            <label>Name</label>
            <input  type="text" name='name' className='form-control'/>

            <label>Email</label>
            <input  type="email" name='user_email' className='form-control'/>

            <label>Message</label>
            <textarea name='message' rows="4" className='form-control'/>
            
            <input type="submit" value="Send" className='form-control btn btn-primary' />
        </form>
   </div>
  )
}
