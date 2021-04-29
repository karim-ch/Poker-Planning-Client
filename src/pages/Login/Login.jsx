import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../graphql/mutations';
import { ME } from '../../graphql/queries';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState();
  const history = useHistory();
  const [login, { client, loading }] = useMutation(LOGIN);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await client.resetStore();
    setErr(null);
    const {
      data: {
        login: { user, token, error },
      },
    } = await login({
      variables: { email, password },
      refetchQueries: [{ query: ME }],
      awaitRefetchQueries: true,
    });
    if (error) {
      setErr(error);
    } else {
      history.push('/app/dashboard');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </label>
          {err && <small> {err} </small>}
          {loading && <small> Loading... </small>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
