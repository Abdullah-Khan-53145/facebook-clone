import styled from "styled-components";
const MainSection = (props) => {
  return (
    <>
      <Container>
        <UpperSection>
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt=""
            />
          </div>
          <button>What's on your mind, Abdullah?</button>
        </UpperSection>
        <LowerSection>
          <button>
            <i class="fa-solid fa-video"></i>
            Live video
          </button>
          <button>
            <i class="fa-solid fa-camera"></i>
            Photo/video
          </button>
          <button>
            <i class="fa-solid fa-face-smile"></i>
            Feeling/Activity
          </button>
        </LowerSection>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;
const UpperSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
    margin-right: 8px;
  }
  button {
    background-color: #dfe1ee;
    height: 40px;
    border: 1px solid white;
    border-radius: 50px;
    flex: 1;
  }
`;
const LowerSection = styled.div`
  display: flex;
  border-top: 2px solid gray;
  margin: 0px 30px;
  padding: 5px 0px;
  justify-content: space-between;
  button {
    padding: 15px 10px;
    border-radius: 10px;
    background-color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #dfe1ee;
    }

    i {
      padding: 5px;
    }
  }
`;
export default MainSection;
