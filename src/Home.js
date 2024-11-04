import { Button, Container, Navbar, NavDropdown, Image, Row, Col, Table} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import userIMG from "../src/IMG/userIMG.png"
import agregarQ from "../src/IMG/agregarQ.png"

//Quedara al 100 ya cuando este la BD
export const Home=()=>{

    const textos = [
        "Primavera",
        "Verano",
        "Otoño",
        "Invierno",
        "Amanecer",
        "Atardecer",
        "Montaña",
        "Río",
        "Bosque",
        "Desierto"
      ];
      
    
    const navigate =useNavigate();

    return(
        <>
        <Container className="m-0 p-0" fluid style={{backgroundColor:"#A9DFBF", overflow:'auto', height:'100vh'}}>
            <Navbar style={{backgroundColor:'#2C3E50', height:'13%', width:'100%', color:'white'}}>
                <Container>
                    <Navbar.Brand style={{color:'white'}}><h1>FormulariosMarco</h1></Navbar.Brand>
                    <Navbar.Collapse>

                    </Navbar.Collapse>
                </Container>
                <Container></Container>
                <Container></Container>


                <Container>
                    <NavDropdown title={<Image style={{height:'50px'}} src={userIMG}></Image>/*Esto lo enocntre experimentando, que bonito es eso */}>
                        <NavDropdown.Item>Mi cuenta</NavDropdown.Item>
                        <NavDropdown.Item>Cerrar sesion</NavDropdown.Item>
                    </NavDropdown>
                    <Button  style={{border:'#27AE60', backgroundColor:'#27AE60'}} onClick={()=>navigate('/L')}>Iniciar sesion</Button>
                </Container>

            </Navbar>

            <Row fluid className="m-0 p-0">
                <Col sm={4} className="m-0 p-0">
                <Container fluid  className='m-1 my-4 d-flex justify-content-center'  style={{height:'65%', width:'100%'}} onClick={()=>navigate('/CR')}>
                    <Container className=" my-auto p-0  justify-content-center" style={{backgroundColor:'white ',height:'300px', width:'300px', borderRadius:'10%'}}>
                    
                    <Image className="m-0 p-0" style={{height:'300'}} src={agregarQ} rounded></Image>
                    </Container>

                </Container>
                </Col>

                <Col sm={8}>
                <Table className="my-3">
                    <thead>
                        <tr>
                           
                            <th>Formulario</th>
                            <th>Ultima fecha de actualización</th>
                            <th>Actualizar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {
                                textos.map((texto)=>(
                                    <tr>
                                        <td>{texto}</td>
                                        <td> un dia XD</td>
                                        <td><Button>Actualizar</Button></td>
                                        <td><Button>Borrar</Button></td>
                                    </tr>
                                    
                                    
                                ))
                            }
                      
                    </tbody>
                </Table>
                </Col>
            </Row>



        </Container>
        </>
    )
}