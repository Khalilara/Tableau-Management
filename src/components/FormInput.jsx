import React from 'react'

const FormInput = (props) => {
    const {label, name, type, placeholder, defaultValue, size, required, min, max, isError, errorText} = props;

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text capitalize">{label}{required ? <span className='text-red-700'>*</span> : ''}</span>
            </div>
            <input type={type} 
                   placeholder={placeholder} 
                   name={name} 
                   className={`input input-bordered ${size}`} 
                   defaultValue={defaultValue}
                   required={required}
                   min={min}
                   max={max}/>
            <p className={`text-red-700 m-0 ml-1 mt-1 text-sm tracking-wide ${isError ? '' : 'hidden'}`}>{errorText}</p>
        </label>
    )
}

export default FormInput;