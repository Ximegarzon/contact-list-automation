# Contact List Automation - QA Challenge

Proyecto de automatización de pruebas para la aplicación Contact List.

La solución implementa pruebas automatizadas de interfaz web (UI) y servicios REST API aplicando buenas prácticas de automatización.

---

## Tecnologías utilizadas

- Playwright
- JavaScript
- Cucumber
- Gherkin
- Node.js
- Page Object Model (POM)

---

## Arquitectura del proyecto

El proyecto se encuentra organizado de la siguiente manera:

```text
contact-list-automation

features/
    Contiene los escenarios de prueba escritos en lenguaje Gherkin.

pages/
    Contiene las clases del patrón Page Object Model para separar la lógica de interacción con la interfaz.

steps/
    Contiene la implementación de los pasos definidos en los archivos feature.

support/
    Contiene la configuración inicial y finalización de los escenarios.

api/
    Contiene las pruebas relacionadas con servicios REST.
```

---

## Escenarios automatizados

### Pruebas UI

Se automatizaron los siguientes flujos:

- Inicio de sesión exitoso en la aplicación.
- Creación de un nuevo contacto.
- Validación del flujo principal de gestión de contactos.

### Pruebas API

Se automatizaron validaciones de servicios REST:

- Autenticación mediante API.
- Creación de contacto mediante servicio REST.
- Validación de respuesta del servicio.

---

## Estrategia de pruebas

La estrategia utilizada está enfocada en cubrir los flujos críticos de negocio mediante pruebas automatizadas End To End y pruebas de API.

Los escenarios fueron diseñados aplicando buenas prácticas como:

- Separación de responsabilidades.
- Reutilización de código.
- Mantenibilidad.
- Uso del patrón Page Object Model.

---

## Instalación del proyecto

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd contact-list-automation
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecución de pruebas

Para ejecutar las pruebas:

```bash
npm test
```

---

## Resultado esperado

La ejecución debe finalizar exitosamente:

```text
3 scenarios passed
15 steps passed
```

---

## Autor

QA Automation Challenge