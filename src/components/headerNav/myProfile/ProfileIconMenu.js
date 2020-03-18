import React, { useState, useEffect, Component } from "react";
import { Menu, Button, Popup, Image } from "semantic-ui-react";
import dbAPI from "../../../modules/dbAPI";


const ProfileIconMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [user, setUser] = useState();
    const userId = sessionStorage.getItem('sessionToken')
    
    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
      };

    // dbAPI.getAllByClassName("Session").then(response=>{
    //     const userObj = {
    //         username: response.attributes.username,
    //         id: response.id
    //     }
    //     setUser(userObj)
    // })
    
    return (
        <Menu inverted>
          <Menu.Item>
            <Menu.Header>Welcome!</Menu.Header>
          </Menu.Item>
          <Menu.Item id="user-icon-container">
            <Popup
              position="top right"
              wide
              trigger={
                <Image
                  size="mini"
                  circular
                  id="user-icon"
                  icon="user circle outline"
                  onClick={() => {
                    toggleMenu();
                  }}
                />
              }
              on="click"
              open={menuIsOpen}
            >
              <Menu size="mini" inverted vertical>
                <Menu.Item
                  id="settings"
                >
                  Settings
                </Menu.Item>
                <Menu.Item
                  id="logout"
                  onClick={dbAPI.logOut()}
                >
                  Logout
                </Menu.Item>
              </Menu>
            </Popup>
          </Menu.Item>
        </Menu>

    );
};

export default ProfileIconMenu;