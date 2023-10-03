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
    $("#reactLogo").addClass("faster")
    $(".loaderIcon").show()
    $.post("https://contlist.000webhostapp.com/add.php", newData, (rawData) => {
      let data = JSON.parse(rawData)
      console.log(data.message)
      if(data.data == -1){
        $("#email").addClass('is-invalid')
        $("#validationemail").html("Email already exists!")
        $(".loaderIcon").hide()
        return false
      }else{
        $("#validationemail").html("Invalid email address!")
        // reset form
        form.reset()
        $(form).find("input").each((idx, input)=>{
            $(input).removeClass("is-valid")
        })
        $("#reactLogo").removeClass("faster")
        $(".loaderIcon").hide()
        return true
      }
    })
  }

  const updateContact = async (formData)=> {
    let promise = new Promise((resolve, reject)=>{
      $.post("https://contlist.000webhostapp.com/edit.php", formData, (rawData) => {
        resolve(rawData)
      })
      .fail((e)=>{
        reject(e)
      })
    })

    
    const rawResp = await promise
    const resp = JSON.parse(rawResp)
    if(resp.status == 400){
      return false
    }else{
      return true
    }
  }

  const deleteContact = (id) => {
    $.post('https://contlist.000webhostapp.com/delete.php', { id: id }, (rawData) => {
      let data = JSON.parse(rawData)
      console.log(data.message)
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
        objValidity = input.checkValidity()
        if(newKey == 'emailAdd' || newKey == 'contactNum'){
           objValidity = objValidity && patterns[newKey].test(value)
        }
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
    fetch("https://contlist.000webhostapp.com/read.php")
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
        <Contacts contacts={contacts} validator={validateData} onSave={updateContact} onDelete={deleteContact} />
        <Modal id="addModal" title="Add Contact">
          <AddForm action={addContact} validator={validateData} />
        </Modal>
      </div>

    </>
  )
}

const hideModal = (target) =>{
  $(target).modal('hide')
}

export default App
