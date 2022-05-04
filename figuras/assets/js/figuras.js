
   //EJERCICIO FIGURAS//


opcion= prompt ("Calculadora de Area y Perimeto(t=Triangulo,cir=Circulo,c=Cuadrado, r=Rectangulo");

switch (opcion){

    case "t":
        let lado1 = prompt("Cuanto mide un lado del Triangulo");
        let altura1 = prompt("Cuanto mide la altura");
        let base1 = prompt("Cuanto mide la base");
        let perimetro2= lado1 * 3;
        let areaTriangulo= base1*altura1*2;

        console.log("El area del Triangulo es",areaTriangulo);
        console.log("El Perimetro es",perimetro2);
        break;
    
    case "cir":
        let radio1 = prompt("Cuanto mide el Radio");
        let perimetro3= 2 * 3.1416*radio1;
        let areaCirculo= 3.1416 * radio1**2;

        console.log("El area del Triangulo es",areaCirculo);
        console.log("El Perimetro es",perimetro3);
        break;

    case "c":
        let lado = prompt("Cuanto mide un lado del Cuadrado");
        let perimetro1= lado * 4;
        let areaCuadrado= lado**2;

        console.log("El area del Cuadrado es",areaCuadrado);
        console.log("El Perimetro es",perimetro1);
        break;

    case "r":
        let lado3 = Number (prompt("Cuanto mide el primer lado"));
        let lado4 = Number (prompt("Cuanto mide el segundo lado"));
        let lado5 = Number (prompt("Cuanto mide el tercer lado"));
        let base2 = prompt("Cuanto mide la base del Rectangulo");
        let altura2 = prompt("Cuanto mide la altura del Rectangulo");
        let areaRectangulo= base2*altura2;
        let perimetro4= lado3 + lado4 + lado5;
        
        console.log("El area del Cuadrado es",areaRectangulo);
        console.log("El Perimetro es",perimetro4); 
    
        break;

    }
