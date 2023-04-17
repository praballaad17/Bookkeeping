import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useData } from "../../Context/dataContext";

export default function ItemList({ setSelectedItem }) {
  const [key, setKey] = useState("");
  const { items } = useData();
  const [result, setResult] = useState(items);

  console.log(result);

  useEffect(() => {
    const id = key.toLowerCase();
    if (id === "") {
      setResult(items);
    } else {
      let temp = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].name.toLowerCase()?.includes(id)) {
          temp.push(items[i]);
        }
      }
      setResult(temp);
    }
  }, [key, items]);

  return (
    <>
      <div>
        <div className="searchbox">
          <i
            style={{ paddingLeft: "5px" }}
            className="fa-solid fa-magnifying-glass searchicon"
          ></i>
          <input
            type="search"
            className="searchbar"
            id="searchitem"
            name="searchitem"
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div className="productdetails">
          <Table hover>
            <thead className="theadbold">
              <tr>
                <th>
                  <i className="fa-solid fa-arrow-up"></i>FULLNAME
                  <i className="fa-solid fa-filter"></i>
                </th>
                <th>
                  <i className="fa-solid fa-arrow-up"></i>QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              {result &&
                result !== null &&
                result.map((item) => (
                  <tr onClick={() => setSelectedItem(item)}>
                    <td>{item.name}</td>
                    <td>
                      {item.openigStockQuantity}
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
