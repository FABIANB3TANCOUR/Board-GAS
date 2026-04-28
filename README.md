# Board-GAS

Este proyecto contiene un script desarrollado en Google Apps Script (GAS) diseñado para automatizar el análisis de datos de una tabla de botes en Google Sheets. El script permite procesar información sobre tipos de embarcaciones, cálculos financieros, estadísticas de género (basadas en nombres) y rendimiento de ventas por fechas.

Funcionalidades

El script transforma una hoja de cálculo estática en una herramienta dinámica de análisis mediante Funciones Personalizadas que se pueden usar directamente en las celdas de la hoja.

Funciones Incluidas:

LISTAR_TIPOS(rango):

Qué hace: Escanea la columna seleccionada y devuelve una lista única de los tipos de botes (ej. sail, speed, yacht) sin repetir ninguno.

Utilidad: Ideal para crear menús desplegables o resúmenes rápidos de categorías.

TOTAL_POR_TIPO(rangoTipos, rangoPrecios, tipoObjetivo):

Qué hace: Suma todos los montos de la columna de precios que coincidan con un tipo de bote específico.

Utilidad: Permite saber cuánto dinero genera cada categoría de bote.

CONTAR_GENERO(rangoNombres, rangoTipos, tipoObjetivo, generoDeseado):

Qué hace: Realiza una estimación de cuántos hombres o mujeres hay en un tipo de bote específico. Utiliza una lógica interna de comparación de nombres para clasificar el género de forma aproximada.

Utilidad: Obtener datos demográficos rápidos cuando no se tiene una columna de género explícita.

PAGO_TOTAL_NOMBRE(rangoNombres, rangoPrecios, nombreBuscar):

Qué hace: Busca un nombre específico en la tabla y suma todos sus pagos. Es capaz de encontrar múltiples registros para la misma persona.

Utilidad: Consolidar el gasto total de clientes recurrentes.

VENTA_FECHA_EXTREMA(rangoFechas, rangoPrecios, queBuscas):

Qué hace: Analiza todas las fechas y determina cuál fue el día con mayores ventas ("max") y cuál con menores ventas ("min").

Utilidad: Identificar picos y valles de demanda en el negocio.

Cómo ejecutarlo

Para usar este script en tu Google Sheet, sigue estos pasos:

Abrir el editor: En tu hoja de cálculo de Google, ve a la barra de menú y selecciona Extensiones > Apps Script.

Copiar el código: Borra cualquier código existente en el archivo Código.gs y pega el script proporcionado.

Guardar: Haz clic en el icono del disquete (Guardar) y asígnale un nombre al proyecto (ej. "Analizador de Botes").

Uso en la hoja: Regresa a tu hoja de cálculo. Ahora puedes usar las funciones como si fueran fórmulas nativas.

Ejemplo: =PAGO_TOTAL_NOMBRE(B2:B; F2:F; "Gretchen")
