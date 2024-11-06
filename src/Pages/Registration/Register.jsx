import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { imageUpload } from '../../Utility';
import useAxiosPublic from '../../Hook/useAxiosPublic';

const Register = () => {
  const { createUser,  } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    try {
      const imageUrl = await imageUpload(photo[0]);
      const image = imageUrl.data.url
      if (password.length < 6) {
        toast.error('Password should contain at least six letters!');
        return;
      }
      await createUser(email, password);
      const userInfo = {
        name,
        email,
        password,
        photo: image,
        role: 'user',
      };
      const res = await axiosPublic.post('/api/register', userInfo);
      console.log(res);
      if (res.status === 200) {
        toast.success('Registered successfully!');
        navigate('/');
      } else {
        toast.error('Registration failed, email might already exist!');
        reset();
      }
    } catch (error) {
      toast.error('Error occurred during registration.', error);
    }
  };

  return (
    <div className="relative z-10 flex p-4 items-center justify-center">
      <div className="w-full md:w-1/2 p-8 bg-pink-50">
        <form className="md:max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-4">
            <p className="mb-2 text-gray-900 font-semibold">Your Name</p>
            <input
              className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
              type="text"
              placeholder="Your name"
              {...register('name', { required: true, minLength: 2 })}
            />
            {errors.name && (
              <p className="text-red-600">
                {errors.name.type === 'required' ? 'This field is required' : 'Name must be at least 2 characters'}
              </p>
            )}
          </label>
          <label className="block mb-4">
            <p className="mb-2 text-gray-900 font-semibold">Email Address *</p>
            <input
              className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
              type="email"
              placeholder="Enter email address"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </label>
          <label className="block mb-4">
            <p className="mb-2 text-gray-900 font-semibold">Profile Photo</p>
            <input
              className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
              type="file"
              {...register('photo', { required: 'This field is required' })}
            />
            {errors.photo && (
              <p className="text-red-600">{errors.photo.message}</p>
            )}
          </label>
          <label className="block mb-5 w-full relative">
            <p className="mb-2 text-gray-900 font-semibold">Password *</p>
            <input
              className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', { required: 'This field is required' })}
            />
            <button
              type="button"
              className="absolute right-2 bottom-1  transform -translate-y-1/2 text-2xl text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </label>
          <button className="inline-block py-4 w-full bg-blue-500 text-white font-bold text-center   rounded-lg" type="submit">
            Register
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
