# FrontModule_DesignDocument
## Directory structure
```
_dev-front				// フロント開発ディレクトリ
├─ src					// フロントモジュール
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
│  ├─ store				// ストア
│  │  ├─ actions
│  │  ├─ getters
│  │  └─ modules
│  ├─ utils				// 共通
│  │  ├─ style			// 共通スタイル	
│  │  ├─ async-api.js	// API共通処理？
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
コンポーネントは原則としてhtml、scss(css)、vue(javascript)の3ファイルを1セットとする  

### 共通コンポーネント
* ヘッダー : Header
	* header.html
	* header.scss
	* Header.vue
* メニュー : Menu
	* menu.html
	* menu.scss
	* Menu.vue

### マイページコンポーネント
~TODO~

### スケジュールコンポーネント
~TODO~

### 社員一覧コンポーネント
* 一覧
	* member.html
	* member.scss
	* Member.vue
	* 詳細
		* person.html
		* person.scss
		* Person.vue

### 各種申請コンポーネント
~TODO~

### 掲示板コンポーネント
~TODO~

### ファイルコンポーネント
~TODO~
