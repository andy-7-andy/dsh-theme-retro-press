# 发布流程（npm + GitHub）

> 适用：`dsh-theme-retro-press` 每次发版。
> 这份文档记录 3.8.0 首次发布时踩过的每个坑，照做即可，不需要再试错。

---

## 零、为什么不能直接 `npm publish`

账号 `andy-7` 的 2FA 是 **安全密钥（WebAuthn）**，模式为「授权和发布」。
npm 对这类账号的策略是：

- 命令行 `npm publish` → `403 Two-factor authentication or granular access token with bypass 2fa enabled is required`
- 加 `--otp=xxxxxx` 也一样 403（**没有 6 位验证码**，安全密钥不产生 TOTP）
- 建「Bypass 2FA」的 granular token 也走不通（2026-08 起账号变更已被限制，表单里的勾选会被重置）

**结论：发布必须经过一次浏览器交互 + 触碰安全密钥。**

npm 为这种情况提供了「暂存发布（staged publish）」：
先把包传到暂存区（命令行的 token 就够），再由账号本人在网页上批准（浏览器弹安全密钥）。
批准动作就是那次「proof-of-presence」，2FA 得以满足。

---

## 一、发版前检查清单

在 `D:\Systems\dsh\plugins\retro-press` 下：

```powershell
# 1. 版本号：三处要一致
#    package.json / locale/zh.json / locale/en.json（meta.description 若提到版本特性）
node -e "console.log(require('./package.json').version)"

# 2. 语法与健康检查
node --check client.js
node --check index.js
powershell -NoProfile -ExecutionPolicy Bypass -File D:\Systems\dsh\plugins\health-check.ps1
#    → 必须输出 HEALTHY

# 3. 打包内容预览（确认 files 白名单没漏图）
npm pack --dry-run

# 4. CHANGELOG.md 顶上补一条
```

⚠️ 本机 pwsh 执行策略禁止直接跑 `.ps1`，一律用 `powershell -NoProfile -ExecutionPolicy Bypass -File <path>`。

---

## 二、GitHub 侧

```powershell
cd D:\Systems\dsh\plugins\retro-press
git add -A
git commit -m "Retro Press <版本>: <一句话>"
git push origin main

# 打 tag + Release（Release 资产可供市场条目 tarball: 引用）
gh release create v<版本> --repo andy-7-andy/dsh-theme-retro-press `
  --title "Retro Press <版本>" --notes-file D:\tmp\release-notes.md
```

仓库：https://github.com/andy-7-andy/dsh-theme-retro-press
默认分支：`main`

---

## 三、npm 暂存发布

### 3.1 拿到可用 token

网页：https://www.npmjs.com/settings/andy-7/tokens/granular-access-tokens/new

| 字段 | 取值 |
|---|---|
| Token name | 随意，如 `retro-press-cli` |
| Permissions | **Read and write (publish and stage)** |
| Select packages | **All packages** |
| Organizations → Permissions | **No access**（不选组织时必须是它，否则报 "You must select at least one organization…"） |
| Expiration | 7 天足够 |

生成后立刻读取（页面只显示一次）。**token 只在命令行临时传参，不要写进 `.npmrc` 或任何文件。**

### 3.2 上传到暂存区

```powershell
cd D:\Systems\dsh\plugins\retro-press
$tok='npm_xxxxxxxx'
npm stage publish . --registry=https://registry.npmjs.org/ `
  --//registry.npmjs.org/:_authToken=$tok --access public
```

成功后输出 `staged with id <stage-id>`。

### 3.3 等校验

```powershell
npm stage list --registry=https://registry.npmjs.org/ --//registry.npmjs.org/:_authToken=$tok
```

`status: validating` → `status: staged`（约 1–4 分钟）。**必须等到 `staged` 才能批准**，否则批准会 404。

### 3.4 本人在网页批准（唯一需要人工的一步）

打开：**https://www.npmjs.com/settings/andy-7/staged-packages**

> 若界面已中文化，左侧菜单显示为「分期套餐」——那是 Firefox 把 Staged Packages 机翻的结果。

找到 `<包名> <版本>` → 点 **Approve** → 浏览器弹出安全密钥确认（Windows Hello / PIN / 硬件钥匙）→ 完成。

> **命令行没法替代这一步。** `npm stage approve <id>` 会报 `EOTP`，因为安全密钥不能通过 CLI 传递。

### 3.5 验证

```powershell
npm view dsh-theme-retro-press version dist-tags --registry=https://registry.npmjs.org/
```

预期：`version` 为新版本号，`dist-tags.latest` 指向它。

⚠️ 暂存期间 registry 上会有一个 **`0.0.0-stage` 占位版本**，`latest` 也指向它——这是正常中间态。一旦批准，新版本顶替它成为 `latest`。若长时间停在这个状态，说明**批准没生效**。

---

## 四、用户端安装

```powershell
dsh plugin add dsh-theme-retro-press
```

或本地开发：把 `profiles\desktop\package.json` 里的依赖写成
`"dsh-theme-retro-press": "link:D:/Systems/dsh/plugins/retro-press"`，
并在 `dsh.profile.bundles` 数组里加同名条目。

---

## 五、上架 DSH 插件市场

- 目录仓库：https://github.com/awesome-dsh-plugin/awesome-dsh-plugin
- 一个插件一个文件：`data/plugins/<owner>__<repo>.yml`，README 由脚本生成，**不要手改 README**
- 必需字段：`url`（与仓库地址完全一致）、`name`（`owner/repo`）、`category`（主题类填 `theme`）、`description.en`（`zh` 可选）
- `description` 里含 `: `（冒号+空格）必须加引号
- 硬性要求：
  - 仓库 `package.json` 声明 **`dsh.bundle`**（只声明 `dsh.client` 会被拒）
  - 仓库根有 `cordis.patch.yml`
  - 有真实代码
  - **仓库建满 1 天**（新建仓库当天提 PR 会被退回）
- 提交方式：fork → 加 yml → 开 PR

条目草稿：`D:\Systems\dsh\workspace\retro-press-market-entry.yml`

---

## 六、常见故障

| 现象 | 原因 | 处理 |
|---|---|---|
| `npm publish` 403 | 账号 2FA 为安全密钥、token 无 bypass | 改走 staged publish |
| `npm publish --otp=` 仍 403 | 安全密钥不产生 TOTP | 同上 |
| `npm stage approve` 404 | 还没校验完（仍 validating） | 等 `status: staged` |
| `npm stage approve` EOTP | 批准要求本人 2FA | 网页点 Approve，碰密钥 |
| registry 上只有 `0.0.0-stage` | 暂存未批准 | 走 3.4 |
| 表单报 "must select at least one organization" | Organizations Permissions 是 Read/Write 但没选组织 | 改成 No access |
| 装了新版本但主题列表里没有 | DSH 没重启，旧进程还挂着旧包名 | 完全退出 DSH 再启动 |
| 主题在但配色丢了 | 主题注册 id 变了（如 `@local/retro-press` → `dsh-theme-retro-press`），旧选择失效 | 设置 → 外观 里重选一次配色 |

---

## 七、想省掉「每次碰密钥」

账号设置 →「修改 2FA」→ 模式改为 **仅授权（authorization only）**，
之后 `npm publish` 用 granular token 即可直接发布，不再需要网页批准。
代价：任何有写权限的 token 都能发包，安全性下降一档。**默认不建议。**

---

## 八、本机环境备忘

- Node/npm：`D:\程序库\NodeJS\`，npm 11.19.0
- 执行策略已设为 `CurrentUser = RemoteSigned`（否则 `npm.ps1` 加载不了）
- npm 默认 registry 是 `registry.npmmirror.com`，**发版必须显式 `--registry=https://registry.npmjs.org/`**
- 插件源目录：`D:\Systems\dsh\plugins\retro-press`
- 桌面 profile：`D:\Systems\dsh\profiles\desktop\`（`node_modules\dsh-theme-retro-press` 是指向源目录的 Junction）
