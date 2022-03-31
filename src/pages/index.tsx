import { useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <h1>Cacv</h1>
      <h2>{colorMode}</h2>
      <button onClick={toggleColorMode}>Change Theme</button>
    </>
  );
}
