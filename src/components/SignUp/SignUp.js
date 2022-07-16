import { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Register from '../../services/create.User';
// import '../../components/Users/styles.css'
import './SignUp.css'
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
export default function SignUp() {
    registerLocale("es", es);
    const [registered, setRegistered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [sex, SetSex] = useState('M');
    const [job, SetJob] = useState('');
    const [rut, SetRut] = useState('');
    const [pass, SetPass] = useState('');
    const [Des, SetDes] = useState('__');
    const [Nacimiento, SetNacimiento] = useState(new Date("1/1/2000"));//Nacimiento
    const [shown, setShown] = useState(false);
    const handlePass = evt => {
        evt.preventDefault(); //Para que no recarge la pagina cuando se presiona el boton
        setShown(!shown);
    }

    const handleSubmit = async evt => {
        evt.preventDefault();
        setIsSubmitting(true)
        Register({ name, rut, email, pass, job, Des, sex, Nacimiento }).then(res => {
            console.log(res)
            setRegistered(true)
            setIsSubmitting(false)
            Swal.fire({
                icon: 'success',
                title: 'Usuario registrado correctamente✅',
                text: `El usuario ${name} ha sido registrado con exito!`,
            }).then(() => {
                window.location = "./Login";
            })
        }).catch(err => {
            console.log(err)
            setIsSubmitting(false)
            setIsSubmitting(false)
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: err.response.data.message,
            })
        })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <section id="formSection" className='form-res'>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className='Tittle'>
                                    Sign Up
                                </h1>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <label className='word'>Name</label>
                                        <br />
                                        <Form.Control id="name" type="text" placeholder='Juan' required className='Box' onChange={(component) => SetName(component.target.value)}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <label className='word'>Job</label>
                                        <br />
                                        <Form.Control id="job" type="text" placeholder='Ingeniero' required className='Box' onChange={(component) => SetJob(component.target.value)}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <label className='word'>Email</label>
                                        <br />
                                        <Form.Control id="email" type="email" placeholder='juan@dominio.cl' required className='Box' onChange={(component) => SetEmail(component.target.value)}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <label className='word'>Sex</label>
                                        <br />
                                        <select defaultValue="M" className="Box box" name="select" onChange={(component) => SetSex(component.target.value)}>
                                            <option value="M">Male</option>
                                            <option value="F" selected>Female</option>
                                        </select>

                                        {/* <Form.Control id="rut" type="rut" placeholder='Male' required className='Box' onChange={(component) => SetSex(component.target.value)}></Form.Control> */}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <label className='word'>Fecha de Nacimiento
                                        <DatePicker className='Box box' selected={Nacimiento} onChange={SetNacimiento} locale= "es" dateFormat="dd-MM-yyyy"/>
                                        </label>
                                        
                                        
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <label className='word'>RUT</label>
                                        <br />
                                        <Form.Control id="rut" type="rut" placeholder='12345678-9' required className='Box' onChange={(component) => SetRut(component.target.value)}></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <label className='word'>PASSWORD</label>
                                    <br />
                                    <Form.Control id="password" type={shown ? 'text' : 'password'} className='Box' onChange={(component) => SetPass(component.target.value)}>

                                    </Form.Control>
                                    <button onClick={handlePass}>
                                        {shown ? 'Ocultar' : 'Mostrar'}
                                        {/* Errores en el boton cuando tienes el resto de parametros listos */}
                                    </button>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <label  className='word'>Descripcion
                                    <br />
                                    <textarea className='description' placeholder='Una breve descripción [Opcional]' onChange={(component) => SetDes(component.target.value)} />
                                    </label>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <Button
                                    type='button'
                                    className='Bttn'
                                    size='lg'
                                    onClick={handleSubmit}
                                // disabled={isSubmitting}
                                >
                                    Registrar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Form>
        </div>
    )
}

// const usersTest[
    //     {
    //         Name: "Yohanns",
    //         Email: "yohanns.jara@sansano.usm.cl",
    //         birth: "11-06-1999",
    //         sex: "M",
    //         job: "student",
    //         bio: "",
    //         pass: "yohanns"
    //     }
    // ]