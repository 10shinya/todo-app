export const inputTodo = (text) => {
  return {
    type: "INPUT_TODO",
    payload : {
      text
    }
  };
};

export const addTodo = (item) => {
  return {
    type: "ADD_TODO",
    payload: {
      title: item,
      isDone: false,
      id: Math.random()
    }
  };
};

export const changeIsDone = (todo) => {
  return {
    type: "CHANGE_IS_DONE",
    payload: {
      todo
    }
  };
};

export const deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: {
      todo
    }
  };
};

export const resetTodo = () => {
  return {
    type: "RESET_TODO"
  };
};

export const notComplete = () => {
  return {
    type: "NOT_COMPLETE"
  };
};

