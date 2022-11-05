import React from 'react';
import logofooter from '../images/logo.png';
import {Container, Row,Col} from 'reactstrap';

const Footer =() => {
 return(
  <div className="footer">
   <Container>
    <Row>
     <Col md="6">
      <div className="brand">
  <img src={logofooter} alt="footer logo" />
  <p className="brandText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vitae enim! Dolores cumque recusandae quod itaque ad omnis excepturi minus.</p>
      </div>
     </Col>
     <Col md="4">
      <ul className='products'>
       <h4 className='theme'>Products</h4>
       <li>
        <a href='#'>
          Trending
        </a>
       </li>
       <li>
        <a href='#'>
          My account
        </a>
       </li>
       <li>
        <a href='#'>
          Vendors
        </a>
       </li>
       <li>
        <a href='#'>
          Brands
        </a>
       </li>

       <li>
        <a href='#'>
          Storefront
        </a>
       </li>
      </ul>

      <ul className='products'>
       <h4 className='theme'>Legals</h4>
       <li>
        <a href='#'>
          License
        </a>
       </li>
       <li>
        <a href='#'>
          Refund Policy
        </a>
       </li>
       <li>
        <a href='#'>
          About Us
        </a>
       </li>
       <li>
        <a href='#'>
Contacts      
  </a>
       </li>
      </ul>

      
      <ul className='products'>
       <h4 className='theme'>Contacts</h4>
       <p className='sampText'>Lorem ipsum dolor sit amet consectetur.</p>
       <li>
        <a href="tel: +1 234 567 8910">
        +1 234 567 8910
        </a>
       </li>
       <li>
        <a href='mailto:support@khoomi.com'>
        support@khoomi.com
        </a>
       </li>
     
      </ul>
     </Col>
    </Row>
   </Container>
  </div>
 )
}
export default Footer;