const inputName = document.querySelector('#name')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const stepCount = document.querySelectorAll('.step')
const button = document.querySelector('#button')
const form = document.querySelector('#form')
const title = document.querySelector('.title')
const subtitle = document.querySelector('.sub-title')
const goBack = document.querySelector('.go-back')


function changingStep(){
        let active = document.querySelector('.active')
        let nextActive = active.parentElement.nextElementSibling.firstElementChild;
        nextActive.classList.toggle('active')
        active.classList.remove('active')
}

function velidation (type){
        type.nextElementSibling.style.display = 'none'
        type.style.border = '1px solid blue';
}

function velidationError (type){
        type.nextElementSibling.style.display = 'block'
        type.style.border = '1px solid var(--clr-primary-red-100)';
}

function chnageTitle(){
    title.innerText = 'Select your plan'
    subtitle.innerText = 'You have the option of monthly or yearly billing'
    goBack.parentElement.style.justifyContent = 'space-between'
    goBack.style.display = 'block'
}

button.addEventListener('click' ,()=>{
    let newFormData = new FormData(form)
        if(newFormData.get('name') != '' && newFormData.get('email') != '' && newFormData.get('number') != ''){
            changingStep()
            chnageTitle()
            velidation(inputName)
            velidation(email)
            velidation(number)
        }
    else{
        if(inputName.value != ''){
            velidation(inputName)
        }
        else{
            velidationError(inputName)
        }
        if(email.value != ''){
            velidation(email)
        }
        else{
            velidationError(email)
        }
        if(number.value != ''){
            velidation(number)
        }
        else{
            velidationError(number)            
        }
    }
    

})
