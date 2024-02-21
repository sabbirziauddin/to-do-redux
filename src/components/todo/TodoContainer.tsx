import { Button } from "../ui/button";
import TodoCart from "./TodoCart";

const TodoContainer = () => {
    return (
      <div>
        <div className="flex  p-2">
          <Button className="mx-2">Add Todo</Button>
          <Button>FilterTodo</Button>
        </div>
{/*         <div className="w-full h-full space-y-3 bg-blue-500 rounded-xl p-5 ">
          <div className="bg-white rounded-md text-2xl font-semibold flex justify-center items-center"><p>There is no Todo pending</p></div>
        </div> */}
      </div>
    );
};

export default TodoContainer;