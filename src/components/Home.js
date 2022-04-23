import styled from "styled-components";
import LeftSection from "./LeftSection";
import MainSection from "./MainSection";
import RightSection from "./RightSection";
import Header from "./Header";
const Home = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Left>
          <LeftSection />
        </Left>
        <Main>
          <MainSection />
        </Main>
        <Right>
          <RightSection />
        </Right>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 30px;
`;
const Left = styled.div`
  max-width: 400px;
  width: 100%;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const Main = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex: 1;
`;
const Right = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 860px) {
    display: none;
  }
`;
export default Home;
