import styled from "styled-components";
const Header = (props) => {
  return (
    <>
      <Container>
        <LeftSection>
          <img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt=""
          />
          <div>
            <input type="text" placeholder="search facebook" />
          </div>
        </LeftSection>
        <MidSection>
          <div>
            <div>
              <i class="fa-solid fa-house"></i>
            </div>
            <div>
              <i class="fa-solid fa-user-group"></i>
            </div>
            <div>
              <i class="fa-solid fa-house"></i>
            </div>
            <div>
              <i class="fa-solid fa-shop"></i>
            </div>
          </div>
        </MidSection>
        <RightSection>
          <UserProfile>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt=""
            />
            <span>Name</span>
          </UserProfile>
          <div>
            <i class="fa-solid fa-bars-sort"></i>
          </div>
          <div>
            <i class="fa-solid fa-comment"></i>
          </div>
          <div>
            <i class="fa-solid fa-bell"></i>
          </div>
          <div>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </RightSection>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  padding: 0px 20px;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: center;

  img {
    height: 38px;
    width: 38px;
  }
  input {
    margin: 0 8px;
    padding: 8px 10px;
    width: 200px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: #dfe1ee;
  }
`;
const MidSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  div {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    max-width: 768px;
    i {
      color: gray;
      height: 28px;
      width: 28px;
    }
  }
`;
const RightSection = styled.div`
  display: flex;
`;
const UserProfile = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
  }
  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin: 0 10px;
  }
`;
export default Header;
