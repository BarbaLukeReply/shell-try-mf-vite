import React, { useState, useEffect } from "react";
import { useAlerts } from "../../context/alerts/alert-context";

interface RemotePage1Props {
  color: boolean;
  changePage: boolean;
}

const RemotePage1 = React.lazy(() =>
  import("remoteA/App").catch(() => ({
    default: () => <h1>RemoteA is not reachable</h1>,
  }))
) as React.ComponentType<RemotePage1Props>;

function Page1() {
  const [toggleState, setToggleState] = useState(false);
  const [toggleChangePage, setToggleChangePage] = useState(false);

  const initialFormData = {
    severity: "info" as "info" | "warning" | "error" | "success",
    message: "",
    timeout: 0,
  };
  const { addAlert, clearAlerts } = useAlerts();

  // clear alerts when this component unmounts.
  useEffect(() => {
    return () => {
      clearAlerts();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  const handleToggleChangePage = () => {
    setToggleChangePage(!toggleChangePage);
  };

  return (
    <React.Suspense fallback="Loading...">
      <div className="mb-4">
        <RemotePage1 color={toggleState} changePage={toggleChangePage} />
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={handleToggle}
          className={`px-4 py-2 bg-${
            toggleState ? "yellow" : "green"
          }-500 text-white rounded`}
        >
          {"Set color to: " + (toggleState ? "Yellow" : "Green")}
        </button>
        <p className="mt-2 text-center">
          * This button demonstrates how the remote component responds to prop
          changes from the shell component.
        </p>
        <button
          onClick={handleToggleChangePage}
          className={`px-4 py-2 bg-${
            toggleState ? "orange" : "blue"
          }-500 text-white rounded mt-2`}
        >
          {"Change page to: " + (toggleChangePage ? "page1" : "page1_1")}
        </button>
        <p className="mt-2 text-center">
          * This button demonstrates how the remote component navigate to a
          different page.
        </p>
        <button
          onClick={() => {
            addAlert({
              ...initialFormData,
              message: "This is an alert message",
            });
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
        >
          Add Alert
        </button>
        <p className="mt-2 text-center">
          * This button demonstrates how the remote component adds an alert
          message to the shell component. (using context)
        </p>
      </div>
    </React.Suspense>
  );
}

export default Page1;
