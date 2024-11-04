import { useState } from "react"
import { Button, Card, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


export const Login=()=>{

    const navigate = useNavigate();

const [Validado, setValidado] = useState(false);
const [FORMM, setFORMM] = useState({});
const [ERRORES, setERRORES] = useState({});

//Funcion que va a setear los valores del objeto FORMM, se trae todo lo del FORMM y si no existe el campo que se manda, lo crea y setea.
//Si sí existe, pues solo lo setea
const setValue=(field, value)=>{

    setFORMM({
        ...FORMM,
        [field]:value
    })

    if(!!ERRORES[field]){
        setERRORES({
            ...ERRORES,
            [field]: null

        })

    }

}



const validar=()=>{
    const {correo, contrasena}= FORMM
    const newErrors ={}

    if(!correo || correo=== ''){
        newErrors.correo= 'Ingresa tu correo correctamente por favor'
        console.log('entre al primer error')
    }  else{

        if(!contrasena || contrasena=== ''){
           newErrors.contrasena= 'Ingresa algo por favor'
           console.log('entre al segundo2 error')

       }
    }

    return newErrors
}

const handleSubmit=(e)=>{ //Funcion que me ayuda a validar
    /*console.log('Hola, si entro a la funcion')
   // const formEnUso=e.currentTarget; //asignamos el form con el que estamos trabajando
    setValidado(true); //Ponemos que la validacion seria TRUE*/  



    const formErrors= validar()

    if(Object.keys(formErrors).length>0){
        setERRORES(formErrors)
    }else{
        console.log(FORMM)
        console.log('Formulario enviado juaz juaz XD')
    }


}

    return(
        <Container className="m-0 p-0 d-flex" fluid style={{backgroundColor:"#A9DFBF", height:'100vh'}}>

            <Card style={{backgroundColor:'	#2C3E50', color:'white', width:'60%', height:'80%'}} className="mx-auto my-auto rounded-3 d-flex ">
                <Card.Body>
                    <Card.Title>Ingresa a tu cuenta</Card.Title>
                    <hr/>

                    <Form onSubmit={handleSubmit}  validated={Validado} className="p-1 m-3">
                        <Form.Group>
                                <Form.Label>Ingresa tu correo</Form.Label>
                               
                                {/*La funcion flecha, que es automatica en el onChange, manda a llamar a set value y manda esos valores como parametro */}
                                <Form.Control 
                                onChange={(e)=>setValue('correo', e.target.value)}
                                 placeholder="correo@algo.com" 
                                 required
                                 isInvalid={!!ERRORES.correo}></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {ERRORES.correo}
                                </Form.Control.Feedback>
                        </Form.Group>
                        
                            
                        <Form.Group>
                                <hr/>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control 
                                type="password" 
                                onChange={(e)=>setValue('contrasena', e.target.value)} 
                                placeholder="Contraseña" 
                                required
                                isInvalid={!!ERRORES.contrasena}></Form.Control>
                                <Form.Control.Feedback type="invalid">{ERRORES.contrasena}</Form.Control.Feedback>


                        </Form.Group>
                    </Form>
                    <div className=" d-flex justify-content-center flex-wrap">

                    <Button type="submit" className="m-3" onClick={()=>handleSubmit()} style={{backgroundColor:'#27AE60', border:'#27AE60'}}>Ingresar</Button>

                    <Button className="m-3" style={{backgroundColor:'#27AE60', border:'#27AE60'}}>Olvide mi Contraseña :"</Button>
                    </div>
                    <Container className="m-0 p-0" style={{height:"50px"}}>

                    </Container>
                    <p>¿No tienes una cuenta creada?</p><Button style={{backgroundColor:"#2C3E50", borderColor:"white"}} onClick={()=>navigate('/RU')}>¡Crea una aquí!</Button> 

                </Card.Body>
            </Card>

        </Container>
    )
}