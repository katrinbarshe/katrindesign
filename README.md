# katrindesign

Статический сайт-портфолио для katrindesign.com. Чистый HTML/CSS,
без сборщиков и фреймворков.

## Структура

- `index.html` — вся страница
- `styles.css` — стили
- `assets/images/` — локальные картинки (никаких хотлинков на другие сайты)
- `katrin-barshe-logo.svg` — логотип
- `CNAME` — домен для GitHub Pages (`katrindesign.com`)

## Как вносить правки

Публикация автоматическая: GitHub Pages пересобирает и обновляет сайт
при каждом пуше в ветку `main`. Ручной загрузки файлов на хостинг не требуется.

1. Открой `index.html` / `styles.css` и внеси правки локально.
2. Проверь результат в браузере (можно просто открыть `index.html`,
   либо поднять локальный сервер: `python -m http.server 8000`).
3. Закоммить изменения:
   ```bash
   git add .
   git commit -m "Короткое, понятное описание правки"
   ```
4. Запушь в GitHub:
   ```bash
   git push
   ```
5. Через 1-2 минуты изменения появятся на katrindesign.com
   (прогресс деплоя можно смотреть во вкладке **Actions** репозитория на GitHub).

## Как называть коммиты

Коротко и по делу, в повелительном наклонении, что изменилось и зачем:

- `Add SeaGlide gallery photos`
- `Fix broken image path in Book Design section`
- `Update contact email in footer`

Не нужно писать «wip», «fix», «update 2» — из истории должно быть понятно,
что происходило с сайтом, даже через год.
