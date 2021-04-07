import React from 'react';

import { Form } from './styles';

function form() {
  return (
    <Form>
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Passawrd"></input>
            <button type="submit">Login</button>
            <p>Ainda não é cadastrado?</p>
            <button type="button">Cadastrece aqui!</button>
        </div>
    </Form>
  );
}

export default form;