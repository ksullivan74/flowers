
const fillGasTank = (gallons) =>
{
    if(gallons > 15)
        {console.log(`You cannot fill the tank with that many gallons of gas.`)}
    if(gallons <= 15)
        {console.log(`I filled the car with ${gallons} gallons of gas.`)}
}

fillGasTank(15)
fillGasTank(22)
fillGasTank(5)