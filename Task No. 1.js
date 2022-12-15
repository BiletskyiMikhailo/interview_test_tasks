const unitsObj = { distance: { unit: "in", value: 3 }, convert_to: "in" };
const arrUnitsObj = unitsObj;

const convertationFunk = (a) => {
  const getMultiplierMET = (convertUnitMET) => {
    switch (convertUnitMET) {
      case "cm":
        return 100;
      case "in":
        return 254;
      case "ft":
        return 3.2;
      case "m":
        return 1;
      default:
        console.log("Can not convert to this unit");
    }
  };

  const getMultiplierCM = (convertUnitCM) => {
    switch (convertUnitCM) {
      case "m":
        return 100;
      case "in":
        return 0.324;
      case "ft":
        return 0.032;
      case "cm":
        return 1;
      default:
        console.log("Can not convert to this unit");
    }
  };

  const getMultiplierIN = (convertUnitIN) => {
    switch (convertUnitIN) {
      case "m":
        return 0.03;
      case "cm":
        return 2.54;
      case "ft":
        return 12;
      case "in":
        return 1;
      default:
        console.log("Can not convert to this unit");
    }
  };

  const getMultiplierFT = (convertUnitFT) => {
    switch (convertUnitFT) {
      case "m":
        return 0.3;
      case "cm":
        return 30.48;
      case "in":
        return 12;
      case "ft":
        return 1;
      default:
        console.log("Can not convert to this unit");
    }
  };

  //   const Conversion = () => {
  // arrUnitsObj.forEach((item) => {
  const Value = arrUnitsObj.distance.value;
  const ConvertTo = arrUnitsObj.convert_to;
  const Unit = arrUnitsObj.distance.unit;
  if (Unit == "m") {
    console.log({
      unit: ConvertTo,
      value: (Value * getMultiplierMET(ConvertTo)).toFixed(2),
    });
  }
  if (Unit == "cm") {
    console.log({
      unit: ConvertTo,
      value: (Value * getMultiplierCM(ConvertTo)).toFixed(2),
    });
  }
  if (Unit == "in") {
    console.log({
      unit: ConvertTo,
      value: (Value * getMultiplierIN(ConvertTo)).toFixed(2),
    });
  }
  if (Unit == "ft") {
    console.log({
      unit: ConvertTo,
      value: (Value * getMultiplierFT(ConvertTo)).toFixed(2),
    });
  }

  // });
};

// };
convertationFunk();
