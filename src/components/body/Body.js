import {
  Breadcrumb,
  Button,
  Cascader,
  Input,
  Layout,
  List,
  Menu,
  Typography,
  theme,
} from "antd";
import {DownOutlined, SearchOutlined, UpOutlined} from '@ant-design/icons';
import { useEffect, useRef, useState } from "react";
const { Header, Content, Footer } = Layout;
const App = () => {
  const options = [
    {
      value: "Head",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  const [selectedItem1, setSelectedItem1] = useState();
  const [selectedItem2, setSelectedItem2] = useState();
  const [selectedItem3, setSelectedItem3] = useState();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const onChange1 = (value) => {
    console.log("setSelectedItem1(value):", value);
    setSelectedItem1(value);
  };
  const onChange2 = (value) => {
    setSelectedItem2(value);
  };
  const onChange3 = (value) => {
    setSelectedItem3(value);
  };
  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setToggleIcon(!toggleIcon); // Toggle the icon state
  };
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    console.log();
  });
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Typography.Title level={4}>
            Discover Cases By Nature Of Injury
        </Typography.Title>
        <Button type="text" onClick={toggleSearchInput}>
            Other Search Options {toggleIcon ? <UpOutlined /> : <DownOutlined />} {/* Toggle the icon */}
          </Button>
        {showSearchInput && (
          <div>
            <Input placeholder="Search ICRS" suffix={<SearchOutlined />} />
            <Button type="primary">Advanced Search</Button>
            <Button type="primary">Saved Searches</Button>
          </div>
        )}
        <div
          //   className="site-layout-content "
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="d-flex flex-row row">
            <List
              className="col-4"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={options}
              renderItem={(item) => (
                <List.Item onClick={() => onChange1(item)}>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item.value}
                </List.Item>
              )}
            />
            {selectedItem1 && (
              <List
                className="col-4"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={selectedItem1.children}
                renderItem={(item) => (
                  <List.Item onClick={() => onChange2(item)}>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item.value}
                  </List.Item>
                )}
              />
            )}
            {selectedItem1 && selectedItem2 && (
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                className="col-4"
                bordered
                dataSource={selectedItem2.children ?? []}
                renderItem={(item) => (
                  <List.Item onClick={() => onChange3(item)}>
                    <Typography.Text mark style={{ textAlign: "start" }}>
                      [ITEM]
                    </Typography.Text>{" "}
                    {item.value}
                  </List.Item>
                )}
              />
            )}
          </div>
        </div>
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
