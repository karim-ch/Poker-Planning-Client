import { useQuery } from 'react-apollo';
import { get } from 'lodash';
import { ME } from '../graphql/queries';

const useLoggedUser = () => {
  const { data, loading } = useQuery(ME, {
    // fetchPolicy: 'network-only',
  });
  const user = get(data, 'me', {});

  return {
    user,
    loading,
  };
};

export default useLoggedUser;
