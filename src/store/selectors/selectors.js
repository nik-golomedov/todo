import { createSelector } from "reselect";

export const selectAllTask = (state) => state.todos;

export const selectCompletedTask = createSelector(selectAllTask, (allTask) =>
  allTask.filter((item) => item.status === "completed")
);
export const selectActiveTask = createSelector(selectAllTask, (allTask) =>
  allTask.filter((item) => item.status !== "completed")
);

export const selectEditTodo = (index) =>
  createSelector(
    selectAllTask,
    (allTask) => allTask[index] && allTask[index].text
  );

export const selectFilterStatus = (state) => state.status.currStatus;
