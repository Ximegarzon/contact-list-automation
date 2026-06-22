Feature: Login usuario Contact List

  Como usuario registrado
  Quiero iniciar sesión en la aplicación
  Para gestionar mis contactos

  Scenario: Inicio de sesión exitoso
    Given que el usuario se encuentra en la página de login
    When ingresa credenciales válidas
    Then debe visualizar la lista de contactos