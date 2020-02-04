describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/portfolio')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /portfolio/about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /portfolio/blog', () => {
		cy.get('nav a').contains('blog').click();
		cy.url().should('include', '/blog');
	});
});