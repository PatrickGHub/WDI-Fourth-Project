import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="columns is-mobile">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">

        <div className="field">
          <label className="label" htmlFor="username" >Username</label>
          <div className="control has-icons-left">
            <input
              id="username"
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
            />
            { errors.username && <p className="form-error">{ errors.username }</p> }
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email" >Email Address</label>
          <div className="control has-icons-left">
            <input
              id="email"
              className="input"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={user.email}
            />
            { errors.email && <p className="form-error">{ errors.email }</p> }
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password" >Password</label>
          <div className="control has-icons-left">
            <input
              id="password"
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
            />
            { errors.password && <p className="form-error">{ errors.password }</p> }
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="passwordConfirmation" >Password</label>
          <div className="control has-icons-left">
            <input
              id="passwordConfirmation"
              className="input"
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.passwordConfirmation}
            />
            { errors.passwordConfirmation && <p className="form-error">{ errors.passwordConfirmation }</p> }
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
        </div>

        <div className="control">
          <button disabled={ formIsInvalid } className="button is-success column is-half is-offset-one-quarter">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
