describe('e2e', () => {
  it('Returns success if last 24 hour change was positive', () => {
    cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')

    cy.get('table > tbody > tr td:nth-child(3)')
      .contains('+')

  })
})

describe('e2e', () => {
  it('BTC Last 24 hours change was positive', () => {
    cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')

    cy.get('[data-cy="last-24"]')
      .contains('+')
  })
})

describe('e2e', () => {
  it('BTC Last week change was positive', () => {
    cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')
      
    cy.get('[data-cy="last-week"]')
      .contains('+')
  })
})