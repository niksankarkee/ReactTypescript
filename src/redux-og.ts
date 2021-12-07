import { Todo } from "./type";
import { v1 as uuid } from "uuid";
// enum

enum TodoActions {
  CREATE_TODO = "CREATE_TODO",
  EDIT_TODO = "EDIT_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
  SELECT_TODO = "SELECT_TODO",
}

// Actions & Action Type
interface CreateTodoActionType {
  type: TodoActions;
  payload: Todo;
}

export const createTodoActionCreator = (data: {
  desc: string;
}): CreateTodoActionType => {
  const { desc } = data;
  return {
    type: TodoActions.CREATE_TODO,
    payload: {
      id: uuid(),
      desc,
      isComplete: false,
    },
  };
};
