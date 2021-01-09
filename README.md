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