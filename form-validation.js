console.log("this is working?");

let name = document.getElementById('name');
let mail = document.getElementById('mail');
let number = document.getElementById('number');
let validname = false;
let validmail = false;
let validnumber = false;
var nametype
var mailtype
var numbertype
// console.log(name, mail, number);

name.addEventListener('blur', () => {
    // console.log('name is blured');
    let regex = /^[a-zA-Z]([_\s0-9a-zA-Z]{2,15}$)/;
    let str = name.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log("its match");
        name.classList.remove('is-invalid');
        validname = true;
        nametype = 'success';
    }
    else {
        // console.log("not match");
        name.classList.add('is-invalid');
        validname = false;
        nametype = 'danger';
    }
})

mail.addEventListener('blur', () => {
    // console.log('mail is blured');
    let regex = /^([a-zA-Z_\.\-0-9]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    let str = mail.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log("its match");
        mail.classList.remove('is-invalid');
        validmail = true;
        mailtype = 'success';
    }
    else {
        // console.log("not match");
        mail.classList.add('is-invalid');
        validmail = false;
        mailtype = 'danger';
    }
})

number.addEventListener('blur', () => {
    // console.log('number is blured')
    let regex = /^[0-9]{10}$/;
    let str = number.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log("its match");
        number.classList.remove('is-invalid');
        validnumber = true;
        numbertype = 'success';
    }
    else {
        // console.log("not match");
        number.classList.add('is-invalid');
        validnumber = false;
        numbertype = 'danger';
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let alert = document.getElementById('alert');

    if (validname && validnumber && validmail) {
        if (nametype == 'success' && mailtype == 'success' && numbertype == 'success') {
            let msg = "success";

            setTimeout(function () {
                alert.innerHTML = `<div id="success" class="alert alert-${msg} alert-dismissible    fade show" role="alert">
                                    <span type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></span>
                                    <strong>Successfully</strong> Your form is submitted.
                                </div>`
            }, 200);
        }
    }
    else {
        let msg = "danger";
        setTimeout(function () {
            alert.innerHTML = `<div id="success" class="alert alert-${msg} alert-dismissible    fade show" role="alert">
                                    <span type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></span>
                                    <strong>ERROR !</strong> Your form is not submitted. Please correct the Details.
                                </div>`
        }, 200);
    }

    let form = document.getElementById('form');
    form.reset();
})
