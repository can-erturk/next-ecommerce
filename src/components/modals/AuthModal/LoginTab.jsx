import PasswordInput from "./ui/PasswordInput"
import EmailInput from "./ui/EmailInput"
import ContinueBtn from "./ui/ContinueBtn"
import ActionButtons from "./ui/ActionButtons"
import handleLogin from "./helpers/handleLogin"

export default function LoginTab() {

  const handleForm = (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(e.currentTarget)

    // Extract form data
    const email = formData.get("email")
    const password = formData.get("password")

    // Handle login
    handleLogin(email, password)
  }

  return (
    <form onSubmit={handleForm}>
      <EmailInput />      
      <PasswordInput />

      {/* Action buttons */}
      <ActionButtons tabName="LoginTab" />

      <ContinueBtn text="Login" />
    </form>
  )
}