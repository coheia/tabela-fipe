const timeout = 1000*5;

class FipePriceForm {
  elements = {
    brandAutocomplete: () => cy.get('#brand-autocomplete'),
    modelAutocomplete: () => cy.get('#model-autocomplete'),
    yearAutocomplete: () => cy.get('#year-autocomplete'),
    searchButton: () => cy.get('#btn-submit'),
  };

  selectBrand(text: string) {
    if (!text) return;
    this.elements.brandAutocomplete().type(text);
    fipePriceForm.elements.brandAutocomplete().type('{downArrow}');
    fipePriceForm.elements.brandAutocomplete().type('{enter}');
  }

  selectModel(text: string) {
    if (!text) return;
    this.elements.modelAutocomplete().type(text);
    fipePriceForm.elements.modelAutocomplete().type('{downArrow}');
    fipePriceForm.elements.modelAutocomplete().type('{enter}');
  }

  selectYear(text: string) {
    if (!text) return;
    this.elements.yearAutocomplete().type(text);
    fipePriceForm.elements.yearAutocomplete().type('{downArrow}');
    fipePriceForm.elements.yearAutocomplete().type('{enter}');
  }

  clickSubmit() {
    this.elements.searchButton().click();
  }
}

const fipePriceForm = new FipePriceForm();

describe('Search for vehicle prices using tabela FIPE', () => {
  describe('User searches for a vehicle price by brand, model, and year', () => {
    const input = {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
    };

    it('Given the user is on the tabela FIPE homepage', () => {
      cy.visit('/');
    });

    it(`When the user selects the brand "${input.brand}"`, () => {
      fipePriceForm.selectBrand(input.brand);
    });
    it(`And the user selects the model "${input.model}"`, () => {
      cy.wait(timeout);
      fipePriceForm.selectModel(input.model);
    });
    it(`And the user selects the year "${input.year}"`, () => {
      cy.wait(timeout);
      fipePriceForm.selectYear(input.year);
    });
    it(`And the user clicks the "Search" button`, () => {
      fipePriceForm.clickSubmit();
    });
    it(`Then the user should see the price for the selected vehicle`, () => {
      cy.wait(timeout*2);
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/carros/price');
      });

      cy.url().should('include', 'brand');
      cy.url().should('include', 'model');
      cy.url().should('include', 'year');
    });
  });

  describe('User searches for a vehicle price with incomplete information', () => {
    const input = {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
    };

    it('Given the user is on the tabela FIPE homepage', () => {
      cy.visit('/');
    });

    it(`When the user selects the brand "${input.brand}"`, () => {
      fipePriceForm.selectBrand(input.brand);
    });
    it(`And the user does not select a model`, () => {});
    it(`And the user does not select a year`, () => {});
    it(`And the user clicks the "Search" button`, () => {
      fipePriceForm.clickSubmit();
    });
    it(`Then the user should see an error message "Preencha o modelo do veículo"`, () => {
      cy.contains('Preencha o modelo do veículo');
    });
  });

  describe('User searches for a vehicle price for a non-existent combination', () => {
    const input = {
      brand: 'Toyota',
      model: 'NonExistentModel',
      year: '2020',
    };

    it('Given the user is on the tabela FIPE homepage', () => {
      cy.visit('/');
    });

    it(`When the user selects the brand "${input.brand}"`, () => {
      fipePriceForm.selectBrand(input.brand);
    });
    it(`When the user type the model "${input.model}"`, () => {
      cy.wait(timeout)
      fipePriceForm.selectModel(input.model);
    });
    it(`Then the user should see a message "Nenhum resultado encontrado"`, () => {
      cy.contains('Nenhum resultado encontrado');
    });
  });

  describe('User clears the selected model', () => {
    const input = {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
    };

    it('Given the user is on the tabela FIPE homepage', () => {
      cy.visit('/');
    });

    it(`When the user selects the brand "${input.brand}"`, () => {
      fipePriceForm.selectBrand(input.brand);
    });
    it(`And the user selects the model "${input.model}"`, () => {
      cy.wait(timeout);
      fipePriceForm.selectModel(input.model);
    });
    it(`And the user selects the year "${input.year}"`, () => {
      cy.wait(timeout);
      fipePriceForm.selectYear(input.year);
    });
    it(`And the user clears the selected model`, () => {
      fipePriceForm.elements.modelAutocomplete()
        .closest('.MuiInputBase-root')
        .find('.MuiAutocomplete-clearIndicator')
        .click({force: true});
    });
    it(`Then the model field should be empty`, () => {
      fipePriceForm.elements.modelAutocomplete().should('have.value', '');
    });
    it(`Then the year field should be not visible`, () => {
      fipePriceForm.elements.yearAutocomplete().should('not.exist')
    });
  });
});
