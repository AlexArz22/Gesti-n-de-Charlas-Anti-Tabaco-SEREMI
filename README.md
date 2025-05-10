# Gesti-n-de-Charlas-Anto-Tabaco-SEREMI
# Presentado por:
- Alex Aravena Pérez
- Alvaro Catalán Villanueva
- Leandro Chamorro Rojas

# Sistema de Gestión de Charlas SEREMI

##  Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requerimientos](#requerimientos)
3. [Arquitectura de la Información](#arquitectura-de-la-información)
3. [Diseño de prototipos](#prototipo-de-diseño)
4. [Librerías en Angular](#liberías-usadas-con-angular)

## Resumen del Proyecto
El proyecto consiste en una aplicación web dedicada a los encargados de la SEREMI para que puedan administrar el material que poseen a la hora de realizar charlas en distintas instituciones. 
---
## Requerimientos

 ## Roles del Sistema
- **Administrador**: Posee control total sobre el sistema, puede modificar los elementos de charlas y actividades por completo.
- **Usuario**: Puede ver información de charlas, subir, editar y eliminar archivos dentro de charlas. No puede editar charlas, ni crearlas, ya que estas solo se le asignan.

## Requerimientos Funcionales por Rol

### Rol-Administrador

- **RF-ADM-01**: El administrador puede registrar nuevas Charlas.
- **RF-ADM-02**: El administrador puede modificar cualquier Charla existente.
- **RF-ADM-03**: El administrador puede eliminar cualquier Charla existente.
- **RF-ADM-04**: El administrador puede subir contenido a Charlas existentes.
- **RF-ADM-05**: El administrador puede eliminar contenido de Charlas existentes.
- **RF-ADM-06**: El administrador puede crear actividades.
- **RF-ADM-07**: El administrador puede editar actividades.
- **RF-ADM-08**: El administrador puede eliminar actividades.
- **RF-ADM-09**: El administrador puede agendar/vincular actividad a charla
- **RF-ADM-10**: El administrador puede visualizar presentaciones en la aplicación.

### Rol-Usuario

- **RF-USR-01**: El usuario puede subir contenidos a sus charlas asignadas.
- **RF-USR-02**: El usuario puede eliminar contenido de charlas existentes.
- **RF-USR-03**: El usuario puede crear actividades.
- **RF-USR-04**: El usuario puede agendar/vincular actividad a charla.
- **RF-USR-05**: El usuario puede visualizar presentaciones en la aplicación.
---

## Requerimientos Funcionales

- **RF-01: Inicio de sesión**
  - Descripción: Se requiere de un inicio de sesión para poder ingresar al sistema y sus funcionalidades .
  - Criterios de aceptación: Al ingresar a la página se visualiza la ventana de iniciar sesión, y tras ingresar los datos en las casillas respectivas se puede acceder a la plataforma.
  - Prioridad: alta.

- **RF-02: Registrar usuario**
  - Descripción: Se permite el registro de un nuevo usuario al sistema.
  - Criterios de aceptación: Se queda registrado el nuevo usuario en la base de datos del sistema.
  - Prioridad: alta.

- **RF-03: Restablecer contraseña**
  - Descripción: Permite al usuario recuperar su contraseña ingresando su correo electrónico.
  - Criterios de aceptación: Se recibe un enlace para restablecer la contraseña del usuario al correo electrónico.
  - Prioridad: media.
  - Dependencias: Requiere que se haya completado de forma satisfactoria el requisito RF-02: Registrar usuario para que exista un usuario al que restablecer la contraseña.

- **RF-04: Perfil**
  - Descripción: Tanto usuarios como administradores pueden ingresar al perfil donde podrán encontrar sus datos personales.
  - Criterios de aceptación: Se pueden observar los datos personales en la página perfil.
  - Prioridad: alta.
  - Dependencias: Requiere que se haya completado de forma satisfactoria el requisito RF-02: Registrar usuario para que exista un usuario al que restablecer la contraseña.

- **RF-05: Registrar Charla**
  - Descripción: El sistema permite a los administradores añadir una nueva charla en el calendario con los parámetros correspondientes.
  - Criterios de aceptación: Se visualiza la charla con todo su contenido en la aplicación.
  - Prioridad: Alta.
  - Dependencias: Depende del ingreso de usuario por medio de RF-01: Inicio de sesión. 

- **RF-06: Modificar Charla**
  - Descripción: El sistema permite a los administradores modificar los parámetros de una charla.
  - Criterios de aceptación: Los cambios realizados a una charla se deben ver reflejados en la charla completada.
  - Prioridad: Alta.
  - Dependencias: Depende de la existencia previa de una charla creada en RF-05: Registrar Charla. 

- **RF-07: Eliminar Charla**
  - Descripción: El sistema le permite al administrador eliminar una charla.
  - Criterios de aceptación: La charla ya no se debe ver reflejada en el calendario ni en la sección de charlas.
  - Prioridad: Media.
  - Dependencias: Depende de la existencia previa de una charla creada en RF-05: Registrar Charla. 

- **RF-08: Subir Contenido**
  - Descripción: Permite al usuario y administrador subir a la plataforma el material que utilizará en la charla. Esto abarca desde presentaciones en PowerPoint, PDF o enlaces a páginas web.
  - Criterios de aceptación: Los archivos quedan guardados en la plataforma.
  - Prioridad: Media.
  -  Dependencias: Depende de la existencia previa de una charla creada en RF-05: Registrar Charla.

- **RF-09: Eliminar Contenido**
  - Descripción: Permite al usuario y administrador eliminar cierto material que utilizará en la charla. Esto abarca desde presentaciones en PowerPoint, PDF o enlaces a páginas web.
  - Criterios de aceptación: Los archivos ya no se encuentran guardados en la plataforma.
  - Prioridad: Media.
  - Dependencias: Requiere la existencia de un contenido en la plataforma previamente subido en el requerimiento RF-08: Subir Contenido. 

- **RF-10: Visualizar Contenido**
  - Descripción: Permite al usuario y administrador observar el material dentro de la misma plataforma.
  - Criterios de aceptación: Se puede observar el material en la aplicación.
  - Prioridad: Media.
  - Dependencias: Requiere la existencia de un contenido en la plataforma previamente subido en el requerimiento RF-08: Subir Contenido. 

- **RF-11: Creación de actividades**
  - Descripción: Se entrega un apartado en el cual el usuario o administrador puede crear una actividad a través de la completación de un formulario en el cual ingresará las preguntas y respuestas para la trivia.
  - Criterios de aceptación: En la plataforma se puede visualizar una trivia con las preguntas y respuestas ingresadas.
  - Prioridad: Media.
 - Dependencias: Depende del ingreso de usuario por medio de RF-01: Inicio de sesión. 

- **RF-12: Modificación de actividades**
  - Descripción: El administrador o el usuario puede editar los contenidos de una actividad, ya sea la pregunta o las respuestas de esta misma.
  - Criterios de aceptación: En la plataforma se puede visualizar los cambios realizados a la trivia.
  - Prioridad: Media.
  - Dependencias: Necesita que haya sido creada una actividad en el requerimiento RF-11: Creación de actividades.

- **RF-13: Eliminación de actividades**
  - Descripción: El administrador puede quitar por completo una trivia de la aplicación.
  - Criterios de aceptación: La trivia ya no se encuentra en la aplicación.
  - Prioridad: Media.
  - Dependencias: Necesita que haya sido creada una actividad en el requerimiento RF-11: Creación de actividades.

- **RF-14: Calendario**
  - Descripción: Permite al usuario y administrador visualizar las fechas en las que se llevarán a cabo charlas.
  - Criterios de aceptación: El calendario se puede visualizar desde la aplicación.
  - Prioridad: Alta.
 - Dependencias: Depende del ingreso de usuario por medio de RF-01: Inicio de sesión. 

- **RF-15: Registrar asistencia**
  - Descripción: Permite al usuario subir a la plataforma la asistencia de la charla que ha realizado. En esta se incluye: Cantidad de alumnos, cantidad de alumnos por género.
  - Criterios de aceptación: Los números de asistentes quedan guardados en la base de datos de la plataforma.
  - Prioridad: Baja.
  - Dependencias:  Depende de la existencia previa de una charla creada en RF-05: Registrar Charla.

- **RF-16: Marcar inicio y final de Charla**
  - Descripción: Le permite al usuario marcar la hora de inicio y finalización de la charla. El administrador puede modificar estos datos en caso de ser necesario.
  - Criterios de aceptación: Se observa en la plataforma el tiempo que duró la charla.
  - Prioridad: baja
  - Dependencias:  Depende de la existencia previa de una charla creada en RF-05: Registrar Charla.

- **RF-17: Vinculación de actividades y charlas**
  - Descripción: Se entrega un apartado en el cual el usuario o administrador puede asignar una actividad previamente creada a una charla existente.
  - Criterios de aceptación: En la plataforma se puede acceder a la actividad a través del apartado de actividades de una charla en específico.
  - Prioridad: baja.
  - Dependencias: Depende de la existencia previa de una charla creada en RF-05: Registrar Charla y una actividad en el requerimiento RF-11: Creación de actividades.

## Requerimientos No Funcionales

### RNF-01: Tiempo de respuesta
  - Descripción: El sistema debe responder a solicitudes de registro, edición o búsqueda en menos de **4 segundos** en el 94% de los casos.
  - Criterios de aceptación: El tiempo de respuesta es menor o igual a 4 segundos. 
  - Prioridad: Media.

### RNF-02: Seguridad
  - Descripción: Solo usuarios autorizados podrán acceder a la plataforma y las tareas que puedan llevar a cabo estarán limitadas por su rol establecido. Se establecerán roles de usuario y administrador.
  - Criterios de aceptación: Cada cliente puede acceder a la plataforma si se encuentra autorizado y solo podrá acceder a funciones limitadas por su rol
  - Prioridad: Alta.

### RNF-03: Usabilidad y accesibilidad.
  - Descripción: La aplicación posee una interfaz intuitiva y  con reducidos elementos para facilitar su uso. Además se siguen los principios de UX y UI para aportar mayor confort al usuario. La aplicación se adapta de forma correcta a dispositivos móviles y de escritorio.
  - Criterios de aceptación: La aplicación web se abre de forma correcta en los dispositivos y los usuarios no se pierden al utilizarla.
  - Prioridad: Alta.

### RNF-04: Compatibilidad
  - Descripción: El sistema debe estar operativo en buen estado para los siguientes navegadores web: Google Chrome, Mozilla Firefox, Brave, Microsoft Edge y Safari.
  - Criterios de aceptación: Se visualiza de forma correcta en el navegador correspondiente.
  - Prioridad: Alta.

---
## Arquitectura de la Información 
[Estructura de Navegación]( )
https://whimsical.com/proyecto-seremi-anti-tabaco-GFZxS3EJNK1neWTaVj24X8
---

## Prototipo de diseño 
[Figma - Prototipo de Gestión Charlas] ()
https://www.figma.com/design/33zLCaZb8RH0zJ2D9GHfqv/Dise%C3%B1o-prototipos?node-id=0-1&t=qHbrMy6hHhZJTUgz-1 
---
## Liberías usadas con Angular
- Bootstrap
-Angular CLI
-Font Awesome
-SweetAlert2
-ngx-toastr
-ngx-pagination
-ngx-bootstrap
-Angular Material
-RxJS
-Angular Form
-Angular Router
-HttpClientModule


## Tecnologías
- **Ionic Framework** (v7+)
- **Angular** (v15+)
- **TypeScript**
- **Capacitor** 
- **SASS** 
- **RxJS** 
- **Angular Router** 
- **Angular Location** 

##Comentarios
- Planeamos utilizar una API para implementar el calendario, de momento utilizamos una representación de calendario como placeholder.

##Indicaciones
-Para entrar a la página principal se debe presionar el botón de iniciar sesión, no es necesario rellenar los datos. 

