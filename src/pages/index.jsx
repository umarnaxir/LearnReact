import MyButton from "@/Components/Basic/First";
import App from "@/Components/Map/Map"
import BasicMap from "@/Components/Map/BasicMap"
import StudentList from "@/Components/Map/Table"
export default function Home() {
  return (
    <div>
      <MyButton/>
      <App/>
      <BasicMap/>
      <StudentList/>
    </div>
  );
}