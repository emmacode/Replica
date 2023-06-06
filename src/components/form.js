import React from 'react'
import { useField } from 'formik'

export const TextInput = (props) => {
    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                className={props.textClass}
                onChange={props.onChange}
                onBlur={props.handleBlur}
                placeholder={props.placeholder}
            />
        </>
    )
}

export const CheckBox = ({ children, ...props }) => {
    return (
        <div>
            <label className='checkbox-input'>
                <input
                    name={props.name}
                    type={props.type} />
                {children}
            </label>
        </div>
    )
}

export const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ?
                <div className='error'>{meta.error}</div>
                : null
            }
        </div>
    )
}
