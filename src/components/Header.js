import styled from "styled-components";
import { connect } from "react-redux";
import { useEffect } from "react";
import { signOutAPI } from "../actions";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const handleLogOut = (e) => {
    e.preventDefault();
    props.SignOut();
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.user) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [props.user]);
  return (
    <>
      <Container>
        <LeftSection>
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt=""
          />
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Facebook" />
          </div>
        </LeftSection>
        <MidSection>
          <div>
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
            <span>
              <i className="fa-solid fa-user-group"></i>
            </span>
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
            <span>
              <i className="fa-solid fa-shop"></i>
            </span>
          </div>
        </MidSection>
        <RightSection>
          <UserProfile>
            {props.user ? (
              <>
                <img src={props.user.photoURL} alt="" />
                <span>{props.user.displayName}</span>
              </>
            ) : (
              <>
                <img
                  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                  alt=""
                />
                <span>Abdullah Khan</span>
              </>
            )}
          </UserProfile>
          <div>
            <div>
              <i className="fa-solid fa-bell"></i>
            </div>
            <div>
              <i className="fa-solid fa-comment"></i>
            </div>
            <div>
              <i className="fa-solid fa-bell"></i>
            </div>
            <div>
              <i className="fa-solid fa-caret-down"></i>
              <a onClick={handleLogOut}>Logout</a>
            </div>
          </div>
        </RightSection>
      </Container>
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1240px) {
    width: 400px;
    justify-content: flex-start;
  }
  justify-content: center;
  div {
    display: flex;
    padding: 8px 10px;
    border-radius: 50px;
    background-color: #f0f2f5;
    i {
      color: gray;

      margin: 0 8px;
    }
    @media (max-width: 1240px) {
      input {
        width: 0px;
      }
      &:hover input {
        width: 100%;
        padding: 0 5px;
      }
    }
  }
  img {
    height: 38px;
    width: 38px;

    margin: 0 8px;
  }
  input {
    font-size: 15px;

    border: none;
    outline: none;
    background-color: #f0f2f5;
  }
`;
const MidSection = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  flex-grow: 1;
  justify-content: center;
  div {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    max-width: 768px;
    span {
      width: 70px;
      padding: 10px 0;
      &:first-child {
        border-bottom: 3px solid #1b74e4;
        i {
          color: #1b74e4;
        }
        &:hover {
          border-radius: 0;
          background-color: white;
        }
      }
      &:hover {
        border-radius: 10px;
        background-color: #f0f2f5;
      }
    }
    i {
      color: gray;
      font-size: 23px;
    }
  }
`;
const RightSection = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  div {
    display: flex;
    justify-content: space-between;
    position: relative;

    div {
      &:hover a {
        display: block;
      }
      a {
        position: absolute;
        display: none;
        background-color: white;
        padding: 8px 10px;
        top: 35px;
        font-size: 12px;
        font-weight: bold;
        left: -15px;
        border-bottom: 2px solid gray;
        cursor: pointer;
      }
      background-color: #f0f2f5;
      padding: 10px;
      border-radius: 50px;
      margin: 0 5px;
      i {
        width: 18px;
      }
    }
  }
`;
const UserProfile = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    @media (max-width: 768px) {
      display: none;
    }
  }
  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin: 0 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const SignOut = styled.div``;
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  SignOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
