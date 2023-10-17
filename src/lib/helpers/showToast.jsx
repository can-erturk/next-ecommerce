import { toast } from "react-toastify"

const login = () => {
  toast.info(
    <div className="text-black text-sm">
      Welcome back! You are now logged in.
    </div>
  )
}

const register = () => {
  toast.info(
    <div className="text-black text-sm">
      You are now registered and logged in.
    </div>
  )
}

// Export all toast functions
export const showToast = {
  login,
  register,
}