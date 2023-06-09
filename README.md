## Convert the sum of your Argentine DNI (document national of identity) and gender to CUIL (Unique Labor Identification Code)
#
#
##### ENGLISH
#
This project helps with the tedious task of getting someone's CUIL with predesigned mathematical functions to be applied to the DNI and get the person's CUIL

* The Unique Labor Identification Code (CUIL) is necessary at the beginning of a work activity and is also used to collect benefits provided by ANSES (National Social Security Administration) and/or carry out procedures with other entities that require it
* It consists of the combination of a person's DNI and two new numbers added to the left of the DNI and a new one to the right. These three new numbers are calculated based on a mathematical formula created by ANSES
* There are rare cases in which some CUIL cannot be calculated because they are assigned by ANSES without following the formula that they themselves created decades ago :/ but as I mentioned they are rare cases so still I saw myself at some point in need of a conversion function like this
* If the DNI has seven digits, a zero will be added to the number to reach eight digits, example: 1234567 will be converted to 01234567

## Use example!
[![N|Solid](https://i.ibb.co/9Vb1jzh/dni-Converter-Test.png)](https://i.ibb.co/9Vb1jzh/dni-Converter-Test.png)

## Use steps

It's very simple, just follow this steps! :D

1. Run npm i dni-converter in a terminal
2. Import "dniConverter" function from this package
3. Get the DNI and gender of the person you want to get their CUIL
4. Use "dniConverter" function passing the data already mentioned in this order as parameters, first DNI (as number) and second the gender (as string, 'male' or 'female')

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!

#
#
##### ESPAÑOL
## Convierte la suma de tu DNI argentino (documento nacional de identidad) y género a CUIL (Código Único de Identificación Laboral)
#
Este proyecto ayuda en la tediosa tarea de sacar el CUIL de una persona con funciones matemáticas prediseñadas para aplicar al DNI y obtener el CUIL de la persona

* El Código Único de Identificación Laboral (CUIL) es necesario al inicio de una actividad laboral y también se utiliza para cobrar las prestaciones que brinda la ANSES (Administración Nacional del Seguro Social) y/o realizar trámites con otras entidades que así lo requieran
* Consiste en la combinación del DNI de una persona y dos nuevos números añadidos a la izquierda del DNI y uno nuevo a la derecha. Estos tres nuevos números se calculan con base en una fórmula matemática creada por ANSES
* Hay casos raros en los que no se pueden calcular algunos CUIL porque son asignados por ANSES sin seguir la fórmula que ellos mismos crearon hace décadas :/ pero como mencioné son casos raros así que igual me vi en algún momento necesitando una funcion conversora
* Si el DNI tiene siete dígitos, se añadirá un cero al número hasta llegar a los ocho dígitos, ejemplo: 1234567 se convertirá en 01234567

## ¡Ejemplo de uso!
[![N|Solid](https://i.ibb.co/9Vb1jzh/dni-Converter-Test.png)](https://i.ibb.co/9Vb1jzh/dni-Converter-Test.png)

## Pasos para su uso

¡Es muy simple, solo sigue estos pasos! :D

1. Correr npm i dni-converter en una terminal
2. Importar la funcion "dniConverter" desde este paquete
3. Consigue el DNI y sexo de la persona que quieres sacar su CUIL
4. Utilizar la función "dniConverter" pasando los datos ya mencionados en este orden como parámetros, primero DNI (como número) y segundo el género (como cadena, 'male' o 'female')

## ¿Encontraste un error?

Si encontró un problema o desea enviar una mejora a este proyecto, deje un "issue" (problema) usando la pestaña de "issues" de arriba. ¡Si desea enviar un PR con una corrección, haga referencia al "issue" que ha creado!
