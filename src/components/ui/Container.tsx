import React from 'react';

type TContainer ={
    children: React.ReactNode,

}

const Container = ({children}:TContainer) => {
    return (
        <div className=' h-screen w-full max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;