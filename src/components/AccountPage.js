import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import useAuth from '../auth/useAuth';

function AccountPage() {

    const {user}=useAuth();

    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6, offset: 3 }} className="text-center">
                    <img
                        style={{
                            width: '50%',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                        src="/img/male_avatar.svg"
                        alt="User"
                    />
                </Col>
                <Col className="mt-4">
                    <Card>
                        <p><b>Nombre</b>{user.name}</p>
                        <p><b>Email</b>{user.email}</p>

                        <Button variant="warning">Editar cuenta</Button>
                        <Button variant="link">Cambiar password</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AccountPage;