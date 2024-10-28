## Запуск проекта

### Установка

1. Клонируйте репозиторий на ваш локальный компьютер:

   ```sh
   git clone https://github.com/Egleman/sreda.tech-test.git
   ```

2. Перейдите в папку проекта:

   ```sh
   cd sreda.tech-test
   ```

### Запуск проекта

С использованием Docker compose:

Вставьте в терминал данную команду:
   ```sh
   docker compose up --build -d
   ```

Проект будет запущен в режиме разработки на `http://localhost:3011`. Откройте этот URL в вашем браузере, чтобы увидеть приложение.


### Запуск без Docker compose

Установите зависимости:

   ```sh
   npm install
   ```
Для запуска проекта в режиме разработки выполните команду:

```sh
npm run dev
```

Проект будет запущен на `http://localhost:5173`. Откройте этот URL в вашем браузере, чтобы увидеть приложение.

### Сборка проекта

Для создания сборки для продакшена выполните команду:

```sh
npm run build
```

## Зависимости

- TypeScript
- Vue 3