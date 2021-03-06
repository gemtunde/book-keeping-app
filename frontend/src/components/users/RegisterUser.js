import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/actions/users/usersActions';


const RegisterUser = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    //grab user login from store
    const userLogin = useSelector(state => state.userLogin) ;
    const {userInfo} = userLogin;

    useEffect(() => {
        if(userInfo){
            history.push('/dashboard');
        }       
    }, [userInfo]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {name, email, password}
        dispatch(registerUserAction(data));

    }

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Register </h1>
                    
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                  type='text'
                  value = {name}
                  onChange={e=>setName(e.target.value)}
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  value = {email}
                  onChange={e=>setEmail(e.target.value)}
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  value = {password}
                  onChange={e=>setPassword(e.target.value)}
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;