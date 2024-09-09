import {
    CommentText,
    CommentMetadata,
    CommentContent,
    CommentAvatar,
    CommentActions,
    CommentAction,
    CommentAuthor,
    Comment,
  } from 'semantic-ui-react'

function Commentitem()
{
    return(
    <Comment>
      <CommentAvatar src='https://semantic-ui.com/images/avatar/small/ade.jpg' />
      <CommentContent>
        <CommentAuthor as='a'>Akshit</CommentAuthor>
        <CommentMetadata>
          <div>Yesterday at 12:30AM</div>
        </CommentMetadata>
        <CommentText>
          <p>Less Gooo!</p>
        </CommentText>
        <CommentActions>
          <CommentAction>Reply</CommentAction>
        </CommentActions>
      </CommentContent>
      </Comment>
    )
}

export default Commentitem