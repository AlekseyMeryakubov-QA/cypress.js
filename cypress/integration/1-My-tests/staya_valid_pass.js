
describe('Тестирование авторизации staya', function () {
    
    it('Поподаю на сайт и авторизуюсь', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Alex_meryakubov@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Qwerty');
        cy.get('.auth-form__submit > .s-button__content').click()
    })
})
