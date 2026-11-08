# Changelog

## 3.13.0

六项都做了。这一版没有新配色，改的是它在你机器上跑得顺不顺、看得清不清。

- **字体只注入一次**。以前每次改配色／压印／版心，都会把整张样式表重建一遍，而样式表里裹着约 300 kB 的 base64 字体——等于每次调一个选项就把字体重解析一遍。现在 `@font-face` 单独挂在一条样式上，只装一次；配色、压印、版心那部分才随选项重建。切主题不再卡那么一下。
- **纸齿按屏幕密度取图**。纸齿砖原来是 160px，在 2× 屏上被放大成 80 CSS px，颗粒变糊、变成一片灰雾。现在多生成一份 320px 的砖（浅色 `grain2x`、深色 `soot2x`），用 `@media (min-resolution: 2dppx)` 切换；`background-size` 仍按 CSS px 给，所以颗粒的物理大小不变，只是不再被放大。
- **第二色多两处落点**。品牌色原来只染 `h2` 那一条段落线，一个配色看起来像"纸 + 黑字"。现在表头有 9% 的品牌色底纹、`h3` 前面有一枚品牌色小方块——同一块油墨在版面上出现三次。
- **版心**。新增「版心」选项：窄 600px（约 30 字）／标准 720px（约 40 字）／满宽。满屏长段落以前是拉到整列宽，一行的字数太多，回行时眼睛容易跳行。
- **无障碍**。系统开「提高对比度」时撤掉纸齿层与墨晕（`prefers-contrast: more`），字回到纯墨色；开「减弱动效」时标记停止呼吸（`prefers-reduced-motion: reduce`）。
- **汉字随包一份底线**。以前汉字全靠本机：装了方正小标宋就是小标宋，没装就掉进系统黑体，九套的排印声音当场散掉一半。现在内嵌 **思源宋体子集**（Noto Serif SC，GB2312 一级 3755 字 + 标点 + 箭头 + ASCII，共 4239 字，1.32 MB WOFF2，保留 200–900 可变字重，族名 `Song RP`），排在每个中文字体栈的最后、通用族之前——本机有商业字库就用商业字库，没有就落这份宋体。汉字仍是宋体而不是黑体，九套的声音不至于垮掉。

体积：`client.js` 从 538 kB 涨到 2.5 MB（其中 1.8 MB 是这份汉字子集的 base64），`npm pack` 16 files / 2.4 MB。

## 3.12.1

- **改名**：插件在市场与设置里的中文标题从「复古主题」改为「复古油墨主题」（英文仍是 Retro Press）。
- **更正 3.12.1 的一处误判**：这一版当时声称 `locale/zh.json`、`locale/en.json`、`package.json` 的 description「被按 GBK 重写过」。复核 git 里的原始字节后确认——它们本来就是正确的 UTF-8，所谓乱码是 PowerShell 5.1 的 `Get-Content` 把无 BOM 的 UTF-8 当 ANSI 读造成的显示假象。真正坏掉的只有 `client.js` 里一行英文注释的破折号。

## 3.12.0

- **加了一层压印（letterpress）**：以前只有"纸纹"——一条平铺的背景条纹。现在按凸版印刷的三个事实重做：纸有齿、纸不匀、字被压进纸里。三样都用 CSS 实现，没有 canvas、没有运行时解码。
  - **纸的齿**：逐像素生成的 160px 噪点砖，浅色下 `multiply` 叠一层（`.38` / `.55`），深色下换成反相的煤灰砖走 `screen`——同一套叠法在奶油纸和黑纸上都成立，不会像单纯 `screen` 那样把深色页刷白。
  - **纸不匀**：400px 的低频斑块 `multiply` 进底色，整页不再是一个平面色值。
  - **墨与压痕**：正文加 `0 0 .2–.3px` 的墨晕；标题加 1px 的浅色高光和 -0.5px 的暗边，读起来像字被压进纸里；重压档再给标题加 `.08px` 描边。
- **新增设置项「压印」**：随配色 / 平印 / 轻压 / 重压。默认随配色——铅字与孔版是**重压**（铅字本来就该有压痕，孔版本来就吃墨厚），鼠尾草、牛皮纸、蓝晒纸、打孔卡是**轻压**，三套屏幕（显像管、荧光屏、软盘）是**平印**，屏幕不该有纸的齿。
- 两张砖（齿与斑）以 PNG data URI 随包，约 21 kB；生成脚本在仓库外的 `theme-design`（`make-paper-tiles.js`）。
- **铅字换成象牙白**：底纸 `#FAFAF6`（蓝通道偏低，大面积看起来发黄）改为 `#FCFBF8`，卡片层 `#F3F2EC`、边线 `#E2E1D8` / `#B9B8AD`、侧栏 `#F7F6F0`。压印的齿会把这层白咬出颗粒，底色偏一点点暖就显脏，所以亮度提上去、蓝通道只差 4。
- 体积：`client.js` 494 kB → 538 kB。

## 3.11.0

- **西文字面全部随包**：Fraunces / Alegreya / Archivo（400+700）/ Archivo Black / Libre Franklin / Playfair Display / Bricolage Grotesque / Space Grotesk / VT323 / DotGothic16 / Silkscreen / Bitter，各取 **latin 子集 WOFF2**（共 231 kB），以 data URI 内嵌成 `@font-face`，家族名统一加 ` RP` 后缀（`"Fraunces RP"` …），排在每个字体栈的第一位。装没装字体，九套都长同一个样。
- 单一字重的像素字面（VT323 / Silkscreen / DotGothic16）声明为 `font-weight:100 900`，让 500 的标题直接落在原字重上，不再被合成加粗糊成一块。
- **汉字不进包**：方正小标宋、华文中宋、方正姚体、仿宋_GB2312、经典宋体简都是商业字库，仍是"引用 + 系统回退"。装没装中文字面，差别只在汉字；西文与数字现在是一致。
- 许可：12 个家族都是 SIL OFL 1.1，版权与原文合并进 `assets/OFL-web-fonts.txt`。
- 体积：`client.js` 184 kB → **494 kB**；`npm pack` 15 files / 607 kB。

## 3.10.3

- **Cutive Mono 打进包里**：以 base64 TTF（78 kB）内嵌成 `@font-face`，家族名 `Cutive Mono RP`，随插件注入的样式表一起加载。不需要安装、不需要联网、不需要额外的 CSP 例外——换台机器也一样长。SIL OFL 1.1，许可原文随包（`assets/OFL-CutiveMono.txt`）。
- 字体栈变成 `"Cutive Mono RP" → "Cutive Mono" → "Courier Prime" → Consolas`：本机装了原版也优先用包内这份，字形不会有版本差。
- 包体积：`client.js` 75 kB → 184 kB；`npm pack` 14 files。

## 3.10.2

- **代码字面换成 Cutive Mono**（打字机 slab）：Cascadia Mono 够清楚但太像系统字，没有性格。Cutive 是有字幅宽、`1` / `l` / `I` 一望即辨、横画带打字机衬线的老稿纸字面，13px 在纸色和深色扫描线上都站得住。代码块 `13px / 1.68`，行内代码 `1.05em`、字距 `.03em`。
- 用同一枚字面的还有显像管 / 荧光屏 / 软盘三套的正文——它们原来用 Courier Prime 与 Share Tech Mono，小字号掉笔画。
- ⚠️ 字体需本机安装（OFL，已在 `https://github.com/google/fonts/tree/main/ofl/cutivemono` 取 Regular）；没装时回落到 Courier Prime → Consolas。是否把字体打进包（base64）见 HANDOFF §8 待办。

## 3.10.1

- **蓝晒纸改成真正的蓝纸**：浅色的底从骨白 `#F3F0E4` 换成淡蓝 `#DCE6F0`，正文 `#0F1F2E` 普蓝，卡片层 `#EAF1F8`、边线 `#B6C6D9` / `#8CA1B9`、侧栏 `#D3DFEC`，品牌蓝收到 `#17457E`（对纸 7.6:1）。原来卡片上是一条蓝、铺开却是一张米白的纸，名字和实物对不上；现在纸本身就是蓝的，深色仍是 `#0A1E33` 的湿版蓝晒。
- **换掉看不清的等宽字面**：代码块、行内代码，以及显像管 / 荧光屏 / 软盘三套的正文，统一改用 `FONT_CODE` = **Cascadia Mono**（i 的方点、带尾的 l、单层 g，笔画够重，12.5px 在深色扫描线上也不掉字）。VT323、Share Tech Mono、Courier Prime 从此只做标题，不再排正文和代码。
- `assets/palettes.png` 重出，蓝晒纸那张卡的色条和描述与实物同步。

## 3.10.0

**十五套收到九套，每套以一件实物命名，每套一套自己的中英文字面。**（破坏性：删掉六套，其余改名；palette id 不变的会保留用户选择。）

- **删**：朱印 `seal`（唯一一套红色印章，与孔版的第二版重复）、鼠尾草原版 `sage`（与苔绿同为绿纸，Bodoni+Goudy 已无独占）、靛蓝 `mist` / 铜青 `indigo`（都与蓝晒纸的冷蓝纸重叠，排印也最弱）、墨水屏 `eink`（与铅字同样是"无色一版墨"，铅字更完整）、暗房红 `darkroom`（与孔版同属纸底暖红）。
- **改名**（id 不变，用户选择保留）：苔绿 `moss` → **鼠尾草**（原鼠尾草删除，此名移交）；琥珀 `amber` → **牛皮纸**；墨黑 `ink` → **铅字**；钴蓝 `cobalt` → **蓝晒纸**；磷光 `phosphor` → **荧光屏**；主机蓝 `ibm` → **打孔卡**；八位紫 `c64` → **软盘**；显像管 `crt`、孔版 `riso` 名字留着，因为它们本来就是实物。
- **每套一对字面**（标题 / 正文，拉丁 + 汉字）：
  - 鼠尾草：Fraunces（SOFT/WONK）＋华文中宋 / Alegreya ＋华文中宋
  - 牛皮纸：Bookman Old Style ＋方正姚体 / Georgia ＋华文中宋
  - 铅字：Archivo Black ＋方正小标宋 / Libre Franklin ＋思源黑体
  - 蓝晒纸：Bodoni MT ＋经典宋体简 / Archivo ＋思源黑体
  - 孔版：Bricolage Grotesque 800 ＋思源黑体 / Space Grotesk ＋思源黑体
  - 显像管：VT323 ＋思源黑体 / Courier Prime ＋思源黑体
  - 荧光屏：DotGothic16（像素汉字） / Share Tech Mono ＋思源黑体
  - 打孔卡：Archivo 700 宽字距 ＋仿宋_GB2312 / Bitter ＋思源黑体
  - 软盘：Silkscreen ＋DotGothic16 / Share Tech Mono ＋思源黑体
- 每套各有一条 `sectionRule`；终端三套（显像管 / 荧光屏 / 打孔卡）标题字重提到 500，浅色下层级才立得起来。
- 标记：删除随配色一起删掉的四枚画法（错位套印、套准线、单墨、显影），保留并重排九枚。
- `assets/palettes.png` 重出为九宫格，每张卡的标题用它自己的标题字面排；`assets/posters.png` 撤下（旧 mock 已不代表实际排印，待真机重拍）。

## 3.9.0

三种"单色编辑印刷海报"页，一版一色，各自换的是**排印声音**而不只是颜色：

- **墨黑 `ink`**：只有一种墨。标题 **方正小标宋简体**（发丝细横画的小标宋，报头字）+ **Archivo Black**（大写），正文 **思源黑体 + Libre Franklin 1912**（x-height 大、内白开，13.5px 长段落不糊）。没有第二色——链接、按钮、标记都是同一个墨色，浓淡只由字重和规则线给出。段落线 2px 实墨。
- **钴蓝 `cobalt`**：骨白纸上的一版钴蓝。标题 **Bodoni MT + 华文中宋**（铜版刻线的粗细对比），正文 **Archivo + 思源黑体**。深色模式是**蓝晒法**：普鲁士蓝底、字像曝光出来的纸白。段落线 3px 双线。
- **孔版 `riso`**：黑版 + 一版荧光粉。标题 **思源黑体 900 + Archivo Black**，负字距锁成一块墨；正文 **Space Grotesk + 思源黑体**。粉色只落在第二版该落的地方：段落线（3px）、链接、按钮、标记的套印错位。
- 三套各有一个**自己的标记画法**：墨黑＝实心墨块里反白鲸鱼；钴蓝＝鲸鱼加四角裁切标记；孔版＝黑版与粉版错位套印。
- 新增 palette 字段 `headCaps`（标题转大写）、`sectionRule`（按配色覆盖段落底线，排在默认细线之后）；`PALETTE_FINISH` 补三套默认（墨黑 square/double、钴蓝 round/hairline、孔版 square/hairline）。
- **补齐宿主其余别名**：宿主一共定义 119 个 `--dsw-alias-*`，此前只覆盖 14 个，剩下的（`brand-primary-new-colorprimary-new-color`、`button-primary-*`、`bg-layer-3`、`label-tertiary`、`state-*-secondary/tertiary`、`menu-*`、`specific-*` 等）一直回落到宿主默认的蓝灰，于是"配色卡上是一套、装上去是另一套"。现在用调色板自己的墨色按 `color-mix()` 推导出这 100 多个别名（`ALIAS_BRIDGE`），浅色深色都跟着 token 走，按钮、链接、选中态、代码块、气泡、滚动条才真正是这套油墨。

## 3.8.4

- 两套冷调配色换成有性格的西文字面：
  - 靛蓝：标题 **Bricolage Grotesque 700**（opsz 96 / wdth 88，斜切收笔的报头黑体）、正文 **Bitter 450**（石板衬线，横画厚、字脚方）。
  - 苔绿：标题 **Fraunces 600**（SOFT 60 / WONK 1，软衬线 + 故意的不对称）、正文 **Alegreya 500**（书法味老式衬线）。
- 新增 palette 字段 `headVariation`：标题可写 `font-variation-settings`，让变量字体的光学尺寸/柔软度/俏皮度真正生效（默认档是"素"的）。
- 字重仍按真实字面走，标题保持 `font-synthesis:none`。

## 3.8.3

- 两套冷调配色换西文字面，并把字重加到"印刷黑"：
  - 靛蓝：标题 **Archivo 700**、正文 **Archivo 500**（原 Franklin Gothic Medium 600 / 思源黑体 400）。Archivo 是报纸 grotesque，x-height .56，13.5px 下笔画不再发虚。
  - 苔绿：标题 **Playfair Display 600**（替 Bodoni MT，x-height .38 → .50）、正文 **Archivo 500**（替 Gill Sans MT，.45 → .56）。
- 因此撤掉 3.8.1/3.8.2 加的 `font-size-adjust` 硬撑——字面本身就够大，不再需要把小的吹大。
- 新增配色字段 `bodyWeight`：正文可用真实的中黑字重（思源黑体有 500，不靠合成加粗）。

## 3.8.2

- 再把西文放大一档（.54 → .58），因为 .54 只是"与中文齐平"，肉眼看仍然偏小：
  - 靛蓝：正文与标题都用 .58。
  - 苔绿：正文 .58，标题 Bodoni 用 .50（比小标宋的 .46 略高——它的发丝细横画会吃掉视觉分量）。

## 3.8.1

- 修正两套冷调配色的英文观感：用 `font-size-adjust` 把西文的 x-height 拉齐到同页中文字面。
  - 靛蓝：标题 Franklin Gothic（x-height .49）对齐思源黑体 .54。
  - 苔绿：正文 Gill Sans（.45）对齐 .54；标题 Bodoni（.38）对齐小标宋 .46——此前英文比中文小一档，Bodoni 更明显。
- 代码块、引文显式 `font-size-adjust:none`：VT323 与仿宋保留自己原本的尺度，不被一起放大。

## 3.8.0

- 十二套配色统一命名：朱印 / 鼠尾草 / 靛蓝 / 苔绿 / 显像管 / 铜青 / 琥珀 / 磷光 / 主机蓝 / 八位紫 / 墨水屏 / 暗房红（英文同名规则）。
- 新增「荧光」选项：深色模式下代码块带磷光双层光晕与扫描线，浅色模式不变。可关闭。
- 包名改为 `dsh-theme-retro-press`，补齐 license、engines、repository、keywords 与发布配置。
- 新增 README、LICENSE、CHANGELOG 与配色图、磷光图、市场卡片图标。

## 3.7.0

- 代码层改用 VT323（DEC VT320 终端字形），中文兜思源黑体；两套冷调配色共用这一「终端层」。

## 3.6.4

- 靛蓝正文由 华文中宋 改为 思源黑体：冷白底上 13.5px 的宋体偏灰、笔画不均。

## 3.6.3

- 引文层：`blockquote` 统一用 仿宋_GB2312，斜体改为下划线（中文合成斜体是剪切变形）。

## 3.6.2

- 标题字重按配色取值（`headWeight`），并加 `font-synthesis:none`：不再让浏览器合成加粗。

## 3.6.1

- 西文按角色配对：靛蓝 Franklin + Baskerville，苔绿 Bodoni + Gill Sans。

## 3.6.0

- 新增两套冷调配色：靛蓝（冷白 + 靛蓝）、苔绿（浅灰绿 + 苔绿），排版角色相反。

## 3.5.0

- 十套配色、品牌标记绘制、首字下沉、章节细线、纸纹与扫描线。
