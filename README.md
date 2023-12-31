# React + TypeScript + Vite

## 使用 vite 创建 React 项目时

```js
// SWC : 主要对标Babel，誓言要代替Babel （据说：转译性能比Babel快20倍）
? Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
❯   TypeScript + SWC
    JavaScript
    JavaScript + SWC

```

## 代码介绍

```js
ReactDOM.createRoot(document.getElementById('root')!).render(
    // StrictMode  严格模式
    // 1. 检查组件是不是纯函数
    // 2. 及早的发现 useEffect 中的错误
    // 3. 警告过时的 API  可以用 但是不推荐了
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)

```

## 为项目配置别名 @

```js
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
```

-   1. 因为用了 node:url

```ssh
yarn add -D @types/node
```

-   2. 因为 import xxx from '@/xxx/xxx' 会报错 所以要配置

```js
// tsconfig.json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
      "@/*": ["src/*"]
  }
}
```

## 添加 eslintPlugin 插件 eslint 不通过 vite 编译报错 不通过

```ssh
yarn add vite-plugin-eslint -D
```

```js
// vite.config.ts
import pluginEslint  from 'vite-plugin-eslint'
  plugins: [
    pluginEslint({
        include: ['src/*.tsx', 'src/**/*.tsx', 'src/*.ts', 'src/**/*.ts']
      }
    )
  ],
```

> 注意 配置完 刷新下浏览器

## 使用 局部样式

-   1. 文件名定义成 xxx.module.scss
-   2. 在组件中引入 import style from './App.module.scss'
-   3. 使用 <div className={style.app}></div>
-   4. 为了支持.驼峰 需要 vite 中配置

```ts
// vite.config.ts

  css: {
      modules: {
          localsConvention: 'camelCase',
      },
  },
```

-   使用

```js
// App.module.scss
.app {
    height: 100vh;
    .app-test {
        font-size: 30px;
    }
}
// app.tsx
 import style from './App.module.scss'
 ...
 <div className={style['app-test']}>123</div>
 <div className={style.appTest}>123</div>  // 使用驼峰也可以了
```

## 使用 classnames 模块
