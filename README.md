# pis-lab06
Лабораторна робота №6 - "Використання та створення API"

# Description
Сервіс The Lord Of The Rings API надає інформацію про книги, персонажів, кінотрилогію та цитати робіт  Дж.Р.Р. Толкіна "Володар перснів".

# API Key
API вимагає ключ доступу для більшості маршрутів. Ви можете отримати маркер доступу, зареєструвавшись [тут] (https://the-one-api.dev/sign-up). Після реєстрації вам буде наданий API Key.
Вам потрібно надсилати ключ доступу як маркер-носій на кожен запит, який ви робите, на API. Маркери на пред'явника повинні бути включені в заголовок авторизації у наступному форматі:
```Authorization: Bearer your-api-key-123```

# Avaliable routes
Усі маршрути повинні мати префікс https://the-one-api.dev/v2. Без аутентифікації доступна лише кінцева точка ```/ book```.

# Ви можете додати параметри пагінації, сортування та фільтрації до своїх запитів API.
### Pagination
** Option -- Example: **
1. limit -- ```/characters?limit=100```
2. page -- ```/character?page=2 (limit default is 10)```
3. offset -- ```/character?offset=3 (limit default is 10)```
### Sorting
** Examples: **
1. ```/character?sort=name:asc ```
2. ```/quote?sort=character:desc```
### Filtering
Фільтрація працює шляхом додавання простих виразів параметрів url до виразів пошуку mongodb і може бути застосована до будь-якого доступного ключа в моделях даних.
** Option -- Example: **
1. match, negate match -- ```/character?name=Gandalf, /character?name!=Frodo```
2. include, exclude -- ```/character?race=Hobbit,Human, /character?race!=Orc,Goblin```
3. exists, doesn't exists -- ```/character?name, /character?!name```
4. regex -- ```/character?name=/foot/i , /character?name!=/foot/i```
