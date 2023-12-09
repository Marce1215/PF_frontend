import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { DefaultLayout } from '../layout/DefaultLayout'
import { useAuth } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';


export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = useAuth()

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
        < DefaultLayout >
        
             <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
               <Row>
                 <Col>
                   <Form>
                     <Form.Group controlId="formUsername">
                       <Form.Label>Correo electrónico</Form.Label>
                       <Form.Control 
                       type="text" 
                       placeholder="Ingrese su correo electrónico"
                       value={ email }
                       onChange={onInputEmail}
                       />
                     </Form.Group>
    
                     <Form.Group controlId="formPassword">
                       <Form.Label>Contraseña</Form.Label>
                       <Form.Control 
                       type="password" 
                       placeholder="Ingrese su contraseña"
                       value={ password }
                       onChange={onInputPassword}
                       />
                     </Form.Group>
    
                     <Button variant="primary" type="submit">
                       Login
                     </Button>
                   </Form>
                 </Col>
               </Row>
             </Container>
        </DefaultLayout>
  );
};

