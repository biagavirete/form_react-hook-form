import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  padding: 2rem;
  border: solid 1px #ccc;
  border-radius: 6px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.35); 
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.35);

h3 {
  align-self: center;
}

  p {
    font-size: 0.8rem;
    color: red;
  }

  .married-label {
    margin: 1rem 0 0.5rem 0;
    color: #808080;
  }

  button {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

`;