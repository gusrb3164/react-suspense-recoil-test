import React, { useState } from 'react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import User from './components/User';
function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <RecoilRoot>
      <div className="App"></div>
      <button onClick={() => setClicked(!clicked)}>fetch</button>
      {clicked && (
        <Suspense fallback={<h1>가져오는 중입니다..</h1>}>
          <User />
        </Suspense>
      )}
    </RecoilRoot>
  );
}

export default App;
