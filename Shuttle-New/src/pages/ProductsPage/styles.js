import styled from 'styled-components';

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 1rem;
    margin: 1rem;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Wrapper;
