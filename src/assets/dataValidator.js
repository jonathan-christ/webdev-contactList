import $ from 'jquery'

const dataIsValid = (formData, formValidity) =>{
    $.each(formData, (key, obj) => {
        if(key == 'add') return true
        let input = document.querySelector('input#' + key)
        let value = obj
        let objValidity = true

        if (value == '') {
            objValidity = false
        } else {
            objValidity =
                (key == 'emailAdd' || key == 'contactNum') ? patterns[key].test(value) : input.checkValidity()
        }

        if (!objValidity) {
            $(input).addClass("is-invalid");
            $(input).removeClass("is-valid");
        } else {
            $(input).removeClass("is-invalid");
            $(input).addClass("is-valid");
        }

        formValidity = objValidity
    })
}

