import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'

import { formValidationChecker } from '../../ValidationCheckers/FormValidationChecker'
import { addMaincategory, getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators'

export default function CreateMaincategory() {
    let name = useRef("")
    let [message, setMessage] = useState("Name Flied Must Be Required")
    let [show, setShow] = useState(false)

    let dispatch = useDispatch()
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let navigate = useNavigate()

    function getInputData(e) {
        setMessage(formValidationChecker(e))
        setShow(false)
        name.current = e.target.value
    }
    async function postData(e) {
        e.preventDefault()
        if (message.length === 0) {

            var item = MaincategoryStateData.slice(1).find((x) => x.name === name.current)
            if (item) {
       setShow(true)
                setMessage("Maincategory Alredy Exist")
            }
            else {
                dispatch(addMaincategory({ name: name.current }))

                navigate("/admin/maincategory")

            }
        }
        else
            setShow(true)
        
    }
    function getAPIData() {
        dispatch(getMaincategory())

    }
    useEffect(() => {
        getAPIData()

    }, [MaincategoryStateData.length])
    return (
        <>

            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header carousel-image py-5">
                <h1 className="text-center text-white display-6">Admin</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>

                    <li className="breadcrumb-item active text-white">Create Maincategory</li>
                </ol>
            </div>
            {/* <!-- Single Page Header End --> */}
            <div className="container-fluid my-3" >
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            <h5 className='bg-primary text-center text-light p-2 '>Create Maincategory</h5>
                            <form action="" onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="">Name<span className='text-danger'>*</span></label>
                                    <input type="text" name='name' id='' className='form-control' placeholder='Maincategory Name' onChange={getInputData} />
                                    {show ? <p className='text-danger text-capitalize fs-6'>{message}</p> : ""}
                                </div>
                                <div className="mb-3">
                                    <button className='btn btn-primary text-light w-100' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





