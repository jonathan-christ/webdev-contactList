import { useState, useEffect } from 'react'
import { validEmail, validContactNum } from './components/regex'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'

import Header from './components/header'
import Contacts from './components/contacts'
import Modal from './components/modal'
import AddForm from './components/addForm'


function App() {
  const [contacts, setContacts] = useState({})

  const addContact = (form, formData) => {
    let newData = {
      id: formData.id,
      lname: formData.lastName,
      fname: formData.firstName,
      emailAdd: formData.email,
      contactNum: formData.number
    }
    console.log(form)
    $.post("https://doited-error.000webhostapp.com/add.php", newData, (rawData) => {
      console.log(rawData)
      // $("#addModal").slideUp('slow')
      // $("#addModal").fadeOut('slow')
      // $(".modal-backdrop").fadeOut('slow', ()=>{
      //   $(this).hide()
      // })
      

    })
  }

  const updateContact = (formData) => {
    $.post("https://doited-error.000webhostapp.com/edit.php", formData, (rawData) => {
      console.log(rawData)
    })
  }

  const deleteContact = (id) => {
    $.post('https://doited-error.000webhostapp.com/delete.php', { id: id }, (rawData) => {
      console.log(rawData);
    })
  }

  const validateData = (formData, idPattern, unique = "F") => {
    let formValidity = true
    let id = unique == "U" ? "" : formData.id
    let patterns = {
      emailAdd: validEmail,
      contactNum: validContactNum
    }
    $.each(formData, (key, obj) => {
      if (key == 'id') return true;
      if (key == 'curEmail') return true;
      let input = document.querySelector('input#' + idPattern + id + key)
      let value = obj
      let objValidity = true

      if (value == '') {
        objValidity = false
      } else {
        let newKey = key == 'email'?key+"Add" : key=='number'?'contactNum' : key;
        objValidity =
          (newKey == 'emailAdd' || newKey == 'contactNum') ? patterns[newKey].test(value) : input.checkValidity()
      }
      if (!objValidity) {
        $(input).addClass("is-invalid");
        $(input).removeClass("is-valid");
        formValidity = false
      } else {
        $(input).removeClass("is-invalid");
        $(input).addClass("is-valid");
      }

    })
    return formValidity
  }

  useEffect(() => {
    fetch("https://doited-error.000webhostapp.com/read.php")
      .then(rawData => rawData.json())
      .then(rawData => setContacts(rawData.data))
      .catch(err => {
        console.log(err)
      })
  });

  return (
    <>
      <div id="app">
        <Header />
        <Contacts contacts={contacts} validator={validateData} operations={{
          onSave: updateContact,
          onDelete: deleteContact
        }} />
        <Modal id="addModal" title="Add Contact">
          <AddForm action={addContact} validator={validateData} />
        </Modal>
      </div>

    </>
  )
}

export default App
