import { Card, Container, Form } from "react-bootstrap"


export const Login=()=>{


    return(
        <Container className="m-0 p-0 d-flex" fluid style={{backgroundColor:"#A9DFBF", height:'100vh'}}>

            <Card style={{backgroundColor:'	#2C3E50', color:'white', width:'60%', height:'70%'}} className="mx-auto my-auto rounded-3 d-flex align-content-center">
                <Card.Body>
                    <Card.Title>Ingresa a tu cuenta</Card.Title>

                    <Form>
                        <Form.Label>Ingresa tu correo</Form.Label>
                        <Form.Control></Form.Control>
                    </Form>

                    <Form>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form>
                </Card.Body>
            </Card>

        </Container>
    )
}