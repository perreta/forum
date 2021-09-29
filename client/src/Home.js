function Home ({ user }) {
    return(
        <h1>
            {user ? `Welcome, ${user.name}` : "WELCOME TO FOR'EM"}
        </h1>
    )
}
export default Home