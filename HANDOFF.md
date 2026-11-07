# Retro Press 交接文档（HANDOFF）

> 最后更新：2026-11-07 · 包版本 **3.10.0**（九套配色，全部以实物命名，每套一套自己的中英文字面）· 3.8.4 为 npm 上的 latest，3.10.0 待发 · 仓库 https://github.com/andy-7-andy/dsh-theme-retro-press

这份文档写给"下一次接手的人（或下一个会话的 AI）"。目标是：**不用重读历史对话，也能改一个配色、发一个版本**。

---

## 1. 这是什么

一个 DeepSeek Harness 的**客户端主题插件**：给 DSH Web 界面换一整套"复古印刷"皮肤——纸纹、规则线、油墨配色、排印字体、深色模式的磷光代码块。

- npm 包名：`dsh-theme-retro-press`
- 展示名：复古油墨 / Retro Press
- 源目录：`D:\内容与发行\插件发行\复古油墨主题-dsh-theme-retro-press`（**这是唯一真身**，其它位置都是联接）
- 依赖方式：桌面 profile 用 `link:` + 两条 Junction

```
profiles\desktop\package.json      "dsh-theme-retro-press": "link:D:/内容与发行/插件发行/复古油墨主题-dsh-theme-retro-press"
profiles\desktop\node_modules\dsh-theme-retro-press   -> 源目录（Junction）
profiles\node_modules\dsh-theme-retro-press           -> 源目录（Junction）
```

改源目录即生效，但**必须重启 DSH 才会加载**（见 §7 坑）。

---

## 2. 文件清单

```
retro-press/
├── client.js          ← 全部逻辑：15 套配色、字体栈、CSS 生成、设置页 UI（约 1750 行）
├── index.js           ← 宿主侧入口（很薄）
├── cordis.patch.yml   ← 插件声明：- insert: [{id: retro-press, name: 'dsh-theme-retro-press'}]
├── package.json       ← name/version/engines.dsh/dsh.bundle/dsh.client/files
├── icon.svg
├── locale/zh.json en.json   ← 界面文案与 meta.description
├── assets/            ← palettes.png（配色总览）、phosphor.png（磷光对比）、icon-180.png（市场图标）
├── README.md          ← 给用户看的（双语）
├── CHANGELOG.md       ← 按版本倒序
├── docs/发布流程-RELEASE.md  ← 发版避坑手册
└── HANDOFF.md         ← 本文件
```

**只有 `client.js` 需要动排版**；配色/字体/质感全在里面。

---

## 3. 配色系统

`client.js` 里的 `PALETTES` 数组，每项一套配色：

| id | 中文名 | 英文名 | 实物 | 标题 / 正文字面 |
|---|---|---|---|---|
| `moss` | 鼠尾草 | Sage | 一束干鼠尾草、亚麻布 | Fraunces＋华文中宋 / Alegreya＋华文中宋 |
| `amber` | 牛皮纸 | Kraft paper | 牛皮纸信封 | Bookman＋方正姚体 / Georgia＋华文中宋 |
| `ink` | 铅字 | Lead type | 一枚活字、一份报头 | Archivo Black＋方正小标宋 / Libre Franklin＋思源黑体 |
| `cobalt` | 蓝晒纸 | Cyanotype | 一张蓝晒相纸 | Bodoni MT＋经典宋体简 / Archivo＋思源黑体 |
| `riso` | 孔版 | Risograph | 一版孔版油墨 | Bricolage 800＋思源黑体 / Space Grotesk＋思源黑体 |
| `crt` | 显像管 | CRT tube | 一支显像管 | VT323＋思源黑体 / Courier Prime＋思源黑体 |
| `phosphor` | 荧光屏 | Phosphor screen | 一块 P1 荧光屏 | DotGothic16 / Share Tech Mono＋思源黑体 |
| `ibm` | 打孔卡 | Punch card | 一张打孔卡 | Archivo 700＋仿宋_GB2312 / Bitter＋思源黑体 |
| `c64` | 软盘 | Floppy disk | 一张 5¼ 软盘 | Silkscreen＋DotGothic16 / Share Tech Mono＋思源黑体 |

3.10.0 之前删掉的六套（id 已不存在，旧设置会回落到 `moss`）：`seal` 朱印、`sage` 鼠尾草原版、`mist` 靛蓝、`indigo` 铜青、`eink` 墨水屏、`darkroom` 暗房红。

**palette id 永不改**——用户的本地设置按 id 存，改了配色就丢。

每个 palette 的字段：

```js
{
  id, nameKey, descKey,            // 名称/描述走 DICT（中英双语）
  texture: 'paper' | 'scan',       // 纸纹 / 扫描线
  font: 'serif' | 'sans' | 'mono', // 正文类别（决定默认字体栈）
  heading: 'serif' | 'sans',       // 标题类别
  fontStack, headingStack,         // 显式字体栈（覆盖 font/heading）
  headWeight, headTracking,        // 标题字重、字距
  headCaps,                        // 可选：标题转大写（拉丁部分）
  sectionRule,                     // 可选：按配色覆盖段落底线（排在默认细线之后）
  bodyWeight,                      // 正文字重（可选，见 §4）
  xHeight, headXHeight,            // font-size-adjust（可选，见 §4）
  code,                            // 代码块滤镜：sepia()/saturate()...
  tokens: { '--dsw-alias-*': { light, dark } }  // 14 个颜色 token
}
```

`tokens` 必须 14 个齐全，缺一个宿主就会回退到默认值，配色会"漏色"。

---

## 4. 字体系统（改排印只碰这里）

### 4.1 常量（client.js 顶部 60–110 行）

```js
FONT_HEI          思源黑体 打头的黑体栈
FONT_QUOTE        仿宋_GB2312（引文/blockquote 专用）
FONT_CRT          VT323（代码层专用，中文兜思源黑体）
FONT_MIST_HEAD    Bricolage Grotesque 700（+ headVariation opsz96/wdth88）
FONT_MIST_BODY    Bitter 450（石板衬线）
FONT_MOSS_HEAD    Fraunces 600（+ headVariation SOFT60/WONK1/opsz40）
FONT_MOSS_BODY    Alegreya 500（书写体老式衬线）
FONT_INK_HEAD     Archivo Black → 方正小标宋简体（报纸头版）
FONT_INK_BODY     Libre Franklin → 思源黑体（1912 报纸 grotesque）
FONT_COBALT_HEAD  Bodoni MT → 华文中宋（铜版刻线）
FONT_COBALT_BODY  Archivo → 思源黑体
FONT_RISO_HEAD    Archivo Black → 思源黑体（900 锁成一块墨）
FONT_RISO_BODY    Space Grotesk → 思源黑体（机排感）
FONT_SERIF / FONT_SANS / FONT_MONO   老配色的通用栈
```

### 4.2 三个"层"

| 层 | 选择器 | 字体 | 作用 |
|---|---|---|---|
| 标题层 | `body h1/h2/h3` + `[class*="titleGroup"]>span:first-child` | palette.headingStack | 唯一能改到首屏大标题的路径 |
| 正文层 | `body{--dsw-font-family}` | palette.fontStack | 宿主所有文字跟着走 |
| 终端层 | `body pre/code/kbd/samp` | FONT_CRT（VT323） | 十二套共用，唯一"带电"的层 |

代码层与引文显式 `font-size-adjust:none`，否则会被正文的 adjust 一起吹大。

### 4.3 两条调参经验（血泪）

1. **别用 `font-size-adjust` 硬撑小字面**。3.8.1/3.8.2 试过把 Gill Sans 从 .45 撑到 .58，字距变形、观感"虚胖"。3.8.3 改成**换字面 + 加字重**，问题才真解决。
2. **字重只加真的有**。思源黑体装了 Medium（500），所以 `bodyWeight:500` 是真字重；方正小标宋只有一档，请求 600 会让浏览器合成加粗，把它唯一的特征（发丝细横画）抹平——所以标题用 `font-synthesis:none` + 该配色自己的 `headWeight`。

### 4.4 本机字体现状（用户级安装 `%LOCALAPPDATA%\Microsoft\Windows\Fonts`）

思源黑体 7 字重、方正小标宋简体、仿宋_GB2312、楷体_GB2312、经典宋体简、VT323、Share Tech Mono、Silkscreen、DotGothic16、Archivo(VF)、Playfair Display(VF)、Libre Franklin(VF)、Bricolage Grotesque(VF)、Fraunces(VF)、Bitter(VF)、Alegreya(VF)、Space Grotesk(VF)、Courier Prime。

源文件散在 `D:\个人与收集\字体\` 与 `D:\tmp\latin*\`。

**主题只引用字体名，不打包字体**：别人装了主题但没装字体会回退到系统字面（已写好回退链）。若要把字体随包分发，注意 OFL 需附许可证，方正系为商业字库**不可分发**。

### 4.5 三套单色海报页（3.9.0）为什么这么排

3.10.0 起九套各自有一对字面：拉丁与汉字共用同一种骨架（Didone 配宋、像素配像素、打字机配仿宋），而不是把一张现代黑体塞到老字面下面。

| 配色 | 标题 | 正文 | 自己的记号 |
|---|---|---|---|
| 鼠尾草 moss | Fraunces（SOFT/WONK）+ 华文中宋 | Alegreya + 华文中宋 | 双版微错位 |
| 牛皮纸 amber | Bookman Old Style + 方正姚体 | Georgia + 华文中宋 | 反白圆章 |
| 铅字 ink | Archivo Black 大写 + 方正小标宋 | Libre Franklin + 思源黑体 | 实心墨块里反白鲸鱼 |
| 蓝晒纸 cobalt | Bodoni MT + 经典宋体简 | Archivo + 思源黑体 | 鲸鱼 + 四角裁切标记 |
| 孔版 riso | Bricolage Grotesque 800 + 思源黑体 | Space Grotesk + 思源黑体 | 黑版/粉版错位套印 |
| 显像管 crt | VT323 + 思源黑体 | Courier Prime + 思源黑体 | 素画 |
| 荧光屏 phosphor | DotGothic16（像素汉字） | Share Tech Mono + 思源黑体 | 光晕 |
| 打孔卡 ibm | Archivo 700 宽字距 + 仿宋_GB2312 | Bitter + 思源黑体 | 素画 |
| 软盘 c64 | Silkscreen + DotGothic16 | Share Tech Mono + 思源黑体 | 素画 |

- **铅字没有第二色**：`brand` 就是墨色，链接、按钮、标记、段落线全是同一个黑——单色海报的说服力必须由字重和规则线给出。段落线 `2px solid label-primary`。
- **蓝晒纸的深色是蓝晒法**（`#0A1E33` 普鲁士蓝底 + 纸白字），浅色是骨白纸印一版钴蓝。段落线 `3px double`。
- **孔版是双色印刷**：粉色只落在「第二版会落的地方」——段落线、链接、按钮、标记套印。段落线 `3px solid brand`。
- 九套都 `texture: paper|scan`、`bodyWeight:400`（鼠尾草 500），正文按 13.5px / 1.75 行高排；终端三套 `headWeight:500`，否则浅色下标题压不住正文。
- 字体是**真的装在本机**才敢用：Archivo/Archivo Black、Libre Franklin、Space Grotesk、Bricolage、Bitter、Fraunces、Alegreya、Georgia、Bookman Old Style、Bodoni MT、VT323、Share Tech Mono、Courier Prime、Silkscreen、DotGothic16，汉字有思源黑体（含 900）、方正小标宋、华文中宋、经典宋体简、方正姚体、仿宋_GB2312。**思源宋体未装，别往栈里放。**

### 4.6 宿主有 119 个别名，配色只给 14 个（3.9.0 修）

宿主在 `body` / `body[data-ds-dark-theme]` 上定义了 **119 个 `--dsw-alias-*` 和 `--dsw-specific-*`**（从 `app.asar` 里 `body{--dsw-alias-bg-base:…}` 那段能整段抽出来）。配色只提供 14 个，其余 100 多个会回落到宿主默认的蓝灰色 —— 表现就是**配色卡上是一套、装上去是另一套**，尤其 `--dsw-alias-brand-primary-new-colorprimary-new-color`（宿主默认 `#4176e6` 蓝）被大量组件用作品牌色，而 `button-primary-fill`、`bg-layer-3`、`label-tertiary`、`state-*-secondary/tertiary`、`menu-*`、`specific-*` 也全都没被接管。

3.9.0 起由 `ALIAS_BRIDGE`（client.js 里）把这 100 多个别名用调色板自己的墨色 `color-mix()` 推导出来，统一带 `!important` 打进 `body{}`，浅色/深色自动跟随（因为引用的是会随模式变的 token，不需要再写深色块）。改配色时**只要改 14 个 token，其余会自动跟着走**；要加新别名就补一条 `[名称, 表达式]`。

排查口诀：界面上出现"不属于这套油墨"的颜色（默认蓝、灰白面板），先查它用的是哪个 alias，再看 `ALIAS_BRIDGE` 里有没有这一条。



---

## 5. 发版流程（重要，npm 有坑）

详见 `docs/发布流程-RELEASE.md`，这里给最小步骤：

```powershell
cd D:\内容与发行\插件发行\复古油墨主题-dsh-theme-retro-press

# 1. 改版本号 + CHANGELOG（用 node 改，别用 PowerShell 文本重定向，见 §7）
# 2. 语法与健康检查
node --check client.js
powershell -NoProfile -ExecutionPolicy Bypass -File D:\Systems\dsh\plugins\health-check.ps1
#    必须看到 HEALTHY 才继续

# 3. 提交推送
git add -A; git commit -m "3.8.x: ..."; git push origin main

# 4. npm 暂存发布（不是 npm publish！）
npm stage publish . --registry=https://registry.npmjs.org/ --//registry.npmjs.org/:_authToken=<token> --access public
# 5. 等 npm stage list 由 validating 变 staged（约 3–5 分钟）
# 6. 用户本人去 https://www.npmjs.com/settings/andy-7/staged-packages 点 Approve，并触碰安全密钥
# 7. 验证
npm view dsh-theme-retro-press version
```

**为什么不能直接 `npm publish`**：账号 `andy-7` 的 2FA 是**安全密钥（WebAuthn）**，不产生 6 位数字码。`npm publish` 与 `npm publish --otp=xxxxxx` 一律 `E403`，`npm stage approve` 一律 `EOTP`。唯一可行路径是"暂存发布 + 网页批准"。

token 是 granular token（Read and write (publish and stage) + All packages + Organizations No access），**只做命令行临时传参，不要写进任何文件**；过期就重新建。

---

## 6. 市场收录

- 目录仓库：`github.com/awesome-dsh-plugin/awesome-dsh-plugin`
- 一个插件一个文件：`data/plugins/<owner>__<repo>.yml`
- 必需 `url`（与仓库完全一致）、`name` = `owner/repo`、`category`（用 `theme`）、`description.en`
- 条件：仓库**建满 1 天**、`package.json` 必须声明 `dsh.bundle`（只有 `dsh.client` 会被拒）、根目录有 `cordis.patch.yml`
- 仓库已有 `dsh-plugin` / `dsh-theme` / `theme` topics（2026-11-07 加）
- 条目**已备好在 fork 的分支上**：`andy-7-andy/awesome-dsh-plugin` → 分支 `add-retro-press`，提交 `a514fe0`，只加 `data/plugins/andy-7-andy__dsh-theme-retro-press.yml`；本地克隆在 `D:\Systems\dsh\workspace\awesome-dsh-plugin`
- 本地已跑过 `validateEntries`（0 problems）和 `generate-readme.mjs`（只在两个 README 各加自己那一行，未提交）
- 门禁脚本 `scripts/check-submission.mjs` 的 `MIN_AGE_DAYS = 1`，按**创建时间 +24h** 算：仓库建于 `2026-11-07T05:02:33Z` → **北京时间 2026-11-08 13:02 之后** CI 才会绿
- 开门见山：到期后 `gh pr create --repo awesome-dsh-plugin/awesome-dsh-plugin --head andy-7-andy:add-retro-press --base main`

---

## 7. 已知的坑（每条都踩过）

| 现象 | 原因 | 处理 |
|---|---|---|
| 主题从外观列表里消失，日志 `@local/retro-press: import failed` | 改了包名但 DSH 进程还按旧名加载 | 完全退出 DSH 再启动；重启后在设置里重选配色（id 变了） |
| 改完 client.js 没变化 | 插件在启动时加载 | 重启 DSH，刷新页面不够 |
| `package.json` 改完 DSH 起不来，`Unexpected token '﻿'` | PowerShell 写入带了 BOM | 一律 `[System.IO.File]::WriteAllText($p,$t,New-Object System.Text.UTF8Encoding($false))` 或用 node 写 |
| 读中文 CHANGELOG 全是乱码 | PowerShell 5.1 `Get-Content` 默认按 ANSI 解码 | 用 node 或 `File::ReadAllText` |
| `.ps1` 里中文被截断 | `.ps1` 必须带 BOM，否则 5.1 按 ANSI 解析 | 写脚本用 UTF8Encoding($true) |
| `npm` 命令报 UnauthorizedAccess | 执行策略 Restricted，`npm.ps1` 加载不了 | 已改 CurrentUser RemoteSigned；或直接用 `npm.cmd` |
| 截图坐标点击总偏 | `desktop_capture` 的 `vision.scale` 随 maxDim 变 | 用 UIA 名字点击（`desktop_click{name,role}`），别算坐标 |
| 深色模式判断 | 宿主在 body 上加 `data-ds-dark-theme` | 深色规则都写 `body[data-ds-dark-theme] ...` |

---

## 8. 版本线（在做什么、做到哪）

- 3.8.0 十二套配色统一命名、深色磷光、包名改造、发布 GitHub + npm
- 3.8.1 `font-size-adjust` 对齐西文 x-height（后被判定为补丁思路，已撤）
- 3.8.2 把 adjust 从 .54 提到 .58（同样被撤）
- 3.8.3 换字面 + 加字重（Archivo / Playfair）
- **3.8.4 换有性格的字面**：靛蓝 Bricolage 700 + Bitter 450；苔绿 Fraunces 600（SOFT/WONK）+ Alegreya 500。新增 palette 字段 `headVariation`（写 font-variation-settings）
- **3.9.0 三套单色海报页**：墨黑 / 钴蓝 / 孔版，十五套。新增字段 `headCaps`、`sectionRule`；三枚新标记（反白墨块、裁切标记、套印错位）；`assets/palettes.png` 重出成 15 格
- **3.9.0 补齐 105 个别名**：`ALIAS_BRIDGE`，见 §4.6
- **3.10.0 收成九套 + 全部以实物命名 + 每套一对字面**：删 `seal` / `sage` / `mist` / `indigo` / `eink` / `darkroom`；`moss` 接手"鼠尾草"之名，`amber`→牛皮纸、`ink`→铅字、`cobalt`→蓝晒纸、`phosphor`→荧光屏、`ibm`→打孔卡、`c64`→软盘；九对字面见 §4.5；`assets/palettes.png` 重出为九宫格（每张卡用自己的标题字面），`assets/posters.png` 撤下待真机重拍

### 待办（按优先级）

1. **上线 3.10.0**：代码与文档已就绪，先让用户**完全退出 DSH 再启动**看九套实际效果，确认后走 §5 的暂存发布（3.8.4 是当前 latest）。
2. **真机重拍配图**：重启后用真实界面重出 `assets/posters.png`（现在 README 里那段没有图），比手搭 mock 可信。
3. **市场 PR**：分支与条目已备好，2026-11-08 13:02 之后开 PR（见 §6）。条目描述要改成「九套 + 实物命名」，开 PR 前记得在 fork 里同步那版 yml。
4. **3.8.3 暂存区**：仍留着一个被取代的 staged 包，去 https://www.npmjs.com/settings/andy-7/staged-packages 点 Reject 清掉。
5. **字体分发决策**：是否把 Archivo / Bricolage / DotGothic16 等 OFL 字体打进包（现在只写名字 + 回退）。

---

## 9. 排印预览工具链

所有字体对比图都是这套流程出的，可复用：

```powershell
# 1) 写 HTML（UTF-8 无 BOM）
# 2) 用 Edge headless 截图
$edge='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$ud=Join-Path $env:TEMP ('edge-'+[guid]::NewGuid().ToString('N').Substring(0,8))  # 每次都换新，否则复用缓存
& $edge --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 `
        --window-size=1060,470 --user-data-dir="$ud" --screenshot="$out" "file:///D:/tmp/x.html"
```

**注意**：HTML 里若用行内 `style="font-family:..."`，字体名只能用**单引号**，双引号会把属性截断（踩过，导致字体静默回退，以为是字体没装）。

产物都在 `D:\Systems\dsh\workspace\retro-press-*.png`。

---

## 10. 一分钟自检

```powershell
cd D:\内容与发行\插件发行\复古油墨主题-dsh-theme-retro-press
node --check client.js
powershell -NoProfile -ExecutionPolicy Bypass -File D:\Systems\dsh\plugins\health-check.ps1
# 期望：HEALTHY + "OK source dsh-theme-retro-press <version>"
npm pack --dry-run     # 期望 14 files（新增 assets/posters.png），含 assets/*.png
git status             # 期望干净
```

预览工具在 `D:\Systems\dsh\workspace\theme-design\`：`preview.js`（三套新配色对照页）、`make-palettes-png.js`（15 格总览）、`load-palettes.js`（从 client.js 里直接抽出 PALETTES，保证出图和插件一致）。
