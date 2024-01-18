import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'

import { formValidationChecker } from '../../ValidationCheckers/FormValidationChecker'
import { getBrand, updateBrand } from '../../../Store/ActionCreators/BrandActionCreators'

export default function UpdateBrand() {
    let [name, setName] = useState("")

    let { id } = useParams()
    let [message, setMessage] = useState("")
    let [show, setShow] = useState(false)

    let dispatch = useDispatch()
    let BrandStateData = useSelector((state)=>state.BrandStateData)
    let navigate = useNavigate()
    function getInputData(e) {
        setMessage(formValidationChecker(e))
        setShow(false)
        setName(e.target.value)
    }
    async function postData(e) {
        e.preventDefault()
        if (message.length === 0) {
            
            setMessage("Brand Name Must Required")

            var item = BrandStateData.slice(1).find((x) => x.name === name)
            if (item) {
                setShow(true)
                setMessage("Brand Alredy Exist")
            }
            else {
               dispatch(updateBrand({id:id,name:name}))
                    navigate("/admin/brand")
               
            }
        }
        setShow(true)
    }
    function getAPIData(){
dispatch(getBrand())
if(BrandStateData.length){
    let item = BrandStateData.slice(1).find((x)=>x.id===id)
    if(item)
    setName(item.name)
}
    }
    useEffect(() => {
       getAPIData()
    },[BrandStateData.length])
    return (
        <>

            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header carousel-image py-5">
                <h1 className="text-center text-white display-6">Admin</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>

                    <li className="breadcrumb-item active text-white">Update Brand</li>
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
                            <h5 className='bg-primary text-center text-light p-2 '>Update Brand</h5>
                            <form action="" onSubmit={postData}>
                                <div className="mb-3">
                                    <label htmlFor="">Name<span className='text-danger'>*</span></label>
                                    <input type="text" name='name' id='' value={name} className='form-control' placeholder='Update Brand Name' onChange={getInputData} />
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
