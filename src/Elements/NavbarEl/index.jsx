import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { Dropdown, Menu } from "antd";
import {
  MenuOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./NavbarEl.css";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Function to handle scroll and set fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const HitSampraday = (
    <Menu>
      <Menu.Item
        key="1"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday">Shri Hit Harivansh Mahaprabhu ji</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday"> Shri Radhavallabh ji</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday">Vanshvali</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday">Temple History</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday">Ashthyam Seva</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday">Hit Rasriti</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sampraday">Hit Sant Darshan</Link>
      </Menu.Item>
    </Menu>
  );
  const HitSahitya = (
    <Menu>
      <Menu.Item
        key="1"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya"> Hit Chaurasi ji</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya">Sfut Vani ji</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya">Shri Radhasudhanidhi ji</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya"> Shri Yamunakataksha</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya"> Sevak Vani</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya"> Byalees leela</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/hit-sahitya"> Q&A </Link>
      </Menu.Item>
    </Menu>
  );
  const UtsavaPad = (
    <Menu>
      <Menu.Item
        key="1"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad">Hitotsava</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad">Yamunaji Mahotsav</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad">Jal Vihar Nauka Utsav</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad">Guru Purnima</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad"> Haryali teej & Singhara</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad"> Jhulan Utsav</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad"> janamasthami</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad"> radhasthami</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/utsav-pad">Sanjhi Utsav</Link>
      </Menu.Item>
    </Menu>
  );

  const BrajDarshan = (
    <Menu>
      <Menu.Item
        key="1"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan">Hit Harivansh Mahaprabhu ji Temple</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan">Hit Radhvallabh lal ji temple</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan">Shri Banke Bihari ji Temple</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan">Shri Radha Raman lal ji temple</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan"> Sewa kunj</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan"> Baad Gram</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan"> Mansarovar</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan"> Vanshi Vat</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/braj-darshan"> Barsana</Link>
      </Menu.Item>
    </Menu>
  );

  const SantDarshan = (
    <Menu>
      <Menu.Item
        key="1"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan">Hi Harivansh Mahaprabhu ji</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan">Hit Sewak Ji Maharaj</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan"> Hit Dhriv Das ji</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan"> Shri Hariram Vyas ji</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan">Shri Haridas ji</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan"> Chacha Vrindavan Das ji</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan">Neh Nagri Das Ji</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/sant-darshan">Hit Vanchandra Ji</Link>
      </Menu.Item>
    </Menu>
  );

  const SocialActivity = (
    <Menu>
      <Menu.Item
        key="1"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/social-activity">Gau Seva</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/social-activity">Vashtra Vitaran</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/social-activity">Green Climate</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/social-activity">Sant Sewa</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="py-3"
        style={{
          backgroundColor: "#FABC3F",
          color: "white",
          marginBottom: "6px",
          padding: "5px 20px",
        }}
      >
        <Link to="/social-activity">Braj Lata Pata Sewa</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <nav
      className={`flex justify-between items-center px-3  shadow-lg navBarTop w-100  ${
        isScrolled ? "fixed top-0 left-0 z-50" : "relative"
      }`}
      style={{
        backgroundColor: "#FABC3F",
        color: "white",
        marginBottom: "1px",
        userSelect: "none",
      }}
    >
      <div>
        <Link to="/" className="" style={{ boxShadow: "none" }}>
          <img src="/logo.png" width="80px" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <ul className="flex gap-4 items-center justify-center text-white">
          <li>
            {/* <Link to="/" style={{ textDecoration: "none" }}>Home</Link> */}
          </li>
          <li>
            <Dropdown overlay={HitSampraday} trigger={["hover"]}>
              <Link to="/hit-sampraday" style={{ textDecoration: "none" }}>
                Radhavallabh Sampraday
              </Link>
            </Dropdown>
          </li>
          <li>
            <Dropdown overlay={HitSahitya} trigger={["hover"]}>
              <Link to="/hit-sahitya" style={{ textDecoration: "none" }}>
                Hit Sahitya
              </Link>
            </Dropdown>
          </li>
          <li>
            <Dropdown overlay={UtsavaPad} trigger={["hover"]}>
              <Link to="/utsav-pad" style={{ textDecoration: "none" }}>
                Utsava Pad
              </Link>
            </Dropdown>
          </li>
          <li>
            <Dropdown overlay={BrajDarshan} trigger={["hover"]}>
              <Link to="/braj-darshan" style={{ textDecoration: "none" }}>
                Braj Darshan
              </Link>
            </Dropdown>
          </li>
          <li>
            <Dropdown overlay={SantDarshan} trigger={["hover"]}>
              <Link to="/sant-darshan" style={{ textDecoration: "none" }}>
                Sant Darshan
              </Link>
            </Dropdown>
          </li>
          <li>
            <Dropdown overlay={SocialActivity} trigger={["hover"]}>
              <Link to="/social-activity">
                <span>
                  <img
                    src="/seva.png"
                    width="50px"
                    alt="Social Activity"
                    style={{ boxShadow: "none" }}
                  />
                </span>
              </Link>
            </Dropdown>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="HamburgerDiv">
        <MenuOutlined className="hamburgerIcon" onClick={showDrawer} />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        open={drawerVisible}
        onClose={closeDrawer}
        closable
        bodyStyle={{
          backgroundColor: "#FABC3F",
          padding: "20px",
          color: "#fff",
        }}
        headerStyle={{ borderBottom: "none", padding: "2px 0" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2px" }}>
          <img src="/logo.png" width="80px" alt="Logo" />
        </div>
        <div className="drawerNav">
          <ul>
            <li onClick={closeDrawer}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeDrawer}>
              <Link to="/hit-sampraday">Radhavallabh Sampraday</Link>
            </li>
            <li onClick={closeDrawer}>
              <Link to="/hit-sahitya">Hit Sahitya</Link>
            </li>
            <li onClick={closeDrawer}>
              <Link to="/utsav-pad">Utsava Pad</Link>
            </li>
            <li onClick={closeDrawer}>
              <Link to="/braj-darshan">Braj Darshan</Link>
            </li>
            <li onClick={closeDrawer}>
              <Link to="/sant-darshan">Sant Darshan</Link>
            </li>
            <li onClick={closeDrawer}>
              <Link to="/social-activity">
                Social Activity <img src="/seva.png" width="80px" />
              </Link>
            </li>
            {/* <li>
              <Link to="https://calendly.com/brightnetadsmedia">
                <Button className="custom-button" icon={<CalendarOutlined />}>BOOK APPOINTMENT</Button>
              </Link>
            </li> */}
            <li className="flex gap-2">
              <Link to="">
                <Button className="text-premium-pink">
                  <InstagramOutlined />
                </Button>
              </Link>
              <Link to="">
                <Button className="text-premium-darkGray">
                  <XOutlined />
                </Button>
              </Link>
              <Link to="">
                <Button className="text-premium-blue">
                  <LinkedinOutlined />
                </Button>
              </Link>
              <Link to="">
                <Button className="text-premium-red">
                  <YoutubeOutlined />
                </Button>
              </Link>
              <Link to="">
                <Button className="text-premium-blue">
                  <FacebookOutlined />
                </Button>
              </Link>
            </li>
            <li>
              <h1>
                <b>
                  <PhoneOutlined className="text-premium-green" /> Phone:
                </b>{" "}
                +91 9693245941
              </h1>
            </li>
            <li>
              <h1>
                <b>
                  <MailOutlined className="text-premium-blue" /> Email:
                </b>{" "}
                webitya@gmail.com
              </h1>
            </li>
            <li>
              <h1>
                <b>
                  <BlockOutlined className="text-premium-red" /> Address:
                </b>{" "}
                Ganga nagar Harmu Ranchi, Ranchi Jharkhand
              </h1>
            </li>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
