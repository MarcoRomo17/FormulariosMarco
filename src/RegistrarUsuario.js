import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export const RegistrarUsuario=()=>{
const navigate=useNavigate();

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

    if(!!ERRORES[field]) {//el !! antes del nombre de la variable convierte la variable en booleano y en su contraparte, depende, puede ser true o false
        setERRORES({
            ...ERRORES,
            [field]: null

        })

    }

}

//Esta funcion se encarga de hacer las validaciones. Aqui se van asignando los mensajes de error, los cuales se van a ir agregando al objeto newErrors, el cual al final 
//retornamos
const validar=()=>{
    const {nombre, AP, AM, correo, contrasena, contrasenia2}= FORMM
    const newErrors ={}


    if(!nombre || nombre ===''){
        newErrors.nombre= "Ingresa tu nombre o nombres"
    }

    if(!AP || AP ===''){
        newErrors.AP= "Ingresa tu apellido paterno"
    }

    if(!AM || AM ===''){
        newErrors.AM= "Ingresa tu apellido paterno"
    }

    if(!correo || correo=== ''){
        newErrors.correo= 'Ingresa tu correo por favor'
    } else if(!/\S+@\S+\.\S+/.test(correo)){
        newErrors.correo= 'Ingresa correctamente tu correo. Recuerda que debe de llevar nombre@algo'

    }

    if(!contrasena || contrasena=== ''){
        newErrors.contrasena= 'Ingresa algo por favor'

    }

    if(!contrasenia2 || contrasenia2=== ''){
        newErrors.contrasena= 'Ingresa algo por favor'
    }else if(contrasenia2!==contrasena){
        newErrors.contrasena= 'Las contraseñas no coinciden'

    }
    
    

    return newErrors
}

const handleSubmit=(e)=>{ //Funcion que me ayuda a validar. Se manda a llamar cuando se supone todo esta bien

    const formErrors= validar() //Creamos una variable y le asignamos lo que nos traiga validar, lo cual es newErrors (un objeto con los mensajes de error)

    if(Object.keys(formErrors).length>0){//Object.keys me devuleve las propiedades del objetio que tenga entre el parentesis. en este caso se evalua si la loongitud es mayor a 0
        setERRORES(formErrors)           //De serlo, setea ERRORES con lo que tenemos en formErrors
    }else{                               //Si todo esta bien, se supone es por que todo en el formulario esta correcto y pues es cuando se 'manda el formulario'
        console.log(FORMM)
        console.log('Formulario enviado juaz juaz XD')
    }


}


    return(
        <>
        <Container className="m-0 p-0" fluid style={{backgroundColor:"#A9DFBF", overflow:'auto', height:'100vh'}}>
            <Card style={{backgroundColor:'	#2C3E50', color:'white', width:'60%'}} className="mx-auto my-auto rounded-3 d-flex justify-content-center ">
                <Card.Title >Realiza tu registro aqui</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group className="m-3 p-1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                             placeholder="Ingresa tu nombre"
                             onChange={(e)=>setValue('nombre', e.target.value)}
                             isInvalid={!!ERRORES.nombre}
                             ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {ERRORES.nombre}
                        </Form.Control.Feedback>
                             
                        </Form.Group>
                        <hr></hr>
                        
                        <div name="APELLIDOS" className="d-flex mb-3">
                                <Form.Group className="mx-4">
                                    <Form.Label>Apellido paterno</Form.Label>
                                    <Form.Control
                                     style={{width:'110%'}} 
                                    placeholder="Ingresa tu apellido paterno"
                                    onChange={(e)=>setValue('AP', e.target.value)}
                                    isInvalid={!!ERRORES.AP}
                                    ></Form.Control>
                                      <Form.Control.Feedback type="invalid">
                                         {ERRORES.AP}
                                     </Form.Control.Feedback>
                                </Form.Group>
                        

                                <Form.Group className="mx-4">
                                    <Form.Label>Apellido materno</Form.Label>
                                    <Form.Control
                                     style={{width:'110%'}} 
                                     placeholder="Ingresa tu apellido materno"
                                     onChange={(e)=>setValue('AM', e.target.value)}
                                     isInvalid={!!ERRORES.AM}
                                     ></Form.Control>
                                     <Form.Control.Feedback type="invalid">
                                         {ERRORES.AM}
                                     </Form.Control.Feedback>
                                </Form.Group>
                                <hr></hr>
                        </div>

                        <div name="CORREO Y PASSWORD" className="p-1 m-3">
                                <Form.Group>
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control
                                     placeholder="Ingresa tu correo electrónico"
                                     onChange={(e)=>setValue('correo', e.target.value)}
                                     isInvalid={!!ERRORES.correo}
                                     ></Form.Control>
                                     <Form.Control.Feedback type="invalid">
                                         {ERRORES.correo}
                                     </Form.Control.Feedback>
                                </Form.Group>
                                <hr></hr>

                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Ingresa tu contraseña"
                                    onChange={(e)=>setValue('cotrasenia', e.target.value)}
                                     isInvalid={!!ERRORES.contrasena}                                     
                                    ></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                         {ERRORES.contrasena}
                                     </Form.Control.Feedback>
                                </Form.Group>
                                <hr></hr>

                                <Form.Group>
                                    <Form.Label>Confirma tu contraseña</Form.Label>
                                    <Form.Control 
                                    type="password"
                                     placeholder="Vueleve a ingresar tu contraseña"
                                     onChange={(e)=>setValue('contrasenia2', e.target.value)}
                                     isInvalid={!!ERRORES.contrasenia2}
                                     ></Form.Control>
                                     <Form.Control.Feedback type="invalid">
                                         {ERRORES.contrasenia2}
                                     </Form.Control.Feedback>
                                </Form.Group>
                                <hr></hr>
                        </div>

                        <div className="d-flex justify-content-center mb-4">
                            <Button   style={{backgroundColor:'#27AE60'}} onClick={()=>handleSubmit()}>Registrarme ya!</Button>

                        </div>

                        <div className="d-flex justify-content-center m-1">
                        <p className="my-2">¿Si tienes cuenta?</p> <Button className="m-1" style={{backgroundColor:'#2C3E50', borderColor:'white'}} onClick={()=>navigate('/L')}>Ingresar con mi cuenta</Button>
                            
                        </div>
                           






           
                    </Form>

                </Card.Body>

            </Card>

        </Container>
        </>
    )
}