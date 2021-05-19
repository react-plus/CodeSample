## Description

こちらはログイン機能のサンプルソースコードです。

## Tech Stack

### Setup env
Copy `.env.development` -> `.env`

### Breakdown component using atomic design
- [x] [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

### Core

- [x] [React](https://facebook.github.io/react/)
- [x] [React Router](https://github.com/ReactTraining/react-router)
- [x] [Redux](https://redux.js.org/)
- [x] [Redux toolkit](https://redux-toolkit.js.org/)
- [x] [Styled Components](https://styled-components.com/)
- [x] [Tailwindcss](https://tailwindcss.com/)
- [x] [Ant design](https://ant.design/)

### Linting

- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)


## Available Scripts

プロジェクトディレクトリで以下を実行できます。

### `yarn start`

アプリを開発モードで実行する。\
[http://localhost:3000](http://localhost:3000)を開いたら、ブラウザーで機能を閲覧できる。

### `yarn build`

本番用のアプリをビルドフォルダーにビルドします。\
Reactを本番モードで正しくバンドルし、ビルドを最適化して
