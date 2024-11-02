import { Button, Card, Container, Form } from "react-bootstrap"


export const RegistrarUsuario=()=>{
    return(
        <>
        <Container className="m-0 p-0" fluid style={{backgroundColor:"#A9DFBF", overflow:'auto', height:'100vh'}}>
            <Card style={{backgroundColor:'	#2C3E50', color:'white', width:'60%'}} className="mx-auto my-auto rounded-3 d-flex ">
                <Card.Title >Realiza tu registro aqui</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Ingresa tu nombre"></Form.Control>
                        </Form.Group>
                        <hr></hr>

                        <Form.Group>
                            <Form.Label>Apellido paterno</Form.Label>
                            <Form.Control placeholder="Ingresa tu apellido paterno"></Form.Control>
                        </Form.Group>
                        <hr></hr>

                        <Form.Group>
                            <Form.Label>Apellido materno</Form.Label>
                            <Form.Control placeholder="Ingresa tu apellido materno"></Form.Control>
                        </Form.Group>
                        <hr></hr>

                        <Form.Group>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control placeholder="Ingresa tu correo electrónico"></Form.Control>
                        </Form.Group>
                        <hr></hr>

                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña"></Form.Control>
                        </Form.Group>
                        <hr></hr>

                        <Form.Group>
                            <Form.Label>Confirma tu contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Vueleve a ingresar tu contraseña"></Form.Control>
                        </Form.Group>
                        <hr></hr>

                        <Button>Registrarme ya!</Button>

           
                    </Form>

                </Card.Body>

            </Card>

        </Container>
        </>
    )
}