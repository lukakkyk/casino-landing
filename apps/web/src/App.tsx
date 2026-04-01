import { sharedUiReady } from '@casino/shared-ui';

function App() {
  return (
    <div style={{ padding: 40 }}>
      Shared UI ready: {sharedUiReady ? 'yes' : 'no'}
    </div>
  );
}

export default App;