import React, { useRef } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const Login = () => {
    const Navigate = useNavigate()
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const Login =(e)=>{
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email,password)
        e.preventDefault()
    }
    return (
        <div style={{marginBottom:'100px'}} className='w-50 mx-auto mt-5  py-5'>
            <h1 className='text-primary text-center '>Plz Login</h1>
            <Form onSubmit={Login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Nav.Link className='text-danger' >ForgetPassword</Nav.Link>
                 <Nav.Link onClick={()=>Navigate("register")} className='text-danger' >Register You account</Nav.Link> 
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            
        </div>
    );
};

export default Login;