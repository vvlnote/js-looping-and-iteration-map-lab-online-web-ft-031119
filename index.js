// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes() {
  return drivers.map(funtion(driver) {
    let names = driver.split(" ");
    let obj = {};
    obj.firstname = names[0];
    obj.lastname = names[1];
    return obj;
  })
}
