import Logos from './logos'
import ModalBtn from './modalbtn'

function Header() {
    return(
        <>
            <div id="header">
                <span id="title">
                    <h1>Contact List</h1>
                    <Logos/>
                </span>
            <ModalBtn title="Add Contact" target="addModal"/>
            </div>
        </>
    )
}

export default Header