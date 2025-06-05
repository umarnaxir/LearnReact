import Post from "@/Components/Hooks/Custom Hook/Fetch";
import Counter from "@/Components/Re-rendering/Counter";
import Basic from "@/Components/Re-rendering/Basic"
import App from "@/Components/Basic Program/Count"

export default function App() {
  return (
    <div>
      {/* <Post/> */}
      <Counter/>
      {/* <Basic/> */}
      <Count/>
    </div>
  );
}