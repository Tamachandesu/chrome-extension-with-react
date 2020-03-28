import React, { useEffect } from 'react';
type Props = {}
const App: React.FC<Props> = props => {
  useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  }, [chrome])
  const clickButton = () => {
    chrome.runtime.sendMessage({ text: "original text" }, (response) =>{
      alert(`summarized ${response.text}`)
    });
  }
  return (
    <>

      <div>Summarizer extension</div>
      <button onClick={e => clickButton()}>summarize this page</button>
    </>
  );
};
export default App;