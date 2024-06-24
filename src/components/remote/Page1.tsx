import React, { useState } from 'react';
const RemotePage1 = React.lazy(() => import("remoteA/App").catch(() => ({ default: () => <h1>RemoteA is not reachable</h1> })));

function Page1 () {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <React.Suspense fallback="Loading...">
      <div className="mb-4">
        <RemotePage1 color={toggleState} />
      </div>
      <div className="flex flex-col items-center">
        <button onClick={handleToggle} className={`px-4 py-2 bg-${toggleState ? 'yellow' : 'green'}-500 text-white rounded`}>
          {'Set color to: ' + (toggleState ? 'Yellow' : 'Green')}
        </button>
        <p className="mt-2 text-center">* This button demonstrates how the remote component responds to prop changes from the shell component.</p>
      </div>
    </React.Suspense>
  );
}

export default Page1;