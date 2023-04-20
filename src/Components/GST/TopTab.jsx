import React from "react";
import { useGST } from "../../Context/gstContext";
import { useUser } from "../../Context/userContext";

export default function TopTab({ title, status }) {
  const { date } = useGST();
  const { userDetails } = useUser();

  return (
    <>
      <div className="p-3 fs-2 fw-bold bg-info text-white">
        {/* <span className="m-3"> */}
        {title}
        {/* </span> */}
      </div>
      <table className="m-4 bg-white">
        <tbody>
          <tr>
            <td>GSTIN - {userDetails?.profileId?.gstin}</td>
            <td>Legal Name - {userDetails?.fullName}</td>
            <td>Trade Name - {userDetails?.profileId?.businessName}</td>
            <td></td>
          </tr>
          <tr>
            <td>FY - {date?.rtn_year}</td>
            <td>Tax Period - {date?.rtn_month}</td>
            <td>Status - {status ? "Filled" : "Not Filled"}</td>
            <td>Due Date: </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
