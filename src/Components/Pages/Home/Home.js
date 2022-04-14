import React, { useEffect, useState } from 'react';
import Car from '../../car/Car';
import Carousels from '../../Carousels/Carousels';
import './Home.css'
const Home = () => {
    const [cars, setCar] = useState([])
    useEffect(() => {
        fetch('Car.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    return (
        <div>
             <Carousels></Carousels>
            <div class="containers">
                {
                    cars.map(car =>
                        <Car
                            key={car.id}
                            car={car}>
                        </Car>)
                }
            </div>
        </div>
    );
};

export default Home;