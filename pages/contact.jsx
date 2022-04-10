function Contact() {

    return ( 
        <div>
         <h1 style={{textAlign: 'center'}}>Contact</h1>
           
         <form action='https://formsubmit.co/zrbrose@gmail.com' method="POST">

            <input type="hidden" name='_subject' value='Portfolio Form'/>
            <input type="hidden" name='_next' value={`${process.env.SERVER_URL}/thankyou`}/>

            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" placeholder='name'required />

            <label htmlFor="email">Email Address: </label>
            <input type="email" name="email" id="email" placeholder='email address'required />

            <label htmlFor="message">Message: </label>
            <textarea type="message" name="message" id="message" placeholder='write a message here...'required/>

            <input type="submit"/>
         </form>

        </div>
     );
}

export default Contact;