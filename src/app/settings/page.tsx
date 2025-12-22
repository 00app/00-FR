import { Settings } from "@/app/components/Settings";
import { Navigation } from "@/app/components/Navigation";

export default function SettingsPage() {
  return (
    <>
      <Navigation currentPage="settings" />
      <main>
        <Settings />
      </main>
    </>
  );
}

