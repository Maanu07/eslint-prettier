const Login = () => {
    return (
        <form>
            <div>
                <label>Username</label>
                {"  "}
                <input type="text" placeholder="Username" />
            </div>
            <div>
                <label>Password</label>
                {"   "}
                <input type="password" placeholder="Password" />
            </div>
        </form>
    );
};

export default Login;
