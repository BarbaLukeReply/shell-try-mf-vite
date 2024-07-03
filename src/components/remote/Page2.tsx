import React, { useEffect } from "react";
import { useAlerts } from "../../context/alerts/alert-context";
import { AlertType } from "../../context/alerts/alert-context";
interface RemotePage2Props {
  useAlerts: () => {
    addAlert: (alert: Omit<AlertType, "id">) => void;
    clearAlerts: () => void;
  };
}

const RemotePage2 = React.lazy(() =>
  import("remoteB/App").catch(() => ({
    default: () => <h1>RemoteB non è raggiungibile</h1>,
  }))
) as React.ComponentType<RemotePage2Props>;

function Page2() {
  useEffect(() => {
    const handleTryEvents = () => {
      console.log("received event from button!");
    };
    window.addEventListener("TRY_EVENT", handleTryEvents);

    return () => {
      window.removeEventListener("TRY_EVENT", handleTryEvents);
    };
  }, []);

  return (
    <React.Suspense fallback="Loading...">
      <RemotePage2 useAlerts={useAlerts} />
    </React.Suspense>
  );
}

export default Page2;
