import { Button } from "../ui/button";
import AddToModal from "./AddToModal";
import TodoCart from "./TodoCart";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex  p-2">
        <AddToModal></AddToModal>
        <Button className="mx-2 bg-primary-gradient font-semibold text-xl text-black-500">
          FilterTodo
        </Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/*         <div className="w-full h-full space-y-3 bg-blue-500 rounded-xl p-5 ">
          <div className="bg-white rounded-md text-2xl font-semibold flex justify-center items-center"><p>There is no Todo pending</p></div>
        </div> */}
        <div className="bg-white w-full h-full rounded-lg p-5 space-y-3">
          <TodoCart></TodoCart>
          <TodoCart></TodoCart>
          <TodoCart></TodoCart>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;