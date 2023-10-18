// This code is from
// https://stackoverflow.com/a/71721634

// Get data from token and add it to session
export default async function session({ session, token }) {
  if (session?.user) {
    session.user.name = token.name
    session.user.email = token.email
    session.user.id = token.id
  }
  return session
}