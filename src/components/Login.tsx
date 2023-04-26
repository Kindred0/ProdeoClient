function Login() {
    return (
        <div className = "Authenticate">
            <form>
                <label htmlFor = "username">Username</label>    
                <input type = "text"  id = "username" name = "username" placeholder = "Username"/>
                <label htmlFor= "password">Password</label>
                <input type = "password" id = "password" name = "password" placeholder = "Username"/>
                <button>Sign In</button>
            </form>
            <button> Dont have an account, Signup Here</button>
        </div>
    )
    }
export default Login;