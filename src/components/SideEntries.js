import styled from "styled-components";

const SideEntries = (props) => {
  const { image, title, marginBottom } = props;
  return (
    <>
      <ListItem margin={marginBottom}>
        <img src={image} alt="" />
        <span>{title}</span>
      </ListItem>
    </>
  );
};

const ListItem = styled.li`
  display: flex;
  margin: 0 10px;
  width: 250px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  align-items: center;
  padding: 5px 5px;
  margin-bottom: ${(props) => props.margin};

  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }
  span {
    font-weight: bold;
    margin: 0px 10px;
  }
`;
SideEntries.defaultProps = {
  image:
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  title: "unknown",
  marginBottom: "10px",
};
export default SideEntries;
