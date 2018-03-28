# FrontModule_DesignDocument
## Directory structure
```
_dev-front				// フロント開発ディレクトリ
├─ src					// フロントモジュール
│  ├─ api				// サーバー通信処理群
│  │  └─ member.js		// 社員ページ処理
│  ├─ assets			// アセット(静的)ファイル	
│  │  ├─ 
│  │  └─
│  ├─ components		// コンポーネント	
│  │  ├─ globals		// 共通コンポーネント
│  │  │  ├─ Header		// ヘッダーコンポーネント
│  │  │  └─ Menu		// メニューコンポーネント
│  │  └─ Member			// 社員一覧コンポーネント
│  ├─ router			// ルーティング
│  │  └─ index.js
│  ├─ store				// ストア（action、mutation、store同梱）
│  │  ├─ modules		// 各ページ処理群	
│  │  │  └─ member.js	// 社員ページ処理
│  │  └─ index.js		// ストア連結
│  ├─ utils				// 共通
│  │  ├─ style			// 共通スタイル	
│  │  ├─ async-api.js	// ajax共通処理？
│  │  └─ constants.js	// 定数？
│  ├─ App.vue			// エントリーポイント
│  └─ main.js
├─ build
├─ config
├─ node_modules
├─ node_modules
├─ static
├─ test
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ FrontDesign.md
```

## Components
ページごとにコンポーネント化し、更に細分化する  
コンポーネントは原則としてvue(javascript)の1ファイルにする	  

### 共通コンポーネント
* ヘッダー : Header.vue
* メニュー : Menu.vue

### マイページコンポーネント
~TODO~

### スケジュールコンポーネント
~TODO~

### 社員一覧コンポーネント
* 一覧
	* Member.vue
	* 詳細
		* Person.vue

### 各種申請コンポーネント
~TODO~

### 掲示板コンポーネント
~TODO~

### ファイルコンポーネント
~TODO~
