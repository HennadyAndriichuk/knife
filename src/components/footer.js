import { useState } from 'react';
import '../styles/footer-styles.scss';

function Footer () {
   const [deliveryWay, setDeliveryWay]=useState('nova');
   const [paymentWay, setPaymentWay]=useState('card');
   const [name, setName]=useState('');
   const [surname, setSurName]=useState('');
   const [phone, setPhone]=useState('');
   const [city, setCity]=useState('');
   const [quantity, setQuantity]=useState('');
   const [orderData, setUserData]=useState({});

   const handleInputDelivery =(event)=>{
      setDeliveryWay(event.target.value);
   };

   const handleInputPayment =(event)=>{
      setPaymentWay(event.target.value);
   };

   const handleNameChange = (event) =>{
      setName(event.target.value);
   };

   const handleSurnameChange = (event) =>{
      setSurName(event.target.value);
   };

   const handlePhoneChange = (event) =>{
      setPhone(event.target.value);
   };

   const handleCityChange = (event) =>{
      setCity(event.target.value);
   };

   const handleQuantityChange = (event) =>{
      setQuantity(event.target.value);
   };

   const handleSubmit = () =>{
      orderData.deliveryWay = deliveryWay;
      orderData.paymentWay = paymentWay;
      orderData.name = name;
      orderData.surname = surname;
      orderData.phone = phone;
      orderData.city = city;
      orderData.quantity = quantity;
      setUserData(orderData);
   };

   

   return(
      <div className="footer-wrapper">
         <div className='order-wrapper'>
            <div className='order-title'>Надіслати замовлення</div>
            <div className='input-wrapper'>
               <div className='input-container'>
                  <div className='input-block'>
                     <div className='contacts'>Контактні дані</div>
                     <input 
                        placeholder = 'Ім’я' 
                        type = 'text'
                        onChange={handleNameChange}
                        value={name}
                     />
                     <input 
                        placeholder = 'Прізвище' 
                        type = 'text'
                        onChange={handleSurnameChange}
                        value={surname}
                     />
                     <input 
                        placeholder = 'Телефон' 
                        type = 'tel'
                        onChange={handlePhoneChange}
                        value={phone}
                     />
                     <div className='delivery'>Доставка</div>
                     <input 
                        placeholder = 'Місто' 
                        type = 'text'
                        onChange={handleCityChange}
                        value={city}
                     />
                     <form className='radio-form'>
                        <div className='radio'>
                           <input 
                              className='radio-input' 
                              type = 'radio' 
                              name='m' 
                              id='curier' 
                              value='curier' 
                              onChange={handleInputDelivery}
                           />
                           <label htmlFor="curier">Кур‘єр Нова Пошта</label>
                        </div>
                        <div className='radio'>
                           <input 
                              className='radio-input' 
                              type = 'radio' 
                              name='m' 
                              id='nova' 
                              value='nova' 
                              onChange={handleInputDelivery}
                              defaultChecked
                           />
                           <label htmlFor="nova">Самовивіз Нова Пошта</label>
                        </div>
                     </form>
                  </div>
                  <div className='input-block'>
                     <div className='contacts'>Кількість</div>
                     <input 
                        placeholder = 'Штук' 
                        type = 'number'
                        onChange={handleQuantityChange}
                        value={quantity}
                     />
                     <div className='delivery'>Оплата</div>
                     <form className='radio-form'>
                        <div className='radio'>
                           <input 
                              className='radio-input' 
                              type = 'radio' 
                              name='p' 
                              id='cash' 
                              value='cash' 
                              onChange={handleInputPayment}
                           />
                           <label htmlFor="curier">Готівкою при отриманні</label>
                        </div>
                        <div className='radio'>
                           <input 
                              className='radio-input' 
                              type = 'radio' 
                              name='p' 
                              id='card' 
                              value='card' 
                              onChange={handleInputPayment}
                              defaultChecked
                           />
                           <label htmlFor="nova">Оплата карткою</label>
                        </div>
                     </form>
                  </div>
               </div>
               <div className='button-container'>
                  <button className='order-button' onClick={handleSubmit}>замовити</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;