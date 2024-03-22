import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label htmlFor="fullname" className="label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="username" className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
