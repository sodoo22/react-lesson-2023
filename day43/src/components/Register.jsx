export default function Register() {
  return (
    <div>
      <h1>its Register page</h1>
      <form action="">
        <label htmlFor="email">Email; </label>
        <input type="text" name="email" id="" />
        <br />
        <label htmlFor="firstname">Firstname; </label>
        <input type="text" name="firstname" id="" />
        <br />
        <label htmlFor="lastname">Lastname; </label>
        <input type="text" name="lastname" id="" />
        <br />
        <label htmlFor="password">Password; </label>
        <input type="password" name="password" id="" />
        <br />
        <label htmlFor="password">Confirm Password; </label>
        <input type="password" name="password" id="" />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
