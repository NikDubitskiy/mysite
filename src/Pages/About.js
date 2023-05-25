import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import './About.css';

export default function About() {
  return (
    <div>
      <Container>
        <Tab.Container id="ledt-tabs-examle" defaultActveKey="about">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="about">О нас</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="mission">Миссия</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="team">Команда</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="about">
                  <h1>О компании Яндекс</h1>
                  <p>
                    Яндекс - это одна из крупнейших российских IT-компаний, специализирующаяся на поисковых сервисах,
                    интернет-технологиях и онлайн-услугах. Основана в 1997 году и с тех пор стала ведущим игроком на
                    рынке интернет-услуг в России.
                  </p>
                  <img src={require('../images/yandexoffice.jpg')} alt="Яндекс" />
                </Tab.Pane>
                <Tab.Pane eventKey="mission">
                  <h1>Миссия Яндекс</h1>
                  <p>
                    Миссия Яндекса заключается в предоставлении людям доступа к полезной информации и возможности
                    эффективного взаимодействия с миром знаний и услуг через поисковые технологии, платформы и сервисы.
                  </p>
                  <img src={require('../images/mission-image.jpg')} alt="Миссия" />
                </Tab.Pane>
                <Tab.Pane eventKey="team">
                  <h1>Команда Яндекс</h1>
                  <p>
                    Команда Яндекса состоит из высококвалифицированных и талантливых профессионалов, которые работают
                    вместе, чтобы создавать инновационные продукты и услуги, которые делают жизнь людей проще и удобнее.
                  </p>
                  <img src={require('../images/team-photo.jpeg')} alt="Команда" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}