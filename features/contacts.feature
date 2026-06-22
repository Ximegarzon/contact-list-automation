Feature: Gestión de contactos

  Como usuario autenticado
  Quiero administrar mis contactos
  Para mantener mi información actualizada


  Scenario: Crear contacto correctamente
    Given que el usuario inicio sesion correctamente
    When crea un nuevo contacto
    Then el contacto debe aparecer en la lista