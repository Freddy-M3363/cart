import react from 'react';

const Signin = () => {



  return (
    <div className="signin">
      <div className="signin-content">
        <div className="signin-image">
          <figure>
            <img src={cart} alt="signin image" />
          </figure>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Sign in</h2>
          <form target='_top'>
              <label for="username">Username</label>
              <input type="text" id ="username" value={username} placeholder="username"/>
              <label for="email">Email</label>
              <input type="email" id ="email" value={email} placeholder="Email"/>
              <label for="password">Password</label>
              <input type="password" id ="password" value={password} placeholder="Password"/>
              <label for="c_password">cornfirm password</label>
              <input type="password" id ="c_password" value='c_password' placeholder="confirm password"/>
          </form>
        </div>
      </div>
     <div/>
     </div>
  )
  };

  export default Signin;