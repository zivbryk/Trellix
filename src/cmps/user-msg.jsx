// import React, { useState, useEffect } from "react";

// import { eventBusService } from "../services/event-bus.service.js";

// export const UserMsg = () => {
//   const [msg, setMsg] = useState(null);

//   useEffect(() => {
//     let removeEvent;
//     // Here we listen to the event that we emited, its important to remove the listener
//     removeEvent = eventBusService.on("show-user-msg", (msg) => {
//       setMsg(msg);
//       setTimeout(() => {
//         setMsg(null);
//       }, 2500);
//     });

//     //This makes an error - the component trys to do an async action (setTimeout) after useEffect unmounted the component!!! look for:
//     // 1.React useEffect causing: Can't perform a React state update on an unmounted component
//     // 2.To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function
//     // 3. Read about useCallback and memoizing
//     return () => removeEvent();
//   });

//   if (!msg) return <span></span>;
//   const msgClass = msg.type || "";
//   return (
//     <section className={"user-msg " + msgClass}>
//       <button
//         onClick={() => {
//           setMsg(null);
//         }}
//       >
//         x
//       </button>
//       {msg.txt}
//     </section>
//   );
// };

//////////////////////////////////////////////////////////////////////

import React from "react";

import { eventBusService } from "../services/event-bus.service.js";

export class UserMsg extends React.Component {
  removeEvent;

  state = {
    msg: null,
    _isMounted: false,
  };

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      _isMounted: true,
    }));
    // Here we listen to the event that we emited, its important to remove the listener
    this.removeEvent = eventBusService.on("show-user-msg", (msg) => {
      if (this.state._isMounted) {
        this.setState({ msg });
        setTimeout(() => {
          this.setState({ msg: null });
        }, 2500);
      }
    });
  }

  componentWillUnmount() {
    this.removeEvent();
    this.setState((prevState) => ({
      ...prevState,
      _isMounted: false,
    }));
  }

  render() {
    if (!this.state.msg) return <span></span>;
    const msgClass = this.state.msg.type || "";
    return (
      <section className={"user-msg " + msgClass}>
        <button
          onClick={() => {
            this.setState({ msg: null });
          }}
        >
          x
        </button>
        {this.state.msg.txt}
      </section>
    );
  }
}
