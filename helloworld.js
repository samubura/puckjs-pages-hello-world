function on(){
    UART.write("LED2.set();\n");
}

function off(){
    UART.write("LED2.reset();\n");
}