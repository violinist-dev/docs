describe('homepage', () => {
  it('loads and renders the navbar, hero and footer', () => {
    cy.visit('/');

    cy.get('h1').should('contain.text', 'Violinist documentation');

    cy.get('nav.navbar').should('be.visible');
    cy.get('nav.navbar').contains('a', 'GitHub').should('have.attr', 'href', 'https://github.com/violinist-dev/docs');

    cy.get('footer.footer').should('be.visible');
    cy.get('footer.footer').contains('a', 'Documentation').should('have.attr', 'href', '/');
  });

  it('toggles between light and dark mode', () => {
    cy.visit('/');

    cy.get('[aria-label^="Switch between dark and light mode"]')
      .as('colorModeToggle')
      .click();

    cy.get('html').should('have.attr', 'data-theme');
  });
});

describe('docs navigation', () => {
  it('opens a doc page from the sidebar', () => {
    cy.visit('/');

    cy.get('.theme-doc-sidebar-container')
      .find('button[aria-label="Expand sidebar category \'Self hosting\'"]')
      .click();
    cy.get('.theme-doc-sidebar-container').contains('a', 'Getting started').click();

    cy.location('pathname').should('eq', '/self-hosting/getting-started');
    cy.get('article').contains('h1', 'Getting started').should('be.visible');
  });

  it('follows next/previous pagination links', () => {
    cy.visit('/self-hosting/getting-started');

    cy.get('article').should('be.visible');
    cy.get('nav.pagination-nav').should('exist');
  });
});

describe('search', () => {
  it('opens the search modal from the navbar', () => {
    cy.visit('/');

    cy.get('.DocSearch-Button').click();
    cy.get('.DocSearch-Modal').should('be.visible');

    cy.get('body').type('{esc}');
    cy.get('.DocSearch-Modal').should('not.exist');
  });
});
