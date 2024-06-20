import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <h1 className="title__home">Цветочный магазин "Весна"</h1>
      <p style={{ color: '#8c1aff', marginBottom: '30px' }}>
        Мы рады приветствовать Вас в нашем цветочном магазине, где Вы найдете широкий ассортимент цветов для любого случая. От романтических роз до ярких и цветастых букетов, мы поможем Вам выбрать идеальный подарок для Ваших близких или украсить свой дом.
      </p>
      <Row className="photochki">
        <Col md={4}>
          <Image src="img/photo1.jpg" fluid />
        </Col>
        <Col md={4}>
          <Image src="img/photo2.jpg" fluid />
        </Col>
        <Col md={4}>
          <Image src="img/photo3.jpg" fluid />
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  );
};

export default Home
