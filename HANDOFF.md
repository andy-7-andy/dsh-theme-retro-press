# Retro Press 交接文档（HANDOFF）

> 最后更新：2026-11-07 · 包版本 **3.9.0**（十五套配色，新增三套单色编辑印刷海报页）· 3.8.4 为 npm 上的 latest，3.9.0 待发 · 仓库 https://github.com/andy-7-andy/dsh-theme-retro-press

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

| id | 中文名 | 英文名 | 页面性格 |
|---|---|---|---|
| `seal` | 朱印 | Vermilion seal | 暖白纸 + 墨黑 + 一点朱红 |
| `sage` | 鼠尾草 | Sage linen | 鼠尾草绿/亚麻白，华文中宋 + Goudy 老铅字 |
| `mist` | 靛蓝 | Cool indigo | 冷白 + 靛蓝，**全黑体页** |
| `moss` | 苔绿 | Moss green | 浅灰绿 + 苔绿，**宋体标题 + 黑体正文** |
| `crt` | 显像管 | CRT amber | 深色走琥珀字符，浅色保持素净 |
| `indigo` | 铜青 | Brass indigo | 米白/深靛蓝/铜金，港埠印刷的冷调子 |
| `amber` | 琥珀 | Daylight amber | 米黄纸做底、深褐字，白天的显像管 |
| `phosphor` | 磷光 | P1 phosphor | 近黑底配 P1 荧光绿 |
| `ibm` | 主机蓝 | Mainframe blue | 深蓝底、青白字，大型机终端 |
| `c64` | 八位紫 | Eight-bit violet | 紫蓝底、米白字 |
| `eink` | 墨水屏 | E-ink | 米灰纸面无色，久读最省眼 |
| `darkroom` | 暗房红 | Darkroom red | 褐色暗调，安全灯的红 |
| `ink` | 墨黑 | Ink only | **单色海报**：只有一版墨，小标宋报头 + Archivo Black |
| `cobalt` | 钴蓝 | Cobalt | **单色海报**：骨白纸 + 钴蓝，深色是蓝晒法 |
| `riso` | 孔版 | Risograph | **单色海报**：黑版 + 一版荧光粉，900 标题 |

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

按「单色编辑印刷海报」做的三页，一版一色；区别不在色相，在**排印声音**：

| 配色 | 标题 | 正文 | 自己的记号 |
|---|---|---|---|
| 墨黑 ink | Archivo Black 大写 + 方正小标宋（报头） | Libre Franklin 1912 + 思源黑体 | 实心墨块里反白鲸鱼 |
| 钴蓝 cobalt | Bodoni MT + 华文中宋（铜版刻线） | Archivo + 思源黑体 | 鲸鱼 + 四角裁切标记 |
| 孔版 riso | Archivo Black 900 + 思源黑体 900（锁成一块） | Space Grotesk + 思源黑体 | 黑版/粉版错位套印 |

- **墨黑没有第二色**：`brand` 就是墨色，所以链接、按钮、标记、段落线全是同一个黑——单色海报的说服力必须由字重和规则线给出。段落线 `2px solid label-primary`。
- **钴蓝的深色是蓝晒法**（`#0A1E33` 普鲁士蓝底 + 纸白字），浅色是骨白纸印一版钴蓝。段落线 `3px double`。
- **孔版是双色印刷**：粉色只落在「第二版会落的地方」——段落线（3px 实线）、链接、按钮、标记套印。段落线 `3px solid brand`，这条是 `sectionRule` 字段唯一的用法。
- 三套都 `texture:'paper'`、`bodyWeight:400`，正文按 13.5px / 1.75 行高排，长段落先能读，标题才敢做重。
- 字体是**真的装在本机**才敢用：Archivo Black、Libre Franklin、Space Grotesk、Bodoni MT、方正小标宋、华文中宋、思源黑体（含 900）都实测过；思源宋体未装，别往栈里放。



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
- **3.9.0 三套单色海报页**：墨黑 / 钴蓝 / 孔版，十五套。新增字段 `headCaps`、`sectionRule`；三枚新标记（反白墨块、裁切标记、套印错位）；`assets/palettes.png` 重出成 15 格，新增 `assets/posters.png`（三套的浅色+深色对照）

### 待办（按优先级）

1. **上线 3.9.0**：代码与文档已就绪，等走 §5 的暂存发布（3.8.4 是当前 latest）。
2. **市场 PR**：分支与条目已备好，2026-11-08 13:02 之后开 PR（见 §6）。条目描述已改为「十五套 + 三套单色海报页」，开 PR 前记得在 fork 里同步那版 yml。
3. **3.8.3 暂存区**：仍留着一个被取代的 staged 包，去 https://www.npmjs.com/settings/andy-7/staged-packages 点 Reject 清掉。
4. **确认观感**：三套是照着"单色编辑印刷海报 + 能长读"做的。若想更极端，可拧的旋钮：墨黑换 SimSun 正文（更旧但细）、钴蓝深色加深成真正的蓝晒（现在 `#0A1E33`）、孔版把段落线从 3px 加到 5px。
5. **字体分发决策**：是否把 Archivo / Libre Franklin / Space Grotesk 等 OFL 字体打进包（现在只写名字 + 回退）。

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
