import {
  Button,
  Layout,
  List,
  Menu,
  Typography,
  theme,
} from "antd";
import { DownOutlined, UpOutlined, LogoutOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResultsList } from "./SearchBar/SearchResultList";
const { Header, Content, Footer } = Layout;

const App = () => {
  const options = [
    {
      value: "Head",
      label: "Head",
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
      value: "Lower Limb",
      label: "Lower Limb",
      children: [
        {
          value: "Ankle",
          label: "Ankle",
          children: [
            {
              value: "Discover All Cases Tagged With Ankle",
              label: "Discover All Cases Tagged With Ankle",
            },
            {
              value: "Sprain",
              label: "Sprain",
            },
            {
              value: "Strain",
              label: "Strain",
            },
            {
              value: "Crushing Injury",
              label: "Crushing Injury",
            },
            {
              value: "Fracture",
              label: "Fracture",
            },
            {
              value: "Tear to Tendon",
              label: "Tear to Tendon",
            },
            {
              value: "Tear to Ligament",
              label: "Tear to Ligament",
            },
          ],
        },
        {
          value: "Discover All Cases Tagged With Lower Limb",
          label: "Discover All Cases Tagged With Lower Limb",
        },
        {
          value: "Upper Leg",
          label: "Upper Leg",
        },
        {
          value: "Knee",
          label: "Knee",
        },
        {
          value: "Lower Leg",
          label: "Lower Leg",
        },
        {
          value: "Foot, Heel, and Toes",
          label: "Foot, Heel, and Toes",
        },
        {
          value: "Confusion, Abrasion, Laceration, Scars",
          label: "Confusion, Abrasion, Laceration, Scars",
        },
        {
          value: "Loss of Limbs, Leg or Foot Amputation",
          label: "Loss of Limbs, Leg or Foot Amputation",
        },
        {
          value: "Other Lower Limb Injuries",
          label: "Other Lower Limb Injuries",
        },
      ],
    },
    {
      value: "Neck and Cervical Spine",
      label: "Neck and Cervical Spine",
    },
    {
      value: "Back, Thoracic and Lumbar Spine",
      label: "Back, Thoracic and Lumbar Spine",
    },
    {
      value: "Upper Limb",
      label: "Upper Limb",
    },
    {
      value: "Neck and Cervical Spine",
      label: "Neck and Cervical Spine",
    },
    {
      value: "Neck and Cervical Spine",
      label: "Neck and Cervical Spine",
    },
  ];

  const [selectedItem1, setSelectedItem1] = useState();
  const [selectedItem2, setSelectedItem2] = useState();
  const [selectedItem3, setSelectedItem3] = useState();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [results, setResults] = useState([]);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);

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
  const handleSearch = () => {
    // Perform the search logic here

    // After the search is completed, set the searchCompleted state to true
    setSearchCompleted(true);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    console.log();
  });
  return (
    <Layout className="layout">
      {/* <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Căn phần tử phía trái và phải
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: "Home" },
            { key: "2", label: "About" },
            { key: "3", label: "Services" },
            { key: "4", label: "Contact" },
          ]}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button type="text" danger icon={<LogoutOutlined />}>
            Sign Out
          </Button>
        </div>
      </Header> */}
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Typography.Title level={4}>
          Discover Cases By Nature Of Injury
        </Typography.Title>
        <Button type="text" onClick={toggleSearchInput}>
          Other Search Options {toggleIcon ? <UpOutlined /> : <DownOutlined />}{" "}
          {/* Toggle the icon */}
        </Button>
        {showSearchInput && (
          <div>
            <SearchBar setResults={setResults} onSearch={handleSearch} />
            <SearchResultsList
              results={results}
              isSearchCompleted={searchCompleted}
            />
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
              header={<div>Level 1</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={options}
              renderItem={(item) => (
                <List.Item
                  onMouseEnter={() => onChange1(item)}
                  style={{ cursor: "pointer" }}
                >
                  <Typography.Text mark>[ICON]</Typography.Text> {item.value}
                </List.Item>
              )}
            />
            {selectedItem1 && (
              <List
                className="col-4"
                header={<div>Level 2</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={selectedItem1.children}
                renderItem={(item) => (
                  <List.Item
                    onMouseEnter={() => onChange2(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Typography.Text mark>[ICON]</Typography.Text>{" "}
                    {item.value}
                  </List.Item>
                )}
              />
            )}
            {selectedItem2 && (
              <List
                className="col-4"
                header={<div>Level 3</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={selectedItem2.children}
                renderItem={(item) => (
                  <List.Item
                    onMouseEnter={() => onChange3(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Typography.Text mark>[ICON]</Typography.Text>{" "}
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
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
