import PasswordInput from "./ui/PasswordInput"
import EmailInput from "./ui/EmailInput"
import ContinueBtn from "./ui/ContinueBtn"
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
      <NameInput />
      <EmailInput />
      <PasswordInput />

      {/* Action buttons */}
      <ActionButtons tabName="RegisterTab" />

      <ContinueBtn text="Register now" />
    </form>
  )
}