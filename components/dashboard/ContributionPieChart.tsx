import React from "react";
import {
  Typography,
  PieChart,
  Legend,
  Pie,
  Cell,
  ChartTooltip,
  ResponsiveContainer,
} from "@/components/index";
const pieColor = ["#002366", "#6E101B", "#7B7112"];
const pieData = [
  {
    id: 1,
    name: "Verified contributions",
    value: 100,
  },
  {
    id: 2,
    name: "Unverified contributions",
    value: 200,
  },
  {
    id: 3,
    name: "Dublicate contributions",
    value: 170,
  },
];

const ContributionPieChart = () => {
  return (
    <div className="relative w-full rounded-lg border border-gray-100 px-8 py-6 shadow-md">
      <div className="flex h-[270px] w-full flex-col items-center justify-center">
        <Typography
          variant="body1"
          className="bg-transparent font-outfit text-xl font-bold text-gray-700 md:text-2xl"
        >
          Not enough data
        </Typography>
        <div
          className="absolute inset-0 flex w-full items-center opacity-5"
          style={{
            width: "100%",
            height: 270,
          }}
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                innerRadius={30}
                paddingAngle={5}
                // fill='#8884d8'
                label
                width={400}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColor[index]} />
                ))}
              </Pie>
              <ChartTooltip />
              <Legend
                payload={[
                  {
                    id: "1",
                    value: "Verified contributions",
                    type: "circle",
                    color: "#002366",
                  },
                  {
                    id: " 2",
                    value: "Unverified contributions",
                    type: "circle",
                    color: "#6E101B",
                  },
                  {
                    id: "3",
                    value: "Dublicate contributions",
                    type: "circle",
                    color: "#7B7112",
                  },
                ]}
                formatter={(value, entry) => {
                  return (
                    <span
                      className={`font-outfit text-xs font-medium md:text-sm text-[${entry.color}]`}
                    >
                      {value}
                    </span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ContributionPieChart;
