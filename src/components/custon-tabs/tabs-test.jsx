import Tabs from "./tabs";
import "./tabs.css";

function RandonComponent() {
  return <h1>Some Randon Component</h1>;
}

export default function TabsTest() {
  const tabs = [
    {
      label: "tab 1",
      content: <div>This is content fot Tab 1</div>,
    },
    {
      label: "tab 2",
      content: <div>This is content fot Tab 2</div>,
    },
    {
      label: "tab 3",
      content: <RandonComponent />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
