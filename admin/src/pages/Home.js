import React from "react";

import userData from "../data/userData.json";

import { AdminLayout } from "../layout";
import { Chart, Card } from "../components";

const Home = () => {
  return (
    <AdminLayout>
      <div className="flex flex-wrap items-center justify-between mb-5">
        <Card title="Revenue" qty={(2, 415)} progress={11.4}></Card>
        <Card title="Sales" qty={(4, 415)} progress={1.4}></Card>
        <Card title="Cost" qty={(2, 255)} progress={2.4} up></Card>
      </div>
      <div className="p-5 mb-5 bg-white rounded-lg shadow-xl">
        <Chart
          title="Active User"
          data={userData}
          dataKey="Active User"
        ></Chart>
      </div>
    </AdminLayout>
  );
};

export default Home;
