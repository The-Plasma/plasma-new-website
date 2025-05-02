import HomeP from "./main/Home";
import EmptyScreen from "./main/Empty";
import Work from "./main/work";
import ClientShowcase from "./main/About";
import DataFlowDiagram from "./main/DataFlowDiagram";
import DatabaseWithRestApi from "./components/svg-component/Database_rest_api";


export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      <EmptyScreen />
      <Work/>
      <DataFlowDiagram />
    </>

  );
}
