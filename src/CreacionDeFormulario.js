import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
/**De momento todo se va a ir guardando en los useState y eso. Ya al final Asignaremos las cosas a el objeto */



export const CreacionDeFormulario=()=>{
//debe estar dentro del usestate
//nomenclkatura {... objeto nuevo}
//LLaves y puntos es para que sea rapido y obligatorio

const [objetoInicial, setobjetoInicial] = useState(
                            {
                                titulo:'Cuestionario',
                                descripcion:'Introduce la descripcion de tu cuestionario',
                                //*Preguntate a ti mismo si es singular o plural*	
                                preguntas:[
                                                {
                                                textoPregunta:'Pregunta 1',//*aqui es donde va el texto de la pregunta*,
                                                tipoPregunta:'Aqui deberia ir el tipo de la pregunta',
                                                opcionesDePregunta:['Opcion 1'],//*aqui van las diferentes opciones*
                                                esObligatoria: true,
                                                noPregunta:1
                                                }
                                          ]
                            }
);

    
    const [TituloP, setTituloP] = useState('Cuestionario');
    const [DescripcionP, setDescripcionP] = useState('');
    const [preguntaTitle, setpreguntaTitle] = useState('');
    const [opcionDePregunta, setopcionDePregunta] = useState('');

    

    //Esta funcion agarra lo que esta en el input y lo asigna al titulo del cuestionario
    const recogerTitulo=(e)=>{
    e.preventDefault();
    let tituloTemporal=e.target.value
    console.log(tituloTemporal)
    setTituloP(tituloTemporal)
    objetoInicial.titulo=tituloTemporal
    console.log(objetoInicial)
    }

    //Esta funcion agarra lo que esta en el input y lo asigna a la descripcion del cuestionario
    const recogerDescripcion=(e)=>{
        e.preventDefault();
        let descTemporal=e.target.value
        console.log(descTemporal)
        setDescripcionP(descTemporal)
        objetoInicial.descripcion=descTemporal
        console.log(objetoInicial)
        }



    //Se supone agarra lo de el tipo de pregunta y lo guarda en una variable
    const recogerTipoPregunta=(e)=>{
        e.preventDefault();
        const OPtemporal=e.target.value
        console.log(OPtemporal)
        setopcionDePregunta(OPtemporal)

    }

    const addQuestion=()=>{
        let variableDatosAnteriores=objetoInicial
        let datosAmeter={
            textoPregunta:'Pregunta 1',//*aqui es donde va el texto de la pregunta*,
            tipoPregunta:'Aqui deberia ir el tipo de la pregunta',
            opcionesDePregunta:['Opcion 1'],//*aqui van las diferentes opciones*
            esObligatoria: true
            }

        //console.log(variableDatosAnteriores, 'Hola, soy variableDatosAnteriores')
        //console.log(datosAmeter, 'Hola, soy datosAmeter')
        variableDatosAnteriores.preguntas.push(datosAmeter)
        const datosNuevos= variableDatosAnteriores  //este mas que nada es para mantener la concordancia del nombre de las variables
       // console.log(datosNuevos, 'Hola, soy datosNuevos')
        setobjetoInicial({...datosNuevos})
        
    }
    //Esto agarra lo dle input y lo asigna como el titulo(texto) de la pregunta en cuestion. Lo asigna a una variable, de momento.
    const recogerTextoPregunta=(e)=>{

    }
    const addQoption=()=>{
        let variableDatosAnteriores=objetoInicial //asignamos lo que tenemos a una variable
        variableDatosAnteriores.preguntas.push('OpcionN')
        console.log(variableDatosAnteriores, 'hola, soy variableDatosAnteriores')
        const datosNuevos= variableDatosAnteriores
        setobjetoInicial({...datosNuevos})




    }
   
    return(
        <>
        <Container className="m-0 p-0" fluid style={{backgroundColor:"#A9DFBF", overflow:'auto', height:'100vh'}}>
            <Card style={{backgroundColor:'	#2C3E50', color:'white'}} className="rounded-0 d-flex justify-content-center">
                <Card.Body>
                 
                <Card.Title className="d-flex justify-content-center" >{objetoInicial.titulo}
                </Card.Title>
                 

                <Form.Group className=" mx-auto">
                <Form>       
                        <Form.Control className="mx-auto my-2" style={{width:'90%'}} onChange={recogerTitulo}></Form.Control>
                    </Form>
                
                </Form.Group>

                <Form.Group >
                    <Form.Label className="mx-5 my-3">¿De qué tartará este formulario?</Form.Label>
                    <Form.Control className="mx-auto" style={{width:'90%'}} nChange={recogerDescripcion} placeholder="Ingresa la descripcion de este formulario"></Form.Control>
                </Form.Group>

                </Card.Body>

            </Card>


           {
                objetoInicial.preguntas.map((preguntasI, indexP)=>(
                    
                    <Card className="my-3 mx-auto p-3 d-flex gap-1" style={{width:'80%', backgroundColor:'#3498DB'}}>

                        <Card.Title>{indexP+1}.- {preguntaTitle}</Card.Title>
                         

                        <Form.Group style={{width:'100%'}} className="mx-auto my-1">
                        <Form.Control type='textarea'placeholder="Escribe la pregunta que quieres hacer" onChange={recogerTextoPregunta()}></Form.Control>
                        </Form.Group>

                           <div className="d-flex justify-content-between m-3 p-0">
                        <Form.Group style={{width:'65%'}} className="m-2">
                            <Form.Select  onChange={recogerTipoPregunta}>
                                <option value='N/A'>Tipo de pregunta</option>
                                <option value='opcion multiple'>Opcion multiple</option>
                                <option value='checkbox'>Casillas de varias selecciones</option>
                                <option value='radio'>Radio</option>
                                <option value='respuesta abierta'>Respuesta abierta</option>
                            </Form.Select>
                        </Form.Group>
                            
                            <Button onClick={()=>addQoption()} className="m-2"  style={{width:'25%', height:'20%', backgroundColor:'#27AE60'}}>Agregar opcion</Button>
                           </div>
                              
                    </Card>
                ))
            }
            <Button onClick={()=>addQuestion()}>Agregar pregunta</Button>



        
        </Container>
        </>
    )
}