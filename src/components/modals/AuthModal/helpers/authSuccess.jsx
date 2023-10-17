import { signIn } from "next-auth/react"
import store from "@/lib/redux"
import { toggleModal } from "@/lib/redux/modal"
import { clearMessage } from "@/lib/redux/validation"

export const authSuccess = (email, password) => {
  // Sign in the user
  signIn("credentials", {
    email,
    password,
    redirect: false,
  })

  // Close the modal and clear the form message
  store.dispatch(toggleModal("authModal"))
  store.dispatch(clearMessage({ form: "authForm" }))
}