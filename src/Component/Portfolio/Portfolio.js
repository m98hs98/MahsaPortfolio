import React from 'react';
import Portfolio_data from './Portfolio_data';
import Card from './Card';
import './Portfolio.css';


const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center '>
                    <h1>My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {Portfolio_data.map((val, index) => {
                        return (
                            <Card 
                                key={index} 
                                image={val.image} 
                                category={val.category} 
                                totalLike={val.totalLike} 
                                title={val.title} 
                                address={val.address} 
                                // customURL={val.customURL} 
                                description={val.description} 
                            />
                        )
                    })}
                </div>
            </div>
        </section>

    </>
  );
};

export default Portfolio;