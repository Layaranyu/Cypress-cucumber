import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { xpathLogin } from "../../support/variables";
import { xpathCadastro } from "../../support/variables";
import { xpathCadastroDados } from "../../support/variables";

Given("Acesso o site", () => {
  cy.visit("http://www.automationpractice.pl/index.php");
});

When("Preencho o email e clico em create an account", () => {
        cy.get(xpathLogin.login).click()
        cy.get(xpathLogin.emailCreate).type("testecypress7778@gmail.com")
        cy.get(xpathLogin.buttonCreate).click()
});

Then("Preencho todos os dados necessarios", () => {
        cy.get(xpathCadastro.genero).click()
        cy.get(xpathCadastro.nome).type("Amanda")
        cy.get(xpathCadastro.sobrenome).type("Almeida")
        cy.get(xpathCadastro.senha).type(12345895)
        cy.get(xpathCadastro.dia).select('1');
        cy.get(xpathCadastro.mes).select('2')
        cy.get(xpathCadastro.ano).select('1980')
        cy.get(xpathCadastro.button).click()
});

When("Preencho o email e senha e clico em sign in",()=>{
    cy.get(xpathLogin.login).click()
    cy.get(xpathLogin.email).type("testecypress7778@gmail.com")
    cy.get(xpathCadastro.senha).type(12345895)
    cy.get(xpathCadastro.buttonLogin).click()
}
)

Then ('devo conseguir acessar o site',()=>{
  cy.get(xpathCadastro.infoUsuario).click()
    cy.get(xpathLogin.email).should('have.value', 'testecypress7778@gmail.com')
    cy.get(xpathCadastroDados.nome).should('have.value', 'Amanda')
    cy.get(xpathCadastroDados.sobrenome).should('have.value', 'Almeida')
    cy.get(xpathCadastro.buttonLinks).click()
    
})