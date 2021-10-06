import React,{ useState, } from 'react';
import { useDispatch, } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersActions';


const LoginUser = ({history}) => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

   // const {userLogin} = useSelector(state => state.userLogin);
   // const {userInfo} = userLogin ;

    //  useEffect(()=>{
    //     if(userLogin){
    //         history.push('/dashboard');
    //     }
    //  }, [userInfo])   

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {email, password}
        //console.log(data)
        dispatch(loginUserAction(data));     

    }

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Login </h1>
                    
          <form onSubmit={handleSubmit}>
            <fieldset>
            
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address {email}</label>
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
                <label htmlFor='exampleInputPassword1'>Password {password}</label>
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
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;