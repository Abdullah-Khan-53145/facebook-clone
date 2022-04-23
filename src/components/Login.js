import styled from "styled-components";

const Login = (props) => {
  return (
    <>
      <Container>
        <LoginModal>
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt=""
          />

          <button>
            <img
              src="https://assets.materialup.com/uploads/7ba6f741-2ff3-4d2f-8439-a160aa884e7b/preview"
              alt=""
            />
            <span>Login with google</span>
          </button>
        </LoginModal>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 30px;
  padding: 30px 100px;
  border-radius: 12px;
  &:first-child > img {
    width: 80px;
  }
  img {
    width: 28px;
  }
  button {
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #1b74e4;
    border: none;
    border-radius: 12px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
    img {
      border: 1px solid white;
      border-radius: 50px;
    }
    span {
      font-size: 14px;
      font-weight: bold;
      color: white;
    }
  }
`;

export default Login;
