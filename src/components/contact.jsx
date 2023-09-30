import $ from 'jquery'
import EditBtn from "./editBtn"

import { useState } from "react"
import { AiOutlineDelete, AiOutlineTrademarkCircle } from "react-icons/ai"


const Contact = ({ contact, validator, onSave, onDelete}) => {
    const [editable, setEditable] = useState(false)
    let oldData = contact
    contact = {
        id: oldData.id,
        lname: oldData.lastName,
        fname: oldData.firstName,
        emailAdd: oldData.email,
        contactNum: oldData.number
    }
    oldData = contact
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

    const handleUpdate = async () => {
        let valArr = getContactDetails();
        let retVal = false;
        let formData = {
            id: oldData.id,
            lname: valArr[0],
            fname: valArr[1],
            emailAdd: valArr[2],
            contactNum: valArr[3],
            curEmail: oldData.emailAdd
        }

        if(validator(formData, "Tbl")){
            await onSave(formData).then((result)=>{
                if(result){
                    $("tr#"+oldData.id).find("input").each((idx, input)=>{
                        $(input).removeClass('is-valid')
                    })
                    retVal = true
                }else{
                    $("#Tbl"+oldData.id+"emailAdd")
                        .removeClass("is-valid")
                        .addClass("is-invalid")
                }
            })    
        }
        
        return retVal
    }

    const cancelUpdate = () =>{
        let valArr = {};
        let iter = 0
        $.each($("#" + contact.id)
            .find("input.input"),
            ((idx, input) => {
                $(input)
                    .val(oldData[objKeys[idx+1]])
                    .removeClass("is-valid")
                    .removeClass("is-invalid")
            }))

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
                <EditBtn target={contact.id} onEdit={handleEdit} onSave={handleUpdate} onCancel={cancelUpdate}/>
                {!editable &&
                    <button className="btn btn-danger" onClick={() => {
                        onDelete(contact.id)
                    }}><AiOutlineDelete /></button>
                }
            </td>
        </tr>
    )
}

export default Contact