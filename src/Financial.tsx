import React from "react";
import { Button, Tabs } from "antd";

const { TabPane } = Tabs;

function callback(evt: any) {
  console.log("HEY", evt);
}
const Financial = (props: any) => {
  return (
    <div>
      <Button type="primary">Button</Button>

      <h1>Financial: Hello, {props.name}</h1>

      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Mortgage" key="key1">
          Mortgage!
        </TabPane>
        <TabPane tab="Other" key="key2">
          Other stuff!
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Financial;
