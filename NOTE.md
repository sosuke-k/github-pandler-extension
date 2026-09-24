# ロゴ・アイコン素材の保管場所

拡張機能のロゴ関連素材（Illustrator 原稿および各サイズの書き出し、計約 2.3MB）は Git では管理せず Google Drive に置いています。
リポジトリで使う実体は `app/images/` 以下（`pandler.svg` / `16x16.png` / `128x128.png`）にあります。

**Drive フォルダ（非公開 / オーナーのみアクセス可）**
https://drive.google.com/drive/folders/1LDKlcjAQWNb2ZTyNg-yyrNyvgCj1roB_

| ファイル | サイズ | 用途 |
|---|---:|---|
| `pandler_logo.ai` | 1.6MB | **ロゴ原稿**（Adobe Illustrator CC 2017 / Macintosh） |
| `Hand.svg` | 32KB | ロゴの手のパーツ（Illustrator 13.0.2 書き出し） |
| `pandler_logo.png` | 20KB | ロゴ PNG 書き出し |
| `pandler_logo.png.ico` | 364KB | Windows アイコン書き出し |
| `pandler_logo.png.icns` | 72KB | macOS アイコン書き出し |
| `pandler_logo.png.zip` | 56KB | 上記一式の zip |
| `112x112.png` / `640x400.png` | 80KB / 76KB | Chrome ウェブストア掲載用画像 |
| `f4bf01eaab49e477/` | 72KB | アイコンセット 9 枚（16/24/32/48/64/96/128/256/512 px） |

## Chrome ウェブストア登録用の zip 作成

```
zip -r ./app.zip ./app/ -x ./app/.DS_Store -x ./app/images/.DS_Store
```
