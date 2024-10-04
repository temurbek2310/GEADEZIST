import { registerRasm } from "@/helpers/imports/images";
import { Logo } from "@/helpers/imports/images";

function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full lg:w-5/6 lg:h-5/6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-3/5 w-full flex flex-col items-center justify-center bg-gray-50 p-8">
          <img src={Logo} alt="Logo" className="w-30 lg:w-48 mb-4 lg:mb-8" />
          <div className="w-40 lg:w-60">
            <img src={registerRasm} alt="Phone Illustration" />
          </div>
        </div>

        <div className="flex justify-center items-center w-full lg:w-3/5 p-6 lg:p-8">
          <div className="w-full">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
              Tizimga kirish
            </h2>
            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                  Elektron pochta
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Elektron pochtangizni kiriting"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                  Parol
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Parolni kiriting"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <small className="text-gray-500">
                  Parol kamida 5 ta harf yoki raqamdan iborat bo'lishi kerak
                </small>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Tizimga kirish
              </button>
            </div>

            <div className="flex justify-between items-center mt-4 lg:mt-6">
              <a href="/register" className="text-sm text-blue-500 hover:underline">
                Ro'yhatdan o'tish
              </a>
              <a href="/auth/confirm" className="text-sm text-blue-500 hover:underline">
                Parolni unutdingizmi?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
