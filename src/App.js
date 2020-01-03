import React, { Fragment, useState } from "react";

const currentDate = new Date();

const p1from = new Date("September 2, 2019");
const p1to = new Date("November 11, 2019");

const p2from = new Date("November 18, 2019");
const p2to = new Date("February 7, 2020");

const p3from = new Date("February 10, 2020");
const p3to = new Date("April 24, 2020");

const p4from = new Date("April 4, 2020");
const p4to = new Date("July 10, 2020");

// Onderwijsperiode 1	02-09-2019	15-11-2019
// Onderwijsperiode 2 18-11-2019	07-02-2020
// Onderwijsperiode 3	10-02-2020	24-04-2020
// Onderwijsperiode 4	04-05-2020	10-07-2020

// Method credit goes to: jonschlinkert & Dafrok @Github
function currentWeek(date) {
  date = date instanceof Date ? date : new Date();
  var first = new Date(date.getFullYear(), 0, 1);
  var diff = (date - first) / 86400000;
  var days = diff + first.getDay();
  return Math.floor(days / 7) + 1;
}

// function SchoolWeek() {
//   var startDate = new Date(`November 23, 2019`);
//   var diff = (currentDate - startDate) / 86400000;
//   var days = diff + startDate.getDay();
//   return Math.floor(days / 7) + 1;
// }

export default function App() {
  const [schoolWeek, setSchoolWeek] = useState();

  // function getWeek() {
  //   var diff = (currentDate - from) / 86400000;
  //   var days = diff + from.getDay();
  //   console.log(Math.floor(days / 7) + 1);
  //   result = Math.floor(days / 7) + 1;
  //   setSchoolWeek(result);
  // }

  function difference(periode) {
    var from, to;
    var result = "Empty";
    if (periode === 1) {
      from = p1from;
      to = p1to;
    }
    if (periode === 2) {
      from = p2from;
      to = p2to;

      var fDate, lDate, cDate;
      fDate = Date.parse(from);
      lDate = Date.parse(to);
      cDate = Date.parse(currentDate);

      if (cDate <= lDate && cDate >= fDate) {
        var diff = (currentDate - from) / 86400000;
        var days = diff + from.getDay();
        console.log(Math.floor(days / 7) + 1);
        result = Math.floor(days / 7) + 1;
        setSchoolWeek(result);
      } else {
        setSchoolWeek(result);
      }
    }
    if (periode === 3) {
      from = p3from;
      to = p3to;
    }
    if (periode === 4) {
      from = p4from;
      to = p4to;
    }
    console.log("clicked on a button");
    // var from = new Date("November 18, 2019");
    // var to = new Date("February 7, 2020");

    // var fDate, lDate, cDate;
    // fDate = Date.parse(from);
    // lDate = Date.parse(to);
    // cDate = Date.parse(inputDate);

    // if (cDate <= lDate && cDate >= fDate) {
    //   console.log("true");
    //   return true;
    // }
    // console.log("false");
    // return false;
  }
  return (
    <Fragment>
      <p>Huidige week: {currentWeek()}</p>
      <p>{schoolWeek}</p>
      <button
        onClick={() => {
          difference(1);
        }}
      >
        Periode één
      </button>
      <button
        onClick={() => {
          difference(2);
        }}
      >
        Periode twee
      </button>
      <button
        onClick={() => {
          difference(3);
        }}
      >
        Periode drie
      </button>
      <button
        onClick={() => {
          difference(4);
        }}
      >
        Periode vier
      </button>
    </Fragment>
  );
}
