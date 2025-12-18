import React from 'react';
import useCustomHook from './useCustomHook';

const ExampleCustom = () => {
    const [products]=useCustomHook("https://fakestoreapi.com/products");
    return (
        <div className='flex flex-wrap justify-center gap-3 text-center mt-10'>
            {
                //conditional rendering if products is found and map it
                products && products.map((ele)=>{  
                    return(
                        <div key={ele.id} className='border w-[300px] p-3'>
                            <img src={ele.image} alt="image"  className='w-[100px] h-[100px] mx-auto '/>
                            <h1>{ele.title}</h1>
                            <p>{ele.price}</p>
                            
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default ExampleCustom;