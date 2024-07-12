import React from 'react'
import bg from './../../public/assets/images/bg-16.jpg';
import LoginForm from './components/LoginForm';


const loginPage = () => {
   
    return (
        <div className="h-screen h-full py-5 flex justify-center items-center" style={{backgroundImage:`url(${bg.src})`}}>
            <div className="bg-white rounded-[10px] text-black">
                <div className="p-10 shadow-xl" style={{width:'450px'}}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default loginPage