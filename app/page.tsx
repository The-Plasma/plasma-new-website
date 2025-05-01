import HomeP from "./main/Home";
import EmptyScreen from "./main/Empty";
import Work from "./main/work";
import ClientShowcase from "./main/About";
import DataFlowDiagram from "./main/DataFlowDiagram";
import DataFlowDiagram2 from "./main/DataFlowDiagram2";

export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      <EmptyScreen />
      <Work/>
      <DataFlowDiagram></DataFlowDiagram>
      <DataFlowDiagram2></DataFlowDiagram2>
    </>

  );
}
