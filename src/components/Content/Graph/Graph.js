import { chart } from "./data";

function Graph({ children, type }) {

    const chartObject = getChartObject(type);

    return (

        <div id="chart">
            {children(chartObject.options, chartObject.series)}
        </div>
    );
}

const getChartObject = type => {
    switch (type) {
        case "bar": return chart.chartBar;
        case "pie": return chart.chartpie;
        case "area": return chart.chartarea;
        case "doubleBar" : return chart.chartDoublebar;
    }
}

export default Graph;