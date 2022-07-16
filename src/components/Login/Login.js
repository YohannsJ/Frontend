import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import '../../components/Users/styles.css'
import Swal from 'sweetalert2'
import login from '../../services/loginUser';
import GetUSer from '../../services/getUser';
import './Login.css'

export default function Login() {
    const [rut, SetRut] = useState('');
    const [pass, SetPass] = useState('');
    const [name, SetName] = useState('');
    // sessionStorage.removeItem("jwt")//Elimina el token de la sesion si se entra al login nuevamente
    const handleSubmitForm = () => {
        login({ rut, pass }).then(res => {
            sessionStorage.setItem('jwt', res.data.token); //Almacena el token en la sesionStorage 
            GetUSer(res.data.token).then(res => {
                console.log(res)
                SetName(res.nombre)
                sessionStorage.setItem('name', res.nombre); 
                handlerCompliteLogin()
            }).catch(err => {
                console.error(err)
            })
        }).catch(err => {
            console.error(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ` El Rut ${rut} o el password ingresados son erroneos`,
                imageUrl: 'https://c.tenor.com/Uniu7d_OHisAAAAC/gato-ohh.gif'
            })
        })
    }

    const handleSubmit = evt =>{
        evt.preventDefault();
        if (rut.length === 0 && pass.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el login',
                text: 'Debe ingresar un rut y una contraseña',
            })
        }
        else{
            handleSubmitForm()
        }
    }
    const handlerCompliteLogin = () => {
        // if(registered){
            //Redirect to home
            Swal.fire({
                icon: 'success',
                title: 'Sesion iniciada correctamente✅',
                text: `Bienvenid@ ${name}`,
                // imageUrl: 'https://c.tenor.com/Uniu7d_OHisAAAAC/gato-ohh.gif'
            })
                .then(function () {
                    window.location = "/";
                });
        // };
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} id="formSection" className='form-res' >
                {/* <section id="formSection" className='form-res'> */}
                <Container>
                    <Row>
                        <Col>
                            <h1 className='Tittle'>
                                Login
                            </h1>
                        </Col>
                    </Row>
                    {/* <div> */}
                        <Row>
                            <Col>
                                <Form.Group>
                                    <label className='word'>
                                        RUT
                                    </label>
                                        <Form.Control  value={rut} id="rut" type="rut" placeholder='12345678-9' required className='Box' onChange={(component) => SetRut(component.target.value)}></Form.Control>
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <Form.Group>
                                    <label className='word'>
                                        PASSWORD
                                    </label>
                                    <Form.Control className="Box" value={pass} id="password" type="password"  required onChange={(component) => SetPass(component.target.value)}></Form.Control>
                                        
                                </Form.Group>
                            </Col>
                        </Row>
                    {/* </div> */}
                    <Row>
                        <Col>
                        <Form.Group>
                            <button
                                type='button'
                                className='Bttn'
                                size='lg'
                                onClick={handleSubmit}
                            >
                                <label>Ingresar</label>
                            </button>
                        </Form.Group>
                        </Col>
                    </Row>
                </Container>
                {/* </section> */}
            </Form>
            {/* <img src='https://i.pinimg.com/originals/f8/a5/80/f8a5806c8122febf403d25c183b5fde7.gif'/> */}
            <img src='https://i.giphy.com/media/wx2gdQfoc42DC/giphy.webp' width={480} />
        </div>

    )
}
