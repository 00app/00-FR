import { notFound } from "next/navigation";
import { DayPage } from "@/app/components/DayPage";
import { Navigation } from "@/app/components/Navigation";
import { curriculum } from "@/app/data/curriculum";

interface DayPageProps {
  params: Promise<{ id: string }>;
}

export default async function DayPageRoute({ params }: DayPageProps) {
  const { id } = await params;
  const dayNum = parseInt(id);
  
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 30) {
    notFound();
  }

  const dayData = curriculum.find(d => d.num === dayNum);
  
  if (!dayData) {
    notFound();
  }

  return (
    <>
      <Navigation currentPage="home" />
      <main>
        <DayPage
          dayNum={dayData.num}
          title={dayData.title}
          script={dayData.script}
          recapPhrases={dayData.recapPhrases}
          microChallenge={dayData.microChallenge}
        />
      </main>
    </>
  );
}

