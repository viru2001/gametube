import axios from "axios";

const loginService = async ({ email, password }) => {
  try {
    const {
      data: {
        foundUser: { firstName },
        encodedToken,
      },
    } = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    console.log(firstName, encodedToken);
    return [firstName, encodedToken];
  } catch (e) {
    console.log(e);
  }
};
export { loginService };
