import React from 'react';
import pic from './b.png'

const Home = () => {
    return (
        <div className='head'>
            <div className="head-discription">
                <h1>Your Next Bike</h1>
                <h1>Your Best Bike</h1>
                <p>The 2021 R15 range employs a 155cc, 4-stroke, liquid-cooled, SOHC, 4-valve, fuel-injected engine that delivers 18.4PS of maximum power and 14.2Nm of peak torque. The engine is paired with a 6-speed gearbox. The motorcycles feature a traction control system as well.</p>
            </div>
            <img src={pic} alt="" />
        </div>
    );
};

export default Home;