import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/actionCreator';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from 'components/TextField/TextField';
import { memo } from 'react';
import styles from './Login.module.scss';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = Yup.object({
    apiKey: Yup.string()
      .min(15, 'Must be 15 characters or more')
      .required('API Key is required'),
    secret: Yup.string()
      .min(10, 'Must be at least 10 charaters')
      .required('Secret is required'),
  });

  return (
    <Formik
      initialValues={{
        apiKey: '',
        secret: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const { apiKey, secret } = values;
        const callback = () => {
          navigate('/viewanimals');
        };
        dispatch(loginUser(apiKey, secret, callback));
      }}
    >
      {(formik) => (
        <div className={`${styles.container_fluid}`}>
          <div className={`${styles.center}`}>
            <h1>Login</h1>
            <Form>
              <TextField label="API Key" name="apiKey" type="text" autoFocus />
              <TextField
                label="Secret"
                name="secret"
                type="password"
              />
              <div style={{ marginTop: '-10px' }}>
                <button
                  className={`${styles.btn}`}
                  type="button"
                  onClick={() => {
                    formik.resetForm({
                      values: {
                        apiKey: '',
                        secret: '',
                      },
                    });
                  }}
                >
                  Reset
                </button>
                <button
                  className={`${styles.btn} ${styles.btn_custom}`}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default memo(Login);
