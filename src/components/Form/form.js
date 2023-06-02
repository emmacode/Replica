import React from 'react'

export const Form = (props) => {
    //const [error, setError] = useState('')

    // const handleChange = setState => (e) => {
    //     e.preventDefault();
    //     setState(e.target.value)

    //     let error = null;
    //     let valid;
    //     let regex;
    //     const { type, value, onChange, passed } = props;
    //     if (type === 'email') {
    //         regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         valid = regex.test(value);
    //         error = 'Please enter a valid email.';
    //     } else if (type === 'password') {
    //         regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    //         valid = regex.test(value);
    //         error =
    //             'Please enter at least a number, a capital letter, and a minimum of 8 characters.';
    //     } else if (type === 'confirm-password') {
    //         valid = passed;
    //         error = 'Please confirm your password.';
    //     }
    //     // else if (type === "tel") {
    //     //   // We need `class-validator` npm library
    //     // } else if (type === "text") {
    //     // }

    //     if (!valid) {
    //         setError({ error });
    //     } else {
    //         error = '';
    //         setError({ error: '' });
    //     }
    // }

    const {
        id,
        type,
        value,
        name,
        className,
        placeholder,
        //labelTitle,
        //disabled,
        //labelClass,
        onChange
        //classNam
    } = props;

    return (
        <>
            {/* <label>
                    <p className={labelClass}>{labelTitle}</p>
                </label> */}
            <input
                className={className}
                //onKeyUp={handleChange(onChange)}
                name={name}
                placeholder={placeholder}
                id={id}
                value={value}
                type={type}
                onChange={onChange}
            />
        </>
    )
}
