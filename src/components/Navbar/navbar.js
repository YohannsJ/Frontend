import {Navbar, Container, Nav, NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {useState,useEffect} from 'react';
import Swal from 'sweetalert2'

export default function NavBar(){
    const [jwt, setJwt] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [loged, setLoged] = useState(false);
    
    useEffect(() => {
        setJwt(sessionStorage.getItem('jwt'));
        setNameUser( sessionStorage.getItem('name'));
        console.log("useEffect token: ",jwt);
        handleLogin()
    }, [jwt]);

    const handleLogin= ()=>{
        if(jwt != ''&& jwt != null && jwt != undefined){
            // console.log("Login:",jwt);
            setLoged(true);
        }}

    const handleLogout = () => {
        
        Swal.fire({
            title: '¿Estas seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión'
          }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('jwt');
                sessionStorage.removeItem('name');   
                setLoged(false);
                Swal.fire(
                'Sesión cerrada correctamente',
                '',
                'success'
              ).then(function () {
                window.location = "/";
            });
            }
          })
    }
    // console.log("loged",loged);
    // console.log("jwt",jwt);
    return (
        <div>
            <Navbar bg="dark" variant='dark'  expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Project Minerva</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {/* <Nav.Link href="/" active>Home</Nav.Link> */}
                    
                    <NavDropdown title="Users"  id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/ShowAllUsers">Mostrar todos los usuarios</NavDropdown.Item>
                    <NavDropdown.Item href="/SearchUser">Buscar un usuario</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Eliminar tú cuenta.
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                        Eliminar cuentas.
                    </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Cuestionarios"  id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/CreateQuestions">Crear cuestionario</NavDropdown.Item>
                    <NavDropdown.Item href="/Questions">Ingresar un cuestionario</NavDropdown.Item>
                    <NavDropdown.Item href="/ShowQuestions">Revisar cuestionarios/Ver respuestas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Eliminar un cuestionario
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href ="/Questions" active>Preguntas</Nav.Link>
                    <Nav.Link href='https://www.youtube.com/watch?v=mCdA4bJAGGk&ab_channel=sweetblue.' active>
                    Inspiración
                    </Nav.Link>
                </Nav>
                {loged&&
                <Nav className='NavCenter'>
                <Navbar.Brand href="/InfoUser">{nameUser}</Navbar.Brand>
                </Nav> }
                <Nav>
                    {loged ? 
                    <>
                    <Nav.Link href="#" onClick={handleLogout} active>Logout</Nav.Link>
                    {/* <Nav.Link href="/InfoUser"  active>Info</Nav.Link>  */}
                    </>
                    : 
                    <>
                    <Nav.Link href ="/SignUp" active>Sign up</Nav.Link>
                    <Nav.Link href="/Login" active>Login</Nav.Link>
                    </>
                    }
                </Nav>

{/*                 
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
