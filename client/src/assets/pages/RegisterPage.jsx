import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function registerUser(ev) {
        ev.preventDefault()
        // axios.get('http://localhost:3000/test')
        axios.get('http://localhost:3000/test', //proxy uri
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
            });
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form action="" className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text"
                        placeholder="Your Name Here"
                        value={name}
                        onChange={ev => setName(ev.target.value)
                        } />
                    <input type="email"
                        placeholder='cobsccomp@student.nibm.lk'
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password" name="" id=""
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="login">Register</button>
                    <div className="text-center py-2 text-gray-500">Already have an account ?
                        <Link to={'/login'} className="underline text-black"> Sign In</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}