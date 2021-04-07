import React from 'react';

import { Form } from './styles';

function form() {
  return (
    <Form>
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Passawrd"></input>
            <div className="login">
                <button type="submit">Login</button>
            </div>
            <div className="submit">
                <p>Ainda não é cadastrado?</p>
                <div className="here">
                    <button type="button">Cadastrece aqui!</button>
                </div>
            </div>
        </div>
    </Form>
  );
}

export default form;