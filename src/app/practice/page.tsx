import { Practice } from "@/app/components/Practice";
import { Navigation } from "@/app/components/Navigation";

export default function PracticePage() {
  return (
    <>
      <Navigation currentPage="practice" />
      <main>
        <Practice />
      </main>
    </>
  );
}

