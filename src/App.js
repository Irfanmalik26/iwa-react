import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      
      <div className="col-lg-12">
        <div className="row">
            <div className="container text-center">
                <h2 className="mt-4">Welcome to Design Solvers</h2>
                <p>Premium quality Mobile Accessories by <a href="https://github.com/Irfanmalik26" target="blank">Irfan Malik</a></p>
            </div>
        </div>
      </div>
      <hr/>
      <div className="col-lg-12">
        <div className="row mt-5">
            <div className="offset-lg-4 col-lg-4">
                <div className="container login-section">
                    <div className="container text-center">
                        <h3>Login</h3>
                    </div>
                    <form id="login-form" action="Home" >
                        <div className="form-group">
                            <label for="">Username</label>
                            <input type="text" id="username" name="username" className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
     </div>
   
  
    
  );
}

export default App;
