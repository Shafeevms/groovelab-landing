# Отчёт по ребрендингу: GrooveLab → Drumion

**Дата аудита:** 22 июня 2026  
**Проект:** `groovelab_landing` → `drumion_landing`  
**Статус:** ребрендинг выполнен

---

## Результаты аудита (до ребрендинга)

По исходному аудиту найдено **135 вхождений** бренда GrooveLab в **18 файлах** (без `.next/`, `node_modules/`, `.git/`).

| Файл | Кол-во вхождений |
|------|-----------------|
| `app/terms/page.tsx` | 37 |
| `app/privacy/page.tsx` | 28 |
| `lib/i18n.tsx` | 26 |
| `app/refund/page.tsx` | 10 |
| `app/layout.tsx` | 6 |
| `app/pricing/page.tsx` | 6 |
| `app/opengraph-image.tsx` | 4 |
| `components/LegalPage.tsx` | 4 |
| `components/Footer.tsx` | 3 |
| `package-lock.json` | 2 |
| `app/robots.ts` | 2 |
| `.idea/modules.xml` | 2 |
| `package.json` | 1 |
| `app/page.tsx` | 1 |
| `app/sitemap.ts` | 1 |
| `components/Navbar.tsx` | 1 |
| `lib/app-url.ts` | 1 |
| `lib/consent.tsx` | 1 |
| **Итого** | **135** |

**Не затронуты (намеренно):** `.idea/` (IDE), музыкальные термины `groove` / `grooves` в `lib/i18n.tsx:375`, `components/RhythmVisualizer.tsx`.

---

## Выполненные изменения

**Дата:** 22 июня 2026  
**Новый бренд:** Drumion  
**Новый домен:** `drumion.app` / `app.drumion.app`  
**Новый email:** `support@drumion.app`

### Правила замены (применены)

| Было | Стало |
|------|-------|
| GrooveLab | Drumion |
| groovelab | drumion |
| GROOVELAB | DRUMION |
| groove-lab | drumion |
| groove_lab | drumion |
| grooveLab | drumion |
| GrooveLabLanding | DrumionLanding |
| groovelab_landing | drumion_landing |
| groovelab.app | drumion.app |
| app.groovelab.app | app.drumion.app |
| support@groovelab.app | support@drumion.app |
| groovelab_consent_v1 | drumion_consent_v1 |
| groovelab-language | drumion-language |

### Изменённые файлы

| Файл | Что изменено |
|------|--------------|
| `package.json` | `name`: `groovelab_landing` → `drumion_landing` |
| `package-lock.json` | `name` (строки 2 и 8): `groovelab_landing` → `drumion_landing` |
| `app/layout.tsx` | `metadataBase`, `title`, openGraph (`title`, `url`, `siteName`), twitter `title`; все `GrooveLab` → `Drumion`, `groovelab.app` → `drumion.app` |
| `app/page.tsx` | Имя компонента: `GrooveLabLanding` → `DrumionLanding` |
| `app/sitemap.ts` | `baseUrl`: `https://groovelab.app` → `https://drumion.app` |
| `app/robots.ts` | `sitemap`, `host`: `groovelab.app` → `drumion.app` |
| `app/opengraph-image.tsx` | `alt` → Drumion; визуальный логотип: два элемента `Groove` + `Lab` объединены в один `Drumion`; домен `groovelab.app` → `drumion.app` |
| `app/pricing/page.tsx` | Метаданные `title` и весь UI-текст; email `support@groovelab.app` → `support@drumion.app` |
| `app/privacy/page.tsx` | Метаданные `title` и весь UI-текст (28 вхождений); все email-ссылки |
| `app/refund/page.tsx` | Метаданные `title` и весь UI-текст (10 вхождений); все email-ссылки |
| `app/terms/page.tsx` | Метаданные `title` и весь UI-текст (37 вхождений); все email-ссылки |
| `components/Navbar.tsx` | Текст логотипа: `GrooveLab` → `Drumion` |
| `components/Footer.tsx` | Текст логотипа, `mailto:` href (×2) |
| `components/LegalPage.tsx` | Ссылка «← GrooveLab», копирайт, email и href |
| `lib/app-url.ts` | URL: `app.groovelab.app` → `app.drumion.app` |
| `lib/consent.tsx` | `STORAGE_KEY`: `groovelab_consent_v1` → `drumion_consent_v1` |
| `lib/i18n.tsx` | Все строки бренда в локалях en / ru / es (24 строки); localStorage ключ `groovelab-language` → `drumion-language` (2 вхождения) |

### Не изменялись

- `.idea/` — IDE-конфигурация
- `lib/i18n.tsx:375` — «Practice fills and grooves» (музыкальный контекст)
- `components/RhythmVisualizer.tsx` — aria-labels «Play groove», «Reset to basic groove»
- `app/pricing/page.tsx:18` — «groove skills» (музыкальный контекст)
- Все прочие файлы, не указанные в списке

### Верификация

- Повторный поиск `GrooveLab` / `groovelab` в исходниках (кроме `.idea/`): **0 совпадений**
- `npm run build`: **успешно** (Next.js 15.5.19)