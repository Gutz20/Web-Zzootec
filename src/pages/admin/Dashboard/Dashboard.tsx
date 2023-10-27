import {
  dataPieChartWithCustomizedLabel,
  dataScatterAndLineOfBestFit,
  dataSimpleBarChart,
  dataSpecifiedDomainRadarChart,
} from "@/helpers/dataGraphics";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Rectangle,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type renderTypeCustom = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: renderTypeCustom) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard = () => {

  return (
    <div>
      <h2 className="text-4xl font-bold">Dashboard</h2>

      <div className="grid grid-cols-2">
        {/* Grafico 1 */}
        <div>
          <BarChart
            width={500}
            height={300}
            data={dataSimpleBarChart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </div>
        {/* Grafico 2 */}
        <div>
          <ComposedChart
            width={500}
            height={400}
            data={dataScatterAndLineOfBestFit}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />

            <XAxis
              dataKey="index"
              type="number"
              label={{
                value: "Index",
                position: "insideBottomRight",
                offset: 0,
              }}
            />
            <YAxis
              unit="ms"
              type="number"
              label={{ value: "Time", angle: -90, position: "insideLeft" }}
            />
            <Scatter name="red" dataKey="red" fill="red" />
            <Scatter name="blue" dataKey="blue" fill="blue" />
            <Line
              dataKey="blueLine"
              stroke="blue"
              dot={false}
              activeDot={false}
              legendType="none"
            />
            <Line
              dataKey="redLine"
              stroke="red"
              dot={false}
              activeDot={false}
              legendType="none"
            />
          </ComposedChart>
        </div>
        {/* Grafico 3 */}
        <div>
          <PieChart width={400} height={400}>
            <Pie
              data={dataPieChartWithCustomizedLabel}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataPieChartWithCustomizedLabel.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        {/* Grafico 4 */}
        <div>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={dataSpecifiedDomainRadarChart}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="DOTAWC3.com"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="TheAlpaka"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
