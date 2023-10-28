import React from "react";
import { PrimaryButton, Stack } from "@fluentui/react";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        horizontal
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          listStyle: "none",
          fontSize: "1.2em",
          fontWeight: "bold",
          border: "1px solid black",
          padding: "1em",
          backgroundColor: "white",
        }}
      >
        <PrimaryButton iconProps={{ iconName: "Home" }}>Home</PrimaryButton>
        <PrimaryButton iconProps={{ iconName: "Info" }}>About Us</PrimaryButton>
        <PrimaryButton iconProps={{ iconName: "Repair" }}>
          Services
        </PrimaryButton>
        <PrimaryButton iconProps={{ iconName: "Mail" }}>
          Contact Us
        </PrimaryButton>
        <PrimaryButton iconProps={{ iconName: "UserOptional" }}>
          Login/Signup
        </PrimaryButton>
      </Stack>
    </nav>
  );
}
