import PasswordInput from "./ui/PasswordInput"
import EmailInput from "./ui/EmailInput"
import Divider from "./ui/Divider"
import ContinueBtn from "./ui/ContinueBtn"
import ContinueWithGoogle from "./ui/ContinueWithGoogle"
import ActionButtons from "./ui/ActionButtons"
import handleRegister from "./helpers/handleRegister"
import NameInput from "./ui/NameInput"

export default function RegisterTab() {

  const handleForm = (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(e.currentTarget)

    // Extract form data
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const privacyPolicy = formData.get("privacyPolicy")

    // Handle login
    handleRegister(name, email, password, privacyPolicy)
  }

  return (
    <form onSubmit={handleForm}>

      {/* Name input */}
      <NameInput />

      {/* Email input */}
      <EmailInput />

      {/* Password input */}
      <PasswordInput />

      {/* Action buttons */}
      <ActionButtons tabName="RegisterTab" />

      {/* Continue buttons */}
      <div className="mt-4">
        <ContinueBtn text="Register now" />
        <Divider />
        <ContinueWithGoogle />
      </div>
    </form>
  )
}