import { Container, Form, Button } from 'react-bootstrap';
import { DefaultLayout } from '../layout/DefaultLayout';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';




export const SignUp = () => {

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const auth = useAuth()


    const onInputName = ({ target }) => {

    setName(target.value);

  };

    const onInputSurname = ({ target }) => {

    setSurname(target.value);

  };

    const onInputEmail = ({ target }) => {

    setEmail(target.value);

  };

    const onInputPassword = ({ target }) => {

    setPassword(target.value);

  };


  if ( auth.isAuthenticated ) {
    return < Navigate to="/dashboard" />
  }


  return (

    <DefaultLayout>
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <Form>
          <h1>Sign Up</h1>

          <Form.Group controlId="formFirstName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              value={name}
              onChange={ onInputName }
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su apellido"
              value={surname}
              onChange={ onInputSurname }
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su dirección de correo electrónico"
              value={email}
              onChange={ onInputEmail }         
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={ onInputPassword }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Crear usuario
          </Button>
        </Form>
      </Container>
    </DefaultLayout>






//     < DefaultLayout>

    // <h1>Sign Up</h1>
    
    // <form>
    //   <label>Nombre</label>
    //   <input type="text" />
    //   <label>Apellido</label>
    //   <input type="text" />

    //   <label>Correo</label>
    //   <input type="email" />

    //   <label>Contraseña</label>
    //   <input type="password" />

    //   <button>Crear usuario</button>



    // </form>
    // </DefaultLayout>
  )
}
