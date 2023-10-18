import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export default function PasswordInput() {

  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => setShowPassword(!showPassword)

  return (
    <div className="mt-5">
      <label className="block text-xs text-gray-700 pt-1 pb-2" htmlFor="password">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          required
          autoComplete="current-password"
          className="w-full py-3 px-4 max-sm:py-2 border border-darken rounded-md outline-none text-sm"
        />

        <span
          onClick={togglePassword}
          className="absolute top-1/2 right-1 -translate-y-1/2 p-2 cursor-pointer text-gray-600 bg-white"
        >
          {showPassword ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
        </span>
      </div>
    </div>
  )
}