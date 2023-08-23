import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../store/AuthProvider';

export default function LoginForm(props) {
  const ctx = useAuth();
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

        if (ats.data.token) {
          console.log('Login pavyko');
          // kviesti tevineme elemente esancia funkcija
          ctx.login(formik.values.email, ats.data.token);
          props.onSekme();
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
        {formik.errors.email && formik.touched.email && (
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
