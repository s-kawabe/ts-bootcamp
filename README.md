# TypeScript Online Bootcamp @とらゼミ
とらゼミ内でのTypeScript講座を受講しました。
https://github.com/deatiger/ts-hotel-demo

## 概要
検索フォームを作成し、そこに入力された文字列で
楽天APIを叩く。

## モジュールインストール

```
yarn add axios
```
APIを叩く際にaxiosを使う

```
yarn add --dev @types/axios node-sass@4.14.1
```
axiosの型定義ファイルと、sassを使うためのライブラリ
node-sassの最新版はreactに対応していないためverを下げてインストール

**補足**
yarn devなし→本番用デプロイでも必要なもの
yarn devあり→本番にデプロイするとき不要なもの
（型定義ファイルやsassは開発環境でしか必要無い。)

## 設定ファイル修正

```tsconsifg.json
"baseUrl": "./src",
```

## ジェネリクスを用いたカスタムフック




# エラー集

## react-jsxでエラーになる
以下を.vscode/setting.jsonに追加後、エディタリロード
https://www.it-swarm-ja.tech/ja/reactjs/%E3%80%8Cjsx%E3%80%8D%E3%83%95%E3%83%A9%E3%82%B0%E3%81%8C%E6%8C%87%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E9%99%90%E3%82%8A%E3%80%81jsx%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93/838744128/