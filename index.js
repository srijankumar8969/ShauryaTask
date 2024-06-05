const form = document.querySelector('#form')
const nam = document.getElementById('name');
const phoneNumber = document.getElementById('number');
const email = document.getElementById('email');
const sports=document.getElementById('sports');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var gender;
var  sportv;


form.addEventListener('submit',async (e) => {
    e.preventDefault();
    gender=e.target.gender.value;
    sportv=e.target.sport.value;
      validateMyForm();
});

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

 const validateMyForm=()=>{
    const namev = nam.value.trim();
    const emailv = email.value.trim();
    const passwordv = password.value.trim();
    const password2v = password2.value.trim();
    const phoneNumberv = phoneNumber.value.trim();
        // name validation
        if(namev.length<5){
            setError(nam, "name can't be of less than 5 characters")
        }else{
            setSuccess(nam);
        }
        
        let namearray = Array.from(namev);
        const promiseone = new Promise((respose,reject)=>{
                namearray.forEach((elem)=>{
                    if(elem>=0 && elem<=9){
                        reject("name can't contain any number");
                    }
                })
                respose();
        }).then(()=>{
            setSuccess(nam);
        }).catch((massage)=>{
            setError(nam,massage);
        });


       //number validation

        if(phoneNumberv.length!=10){
        setError(number, 'Enter a valid phone number');
    }else {
        setSuccess(number);
    }

    //email validation
    if(!emailv.includes('@gmail.com')){
        setError(email, 'Privide a valid email address of gmail type.');
    }else{
        setSuccess(email);
    }

    //password validation
    if(passwordv.length<8){
        setError(password,'Password shold contain atleast 8 entries');
    }else{
        setSuccess(password);
    }

    //password confirmation
    if(password2v!==passwordv){
        setError(password2,`Password doesn't match`);
    }else{
        setSuccess(password2);
    }

    const formData = {
    name: namev,
    email: emailv,
    password: passwordv,
    phoneNumber: phoneNumberv,
    gender: gender,
    sport: sportv,
};

console.log(formData);

};

//drop down menu
const Drop = document.querySelector('.menuToggle').addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('drop');
    
});

//toggleDark mode
const groove = document.getElementById('groove');
const body = document.querySelector('body');
groove.addEventListener('click',()=>{
    groove.classList.toggle('active');
    body.classList.toggle('active');
})

//modal experience 
const container = document.querySelector('.container');
const signup = document.querySelector('#signup');

signup.addEventListener('click',()=>{
    container.classList.toggle('showInModal');
    /* document.querySelector('header nav').style.display='none'; */
   document.querySelector('header').classList.toggle('signShow') ;
    if (window.innerWidth <= 750) {
        document.querySelector('nav').classList.add('signShow');
        console.log('pin')
     }
});

