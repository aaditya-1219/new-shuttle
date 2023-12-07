import styled from 'styled-components';

const NavContainer = styled.nav`
  padding: 1.1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  a {
    color: rgb(50,50,50);
    margin: 5px 0;
  }
  .burger{
    position: absolute;
    right: 20px;
    display: flex;
    flex-direction: column;
  }
  .burger-line {
    height: 1px;
    margin: 3px 0;
    width: 20px;
    background-color: black;
  }
  .nav-resp{
    display: flex !important;
    flex-direction: column !important;
  }
  .cartbtns-resp {
    margin-right: 60px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    transition: height 2s;
    height: auto;
    display: none;
    flex-direction: row;
    padding: 0;
    font-size: 1.6rem;
    margin: 1rem 0;
  }
  @media (min-width: 1102px) {
    .burger{
      display: none;
    }
    .burger-line {
      display: none;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      transition: height 1s;
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`;

export default NavContainer;
