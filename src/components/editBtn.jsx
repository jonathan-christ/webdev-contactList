import { useState } from "react";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx"

const EditBtn = ({ onEdit, onSave }) => {
    const modes = [
        {
            name: <AiOutlineEdit />,
            class: "btn btn-success"
        },
        {
            name: <AiOutlineCheck />,
            class: "btn btn-warning"
        }
    ]

    const [mode, setMode] = useState(modes[0])
    const [isEdit, setIsEdit] = useState(true)

    const toggleMode = () => {
        if (!isEdit) {
            setMode(modes[0])
        } else {
            setMode(modes[1])
        }

        setIsEdit(isEdit => !isEdit)
        onEdit(isEdit)
    }

    const toggleFunction = () => {
        let doToggle = true
        if (!isEdit) {
            doToggle = onSave(true)
            console.log(doToggle)
        }

        if (doToggle) toggleMode()
    }

    const escapeHandle = event => {
        if (event.key === "Escape") {
            toggleMode()
        }
    }

    return (
        <>
            <button className={mode.class} onClick={toggleFunction} onKeyDown={escapeHandle}>
                {mode.name}
            </button>

            {//Make cancel btn if edit
                (!isEdit) &&
                <button className="btn btn-danger" onClick={toggleMode}>
                    <RxCross2 />
                </button>
            }
        </>
    )

}

export default EditBtn