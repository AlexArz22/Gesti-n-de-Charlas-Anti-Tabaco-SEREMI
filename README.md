# Gesti-n-de-Charlas-Anti-Tabaco-SEREMI

# Presentado por:
- Alex Aravena Pérez
- Alvaro Catalán
- Leandro Chamorro 
# Sistema de Gestión de Charlas SEREMI

##  Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Arquitectura de la Información](#arquitectura-de-la-información)
3. [Diseño de prototipos](#prototipo-de-diseño)
4. [Librerías en Angular](#liberías-usadas-con-angular)

## Resumen del Proyecto
- El proyecto consiste en una aplicación web dedicada a los encargados de la SEREMI para que puedan administrar el material que poseen a la hora de realizar charlas en distintas instituciones. 
---
## Requerimientos


 ## Roles del Sistema
- **Administrador**: Control total sobre el sistema.
- **Usuario**: puede ver información de charlas, subir, editar y eliminar archivos dentro de charlas. NO puede editar charlas, ni crearlas.

## Requerimientos Funcionales por Rol

### Rol-Administrador

- **RF-ADM-01**: El administrador puede registrar nuevas Charlas.
- **RF-ADM-02**: El administrador puede modificar cualquier Charla existente.
- **RF-ADM-03**: El administrador puede eliminar cualquier Charla existente.
- **RF-ADM-04**: El administrador puede subir contenido a Charlas existentes.
- **RF-ADM-05**: El administrador puede eliminar contenido de charlas existentes.
- **RF-ADM-06**: El administrador puede crear actividades.
- **RF-ADM-07**: El administrador puede editar actividades.
- **RF-ADM-08**: El administrador puede agendar/vincular actividad a charla
- **RF-ADM-09**: El administrador puede visualizar presentaciones en la aplicación.

### Rol-Usuario

- **RF-USR-01**: El usuario puede subir contenidos a sus charlas asignadas.
- **RF-USR-02**: El usuario puede crear actividades
- **RF-USR-03**: El usuario puede agendar/vincular actividad a charla
- **RF-USR-04**: El usuario puede visualizar presentaciones en la aplicación.
---

## Requerimientos Funcionales

- **RF-01: Registrar Charla**
  - Descripción: El sistema permite a los administradores añadir una nueva charla en el calendario con los parámetros correspondientes?.
  - Criterios de aceptación: Se visualiza la charla en el calendario.
  - Prioridad: Alta.
  - Dependencias: Requiere la existencia del RF-09 (Calendario) para poder registrar las charlas en el mismo.

- **RF-02: Modificar Charla**
  - Descripción: El sistema permite a los administradores modificar los parámetros de una charla.
  - Criterios de aceptación: Los cambios realizados a una charla se deben ver reflejados en el calendario.
  - Prioridad: Alta
  - Dependencias: Depende de la existencia previa de una charla creada en RF-01: Registrar Charla. 

- **RF-03: Eliminar Charla**
  - Descripción: El sistema le permite al administrador eliminar una charla.
  - Criterios de aceptación: La charla ya no se debe ver reflejada en el calendario.
  - Prioridad: Media.
  - Dependencias: Depende de la existencia previa de una charla creada en RF-01: Registrar Charla. 

- **RF-04: Subir Contenido**
  - Descripción: Permite al usuario y administrador subir a la plataforma el material que utilizará en la charla. Esto abarca desde presentaciones en PowerPoint, PDF o enlaces a páginas web.
  - Criterios de aceptación: Los archivos quedan guardados en la plataforma.
  - Prioridad: Media.
  -  Dependencias: Depende de la existencia previa de una charla creada en RF-01: Registrar Charla.

- **RF-05: Eliminar Contenido**
  - Descripción: Permite al usuario y administrador eliminar cierto material que utilizará en la charla. Esto abarca desde presentaciones en PowerPoint, PDF o enlaces a páginas web.
  - Criterios de aceptación: Los archivos ya no se encuentran guardados en la plataforma.
  - Prioridad: Media.
  - Dependencias: Requiere la existencia de un contenido en la plataforma previamente subido en el requerimiento RF-04: Subir Contenido. 

- **RF-05: Visualizar Contenido**
  - Descripción: Permite al usuario y administrador observar el material dentro de la misma plataforma.
  - Criterios de aceptación: Se puede observar el material en la aplicación.
  - Prioridad: Media.
  - Dependencias: Requiere la existencia de un contenido en la plataforma previamente subido en el requerimiento RF-04: Subir Contenido. 

- **RF-06: Creación de actividades**
  - Descripción: Se entrega un apartado en el cual el usuario o administrador puede crear una actividad a través de la completación de un formulario en el cual ingresará las preguntas y respuestas para la trivia.
  - Criterios de aceptación: En la plataforma se puede visualizar una trivia con las preguntas y respuestas ingresadas.
  - Prioridad: Media.
  - Dependencias: https://www.youtube.com/watch?v=mPqkedvlzdQ.

- **RF-07: Modificación de actividades**
  - Descripción: El administrador o el usuario puede editar los contenidos de una actividad, ya sea la pregunta o las respuestas de esta misma.
  - Criterios de aceptación: En la plataforma se puede visualizar los cambios realizados a la trivia.
  - Prioridad: Media.
  - Dependencias: Necesita que haya sido creada una actividad en el requerimiento RF-06: Creación de actividades.

- **RF-08: Eliminación de actividades**
  - Descripción: El administrador puede quitar por completo una trivia de la aplicación.
  - Criterios de aceptación: La trivia ya no se encuentra en la aplicación.
  - Prioridad: Media.
  - Dependencias: Necesita que haya sido creada una actividad en el requerimiento RF-06: Creación de actividades.

- **RF-09: Calendario**
  - Descripción: Permite al usuario y administrador visualizar las fechas en las que se llevarán a cabo charlas.
  - Criterios de aceptación: El calendario se puede visualizar desde la aplicación.
  - Prioridad: Alta.
  - Dependencias: .

- **RF-10: Registrar asistencia**
  - Descripción: Permite al usuario subir a la plataforma la asistencia a la charla que ha realizado registrando: Cantidad de alumnos, Curso, género de alumno, establecimiento, comuna, Región.
  - Criterios de aceptación: Los archivos quedan guardados en la base de datos de la plataforma.
  - Prioridad: Baja.
  - Dependencias:  Depende de la existencia previa de una charla creada en RF-01: Registrar Charla.

- **RF-11: Marcar inicio y final de Charla**
  - Descripción: Le permite al usuario marcar la hora de inicio y finalización de la charla. El administrador puede modificar estos datos en caso de ser necesario.
  - Criterios de aceptación: Se observa en la plataforma una hora de inicio y finalización de la charla.
  - Prioridad: baja
  - Dependencias:  Depende de la existencia previa de una charla creada en RF-01: Registrar Charla.

- **RF-12: Generar reporte de asistencia**
  - Descripción: Permite al Administrador generar un reporte de la asistencia desde una fecha hasta otra fecha, indicando la cantidad de charlas que tuvieron, información de los asistentes.
  - Criterios de aceptación: Los archivos quedan guardados en la base de datos de la plataforma.
  - Prioridad: Baja.
  - Dependencias: Para recopilar los datos para el reporte, requiere de los requerimientos RF-10: Registrar asistencia y RF-11: Marcar inicio y final de Charla.

- **RF-13: Vinculación de actividades y charlas**
  - Descripción: Se entrega un apartado en el cual el usuario o administrador puede crear una actividad a través de la completación de un formulario en el cual ingresará las preguntas y respuestas para la trivia.
  - Criterios de aceptación: En la plataforma se puede visualizar una trivia con las preguntas y respuestas ingresadas.
  - Prioridad: Media.
  - Dependencias: Depende de la existencia previa de una charla creada en RF-01: Registrar Charla y una actividad en el requerimiento RF-06: Creación de actividades.

## Requerimientos No Funcionales

### RNF-01: Tiempo de respuesta
- CAMBIAR CUANDO SEPAMOS
  - Descripción: El sistema debe responder a solicitudes de registro, edición o búsqueda en menos de **4 segundos** en el 94% de los casos.
  - Criterios de aceptación: El tiempo de respuesta es menor o igual a 4 segundos. 
  - Prioridad: Media.
  - Dependencias:.
### RNF-02: Seguridad
  - Descripción: Solo usuarios autorizados podrán acceder a la plataforma y las tareas que puedan llevar a cabo estarán limitadas por su rol establecido. Se establecerán roles de usuario y administrador.
  - Criterios de aceptación: Cada cliente puede acceder a la plataforma si se encuentra autorizado y solo podrá acceder a funciones limitadas por su rol
  - Prioridad: Alta.
  - Dependencias: 

### RNF-03: Usabilidad y accesibilidad.
  - Descripción: La aplicación posee una interfaz intuitiva y  con reducidos elementos para facilitar su uso. Además se siguen los principios de UX y UI para aportar mayor confort al usuario. La aplicación se adapta de forma correcta a dispositivos móviles y de escritorio.
  - Criterios de aceptación: La aplicación web se abre de forma correcta en los dispositivos y los usuarios no se pierden al utilizarla.
  - Prioridad: Alta.
  - Dependencias: .

### RNF-04: Compatibilidad
  - Descripción: El sistema debe estar operativo en buen estado para los siguientes navegadores web: Google Chrome, Mozilla Firefox, Microsoft Edge y Safari.
  - Criterios de aceptación: Se visualiza de forma correcta en el navegador correspondiente.
  - Prioridad: Alta.
  - Dependencias: .

---
## Arquitectura de la Información 
[Estructura de Navegación](https://whimsical.com/escuelainf-4qgXnPptro4CqvEugsGNNZ )

---

## Prototipo de diseño 
[Figma - Prototipo de Gestión Charlas] (https://www.figma.com/design/P5ZCkmvzJPXbf0Q4MrjiHx/Dise%C3%B1oprototipos?node-id=0-1&t=yTsY3fzxhUPc6GON-1)

---
## Liberías usadas con Angular
- Bootstrap

## Tecnologías
- **Ionic Framework** (v7+)
- **Angular** (v15+)
- **TypeScript**
- **Capacitor** (para plugins nativos, si aplica)
- **SASS** (para estilos)
- **RxJS** (para manejo reactivo)
- **Angular Router** (para navegación entre vistas)
