import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await signIn(email, password);
      toast.success('Login Successful');
      navigate('/');
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Euro-Bangla | Login</title>
      </Helmet>
      <div className="container flex items-center justify-center px-6 mx-auto">
        <form onSubmit={handleLogIn} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Euro<span className="text-violet-500">Bangla</span>
          </h1>
          <h2 className="text-center text-xl font-semibold text-gray-700">
            Sign In
          </h2>

          <div className="mt-8">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="block w-full py-3 px-4 border rounded-lg placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Email address"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              name="password"
              required
              className="block w-full py-3 px-4 border rounded-lg placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign In
          </button>
          <p className="text-center mt-3">
            Don~t have an account yet? <Link to="/register" className="text-blue-500">Sign up here</Link>.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
