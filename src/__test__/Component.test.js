import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount } from "enzyme";

import { CelFah } from "../components/card/CelFah";
import { CELCIUS, FAHRENHEIT } from "../components/store/types";

import { WeatherCard } from "../components/card/WeatherCard";
import cardData from "./card.sample.data";
import { Provider } from "react-redux";
import store from "../components/store/store";

import configureStore from "redux-mock-store"; //ES6 modules

Enzyme.configure({ adapter: new Adapter() });

describe("CelFah component test", () => {
  test("unit prop CELCIUS test", () => {
    const wrapper = shallow(<CelFah unit={CELCIUS} />);
    expect(wrapper.text()).toBe("℃");
  });
  test("unit prop FAHRENHEIT test", () => {
    const wrapper = shallow(<CelFah unit={FAHRENHEIT} />);
    expect(wrapper.text()).toBe("℉");
  });
});

describe("Weather Card test unit:CELCIUS", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <WeatherCard card={cardData} unit={CELCIUS} />
      </Provider>
    );
  });
  test("Should render date correctly", () => {
    expect(wrapper.find(".makeStyles-date-3").first().text()).toEqual(
      "6 August 2021"
    );
  });
  test("Should render temperature correctly", () => {
    expect(wrapper.find(".makeStyles-temperature-4").first().text()).toEqual(
      "20.08 ℃"
    );
  });

  test("Should render minimum temperature correctly", () => {
    expect(wrapper.find(".makeStyles-minMax-5").first().text()).toEqual(
      "Min 20.08 ℃"
    );
  });
  test("Should render maximum temperature correctly", () => {
    expect(wrapper.find(".makeStyles-minMax-5").last().text()).toEqual(
      "Max 20.37 ℃"
    );
  });
});

describe("Weather Card test unit:FAHRENHEIT", () => {
  let wrapper;
  beforeEach(() => {
    const mockStore = configureStore([]);
    const store = mockStore({ unit: FAHRENHEIT });
    wrapper = mount(
      <Provider store={store}>
        <WeatherCard card={cardData} unit={FAHRENHEIT} />
      </Provider>
    );
  });


      test("Should render date correctly", () => {
        expect(wrapper.find(".makeStyles-date-3").first().text()).toEqual(
          "6 August 2021"
        );
      });
      test("Should render temperature correctly",()=>{
        expect(wrapper.find(".makeStyles-temperature-4").first().text()).toEqual(
            "68.14 ℉"
          );
      })

      test("Should render minimum temperature correctly",()=>{
          expect(wrapper.find(".makeStyles-minMax-5").first().text()).toEqual("Min 68.14 ℉")
      })
      test("Should render maximum temperature correctly",()=>{
        expect(wrapper.find(".makeStyles-minMax-5").last().text()).toEqual("Max 68.67 ℉")
    })
});
