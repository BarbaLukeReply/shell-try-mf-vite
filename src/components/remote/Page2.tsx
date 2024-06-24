import React from 'react';
const RemotePage2 = React.lazy(() => import("remoteB/App").catch(() => ({ default: () => <h1>RemoteB non è raggiungibile</h1> })));



function Page2 () {
  return (
    <React.Suspense fallback="Loading...">
      <RemotePage2 />
    </React.Suspense>
  );
}

export default Page2;