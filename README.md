# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

# 自分用メモ

## 新しく React アプリを作る

```shell
npx create-react-app my-app
cd my-app
npm start
```

ここ、yarn があると、yarn をデフォルトで使うようになってる?
npm を使って欲しいんだけど、そういう設定できるのかな..??

## package.json とかって git commit していいの??

⬇️ ということで、むしろ「コミットしましょう」ということでした。

> Git管理下では結局どのように運用すればいいの？
> package-lock.jsonもpackage.jsonと同様にコミットしてGit管理に含める必要があります。

> package.jsonだけではなく、package-lock.jsonもGit管理に含めることによって先述したようにインストールされるパッケージのバージョンを固定することができ、それぞれの開発者の環境でpackage-lock.jsonに指定されたバージョンの環境をnpm installによって再現することができるからです。

> なので、ファイルが巨大になってしまうnode_moduleディレクトリのみgitignoreしてgit管理から外しておいて、package.jsonとpackage-lock.jsonは両方ともコミットするようにしましょう。


## Links

導入
* [ReactでQiitaAPIを叩いてアプリを作る入門](https://qiita.com/Kotomi1338/items/569bc88f23134d7fae73)
* [新しい React アプリを作る](https://ja.reactjs.org/docs/create-a-new-react-app.html)
* [package.jsonとpackage-lock.jsonの運用方法について](https://engineering.mobalab.net/2019/08/08/package-json%E3%81%A8package-lock-json%E3%81%AE%E9%81%8B%E7%94%A8%E6%96%B9%E6%B3%95%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/)

フォームとやりとりしたい
* [フォーム - React official Document](https://ja.reactjs.org/docs/forms.html)

リスト要素を描画したい
* [React.jsでループするには。](https://qiita.com/konojunya/items/cb026a2aa3df1837d587)
* [リストと key - React official Document](https://ja.reactjs.org/docs/lists-and-keys.html)

bootstrap 導入
* [React に bootstrap を導入 - React でカスタムページネーションを構築する方法](https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react-ja)
* [Bootstrap 4でブロック中央寄せ](https://qiita.com/Fendo181/items/1f32cbbfa676766ae331)
* [【React】コンポーネントにスタイルを適用する方法](https://cpoint-lab.co.jp/article/201906/10208/)

ルーティング
* [【React】ルーティング設定方法](https://qiita.com/k-penguin-sato/items/e46725edba00013a8300)
* [今から始めるReact入門 〜 React Router](https://qiita.com/TsutomuNakamura/items/34a7339a05bb5fd697f2)
* [react router v^4.0.0 Uncaught TypeError: Cannot read property 'location' of undefined](https://stackoverflow.com/questions/42892488/react-router-v4-0-0-uncaught-typeerror-cannot-read-property-location-of-unde)