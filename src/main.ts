import "./style.css";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

function logTodo(id: number, title: string, completed: boolean): void {
  console.log(`
  Todo ID: ${id}
  Todo title: ${title}
  Completed: ${completed}
  `);
}
// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
// <header>
// <h1>ToDo List</h1>
// </header>

// <main>
// <form autocomplete="off">
//     <label>
//         <input id="new-todo" name="todo" type="text" placeholder="new todo" />
//     </label>
//     <select id="user-todo" name="user">
//         <option disabled selected>select user</option>
//     </select>
//     <button>Add Todo</button>
// </form>
// <ul id="todo-list"></ul>
// </main>
// `;
