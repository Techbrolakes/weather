import React from "react";
import styled from "styled-components";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <Container>
      {data.cod != 404 ? (
        <React.Fragment>
          <Card>
            <CardLocation>
              <span>
                The weather in {data.name} , {data.sys.country}.
              </span>
              <span> As of {new Date().toLocaleTimeString()} is</span>
            </CardLocation>
            <CardIcon>
              <div>
                <h1>
                  {Math.floor(data.main.temp - 273.15)}
                  <sup>o</sup>
                </h1>
              </div>
              <div>
                <span>{data.weather[0].main}</span>
                <img src={iconurl} alt="weather" />
                <span> {data.weather[0].description}</span>
              </div>
            </CardIcon>
          </Card>

          <TempInfo>
            <div>
              <Info>
                {" "}
                <h4>High/Low</h4>
                <span>
                  {Math.floor(data.main.temp_max - 273.15)}/
                  {Math.floor(data.main.temp_min - 273.15)}
                </span>
              </Info>
              <Info>
                {" "}
                <h4>Humidity</h4>
                <span>{data.main.humidity} %</span>
              </Info>

              <Info>
                {" "}
                <h4>Pressure</h4>
                <span>{data.main.pressure} hPa</span>
              </Info>
              <Info>
                {" "}
                <h4>Visibility</h4>
                <span>{data.visibility / 1000} Km</span>
              </Info>
            </div>

            <div>
              <Info>
                <h4>Wind</h4>
                <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
              </Info>
              <Info>
                <h4>Wind Direction</h4>
                <span>
                  {data.wind.deg}
                  <sup>o</sup> deg
                </span>
              </Info>
              <Info>
                <h4>Sunrise</h4>
                <span>
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
              </Info>
              <Info>
                <h4>Sunset</h4>
                <span>
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                </span>
              </Info>
            </div>
          </TempInfo>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </Container>
  );
}

export default DisplayWeather;

const Container = styled.div`
  width: 70vw;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 22px 30px;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
const Card = styled.div`
  margin: 0 auto;
  border-bottom: 2px solid black;
`;
const CardLocation = styled.div`
  text-align: center;
`;
const CardIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  margin: 0 auto;
  text-align: center;

  @media all and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const TempInfo = styled.div`
  display: flex;
  justify-content: space-around;

  @media all and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  border-bottom: 1px solid black;

  @media all and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    width: 90vw;
    justify-content: center;
  }
  @media screen and (min-width: 601px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
`;
