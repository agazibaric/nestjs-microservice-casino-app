# Casino Application

## 📋 Requirements

### Mandatory:

- [Node.js](https://nodejs.org/en/) (18 or higher)

- [Docker](https://www.docker.com/) and [docker compose](https://docs.docker.com/compose/)

### Optional

- [nx cli](https://nx.dev/reference/commands):

```bash
npm i -g nx
```

- [nx vscode extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

---

<br>

## 💾 Installation

Go to root of the project and run:

```bash
npm install
```

---

<br>

## 🚀 Run the application

1. Run the script which creates `.env` files:

```bash
bash scripts/create-env-files.sh
```

2. Spin up database container with following command:

```bash
docker-compose up
```

3. Run services:

```bash
npm run serve
```

You can also run single service with nx:

4. Go to http://127.0.0.1:8000/promotion/health to check is it working.

5. Try also http://127.0.0.1:8000/promotion/all. This should return empty array as you don't have any promotions in db.

6. If you have nx cli you can also run single service with:

```bash
nx serve promotion-service
```

---

<br>
