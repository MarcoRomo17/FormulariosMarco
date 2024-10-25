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
                                titulo:'',
                                descripcion:'Introduce la descripcion de tu cuestionario',
                                //*Preguntate a ti mismo si es singular o plural*	
                                preguntas:[
                                                {
                                                textoPregunta:'Pregunta 1',//*aqui es donde va el texto de la pregunta*,
                                                tipoPregunta:'Aqui deberia ir el tipo de la pregunta',
                                                opcionesDePregunta:['Opcion 1'],//*aqui van las diferentes opciones*
                                                esObligatoria: true
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

    //Esto agarra lo dle input y lo asigna como el titulo(texto) de la pregunta en cuestion. Lo asigna a una variable, de momento.
    const recogerTextoPregunta=(e)=>{
        e.preventDefault();
        const TPtemporal = e.target.value
        console.log(TPtemporal);
        setTituloP(TPtemporal)
        
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

    //const agregarPregunta=()=>{
        //debe estar dentro del usestate
//nomenclkatura {... objeto nuevo}
//LLaves y puntos es para que sea rapido y obligatorio


        
       /* const addPregunta=            {
            textoPregunta:'Pregunta 1',//*aqui es donde va el texto de la pregunta*,
            tipoPregunta:'Aqui deberia ir el tipo de la pregunta',
            opciones:['Opcion 1'],//*aqui van las diferentes opciones*
            esObligatoria: null
            }

        objetoInicial['preguntas'].push(addPregunta)        
        console.log('mandaron a llamar a agregarPregunta')
        console.log(objetoInicial)*/
        

   // }
   
    return(
        <>
        <Container>
            <Card>
                <Card.Body>
                <Card.Title>{TituloP}
                </Card.Title>

                <Form.Group>
                <Form>       
                        <Form.Control  onChange={recogerTitulo}></Form.Control>
                    </Form>
                
                </Form.Group>

                <Form.Group>
                    <Form.Control on onChange={recogerDescripcion} placeholder="Ingresa la descripcion de este formulario"></Form.Control>
                </Form.Group>

                </Card.Body>

            </Card>


           {
                objetoInicial.preguntas.map((preguntasI)=>(

                    <Card>
                        <Card.Title>{preguntaTitle}</Card.Title>

                        <Form.Group>
                        <Form.Control placeholder="Escribe la pregunta que quieres hacer" onChange={recogerTextoPregunta}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label  >Tipo de pregunta</Form.Label>
                            <Form.Select onChange={recogerTipoPregunta}>
                                <option value='N/A'>Elegir tipo de pregunta</option>
                                <option value='opcion multiple'>Opcion multiple</option>
                                <option value='checkbox'>Casillas de varias selecciones</option>
                                <option value='radio'>Radio</option>
                                <option value='respuesta abierta'>Respuesta abierta</option>

                            </Form.Select>
                        </Form.Group>
                              
                    </Card>
                ))
            }
            <Button onClick={()=>addQuestion()}>Agregar pregunta</Button>



        
        </Container>
        </>
    )
}