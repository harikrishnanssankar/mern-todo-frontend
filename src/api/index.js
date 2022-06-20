export const url = "https://node-todo-hari.herokuapp.com/api/";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return header;
};
