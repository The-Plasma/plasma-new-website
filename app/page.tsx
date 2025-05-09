import HomeP from "./main/Home";
import EmptyScreen from "./main/Empty";
import ClientShowcase from "./main/About";
import DataFlowDiagram from "./main/DataFlowDiagram";
import DatabaseWithRestApi from "./components/svg-component/Database_rest_api";
import Services from "./main/Service";
import Work from "./main/Work";


export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      {/* <EmptyScreen /> */}
      <Work/>
      <Services/>
      <DataFlowDiagram />
    </>

  );
}
