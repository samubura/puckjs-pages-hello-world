<html>
 <head>
 </head>
 <body>
  <script src="https://www.espruino.com/js/uart.js"></script>
  <button onclick="UART.write('console.log(\"HelloWorld\");\n');">Hello!</button<
  <button onclick="UART.write('LED2.set();\n');">LED On!</button>
  <button onclick="UART.write('LED2.reset();\n');">LED Off!</button>
 </body>
</html>
