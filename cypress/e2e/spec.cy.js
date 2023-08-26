describe('Testing the app', () => {



  it('Revisar que muestre 18 tarjetas (18 cards)', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get(".hotel-card").should('have.length', 18)
  })

  it('escoger la primera opcion de precios ($)', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('select[name="price"]').as('selectPrice')
    cy.get('@selectPrice').select('1')
    cy.get('.hotel-card').should('have.length', 3)
  })

  it('Escoger la segunda opción de precios ($$)', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('select[name="price"]').as('selectPrice')
    cy.get('@selectPrice').select('2')
    cy.get('.hotel-card').should('have.length', 4)
  })

  it('Escoger la tercera opción de precios ($$$)', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('select[name="price"]').as('selectPrice')
    cy.get('@selectPrice').select('3')
    cy.get('.hotel-card').should('have.length', 2)
  })

  it('Escoger la cuarta opción de precios  ($$$$)', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('select[name="price"]').as('selectPrice')
    cy.get('@selectPrice').select('4')
    cy.get('.hotel-card').should('have.length', 9)
  })

  it('Escoger la tercera opcion de precios, revisar que muestre 2 hoteles, luego limpiar y revisar que muestre 18 hoteles" (18)', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('select[name="price"]').as('selectPrice')
    cy.get('@selectPrice').select('3')
    cy.get('.hotel-card').should('have.length', 2)
    cy.get('#button').as('buttonClear')
    cy.get('@buttonClear').click()
    cy.get('.hotel-card').should('have.length', 18)
  })

})
// comentario 