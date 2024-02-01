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
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary submit"></button>
  
            </div>
          </form>
        </div>
      </div>
     <div/>
     </div>
  )
  };

  export default Signin;