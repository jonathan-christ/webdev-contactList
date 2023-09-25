import $ from 'jquery'
import EditBtn from "./editBtn"

import { useState } from "react"
import { AiOutlineDelete, AiOutlineTrademarkCircle } from "react-icons/ai"


const Contact = ({ contact, validator, operations }) => {
    const [editable, setEditable] = useState(false)
    const oldData = contact
    contact = {
        id: oldData.id,
        lname: oldData.lastName,
        fname: oldData.firstName,
        emailAdd: oldData.email,
        contactNum: oldData.number
    }
    const objKeys = Object.keys(contact)

    const handleEdit = (data) => {
        let iter = 1
        $.each($("#" + contact.id).find("input.input"), ((idx, input) => {
            let ro = $(input).prop('readOnly')
            $(input)
                .prop('readOnly', !ro)
                .toggleClass('edit')
            if (editable) {
                $(input).prop('value', oldData[objKeys[iter++]])
            }
        }))
        setEditable(data)
    }

    const handleUpdate = () => {
        let valArr = getContactDetails();
        let formData = {
            id: oldData.id,
            lname: valArr[0],
            fname: valArr[1],
            emailAdd: valArr[2],
            contactNum: valArr[3],
            curEmail: oldData.email
        }

        if(validator(formData, "Tbl")){
            $("tr#"+oldData.id).find("input").each((idx, input)=>{
                $(input).removeClass('is-valid')
            })
            operations.onSave(formData)
            return true
        }else{
            return false
        }
        
    }

    const getContactDetails = () => {
        let valArr = {};
        let iter = 0
        $.each($("#" + contact.id)
            .find("input.input"),
            ((idx, input) => {
                valArr[iter++] = $(input).val()
            }))

        return valArr;
    }

    return (
        <tr id={contact.id}>
            <td>{contact.id}</td>
            {objKeys
                .filter((keys) => {
                    return keys != "id"
                })
                .map((key) => {
                    let idVal = key
                    
                    return (
                        <td key={contact[key] + key}>
                            <input type="text" id={"Tbl"+contact.id+idVal} name={idVal} className="input form-control" defaultValue={contact[key]} readOnly />
                        </td>
                    )
                })}
            <td className="opBtns">
                <EditBtn target={contact.id} onEdit={handleEdit} onSave={handleUpdate} />
                {!editable &&
                    <button className="btn btn-danger" onClick={() => {
                        operations.onDelete(contact.id)
                    }}><AiOutlineDelete /></button>
                }
            </td>
        </tr>
    )
}

export default Contact