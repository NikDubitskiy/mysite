import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

export default function Blog() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="9">
            <Card className="m-5">
              <img
                src= {require('../images/yandex-bild.jpg')}
                className="mr-3"
              />

              <Card.Body>
                <h5>Яндекс - ведущая российская компания в области информационных технологий</h5>
                <p>
                  Яндекс предлагает широкий спектр продуктов и услуг, включая поисковую систему, электронную почту, мессенджер, карты, музыку, видео, транспортные сервисы и многое другое.
                </p>
              </Card.Body>
            </Card>

            <Card className="m-5">
              <img
                src= {require('../images/yandex-station-max.png')}
                className="mr-3"
              />
              <Card.Body>
                <h5>Яндекс Станция Макс - умная колонка с голосовым помощником</h5>
                <p>
                  Яндекс Станция Макс - это продвинутая умная колонка с интегрированным голосовым помощником. Она обладает широкими функциональными возможностями, включая воспроизведение музыки, доступ к информации, управление умным домом и многое другое.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
