import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";

import { counterAtom, evenSelector } from "./store/atom/counter";
import { notifications, totalNotificationSelector } from "./store/atom/notification";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
      {/* <Buttons />
      <Counter />
      <IsEven /> */}
    </RecoilRoot>
  );
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
