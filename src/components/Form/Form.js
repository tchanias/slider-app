import React, {useState} from 'react'


function Form(props) {
    const [phone,SetPhone] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const [warning, SetWarning] = useState(false)
    const [warningPhone, SetWarningPhone] = useState(false)
    const [warningEmail, SetWarningEmail] = useState(false)
    const [warningPassword, SetWarningPassword] = useState(false)


    const handleChange = (event) => {
        if (event.target.name==='phone'){
            SetPhone(event.target.value)
        }else if (event.target.name==='email'){
            SetEmail(event.target.value)
        }else{
            SetPassword(event.target.value)
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        var emailReg = /\S+@\S+\.\S+/;
        var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        var phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
        if (emailReg.test(email) && passwordReg.test(password) && phoneReg.test(phone)){
            SetWarning(false)
            SetWarningPhone(false)
            SetPassword(false)
            SetWarningEmail(false)
        } else{
            SetWarning(true)
            if (!emailReg.test(email)){
                SetWarningEmail(true)
            }else{
                SetWarningEmail(false)
            }
            if (!passwordReg.test(password)){
                SetWarningPassword(true)
            }else{
                SetWarningPassword(false)
            }
            if (!phoneReg.test(phone)){
                SetWarningPhone(true)
            }else{
                SetWarningPhone(false)
            }
        }
        
    }
    return (
        <>
            <div className="form-title text-center">{props.formText}</div>
            <div className="form-subtitle text-center">{props.formGraphText}</div>
            {warning && <div className="warning-message">The values that you entered are wrong. <br></br> Please try again</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" className={warningPhone ? 'invalid-input' : 'valid-input' } name="phone" value={phone} onChange={handleChange} placeholder={props.formLabels[0]}/>
                <input type="text" className={warningEmail ? 'invalid-input' : 'valid-input' } name="email" value={email} onChange={handleChange} placeholder={props.formLabels[1]}/>
                <input type="password" className={warningPassword ? 'invalid-input' : 'valid-input' } name="password" value={password} onChange={handleChange} placeholder={props.formLabels[2]}/>
                <button type="submit" className="button">{props.buttonText}</button>
            </form>
        </>
    )
}

export default Form
