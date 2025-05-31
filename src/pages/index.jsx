import MyButton from "@/Components/Basic/Button";
import App from "@/Components/Map/Map"
import BasicMap from "@/Components/Map/BasicMap"
import StudentList from "@/Components/Map/Table"
import MyAccordion from "@/Components/Map/Accordion";
export default function Home() {
  return (
    <div>
      <MyButton/>
      <App/>
      <BasicMap/>
      <StudentList/>
      <MyAccordion/>
    </div>
  );
}