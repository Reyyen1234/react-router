import React from 'react'
import { Formik, Field, Form,useFormik } from 'formik';
import Validation from './Validation';
function SignUp() {
    //touched ve handleBlur: bir inputten ayrildigim anda ve bu inputu eksik yada yanlis girdisem uyari verir
    const {formik,values,handleChange,handleSubmit,errors,touched,handleBlur} = useFormik({
        initialValues: {
          email: '',
          password:"",
          confirmpassword:""
          
        },
        onSubmit: values => {
          console.log(values)
        },
        validationSchema: Validation
      });
    return(
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input  name="email" onChange={handleChange} onBlur={handleBlur}/>
        {errors.email &&touched.email && (<div className='error'>{errors.email}</div>)}
        <br/>
        <br/>
        <label htmlFor="password">password: </label>
        <input  name="password" onChange={handleChange} onBlur={handleBlur}/>
        {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}
        <br/>
        <br/>
        <label htmlFor="confirmpassword">confirm password: </label>
        <input  name="confirmpassword" onChange={handleChange} onBlur={handleBlur}/>
        {errors.confirmpassword && touched.confirmpassword && (<div className='error'>{errors.confirmpassword}</div>)}
        <br/>
        <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>
        <code>{JSON.stringify(values)}</code>
      </form>
        </div>
      )
}

export default SignUp
