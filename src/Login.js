import React from "react"
export default class Login extends React.Component {
    state = { user: "", password: "" }
    render() {
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
                <hr />
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
                                        <input type="text" onChange={({ target: { value: user } }) => this.setState({ user })} value={this.state.user} className="form-control" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" onChange={({ target: { value: password } }) => this.setState({ password })} value={this.state.password} className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={() => this.props.login(this.state)} className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}