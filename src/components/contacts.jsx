import Contact from './contact'
import $ from 'jquery'

const Contacts = ({ contacts, validator, operations}) => {
    
    let contactsArr = [], x=0

    for(let key in contacts){
        contactsArr[x++] = contacts[key]
    }
    return (
        <div id="contacts">
            <table className="table table-hover">
                <thead id="thead">
                    <tr>
                        <th scope="col" className="w-5">#</th>
                        <th scope="col" className="w-30">Last Name</th>
                        <th scope="col" className="w-30">First Name</th>
                        <th scope="col" className="w-20">E-mail Address</th>
                        <th scope="col" className="w-5">Contact Number</th>
                        <th scope="col" className="w-15">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {contactsArr.map((contact, index) => {
                        return (
                            <Contact key={"tr-"+contact.id} contact={contact} validator={validator} operations={operations}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts