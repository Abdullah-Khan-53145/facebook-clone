import styled from "styled-components";
import LeftSection from "./LeftSection";
import MainSection from "./MainSection";
import RightSection from "./RightSection";
const Home = (props) => {
  return (
    <>
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
const Left = styled.div``;
const Main = styled.div`
  flex: 1;
`;
const Right = styled.div``;
export default Home;
