<div align="center">

# ⚙️ Web Back End — Holberton School

### Exercices Backend — Python & Node.js

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![ES6](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)

**Série d'exercices couvrant les fondamentaux du développement backend : ES6, Python async, NoSQL, Node.js.**

</div>

---

## 📋 Description

Ce dépôt regroupe les projets du curriculum **Web Back End** de Holberton School. Chaque dossier correspond à un module indépendant couvrant un concept fondamental du backend.

---

## 🗂️ Modules

| Dossier | Langage | Contenu |
|---------|---------|---------|
| `ES6_basic` | JavaScript | Variables, arrow functions, destructuring, spread operator |
| `ES6_classes` | JavaScript | POO ES6 : classes, héritage, méthodes statiques |
| `ES6_data_manipulation` | JavaScript | map, filter, reduce, Set, Map, WeakMap |
| `ES6_promise` | JavaScript | Promises, async/await, gestion des erreurs asynchrones |
| `Node_JS_basic` | Node.js | Modules, HTTP natif, Express, lecture de fichiers |
| `NoSQL` | Python + MongoDB | pymongo, requêtes, agrégations, index |
| `pagination` | Python | Pagination simple, hypermedia, deletion-resilient |
| `python_async_function` | Python | asyncio, coroutines, tasks |
| `python_async_comprehension` | Python | async generators, comprehensions |
| `python_variable_annotations` | Python | Type hints, mypy, validation de types |

---

## 🛠️ Technologies

- **Python 3.10+** — asyncio, type hints, pymongo
- **Node.js 18+** — modules CommonJS/ESM, HTTP natif
- **Express 4** — routing, middleware
- **MongoDB** — base NoSQL, requêtes, agrégations
- **ES6+** — syntaxe moderne JavaScript

---

## 📋 Prérequis

```bash
# Python
python3 --version   # >= 3.10

# Node.js
node --version      # >= 18

# MongoDB (pour le module NoSQL)
mongod --version    # >= 6.0
```

---

## 🚀 Installation & utilisation

```bash
# Cloner le repo
git clone https://github.com/loties1533/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end

# Exemple — Module ES6_basic
cd ES6_basic
npm install
npm run dev

# Exemple — Module Python async
cd python_async_function
python3 0-basic_async_syntax.py
```

---

## 💡 Exemples

### ES6 — Promises
```javascript
// Chaîner des promesses avec async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}
```

### Python — Async
```python
import asyncio

async def fetch_concurrent(n: int) -> list:
    """Lance n coroutines en parallèle et retourne les résultats."""
    tasks = [asyncio.create_task(some_coroutine()) for _ in range(n)]
    return await asyncio.gather(*tasks)
```

---

## 🧪 Tests

Chaque module dispose de ses propres tests :

```bash
# Python
python3 -m pytest <module>/tests/

# JavaScript
cd <module> && npm test
```

---

<div align="center">

**Holberton School — Web Back End — 2025**

</div>
