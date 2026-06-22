Feature: API Contact List

  Como QA Automation
  Quiero validar los servicios REST
  Para asegurar el funcionamiento del backend


  Scenario: Crear contacto por API exitosamente
    Given que tengo un usuario autenticado por API
    When envio una solicitud para crear un contacto
    Then el servicio responde exitosamente