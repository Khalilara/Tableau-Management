import React from "react";
import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';

const Log = ()=>{
return (
    <>
        <div className='fixed left-32 top-72'>
        </div>
        <div className='card h-full w-full justify-center items-center py-10'>
          <h1 className='text-center text-primary font-semibold text-3xl'>Register</h1>
          <Form className='form-control flex flex-col w-96' method='POST'>
            <FormInput label="first name" type="text" name="Username" placeholder="username" size="btn-block" />
            <FormInput label="last name" type="text" name="Password" placeholder="password" size="btn-block" />
            <Link to="/profile" className='btn btn-accent btn-block uppercase mt-3'>Submit</Link>
            </Form>
        </div>
    </>
)
}

export default Log;