
const Login = props => {
    return (
            <div className="login">
            
            <div className="flex three center">
                <fieldset>
                    <label><input type="email" placeholder="Email" /></label>
                    <label><input type="password" placeholder="Password" /></label>
                    <button style={{ width: "100%" }}> Login </button>
                </fieldset>
            </div>

            </div>

    )
}

export default Login;

