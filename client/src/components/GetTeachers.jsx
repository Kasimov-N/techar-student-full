import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import React from 'react'
import url from '../config'

function teachersTable(data) {
    const [teacher, setTeacher] = useState([])
    const [form, setform] = useState(false)
    const [id, setId] = useState(false)
    const [alert, setAlert] = useState(false)
    const [success, setsuccess] = useState(false)
    const [deleted, setdeleted] = useState(false)

    const inp1 = useRef(null)
    const inp2 = useRef(null)
    const inp3 = useRef(null)
    const inp4 = useRef(null)
    const inp5 = useRef(null)
    const inp6 = useRef(null)

    const fetching = async () => {
        const data = await axios.get(`${url}/teachers`)
        setTeacher(data.data.data)
    }

    useEffect(() => {
        fetching()
    }, [])

    const remove = async (id) => {
        const data = await axios.delete(`${url}/teachers/${id}`)
        fetching()
        setdeleted(true)
        setTimeout(() => {
            setdeleted(false)
        }, 3000);
    }
    const editor = (id) => {
        setform(true)
        setId(id)
    }
    const cancel = () => {
        setform(false)
    }
    const style = {
        position: "absolute",
        top: "20px",
        right: alert ? "10px" : "-100%",
        width: "20%",
        transition: "1s"
    }
    const style1 = {
        position: "absolute",
        top: "20px",
        right: success ? "10px" : "-100%",
        width: "20%",
        transition: "1s"
    }
    const style2 = {
        position: "absolute",
        top: "20px",
        right: deleted ? "10px" : "-100%",
        width: "20%",
        transition: "1s"
    }
    const formation = async () => {
        if (inp1.current.value && inp2.current.value && inp3.current.value && inp4.current.value && inp5.current.value && inp6.current.value) {
            const data = await axios.put(`${url}/teachers/${id}`, {
                firstName: inp1.current.value,
                lastName: inp2.current.value,
                email: inp3.current.value,
                phoneNumber: +inp4.current.value,
                password: inp5.current.value,
                subject: inp6.current.value
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setform(false)
            setsuccess(true)
            setTimeout(() => {
                setsuccess(false)
            }, 3000);
            fetching()
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000);
        }
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Remove</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {teacher.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.subject}</td>
                                <td onClick={() => { remove(item._id) }} className='pointer'><i className="fa-sharp fa-solid fa-trash"></i></td>
                                <td onClick={() => { editor(item._id) }} className='pointer'><i className="fa-solid fa-pen"></i></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <div style={style} className="alert alert-warning" role="alert">
                The information is incomplete
            </div>
            <div style={style1} className="alert alert-success" role="alert">
                Teacher edited
            </div>
            <div style={style2} className="alert alert-danger" role="alert">
                Teacher deleted
            </div>
            {form && <form className='row form'>
                <div className="mb-3 col-6">
                    <label htmlFor="inp1" className="form-label">First Name</label>
                    <input ref={inp1} type="text" className="form-control" id="inp1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="inp2" className="form-label">Last Name</label>
                    <input ref={inp2} type="text" className="form-control" id="2np1" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="inp3" className="form-label">Email</label>
                    <input ref={inp3} type="email" className="form-control" id="inp3" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="inp4" className="form-label">Phone</label>
                    <input ref={inp4} type="number" className="form-control" id="inp4" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="inp5" className="form-label">Password</label>
                    <input ref={inp5} type="password" autoComplete='on' className="form-control" id="inp5" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="inp6" className="form-label">Subject</label>
                    <input ref={inp6} type="text" className="form-control" id="inp6" />
                </div>
                <button onClick={formation} type="button" className="btn btn-success mx-3 col-3">Submit</button>
                <button onClick={cancel} type="button" className="btn btn-primary mx-3 col-3">Cancel</button>
            </form>}
        </>
    )
}

export default teachersTable