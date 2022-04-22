import styled from "styled-components";
const Post = (props) => {
  const { name, profile, caption, Img } = props;
  return (
    <>
      <Container>
        <ActorInfo>
          <div>
            <img src={profile} alt="" />
            <span>{name}</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </ActorInfo>
        <p>{caption}</p>
        <img src={Img} alt="" />
        <SocialActions>
          <button>
            <i class="fa-solid fa-thumbs-up"></i>
            <span>Like</span>
          </button>
          <button>
            <i class="fa-solid fa-comment"></i>
            <span>Comment</span>
          </button>
          <button>
            <i class="fa-solid fa-share"></i>
            <span>Share</span>
          </button>
        </SocialActions>
        <PostComment>
          <img
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt=""
          />
          <CommentInput
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
          >
            <input type="text" placeholder="Write a public comment..." />
            <i class="fa-solid fa-face-smile"></i>
            <i class="fa-solid fa-camera"></i>

            <i class="fa-solid fa-note-sticky"></i>
          </CommentInput>
        </PostComment>
        <small>Enter to post</small>
        <Comment>
          <img
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt=""
          />
          <div>
            <span>Name of Commentator</span>
            <p>Comment, This is the comment of the another or this user</p>
          </div>
        </Comment>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 10px 0;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  p {
    text-align: start;
    margin: 10px;
  }
  img {
    width: 100%;
  }
  small {
    text-align: start;
    padding: 8px 20px;
  }
`;
const ActorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }
  span {
    font-weight: bold;
  }
  svg {
    width: 28px;
    height: 28px;
  }
`;
const SocialActions = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px 0px;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  button {
    background-color: white;
    border: none;
    padding: 10px 35px;
    width: 32%;
    font-size: 15px;
    i {
      margin: 0 10px;
    }
    &:hover {
      background-color: #f0f2f5;
    }
  }
`;
const PostComment = styled.div`
  display: flex;
  gap: 10px;
  padding: 0px 10px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
  }
`;
const CommentInput = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  background-color: #f0f2f5;
  padding: 5px;
  border-radius: 50px;
  flex: 1;
  i {
    color: gray;
  }
  input {
    background-color: #f0f2f5;
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
  }
`;

const Comment = styled(PostComment)`
  div {
    width: 100%;
    text-align: start;
    font-size: 14px;
    border-radius: 50px;
    padding: 0px 20px;
    background-color: #f0f2f5;
    span {
      font-weight: bold;
    }
    p {
      margin: 0;
    }
  }
`;

export default Post;
