import React from 'react';
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { 
  setAnecdoteCreatedNotification,
  removeNotification
} from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const store = props.store;

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    store.dispatch(createAnecdote(content));
    store.dispatch(setAnecdoteCreatedNotification(content))
    // should reset the timeout if one is running and new vote is cast, not completely correct this way
    setTimeout(() => { store.dispatch(removeNotification()) }, 5000);
    event.target.anecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote"/>
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )

};

export default connect()(AnecdoteForm);