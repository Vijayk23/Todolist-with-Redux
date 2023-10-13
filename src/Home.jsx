import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./UseReducer";

function Home() {
  const Todos1 = useSelector((state) => state.Todos);

  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const addtoo = (event) => {
    event.preventDefault();
    dispatch(addTodo({ todotitle: todo }));
  };
  return (
    <>
      <div className="to-do-list">
        <h4 className="title">TO-DO LIST</h4>
        <form className="form" onSubmit={addtoo}>
          <input
            type="text"
            placeholder="Enter Your Today's Task..."
            className="input-task"
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="add-btn">
            ADD TASK
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>List TODO </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Todos1.map((to, index) => (
              <tr key={index}>
                <td>{to.todotitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
