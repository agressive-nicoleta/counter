import { observer } from "mobx-react-lite";
import store from "./store";

const Counter = observer(() => {
  return (
    <div>
      <p>{store.count}</p>
      <div className="changeCounter">
        <button onClick={store.addOne}>+1</button>
        <button onClick={store.removeOne}>-1</button>
        <button onClick={store.resetCounter}>Reset</button>
      </div>
    </div>
  );
});

export default Counter;
