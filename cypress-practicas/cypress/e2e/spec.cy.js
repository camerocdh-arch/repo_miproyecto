
describe('comprobar la pagina principal', () => {

  it('el titulo debe contener la palabra cypress', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

  it('se muestra la palabra Kitchen Sink en el encabezado', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('h1', 'Kitchen Sink').should('be.visible')
  })

})

describe('Pruebas de la página Actions', () => {

  it('comprobar el funcionamiento de un formulario', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-form')
      .find('[type="text"]')
      .type('HALFOFF')

    cy.get('.action-form').submit()

    cy.get('.action-form').next()
      .should('contain', 'Your form has been submitted!')

  })

})

describe('prueba de botones', () => {

  it('debe mostrar el popover al hacer clic', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-btn').click()
    cy.get('.popover').should('be.visible')
    
  })
})






