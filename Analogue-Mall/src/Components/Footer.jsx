// src/components/Footer.js
import { Container, Row, Col } from "react-bootstrap";
import "../Scss/Footer.scss";
import Logo from "../assets/footer.jpg";

const Footer = () => {
  return (
    <footer className="foot">
      <Container className="py-5 mt-5">
      <Row className="roo">
  <Col lg={3} md={6} sm={12} className="footer-brand mb-4">
    <img src={Logo} alt="Analogue Mall Logo" />
    <p>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout.
    </p>
  </Col>

  <Col lg={3} md={6} sm={12} className="footer-links mb-4">
    <h5>Location</h5>
    <ul className="list-unstyled">
      <li>Gausala, Kathmandu</li>
      <li>9857042833</li>
      <li>info@analoguemall.com</li>
    </ul>
  </Col>

  <Col lg={3} md={6} sm={12} className="footer-links mb-4">
    <h5>Trade-In</h5>
    <ul className="list-unstyled">
      <li>About Trade-In</li>
      <li>Trade-In Cash</li>
      <li>Trade-In Product</li>
      <li>Analogue Pre-owned</li>
    </ul>
  </Col>

  <Col lg={3} md={6} sm={12} className="footer-links mb-4">
    <h5>My Account</h5>
    <ul className="list-unstyled">
      <li>Login</li>
      <li>Order History</li>
      <li>My Wishlist</li>
      <li>Track Order</li>
    </ul>
  </Col>
</Row>

      </Container>
      <p className="hanger">
        © Analogue Mall | Powered by Analogue Inc. — a PGNSONS Company
      </p>
    </footer>
  );
};

export default Footer;
