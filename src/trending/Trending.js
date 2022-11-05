import React from 'react';
import { Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import sneaker4 from '../images/img4.png';
import sneaker1 from '../images/img1.png';
import sneaker2 from '../images/img2.png';
import sneaker3 from '../images/img3.png';

const Trending = () => {
    return (
        <div className="newcollec">
            <Container>
                <Row>
                    <Col md="12" className="pageTitles text-center">
                        <p>TOP PRODUCTS</p>
                        <h4>TRENDING THIS WEEK</h4>
                    </Col>
                    <Col className="cardsArea" lg="12" md="12">
                        <Row>
                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker2} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker3} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker4} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker4} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker3} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker2} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col className="cards" lg="3" md="3">
                                <Card>
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker image" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                  
                
                </Row>
            </Container>
        </div>
    );
};

export default Trending;