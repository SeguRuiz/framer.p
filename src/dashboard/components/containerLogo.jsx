import * as React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../Img/LogoStocksafe.png";

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "8px",
});

export default function LogoComponent() {
  return (
    <div>
      <LogoContainer>
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: 215, height: 56, objectFit: "contain" }}
        />
      </LogoContainer>
    </div>
  );
}
