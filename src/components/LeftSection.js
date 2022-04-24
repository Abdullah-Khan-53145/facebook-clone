import styled from "styled-components";
import SideEntries from "./SideEntries";
import { connect } from "react-redux";
const LeftSection = (props) => {
  return (
    <>
      <Container>
        <div>
          {props.user ? (
            <SideEntries
              image={props.user.photoURL}
              title={props.user.displayName}
              marginBottom="15px"
            />
          ) : (
            <SideEntries
              image="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              title="My Name"
              marginBottom="15px"
            />
          )}
          <SideEntries
            image="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
            title="Find Friends"
          />
          <SideEntries
            image="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
            title="Watch"
          />
          <SideEntries
            image="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
            title="Groups"
          />
          <SideEntries
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
            title="Marketplace"
          />
          <SideEntries
            image="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
            title="Memories"
          />
          <SideEntries
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
            title="Saved"
          />
        </div>
        <div>
          <h1>Your Shortcuts</h1>

          <small>
            Made by ABDULLAH KHAN
            <br />
            abdullah.khan53145@gmail.com
          </small>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 70px;
  div {
    &:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-top: 1px solid gray;
      margin: 20px 20px;
      width: 300px;
      top: 0;
      bottom: 0px;
      small {
        color: gray;
        font-size: 14px;

        margin-top: 100%;
      }
      h1 {
        color: gray;
        font-size: 18px;
        margin: 8px 10px;
      }
    }
  }
`;
// const SideEntries = styled.ul`
//   &:first-child {
//     margin-bottom: 20px;
//   }
//   li {
//   }
// `;

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSection);
