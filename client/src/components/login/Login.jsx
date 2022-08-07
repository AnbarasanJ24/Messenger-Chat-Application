import React from 'react'
import { useRef } from 'react'
import './login.css'
import {v4 as uuid} from 'uuid';

const Login = ({setId}) => {

    const sessionRef = useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const id = sessionRef.current.value;
        setId(id);
    }

    const createUniqueId = ()=>{
        const uniqueId = uuid()
        setId(uniqueId);
    }

    return (
        <main className='grid-center'>
            <form onSubmit={handleSubmit} className="flex-col login-form">
                <div className='flex-col' >
                    <label htmlFor="session">Enter Session Id</label>
                    <input type="text" name='session' id='session' ref={sessionRef} />
                </div>
                <div className='flex-row btn-container'>
                    <button className="btn">Login</button>
                    <button onClick={createUniqueId} type='button' className="btn btn-primary">Create New Session</button>
                </div>

            </form>
        </main>
    )
}

export default Login