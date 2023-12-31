import styled from 'styled-components';

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .link-container {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }
  .link-btn {
  background: black; /* Set the background color to black */
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  color: var(--clr-white);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
  font-weight: 400;
  cursor: pointer;
}
`;

export default Wrapper;
