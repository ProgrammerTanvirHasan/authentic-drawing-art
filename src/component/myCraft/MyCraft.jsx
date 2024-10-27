import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import { useState } from "react";

const MyCraft = () => {
  const myData = useLoaderData();
  const [myCard, setMyCard] = useState(myData);

  const handleCustomize = (filter) => {
    if (filter === "Yes") {
      const data1 = myData.filter((item) => item.customization === "yes");
      setMyCard(data1);
    } else if (filter === "No") {
      const data2 = myData.filter((item) => item.customization === "no");
      setMyCard(data2);
    } else if (filter === "All") {
      setMyCard(myData);
    }
  };

  return (
    <div>
      <div className="text-center mb-16">
        <details className="dropdown">
          <summary className=" btn m-7 text-2xl font-bold text-amber-600">
            Customize
          </summary>
          <ul className="menu dropdown-content  rounded-box z-[1] font-bold  text-white">
            <li>
              <a onClick={() => handleCustomize("All")}>All</a>
            </li>
            <li>
              <a onClick={() => handleCustomize("Yes")}>Available</a>
            </li>
            <li>
              <a onClick={() => handleCustomize("No")}>NotAvailable</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {myCard.map((data) => (
          <Card
            key={data.id}
            data={data}
            myCard={myCard}
            setMyCard={setMyCard}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
