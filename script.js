//your code here
body:"() => { 
    cy.visit(baseUrl + "/main.html"); 
    cy.get('div').then(ans => { 
        let text = ans.text().trim(); 
        expect(text).to.eq('This is a demo of box model, try to replicate this box model in Html & Css and pass all the test cases.'); 
    }); 
}"