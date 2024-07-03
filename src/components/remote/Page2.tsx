import React, { useEffect } from "react";
const RemotePage2 = React.lazy(() =>
  import("remoteB/App").catch(() => ({
    default: () => <h1>RemoteB non è raggiungibile</h1>,
  }))
);

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
      <RemotePage2 />
    </React.Suspense>
  );
}

export default Page2;
