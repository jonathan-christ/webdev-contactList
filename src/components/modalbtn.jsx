import { useState } from "react"
import {LuContact2} from "react-icons/lu"

const ModalBtn = ({target, title}) =>{
    return (
        <button className="btn btn-primary" data-bs-toggle="modal"  data-bs-target={"#"+target}>
            {title}
            <LuContact2/>
        </button>
    )
}

export default ModalBtn