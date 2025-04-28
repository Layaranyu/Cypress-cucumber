Feature: Realizar cadastro no site YourLogo


  Scenario: Realizar cadastro no site Yourlogo
    Given Acesso o site
    When Preencho o email e clico em create an account
    Then Preencho todos os dados necessarios

  Scenario: Realizar login no site Yourlogo
    Given Acesso o site
    When Preencho o email e senha e clico em sign in
    Then devo conseguir acessar o site