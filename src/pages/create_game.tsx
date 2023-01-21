import React from 'react';
import './css/createStyles.scss';

const tagsList = ['Easy', 'Medium', 'Hard', 'Programming', 'Movies', 'Music', 'Sports', 'Animals', 'Food', 'History', 'Geography', 'Science', 'Art', 'Literature', 'Math', 'Miscellaneous'];
export default function CreateGame () {
    return (
      <div className = "Game">
        <div className = "CreateTitle">
          <h1> Create a Game </h1>
        </div>
          <h2> Choose Tags:</h2>
        <div className = "containCar">
             <div className = "CreateTagsCarosel"> 
            {tagsList.map((tag) => 
                <CustomTags props = {tag}/>
            )}
          </div>
        </div>
        <div className = "CreateGameForm">
        </div>
      </div>
    )
  }
  function CustomTags (props) {
    return (
      <button className = "CustomTags">
        <h3> {props.props} </h3>
      </button>
    )
  }