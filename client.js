/**
 * Retro Press — a retro theme workshop for the Harness Web client.
 *
 * Palettes stack over the active light/dark scheme through the theme service;
 * one plugin-owned stylesheet paints the finish: paper grain or scanlines,
 * square corners, double rules, tight or normal rhythm, per-palette code
 * treatment, type pairing, a blinking mark, and one drawn mark per palette in
 * the brand and hero seats. The choices live in this browser and are edited on
 * their own Settings page.
 */
window.__ModuleLoader__.load({
  id: 'dsh-theme-retro-press',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    /** Layer identity for the theme service; one layer per source. */
    const SOURCE = 'dsh-theme-retro-press'
    const NS = 'retro-press'
    const STORE_KEY = 'retro-press:v1'

    const FONT_SANS =
      'system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif'
    const FONT_SERIF =
      '"Songti SC","STSong","SimSun","Noto Serif CJK SC",Georgia,"Times New Roman",serif'
    /**
     * Mono: Latin on Cascadia/Consolas, CJK on 华文中宋. Without an explicit CJK
     * face the generic monospace fallback lands on SimSun, whose thin strokes
     * disappear on the dark scanline themes.
     */
    const FONT_MONO =
      'ui-monospace,"Cascadia Mono","SFMono-Regular",Consolas,"Noto Serif SC","Songti SC","华文中宋",monospace'
    /**
     * The reading mono. Code and every fixed-pitch body use this one face:
     * Cascadia Mono has a squared dot on the i, a tailed l, a single-storey g and
     * enough stem weight to hold 12.5px on a dark scanline. VT323, Share Tech
     * Mono and Courier Prime all lost their hairlines at that size, which is why
     * they are now allowed to title only — never to set body or code.
     */
    const FONT_CODE =
      '"Cascadia Mono","Cascadia Code",Consolas,"Source Han Sans SC","思源黑体","Microsoft YaHei",monospace'
    /**
     * The pixel layer. VT323 is a digitisation of DEC's VT320 screen font, and
     * DotGothic16 is the one pixel face that also carries Han glyphs — together
     * they are the only pair that gives 显像管 a screen it can title on.
     */
    const FONT_CRT =
      '"VT323","Share Tech Mono","Cascadia Mono",Consolas,"Source Han Sans SC","思源黑体",monospace'
    /**
     * Hei (黑体) — the modern print gothic, used wherever a page needs a neutral
     * CJK body that will not compete with a display head.
     */
    const FONT_HEI =
      '"Source Han Sans SC","思源黑体","Microsoft YaHei","Noto Sans CJK SC","PingFang SC","DengXian","SimHei",sans-serif'
    /**
     * 仿宋 — the quoted-document cut. On a letterpress page a pasted-in excerpt
     * was set in a lighter fangsong, so quotations carry that face rather than
     * a synthetic oblique, which would shear every CJK stroke.
     */
    const FONT_QUOTE =
      '"仿宋_GB2312","FangSong_GB2312","仿宋","FangSong","STFangsong","华文仿宋",serif'

    /**
     * Nine pages, nine type voices. Each pair is chosen so that the Latin and
     * the Han share one skeleton — a Didone next to a Song, a pixel next to a
     * pixel — instead of dropping a modern grotesque under an old face.
     */

    /**
     * 鼠尾草 — Fraunces (SOFT/WONK on) rounds the serif corners until the face
     * reads hand-cut; 华文中宋 carries the same thick-thin into the Han. Body is
     * Alegreya, whose strokes start and finish like a pen, over 华文中宋.
     */
    const FONT_SAGE_HEAD =
      '"Fraunces","Playfair Display","Bodoni MT","华文中宋","STZhongsong","Noto Serif SC","Songti SC",serif'
    const FONT_SAGE_BODY =
      '"Alegreya","EB Garamond","Archivo","华文中宋","STZhongsong","Source Han Sans SC","思源黑体","Microsoft YaHei",serif'

    /**
     * 牛皮纸 — Bookman Old Style: the heavy, wide-footed American book face that
     * sat on every kraft envelope of the 1960s. 方正姚体 has the same wide,
     * flat-sided build. Georgia and 华文中宋 hold the body.
     */
    const FONT_KRAFT_HEAD =
      '"Bookman Old Style","Bookman","Georgia","方正姚体","FZYaoti","华文中宋","STZhongsong","Songti SC",serif'
    const FONT_KRAFT_BODY =
      '"Georgia","Bookman Old Style","Century Schoolbook","华文中宋","STZhongsong","Source Han Sans SC","思源黑体",serif'

    /**
     * 铅字 — Archivo Black is the poster grotesque, flat-sided and tight, and
     * 方正小标宋 is the display Song cut for the same job: hairlines that hold
     * at 34px. Body is Libre Franklin (1912 newspaper) over 思源黑体.
     */
    const FONT_INK_HEAD =
      '"Archivo Black","Archivo","Franklin Gothic Heavy","方正小标宋简体","FZXiaoBiaoSong-B05S","Noto Serif SC","Songti SC",serif'
    const FONT_INK_BODY =
      '"Libre Franklin","Archivo","Franklin Gothic Book","Source Han Sans SC","思源黑体","Microsoft YaHei","PingFang SC",sans-serif'

    /**
     * 蓝晒纸 — Bodoni MT, the Didone of engraved title pages, where the hairline
     * serifs are the point; 经典宋体简 is the Chinese cut with the same contrast.
     * Body stays a neutral grotesque so the plate does the talking.
     */
    const FONT_COBALT_HEAD =
      '"Bodoni MT","Playfair Display","经典宋体简","华文中宋","STZhongsong","Songti SC","Noto Serif SC",serif'
    const FONT_COBALT_BODY =
      '"Archivo","思源黑体","Source Han Sans SC","Microsoft YaHei","PingFang SC",sans-serif'

    /**
     * 孔版 — Bricolage Grotesque at display size: angled terminals, a squeezed
     * counter, the nameplate of a 1970s drum-printed poster. Set 800 with
     * negative tracking so it locks up; 思源黑体 Heavy is the slab of ink under it.
     */
    const FONT_RISO_HEAD =
      '"Bricolage Grotesque","Archivo","Franklin Gothic Medium","思源黑体","Source Han Sans SC","Microsoft YaHei",sans-serif'
    const FONT_RISO_BODY =
      '"Space Grotesk","思源黑体","Source Han Sans SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif'

    /**
     * 显像管 — VT323 for the tube's own screen font, and the reading mono for the
     * body: a typewriter setting that survives scanlines without glowing.
     */
    const FONT_CRT_HEAD =
      '"VT323","Share Tech Mono","Cascadia Mono",Consolas,"Source Han Sans SC","思源黑体",sans-serif'
    const FONT_CRT_BODY = FONT_CODE

    /**
     * 荧光屏 — DotGothic16 is a pixel face that also draws Han, so the heading is
     * pixels in both scripts; the body is set in the reading mono, not in pixels.
     */
    const FONT_PHOS_HEAD =
      '"DotGothic16","VT323","Share Tech Mono","思源黑体","Source Han Sans SC",sans-serif'
    const FONT_PHOS_BODY = FONT_CODE

    /**
     * 打孔卡 — Archivo set 700 and tracked out like a keypunch field label, with
     * 仿宋 in the Han (the cut a typed form actually used). Bitter's slab feet
     * hold the body at 13.5px.
     */
    const FONT_PUNCH_HEAD =
      '"Archivo","Libre Franklin","Franklin Gothic Medium","仿宋_GB2312","FangSong_GB2312","仿宋","Noto Sans SC",sans-serif'
    const FONT_PUNCH_BODY =
      '"Bitter","Archivo","Source Han Sans SC","思源黑体","Microsoft YaHei","PingFang SC",serif'

    /**
     * 软盘 — Silkscreen for the 8-bit label, DotGothic16 for its Han, and Share
     * Tech Mono underneath: a machine that only ever showed one weight.
     */
    const FONT_FLOPPY_HEAD =
      '"Silkscreen","DotGothic16","VT323","思源黑体","Source Han Sans SC",sans-serif'
    const FONT_FLOPPY_BODY = FONT_CODE

    /**
     * Palettes. Color tokens carry both schemes; `font`, `heading`, `code` and
     * `texture` describe that palette's own print character.
     */
    const PALETTES = [
      {
        /** Dried sage on linen: soft-cut Fraunces over a calligraphic Alegreya, 华文中宋 in both. */
        id: 'moss',
        nameKey: 'mossName',
        descKey: 'mossDesc',
        texture: 'paper',
        headingStack: FONT_SAGE_HEAD,
        fontStack: FONT_SAGE_BODY,
        headWeight: 600,
        headTracking: '.005em',
        headVariation: "'SOFT' 60,'WONK' 1,'opsz' 40",
        bodyWeight: 500,
        sectionRule: '1px solid var(--dsw-alias-border-l2)',
        code: 'saturate(.92) sepia(.06)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F9FBF7', dark: '#0E1310' },
          '--dsw-alias-bg-layer-1': { light: '#FEFFFC', dark: '#141A15' },
          '--dsw-alias-bg-layer-2': { light: '#F2F4F0', dark: '#1B221C' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#18201A' },
          '--dsw-alias-border-l1': { light: '#DDE2DA', dark: '#232C25' },
          '--dsw-alias-border-l2': { light: '#BFC8B8', dark: '#3A463B' },
          '--dsw-alias-brand-primary': { light: '#5F7C50', dark: '#9CBB8C' },
          '--dsw-alias-label-primary': { light: '#1F2821', dark: '#E5EBE3' },
          '--dsw-alias-label-secondary': { light: '#5F6A5E', dark: '#9AA69A' },
          '--dsw-alias-state-error-primary': { light: '#A4453C', dark: '#DC8A7C' },
          '--dsw-alias-state-idle-primary': { light: '#8C948C', dark: '#74806F' },
          '--dsw-alias-state-success-primary': { light: '#4F7A48', dark: '#8FC085' },
          '--dsw-alias-state-warn-primary': { light: '#8A6A22', dark: '#D3B273' },
          '--dsw-specific-sidebar-fill': { light: '#EFF2EC', dark: '#101613' },
        },
      },
      {
        /** Kraft buff and rust ink: a Bookman envelope face with 姚体 under it. */
        id: 'amber',
        nameKey: 'amberName',
        descKey: 'amberDesc',
        texture: 'paper',
        headingStack: FONT_KRAFT_HEAD,
        fontStack: FONT_KRAFT_BODY,
        headWeight: 700,
        headTracking: '.008em',
        bodyWeight: 400,
        sectionRule: '2px solid var(--dsw-alias-border-l2)',
        code: 'sepia(.24) saturate(1.08) brightness(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F2E3C0', dark: '#1A1610' },
          '--dsw-alias-bg-layer-1': { light: '#FAEED3', dark: '#221C14' },
          '--dsw-alias-bg-layer-2': { light: '#E8D6AE', dark: '#2A2319' },
          '--dsw-alias-bg-overlay': { light: '#FFF6E2', dark: '#262017' },
          '--dsw-alias-border-l1': { light: '#D9C69A', dark: '#3A2F20' },
          '--dsw-alias-border-l2': { light: '#B79F70', dark: '#54452F' },
          '--dsw-alias-brand-primary': { light: '#A2481F', dark: '#E8A24C' },
          '--dsw-alias-label-primary': { light: '#241B10', dark: '#F5E8CE' },
          '--dsw-alias-label-secondary': { light: '#5E4E36', dark: '#B9A784' },
          '--dsw-alias-state-error-primary': { light: '#A33420', dark: '#E0705A' },
          '--dsw-alias-state-idle-primary': { light: '#8C7A5C', dark: '#8E8068' },
          '--dsw-alias-state-success-primary': { light: '#4F6B2F', dark: '#93B26A' },
          '--dsw-alias-state-warn-primary': { light: '#8A5A0F', dark: '#E2B65E' },
          '--dsw-specific-sidebar-fill': { light: '#EBD9B4', dark: '#1C1711' },
        },
      },
      {
        /** One ink: a 小标宋 and Archivo Black nameplate, nothing else. */
        id: 'ink',
        nameKey: 'inkName',
        descKey: 'inkDesc',
        texture: 'paper',
        headingStack: FONT_INK_HEAD,
        fontStack: FONT_INK_BODY,
        headWeight: 400,
        headTracking: '-.006em',
        headCaps: true,
        bodyWeight: 400,
        sectionRule: '2px solid var(--dsw-alias-label-primary)',
        code: 'grayscale(1) contrast(1.04)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#FAFAF6', dark: '#0F0F0C' },
          '--dsw-alias-bg-layer-1': { light: '#FFFFFF', dark: '#171712' },
          '--dsw-alias-bg-layer-2': { light: '#EFEFE8', dark: '#1F1F19' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#1B1B15' },
          '--dsw-alias-border-l1': { light: '#DEDED3', dark: '#2C2C25' },
          '--dsw-alias-border-l2': { light: '#B4B4A7', dark: '#45453A' },
          '--dsw-alias-brand-primary': { light: '#14140F', dark: '#F2F2EA' },
          '--dsw-alias-label-primary': { light: '#121209', dark: '#F4F4EC' },
          '--dsw-alias-label-secondary': { light: '#55554A', dark: '#A9A99D' },
          '--dsw-alias-state-error-primary': { light: '#A32B22', dark: '#E0705E' },
          '--dsw-alias-state-idle-primary': { light: '#8C8C80', dark: '#7C7C70' },
          '--dsw-alias-state-success-primary': { light: '#33683F', dark: '#8CB48A' },
          '--dsw-alias-state-warn-primary': { light: '#8A6414', dark: '#D8B464' },
          '--dsw-specific-sidebar-fill': { light: '#F2F2EB', dark: '#0C0C09' },
        },
      },
      {
        /**
         * A cyanotype: the paper itself carries the blue. Light mode is a sheet
         * pulled from the wash — pale Prussian blue with a darker blue image;
         * dark mode is the same sheet seen wet, #0A1E33 to the edge.
         */
        id: 'cobalt',
        nameKey: 'cobaltName',
        descKey: 'cobaltDesc',
        texture: 'paper',
        headingStack: FONT_COBALT_HEAD,
        fontStack: FONT_COBALT_BODY,
        headWeight: 400,
        headTracking: '.015em',
        bodyWeight: 400,
        sectionRule: '3px double var(--dsw-alias-border-l2)',
        code: 'sepia(.1) saturate(.7) contrast(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#DCE6F0', dark: '#0A1E33' },
          '--dsw-alias-bg-layer-1': { light: '#EAF1F8', dark: '#0F2740' },
          '--dsw-alias-bg-layer-2': { light: '#CFDBE9', dark: '#14314E' },
          '--dsw-alias-bg-overlay': { light: '#F3F8FD', dark: '#112B45' },
          '--dsw-alias-border-l1': { light: '#B6C6D9', dark: '#1E3A56' },
          '--dsw-alias-border-l2': { light: '#8CA1B9', dark: '#2F5474' },
          '--dsw-alias-brand-primary': { light: '#17457E', dark: '#9CC2EC' },
          '--dsw-alias-label-primary': { light: '#0F1F2E', dark: '#DCE9F6' },
          '--dsw-alias-label-secondary': { light: '#43566B', dark: '#93A9C0' },
          '--dsw-alias-state-error-primary': { light: '#9E3A2E', dark: '#E07C6C' },
          '--dsw-alias-state-idle-primary': { light: '#76899C', dark: '#647A93' },
          '--dsw-alias-state-success-primary': { light: '#2A6355', dark: '#7FBFA6' },
          '--dsw-alias-state-warn-primary': { light: '#7C5B12', dark: '#D9B36A' },
          '--dsw-specific-sidebar-fill': { light: '#D3DFEC', dark: '#081828' },
        },
      },
      {
        /** Key plate plus one pink drum: Bricolage 800 locked up as a block. */
        id: 'riso',
        nameKey: 'risoName',
        descKey: 'risoDesc',
        texture: 'paper',
        headingStack: FONT_RISO_HEAD,
        fontStack: FONT_RISO_BODY,
        headWeight: 800,
        headTracking: '-.02em',
        headCaps: true,
        bodyWeight: 400,
        sectionRule: '3px solid var(--dsw-alias-brand-primary)',
        code: 'saturate(1.04) contrast(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F8F5EF', dark: '#14100E' },
          '--dsw-alias-bg-layer-1': { light: '#FFFDF8', dark: '#1C1715' },
          '--dsw-alias-bg-layer-2': { light: '#EDE7DE', dark: '#251E1B' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#211A18' },
          '--dsw-alias-border-l1': { light: '#DCD3C8', dark: '#332824' },
          '--dsw-alias-border-l2': { light: '#B8AC9E', dark: '#4E3D38' },
          '--dsw-alias-brand-primary': { light: '#C42A5E', dark: '#FF739B' },
          '--dsw-alias-label-primary': { light: '#191715', dark: '#F5EDE6' },
          '--dsw-alias-label-secondary': { light: '#57504A', dark: '#B3A399' },
          '--dsw-alias-state-error-primary': { light: '#B22238', dark: '#FF8A7A' },
          '--dsw-alias-state-idle-primary': { light: '#8E877E', dark: '#8B7C72' },
          '--dsw-alias-state-success-primary': { light: '#356B4F', dark: '#86C09A' },
          '--dsw-alias-state-warn-primary': { light: '#93631A', dark: '#E8B96A' },
          '--dsw-specific-sidebar-fill': { light: '#F1ECE4', dark: '#100C0A' },
        },
      },
      {
        /** A tube: VT323 screen type over the reading mono. */
        id: 'crt',
        nameKey: 'crtName',
        descKey: 'crtDesc',
        texture: 'scan',
        headingStack: FONT_CRT_HEAD,
        fontStack: FONT_CRT_BODY,
        headWeight: 500,
        headTracking: '.02em',
        bodyWeight: 400,
        sectionRule: '1px solid var(--dsw-alias-border-l2)',
        code: 'sepia(.3) saturate(1.15) brightness(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F4F5F3', dark: '#1A1915' },
          '--dsw-alias-bg-layer-1': { light: '#FCFDFC', dark: '#23221A' },
          '--dsw-alias-bg-layer-2': { light: '#E9EBE7', dark: '#2A2920' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#26251B' },
          '--dsw-alias-border-l1': { light: '#D6D9D3', dark: '#3A3826' },
          '--dsw-alias-border-l2': { light: '#AFB4AC', dark: '#56543A' },
          '--dsw-alias-brand-primary': { light: '#1F7A55', dark: '#F0B44C' },
          '--dsw-alias-label-primary': { light: '#14171A', dark: '#F7EED8' },
          '--dsw-alias-label-secondary': { light: '#5A6058', dark: '#BDB08A' },
          '--dsw-alias-state-error-primary': { light: '#B23A3A', dark: '#E36B4E' },
          '--dsw-alias-state-idle-primary': { light: '#868C84', dark: '#928A6A' },
          '--dsw-alias-state-success-primary': { light: '#1F7A55', dark: '#8FC46A' },
          '--dsw-alias-state-warn-primary': { light: '#8A6A12', dark: '#E8C05A' },
          '--dsw-specific-sidebar-fill': { light: '#EDEFEB', dark: '#1C1B15' },
        },
      },
      {
        /** P1 green: DotGothic16 pixels in both scripts over the reading mono. */
        id: 'phosphor',
        nameKey: 'phosphorName',
        descKey: 'phosphorDesc',
        texture: 'scan',
        headingStack: FONT_PHOS_HEAD,
        fontStack: FONT_PHOS_BODY,
        headWeight: 500,
        headTracking: '.03em',
        bodyWeight: 400,
        sectionRule: '1px solid var(--dsw-alias-brand-primary)',
        code: 'saturate(1.1) brightness(1.03)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F0F5EE', dark: '#0B120B' },
          '--dsw-alias-bg-layer-1': { light: '#F8FCF6', dark: '#101A10' },
          '--dsw-alias-bg-layer-2': { light: '#E2EADE', dark: '#162216' },
          '--dsw-alias-bg-overlay': { light: '#FDFFFB', dark: '#131E13' },
          '--dsw-alias-border-l1': { light: '#CBD8C6', dark: '#223022' },
          '--dsw-alias-border-l2': { light: '#A6B79F', dark: '#334733' },
          '--dsw-alias-brand-primary': { light: '#1F6B3A', dark: '#7CFC9A' },
          '--dsw-alias-label-primary': { light: '#121A12', dark: '#D8F5D8' },
          '--dsw-alias-label-secondary': { light: '#4D5C4B', dark: '#93B393' },
          '--dsw-alias-state-error-primary': { light: '#A33A2E', dark: '#E0675A' },
          '--dsw-alias-state-idle-primary': { light: '#7E8C79', dark: '#6F8A6F' },
          '--dsw-alias-state-success-primary': { light: '#2F7A44', dark: '#7CFC9A' },
          '--dsw-alias-state-warn-primary': { light: '#7C6112', dark: '#D8B85A' },
          '--dsw-specific-sidebar-fill': { light: '#E9F0E6', dark: '#0E160E' },
        },
      },
      {
        /** A punch-card field label: tracked Archivo caps over 仿宋, Bitter body. */
        id: 'ibm',
        nameKey: 'ibmName',
        descKey: 'ibmDesc',
        texture: 'scan',
        headingStack: FONT_PUNCH_HEAD,
        fontStack: FONT_PUNCH_BODY,
        headWeight: 700,
        headTracking: '.06em',
        headCaps: true,
        bodyWeight: 400,
        sectionRule: '2px solid var(--dsw-alias-border-l2)',
        code: 'saturate(.92) brightness(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#EEF3F7', dark: '#0B1A2A' },
          '--dsw-alias-bg-layer-1': { light: '#F8FBFD', dark: '#102234' },
          '--dsw-alias-bg-layer-2': { light: '#DFE8EF', dark: '#16293D' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#14273A' },
          '--dsw-alias-border-l1': { light: '#C6D3DE', dark: '#23384D' },
          '--dsw-alias-border-l2': { light: '#9DB0C0', dark: '#35506A' },
          '--dsw-alias-brand-primary': { light: '#1F4E79', dark: '#A8D8F0' },
          '--dsw-alias-label-primary': { light: '#0E1720', dark: '#DCEBF7' },
          '--dsw-alias-label-secondary': { light: '#4B5D6C', dark: '#93AEC4' },
          '--dsw-alias-state-error-primary': { light: '#A33327', dark: '#E0705A' },
          '--dsw-alias-state-idle-primary': { light: '#7C8B98', dark: '#6E8598' },
          '--dsw-alias-state-success-primary': { light: '#1F6B5A', dark: '#6FD3B0' },
          '--dsw-alias-state-warn-primary': { light: '#8A6414', dark: '#E0B761' },
          '--dsw-specific-sidebar-fill': { light: '#E6EDF3', dark: '#0D1D2E' },
        },
      },
      {
        /** An 8-bit disk label: Silkscreen with DotGothic16 over the reading mono. */
        id: 'c64',
        nameKey: 'c64Name',
        descKey: 'c64Desc',
        texture: 'scan',
        headingStack: FONT_FLOPPY_HEAD,
        fontStack: FONT_FLOPPY_BODY,
        headWeight: 500,
        headTracking: '.04em',
        bodyWeight: 400,
        sectionRule: '1px solid var(--dsw-alias-border-l2)',
        code: 'saturate(1.12) contrast(1.04)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F2F0FA', dark: '#241E4A' },
          '--dsw-alias-bg-layer-1': { light: '#FAF9FF', dark: '#2C2558' },
          '--dsw-alias-bg-layer-2': { light: '#E4E0F2', dark: '#342C66' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#2F2760' },
          '--dsw-alias-border-l1': { light: '#CFC8E8', dark: '#443A7A' },
          '--dsw-alias-border-l2': { light: '#A99ED0', dark: '#5A4E96' },
          '--dsw-alias-brand-primary': { light: '#4B3FA8', dark: '#9C8CFF' },
          '--dsw-alias-label-primary': { light: '#1A1630', dark: '#E6E1FF' },
          '--dsw-alias-label-secondary': { light: '#5B5480', dark: '#B4AAD8' },
          '--dsw-alias-state-error-primary': { light: '#A33450', dark: '#FF8FA3' },
          '--dsw-alias-state-idle-primary': { light: '#8A83A8', dark: '#8E86B8' },
          '--dsw-alias-state-success-primary': { light: '#2F6B5E', dark: '#8CE0B8' },
          '--dsw-alias-state-warn-primary': { light: '#86621A', dark: '#F0CC7A' },
          '--dsw-specific-sidebar-fill': { light: '#EAE6F6', dark: '#211B44' },
        },
      },
    ]

    /**
     * Per-palette finish defaults: corners, rules and rhythm travel with the
     * palette unless the user overrides them (each row's "follow palette" option).
     * The mark is not one of them: every palette draws its own (see MARK_ART).
     */
    const PALETTE_FINISH = {
      // 鼠尾草 and 牛皮纸 are soft paper pages: rounded corners, hairline rules.
      moss: { shape: 'round', rule: 'double', density: 'normal' },
      amber: { shape: 'round', rule: 'hairline', density: 'normal' },
      // 铅字 is a nameplate (square, heavy double rule); 蓝晒纸 an engraved plate
      // (round, hairline); 孔版 a drum print (square, tight).
      ink: { shape: 'square', rule: 'double', density: 'normal' },
      cobalt: { shape: 'round', rule: 'hairline', density: 'normal' },
      riso: { shape: 'square', rule: 'hairline', density: 'normal' },
      // The three terminals: square corners, compact rhythm.
      crt: { shape: 'square', rule: 'hairline', density: 'compact' },
      phosphor: { shape: 'square', rule: 'hairline', density: 'compact' },
      ibm: { shape: 'square', rule: 'hairline', density: 'compact' },
      // 软盘 sits between a disk label and a terminal.
      c64: { shape: 'round', rule: 'hairline', density: 'normal' },
    }

    const finishOf = (palette) => PALETTE_FINISH[palette?.id] ?? PALETTE_FINISH.moss

    const TEXTURES = ['auto', 'none', 'paper', 'scan']
    const SHAPES = ['auto', 'round', 'square']
    const FONTS = ['auto', 'host', 'serif', 'headline', 'mono']
    const RULES = ['auto', 'hairline', 'double']
    const DENSITIES = ['auto', 'normal', 'compact']
    const MOTIONS = ['on', 'off']
    const MARKS = ['auto', 'native']
    const GLOWS = ['on', 'off']
    const DEFAULTS = {
      palette: 'moss',
      texture: 'auto',
      shape: 'auto',
      font: 'auto',
      rule: 'auto',
      density: 'auto',
      motion: 'on',
      glow: 'on',
      mark: 'auto',
    }

    const DICT = {
      zh: {
        sectionTitle: '复古主题',
        intro:
          '配色定基调，下面几项定质感。改动立即生效，只保存在这台设备的浏览器里。',
        palette: '配色',
        texture: '底纹',
        textureAuto: '随配色',
        finishAuto: '随配色',
        textureNone: '无',
        texturePaper: '纸纹',
        textureScan: '扫描线',
        shape: '形状',
        shapeRound: '圆润',
        shapeSquare: '方正',
        font: '字体',
        fontAuto: '随配色',
        fontHost: '系统',
        fontSerif: '衬线',
        fontHeadline: '标题衬线',
        fontMono: '等宽',
        rule: '线条',
        ruleHairline: '细线',
        ruleDouble: '双线',
        density: '密度',
        densityNormal: '标准',
        densityCompact: '紧凑',
        motion: '动效',
        motionOn: '开',
        motionOff: '关',
        mark: '品牌标记',
        markNative: '原生图标',
        textureHint: '纸纹像旧纸，扫描线像老显示器',
        shapeHint: '方正把卡片和按钮的圆角收成直角',
        fontHint: '随配色＝各套配色自带的字体配对；标题衬线＝正文黑体、标题宋体',
        ruleHint: '双线把分隔线、表格、引用换成印刷的双细线',
        densityHint: '紧凑收紧段间距与列表间距',
        motionHint: '印章呼吸闪烁；系统开了“减弱动效”时自动停',
        glow: '荧光',
        glowOn: '开',
        glowOff: '关',
        glowHint: '只在深色模式：代码块带一点磷光与扫描线，像亮着的屏幕；浅色模式始终是纸',
        markHint: '每套配色按自己的风格重绘鲸鱼标记；选原生则用 DeepSeek 原图标',
        // Palette names share one rule: a noun — an ink, a stock, a machine —
        // Nine pages, each named after the object it is printed on. Never an
        // adjective phrase, so the nine read as one drawer of plates.
        mossName: '鼠尾草',
        mossDesc: '干鼠尾草与亚麻白：Fraunces 软衬线标题 + Alegreya 书写体正文，中文用华文中宋',
        amberName: '牛皮纸',
        amberDesc: '牛皮纸的米黄与铁锈褐：Bookman 信封标题 + Georgia 正文，中文姚体与宋体',
        inkName: '铅字',
        inkDesc: '白纸一版墨：小标宋 + Archivo Black 报头，正文 Libre Franklin 与思源黑体',
        cobaltName: '蓝晒纸',
        cobaltDesc: '一张晒出来的蓝纸：纸本身就是蓝的，字是更深的普蓝，Bodoni 与经典宋体简刻线',
        risoName: '孔版',
        risoDesc: '黑版加一版荧光粉：Bricolage 800 锁成一块的标题，粉色段落线',
        crtName: '显像管',
        crtDesc: '琥珀字符的显像管：VT323 屏显标题，正文用等宽字排得像终端输出',
        phosphorName: '荧光屏',
        phosphorDesc: 'P1 荧光绿的终端：DotGothic16 像素标题，正文用看得清的等宽字',
        ibmName: '打孔卡',
        ibmDesc: '大型机的深蓝与青白：Archivo 宽字距标题配仿宋，正文 Bitter',
        c64Name: '软盘',
        c64Desc: '八位家用机的紫蓝：Silkscreen 像素标题配 DotGothic16，正文用看得清的等宽字',
      },
      en: {
        sectionTitle: 'Retro theme',
        intro:
          'A palette sets the tone; the rows below set the finish. Changes apply at once and stay in this browser only.',
        palette: 'Palette',
        texture: 'Grain',
        textureAuto: 'Follow palette',
        finishAuto: 'Follow palette',
        textureNone: 'None',
        texturePaper: 'Paper',
        textureScan: 'Scanlines',
        shape: 'Corners',
        shapeRound: 'Rounded',
        shapeSquare: 'Square',
        font: 'Type',
        fontAuto: 'Follow palette',
        fontHost: 'System',
        fontSerif: 'Serif',
        fontHeadline: 'Serif headings',
        fontMono: 'Monospace',
        rule: 'Rules',
        ruleHairline: 'Hairline',
        ruleDouble: 'Double',
        density: 'Density',
        densityNormal: 'Normal',
        densityCompact: 'Compact',
        motion: 'Motion',
        motionOn: 'On',
        motionOff: 'Off',
        mark: 'Brand mark',
        markNative: 'Native icon',
        textureHint: 'Paper grain for old stock, scanlines for an old display',
        shapeHint: 'Square flattens card and control radii',
        fontHint: 'Follow palette uses each palette’s own pairing; serif headings keeps body sans',
        ruleHint: 'Double turns dividers, tables and quotes into a printer’s double rule',
        densityHint: 'Compact tightens paragraph and list rhythm',
        motionHint: 'The seal breathes; it stops when the OS asks for reduced motion',
        glow: 'Phosphor',
        glowOn: 'On',
        glowOff: 'Off',
        glowHint:
          'Dark mode only: code blocks pick up a phosphor glow and scanlines, like a lit screen; light mode stays paper',
        markHint: 'Every palette redraws the whale in its own style; Native keeps the stock icon',
        mossName: 'Sage',
        mossDesc: 'Dried sage on linen: soft-cut Fraunces headings over a calligraphic Alegreya body, 华文中宋 in the Han',
        amberName: 'Kraft paper',
        amberDesc: 'Kraft buff with rust ink: Bookman envelope headings over Georgia, 姚体 and 宋体 in the Han',
        inkName: 'Lead type',
        inkDesc: 'One ink on white: a 小标宋 and Archivo Black nameplate, Libre Franklin and 思源黑体 in the body',
        cobaltName: 'Cyanotype',
        cobaltDesc: 'A sheet pulled from the cyanotype wash: blue paper, deeper blue image, engraved Bodoni and 经典宋体简',
        risoName: 'Risograph',
        risoDesc: 'Key plate plus one fluorescent pink drum: Bricolage 800 headings and a pink section rule',
        crtName: 'CRT tube',
        crtDesc: 'Amber characters on a tube: VT323 screen headings over a readable fixed-pitch body',
        phosphorName: 'Phosphor screen',
        phosphorDesc: 'P1 green terminal: DotGothic16 pixel headings over a legible fixed-pitch body',
        ibmName: 'Punch card',
        ibmDesc: 'Mainframe blue with cyan-white type: tracked Archivo caps over 仿宋, Bitter body',
        c64Name: 'Floppy disk',
        c64Desc: 'Eight-bit violet: Silkscreen pixel headings with DotGothic16 over a legible fixed-pitch body',
      },
    }

    /** One palette by id, falling back to the first. */
    function paletteOf(id) {
      return PALETTES.find((item) => item.id === id) || PALETTES[0]
    }

    /** Read the saved finish options, dropping anything unknown. */
    function readState() {
      let raw = null
      try {
        raw = globalThis.localStorage?.getItem(STORE_KEY) ?? null
      } catch {
        raw = null
      }
      if (raw === null) return { ...DEFAULTS }
      let parsed = null
      try {
        parsed = JSON.parse(raw)
      } catch {
        return { ...DEFAULTS }
      }
      if (parsed === null || typeof parsed !== 'object') return { ...DEFAULTS }
      const pick = (value, allowed, fallback) => (allowed.includes(value) ? value : fallback)
      return {
        palette: PALETTES.some((item) => item.id === parsed.palette)
          ? parsed.palette
          : DEFAULTS.palette,
        texture: pick(parsed.texture, TEXTURES, DEFAULTS.texture),
        shape: pick(parsed.shape, SHAPES, DEFAULTS.shape),
        font: pick(parsed.font, FONTS, DEFAULTS.font),
        rule: pick(parsed.rule, RULES, DEFAULTS.rule),
        density: pick(parsed.density, DENSITIES, DEFAULTS.density),
        motion: pick(parsed.motion, MOTIONS, DEFAULTS.motion),
        glow: pick(parsed.glow, GLOWS, DEFAULTS.glow),
        mark: pick(parsed.mark, MARKS, DEFAULTS.mark),
      }
    }

    /** Small external store so the page, the marks and the stylesheet stay in step. */
    function createStore() {
      let state = readState()
      const listeners = new Set()
      return {
        get: () => state,
        subscribe(listener) {
          listeners.add(listener)
          return () => {
            listeners.delete(listener)
          }
        },
        set(patch) {
          state = { ...state, ...patch }
          try {
            globalThis.localStorage?.setItem(STORE_KEY, JSON.stringify(state))
          } catch {
            /* a browser with storage denied keeps the change for this session */
          }
          for (const listener of listeners) listener()
        },
      }
    }

    /** Install one plugin-owned stylesheet and return its disposer. */
    function installStyles(key, text) {
      const tag = document.createElement('style')
      tag.dataset.retroPress = key
      tag.textContent = text
      document.head.appendChild(tag)
      return () => tag.remove()
    }

    /** Token declarations used only when the theme service refuses the palette. */
    function tokenDeclarations(palette) {
      const light = []
      const dark = []
      for (const [name, modes] of Object.entries(palette.tokens)) {
        light.push(`${name}:${modes.light}!important`)
        dark.push(`${name}:${modes.dark}!important`)
      }
      return `body{${light.join(';')}}\nbody[data-ds-dark-theme]{${dark.join(';')}}`
    }

    /**
     * The host defines 119 `--dsw-alias-*` colours; a palette only carries 14.
     * Every alias we leave alone falls back to the host's bluish defaults — which
     * is why a palette could paint half a page and still read as "the default
     * theme". These are the remaining aliases, derived from the palette's own
     * inks so both modes follow the swatch instead of the host.
     */
    const BRAND = 'var(--dsw-alias-brand-primary)'
    const BG = 'var(--dsw-alias-bg-base)'
    const L1 = 'var(--dsw-alias-bg-layer-1)'
    const L2 = 'var(--dsw-alias-bg-layer-2)'
    const TXT = 'var(--dsw-alias-label-primary)'
    const TXT2 = 'var(--dsw-alias-label-secondary)'
    const LINE = 'var(--dsw-alias-border-l2)'
    const ERR = 'var(--dsw-alias-state-error-primary)'
    const OK = 'var(--dsw-alias-state-success-primary)'
    const WARN = 'var(--dsw-alias-state-warn-primary)'
    /** a tint of `a` over `b`; percentages are the weight of `a`. */
    const tint = (a, pct, b) => `color-mix(in srgb, ${a} ${pct}%, ${b})`
    /** a wash of `a` that keeps whatever is underneath visible. */
    const wash = (a, pct) => `color-mix(in srgb, ${a} ${pct}%, transparent)`

    const ALIAS_BRIDGE = [
      ['--dsw-alias-brand-primary-new-colorprimary-new-color', BRAND],
      ['--dsw-alias-brand-primary-invert', BG],
      ['--dsw-alias-brand-text', TXT],
      ['--dsw-alias-link', BRAND],
      ['--dsw-alias-markdown-citation', BRAND],
      ['--dsw-alias-markdown-tag', BRAND],
      ['--dsw-alias-markdown-placeholder', tint(TXT2, 70, BG)],

      ['--dsw-alias-bg-layer-3', tint(L2, 70, L1)],
      ['--dsw-alias-bg-document-preview', BG],
      ['--dsw-alias-bg-document-selection', wash(BRAND, 22)],
      ['--dsw-alias-label-document-preview', TXT2],
      ['--dsw-alias-bg-module-platform', L2],
      ['--dsw-alias-bg-multi-select', tint(BRAND, 10, BG)],
      ['--dsw-alias-bg-skeleton', wash(TXT, 6)],
      ['--dsw-alias-bg-mask-1', wash(TXT, 24)],
      ['--dsw-alias-bg-mask-2', wash(TXT, 12)],
      ['--dsw-alias-bg-mask-3', wash(TXT, 48)],
      ['--dsw-alias-bg-mask-photo', wash(TXT, 88)],
      ['--dsw-alias-bg-mask-drop', wash(BG, 70)],

      ['--dsw-alias-border-l3', wash(LINE, 78)],
      ['--dsw-alias-border-l4', wash(LINE, 55)],
      ['--dsw-alias-border-l2-darkmode-thin', LINE],
      ['--dsw-alias-border-inverted', wash(BG, 12)],
      ['--dsw-alias-border-inverted2', wash(BG, 22)],

      ['--dsw-alias-button-primary-fill', BRAND],
      ['--dsw-alias-button-primary-hover', tint(BRAND, 88, TXT)],
      ['--dsw-alias-button-primary-dimmed', tint(BRAND, 30, BG)],
      ['--dsw-alias-button-contrast-fill', TXT],
      ['--dsw-alias-button-elevated-fill', L1],
      ['--dsw-alias-button-floating-fill', L1],
      ['--dsw-alias-button-floating-hover', L2],
      ['--dsw-alias-button-ghost-active-fill', L2],
      ['--dsw-alias-button-ghost-active-hover', L1],
      ['--dsw-alias-button-ghost-active-border', LINE],
      ['--dsw-alias-button-info-fill', BRAND],
      ['--dsw-alias-button-info-hover', tint(BRAND, 85, TXT)],
      ['--dsw-alias-button-tool-bar-fill', wash(TXT, 34)],
      ['--dsw-alias-button-tool-bar-hover', wash(TXT, 42)],
      ['--dsw-alias-button-tool-bar-fill-invisible', wash(TXT, 24)],

      ['--dsw-alias-interactive-bg-hover', wash(TXT, 7)],
      ['--dsw-alias-interactive-bg-active', wash(TXT, 12)],
      ['--dsw-alias-interactive-bg-hover-solid', L2],
      ['--dsw-alias-interactive-bg-hover-accent', wash(BRAND, 12)],
      ['--dsw-alias-interactive-bg-hover-danger', wash(ERR, 10)],

      ['--dsw-alias-label-tertiary', tint(TXT2, 70, BG)],
      ['--dsw-alias-label-caption', tint(TXT2, 62, BG)],
      ['--dsw-alias-label-dimmed', tint(TXT, 55, BG)],
      ['--dsw-alias-label-primary-dimmed', tint(TXT, 62, BG)],
      ['--dsw-alias-label-primary-foreground', BG],
      ['--dsw-alias-label-primary-inverted', BG],
      ['--dsw-alias-label-primary-bluish', TXT],
      ['--dsw-alias-label-deep-diving', TXT],
      ['--dsw-alias-label-deep-diving-shimmer', wash(TXT, 45)],
      ['--dsw-alias-label-shimmer', wash(TXT, 40)],

      ['--dsw-alias-state-error-secondary', tint(ERR, 72, BG)],
      ['--dsw-alias-state-success-secondary', tint(OK, 72, BG)],
      ['--dsw-alias-state-success-tertiary', tint(OK, 12, BG)],
      ['--dsw-alias-state-warn-secondary', tint(WARN, 72, BG)],
      ['--dsw-alias-state-warn-tertiary', tint(WARN, 12, BG)],
      ['--dsw-alias-state-warn-label', WARN],
      ['--dsw-alias-state-business-primary', BRAND],
      ['--dsw-alias-state-business-tertiary', tint(BRAND, 10, BG)],
      ['--dsw-alias-state-done-primary', OK],

      ['--dsw-alias-code-diff-added', OK],
      ['--dsw-alias-code-diff-deleted', ERR],
      ['--dsw-alias-file-diff-added-bg', tint(OK, 10, BG)],
      ['--dsw-alias-file-diff-added-gutter', tint(OK, 14, BG)],
      ['--dsw-alias-file-diff-added-marker', OK],
      ['--dsw-alias-file-diff-deleted-bg', tint(ERR, 9, BG)],
      ['--dsw-alias-file-diff-deleted-gutter', tint(ERR, 13, BG)],
      ['--dsw-alias-file-diff-deleted-marker', ERR],

      ['--dsw-alias-markdown-code-block', L2],
      ['--dsw-alias-markdown-code-block-banner', tint(TXT, 6, L2)],
      ['--dsw-alias-markdown-inline-code', tint(TXT, 7, L2)],
      ['--dsw-alias-markdown-code-segment-selected', tint(BRAND, 14, L2)],
      ['--dsw-alias-markdown-code-segment-unselected', tint(TXT, 4, L2)],

      ['--dsw-alias-scrollbar-bg-l1', wash(LINE, 45)],
      ['--dsw-alias-scrollbar-bg-l2', wash(LINE, 60)],
      ['--dsw-alias-scrollbar-hover-l1', wash(TXT2, 70)],
      ['--dsw-alias-scrollbar-hover-l2', wash(TXT2, 85)],

      ['--dsw-alias-switch-thumb', L1],
      ['--dsw-alias-toast-bg', TXT],
      ['--dsw-alias-toast-label', BG],
      ['--dsw-alias-tooltip-bg', TXT],
      ['--dsw-alias-tooltip-key-bg', tint(BG, 16, TXT)],
      ['--dsw-alias-turn-trigger-bg', L2],
      ['--dsw-alias-turn-trigger-bg-hover', tint(TXT, 8, L2)],
      ['--dsw-menu-surface-fill', L1],
      ['--dsw-alias-menu-icon', TXT2],
      ['--dsw-alias-menu-group-header-fill', tint(TXT, 4, L1)],

      ['--dsw-specific-bubble', tint(BRAND, 8, L1)],
      ['--dsw-specific-bubble-highlight', tint(BRAND, 14, BG)],
      ['--dsw-specific-input-major', L2],
      ['--dsw-specific-login-input', L2],
      ['--dsw-specific-menu', L1],
      ['--dsw-specific-selector', L2],
      ['--dsw-specific-sidebar-nav-item-active', L2],
      ['--dsw-specific-sidebar-nav-item-active-accent', BRAND],
      ['--dsw-specific-tip', tint(BRAND, 8, BG)],

      ['--dsw-alias-illustration-background', L1],
      ['--dsw-alias-illustration-surface', L2],
      ['--dsw-alias-illustration-backing', LINE],
      ['--dsw-alias-illustration-detail', LINE],
      ['--dsw-alias-illustration-inset', L2],
      ['--dsw-alias-illustration-shadow', 'var(--dsw-alias-border-l1)'],
    ]

    /** The host's other 100-odd aliases, re-derived so nothing falls back to blue. */
    function bridgeCss() {
      const decls = ALIAS_BRIDGE.map(([name, value]) => `${name}:${value}!important`)
      return `body{${decls.join(';')}}`
    }

    /** Type pairing: the palette's own, or one chosen override. */
    function fontCss(state, palette) {
      const bodyOf = (kind) => (kind === 'serif' ? FONT_SERIF : kind === 'mono' ? FONT_MONO : FONT_SANS)
      if (state.font === 'host') return ''
      if (state.font === 'serif') return `body{--dsw-font-family:${FONT_SERIF}!important}`
      if (state.font === 'mono') return `body{--dsw-font-family:${FONT_MONO}!important}`
      if (state.font === 'headline') {
        return [
          `body{--dsw-font-family:${FONT_SANS}!important}`,
          `body h1,body h2,body h3{font-family:${FONT_SERIF}!important;letter-spacing:.01em}`,
        ].join('\n')
      }
      const stack = palette.fontStack ?? bodyOf(palette.font)
      const heading = palette.headingStack ?? (palette.heading === 'serif' ? FONT_SERIF : null)
      const tracking = palette.headTracking ?? '.02em'
      const css = [`body{--dsw-font-family:${stack}!important}`]
      if (palette.bodyWeight) {
        // A medium body weight is the other half of "the Latin reads too thin":
        // 思源黑体 has a real 500, so the Han is set to it rather than synthesised.
        css.push(`body{font-weight:${palette.bodyWeight}}`)
      }
      if (palette.xHeight) {
        // font-size-adjust equalises x-height across faces: the Latin is grown
        // to the Chinese measure, the Chinese (already at that measure) is left
        // alone. Anything with its own cast 鈥?code, quotes 鈥?is opted out
        // further down, or the terminal face would balloon.
        css.push(`body{font-size-adjust:${palette.xHeight}}`)
      }
      if (heading && (palette.headingStack || palette.font !== 'serif')) {
        // Markdown headings are real h1–h3, but the hero headline is a plain span
        // inside the shell's titleGroup — without its own selector the title font
        // would never reach the one title everybody sees first.
        const targets = [
          'body h1',
          'body h2',
          'body h3',
          'body [class*="titleGroup"]>span:first-child',
        ]
        css.push(`${targets.join(',')}{font-family:${heading}!important;letter-spacing:${tracking};font-weight:${palette.headWeight ?? 600};font-synthesis:none${palette.headCaps ? ';text-transform:uppercase' : ''}${palette.headVariation ? `;font-variation-settings:${palette.headVariation}` : ''}${palette.headXHeight ? `;font-size-adjust:${palette.headXHeight}` : ''}}`)
      }
      return css.join('\n')
    }

    /** Grain, corners, rules, rhythm, code cast, type and the mark's breathing. */
    function finishCss(state, palette) {
      const texture = state.texture === 'auto' ? palette.texture : state.texture
      const finish = finishOf(palette)
      const shape = state.shape === 'auto' ? finish.shape : state.shape
      const rule = state.rule === 'auto' ? finish.rule : state.rule
      const density = state.density === 'auto' ? finish.density : state.density
      const parts = []

      parts.push(
        '::selection{background:color-mix(in srgb,var(--dsw-alias-brand-primary) 26%,transparent);color:var(--dsw-alias-label-primary)}',
      )
      parts.push(
        'body [contenteditable="true"],body textarea,body input{caret-color:var(--dsw-alias-brand-primary)}',
      )

      if (texture === 'paper') {
        parts.push(
          'body{background-image:radial-gradient(120% 80% at 50% -10%,rgba(0,0,0,.035),transparent 62%),repeating-linear-gradient(0deg,rgba(70,58,40,.03) 0 1px,transparent 1px 3px);background-attachment:fixed}',
          'body[data-ds-dark-theme]{background-image:radial-gradient(120% 70% at 50% -20%,rgba(255,235,200,.05),transparent 55%),repeating-linear-gradient(0deg,rgba(255,245,225,.025) 0 1px,transparent 1px 3px);background-attachment:fixed}',
        )
      } else if (texture === 'scan') {
        parts.push(
          'body{background-image:repeating-linear-gradient(0deg,rgba(0,0,0,.045) 0 1px,transparent 1px 3px);background-attachment:fixed}',
          'body[data-ds-dark-theme]{background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.038) 0 1px,transparent 1px 3px);background-attachment:fixed}',
        )
      }

      {
        // The shared terminal voice: both cool palettes print their code on the
        // same screen face, so the two press runs still read as one machine.
        parts.push(
          `body pre,body pre code,body code,body kbd,body samp{font-family:${FONT_CODE}!important}`,
          'body pre,body pre code,body code,body kbd,body samp{font-size-adjust:none}',
          'body pre{font-size:.96em;line-height:1.6;letter-spacing:.01em}',
          'body :not(pre)>code{font-size:1.02em;letter-spacing:.02em}',
        )
      }

      if (state.glow !== 'off') {
        // A lit screen only exists in the dark. The glow is two haloes — a tight
        // one in the text's own ink and a wide one in the palette brand — plus
        // raster lines over the block, so the code reads as emitted rather than
        // printed. Daylight keeps plain paper: a glowing page would look wrong.
        parts.push(
          'body[data-ds-dark-theme] pre{background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px);text-shadow:0 0 1px color-mix(in srgb,currentColor 55%,transparent),0 0 7px color-mix(in srgb,var(--dsw-alias-brand-primary) 40%,transparent);box-shadow:inset 0 0 22px color-mix(in srgb,var(--dsw-alias-brand-primary) 8%,transparent)}',
          'body[data-ds-dark-theme] pre code{text-shadow:inherit}',
          'body[data-ds-dark-theme] :not(pre)>code,body[data-ds-dark-theme] kbd,body[data-ds-dark-theme] samp{text-shadow:0 0 6px color-mix(in srgb,var(--dsw-alias-brand-primary) 34%,transparent)}',
        )
      }

      {
        // A quotation is a different press run: 仿宋, upright, one notch smaller.
        // Never italic — CJK italics are synthesised obliques and read as errors.
        parts.push(
          `body blockquote{font-family:${FONT_QUOTE};font-style:normal;font-size:.97em;letter-spacing:.01em;font-size-adjust:none}`,
          'body blockquote em,body blockquote i{font-style:normal;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px}',
        )
      }

      if (shape === 'square') {
        parts.push(
          'body{--dsw-radius-xs:0px!important;--dsw-radius-sm:1px!important;--dsw-radius-md:2px!important;--dsw-radius-lg:2px!important;--dsw-radius-xl:3px!important;--dsw-radius-2xl:4px!important}',
        )
      }

      if (rule === 'double') {
        parts.push(
          'body hr{border:0;border-top:3px double var(--dsw-alias-border-l2);margin:1.2em 0}',
          'body table{border-top:3px double var(--dsw-alias-border-l2);border-bottom:3px double var(--dsw-alias-border-l2)}',
          'body thead th{border-bottom:1px solid var(--dsw-alias-border-l2)!important}',
          'body blockquote{border-left:3px double var(--dsw-alias-brand-primary)}',
        )
      }

      if (density === 'compact') {
        parts.push(
          'body p,body ul,body ol,body blockquote{margin-top:.5em!important;margin-bottom:.5em!important}',
          'body li{margin-top:.1em!important;margin-bottom:.1em!important}',
          'body h1,body h2,body h3,body h4{margin-top:.9em!important;margin-bottom:.45em!important}',
        )
      }

      {
        // Open on the palette's own heading cut, but never fall back to a serif
        // on a mono theme: the initial has to belong to the same family as the text.
        const face =
          palette.headingStack ??
          (palette.heading === 'serif' ? FONT_SERIF : palette.font === 'mono' ? FONT_MONO : FONT_SANS)
        parts.push(
          `body [class*="markdown"].rp-dropcap>p:first-child::first-letter{float:left;font-family:${face};font-size:3.1em;line-height:.86;padding:.06em .14em 0 0;color:var(--dsw-alias-brand-primary)}`,
        )
      }

      {
        parts.push(
          'body [class*="markdown"] h2,body [class*="markdown"] h3{border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:.3em}',
        )
        // A palette may overrule that hairline with the rule its own press would
        // print: a 2px ink bar under a front-page section, an engraved double
        // rule, a second-drum pink bar. It has to come after the rule above.
        if (palette.sectionRule) {
          parts.push(
            `body [class*="markdown"] h2,body [class*="markdown"] h3{border-bottom:${palette.sectionRule}}`,
          )
        }
      }

      // 思源宋体 is a family with real weights: without asking for Medium the
      // Song horizontals thinning out is exactly what the mono themes suffered.
      const bodyKind = state.font === 'auto' ? palette.font : state.font
      if (bodyKind === 'mono') {
        parts.push(
          'body [class*="markdown"]{font-weight:500}',
          'body [class*="markdown"] h1,body [class*="markdown"] h2,body [class*="markdown"] h3{font-weight:600!important}',
        )
      }

      parts.push(fontCss(state, palette))
      parts.push(`body pre{filter:${palette.code}}`)

      if (state.motion === 'on') {
        parts.push(
          '@media (prefers-reduced-motion: no-preference){@keyframes rp-breathe{0%,100%{opacity:1}48%{opacity:.55}}body .rp-mark{animation:rp-breathe 3.2s ease-in-out infinite}}',
        )
      }

      return parts.filter(Boolean).join('\n')
    }

    /**
     * Tag message bodies that may open with a drop cap: the first child has to be
     * a paragraph, and a one-word reply must never grow a three-line initial.
     */
    function watchDropCaps() {
      const MIN_CHARS = 60
      let frame = 0
      const scan = () => {
        frame = 0
        for (const node of document.querySelectorAll('[class*="markdown"]')) {
          const first = node.firstElementChild
          const want =
            first != null &&
            first.tagName === 'P' &&
            (first.textContent ?? '').trim().length >= MIN_CHARS
          if (want !== node.classList.contains('rp-dropcap')) {
            node.classList.toggle('rp-dropcap', want)
          }
        }
      }
      const schedule = () => {
        if (frame === 0) frame = requestAnimationFrame(scan)
      }
      scan()
      const observer = new MutationObserver(schedule)
      observer.observe(document.body, { childList: true, subtree: true, characterData: true })
      return () => {
        observer.disconnect()
        if (frame !== 0) cancelAnimationFrame(frame)
      }
    }

    /** Flat key → string, bound to the registered dictionaries when possible. */
    function makeTranslate(ctx) {
      return (key) => {
        try {
          const locale = ctx.get('locale')
          if (locale != null) {
            const bound = locale.bind(NS)(key)
            if (bound !== key) return bound
          }
        } catch {
          /* fall through to the built-in dictionary */
        }
        return DICT.en[key] ?? key
      }
    }

    /* @marks:begin */

    /** Colour handles every mark shares; each palette resolves them at paint time. */
    const MARK_INK = {
      brand: 'var(--dsw-alias-brand-primary)',
      ink: 'var(--dsw-alias-label-primary)',
      paper: 'var(--dsw-alias-bg-base)',
      line: 'var(--dsw-alias-border-l2)',
    }

    /**
     * The DeepSeek whale, verbatim from the shipping logo, so every palette
     * restyles the real mark instead of inventing a different animal.
     */
    const WHALE_PATH = 'M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z'
    const WHALE_BOX = { width: 23.16, height: 17.04 }

    /** A per-render id for the clip paths the patterned marks need. */
    let markSeq = 0
    function markId(kind) {
      markSeq += 1
      return 'rp-' + kind + '-' + markSeq
    }

    /** Fit the whale to one square grid: width in grid units, centred in `box`. */
    function whaleFit(width, box) {
      const edge = box ?? 24
      const k = width / WHALE_BOX.width
      const height = WHALE_BOX.height * k
      return { k, width, height, x: (edge - width) / 2, y: (edge - height) / 2 }
    }

    /** One whale path at the fitted size; `props` adds paint. */
    function whale(fit, props) {
      return h('path', {
        d: WHALE_PATH,
        transform: 'translate(' + fit.x + ' ' + fit.y + ') scale(' + fit.k + ')',
        ...props,
      })
    }

    /**
     * The flat mark: the whale in one colour, nothing else. Palettes that carry
     * their character in the palette alone (seal, crt, 3270, eight-bit, sage)
     * share it.
     */
    function plainArt(id, compact) {
      return whale(whaleFit(compact ? 20 : 20.6), { fill: MARK_INK.brand })
    }

    /** Inverted amber: a paper whale knocked out of the disc. */
    function amberArt(id, compact) {
      return h(
        'g',
        null,
        h('circle', { cx: 12, cy: 12, r: 10.6, fill: MARK_INK.brand }),
        whale(whaleFit(compact ? 16.6 : 16.6), { fill: MARK_INK.paper }),
      )
    }

    /** P1 phosphor: the whale inside its own phosphor halo. */
    function phosphorArt(id, compact) {
      const fit = whaleFit(compact ? 19.8 : 20.8)
      return h(
        'g',
        null,
        whale(fit, {
          fill: MARK_INK.brand,
          stroke: MARK_INK.brand,
          strokeWidth: compact ? 2 : 3,
          strokeLinejoin: 'round',
          opacity: 0.18,
        }),
        whale(fit, { fill: MARK_INK.brand }),
      )
    }

    /** Moss green: two plates a hair off register, the accent edge in line grey. */
    function mossArt(id, compact) {
      const fit = whaleFit(compact ? 19 : 19.8)
      const shift = compact ? 0.75 : 0.9
      return h(
        'g',
        null,
        whale({ ...fit, x: fit.x - shift, y: fit.y - shift * 0.6 }, {
          fill: MARK_INK.line,
          opacity: 0.55,
        }),
        whale(fit, { fill: MARK_INK.brand }),
      )
    }

    /** Ink only: the whale knocked out of a solid plate, the way a front page
     *  prints its masthead — one ink, paper showing through the counter. */
    function inkArt(id, compact) {
      return h(
        'g',
        null,
        h('rect', { x: 1.1, y: 1.1, width: 21.8, height: 21.8, fill: MARK_INK.ink }),
        whale(whaleFit(compact ? 16.2 : 17.2), { fill: MARK_INK.paper }),
      )
    }

    /** Cobalt: the whale inside a printer's crop marks. */
    function cobaltArt(id, compact) {
      const fit = whaleFit(compact ? 18 : 19)
      const tick = (x, y, w, h_, key) =>
        h('rect', { x, y, width: w, height: h_, fill: MARK_INK.brand, opacity: 0.5, key })
      return h(
        'g',
        null,
        whale(fit, { fill: MARK_INK.brand }),
        tick(1.4, 1.4, 3.6, 0.5, 'tl-h'),
        tick(1.4, 1.4, 0.5, 3.6, 'tl-v'),
        tick(19, 1.4, 3.6, 0.5, 'tr-h'),
        tick(22.1, 1.4, 0.5, 3.6, 'tr-v'),
        tick(1.4, 22.1, 3.6, 0.5, 'bl-h'),
        tick(1.4, 19, 0.5, 3.6, 'bl-v'),
        tick(19, 22.1, 3.6, 0.5, 'br-h'),
        tick(22.1, 19, 0.5, 3.6, 'br-v'),
      )
    }

    /** Riso: key plate plus the spot drum, a drum-width off register. */
    function risoArt(id, compact) {
      const fit = whaleFit(compact ? 18.6 : 19.6)
      const shift = compact ? 0.9 : 1.05
      return h(
        'g',
        null,
        whale({ ...fit, x: fit.x + shift, y: fit.y + shift }, {
          fill: MARK_INK.brand,
          opacity: 0.7,
        }),
        whale(fit, { fill: MARK_INK.ink }),
      )
    }

    /** One drawn mark per palette id; an unknown id falls back to the seal. */
    /**
     * One drawn mark per palette: the stock whale re-inked, never a new logo.
     * A paper page keeps a quiet mark; the pressed pages get a plate of their own.
     */
    const MARK_ART = {
      moss: mossArt,
      amber: amberArt,
      ink: inkArt,
      cobalt: cobaltArt,
      riso: risoArt,
      crt: plainArt,
      phosphor: phosphorArt,
      ibm: plainArt,
      c64: plainArt,
    }

    /** The brand seat's mark: one palette's whale on the 24-unit grid. */
    function MarkArt({ palette, size }) {
      const draw = MARK_ART[palette] ?? MARK_ART.ink
      const pixels = size ?? 22
      return h(
        'svg',
        {
          viewBox: '0 0 24 24',
          width: pixels,
          height: pixels,
          'aria-hidden': true,
          style: { display: 'block', flex: 'none' },
        },
        draw(markId(palette), true),
      )
    }

    /** The welcome mark: the same whale mounted in a printed vignette. */
    /** The welcome mark: the whale alone, no frame around it. */
    function HeroMark({ palette, size }) {
      const draw = MARK_ART[palette] ?? MARK_ART.ink
      const pixels = size ?? 48
      return h(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: pixels,
          height: pixels,
          'aria-hidden': true,
          style: { display: 'block', maxWidth: '100%', maxHeight: pixels },
        },
        h('g', { transform: 'translate(8 8) scale(2)' }, draw(markId(palette), false)),
      )
    }

    /* @marks:end */

    /** Brand seat occupant: the palette's mark unless the native mark is chosen. */
    function BrandSeat({ store, size }) {
      if (!store) return null
      const state = React.useSyncExternalStore(store.subscribe, store.get, store.get)
      if (state.mark === 'native') return null
      const palette = paletteOf(state.palette)
      return h(
        'span',
        { className: 'rp-mark', style: { display: 'inline-flex' } },
        h(MarkArt, { palette: palette.id, size: size ?? 24 }),
      )
    }

    /** Welcome seat occupant: the same whale, unframed, in the palette's colours. */
    function HeroSeat({ store }) {
      if (!store) return null
      const state = React.useSyncExternalStore(store.subscribe, store.get, store.get)
      if (state.mark === 'native') return null
      const palette = paletteOf(state.palette)
      return h(
        'span',
        { className: 'rp-mark', style: { display: 'inline-flex' } },
        h(HeroMark, { palette: palette.id }),
      )
    }

    /* ------------------------------- settings page ------------------------------ */

    const ROW = {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '16px 0',
      borderBottom: '0.5px solid var(--dsw-alias-border-l2)',
    }
    const ROW_TITLE = {
      fontSize: 14,
      lineHeight: '22px',
      color: 'var(--dsw-alias-label-primary)',
    }
    const ROW_HINT = {
      fontSize: 12,
      lineHeight: '18px',
      color: 'var(--dsw-alias-label-tertiary)',
    }

    /** A labelled row holding one segmented choice. */
    function ChoiceRow({ label, hint, value, options, onPick }) {
      return h(
        'div',
        { style: ROW },
        h(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 } },
          h('span', { style: ROW_TITLE }, label),
          hint ? h('span', { style: ROW_HINT }, hint) : null,
        ),
        h(
          'div',
          { style: { display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' } },
          options.map((option) =>
            h(
              'button',
              {
                key: option.id,
                type: 'button',
                'aria-pressed': value === option.id,
                onClick: () => onPick(option.id),
                style: {
                  font: 'inherit',
                  fontSize: 12,
                  lineHeight: '18px',
                  padding: '3px 10px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  border: `1px solid ${
                    value === option.id
                      ? 'var(--dsw-alias-brand-primary)'
                      : 'var(--dsw-alias-border-l2)'
                  }`,
                  background: value === option.id ? 'var(--dsw-alias-brand-primary)' : 'transparent',
                  color:
                    value === option.id
                      ? 'var(--dsw-alias-bg-base)'
                      : 'var(--dsw-alias-label-secondary)',
                },
              },
              option.label,
            ),
          ),
        ),
      )
    }

    /** Local token scope so a palette card previews its own mark colours. */
    function paletteInk(palette) {
      return {
        display: 'inline-flex',
        '--dsw-alias-brand-primary': palette.tokens['--dsw-alias-brand-primary'].light,
        '--dsw-alias-label-primary': palette.tokens['--dsw-alias-label-primary'].light,
        '--dsw-alias-bg-base': palette.tokens['--dsw-alias-bg-base'].light,
        '--dsw-alias-border-l2': palette.tokens['--dsw-alias-border-l2'].light,
      }
    }

    /** One palette card: three paint chips, its mark, a name and a one-line description. */
    function PaletteCard({ palette, selected, t, onPick }) {
      const chips = [
        palette.tokens['--dsw-alias-bg-base'].light,
        palette.tokens['--dsw-alias-brand-primary'].light,
        palette.tokens['--dsw-alias-label-primary'].light,
      ]
      return h(
        'button',
        {
          type: 'button',
          'aria-pressed': selected,
          onClick: () => onPick(palette.id),
          style: {
            font: 'inherit',
            color: 'inherit',
            textAlign: 'left',
            cursor: 'pointer',
            flex: '1 1 176px',
            minWidth: 168,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            padding: 10,
            borderRadius: 'var(--dsw-radius-xl, 12px)',
            background: selected ? 'var(--dsw-alias-bg-layer-1)' : 'transparent',
            border: `1px solid ${
              selected ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-border-l1)'
            }`,
          },
        },
        h(
          'span',
          { style: { display: 'flex', height: 30, borderRadius: 6, overflow: 'hidden' } },
          chips.map((chip, index) =>
            h('span', { key: index, style: { flex: 1, background: chip } }),
          ),
        ),
        h(
          'span',
          {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              lineHeight: '20px',
              color: 'var(--dsw-alias-label-primary)',
            },
          },
          h('span', { style: paletteInk(palette) }, h(MarkArt, { palette: palette.id, size: 20 })),
          t(palette.nameKey),
        ),
        h(
          'span',
          { style: { fontSize: 12, lineHeight: '18px', color: 'var(--dsw-alias-label-tertiary)' } },
          t(palette.descKey),
        ),
      )
    }

    /** The Settings page: palettes above, finish options below. */
    function RetroPage({ store, t }) {
      if (!store || typeof store.subscribe !== 'function') return null
      const state = React.useSyncExternalStore(store.subscribe, store.get, store.get)
      const active = paletteOf(state.palette)
      return h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            width: '100%',
            maxWidth: 760,
          },
        },
        h('div', { style: { ...ROW_HINT, fontSize: 13, lineHeight: '20px' } }, t('intro')),
        h(
          'div',
          { style: { display: 'flex', flexWrap: 'wrap', gap: 8 } },
          PALETTES.map((palette) =>
            h(PaletteCard, {
              key: palette.id,
              palette,
              selected: state.palette === palette.id,
              t,
              onPick: (id) => store.set({ palette: id }),
            }),
          ),
        ),
        h(
          'div',
          { style: { display: 'flex', flexDirection: 'column' } },
          h(ChoiceRow, {
            label: t('texture'),
            hint: t('textureHint'),
            value: state.texture,
            options: [
              { id: 'auto', label: t('textureAuto') },
              { id: 'none', label: t('textureNone') },
              { id: 'paper', label: t('texturePaper') },
              { id: 'scan', label: t('textureScan') },
            ],
            onPick: (value) => store.set({ texture: value }),
          }),
          h(ChoiceRow, {
            label: t('shape'),
            hint: t('shapeHint'),
            value: state.shape,
            options: [
              { id: 'auto', label: t('finishAuto') },
              { id: 'round', label: t('shapeRound') },
              { id: 'square', label: t('shapeSquare') },
            ],
            onPick: (value) => store.set({ shape: value }),
          }),
          h(ChoiceRow, {
            label: t('font'),
            hint: t('fontHint'),
            value: state.font,
            options: [
              { id: 'auto', label: t('fontAuto') },
              { id: 'host', label: t('fontHost') },
              { id: 'serif', label: t('fontSerif') },
              { id: 'headline', label: t('fontHeadline') },
              { id: 'mono', label: t('fontMono') },
            ],
            onPick: (value) => store.set({ font: value }),
          }),
          h(ChoiceRow, {
            label: t('rule'),
            hint: t('ruleHint'),
            value: state.rule,
            options: [
              { id: 'auto', label: t('finishAuto') },
              { id: 'hairline', label: t('ruleHairline') },
              { id: 'double', label: t('ruleDouble') },
            ],
            onPick: (value) => store.set({ rule: value }),
          }),
          h(ChoiceRow, {
            label: t('density'),
            hint: t('densityHint'),
            value: state.density,
            options: [
              { id: 'auto', label: t('finishAuto') },
              { id: 'normal', label: t('densityNormal') },
              { id: 'compact', label: t('densityCompact') },
            ],
            onPick: (value) => store.set({ density: value }),
          }),
          h(ChoiceRow, {
            label: t('motion'),
            hint: t('motionHint'),
            value: state.motion,
            options: [
              { id: 'on', label: t('motionOn') },
              { id: 'off', label: t('motionOff') },
            ],
            onPick: (value) => store.set({ motion: value }),
          }),
          h(ChoiceRow, {
            label: t('glow'),
            hint: t('glowHint'),
            value: state.glow,
            options: [
              { id: 'on', label: t('glowOn') },
              { id: 'off', label: t('glowOff') },
            ],
            onPick: (value) => store.set({ glow: value }),
          }),
          h(ChoiceRow, {
            label: t('mark'),
            hint: t('markHint'),
            value: state.mark === 'native' ? 'native' : 'auto',
            options: [
              { id: 'auto', label: t('finishAuto') },
              { id: 'native', label: t('markNative') },
            ],
            onPick: (value) => store.set({ mark: value }),
          }),
        ),
        h(
          'div',
          { style: { ...ROW_HINT, paddingTop: 4 } },
          `${t(active.nameKey)} · ${t(active.descKey)}`,
        ),
      )
    }

    /* ---------------------------------- plugin ---------------------------------- */

    return {
      inject: ['theme'],
      apply(ctx) {
        const store = createStore()
        const t = makeTranslate(ctx)
        let paletteDisposer = null
        let finishDisposer = null
        let colorsInSheet = false

        /** Push one palette; the service keeps its layer, the sheet keeps the fallback. */
        function applyColors(palette) {
          const attempt = (tokens) => {
            if (paletteDisposer) {
              paletteDisposer()
              paletteDisposer = null
            }
            paletteDisposer = ctx.theme.overrideTokens(SOURCE, tokens)
          }
          try {
            attempt(palette.tokens)
            colorsInSheet = false
            return
          } catch {
            /* retry without the leading dashes before giving up */
          }
          const bare = {}
          for (const [name, modes] of Object.entries(palette.tokens)) {
            bare[name.replace(/^--/, '')] = modes
          }
          try {
            attempt(bare)
            colorsInSheet = false
          } catch {
            colorsInSheet = true
            paletteDisposer = null
          }
        }

        /** Re-apply everything that follows the current options. */
        function render() {
          const state = store.get()
          const palette = paletteOf(state.palette)
          applyColors(palette)
          if (finishDisposer) finishDisposer()
          const sheet = [
            bridgeCss(),
            colorsInSheet ? tokenDeclarations(palette) : '',
            finishCss(state, palette),
          ]
            .filter(Boolean)
            .join('\n')
          finishDisposer = installStyles('finish', sheet)
        }

        ctx.effect(() => {
          render()
          const off = store.subscribe(render)
          return () => {
            off()
            if (paletteDisposer) paletteDisposer()
            if (finishDisposer) finishDisposer()
            paletteDisposer = null
            finishDisposer = null
          }
        })

        ctx.effect(() => watchDropCaps())

        ctx.inject(['locale'], (child) => {
          const locale = child.get('locale')
          if (locale == null) return
          child.effect(() => {
            try {
              locale.register(NS, { zh: DICT.zh, en: DICT.en })
            } catch (error) {
              console.warn('retro-press: could not register dictionaries', error)
            }
          })
        })

        const slots = ctx.get('slots')
        if (slots == null) {
          console.warn('retro-press: the slots service is unavailable; no settings page')
          return
        }

        ctx.effect(() => {
          try {
            return slots.inject('settings.section', () =>
              slots.register(
                {
                  name: 'settings.section',
                  id: 'retro-press',
                  order: 56,
                  label: () => t('sectionTitle'),
                  locale: NS,
                  inject: () => ({ store, t, ctx }),
                },
                RetroPage,
              ),
            )
          } catch (error) {
            console.warn('retro-press: could not add the settings page', error)
            return () => {}
          }
        }, 'retro-press: settings section')

        const seats = [
          { slot: 'sidebar.brand.mark', id: 'retro-press-brand', component: BrandSeat },
          { slot: 'conversation.hero.brand.mark', id: 'retro-press-hero', component: HeroSeat },
        ]
        for (const seat of seats) {
          ctx.effect(() => {
            try {
              return slots.inject(seat.slot, () =>
                slots.register(
                  { name: seat.slot, id: seat.id, inject: () => ({ store }) },
                  seat.component,
                ),
              )
            } catch (error) {
              console.warn(`retro-press: could not occupy ${seat.slot}`, error)
              return () => {}
            }
          }, `retro-press: ${seat.slot}`)
        }
      },
    }
  },
})
