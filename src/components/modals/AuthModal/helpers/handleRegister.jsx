import axios from "axios"
import store from "@/lib/redux"
import { setMessage } from "@/lib/redux/validation"
import { showToast } from "@/lib/helpers/showToast"
import { authSuccess } from "./authSuccess"

export default async function handleRegister(name, email, password, privacyPolicy) {
  try {
    const res = await axios.post("/api/user/register", {
      name,
      email,
      password,
      privacyPolicy,
    })

    // Get the status and message from the response
    const { status, message } = res.data

    // If the register was successful
    if (status === 201) {
      authSuccess(email, password)
      showToast.register(email)
    }

    // If the register was unsuccessful
    if (status !== 201) {
      store.dispatch(setMessage({
        form: "authForm",
        message,
      }))
    }

  } catch (error) {
    console.log(error)
  }
}