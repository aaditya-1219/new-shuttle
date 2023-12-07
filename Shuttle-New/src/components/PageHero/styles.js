// import styled from 'styled-components';

// const Wrapper = styled.section`
//   background: var(--clr-primary-10);
//   width: 100%;
//   min-height: 20vh;
//   display: flex;
//   align-items: center;

//   color: var(--clr-primary-1);
//   a {
//     color: var(--clr-primary-3);
//     padding: 0.5rem;
//     transition: var(--transition);
//   }
//   a:hover {
//     color: var(--clr-primary-1);
//   }
// `;

// export default Wrapper;


import styled from 'styled-components';

const Wrapper = styled.section`
  background: black; /* Set the background to black */
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: white; /* Set the text color to white */
  a {
    color: white; /* Set the link color to white */
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default Wrapper;

