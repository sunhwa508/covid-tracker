import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, active, total, isRed, isGreen, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"}
       ${isGreen && "infoBox--isGreen"} 
       ${isRed && "infoBox--isRed"}`}
    >
      <CardContent>
        {/* title coronavirus*/}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* Number of cases */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        {/* 1.2M Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} 📈
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
