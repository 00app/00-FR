import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";

export default function Page() {
  return (
    <>
      <Navigation currentPage="home" />
      <main>
        <Home />
      </main>
    </>
  );
}

