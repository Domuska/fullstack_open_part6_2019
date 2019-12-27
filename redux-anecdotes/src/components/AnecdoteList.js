import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer'

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
  const { store } = props;

  // const vote = (id) => {
  //   store.dispatch({
  //     type: 'VOTE',
  //     data: { id }
  //   })
  // }
/// sdf
  return (
    <ul>
      {store.getState().map(anecdote => 
        <Anecdote
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          handleClick={ () => store.dispatch(voteAnecdote(anecdote.id))}
        />  
      )}
    </ul>
  )
};

export default AnecdoteList;