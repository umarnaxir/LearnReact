import MyButton from "@/Components/Basic/Button";
import App from "@/Components/Map/Map"
import BasicMap from "@/Components/Map/BasicMap"
import StudentList from "@/Components/Map/Table"
import MyAccordion from "@/Components/Map/Accordion";
import CounterBox from "@/Components/Hooks/CounterBox";
import "../styles/CounterBox.css";

export default function Home() {
  return (
    <div>
      {/* <MyButton/>
      <App/>
      <BasicMap/>
      <StudentList/>
      <MyAccordion/> */}
      <CounterBox/>
    </div>
  );
}