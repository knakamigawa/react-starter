This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 概要
Reactの環境を構築済みで始めるセット

ESLintとPrettierを使用しています。
環境はWebStorm推奨。

# WebStorm設定

標準のCodeStyleを「JavaScript Standard Style」にします。
![image](https://user-images.githubusercontent.com/18062740/57127238-b2acc800-6dca-11e9-8508-f43553627d93.png)

![image](https://user-images.githubusercontent.com/18062740/57127260-c7895b80-6dca-11e9-80da-899616fc00d4.png)


## ESLint
ESLintのプラグインが入ってい無ければインストール。
パスは適宜自分の環境に合わせてください
![image](https://user-images.githubusercontent.com/18062740/57127361-1d5e0380-6dcb-11e9-903c-dbdb8b30a2cd.png)


## Prettier
![image](https://user-images.githubusercontent.com/18062740/57127094-3d40f780-6dca-11e9-8688-e038588d6165.png)

![image](https://user-images.githubusercontent.com/18062740/57127070-34e8bc80-6dca-11e9-9829-7578edbeb536.png)


## `yarn start`

Devサーバーを起動してソース変更をリアルタイムに確認します<br>
Open [http://localhost:3000](http://localhost:3000) 


## `yarn test`

Jestによるテストを実施

## `yarn run build`

ソースをbuildして実際に配置できるようにする

## `serve -s build` 

build結果を実際に表示する
URL http://localhost:5000

初回は事前にserveをグローバルインストールする

`yarn global add serve`




## `yarn sb`

Storybookの起動
URL http://localhost:6006/  

初回は事前にStorybookをグローバルインストールする

`yarn add global storybook`



