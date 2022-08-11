import getGoogleOAuthUrl from "./utils/getGoogleUrl";

function App() {
  return (
    <div className="app">
      Login
      <a href={getGoogleOAuthUrl()}>Login with google</a>
    </div>
  );
}

export default App;
