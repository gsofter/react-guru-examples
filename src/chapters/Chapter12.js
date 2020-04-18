import React, { useState, useRef } from 'react';

const Info = () => {
    
    const nextId = useRef(1)
    const [form, setForm] = useState({
        id: '',
        username: '',
        password: ''
    })
    const [list, setList] = useState([])
    const {username, password} = form

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onClickRegister = e => {
        console.log(list)
        const newForm = {
            id: nextId.current,
            username: form.username,
            password: form.password
        }
        setList([...list, newForm])
        setForm({username: '', password: ''})
        nextId.current++
    }

    const onRemoveItem = id => {
        console.log(id)
        setList(list.filter(item => item.id !== id))
    }

    return (
        <div >
            <input name="username" placeholder="username" value={username} onChange={handleInputChange}/>
            <input name="password" placeholder="password" value={password} onChange={handleInputChange}/>
            <button onClick={onClickRegister}> Register </button>
            <div>
                {(username || password) && <p> {username} : {password} </p>}
            </div>
            <div>
                {list.map((item) => <li key={item.id} onDoubleClick={e => onRemoveItem(item.id)}> {item.username} : {item.password} </li>)}
            </div>
        </div>
    )
}
const Chapter12 = () => {
    return (
        <div>
            <h1> Chapter12 - Using Immer </h1>

            <Info />
        </div>
    );
};

export default Chapter12;