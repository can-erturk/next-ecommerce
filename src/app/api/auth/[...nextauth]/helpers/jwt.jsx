// This code is from
// https://stackoverflow.com/a/71721634

// Add user data to token
export default async function jwt({ user, token }) {
  if (user) {
    token.name = user.name
    token.email = user.email
    token.id = user.id
  }
  return token
}