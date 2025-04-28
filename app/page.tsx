import HomeP from "./main/Home";
import EmptyScreen from "./main/Empty";
import Work from "./main/work";
import ClientShowcase from "./main/About";

export default function Home() {
  return (
    <>
      <HomeP />
      <ClientShowcase />
      <EmptyScreen />
      <Work/>
    </>

  );
}
