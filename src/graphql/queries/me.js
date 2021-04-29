import gql from 'graphql-tag';

const ME = gql`
  query me {
    me {
      email
      id
      name
    }
  }
`;

export default ME;
