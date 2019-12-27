const initialNotification = "";

export const setAnecdoteVotedNotification = (anecdote) => {
  return {
    type: "SET_NOTIFICATION",
    data: { notification: `You voted '${anecdote}'`}
  };
}

export const setAnecdoteCreatedNotification = (anecdote) => {
  return {
    type: "SET_NOTIFICATION",
    data: { notification: `You created anecdote '${anecdote}'`}
  };
}

export const removeNotification = () => {
  return {
    type: "REMOVE_NOTIFICATION",
    data: {}
  };
}

const reducer = (state = initialNotification, action) => {
  switch(action.type) {
    case "SET_NOTIFICATION":
      console.log("SET_NOTIFICATION", action.data);
      return action.data.notification;
    case "REMOVE_NOTIFICATION":
      return "";
    default:
      return state;
  }
}

export default reducer;