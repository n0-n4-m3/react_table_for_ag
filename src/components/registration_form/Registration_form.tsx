import { useState } from 'react'
import './css/style.css'
import { host } from '../../settings'

export function Registration_form() {
  const [Code, SetCode] = useState(0)
  
  if(!Code) {
    return (
      <>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet"></link>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'></link>
        <div className="forma">
          <h1>Регистрация</h1>
          <hr />
            <form action="">
            <div className="field name_field">
              <label id="icon" htmlFor="user"><i className="icon-user "></i></label>
              <input type="text" className="user" placeholder='Введите ФИ'/>
            </div>
            <div className="field email_field">
              <label id="icon" htmlFor="email"><i className="icon-envelope "></i></label>
              <input type="email" className="email" placeholder='Введите свой st'/>
            </div>
            <hr />
            <button type='button' className="button" onClick={ () => { SetCode(1) }}>Зарегистрироваться</button>
          </form>
          
          
          <a href="/login">Уже есть аккаунт. Войти?</a>
        </div>

      </>
    )
  }
  else { 
    return (
      <>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet"></link>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'></link>
        <div className="forma">
          <h1>Регистрация</h1>
          <hr />
          <form action="">
            <p>Введите код отправленный на вашу st почту</p>
            <input type="text" className="code" placeholder='Введите код подтверждения'/>
            <hr />
            <button type='button' className="button" onClick={ () => window.location.assign(host + '/') }>Подтвердить</button>
          </form>
        </div>

      </>
    )
  }
}
