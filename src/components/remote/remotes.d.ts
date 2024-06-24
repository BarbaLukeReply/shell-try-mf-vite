declare module 'remoteB/App' {
  const App: React.ComponentType;
  export default App;
}

interface AppProps {
    color: boolean;
  }

declare module 'remoteA/App' {
    const App: React.ComponentType<AppProps>;
    export default App;
  }