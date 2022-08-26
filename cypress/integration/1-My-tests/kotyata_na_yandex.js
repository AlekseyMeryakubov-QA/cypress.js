describe('Проверка котят на странице Yandex', function () {

     it('Открытие сайта', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята').type('{enter}');
        cy.contains('Картинки по запросу «котята»')
        })
})