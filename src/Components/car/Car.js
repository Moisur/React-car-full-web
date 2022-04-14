import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

const Car = ({ car }) => {
    const {img,price,company,model,id}=car
    const Navigate=useNavigate()
    const BoyNow =(id)=>{
        Navigate(`/blog/${id}`)
    }
    return (
        <Card className='rounded-lg shadow-lg'>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>Model:{model}</Card.Title>
                <Card.Title>Model:{id}</Card.Title>
                <Card.Title>Company:{company}</Card.Title>
                <Card.Title>price:${price}</Card.Title>
                <Button onClick={()=>BoyNow(id)} className='w-100' variant="primary">Bye Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Car;