import { React, useState } from "react";
import { MdUnfoldMore } from "react-icons/md";
import {
  BiChevronLeftSquare as Left,
  BiChevronRightSquare as Right,
} from "react-icons/bi";

export default function MyDueTimeSheet() {
  const [limit, setLimit] = useState("10");
  console.log(limit);
  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-between"
          style={{ backgroundColor: "#fff", padding: "2rem" }}
        >
          <div className="col-3 mb-3 mytsd1">
            Search :&nbsp;
            <input type="text" />
          </div>

          <div className="col-2 mytsd2" style={{ textAlign: "right" }}>
            Show :&nbsp;
            <select
              defaultValue="10"
              className="duelimit"
              onClick={(e) => setLimit(e.target.value)}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50k">50</option>
              <option value="100">100</option>
            </select>{" "}
            &nbsp;Records
          </div>
        </div>
      </div>

      <div style={{ margin: "0px 3rem 0px 3rem" }}>
        <table className="table table-hover tab">
          <thead
            style={{
              color: "#e5eaed",
              backgroundColor: "#e5eaed",
              lineHeight: "3rem",
            }}
          >
            <tr>
              <th className="mydtst" style={{ width: "16rem" }}>
                Job Code
              </th>
              <th className="mydtst" style={{ width: "18rem" }}>
                <MdUnfoldMore
                  style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                />
                Job Title
              </th>
              <th className="mydtst" style={{ width: "40rem" }}>
                <MdUnfoldMore
                  style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                />
                End Client Name
              </th>
              <th className="mydtst" style={{ width: "22rem" }}>
                <MdUnfoldMore
                  style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                />
                Total Hours Missing
              </th>
              <th className="mydtst">
                <MdUnfoldMore
                  style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                />
                Missing Dates{" "}
                <span style={{ float: "right" }}>
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </span>
              </th>
            </tr>
          </thead>

          <tbody style={{ fontSize: "1.5rem" }}>
            <tr>
              <td></td>
              <td></td>
              <td>No Data Available</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "1.5rem" }}>
          Showing 0 to 0 of 0 records{" "}
          <span style={{ float: "right" }}>
            <Left />
            <Right />
          </span>
        </p>
      </div>
    </>
  );
}
