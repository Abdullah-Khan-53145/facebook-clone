import styled from "styled-components";
import Post from "./Post";
const MainSection = (props) => {
  return (
    <>
      <Container>
        <CreateAPost>
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
        </CreateAPost>
        <Post
          name="Abdullah Khan"
          profile="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          caption="This is my post"
          Img="https://w0.peakpx.com/wallpaper/14/880/HD-wallpaper-anime-anime-boys-glowing.jpg"
        />
        <Post
          name="Abdullah Khan"
          profile="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          caption="This is my post"
          Img="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg"
        />
        <Post
          name="Abdullah Khan"
          profile="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          caption="This is my post"
          Img="https://fsa.zobj.net/crop.php?r=Of_woHym0q3MMk3Xd_-L78f7qIQtJqVuPezwZcAIa4QRUO-yRY5dwGgds6ATQm72w8zuZd0AGTuSNjrnHnepVsMTUAceOMJPXA5ZHrwYd_0qex0-AccDShLIpMzubXI_gZv9Fb7Uaycb3_SeTFNveKGSx9l7wW7WuwrfKCgwjGxMeCJUraSZ55jhro-wH4Nfse8hi2TixXp7BhJB"
        />
        <Post
          name="Abdullah Khan"
          profile="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          caption="This is my post"
          Img="https://wallpaperaccess.com/full/6319352.jpg"
        />
      </Container>
    </>
  );
};
// name, profile, caption, Img
const CreateAPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Container = styled.div`
  max-width: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;
const UpperSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
    margin-right: 8px;
  }
  button {
    background-color: #f0f2f5;
    height: 40px;
    border: 1px solid white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 16px;
    color: gray;
    flex: 1;
  }
`;
const LowerSection = styled.div`
  display: flex;
  border-top: 1px solid gray;
  margin: 0px 30px;
  padding: 5px 0px;
  justify-content: space-between;
  @media (max-width: 560px) {
    margin: 8px;
    padding: 8px;
  }

  button {
    padding: 15px 10px;
    border-radius: 10px;
    background-color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #f0f2f5;
    }
    i {
      padding: 5px;
    }
    @media (max-width: 560px) {
      font-size: 12px;
    }
    @media (max-width: 460px) {
      font-size: 10px;
    }
  }
`;
export default MainSection;