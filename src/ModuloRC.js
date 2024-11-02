import { Card, Container, Form } from "react-bootstrap"
/*De momento, no se que mas hacer. planea 
Generar un codigo en especifico
Mandarlo al correo
Que lo meta y se valide
Que eso le habilite cambiar la contraseña*/
export const ModuloRC=()=>{

    return(
        <>
        <Container className="m-0 p-0" fluid style={{backgroundColor:"#A9DFBF", overflow:'auto', height:'100vh'}}>
            <Card style={{backgroundColor:'	#2C3E50', color:'white', width:'60%', height:'70%'}} className="mx-auto my-auto rounded-3 d-flex ">
                <Card.Title>¿Olvidaste tu contraseña?</Card.Title>
                <Card.Body>
                    <p>Para recuperarla, ingresa tu correo</p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Ingresa tu correo</Form.Label>
                            <Form.Control placeholder="Correo electrónico"></Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>

        </Container>
        </>
    )
}