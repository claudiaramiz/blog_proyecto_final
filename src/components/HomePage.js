import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{span:12}} md={{span: 6}} className="mb-5">
                    <h2>Bienvenid@ al Blog!</h2>
                    <p>Publica todo lo que deseas!</p>
                    <p>
                        <Button as={Link} to="/login" className="ml-1">Ingresa</Button> o
                        <Button as={Link} to="/register" className="ml-1">crea una cuenta</Button> </p>
                </Col>
                <Col>
                <img
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="Task Manager" />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;