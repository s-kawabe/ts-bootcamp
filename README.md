# TypeScript Online Bootcamp @とらゼミ
とらゼミ内でのTypeScript講座を受講しました。<br>
https://github.com/deatiger/ts-hotel-demo

## 概要
検索フォームを作成し、そこに入力された文字列で
楽天APIを叩く。

## モジュールインストール

```
yarn add axios
```
→APIを叩く際にaxiosを使う

```
yarn add --dev @types/axios node-sass@4.14.1
```
axiosの型定義ファイルと、sassを使うためのライブラリ<br>
node-sassの最新版はreactに対応していないためverを下げてインストール<br><br>

**補足**<br>
- yarn devなし→本番用デプロイでも必要なもの
- yarn devあり→本番にデプロイするとき不要なもの<br>
（型定義ファイルやsassは開発環境でしか必要無い。)

## 設定ファイル修正

```tsconsifg.json
"baseUrl": "./src",
```

## コンポーネントのpropsに型をつける

```tsx
mport React, {ChangeEvent, FC} from 'react'
import styles from 'styles/atoms/form.module.scss'

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number
  type: string 
}

const TextInput: FC<Props> = ({ onChange, value, type }) => {
  return (
    <input 
      className={styles.form__text}
      onChange={(e) => onChange(e)}
      value={value}
      type={type}
    />
  )
}

export default TextInput
```

## ジェネリクスを用いたカスタムフック

```tsx
import {ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
type UseChangeEvent<T> = {
  (update: Dispatch<SetStateAction<T>>): (event: ChangeEvent<HTMLInputElement>) => void
}

// Dispatch<SetStateAction<<T>> は useStateのset○○の型情報である。

export const useStringChangeEvent: UseChangeEvent<string> = (update) => {
  return useCallback((event: ChangeEvent<HTMLInputElement>) => {
    update(event.target.value)
  }, [update])
}

export const useNumberChangeEvent: UseChangeEvent<number> = (update) => {
  return useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if(/^[0-9]+$/.test(event.target.value)){
      update(Number(event.target.value))
    }
  }, [update])
}

```

# エラー集

## react-jsxでエラーになる
package.jsonのバージョンを下げる

```package.json
"typescript": "~4.0.3",
```

上記修正後、`npm install`or`yarn`実行で直った。