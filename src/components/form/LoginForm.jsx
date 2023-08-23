import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: 'emma.wong@reqres.in',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .matches(
          /^([a-ząčęėįšųūA-ZĄČĘĖĮŠŲŪ0-9._%-]+@[a-ząčęėįšųūA-ZĄČĘĖĮŠŲŪ0-9.-]+\.[a-zA-Z]{2,})$/,
          'Patikrinkite Emaila'
        )
        .min(3, 'Minimum 3 simboliai')
        .required('Privalomas laukas'),
      password: Yup.string()
        .trim()
        .min(4, 'Minimum 4 simboliai')
        .max(8)
        .required('Privalomas laukas'),
    }),
    onSubmit: (values) => {
      console.log('forma pateikta, duomenys:', values);
      handleLogin(values);
    },
  });

  function handleLogin(userCredentialsObj) {
    console.log('userCredentialsObj ===', userCredentialsObj);
    axios
      .post('https://reqres.in/api/login', userCredentialsObj)
      .then((ats) => {
        console.log('ats ===', ats);
        // jei gavom token tai pavyko prisiloginti
        // atspausdinti token
        console.log('ats.data.token ===', ats.data.token);
        // naviguosim i home arba vip page
        if (ats.data.token) {
          console.log('Login pavyko');
          setLoginSuccess(true);
          ctx.login(formik.values.email);
          //   replace: true pakeicia psl, todel spaudziant back
          //   grysim ne i Login, o i pries tai
          navigate('/vip', { replace: true });
        }
      })
      .catch((error) => {
        // prisiloginti nepavyko
        console.warn('ivyko klaida:', error);
        console.log('error.response.data.error ===', error.response.data.error);
        // formik.errors.email = error.response.data.error;
        // formik.setErrors({ email: error.response.data.error });
        formik.setErrors({ email: 'Email or password not found' });
      });
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          type='text'
          placeholder='Email'
          id='email'
        />
        {formik.touched.email && formik.errors.email && (
          <p className='error'>{formik.errors.email}</p>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          type='password'
          placeholder='Password'
          id='password'
        />
        {formik.errors.password && formik.touched.password && (
          <p className='error'>{formik.errors.password}</p>
        )}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
