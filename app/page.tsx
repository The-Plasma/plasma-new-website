import HomeP from "./main/Home";
import EmptyScreen from "./main/Empty";
import Work from "./main/work";
import ClientShowcase from "./main/About";
import DataFlowDiagram from "./main/DataFlowDiagram";

export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      <EmptyScreen />
      <Work/>
      <DataFlowDiagram></DataFlowDiagram>
    </>

  );
}
