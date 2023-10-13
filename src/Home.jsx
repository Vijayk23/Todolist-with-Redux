import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./UseReducer";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import Button from "@mui/material/Button";

function Home() {
  const Todos1 = useSelector((state) => state.Todos);

  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handledelete = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  const addtoo = (event) => {
    event.preventDefault();
    dispatch(addTodo({ todotitle: todo }));
    setTodo("");
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
            value={todo}
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="add-btn">
            ADD TASK
          </button>
        </form>
        <table className="tasklist-table">
          <thead>
            <tr>
              <th>List TODO </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Todos1.map((to, index) => (
              <tr key={index}>
                <td className="task">{to.todotitle}</td>
                <td>
                  {" "}
                  <Button>
                    <ModeIcon color="primary" />
                  </Button>
                  <Button onClick={() => handledelete(Todos1.id)}>
                    <DeleteIcon color="error" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
