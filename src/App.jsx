import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainRouter from "./router/Main/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MainRouter/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
