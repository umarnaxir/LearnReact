import MyButton from "@/Components/Basic/Button";
import App from "@/Components/Map/Map"
import BasicMap from "@/Components/Map/BasicMap"
import StudentList from "@/Components/Map/Table"
import MyAccordion from "@/Components/Map/Accordion";
import CounterBox from "@/Components/Hooks/useState/CounterBox";
import UpdateData from "@/Components/Hooks/useState/UpdateData";
import TimeOut from "@/Components/Hooks/useEffect/TimeOut";
import CharacterCounter from "@/Components/Hooks/useEffect/CharacterCounter";
import "../styles/CharacterCounter.css";
import "../styles/CounterBox.css";
import "../styles/UpdateData.css";
import CombineAge from "@/Components/Hooks/CombinAge"
import Fetch from "@/Components/Hooks/Fetch";
import Increment from "@/Components/Hooks/useEffect/increment";
import { Counter } from "@/Components/Hooks/useRef/counter";
import { AccessElement } from "@/Components/Hooks/useRef/AccessElement";
import Custom from "@/Components/Hooks/Custom Hook/Custom"
export default function Home() {
  return (
    <div>
      {/* <MyButton/>
      <App/>
      <BasicMap/>
      <StudentList/>
      // <MyAccordion/> */}
      {/* <CounterBox/> */}
      {/* <UpdateData/> */}
      {/* <TimeOut/> */}
      {/* <CharacterCounter/> */}
      {/* <CombineAge/> */}
      {/* <Fetch/> */}
      {/* <Increment/> */}
      {/* <Counter/> */}
      {/* <AccessElement/> */}
      <Custom/>
    </div>
  );
}