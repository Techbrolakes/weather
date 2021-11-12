import React, { useState } from "react";
import styled from "styled-components";
import DisplayWeather from "./components/DisplayWeather";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=3684c2f87ef57d6a97bf0acdf918a55c`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <Container>
      <Heading>
        <h1>Lakeside Weather</h1>
      </Heading>
      <br />
      <Form>
        <input
          autoComplete="off"
          type="text"
          placeholder="Select City"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <input
          autoComplete="off"
          type="text"
          placeholder="Select Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <Button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </Button>
      </Form>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </Container>
  );
}

export default Weather;

const Container = styled.div`
  width: 100vw;
`;

const Heading = styled.div`
  text-align: center;
  @media all and (min-width: 320px) and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Form = styled.div`
  text-align: center;

  input[type="text"] {
    padding: 10px;
    margin: 0 10px;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    border: none;
    border-radius: 10px;
    font-size: 18px;

    @media all and (min-width: 320px) and (max-width: 600px) {
      margin: 20px 5px;
    }
  }
`;

const Button = styled.div`
  height: 40px;
  cursor: pointer;
  border-radius: 100px;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  text-align: center;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  text-transform: uppercase;
  margin: 20px auto;
  transition: all 0.4s ease-in;
  :hover {
    background-color: #dc2730;
    opacity: 0.8;
  }
`;
