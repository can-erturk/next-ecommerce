import axios from "axios"
import store from "@/lib/redux"
import { setMessage } from "@/lib/redux/validation"
import { showToast } from "@/lib/helpers/showToast"
import { authSuccess } from "./authSuccess"

export default async function handleLogin(email, password) {
  try {
    const res = await axios.post("/api/user/login", {
      email,
      password,
    })

    // Get the status and message from the response
    const { status, message } = res.data

    // If the login was successful
    if (status === 200) {
      authSuccess(email, password)
      showToast.login(email)
    }

    // If the login was unsuccessful
    if (status !== 200) {
      store.dispatch(setMessage({
        form: "authForm",
        message,
      }))
    }

  } catch (error) {
    console.log(error)
  }
}