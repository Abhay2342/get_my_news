# GET MY NEWS - BACKEND

Our backend is powered by **ExpressJS**, ensuring robust server-side logic and routing. We prioritize security by utilizing bcrypt to hash and securely store passwords in **MongoDB**. We seamlessly integrate with the **WorldNewAPI** to collect news data and offer features for users to modify their profile information securely.

## Features

- **Authentication System**: Securely stores user credentials in MongoDB, ensuring data integrity.
- **Integration with WorldNewAPI**: Collects real-time news data to provide personalized news updates.
- **User Profile Management**: Enables users to modify their profile information, including name, email, password, and profile picture.

## PRE-REQUISITES

### Install Node Package Manager

Install [NodeJs](https://nodejs.org/en/download)

### Cloning & Running in Local

Clone the repository:

```bash
git clone https://github.com/Abhay2342/get_my_news
```

Navigate to the frontend directory:

```bash
cd get_my_news/server
```

Install dependencies:

```bash
npm install
```

Start Development Server:

```bash
npm start
```

> [!IMPORTANT]  
> For local testing, create .env file in `/get_my_news/server` and create 3 variable
> NEWS_API = `NEWS_API`
> ATLAS_URI = `mongodb+srv://<username>:<password>@username-cluster.xyz.mongodb.net/`
> PORT = `3000`

## Ways to contribute

First off, thanks for taking the time to contribute! 🎉🎉

When contributing to this repository, please first discuss the change you wish to make via issue with the maintainers of this repository before making a change. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

1. Solve the issues that are listed.
2. Create your own issue and then send PR.

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow. The basic workflow:

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. Create a **branch** and name it with the `issue number`
4. **Commit** changes to the branch
5. **Push** your work back to your fork
6. **Rebase** your branch with the master branch
7. Submit your **Pull Request** so that we can review it

Please submit your issues and pull requests while following the automated template. During the contributing phase abide by the [Contributing Guidelines](https://github.com/Abhay2342/get_my_news/blob/master/CONTRIBUTING.md).
