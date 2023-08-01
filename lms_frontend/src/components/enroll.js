import React, { useState } from 'react';
import './enroll.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const EnrollmentForm = () => {
    const navigate=useNavigate('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [level, setLevel] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  let token=localStorage.getItem("token");


  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px'
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    fontSize: '20px'
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a server or perform any other actions
    
    console.log('Form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Level:', level);
    console.log('Course:',course);
    console.log('Payment Method:', paymentMethod);

    
    // switch (paymentMethod) {
    //     case 'creditCard':
    //         window.open('https://example.com/pay/credit-card', '_blank');
    //         break;
    //         case 'bankTransfer':
    //             window.open('https://example.com/pay/bank-transfer', '_blank');
    //             break;
    //             case 'paypal':
    //                 window.open('https://example.com/pay/paypal', '_blank');
    //                 break;
    //                 default:
    //                     break;
    //                 }
                    // Simulate payment success
                    console.log(token);
                    setPaymentSuccess(true);
                    if ( setPaymentSuccess(false)) {
                        alert('payment is not successful');
                      } 
                       else {
                        alert('Registration successful!');
                          navigate('/work');
                        
                      }
                      try {
                        const response = await axios.post(
                          "http://localhost:8181/Enroll/addroll",
                          {
                            
                            firstname:firstName,
                            lastname:lastName,
                            email:email,
                            course:course,
                            P_method:paymentMethod

                          },{
                            headers:{"Authorization":`Bearer ${token}`,
                            "cache-control":"no-control"
                          }
                          }
                          );
                          
                         
                  
                        
                  
                        
                      } catch (error) {
                        console.log(error);
                        window.alert("Invalid Credentials");
                      }
    
                };

  return (
    <div className="ball">
    
    <div className="enrollment-form">
      <h2>Student Enrollment Form</h2>
      {paymentSuccess ? (
        <div className="payment-success">Payment successful!</div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select a course</option>
            <option value="Mathematics">Python</option>
            <option value="Physics">Java</option>
            <option value="Chemistry">React</option>
            <option value="ldkdfk">Mysql</option>
        
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="course">level</label>
          <select
            id="course"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select a level</option>
            <option value="Mathematics">Beginner</option>
            <option value="Physics">Intermediate</option>
            <option value="Chemistry">Advanced</option>
        
          </select>
        </div>
        {/* <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="input-field"
          >
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
            <option value="paypal">PayPal</option>
          </select>
        </div> */}

        <div style={{ marginBottom: '20px' }}>
          <div>
            <h3>Payment Method</h3>
            <br></br>
            <input
              type="radio"
              name="pay"
              id="credit"
              className="radio"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={() => setPaymentMethod('credit')}
            />
            <label htmlFor="credit">
              <span>
                <ion-icon name="card" className="radio-icon" style={{ marginRight: '5px' }}></ion-icon>
                Credit Card
              </span>
            </label>
            <input
              type="radio"
              name="pay"
              id="enaira"
              className="radio"
              value="enaira"
              checked={paymentMethod === 'enaira'}
              onChange={() => setPaymentMethod('enaira')}
            />
            <label htmlFor="enaira">
              <span>
                <ion-icon name="cash" className="radio-icon" style={{ marginRight: '5px' }}></ion-icon>
                Cash
              </span>
            </label>
          </div>
        </div>

        {/* Card Number (shown only if credit card payment selected) */}
        {paymentMethod === 'credit' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="tel"
                placeholder="Card Number"
                style={inputStyle}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <ion-icon name="cash-outline" className="icon" style={iconStyle}></ion-icon>
            </div>
          </div>
        )}

        {/* Card CVV (shown only if credit card payment selected) */}
        {paymentMethod === 'credit' && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                placeholder="Card CVV"
                style={inputStyle}
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
              />
              <ion-icon name="card-outline" className="icon" style={iconStyle}></ion-icon>
            </div>
          </div>
        )}

        <button type="submit" className="submit-button">
          Enroll
        </button>
      </form>
    </div>
    </div>
  );
};

export default EnrollmentForm;
