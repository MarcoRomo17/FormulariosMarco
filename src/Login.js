import { useState } from "react"
import { Button, Card, Container, Form } from "react-bootstrap"


export const Login=()=>{
const [Usuario, setUsuario] = useState('');
const [psw, setpsw] = useState('');
const [Validado, setValidado] = useState(false);

const cacharUsuario=(e)=>{
    e.preventDefault();
    const uTemporal= e.target.value
    console.log(uTemporal)
    setUsuario(uTemporal)


}

const cacharPassword=(e)=>{
    e.preventDefault();
    const pTemporal= e.target.value
    console.log(pTemporal)
    setpsw(pTemporal)


}

const handleSubmit=(e)=>{ //Funcion que me ayuda a validar
    console.log('Hola, si entro a la funcion')
   // const formEnUso=e.currentTarget; //asignamos el form con el que estamos trabajando
   
   
    setValidado(true); //Ponemos que la validacion seria TRUE


}

    return(
        <Container className="m-0 p-0 d-flex" fluid style={{backgroundColor:"#A9DFBF", height:'100vh'}}>

            <Card style={{backgroundColor:'	#2C3E50', color:'white', width:'60%', height:'70%'}} className="mx-auto my-auto rounded-3 d-flex ">
                <Card.Body>
                    <Card.Title>Ingresa a tu cuenta</Card.Title>

                    <Form onSubmit={handleSubmit}  validated={Validado}>
                        <Form.Group>
                                <Form.Label>Ingresa tu correo</Form.Label>
                                <hr/>
                                <Form.Control onChange={cacharUsuario} placeholder="correo@algo.com" required></Form.Control>
                                <Form.Control.Feedback type="invalid">Ingresa tu correo correctamente </Form.Control.Feedback>
                        </Form.Group>
                            
                        <Form.Group>
                                <hr/>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" onChange={cacharPassword} placeholder="Contraseña" required></Form.Control>
                                <Form.Control.Feedback type="invalid">Ingresa tu Contraseña </Form.Control.Feedback>


                        </Form.Group>
                    </Form>
                    <div className=" d-flex justify-content-center flex-wrap">

                    <Button type="submit" className="m-3" style={{backgroundColor:'#27AE60', border:'#27AE60'}}>Ingresar</Button>

                    <Button className="m-3" style={{backgroundColor:'#27AE60', border:'#27AE60'}}>Olvide mi Contraseña :"</Button>
                    </div>

                </Card.Body>
            </Card>

        </Container>
    )
}