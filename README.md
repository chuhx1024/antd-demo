# React + TypeScript + Vite

## 为项目配置别名 @

-   因为 import xxx from '@/xxx/xxx' 会报错 所以要配置

```js
// tsconfig.json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
      "@/*": ["src/*"]
  }
}
```
