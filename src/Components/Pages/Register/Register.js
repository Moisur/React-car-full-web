import React, { useRef, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import auth from '../../../Firebase.init';
import {useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const Navigate=useNavigate()
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    /* Register  */
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const confirmRef=useRef('')
    const Register =(e)=>{
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirm = confirmRef.current.value
       
        if((password.length>=4)&&(password===confirm)){
            createUserWithEmailAndPassword(email, password)
            
        }else{
            return;
        }
        sendEmailVerification(email)
        Navigate('/')
        e.preventDefault()
    }
  
    return (
        <div style={{ marginBottom: '47px' }} className='w-50 mx-auto mt-3  py-5'>
            <h1 className='text-primary text-center '>Plz Register</h1>
            <Form onSubmit={Register}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type={passwordShown ? "text" : "password"} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control ref={confirmRef} type={passwordShown ? "text" : "password"} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={()=>setPasswordShown(!passwordShown)} label="password show" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

        </div>
    );
};

export default Register;