import React from "react";

const Form = () => {
    return (
        <section className="comp form">
            <form action="">
                <label htmlFor="name">الاسم:</label>
                <input type="text" id="name" placeholder="الاسم" required autoComplete="true"/>
                <label htmlFor="email">البريد الالكتروني:</label>
                <input type="email" id="email" placeholder="البريد الالكتروني" required autoComplete="true"/>
                <label htmlFor="password">الرمز:</label>
                <input type="password" id="password" placeholder="الرمز" required/>
                <label htmlFor="confirm">تأكيد الرمز:</label>
                <input type="password" id="confirm" placeholder="تأكيد الرمز" required/>
                <input type="submit" id="submit" onClick={e => e.preventDefault()}/>
            </form>
        </section>
    )
}

export default Form