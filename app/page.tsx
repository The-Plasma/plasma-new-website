import Image from "next/image";
import HomeP from "./main/Home";
import Us from "./main/Us";
import EmptyScreen from "./main/Empty";

export default function Home() {
  return (
    <>
      <HomeP />
      <EmptyScreen />
      <Us />
    </>

  );
}
