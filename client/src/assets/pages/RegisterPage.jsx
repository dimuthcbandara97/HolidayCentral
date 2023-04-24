import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form action="" className="max-w-md mx-auto">
                    <input type="text" placeholder="Your Name Here"/>
                    <input type="email" placeholder='cobsccomp@student.nibm.lk' />
                    <input type="password" name="" id="" placeholder="password" />
                    <button className="login">Register</button>
                    <div className="text-center py-2 text-gray-500">Already have an account ?
                        <Link to={'/login'} className="underline text-black"> Sign In</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}