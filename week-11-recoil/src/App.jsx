import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import "./App.css";

import { counterAtom, evenSelector } from "./store/atom/counter";
import { notifications, totalNotificationSelector } from "./store/atom/notification";
import { todosAtomFamily } from "./store/atom/todoAtom";
import { Suspense, useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />





      {/* <MainApp />
      <Buttons />
      <Counter />
      <IsEven /> */}
    </RecoilRoot >
  );
}



function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id))
  console.log(todo);

  if (todo.state == "loading") {
    return <div>
      loading...
    </div>
  } else if (todo.state == "hasValue") {
    return (
      <div>
        <p>{todo.contents.id} - {todo.contents.todo}</p>
      </div>
    )

  }

  // return (
  //   <div>
  //     <p>{todo.id} - {todo.todo}</p>
  //   </div>
  // )



}


function MainApp() {
  const [notificationCount, setNotificationCount] = useRecoilState(notifications)
  const allNotification = useRecoilValue(totalNotificationSelector)



  return (
    <>
      <button>Home</button>
      <br />
      <br />

      <button>My Network ({notificationCount.networks >= 100 ? "99+" : notificationCount.networks})</button>
      <button>Job ({notificationCount.jobs})</button>
      <button>Messaging ({notificationCount.messages})</button>
      <button>Notifications ({notificationCount.notifications})</button>
      <br />
      <br />

      <button>Me ({allNotification})</button >

    </>
  );
}


function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((prev) => prev + 2);
  }

  function decrease() {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>{even ? "EVEN" : "ODD"}</div>;
}

export default App;
