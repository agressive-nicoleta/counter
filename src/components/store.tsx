import { observable, action } from "mobx";

const store = observable({
  count: 0,
  addOne: action(function () {
    store.count += 1;
  }),
  removeOne: action(function () {
    store.count -= 1;
  }),
  resetCounter: action(function () {
    store.count = 0;
  }),
});

export default store;
