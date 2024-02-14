import { useRef } from 'react';
import StyleM from '../../../css/message.module.css';
import emailjs from '@emailjs/browser';

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2y7pizh', 'template_8fqr49r', form.current, '_U6gBRHiG1pgeeoXR')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <section>
      <div className={StyleM.container}>
        <h2 className={StyleM.textCenter}>Contact us</h2>
        <form ref={form} onSubmit={sendEmail} className={StyleM.formControlCard}>
          <input type='text' placeholder='Full Name' name='user_name' required />
          <input type='email' placeholder='Email' name='user_email' required />
          <input type='text' placeholder='Subject' name='subject' required />
          <textarea name='message' cols='30' rows='10'></textarea>
          <button type='submit' className={StyleM.btnPrimary}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Message;
