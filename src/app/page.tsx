import TestInterface from "../components/TestInterface";
import { sampleTestData } from "../data/data";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <TestInterface testData={sampleTestData} />
    </div>
  );
}
