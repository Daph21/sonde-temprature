let temperature = 0
basic.forever(function () {
    temperature = dstemp.celsius(DigitalPin.P0)
    if (temperature > -300) {
        serial.writeValue("Temp", temperature)
        basic.pause(2000)
    }
})
