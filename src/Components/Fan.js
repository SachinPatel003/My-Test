import React from 'react'
import { useState } from 'react'

const Fan = () => {
    const [submit, setSubmit] = useState("FAN SIGNUP")
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const [firstCheck, setfirstCheck] = useState(false)
    const [lastCheck, setlastCheck] = useState(false)
    const [userCheck, setuserCheck] = useState(false)
    const [emailCheck, setemailCheck] = useState(false)
    const [passCheck, setpassCheck] = useState(false)
    const [checkbox, setSetcheckbox] = useState(false)

    function btn() {
        let firstName = document.getElementById("firstName");
        let reg1 = /^[a-zA-Z][0-9a-zA-Z]{2,10}$/;
        if (reg1.test(first)) {
            firstName.classList.remove("is-invalid");
            setfirstCheck(true)
        } else {
            firstName.classList.add("is-invalid");
            setfirstCheck(false)
        }
        console.log(firstCheck);

        let lastName = document.getElementById("lastName");
        let reg2 = /^[a-zA-Z][0-9a-zA-Z]{2,10}$/;
        if (reg2.test(last)) {
            lastName.classList.remove("is-invalid");
            setlastCheck(true)
        } else {
            lastName.classList.add("is-invalid");
            setlastCheck(false);
        }
        console.log(lastCheck);

        let userName = document.getElementById("userName");
        let reg3 = /^[a-zA-Z][0-9a-zA-Z]{2,10}$/;
        if (reg3.test(user)) {
            userName.classList.remove("is-invalid");
            setuserCheck(true);
        } else {
            userName.classList.add("is-invalid");
            setuserCheck(false);
        }
        console.log(userCheck);

        let emailAdd = document.getElementById("emailAdd");
        let reg4 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg4.test(email)) {
            emailAdd.classList.remove("is-invalid");
            setemailCheck(true);
        } else {
            emailAdd.classList.add("is-invalid");
            setemailCheck(false);
        }
        console.log(emailCheck);

        let passWord = document.getElementById("passWord");
        let reg5 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (reg5.test(pass)) {
            passWord.classList.remove("is-invalid");
            setpassCheck(true)
        } else {
            passWord.classList.add("is-invalid");
            setpassCheck(false)
        }
        console.log(passCheck);

        let check = document.getElementById("check");
        if (check.checked) {
            check.classList.remove("is-invalid");
            setSetcheckbox(true)
        } else {
            check.classList.add("is-invalid");
            setSetcheckbox(false)
        }



        if (firstCheck && lastCheck && userCheck && emailCheck && passCheck && checkbox) {
            setSubmit("-----Submitted Successfully-----")
        } else {
            setSubmit("-----Not Submitted-----")
        }
    };

    return (
        <>
            <div className='col-8 col-xl-5 '>
                <div className='d-flex justify-content-center my-3 h3'>Create Your Fan Account</div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" >First name*</label>
                    <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} id="firstName" className="text-white form-control rounded-pill border-success border border-3 bg-transparent" placeholder="First name" />
                    <div class="invalid-feedback">The number of characters must be between 3 and 10</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" >Last name*</label>
                    <input type="text" value={last} onChange={(e) => setLast(e.target.value)} id="lastName" className="text-white form-control border-success border border-3 rounded-pill bg-transparent" placeholder="Last name" />
                    <div class="invalid-feedback">The number of characters must be between 2 and 10</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" >User name*</label>
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} id="userName" className="text-white form-control border-success border border-3 rounded-pill bg-transparent" placeholder="User name" />
                    <div class="invalid-feedback">The number of characters must be between 2 and 10</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" >Email*</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="emailAdd" className="text-white form-control border-success border border-3 rounded-pill bg-transparent" placeholder="Email" />
                    <div class="invalid-feedback">Please put valid email ID</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" >Password*</label>
                    <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} id="passWord" className="text-white form-control border-success border border-3 rounded-pill bg-transparent" placeholder="Password" />
                    <div class="invalid-feedback">The number of characters must be between 6 and 16</div>
                </div>
                <div>
                    <input className="form-check-input mx-2" type="checkbox" value="" id="check" />
                    <label className="form-check-label" htmlFor="check">I agree to the <span className='text-success'>Terms and Conditions.</span></label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button id='btn' onClick={btn} className="btn rounded-pill btn-success me-2" type="button">
                        {submit}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Fan