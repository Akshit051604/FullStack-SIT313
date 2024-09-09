import React from 'react'
import Commentitem from './commentitem';
import './App.css'
import {
    CommentText,
    CommentMetadata,
    CommentGroup,
    CommentContent,
    CommentAvatar,
    CommentActions,
    CommentAction,
    CommentAuthor,
    FormTextArea,
    Button,
    Comment,
    Form,
    Header,
  } from 'semantic-ui-react'

function App() {
  return (
    <CommentGroup>
    <Header as='h3' dividing>
      SIT313 Comments
    </Header>
    <Commentitem> </Commentitem>
    <Commentitem> </Commentitem>
    
  </CommentGroup>
  );
}

export default App;
