describe ("process",()=>{
  beforeEach(() => {
      cy.fixture('example').then((userFixture) => {
        cy.login(userFixture.email,userFixture.password);
       // cy.wait(3000);
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('div[class="product_label"]').contains('products',{matchCase:false});
      })
  
  })

it("random elemenet",()=>{
  cy.visit('https://www.saucedemo.com/v1/inventory.html');
  cy.get('.btn_inventory').its('length').then(length=>{
    cy.log( Math.floor(Math.random()*length))
    var randomelment=Math.floor(Math.random()*length);
    cy.log(randomelment);
    cy.get('.btn_inventory').eq(randomelment).click();
    cy.get('.btn_inventory').eq(randomelment).should('have.text','REMOVE');

  })
})

it("go to checkout", ()=>{
   // cy.wait(3000);
    cy.get('a[class="shopping_cart_link fa-layers fa-fw"]').click();
    cy.get('#shopping_cart_container').click();
    cy.get('.checkout_button').click();
    cy.get('h3[data-test="error"]').should('not.exist');
    cy.get('.cart_button').click();
   // cy.wait(2000);
    cy.get('h3[data-test="error"]').should('exist');
    cy.url().should('eq',"https://www.saucedemo.com/v1/checkout-step-one.html");
  })
  
  it ("successful checkout",()=>{
    cy.visit('https://www.saucedemo.com/v1/checkout-step-one.html');
      cy.fixture('example').then((userFixture) => {
        cy.successfulcheckout(userFixture.firstName,userFixture.lastName,userFixture.postalCode);
        cy.url().should('eq',"https://www.saucedemo.com/v1/checkout-step-two.html");
        cy.get('.cart_button').click();
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER');
      })
    }) 
    after(() => {
      cy.get('div[class="bm-burger-button"]').click();
      cy.get('#logout_sidebar_link').click();
      cy.url().should('eq',"https://www.saucedemo.com/v1/index.html");
  
    })
})
