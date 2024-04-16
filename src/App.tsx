import { Header } from "./components/Header";
import { ProjectsDashboard } from "./components/ProjectsDashboard";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="m-5 flex flex-col justify-center items-center h-full">
      <Header />

      <div className="flex flex-col lg:flex-row gap-36">
        <Welcome />

        <ProjectsDashboard />
      </div>
    </div>
  );
}

export default App;
