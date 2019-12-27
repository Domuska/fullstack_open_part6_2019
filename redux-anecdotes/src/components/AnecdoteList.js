import React from 'react';
import { connect } from "react-redux";
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setAnecdoteVotedNotification, removeNotification } from "../reducers/notificationReducer";

const Anecdote = ({content, votes, handleClick}) => {
  return (
    <>
      <li>
        <div>
          {content}
        </div>
        <div>
          has {votes}
          <button onClick={handleClick}>vote</button>
        </div>
      </li>
    </>
  )
}

const AnecdoteList = (props) => {

  const clickListener = (anecdote) => {
    props.voteAnecdote(anecdote.id);
    props.setAnecdoteVotedNotification(anecdote.content);
    // should reset the timeout if one is running and new vote is cast, not completely correct this way
    setTimeout(() => { props.removeNotification() }, 5000);
  }

  return (
    <ul>
      {props.anecdotes.map(anecdote => 
        <Anecdote
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          handleClick={() => clickListener(anecdote)}
        />
      )}
    </ul>
  )
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    anecdotes: state.anecdotes,
  }
};

const mapDispatchToProps = {
  voteAnecdote,
  setAnecdoteVotedNotification,
  removeNotification,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);