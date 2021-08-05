import { BsSun, BsFillCalendarFill } from "react-icons/bs";
import { ExportCSV } from "./ExportCSV";
import ReactToExcel from "react-html-table-to-excel";

import { GrAttachment } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { useState, React, forwardRef, useEffect } from "react";
import "./../../css/main/submittimesheet.css";
import Navbarcomp from "./Navbarcomp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
export default function SubmitTimeSheet() {
  const currentDate = new Date();
  const [jobCode, setJobCode] = useState("0");
  const [selectDate, setSelectDate] = useState(new Date());
  const [cal, setCal] = useState([]);
  // const [time, setTime] = useState();

  useEffect(() => {
    dateChangeHandler(currentDate);
  }, []);

  const [stdTime, setStdTime] = useState({
    monstdtime: "00:00",
    tuestdtime: "00:00",
    wedstdtime: "00:00",
    thustdtime: "00:00",
    fristdtime: "00:00",
    satstdtime: "00:00",
    sunstdtime: "00:00",
  });

  const [timeOff, setTimeOff] = useState({
    montimeoff: "00:00",
    tuetimeoff: "00:00",
    wedtimeoff: "00:00",
    thutimeoff: "00:00",
    fritimeoff: "00:00",
    sattimeoff: "00:00",
    suntimeoff: "00:00",
  });

  const inputStdTimeValue = (e) => {
    const { name, value } = e.target;

    setStdTime((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const inputTimeOffValue = (e) => {
    const { name, value } = e.target;

    setTimeOff((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const timeCalculator = (args) => {
    let hour_sum = 0;
    let minute_sum = 0;
    var arr2 = Object.values(args);
    let val = [];
    for (let i = 0; i < arr2.length; i++) {
      val[i] = arr2[i].split(":");
    }

    for (let i = 0; i < val.length; i++) {
      hour_sum += parseInt(val[i][0]);
      minute_sum += parseInt(val[i][1]);
    }

    hour_sum = hour_sum + Math.floor(minute_sum / 60);
    minute_sum = minute_sum % 60;

    return hour_sum + " : " + minute_sum;
    // console.log(hour_sum + " : " + minute_sum);
  };
  let stdTimeCalculator = timeCalculator(stdTime);
  let timeOffCalculator = timeCalculator(timeOff);

  function addTwoTime(arg1, arg2) {
    let hr_sum = 0;
    let min_sum = 0;

    let item1 = arg1.split(":");
    let item2 = arg2.split(":");
    hr_sum = parseInt(item1[0]) + parseInt(item2[0]);
    min_sum = parseInt(item1[1]) + parseInt(item2[1]);
    hr_sum = hr_sum + Math.floor(min_sum / 60);
    min_sum = min_sum % 60;
    return hr_sum + ":" + min_sum;
  }
  // addTwoTime(stdTime.monstdtime, timeOff.montimeoff);

  const checkDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekArray = [];
    for (let i = 0; i < 7; i++) {
      // console.log(date.getDate(),months[date.getMonth()])

      weekArray[i] = date.getDate() + "-" + months[date.getMonth()];
      console.log("weekArray", weekArray[i]);
      date.setDate(date.getDate() + 1);
    }
    return weekArray;
  };

  const dateChangeHandler = (date) => {
    console.log();
    if (date.getDay() === 0) {
      date.setDate(date.getDate() + 1);
    } else if (date.getDay() === 1) {
      date.setDate(date.getDate());
    } else if (date.getDay() === 2) {
      date.setDate(date.getDate() - 1);
    } else if (date.getDay() === 3) {
      date.setDate(date.getDate() - 2);
    } else if (date.getDay() === 4) {
      date.setDate(date.getDate() - 3);
    } else if (date.getDay() === 5) {
      date.setDate(date.getDate() - 4);
    } else if (date.getDay() === 6) {
      date.setDate(date.getDate() - 5);
    }

    setCal(checkDate(date));
  };

  const CustomInput = forwardRef(({ onClick }, ref) => (
    <label type="text" className="myinput" onClick={onClick} ref={ref}>
      {cal[0] +
        "-" +
        currentDate.getFullYear() +
        " to " +
        cal[6] +
        "-" +
        currentDate.getFullYear()}{" "}
      <BsFillCalendarFill style={{ marginLeft: "6rem" }} />{" "}
    </label>
  ));

  return (
    <>
      <Navbarcomp />
      <div className="container-fluid mt-3" style={{ marginLeft: "3rem" }}>
        <div className="row justify-content-between">
          <div className="col-sm-5" style={{ fontSize: "2rem" }}>
            <span className="submitsheet1">User Name</span>
            <span className="submitsheet1">Add Time Sheet</span>
          </div>

          <div className="col-sm-3">
            <div className="d-flex">
              <div className="subsheet1btn">
                <Button style={{ fontSize: "1.4rem" }} variant="warning">
                  Save
                </Button>
              </div>
              <div className="subsheet1btn">
                <Button style={{ fontSize: "1.4rem" }} variant="success">
                  Submit
                </Button>
              </div>
              <div className="subsheet1btn">
                <Button style={{ fontSize: "1.4rem" }} variant="light">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="mb-3 row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontSize: "19px" }}
            >
              Select Placement
            </label>
            <div className="col-sm-5">
              <select
                className="form-select"
                onChange={(e) => setJobCode(e.target.value)}
                value={jobCode}
                style={{ fontSize: "19px", border: "none" }}
              >
                <option value="0">Zero</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-sm-2">
              <Button
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  backgroundColor: "#a992e2",
                  margin: "2px 0",
                }}
                variant="light"
              >
                View Details
              </Button>
            </div>
          </div>

          <div className="mb-3 row mt-3" style={{ fontSize: "19px" }}>
            <label className="col-sm-3 mt-3 col-form-label">Select Dates</label>
            <div
              className="col-sm-7 mt-3"
              style={{ height: "10px", width: "10px" }}
            >
              <DatePicker
                selected={selectDate}
                onChange={(date) => {
                  setSelectDate(date);
                  dateChangeHandler(date);
                }}
                dateFormat="dd/MM/yy"
                customInput={<CustomInput />}
              />

              <button
                style={{
                  fontSize: "2rem",
                  marginLeft: "2rem",
                  border: "none",

                  backgroundColor: "transparent",
                }}
              >
                <GrAttachment />
              </button>
              <span style={{ fontSize: "1.5rem" }}>Attachment</span>
            </div>
          </div>

          <div className="mb-3 mt-4 row" style={{ fontSize: "19px" }}>
            <label className="col-sm-3 mt-3 col-form-label">Comments</label>
            <div className="col-sm-5 mt-3">
              <textarea cols="80" rows="4"></textarea>
            </div>
          </div>

          <div className="mb-3 row" style={{ fontSize: "19px" }}>
            <label className="col-sm-3  mt-3 col-form-label align-content-center">
              Signature
            </label>
            <div className="col-sm-5 mt-3">
              <input type="text" disabled />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div className="row" style={{ margin: "3rem 0 0 0" }}>
          <div className="col-sm-10">
            <ul className="submittabledetails">
              <li className="submittable">
                <span style={{ color: "#d8d9da" }}>
                  <BsSun />
                </span>{" "}
                WEEKENDS
              </li>
              <li className="submittable">
                <span style={{ color: "#f4e591" }}>
                  <BsSun />
                </span>{" "}
                DRAFT
              </li>
              <li className="submittable">
                <span style={{ color: "#24ccf6" }}>
                  <BsSun />
                </span>{" "}
                SUBMITTED
              </li>
              <li className="submittable">
                <span style={{ color: "#70ca63" }}>
                  <BsSun />
                </span>{" "}
                APPROVED
              </li>
              <li className="submittable">
                <span style={{ color: "#ff0000" }}>
                  <BsSun />
                </span>{" "}
                REJECTED
              </li>
              <li className="submittable">
                <span style={{ color: "#ad9a88" }}>
                  <BsSun />
                </span>{" "}
                JOB INACTIVE
              </li>
              <li className="submittable">
                <span style={{ color: "#a992e2" }}>
                  <BsSun />
                </span>{" "}
                Leave
              </li>
            </ul>
          </div>

          <div className="col  align-self-end">
            <button type="button" className="btn btn-info cleartimesheetbtn">
              Clear TimeSheet
            </button>
            <ReactToExcel
              className="btn btn-primary ml-2"
              table="table-to-xls"
              filename="excelFile"
              sheet="sheet 1"
              buttonText="EXPORT"
            />
            <ExportCSV csvData={"table"} fileName={"excelFile"} />
          </div>
        </div>

        <div
          className="row container d-flex"
          style={{ margin: "1.5rem 5rem ", fontSize: "13px" }}
        >
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#a992e2" }}
            >
              TOTAL
            </p>
            <span className="submittimesheettvalue">
              {addTwoTime(stdTimeCalculator, timeOffCalculator)}
            </span>
          </div>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#70ca63" }}
            >
              BILLABLE
            </p>
            <span className="submittimesheettvalue">{stdTimeCalculator}</span>
          </div>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#f4e591" }}
            >
              STANDARD
            </p>
            <span className="submittimesheettvalue">{stdTimeCalculator}</span>
          </div>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#24ccf6" }}
            >
              TIME OFF
            </p>
            <span className="submittimesheettvalue">{timeOffCalculator}</span>
          </div>
        </div>
        <div className="row" style={{ margin: "0 5rem" }}>
          <form>
            <table className="table table-bordered" id="table-to-xls">
              <tbody>
                <tr style={{ fontSize: "1.6rem" }}>
                  <th style={{ fontSize: "2rem", textAlign: "center" }}>
                    Week 1
                  </th>
                  <td>Mon</td>
                  <td>Tue</td>
                  <td>Wed</td>
                  <td>Thu</td>
                  <td>Fri</td>
                  <td>Sat</td>
                  <td>Sun</td>
                  <td
                    rowSpan="2"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    Total Hours Per Item
                  </td>
                </tr>

                <tr style={{ fontSize: "1.6rem" }}>
                  <td>Pay Classification</td>
                  <td> {cal[0]} </td>
                  <td> {cal[1]} </td>
                  <td> {cal[2]} </td>
                  <td> {cal[3]} </td>
                  <td> {cal[4]} </td>
                  <td> {cal[5]} </td>
                  <td> {cal[6]} </td>
                </tr>
                <tr style={{ fontSize: "1.6rem" }}>
                  <td>Standard Time</td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="monstdtime"
                      autoComplete="off"
                      value={stdTime.monstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="tuestdtime"
                      autoComplete="off"
                      value={stdTime.tuestdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="wedstdtime"
                      autoComplete="off"
                      value={stdTime.wedstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="thustdtime"
                      autoComplete="off"
                      value={stdTime.thustdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="fristdtime"
                      autoComplete="off"
                      value={stdTime.fristdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="satstdtime"
                      autoComplete="off"
                      value={stdTime.satstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      name="sunstdtime"
                      autoComplete="off"
                      value={stdTime.sunstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      name="totatimestd"
                      autoComplete="off"
                      value={stdTimeCalculator}
                      disabled
                    />
                  </td>
                </tr>
                <tr style={{ fontSize: "1.6rem" }}>
                  <td>Time Off</td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="montimeoff"
                      autoComplete="off"
                      value={timeOff.montimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="tuetimeoff"
                      autoComplete="off"
                      value={timeOff.tuetimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="wedtimeoff"
                      autoComplete="off"
                      value={timeOff.wedtimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="thutimeoff"
                      autoComplete="off"
                      value={timeOff.thutimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="fritimeoff"
                      autoComplete="off"
                      value={timeOff.fritimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="sattimeoff"
                      autoComplete="off"
                      value={timeOff.sattimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="suntimeoff"
                      autoComplete="off"
                      value={timeOff.suntimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="totatimestd"
                      autoComplete="off"
                      value={timeOffCalculator}
                      disabled
                    />
                  </td>
                </tr>
                <tr style={{ fontSize: "1.6rem" }}>
                  <td>Total Billable Hours</td>
                  <td>{stdTime.monstdtime}</td>
                  <td>{stdTime.tuestdtime}</td>
                  <td>{stdTime.wedstdtime}</td>
                  <td>{stdTime.thustdtime}</td>
                  <td>{stdTime.fristdtime}</td>
                  <td>{stdTime.satstdtime}</td>
                  <td>{stdTime.sunstdtime}</td>
                  <td>{stdTimeCalculator}</td>
                </tr>
                <tr style={{ fontSize: "1.6rem" }}>
                  <td>Total Hours</td>
                  <td>{addTwoTime(stdTime.monstdtime, timeOff.montimeoff)}</td>
                  <td>{addTwoTime(stdTime.tuestdtime, timeOff.tuetimeoff)}</td>
                  <td>{addTwoTime(stdTime.wedstdtime, timeOff.wedtimeoff)}</td>
                  <td>{addTwoTime(stdTime.thustdtime, timeOff.thutimeoff)}</td>
                  <td>{addTwoTime(stdTime.fristdtime, timeOff.fritimeoff)}</td>
                  <td>{addTwoTime(stdTime.satstdtime, timeOff.sattimeoff)}</td>
                  <td>{addTwoTime(stdTime.sunstdtime, timeOff.suntimeoff)}</td>
                  <td>{addTwoTime(stdTimeCalculator, timeOffCalculator)}</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
