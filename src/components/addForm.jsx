import { useState } from "react";

import Input from './formInput'
import $ from 'jquery'

const AddForm = ({ action, validator }) => {
    const [lname, setLname] = useState('')
    const [fname, setFname] = useState('')
    const [emailAdd, setEmailAdd] = useState('')
    const [contactNum, setContactNum] = useState('')

    const validateForm = (e) => {
        e.preventDefault()
        let formData = {
            lastName: lname,
            firstName: fname,
            email: emailAdd,
            number: contactNum
        }

        if (validator(formData, "", "U")) {
            $(e.target).find("input").each((idx, input)=>{
                $(input).removeClass("is-valid")
            })
            action(e.target, formData)
        }
    }

    return (
        <><form id="addContactForm" className="needs-validation" onSubmit={validateForm} noValidate>
            <div className="col-md-12">
                <Input placeholder="Last Name" id="lastName" symbol="Aa"
                    maxLength="50" width="3" error="Invalid input! Must have letters only!"
                    onChange={setLname}
                />
            </div>
            <div className="col-md-12">
                <Input placeholder="First Name" id="firstName" symbol="Aa"
                    maxLength="50" width="3" error="Invalid input! Must have letters only!"
                    onChange={setFname}
                />
            </div>
            <div className="row">
                <div className="col-md-7">
                    <Input placeholder="E-mail" id="email" symbol="@"
                        maxLength="320" width="3" error="Invalid email address!"
                        onChange={setEmailAdd}
                    />
                </div>
                <div className="col-md-5">
                    <Input placeholder="Contact No." id="number" symbol="#"
                        type="tel" maxLength="15" width="3" error="Invalid contact number!"
                        onChange={setContactNum}
                    />
                </div>
            </div>
            <div className="d-grid gap-2">
                <input id="addContactBtn" className="btn btn-primary" type="submit" value="Submit" />
            </div>
        </form>
        </>
    )
}

export default AddForm