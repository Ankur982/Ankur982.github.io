import React from 'react'
import emailjs from "emailjs-com"
import "./Mailer.css"
export const Mailer = () => {

    function handleSentEmaail(e){
        e.preventDefault();

        emailjs.sendForm('service_pixbprz','template_72chx0t',e.target,'yYiOdE_iF-WzN1o_A').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div id='project' className='container border' style={{marginTop:"50px", width:"50%",  backgroundPosition:"center", backgroundSize:"cover", backgroundColor:"#2978b5"}} >
    <form className='row' style={{margin: "25px 85px 75px 100px"}} onSubmit={handleSentEmaail}>
            <label>Name</label>
            <input  type="text" name='name' className='form-control'/>

            <label>Email</label>
            <input  type="email" name='user_email' className='form-control'/>

            <label>Message</label>
            <textarea name='message' rows="4" className='form-control'/>
            
            <input type="submit" value="Send" className='form-control btn btn-primary' style={{marginTop:"30px"}}/>
        </form>
   </div>
  )
}
