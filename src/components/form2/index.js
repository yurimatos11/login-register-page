import React from 'react';

import { Form } from './styles';

function form2() {
  return (
      <Form>
          <div className="create">
              <h1>Create you accont</h1>
          </div>
          <div className="top">
            <input type="name" placeholder="Name" />
            <input type="cpf" placeholder="CPF" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="sub">
                <button type="submit">Register</button>
            </div>
            <div className="back">
                <p>Ja tem conta? <a href="/"><u>clique aqui</u></a></p>
            </div>
          </div>
          
      </Form>
  );
}

export default form2;