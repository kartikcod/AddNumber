import React from "react";
import {
  Box,
  Button,
  Container,
  Input,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Boxcontainer = styled(Box)`
  max-width: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20vh;
  gap: 20px;
  border-radius: 5%;
`;
const Inputbox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 10vh;
  border: none;
`;

const Footer = styled(Box)`
  transform: translateY(5vh);
`;

export const Home = () => {
  const [firstNumber, setfirstNumber] = useState();
  const [secondNumber, setsecondNumber] = useState();
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    setTotal(Number(firstNumber) + Number(secondNumber));
  }

  function pageRefresh() {
    window.location.reload(false);
  }
  return (
    <>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Boxcontainer>
          <Typography
            style={{
              color: "#42a2da",
              fontSize: "5vh",
              fontFamily: "sans-serif",
            }}
          >
            AddNumber
          </Typography>
          <Inputbox>
            <label
              htmlFor="Number"
              style={{
                color: "white",
                marginBottom: "20px",
                fontFamily: "sans-serif",
              }}
            >
              First Number
            </label>
            <input
              type="Number"
              name="Number"
              value={firstNumber}
              onChange={(e) => setfirstNumber(e.target.value)}
              placeholder="Enter the Number"
              style={{ height: "50vh", border: "none", padding: "10px" }}
              required
            />
          </Inputbox>
          <Inputbox>
            <label
              htmlFor="Number"
              style={{
                color: "white",
                marginBottom: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Second Number
            </label>
            <input
              type="Number"
              name="Number"
              value={secondNumber}
              onChange={(e) => setsecondNumber(e.target.value)}
              placeholder="Enter the Number"
              style={{
                height: "10vh",
                border: "1px solid #356cb8",
                padding: "10px",
              }}
              required
            />
          </Inputbox>
          <Footer>
            <Button variant="contained" onClick={calculateTotal}>
              Submit
            </Button>
            <Button onClick={pageRefresh}>Refresh</Button>
          </Footer>
          <Typography style={{ color: "#fff", marginTop: "30px" }}>
            Total : {total}
          </Typography>
        </Boxcontainer>
      </Container>
    </>
  );
};
