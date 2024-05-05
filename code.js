function ledOn(){
    UART.write("LED2.set();\n");
}

function ledOff(){
    UART.write("LED2.reset();\n");
}