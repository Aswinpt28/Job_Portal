import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='Aswin' />
        <FormRow type='text' name='lastName'
          labelText='last Name' defaultValue='pt' />
        <FormRow type='text' name='location'
          defaultValue='India' />
        <FormRow type='email' name='email'
          defaultValue='aswinptoffical@gmail.com' />
        <FormRow type='password' name='password' defaultValue='3690' />
        <button button type="sumit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register