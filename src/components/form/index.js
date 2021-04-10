import React from 'react';

import { Form } from './styles';

function form() {
  return (
    <Form>
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Passawrd"></input>
            <div className="login">
                <button type="submit">Login</button>
            </div>
            <div className="submit">
                <p>Not registered yet?</p>
                <div className="here">
                    <button type="button"><a href="/register">Register here!</a></button>
                </div>
            </div>
        </div>
    </Form>
  );
}

export default form;