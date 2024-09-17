import { useState } from 'react';
import { toast } from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';
import { contact } from '../../api/api';

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: 'errorMessage',
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const clearForm = (response) => {
    document.getElementById('contact-form').reset();
    if (response) {
      toast.success('Message sent successfully!', {
        position: 'bottom-left',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Something went wrong! Please try again', {
        position: 'bottom-left',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      const response = await contact(forms);
      clearForm(response);
      setForms({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <form
      id='contact-form'
      onSubmit={(e) => submitHandler(e)}
      className='contact-validation-active'>
      <div className='row'>
        <div className='col col-lg-6 col-12'>
          <div className='form-field'>
            <input
              value={forms.name}
              type='text'
              name='name'
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder='Your Name'
            />
            {validator.message('name', forms.name, 'required|alpha_space')}
          </div>
        </div>
        <div className='col col-lg-6 col-12'>
          <div className='form-field'>
            <input
              value={forms.email}
              type='email'
              name='email'
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder='Your Email'
            />
            {validator.message('email', forms.email, 'required|email')}
          </div>
        </div>
        <div className='col col-lg-12 col-12'>
          <div className='form-field'>
            <input
              value={forms.phone}
              type='phone'
              name='phone'
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder='Your phone'
            />
            {validator.message('phone', forms.phone, 'required|phone')}
          </div>
        </div>
        <div className='col col-lg-12 col-12'>
          <div className='form-field'>
            <select
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.subject}
              type='text'
              name='subject'>
              <option>Choose a Service</option>
              <option>Front End Development</option>
              <option>Back End Development</option>
              <option>Full Stack Development</option>
              <option>Serverless Application Development</option>
              <option>Others</option>
            </select>
            {validator.message('subject', forms.subject, 'required')}
          </div>
        </div>
        <div className='col col-lg-12 col-12'>
          <textarea
            onBlur={(e) => changeHandler(e)}
            onChange={(e) => changeHandler(e)}
            value={forms.message}
            type='text'
            name='message'
            placeholder='Message'></textarea>
          {validator.message('message', forms.message, 'required')}
        </div>
      </div>
      <div className='submit-area'>
        <button type='submit' className='theme-btn'>
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
