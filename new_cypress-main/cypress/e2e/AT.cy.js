describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get ('#mail').type('german@dolnikov.ru'); // Ввели корректный логин
         cy.get ('#pass').type('iLoveqastudio1');  // Ввели корректный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации появился текст
         cy.get('#messageHeader').should('be.visible') // текст виден пользователю
            }),
    it('Проверка кнопки "Забыли пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажал забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели корректный пароль  
         cy.get('#restoreEmailButton').click(); // Нажал 'Отправить код'
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что появился текst
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        }),
    it('Проверка неправильного пароля', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get ('#mail').type('german@dolnikov.ru'); // Ввели корректный логин
            cy.get ('#pass').type('iLoveqastudio')  // Ввели neкорректный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что появился текst
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
         }),
    it('Проверка неправильного логина', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get ('#mail').type('germa@dolnikov.ru'); // Ввели neкорректный логин
            cy.get ('#pass').type('iLoveqastudio1');  // Ввели корректный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что появился текst
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        }),
    it('Проверка неправильного логина', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get ('#mail').type('germadolnikov.ru'); // Ввели neкорректный логин
            cy.get ('#pass').type('iLoveqastudio1');  // Ввели корректный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что появился текst
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        }),
    it('Проверка строчных букв в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get ('#mail').type('GerMan@Dolnikov.ru'); // Ввели neкорректный логин
            cy.get ('#pass').type('iLoveqastudio1');  // Ввели корректный пароль
            cy.get('#loginButton').click(); // Нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что появился текst
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })     	
    })
