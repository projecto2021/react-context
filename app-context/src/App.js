import CrudApi from "./components/CrudApi";
import MyPage from "./components/MyPage";
import { CrudProvider } from "./context/CrudContext";
function App() {
  return (
    <div>
      <h1>React Context  - API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentacion
      </a>
      <hr />
      <CrudProvider>
      <CrudApi/>
      </CrudProvider>
      <MyPage />
    </div>
  );
}

export default App;
