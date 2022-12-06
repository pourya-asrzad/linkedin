import React from "react";
import PieChartUsers from "../PieChartUsers/PieChartUsers";
import Styles from "./MainHome.module.css";
import PieChartWithPaddingAngle from "../PieChartWithPaddingAngle/PieChartWithPaddingAngle";
import BarChartStackedBySign from "../BarChartStackedBySign/BarChartStackedBySign";
import HighlightAndZoomLineChart from "../HighlightAndZoomLineChart/HighlightAndZoomLineChart";
const MainHome = () => {
  return (
    <div className={Styles.MainHome}>
      <div className={Styles.MainHometop}>
        <PieChartUsers />
        <PieChartWithPaddingAngle />
      </div>
      <div style={{ height: "17rem", marginTop: "2rem" }}>
        <BarChartStackedBySign />
      </div>
      <div style={{ height: "17rem", marginTop: "2rem" }}>
        <HighlightAndZoomLineChart />
      </div>
    </div>
  );
};

export default MainHome;
