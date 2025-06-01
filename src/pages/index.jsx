import MyButton from "@/Components/Basic/Button";
import App from "@/Components/Map/Map"
import BasicMap from "@/Components/Map/BasicMap"
import StudentList from "@/Components/Map/Table"
import MyAccordion from "@/Components/Map/Accordion";
import CounterBox from "@/Components/Hooks/useState/CounterBox";
import UpdateData from "@/Components/Hooks/useState/UpdateData"
import "../styles/CounterBox.css";
import "../styles/UpdateData.css";

export default function Home() {
  return (
    <div>
      {/* <MyButton/>
      <App/>
      <BasicMap/>
      <StudentList/>
      <MyAccordion/> */}
      <CounterBox/>
      <UpdateData/>
    </div>
  );
}