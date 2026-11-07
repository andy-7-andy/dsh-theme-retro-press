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
     * The reading mono. Code and every fixed-pitch body use this one face.
     * Cutive Mono is a typewritten manuscript: slab serifs, wide advance, and an
     * unmistakable 1 / l / I. It is what a page looked like when it came off a
     * typewriter and pasted in — but unlike Courier Prime its stems hold at
     * 13px. VT323, Share Tech Mono and Courier Prime may title, never set body.
     *
     * The first name is the copy we ship inside this file (see CUTIVE_MONO_DATA
     * at the bottom); the second is the same face when the reader happens to
     * have installed it. SIL Open Font License, so it may travel with the theme.
     */
    const FONT_CODE =
      '"Cutive Mono RP","Cutive Mono","Courier Prime",Consolas,"Source Han Sans SC","思源黑体","Microsoft YaHei",monospace'
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

    /**
     * Ship the reading mono inside the plugin.
     * A theme that names a font nobody has is a theme that looks different on
     * every machine. Cutive Mono is 78 kB and SIL OFL, so it rides along as a
     * data URI: no install step, no fetch, no CSP exception — the stylesheet the
     * plugin already injects simply carries the glyphs.
     */
    let fontFaceCached = null
    function fontFaceCss() {
      if (fontFaceCached !== null) return fontFaceCached
      fontFaceCached = CUTIVE_MONO_DATA
        ? `@font-face{font-family:"Cutive Mono RP";font-style:normal;font-weight:400;font-display:swap;src:url(data:font/ttf;base64,${CUTIVE_MONO_DATA}) format("truetype")}`
        : ''
      return fontFaceCached
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
          'body pre{font-size:.99em;line-height:1.68;letter-spacing:.012em}',
          'body :not(pre)>code{font-size:1.05em;letter-spacing:.03em}',
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
            fontFaceCss(),
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

/**
 * Cutive Mono Regular (SIL Open Font License 1.1, see assets/OFL-CutiveMono.txt),
 * base64 TTF. Generated file: do not edit by hand — replace the blob wholesale
 * by re-running theme-design/embed-font.js if the face ever changes.
 */
const CUTIVE_MONO_DATA =
  'AAEAAAARAQAABAAQR0RFRg7jEKsAATBkAAAAhEdQT1NAYz1CAAEw6AAAA5xHU1VCGfIK4gABNIQAAAP+T1MvMrc4YOEAAAGYAAAAYGNtYXBLHSeyAAAI5AAABQZjdnQgG88GhwAAHLgAAABcZnBnbWIu/30AAA3sAAAODGdhc3AAAAAQAAEwXAAAAAhnbHlmk4NXiAAAIKAAAQFMaGVhZBI1HsMAAAEcAAAANmhoZWEK1QimAAABVAAAACRobXR423tNMwAAAfgAAAbqbG9jYVwiGvAAAB0UAAADim1heHADTA9IAAABeAAAACBuYW1lXiOFTgABIewAAAP0cG9zdLuk/mIAASXgAAAKe3ByZXAyn9IZAAAb+AAAAL0AAQAAAAEcKesOzT9fDzz1AA8IAAAAAADMf83XAAAAAOJg61X/Bv3SBSsGoQAAAAYAAgAAAAAAAAABAAAGof3SAAAE2P8G/EsFKwgAAAAAAAAAAAAAAAAAAAABsQABAAABxAB2AAYAbAAEAAIAKgBXAI0AAADDDgwAAwABAAQE0wGQAAUAAAUzBM0AAACaBTMEzQAAAs0AAAHQAAAAAAAAAAAAAAAAoAAA70AAIEsAAAAAAAAAAG5ld3QAwAAN+wIGof3SAAAGoQIuAAAAkwAAAAADBgSTAAAAIAADBNgAZgTYACgE2AAoBNgAKATYACgE2AAoBNgAKATYACgE2AAoBNgAKATYACgE2AAoBNgAKATYACYE2AC8BNgAvATYAIQE2ACEBNgAhATYAIQE2ACEBNgAhATYAGUE2ABlBNgAZQTYAGUE2ABlBNgAaATYAGgE2ABoBNgAaATYAGgE2ABoBNgAaATYAGgE2ABoBNgAaATYAGgE2ABoBNgAaATYAGgE2ABZBNgAWQTYAFkE2ABZBNgAWQTYAFkE2ABdBNgAXQTYAF0E2AEDBNgALwTYAQME2AEDBNgBAwTYAQME2AEDBNgBAwTYAQME2AEDBNgBAwTYAQME2AEDBNgAigTYAIoE2AAhBNgAIQTYAEoE2ABKBNgASgTYAEoE2ABKBNgASgTYABQE2AAUBNgAUATYAFAE2ABQBNgAUATYAFAE2ABQBNgAbATYAGwE2ABsBNgAbATYAGwE2ABsBNgAbATYAGwE2ABsBNgAbATYAGwE2ABsBNgAdgTYAHsE2AB7BNgARATYAGwE2ACeBNgAngTYAJ4E2ACeBNgAngTYAJ4E2AEMBNgBDATYAQwE2AEMBNgBDATYAQwE2AEMBNgAWwTYAHgE2AB4BNgAeATYAHgE2AB4BNgANwTYADcE2AA3BNgANwTYADcE2AA3BNgANwTYADcE2AA3BNgANwTYADcE2AA3BNgANwTYAGwE2AAzBNgAMwTYADME2AAzBNgAMwTYAGYE2AB8BNgAfATYAHwE2AB8BNgAfATYANsE2ADbBNgA2wTYANsE2ABABNgAQATYAAYE2AA+BNgAHgTYAB4E2ABABNgAQATYAP0E2AD9BNgA/QTYAP0E2AD2BNgA/QTYAP0E2AD9BNgA/QTYAP0E2AD9BNgA/QTYAHcE2ABnBNgAZwTYALcE2AC3BNgAtwTYALcE2AC3BNgAtwTYAMEE2ADBBNgAwQTYAMEE2AA/BNgAPwTYANQE2ADUBNgA1ATYANQE2ADUBNgA1ATYANQE2ADUBNgA1ATYANQE2ADUBNgA1ATYANQE2AEZBNgBGQTYARQE2AEUBNgBFATYARQE2AEUBNgBFATYAHEE2ABxBNgAcQTYAPkE2AD9BNgA/QTYAP0E2AD9BNgA/QTYAP0E2AEDBNgA/QTYAP0E2AD9BNgA+QTYAP0E2ACLBNgBKwTYASsE2AErBNgAlgTYAJYE2ACWBNgA1ATYANQE2ADUBNgA1ATYAKoE2ABiBNgA1ATYACwE2AAsBNgAgwTYAIME2ACDBNgAgwTYAIME2AAZBNgAgwTYAJkE2ADEBNgAxATYAMQE2ADEBNgAxATYAMQE2ADEBNgAxATYAMQE2ADEBNgAxATYAMQE2ABjBNgAjgTYAI4E2ABgBNgAyATYANsE2ADbBNgA2wTYANsE2ADbBNgA2wTYAQoE2AEKBNgBCgTYAQoE2AEKBNgBCgTYAQoE2ABeBNgA3ATYANwE2ADcBNgA3ATYANwE2ABtBNgAbQTYAG0E2ABtBNgAbQTYAG0E2ABtBNgAbQTYAG0E2ABtBNgAbQTYAG0E2ABtBNgAggTYABoE2AAaBNgAGgTYABoE2AAaBNgAqwTYAJYE2ACWBNgAlgTYAJYE2ACWBNgBEQTYAREE2AERBNgBEQTYAF8E2AB2BNgBaQTYAaUE2ABtBNgA6ATYAOQE2AEIBNgBBwTYAM8E2AE5BNgBAQTYARIE2AEEBNgA+gTYAPME2AAiBNgAIgTYABAE2AGoBNgBngTYAZAE2AFoBNgAAATYAAAE2AAABNgCAgTYAfkE2AIbBNgCGwTYAJoE2AIHBNgCBwTYASwE2AEsAKX/zgTYAXwE2AEkBNgA2wTYAPME2ADyAKUAMgAA/wYE2AFHBNgA7gTYAJoE2ADEBNgB5ATYAeQE2AGKBNgBfwTYAgME2AGoBNgB+QTYAcQE2AFRBNgBYgTYAgkE2AIaBNgArATYAMIE2ADPBNgBEgTYAcQE2AIxBNgBAwTYAFME2AC6BNgA6ATYAYoE2AAwBNgAMATYAEAE2AHABNgCfwTYAkEE2AEoBNgBUATYALcE2AE4BNgBDATYADwE2AD6BNgAfATYAPME2AERBNgBKgTYAa4E2AEtBNgBKATYARIE2ADABNgAPQTYALUE2AC1BNgBEQTYATAE2AFeBNgA/ATYATwE2ACEBNgBBwTYASsE2ABdBNgAbQTYAIUE2AA8BNgBXwAAAcEAAAIxAAAABgAAAfUAAAEsAAAB+QAAAd0AAAHdAAAB/gAAAhAAAAGZAAAB1gAAASwAAAGxAAACGgAAABwAAAH3BNgBwQIxAAYB9QEsAd0B3QH+AhABmQHWABwB9wAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEBPIAAAByAEAABQAyAA0ALwA5AH4AlACbAJ0ArAFhAX4BkgHMAfUCGwI3AscC3QMEAwgDDAMPAxEDKAO8HgMeCx4fHkEeVx5hHmsehR6eHvMgFCAaIB4gIiAmIDAgOiBEIHQgrCEiIgYiDyISIhUiHiIrIkgiYCJlJcr7Av//AAAADQAgADAAOgCRAJoAnQCgAK4BZAGSAcQB8QIAAjcCxgLYAwADBgMKAw8DEQMmA7weAh4KHh4eQB5WHmAeah6AHp4e8iATIBggHCAgICYgMCA5IEQgdCCsISIiBiIPIhIiFSIeIisiSCJgImQlyvsB//8BPwAAAQgAAAEsAScBJgAAAAAAAP/iAAAAAAAA/qX+7wAAAAAAAAAA/pz+m/6H/XsAAAAAAAAAAAAAAAAAAAAA4dEAAOFMAAAAAAAA4SvhbeE34P7g1eDY4Fnfk9+L33ffct95323fS98tAADb1AYyAAEAAABwAAAAjAAAAAAAAAEOASYCjAAAAr4CzgLWAAAAAAMIAxIDGgMeAAAAAAAAAAADGgMcAx4DIAMiAyQDJgMoAAADMAAAAzADNAM4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx4AAAAAAAABSgFSAXIBWQGDAZwBdgFzAWIBYwFYAYgBTgFeAU0BWgFPAVABjwGMAY4BVAF1AAEADgAQABYAGwAnACkALwAyAD8AQQBDAEkASwBRAF4AYQBiAGgAcAB1AIIAgwCIAIkAjgFmAVsBZwGWAWEBsgCaAKcAqQCvALYAwgDEAMoAzQDbAN4A4QDoAOoA8gD/AQIBAwEJAREBFgEjASQBKQEqAS8BZAF9AWUBlAFLAVMBgQGFAYIBhgF+AXgBsAF5ATUBbgGVAXoBugF8AZIBRwFIAbMBmwF3AVYBuwFGATYBbwFEAUMBRQFVAAcAAgAEAAwABgALAA0AEwAjABwAHwAhADoANAA2ADgAGgBPAFcAUgBUAFwAVgGKAFsAewB2AHgAegCKAGABEACgAJsAnQClAJ8ApACmAKwAvgC3ALoAvADVAM8A0QDTALUA8AD4APMA9QD9APcBiwD8ARwBFwEZARsBKwEBAS0ACQCiAAMAnAAKAKMAEQCqABQArQAVAK4AEgCrABcAsAAYALEAJQDAAB0AuAAiAL0AJgDBAB4AuQAsAMcAKwDGAC4AyQAtAMgAMQDMADAAywA+ANkAPADXADUA0AA9ANgAOQDOADMA2gBAAN0AQgDfAOAARADiAEYA5ABFAOMARwDlAEgA5wBMAOsATgDuAE0A7QDsAFAA8QBaAPsAUwD0AFgA+QBdAP4AYwEEAGUBBgBkAQUAaQEKAGwBDQBrAQwAagELAHIBEwBxARIAgQEiAH4BHwB3ARgAgAEhAHwBHQB/ASAAhQEmAIsBLACMAI8BMACRATIAkAExAJIAkwC0AJQAlQDmAJYAlwDvAJgAmQCzACoAxQAFAJ4ACAChACAAuwAkAL8ANwDSADsA1gBVAPYAWQD6AGYBBwBnAQgAeQEaAH0BHgBtAQ4AcwEUAbcBsQG4AbwBuQG0AaEBogGlAakBqgGnAaABnwGoAaMBpgAPAKgAGQCyACgAwwBKAOkAXwEAAG4BDwB0ARUAhwEoAIQBJQCGAScAjQEuAWwBbQFoAWoBawFpAX8BgAFXAZEBkAAAsAAsILAAVVhFWSAgS7gADlFLsAZTWliwNBuwKFlgZiCKVViwAiVhuQgACABjYyNiGyEhsABZsABDI0SyAAEAQ2BCLbABLLAgYGYtsAIsIyEjIS2wAywgZLMDFBUAQkOwE0MgYGBCsQIUQ0KxJQNDsAJDVHggsAwjsAJDQ2FksARQeLICAgJDYEKwIWUcIbACQ0OyDhUBQhwgsAJDI0KyEwETQ2BCI7AAUFhlWbIWAQJDYEItsAQssAMrsBVDWCMhIyGwFkNDI7AAUFhlWRsgZCCwwFCwBCZasigBDUNFY0WwBkVYIbADJVlSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQ1DRWNFYWSwKFBYIbEBDUNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ACJbAMQ2OwAFJYsABLsApQWCGwDEMbS7AeUFghsB5LYbgQAGOwDENjuAUAYllZZGFZsAErWVkjsABQWGVZWSBksBZDI0JZLbAFLCBFILAEJWFkILAHQ1BYsAcjQrAII0IbISFZsAFgLbAGLCMhIyGwAysgZLEHYkIgsAgjQrAGRVgbsQENQ0VjsQENQ7ADYEVjsAUqISCwCEMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZIVkgsEBTWLABKxshsEBZI7AAUFhlWS2wByywCUMrsgACAENgQi2wCCywCSNCIyCwACNCYbACYmawAWOwAWCwByotsAksICBFILAOQ2O4BABiILAAUFiwQGBZZrABY2BEsAFgLbAKLLIJDgBDRUIqIbIAAQBDYEItsAsssABDI0SyAAEAQ2BCLbAMLCAgRSCwASsjsABDsAQlYCBFiiNhIGQgsCBQWCGwABuwMFBYsCAbsEBZWSOwAFBYZVmwAyUjYUREsAFgLbANLCAgRSCwASsjsABDsAQlYCBFiiNhIGSwJFBYsAAbsEBZI7AAUFhlWbADJSNhRESwAWAtsA4sILAAI0KzDQwAA0VQWCEbIyFZKiEtsA8ssQICRbBkYUQtsBAssAFgICCwD0NKsABQWCCwDyNCWbAQQ0qwAFJYILAQI0JZLbARLCCwEGJmsAFjILgEAGOKI2GwEUNgIIpgILARI0IjLbASLEtUWLEEZERZJLANZSN4LbATLEtRWEtTWLEEZERZGyFZJLATZSN4LbAULLEAEkNVWLESEkOwAWFCsBErWbAAQ7ACJUKxDwIlQrEQAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAQKiEjsAFhIIojYbAQKiEbsQEAQ2CwAiVCsAIlYbAQKiFZsA9DR7AQQ0dgsAJiILAAUFiwQGBZZrABYyCwDkNjuAQAYiCwAFBYsEBgWWawAWNgsQAAEyNEsAFDsAA+sgEBAUNgQi2wFSwAsQACRVRYsBIjQiBFsA4jQrANI7ADYEIgYLcYGAEAEQATAEJCQopgILAUI0KwAWGxFAgrsIsrGyJZLbAWLLEAFSstsBcssQEVKy2wGCyxAhUrLbAZLLEDFSstsBossQQVKy2wGyyxBRUrLbAcLLEGFSstsB0ssQcVKy2wHiyxCBUrLbAfLLEJFSstsCssIyCwEGJmsAFjsAZgS1RYIyAusAFdGyEhWS2wLCwjILAQYmawAWOwFmBLVFgjIC6wAXEbISFZLbAtLCMgsBBiZrABY7AmYEtUWCMgLrABchshIVktsCAsALAPK7EAAkVUWLASI0IgRbAOI0KwDSOwA2BCIGCwAWG1GBgBABEAQkKKYLEUCCuwiysbIlktsCEssQAgKy2wIiyxASArLbAjLLECICstsCQssQMgKy2wJSyxBCArLbAmLLEFICstsCcssQYgKy2wKCyxByArLbApLLEIICstsCossQkgKy2wLiwgPLABYC2wLywgYLAYYCBDI7ABYEOwAiVhsAFgsC4qIS2wMCywLyuwLyotsDEsICBHICCwDkNjuAQAYiCwAFBYsEBgWWawAWNgI2E4IyCKVVggRyAgsA5DY7gEAGIgsABQWLBAYFlmsAFjYCNhOBshWS2wMiwAsQACRVRYsQ4GRUKwARawMSqxBQEVRVgwWRsiWS2wMywAsA8rsQACRVRYsQ4GRUKwARawMSqxBQEVRVgwWRsiWS2wNCwgNbABYC2wNSwAsQ4GRUKwAUVjuAQAYiCwAFBYsEBgWWawAWOwASuwDkNjuAQAYiCwAFBYsEBgWWawAWOwASuwABa0AAAAAABEPiM4sTQBFSohLbA2LCA8IEcgsA5DY7gEAGIgsABQWLBAYFlmsAFjYLAAQ2E4LbA3LC4XPC2wOCwgPCBHILAOQ2O4BABiILAAUFiwQGBZZrABY2CwAENhsAFDYzgtsDkssQIAFiUgLiBHsAAjQrACJUmKikcjRyNhIFhiGyFZsAEjQrI4AQEVFCotsDossAAWsBcjQrAEJbAEJUcjRyNhsQwAQrALQytlii4jICA8ijgtsDsssAAWsBcjQrAEJbAEJSAuRyNHI2EgsAYjQrEMAEKwC0MrILBgUFggsEBRWLMEIAUgG7MEJgUaWUJCIyCwCkMgiiNHI0cjYSNGYLAGQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsARDYGQjsAVDYWRQWLAEQ2EbsAVDYFmwAyWwAmIgsABQWLBAYFlmsAFjYSMgILAEJiNGYTgbI7AKQ0awAiWwCkNHI0cjYWAgsAZDsAJiILAAUFiwQGBZZrABY2AjILABKyOwBkNgsAErsAUlYbAFJbACYiCwAFBYsEBgWWawAWOwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbA8LLAAFrAXI0IgICCwBSYgLkcjRyNhIzw4LbA9LLAAFrAXI0IgsAojQiAgIEYjR7ABKyNhOC2wPiywABawFyNCsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbkIAAgAY2MjIFhiGyFZY7gEAGIgsABQWLBAYFlmsAFjYCMuIyAgPIo4IyFZLbA/LLAAFrAXI0IgsApDIC5HI0cjYSBgsCBgZrACYiCwAFBYsEBgWWawAWMjICA8ijgtsEAsIyAuRrACJUawF0NYUBtSWVggPFkusTABFCstsEEsIyAuRrACJUawF0NYUhtQWVggPFkusTABFCstsEIsIyAuRrACJUawF0NYUBtSWVggPFkjIC5GsAIlRrAXQ1hSG1BZWCA8WS6xMAEUKy2wQyywOisjIC5GsAIlRrAXQ1hQG1JZWCA8WS6xMAEUKy2wRCywOyuKICA8sAYjQoo4IyAuRrACJUawF0NYUBtSWVggPFkusTABFCuwBkMusDArLbBFLLAAFrAEJbAEJiAgIEYjR2GwDCNCLkcjRyNhsAtDKyMgPCAuIzixMAEUKy2wRiyxCgQlQrAAFrAEJbAEJSAuRyNHI2EgsAYjQrEMAEKwC0MrILBgUFggsEBRWLMEIAUgG7MEJgUaWUJCIyBHsAZDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwBENgZCOwBUNhZFBYsARDYRuwBUNgWbADJbACYiCwAFBYsEBgWWawAWNhsAIlRmE4IyA8IzgbISAgRiNHsAErI2E4IVmxMAEUKy2wRyyxADorLrEwARQrLbBILLEAOyshIyAgPLAGI0IjOLEwARQrsAZDLrAwKy2wSSywABUgR7AAI0KyAAEBFRQTLrA2Ki2wSiywABUgR7AAI0KyAAEBFRQTLrA2Ki2wSyyxAAEUE7A3Ki2wTCywOSotsE0ssAAWRSMgLiBGiiNhOLEwARQrLbBOLLAKI0KwTSstsE8ssgAARistsFAssgABRistsFEssgEARistsFIssgEBRistsFMssgAARystsFQssgABRystsFUssgEARystsFYssgEBRystsFcsswAAAEMrLbBYLLMAAQBDKy2wWSyzAQAAQystsFosswEBAEMrLbBbLLMAAAFDKy2wXCyzAAEBQystsF0sswEAAUMrLbBeLLMBAQFDKy2wXyyyAABFKy2wYCyyAAFFKy2wYSyyAQBFKy2wYiyyAQFFKy2wYyyyAABIKy2wZCyyAAFIKy2wZSyyAQBIKy2wZiyyAQFIKy2wZyyzAAAARCstsGgsswABAEQrLbBpLLMBAABEKy2waiyzAQEARCstsGssswAAAUQrLbBsLLMAAQFEKy2wbSyzAQABRCstsG4sswEBAUQrLbBvLLEAPCsusTABFCstsHAssQA8K7BAKy2wcSyxADwrsEErLbByLLAAFrEAPCuwQistsHMssQE8K7BAKy2wdCyxATwrsEErLbB1LLAAFrEBPCuwQistsHYssQA9Ky6xMAEUKy2wdyyxAD0rsEArLbB4LLEAPSuwQSstsHkssQA9K7BCKy2weiyxAT0rsEArLbB7LLEBPSuwQSstsHwssQE9K7BCKy2wfSyxAD4rLrEwARQrLbB+LLEAPiuwQCstsH8ssQA+K7BBKy2wgCyxAD4rsEIrLbCBLLEBPiuwQCstsIIssQE+K7BBKy2wgyyxAT4rsEIrLbCELLEAPysusTABFCstsIUssQA/K7BAKy2whiyxAD8rsEErLbCHLLEAPyuwQistsIgssQE/K7BAKy2wiSyxAT8rsEErLbCKLLEBPyuwQistsIsssgsAA0VQWLAGG7IEAgNFWCMhGyFZWUIrsAhlsAMkUHixBQEVRVgwWS0AS7gAyFJYsQEBjlmwAbkIAAgAY3CxAAdCtAAjAAMAKrEAB0K3KAQYCBICAwoqsQAHQrcsAiAGFQADCiqxAApCvApABkAEwAADAAsqsQANQrwAQABAAEAAAwALKrkAAwAARLEkAYhRWLBAiFi5AAMAZESxKAGIUVi4CACIWLkAAwAARFkbsScBiFFYugiAAAEEQIhjVFi5AAMAAERZWVlZWbcqAhoGFAEDDiq4Af+FsASNsQIARLMFZAYAREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyADIAMgAy/qn+qQBsAGwAUgBSBJMAAAScAwYAAP6YBJz/7wScAy3/7/6YADIAMgAyADIEowGMBKMBegAAACoAlgCoALoAzADeAPABAgEUASYBOAFKAVwCUgK8As4DtgPIA9oD7AP+BBAEWgRsBNQE5gVOBhIGJAY2BkgGWgZsBn4GkAaiBrQGxgbYB4gHmgiiCLQIxgjYCOoI/Al8CiIKNAp6CtgK6gr8Cw4LIAsyC0QLVgtoC3oLjAueC/IMBAyiDLQNDg0gDTINRA1WDfIOcA6CD0wPXg9wD4IPlBAoEHQQhhCYEKoQvBDOEOAQ8hEEERYRnBGuEoAS4hL0E14TyBREFFYUaBR6FIwUnhUmFTgVShVcFW4VgBWSFhIWhBcYFyoXPBdOF6oXvBfOF+AX8hgEGBYYKBg6GEwYXhhwGIIY2hlIGVoZbBl+GZAaFhqAGpIapBq2GsgbQhtUG2YbeBxUHbAefB9EIIoh6iKWI6okTCReJG4kgCSQJKIktCTEJNYk6CT6JQwmKia6JswnOCdKJ1wnbieAJ5IoNihIKQwpHivgLx4vrjAiMDQwRDBWMGgweDCKMJwwrjC+MNAw4jGAMZIydjKGMpYypjO6M8w0XDUINRo1mjX2Ngg2GDYqNjo2TDZeNnA2gDaSNqQ2tjeUOCg4ljioOUo5XDnqOjY6SDpaOmw6fjtSO7w8pjy4PXw9jj2gPbI9xD90P4ZAVkCmQLhAyEDaQOpA/EEOQR5BLkFAQdBB4kK4Q5hDqkRORNpFrkXARdJF5EX0RgRGpEa2RshG2kbsRv5HEEeMR/pIjEieSLBIwkk0SUZJVkloSXhJikmcSaxJvEnOSeBJ8koESmpK+ksMSx5LMEtCS9hMUExiTHRMhkyYTTpNTE1eTXBOTE7YT1RPklAKUFZQmFEQUYpR5FKiUxJTblPiVFJUflVgVhJW+lc4V65YJFh4WHhYeFh4WJxYylkYWXJZglpWWqpb5lyOXLRc2l2wXmRekF68XsRe0l78XyZfTl96X7Rf7mBeYM5hBmE8YWphsGIMYl5ilGLEYy5jmGPKZAJkRmRwZPxltGcsZ3ZoBmiqaWZqQmqMarJrDmt4bApspG0sbehvYHAecMBw6nFCcWxxyHIicmZzAnM2c2xzwHQWdIp1GHWQddJ2FHaMduh3KHeMeA54tnmweeZ6JnpQeoR6rnrweyJ7WnuSe9R8GHxsfJR85n0ofV59iH3EfgR+Ln5ifox+zn8Gfz5/gH/EgBiAQIBqgKaApoCmgKaApoCmgKaApgAAAAIAZgAAA5oERAADAAcAKEAlAAEEAQMCAQNnAAIAAAJXAAICAF8AAAIATwQEBAcEBxIREAUGGSshIREhBREhEQOa/MwDNP0yAmgERGb8iAN4AAAAAAIAKAAABL4EkwAtADAARkBDMAEJAgFMAAkABwEJB2cAAgIDXwADAxpNCAYEAwEBAF8FCgIAABsATgEALy4oJiUkIyEdGhYUEQ4KCAcFAC0BLAsIFiszIiY1NDYzMwEjIiY1NDYzITIWFwEzMhYVFAYjISImNTQ2MzMDIQMzMhYVFAYjAyEDWhkZGBlVAYHZGRkYGQEvIyUJAWpPGBgZGf6SGRoYGbpr/h1wnxkZGRoNAaTHGxAQGwPnGxAQGyca/AQaEBAcHBAQGgEy/s4bEBAbAdsCVQAA//8AKAAABL4GjQAnAbP/xAF0AwYAAQAAAAmxAAG4AXSwNSsA//8AKAAABL4F+AAnAbf/ugF8AwYAAQAAAAmxAAG4AXywNSsA//8AKAAABL4GmwAnAbX/uAFzAwYAAQAAAAmxAAG4AXOwNSsA//8AKAAABL4GoQAnAasABwG8AwYAAQAAAAmxAAK4AbywNSsA//8AKAAABL4FwgAnAbD/uAFLAwYAAQAAAAmxAAK4AUuwNSsA//8AKAAABL4GdAAnAbIBowF3AwYAAQAAAAmxAAG4AXewNSsA//8AKAAABL4F+AAnAawABwF8AwYAAQAAAAmxAAG4AXywNSsA//8AKAAABL4FnAAnAbr/twE9AwYAAQAAAAmxAAG4AT2wNSsA//8AKP5jBL4EkwAnAbwBXP/6AwYAAQAAAAmxAAG4//qwNSsA//8AKAAABL4F7AAnAbj/uACnAwYAAQAAAAixAAKwp7A1KwAA//8AKAAABL4F+AAnAbn/3wF1AwYAAQAAAAmxAAG4AXWwNSsAAAIAJgAABFsEkwBLAE8BEEuwC1BYQEQABAIHAgRyAAsOAQELcgAGAAkQBglnABAADgsQDmcRBQICAgNfAAMDGk0ACAgHYQAHBx1NDw0KAwEBAGAMEgIAABsAThtLsCdQWEBGAAQCBwIEB4AACw4BDgsBgAAGAAkQBglnABAADgsQDmcRBQICAgNfAAMDGk0ACAgHYQAHBx1NDw0KAwEBAGAMEgIAABsAThtARAAEAgcCBAeAAAsOAQ4LAYAABgAJEAYJZwAHAAgOBwhpABAADgsQDmcRBQICAgNfAAMDGk0PDQoDAQEAYAwSAgAAGwBOWVlAKwEAT05NTEZEQ0JBPzs4NDIvLi0sKSciIB0cGxoXFREOCggHBQBLAUoTCBYrMyImNTQ2MzMBIyImNTQ2MyEyFRUUBiMiJicnIREzNzY2MzIWFREUBiMiJicnIxEhNzY2MzIWFRUUIyEiJjU0NjMzESEDMzIWFRQGIwMhESNYGRkYGTMBRaIZGRgZAu44GQ8PFwEO/uSODQIZDQ4YGA4OGAINjgEfEAEYEBAaOP5CGRoZGR7+xWCnGRkZGisBIGEbEBAbA+cbEBAbNuAWFhMTxv5AZxcWGRz+8BoZFhVs/iXTEhUZG+Y1GxAQGgEz/s4bEBAbAdsCYgAAAAMAvAAABFAEkwAeACgAMwBAQD0XAQcEAUwABAAHAQQHaQUBAgIDXwADAxpNBgEBAQBfCAEAABsATgEAMzErKSgmIR8RDgoIBwUAHgEdCQgWKzMiJjU0NjMzESMiJjU0NjMhMhYWFRQGBxYWFRQGBiMDMzI2NjU0JiMjETMyNjY1NCYmIyP0GRoZGaCmGRgYGAFkcbxyYUNrmofjjGeCSoVVr41qana2Z2utY4IbEBAbA+ccEBAaM3ptXHUUEJKWfJpGAqErXUxxV/wZM3lpamMdAAD//wC8AAAEUAXCACcBoAACApUDBgAOAAAACbEAAbgClbA1KwAAAQCE/+8EegSjADABRLULAQMEAUxLsAlQWEAqAAYDBQMGBYAABAQBYQIBAQEgTQADAwFhAgEBASBNAAUFAGEHAQAAIQBOG0uwDlBYQCgABgMFAwYFgAAEBAFhAAEBIE0AAwMCYQACAhpNAAUFAGEHAQAAIQBOG0uwEVBYQCoABgMFAwYFgAAEBAFhAgEBASBNAAMDAWECAQEBIE0ABQUAYQcBAAAhAE4bS7AYUFhAKAAGAwUDBgWAAAQEAWEAAQEgTQADAwJhAAICGk0ABQUAYQcBAAAhAE4bS7AbUFhAKgAGAwUDBgWAAAQEAWECAQEBIE0AAwMBYQIBAQEgTQAFBQBhBwEAACEAThtAKAAGAwUDBgWAAAQEAWEAAQEgTQADAwJhAAICGk0ABQUAYQcBAAAhAE5ZWVlZWUAVAQApJyQiHBoXFRAOCQcAMAEwCAgWKwUiJgI1NBI2MzIWFzU0NjMyFhURFAYjIicmJiMiBgYVFBYWMzI2NzYzMhYVFAcOAgKdmvOMjPKad8MoHxITHh0RKAgXxoaJx2t7ynWRwigKHhQlARJzxhGZARi/rgEFkWJKahkZGRr+2xgXL3uXguKRqO59nYUcGhIFAlSia///AIT/7wR6Bo0AJwGz/9ABdAMGABAAAAAJsQABuAF0sDUrAP//AIT/7wR6BpsAJwG2/8QBcwMGABAAAAAJsQABuAFzsDUrAP//AIT+awR6BKMAJwG7Ad7//AMGABAAAAAJsQABuP/8sDUrAP//AIT/7wR6BpsAJwG1/8QBcwMGABAAAAAJsQABuAFzsDUrAP//AIT/7wR6BcIAJwGg//wClQMGABAAAAAJsQABuAKVsDUrAAACAGUAAAQ8BJMAFwAgAC5AKwUBAgIDXwADAxpNBAEBAQBfBgEAABsATgEAIB4aGBEOCggHBQAXARYHCBYrMyImNTQ2MzMRIyImNTQ2MyEyFhIVEAAhJzMyNjU0AiMjmBkaGRmjnxgYGRkBZqz/jv7U/vFnbvjc6tx8GxAQGwPnGhARG3v/AMn+w/7uVv777QEBAAD//wBlAAAEPAabACcBtv+VAXMDBgAWAAAACbEAAbgBc7A1KwAAAgBlAAAEPASTACAAMgBAQD0IAQMJAQIBAwJpBwEEBAVfAAUFGk0GAQEBAF8KAQAAGwBOAQAyMCwqKScjIRoXExEQDgoIBwUAIAEfCwgWKzMiJjU0NjMzESMiJjU0NjMzESMiJjU0NjMhMhYSFRAAISczMjY1NAIjIxEzMhYVFAYjI5gZGhkZo44cEhAakp8YGBkZAWas/47+1P7xXWT40uDccrsZDhAZuRsQEBsB5hkODhcBtRoQERt7/wDJ/sP+7lb+++0BAf5LFw4OGQAA//8AZQAABDwFwgAnAaD/zQKVAwYAFgAAAAmxAAG4ApWwNSsAAAIAZQAABDwEkwAgADIAQEA9CAEDCQECAQMCaQcBBAQFXwAFBRpNBgEBAQBfCgEAABsATgEAMjAsKiknIyEaFxMREA4KCAcFACABHwsIFiszIiY1NDYzMxEjIiY1NDYzMxEjIiY1NDYzITIWEhUQACEnMzI2NTQCIyMRMzIWFRQGIyOYGRoZGaOOHBIQGpKfGBgZGQFmrP+O/tT+8V1k+NLg3HK7GQ4QGbkbEBAbAeYZDg4XAbUaEBEbe/8Ayf7D/u5W/vvtAQH+SxcODhkAAAABAGgAAARxBJMAOQDntTABAQsBTEuwCVBYQDgABAcGAgRyAAsIAQELcgAGAAkIBglnBQECAgNfAAMDGk0ACAgHYQAHByNNCgEBAQBgDAEAABsAThtLsCdQWEA6AAQHBgcEBoAACwgBCAsBgAAGAAkIBglnBQECAgNfAAMDGk0ACAgHYQAHByNNCgEBAQBgDAEAABsAThtAOAAEBwYHBAaAAAsIAQgLAYAABgAJCAYJZwAHAAgLBwhpBQECAgNfAAMDGk0KAQEBAGAMAQAAGwBOWVlAHwEANDIvLi0sKSciIB0cGxoXFREOCggHBQA5ATgNCBYrMyImNTQ2MzMRIyImNTQ2MyEyFREUBiMiJicnIREhNzY2MzIWFREUBiMiJicnIREhNzY2MzIWFREUI5sZGhkZqocYGBkZA244GQ8PGgEO/Z8BRg0CGQ0OGBgODhgCDf66AmcQARsQEBo4GxAQGgPoGhARGzb+8hYWExP0/lGFFxYZHP6qGhkWFZT+FPsSFRkb/vI1//8AaAAABHEGjQAnAbP/vgF0AwYAGwAAAAmxAAG4AXSwNSsA//8AaAAABHEF+AAnAbf/tAF8AwYAGwAAAAmxAAG4AXywNSsA//8AaAAABHEGmwAnAbb/sQFzAwYAGwAAAAmxAAG4AXOwNSsA//8AaAAABHEGmwAnAbX/sQFzAwYAGwAAAAmxAAG4AXOwNSsA//8AaAAABHEGoQAnAasAAAG8AwYAGwAAAAmxAAK4AbywNSsA//8AaAAABHEFwgAnAbD/sgFLAwYAGwAAAAmxAAK4AUuwNSsA//8AaAAABHEFwgAnAaD/6QKVAwYAGwAAAAmxAAG4ApWwNSsA//8AaAAABHEGdAAnAbIBnAF3AwYAGwAAAAmxAAG4AXewNSsA//8AaAAABHEF+AAnAawAUAF8AwYAGwAAAAmxAAG4AXywNSsA//8AaAAABHEFnAAnAbr/sAE9AwYAGwAAAAmxAAG4AT2wNSsA//8AaP5jBHEEkwAmAbw8+gMGABsAAAAJsQABuP/6sDUrAAAAAAEAaAAABHIEkwA1AMdLsAlQWEAxAAQHBgIEcgAGAAkIBglnBQECAgNfAAMDGk0ACAgHYQAHByNNCgEBAQBfCwEAABsAThtLsCdQWEAyAAQHBgcEBoAABgAJCAYJZwUBAgIDXwADAxpNAAgIB2EABwcjTQoBAQEAXwsBAAAbAE4bQDAABAcGBwQGgAAGAAkIBglnAAcACAEHCGkFAQICA18AAwMaTQoBAQEAXwsBAAAbAE5ZWUAdAQAwLi0sKSciIB0cGxoXFREOCggHBQA1ATQMCBYrMyImNTQ2MzMRIyImNTQ2MyEyFREUBiMiJicnIREhNzY2MzIWFREUBiMiJicnIREhMhYVFAYjmxkaGRmqhxgYGRkDezgZDw8aAQ79kgFRDQIZDQ4YGA4OGAIN/q8BXhcXFxYbEBAaA+gaEBEbNv7yFhYTE/T+UYUXFhkc/qoaGRYVlP4UGhAQGwAAAP//AGgAAARyBcIAJwGg/+oClQMGACcAAAAJsQABuAKVsDUrAAABAFn/7wSrBKMAQAFcQAsLAQMEPiYCBQYCTEuwCVBYQCwABwgBBgUHBmkABAQBYQIBAQEgTQADAwFhAgEBASBNAAUFAGEJCgIAACEAThtLsA5QWEAqAAcIAQYFBwZpAAQEAWEAAQEgTQADAwJhAAICGk0ABQUAYQkKAgAAIQBOG0uwEVBYQCwABwgBBgUHBmkABAQBYQIBAQEgTQADAwFhAgEBASBNAAUFAGEJCgIAACEAThtLsBhQWEAqAAcIAQYFBwZpAAQEAWEAAQEgTQADAwJhAAICGk0ABQUAYQkKAgAAIQBOG0uwG1BYQCwABwgBBgUHBmkABAQBYQIBAQEgTQADAwFhAgEBASBNAAUFAGEJCgIAACEAThtAKgAHCAEGBQcGaQAEBAFhAAEBIE0AAwMCYQACAhpNAAUFAGEJCgIAACEATllZWVlZQBsBADs5NjQwLSknJCIcGhcVEA4JBwBAAUALCBYrBSImAjU0EjYzMhYXNTQ2MzIWFREUBiMiJyYmIyIGBhUUFhYzMjY3NSMiJjU0NjMhMhYVFAYjIxEUBiMiJjU1BgYCXprpgoLomnfDKB8SEx4dESgIF8aGib1hcb92nLwkfBkZGBkBHBkYGRo9HRISHyXSEZkBGL+uAQWRYkpqGRkZGv7bGBcve5eC4pGo7n2XcLIcEBAaGhAQHP4zHB0eHXxVawAAAP//AFn/7wSrBo0AJwGz/9MBdAMGACkAAAAJsQABuAF0sDUrAP//AFn/7wSrBfgAJwG3/8kBfAMGACkAAAAJsQABuAF8sDUrAP//AFn/7wSrBpsAJwG1/8YBcwMGACkAAAAJsQABuAFzsDUrAP//AFn90gSrBKMAJwGt//j+pAMGACkAAAAJsQABuP6ksDUrAP//AFn/7wSrBcIAJwGg//4ClQMGACkAAAAJsQABuAKVsDUrAAABAF0AAAR7BJMAQwBMQEkABQAMAQUMZwgGBAMCAgNfBwEDAxpNDQsJAwEBAF8KDgIAABsATgEAPjw7Ojk3MzAsKiknIyAcGhkYFxURDgoIBwUAQwFCDwgWKzMiJjU0NjMzESMiJjU0NjMhMhYVFAYjIxEhESMiJjU0NjMhMhYVFAYjIxEzMhYVFAYjISImNTQ2MzMRIREzMhYVFAYjjxkZGBh8bBkZGRkBLhkZFxlkAhxkGRcZGQEmGRkZGWRkGRkZGf7aGRkYGGT95GQYGBkZHBAQGgPnGxAQGxsREBr+QQG/GhARGxoPERz8GRoREBscEBAaAdj+KBkPER0AAAAAAgBdAAAEewSTAFUAWQBkQGELBwIDEwwCAhIDAmkAEgAQARIQZwoIBgMEBAVfCQEFBRpNEQ8NAwEBAF8OFAIAABsATgEAWVhXVlBOTUxLSUVCPjw7OTUzMjAsKSUjIiEgHhoXExEQDgoIBwUAVQFUFQgWKzMiJjU0NjMzESMiJjU0NjMzNSMiJjU0NjMhMhYVFAYjIxUhNSMiJjU0NjMhMhYVFAYjIxUzMhYVFAYjIxEzMhYVFAYjISImNTQ2MzMRIREzMhYVFAYjAyE1IY8ZGRgYfHAcEhAadGwZGRkZAS4ZGRcZZAIcZBkXGRkBJhkZGRlkbxkOEBltZBkZGRn+2hkZGBhk/eRkGBgZGWICHP3kHBAQGgMBGQ4OF5obEBAbGxEQGpqaGhARGxoPERyaFw4OGfz/GhEQGxwQEBoB2P4oGQ8RHQJ+2QAAAP//AF0AAAR7BpsAJwG1/7ABcwMGAC8AAAAJsQABuAFzsDUrAAABAQMAAAQVBJMAHwAuQCsEAQICA18AAwMaTQUBAQEAXwYBAAAbAE4BABoYFxURDgoIBwUAHwEeBwgWKyEiJjU0NjMhESEiJjU0NjMhMhYVFAYjIREhMhYVFAYjATYZGhkZATH+zxkZGhkCrRkZGBn+4gEeGRgZGRsQEBsD5xoQERsbERAa/BkbEBAbAAEALwAABKgEkwAwADdANAcEAgICA18AAwMaTQgGAgEBAGEFCQIAABsATgEAKykoJyMhHBsXFREOCggHBQAwAS8KCBYrMyImNTQ2MzMRIyImNTQ2MyEyFhUUBiMjERQGBiMiJjU0NjMyNjY1ESERMzIWFRQGI3YZGhkZh5sZGRoZBBQZGRgZZz6ekBAQEBB6cSH9rIMZGBkZGxAQGwPnGhARGxoREBv89nSHOBkQDxklYVkDDfwZGxAQGwD//wEDAAAEFQaNACcBs//dAXQDBgAyAAAACbEAAbgBdLA1KwD//wEDAAAEFQX4ACcBt//TAXwDBgAyAAAACbEAAbgBfLA1KwD//wEDAAAEFQabACcBtf/QAXMDBgAyAAAACbEAAbgBc7A1KwD//wEDAAAEFQahACcBqwAgAbwDBgAyAAAACbEAArgBvLA1KwD//wEDAAAEFQXCACcBsP/RAUsDBgAyAAAACbEAArgBS7A1KwD//wEDAAAEFQXCACcBoAAIApUDBgAyAAAACbEAAbgClbA1KwD//wEDAAAEFQZ0ACcBsgG8AXcDBgAyAAAACbEAAbgBd7A1KwD//wEDAAAEFQX4ACcBrAAgAXwDBgAyAAAACbEAAbgBfLA1KwD//wEDAAAEFQWcACcBuv/QAT0DBgAyAAAACbEAAbgBPbA1KwD//wED/mMEFQSTACYBvNL6AwYAMgAAAAmxAAG4//qwNSsAAAD//wEDAAAEFQX4ACcBuf/4AXUDBgAyAAAACbEAAbgBdbA1KwAAAQCK//MEMwSTACcANUAyAAEDAgMBAoAFAQMDBF8ABAQaTQACAgBhBgEAACEATgEAIyEdGhYUEA4JBwAnAScHCBYrBSImJjU1NDYzMhYVFRQWMzI2NjURISImNTQ2MyEyFhUUBiMjERQGBgHDUY9ZHxISHYpYR4pa/qIYGBgZAmcZGRgZq3q5DSxSOnAWFxYXZTM/MG1ZAwMaEBEbGhEQG/0AdJJEAAD//wCK//MEMwabACcBtQAkAXMDBgA/AAAACbEAAbgBc7A1KwAAAQAhAAAFGwSTAEcAekAJPz4tGAQBAgFMS7AxUFhAHgcFBAMCAgNfBgEDAxpNCwoIAwEBAF8JDAIAABsAThtAJAAFAwICBXIHBAICAgNgBgEDAxpNCwoIAwEBAF8JDAIAABsATllAHwEAQkA9Ozc0MC4sKiYjHxwXFREOCggHBQBHAUYNCBYrMyImNTQ2MzMRIyImNTQ2MyEyFhUUBiMjEQE2NTQjIyImNTQ2MyEyFhUUBiMjAQEzMhYVFAYjISImNTQ2MzMBBxEzMhYVFAYjVBkaGRmfnxkZGhkBvRkZFxnBAkAHE1kZGBoYAWoZGBgYiv5KAgmJGBgYGf5eGRkYGab+Irn0GRgZGRsQEBsD5hsQERscERAa/fICCAcDBhcODxkbERAb/mj9shsQEBsbEBAbAhec/oUbEBAb//8AIf3jBRsEkwAnAa0AFP61AwYAQQAAAAmxAAG4/rWwNSsAAAEASgAABGIEkwAnAD5AOyMBAQYBTAAGAgECBgGABAECAgNfAAMDGk0FAQEBAF8HAQAAGwBOAQAhHxkYFxURDgoIBwUAJwEmCAgWKzMiJjU0NjMhESMiJjU0NjMhMhYVFAYjIxEhNjY3EzY2MzIWFQMGBiN9GRoZGQEN4xkYGRkB2RoZGRmYAckRFgIiAx4RFB8eAiYgGxAQGwPnGhARGxsREBr8GQIMFwEUFhUZGP65HCYA//8ASgAABGIGjQAnAbP/pwF0AwYAQwAAAAmxAAG4AXSwNSsA//8ASgAABIMEpAImAEMAAAEHAaQBq/+kAAmxAQG4/6SwNSsA//8ASv3jBGIEkwAnAa3/zP61AwYAQwAAAAmxAAG4/rWwNSsA//8ASgAABGIEkwAnAVYDGwBIAwYAQwAAAAixAAGwSLA1KwAAAAEASgAABGIEkwA5AJBADSkhEAgEAgY1AQEIAkxLsCdQWEAsAAIGCAYCCIAACAEGCAF+BQEDAwRfAAQEGk0ABgYdTQcBAQEAYAkBAAAbAE4bQC4ABgMCAwYCgAACCAMCCH4ACAEDCAF+BQEDAwRfAAQEGk0HAQEBAGAJAQAAGwBOWUAZAQAzMSsqJSQgHhoXExEMCwcFADkBOAoIFiszIiY1NDYzIREHBiMiNTQ3NxEjIiY1NDYzITIWFRQGIyMRJTYzMhUUBwURITY2NxM2NjMyFhUDBgYjfRkaGRkBDZQMCigoquMZGBkZAdkaGRkZmAENCwgpJv7dAckRFgIiAx4RFB8eAiYgGxAQGwH2JQMuHgoqAZkaEBEbGxEQGv5+QgMuGwpJ/fICDBcBFBYVGRj+uRwmAAAAAAEAFAAABMQEkwA+AExASTYwFAMJAgFMAAkCAQIJAYAFAQICA18EAQMDGk0KCAYDAQEAXwcLAgAAGwBOAQA5NzQyLy0pJiIgHx0ZFhAOCggHBQA+AT0MCBYrMyImNTQ2MzMRIyImNTQ2MzMyFhcBATYzMzIWFRQGIyMRMzIWFRQGIyEiJjU0NjMzEQEGIyInAREzMhYVFAYjRhkZGBmFdxkYGRnGEhYGAS0BIgwhwBoZGRlxgBgYGRn+nxkaGBmF/v8VLSkT/vV4GhgZGhsQEBsD5xoQERsVDv1pApweGxEQGvwZGhAQHBwQEBoDgP2wMCsCUfyEGhAQHAAA//8AFAAABMQFwgAnAaD/6AKVAwYASQAAAAmxAAG4ApWwNSsAAAEAUP/wBJ8EkwAyAQG2HwMCAQQBTEuwCVBYQBsIBgIEBAVfBwEFBRpNAwEBAQBhAgkCAAAhAE4bS7AOUFhAHwgGAgQEBV8HAQUFGk0DAQEBAl8AAgIbTQkBAAAhAE4bS7ARUFhAGwgGAgQEBV8HAQUFGk0DAQEBAGECCQIAACEAThtLsBhQWEAfCAYCBAQFXwcBBQUaTQMBAQECXwACAhtNCQEAACEAThtLsBtQWEAbCAYCBAQFXwcBBQUaTQMBAQEAYQIJAgAAIQBOG0AfCAYCBAQFXwcBBQUaTQMBAQECXwACAhtNCQEAACEATllZWVlZQBkBAC8tKSYiIB0aFhQTEQ0KBgQAMgEyCggWKwUiJwERMzIWFRQGIyEiJjU0NjMzESMiJjU0NjMhMhcBESMiJjU0NjMhMhYVFAYjIxEUBgPeJBT914oZGBkZ/poZGRgZfpwZGBkZAR8cDAHmlRkYGhkBURkZGBhgHRAmBCb8GhsQEBsbEBAbA+caEBEbGPxHA3saEBEbGxEQGvvyIB8AAAD//wBQ//AEnwaNACcBs//JAXQDBgBLAAAACbEAAbgBdLA1KwD//wBQ//AEnwabACcBtv+8AXMDBgBLAAAACbEAAbgBc7A1KwD//wBQ/dMEnwSTACcBrf/u/qUDBgBLAAAACbEAAbj+pbA1KwD//wBQ//AEnwX4ACcBuf/jAXUDBgBLAAAACbEAAbgBdbA1KwAAAQBQ/m8EnwSTAEIAckALLhICAQQLAQIBAkxLsBhQWEAkCAYCBAQFXwcBBQUaTQMBAQECXwACAhtNAAAACWEKAQkJHwlOG0AhAAAKAQkACWUIBgIEBAVfBwEFBRpNAwEBAQJfAAICGwJOWUASAAAAQgBCJDQjNCEkNCwlCwgfKwEiJjU0NjMyNjY1NS4FJxEzMhYVFAYjISImNTQ2MzMRIyImNTQ2MyEyFwERIyImNTQ2MyEyFhUUBiMjERQGBgJ1ExUUFUyQXRFOanZzYR+KGRgZGf6aGRkYGX6cGRgZGQEVHAwB8JUZGBoZAVEZGRgYYHW7/m8aEA8YRYJZVB+OwNfUtDz8GhsQEBsbEBAbA+caEBEbGPxlA10aEBEbGxEQGvuwdKxeAAACAGz/7wRsBKMAEwAjAC1AKgADAwFhAAEBIE0FAQICAGEEAQAAIQBOFRQBAB0bFCMVIwsJABMBEwYIFisFIi4CNTQ+AjMyHgIVFA4CJzI2NjU0JiYjIgYGFRQWFgJsgMCAQECAwICAwIBAQIDAgIy5W125ioq5XVu5EWWr1nFx2K1nZ63YcXHWq2VWluuAgu6Xl+6CgOuW//8AbP/vBGwGjQAnAbP/vQF0AwYAUQAAAAmxAAG4AXSwNSsA//8AbP/vBGwF+AAnAbf/swF8AwYAUQAAAAmxAAG4AXywNSsA//8AbP/vBGwGmwAnAbX/sAFzAwYAUQAAAAmxAAG4AXOwNSsA//8AbP/vBGwGoQAnAasAAAG8AwYAUQAAAAmxAAK4AbywNSsA//8AbP/vBGwF6wAnAbD/sAF0AwYAUQAAAAmxAAK4AXSwNSsA//8AbP/vBGwGdAAnAbIBnAF3AwYAUQAAAAmxAAG4AXewNSsA//8AbP/vBGwGoQInAbQAAAG8AQYAUQAAAAmxAAK4AbywNSsA//8AbP/vBGwF+AAnAawAAAF8AwYAUQAAAAmxAAG4AXywNSsA//8AbP/vBGwFnAAnAbr/sAE9AwYAUQAAAAmxAAG4AT2wNSsAAAMAbP9ABGwFKQAnADIAPABPQEwRAQQAOzosKxoFBQQlAQIFA0wGAQUBSwABAAGFBgEDAgOGAAQEAGEAAAAgTQcBBQUCYQACAiECTjQzAAAzPDQ8MC4AJwAnLCQtCAgZKwUiJjU0NzcmAjU0PgIzMhYXNzYzMhYVFAcHFhIVFA4CIyImJwcGAxQWFwEmJiMiBgYBMjY2NTQmJwEWAQkOGQNuc3RAgMCAS4A1YAkSDhgEZWRkQIDAgD9uMGgJUlhZAcUsaz+KuV0BoIy5W0pK/kBRwBUNBgbXUwEWmHHYrWclIbwQEg4IB8dW/vaNcdarZRoYzRQDBn7pSAN1HyKX7v19luuAdNpL/JErAP//AGz/7wRsBfgAJwG5/9gBdQMGAFEAAAAJsQABuAF1sDUrAAACAHYAAARaBJQANAA/AO61KwEICQFMS7AJUFhAOQACBQQDAnIACQYICAlyAAQABwYEB2cKAQMDAV8AAQEaTQAGBgVhAAUFI00NCwIICABgDAEAABsAThtLsCdQWEA7AAIFBAUCBIAACQYIBgkIgAAEAAcGBAdnCgEDAwFfAAEBGk0ABgYFYQAFBSNNDQsCCAgAYAwBAAAbAE4bQDkAAgUEBQIEgAAJBggGCQiAAAQABwYEB2cABQAGCQUGaQoBAwMBXwABARpNDQsCCAgAYAwBAAAbAE5ZWUAjNTUBADU/NT85Ny8tKikoJyQiHRsYFxYVEhAMBwA0ATMOCBYrISImAjU0EjYzMhYzMhURFAYjIiYnJyERMzc2NjMyFhURFAYjIiYnJyMRITc2NjMyFhURFCMlMxEjIgYGFRQWFgIzb8yCg81wePB4OBkPDxoBDv63nA0CGQ0OGBgODhgCDZwBTxABGxAQGjj+DxIPV6FmZZ+EAQO/wAEHhwE2/vIWFhMT8/5ShRcWGRz+qhoZFhWU/hT7EhUZG/7yNVID6nHfpqHfdAACAHsAAAQsBJMAIwAwADpANwAGAAQBBgRpBwECAgNfAAMDGk0FAQEBAF8IAQAAGwBOAQAwLSYkHhwbGREOCggHBQAjASIJCBYrMyImNTQ2MzMRIyImNTQ2MyEyHgIVFA4CIyMRITIWFRQGIwEzMj4CNTQuAiMjrhkaGRmtnxkYGRkBWGXAmVpWkbdgdAFJGRgZGf64mEmHaz9MfZRHbhsQEBsD5xoQERsQPYRzc4I8D/5HGxAQGwJfCyxgVVtjKwkAAAD//wB7AAAELAXCACcBoP/QApUDBgBeAAAACbEAAbgClbA1KwAAAgBEAAAEKwSTACoAMwBGQEMABQAJCAUJaQAIAAYBCAZpBAECAgNfAAMDGk0HAQEBAF8KAQAAGwBOAQAzMiwrJSMiIBoYFxURDgoIBwUAKgEpCwgWKzMiJjU0NjMzESMiJjU0NjMhMhYVFAYjIxUyHgIVFA4CIxUzMhYVFAYjAzI2NjU0JiYjbRkQDxnh1BkOEBkB3RQLDhmjduO4bXK84W/jGQ4PGeLJ7Whd69YZEA8aA+saEBEbGRAQHZ0MNn90cHs2DOwaDxAZAYglZWBYYicAAAACAGz/CgRsBKMAJwA3ADFALgADAQIBAwKAAAIABAIEZQAFBQBhAAAAIE0ABgYBYQABASEBTiYmJiMjGCgHCB0rBS4CNTQ+AjMyHgIVFA4CBxcWFjMyNjc2MzIWFRQHBgYjIiYmATQmJiMiBgYVFBYWMzI2NgH6hLFZQIDAgIDAgEA+fLp8Vhg4IiNVNA0QERcXJ34jT2ZhAcxduYqKuV1buYyMuVsFHbL3hXHYrWdnrdhxb9OqaANbGR0gIwkbERkOJSgxagKhgu6Xl+6CgOuWlusAAAIAngAABKkEkwA1AEAASUBGFwEHCQFMAAkABwEJB2cKAQICA18AAwMaTQgGBAMBAQBfBQsCAAAbAE4BAEA+ODYwLi0rJyUhHhoYEQ4KCAcFADUBNAwIFiszIiY1NDYzMxEjIiY1NDYzITIWFhUUBgcTMzIWFRQGIyMiJjU0NjMzAw4CIyMRMzIWFRQGIwMzMjY2NTQmJiMj0RkaGRl9YRkZGhkBQJHdfIBOzFQmGhwj6xkaGBkztAc7RhivtBkYGBqza3y7aFCujX8aDxAZA+saEBEbLoiIc4Md/hAZDxAaGhAPGQHaAgcF/jQZEA8aAmsfYWNmZyL//wCeAAAEqQaNACcBs//1AXQDBgBiAAAACbEAAbgBdLA1KwD//wCeAAAEqQabACcBtv/oAXMDBgBiAAAACbEAAbgBc7A1KwD//wCe/eMEqQSTACcBrQAa/rUDBgBiAAAACbEAAbj+tbA1KwD//wCeAAAEqQahACcBq//KAbwDBgBiAAAACbEAArgBvLA1KwD//wCeAAAEqQX4ACcBrAA4AXwDBgBiAAAACbEAAbgBfLA1KwAAAQEM/+8EIQSjAEUAVEBRLiECBQZEAQIBAkwABgYDYQQBAwMgTQAFBQNhBAEDAyBNAAEBAGEHCAIAACFNAAICAGEHCAIAACEATgEAQkAzMSspJCIfHRAOCAYARQFFCQgWKwUiJjURNDYzMhYVFRQWFjMyNjU0JicnLgI1NDY2MzIWFzQzMhYVFRQGIyImNTUuAiMiBhUUFhYXFxYWFRQGBiMiJicUATwZFxoSEhximVNun3hupE+BTV6dXkimNDQUFBsTERwGVHc7gJAzaVGIkqBoqGBQvjgRHysBOhgXGBl3K1M3a4BhXCU4G0JuXGSIRiM5XB8n/RsaGBdbNEMhdGNFSi8cLzKHgHaPQEA6ev//AQz/7wQhBo0AJwGz/+gBdAMGAGgAAAAJsQABuAF0sDUrAP//AQz/7wQhBpsAJwG2/9sBcwMGAGgAAAAJsQABuAFzsDUrAP//AQz+awQhBKMAJwG7AfX//AMGAGgAAAAJsQABuP/8sDUrAP//AQz/7wQhBpsAJwG1/9sBcwMGAGgAAAAJsQABuAFzsDUrAP//AQz90gQhBKMAJwGtAA3+pAMGAGgAAAAJsQABuP6ksDUrAP//AQz/7wQhBcIAJwGgABMClQMGAGgAAAAJsQABuAKVsDUrAAABAFv//wRYBJMARABDQEA8AQECAUwAAgABBAIBaQcBAwMIXwAICBpNBgEEBABhBQkCAAAbAE4BADUyLiwrKSUiHhwbGRQSDgwARAFDCggWKwUiNTQ2Nz4CNTQmJiMiJjU0NjMyNjY1NCYjIREzMhYVFAYjISImNTQ2MzMRIyImNTQ2MyEyFhYVFAYGBx4CFRQGBwYDAi8eHzppQ2+sXBgXFhk2d1NrV/61nBoXGxj+hRgbFxqDhxgYGRkCME6CTz9eLk+WYrOVBQEtFgsFCShaVGV3Mx0QERguYk1ecfwQEhoWEBAWGhID6xoQERtHg1pDZ0MOD0iEapGHFwEAAAAAAQB4AAAEXgSTACcAbbUdAQMCAUxLsAlQWEAgBQEDAgECA3IGAQICBF8ABAQaTQcBAQEAXwgBAAAbAE4bQCEFAQMCAQIDAYAGAQICBF8ABAQaTQcBAQEAXwgBAAAbAE5ZQBcBACIgHx4bGRUSDgwJCAcFACcBJgkIFishIiY1NDYzMxEhAwYGIyImNRE0MyEyFREUBiMiJicDIREzMhYVFAYjAUoZGxkZ8v6kDAEZDxIfKgOUKB0REBoCCv6g8hgZGhkcEBAaA+f+8RcWHBoBJjY2/toaGhYVAQ/8GRoQEBwAAAAAAQB4AAAEXgSTADkAibUmAQUEAUxLsAlQWEAqBwEFBAMEBXIJAQMKAQIBAwJnCAEEBAZfAAYGGk0LAQEBAF8MAQAAGwBOG0ArBwEFBAMEBQOACQEDCgECAQMCZwgBBAQGXwAGBhpNCwEBAQBfDAEAABsATllAHwEANDIxLyspKCckIh4bFxUSERAOCggHBQA5ATgNCBYrISImNTQ2MzMRIyImNTQ2MzMRIQMGBiMiJjURNDMhMhURFAYjIiYnAyERMzIWFRQGIyMRMzIWFRQGIwFKGRsZGfKmHBIQGqr+pAwBGQ8SHyoDlCgdERAaAgr+oK0ZDhAZq/IYGRoZHBAQGgHmGQ4OFwG1/vEXFhwaASY2Nv7aGhoWFQEP/ksXDg4Z/hoaEBAcAP//AHgAAAReBpsAJwG2/7ABcwMGAHAAAAAJsQABuAFzsDUrAP//AHj94wReBJMAJwGt/+H+tQMGAHAAAAAJsQABuP61sDUrAP//AHgAAAReBcIAJwGg/+gClQMGAHAAAAAJsQABuAKVsDUrAAABADf/7wTbBJMALgA0QDEHBQMDAQECXwYBAgIaTQAEBABhCAEAACEATgEAKigkIR0bGBYTEQ0KBgQALgEuCQgWKwUiJjURIyImNTQ2MyEyFhUUBiMjERQWMzI2NREjIiY1NDYzITIWFRQGIyMRFAYGAo6z4pEZGBkZAZEZGRgZoqCVjKZ5GRkaGQFNIyMiI3ZltRHjywKgGhARGxsREBr9YKO1wJYCohoQERsbERAa/V5/wWwAAAD//wA3/+8E2waNACcBs//aAXQDBgB1AAAACbEAAbgBdLA1KwD//wA3/+8E2wX4ACcBt//QAXwDBgB1AAAACbEAAbgBfLA1KwD//wA3/+8E2wabACcBtf/OAXMDBgB1AAAACbEAAbgBc7A1KwD//wA3/+8E2wahACcBqwAdAbwDBgB1AAAACbEAArgBvLA1KwD//wA3/+8E2wXCACcBsP/OAUsDBgB1AAAACbEAArgBS7A1KwD//wA3/+8E2wZ0ACcBsgG5AXcDBgB1AAAACbEAAbgBd7A1KwD//wA3/+8E2wahACcBtAAdAbwDBgB1AAAACbEAArgBvLA1KwD//wA3/+8E2wX4ACcBrAAdAXwDBgB1AAAACbEAAbgBfLA1KwD//wA3/+8E2wWcACcBuv/NAT0DBgB1AAAACbEAAbgBPbA1KwD//wA3/lIE2wSTACYBvPfpAwYAdQAAAAmxAAG4/+mwNSsAAAD//wA3/+8E2waaACcBuP/OAVUDBgB1AAAACbEAArgBVbA1KwD//wA3/+8E2wX4ACcBuf/1AXUDBgB1AAAACbEAAbgBdbA1KwAAAQBs/9wEnQSTACcAM0AwFAEAAQFMBgQDAwEBAl8FAQICGk0HAQAAIQBOAQAkIh4bFxUTEQ0KBgQAJwEnCAgWKwUiJicBIyImNTQ2MyEyFhUUBiMjAQEjIiY1NDYzITIWFRQGIyMBBgYCmhsdCP6qaBgYGRkBVBkZGBmDAS8BE3gZGRoZATAZGRgZVv7EDBkkHxkEKRoQERsaERAb/DoDxhsQERoaERAb+9cbHQAAAAABADP/7wSxBJMANQA6QDczGxQDBwMBTAADAAcAAweABgQCAwAAAV8FAQEBGk0JCAIHByEHTgAAADUANSMkNCMkJDQkCggeKwUiJicDIyImNTQ2MyEyFhUUBiMjExM2NjMyFxMTIyImNTQ2MyEyFhUUBiMjAwYGIyImJwMDBgGTEh8DplQZGRgZAS4ZGBkacoqxBRoOIgmpemsZGRgZARcZGRkaRqQEHRMQHgequwwRGxkEGhwQEBoaEBAc/IoCixISJP1yA3kcEBAaGhAQHPveFhYbGQKa/V4sAAD//wAz/+8EsQaNACcBs//DAXQDBgCDAAAACbEAAbgBdLA1KwD//wAz/+8EsQabACcBtf+2AXMDBgCDAAAACbEAAbgBc7A1KwD//wAz/+8EsQXCACcBsP+3AUsDBgCDAAAACbEAArgBS7A1KwD//wAz/+8EsQZ0ACcBsgGiAXcDBgCDAAAACbEAAbgBd7A1KwAAAQBmAAAEcwSTAEMASUBGOyoZCAQBAgFMBwUEAwICA18GAQMDGk0LCggDAQEAXwkMAgAAGwBOAQA+PDo4NDEtKyknIyAcGhgWEg8LCQcFAEMBQg0IFiszIiY1NDYzMwEBIyImNTQ2MyEyFhUUBiMjAQEjIiY1NDYzITIWFRQGIyMBATMyFhUUBiMhIiY1NDYzMwEBMzIWFRQGI44ZDw4ZVQFc/rdSGQ4PGQFQGQ8OGZQBEwEVZRkODxkBIRkPDhlJ/rABVUkZDg8a/rQZGRgZnP7f/t6VGQ4PGRkQDxoCAgHpGhARGxsREBr+ZwGZGhARGxsREBr+EP4FGQ8QGhkQDxoBrP5UGg8QGQAAAAEAfAAABFwEkwAyAD9APCoZCAMBAgFMBwUEAwICA18GAQMDGk0IAQEBAF8JAQAAGwBOAQAtKyknIyAcGhgWEg8LCQcFADIBMQoIFishIiY1NDYzIREBIyImNTQ2MyEyFhUUBiMjAQEjIiY1NDYzITIWFRQGIyMBETMyFhUUBiMBThkbGRkBBf6xVBkZGhkBShoZGRmIARQBDG8ZGRoZAQUaGRgZN/696BgYGRkcEBAaAdMCHhgODhgYDg4Y/jIBzhgODhgZDg4X/d3+MhoQEBwAAAD//wB8AAAEXAaNACcBs/+9AXQDBgCJAAAACbEAAbgBdLA1KwD//wB8AAAEXAabACcBtf+wAXMDBgCJAAAACbEAAbgBc7A1KwD//wB8AAAEXAXCACcBsP+xAUsDBgCJAAAACbEAArgBS7A1KwD//wB8AAAEXAZ0ACcBsgGcAXcDBgCJAAAACbEAAbgBd7A1KwAAAQDbAAAEFQSTACYAdkAKFwEBAxwBBAUCTEuwCVBYQCQAAgEFAQJyAAUEAQUEfgABAQNfAAMDGk0ABAQAYAYBAAAbAE4bQCUAAgEFAQIFgAAFBAEFBH4AAQEDXwADAxpNAAQEAGAGAQAAGwBOWUATAQAgHhsaFRINCwgHACYBJQcIFishIiY1NDY3ASEDBgYjIiY1ETY2MyEyFhUUBwEhETY2MzIWFRMWBiMBDx0XFgYCef3+EAEbERMgAR0mAnYYGQr9kgI9AiAREBkKAR4WEg0RJQoD3v7gFBQZGAE2FSIiFRMQ/B0BKhgbGBr+tBkcAAAA//8A2wAABBUGjQAnAbP/yQF0AwYAjgAAAAmxAAG4AXSwNSsA//8A2wAABBUGmwAnAbb/vAFzAwYAjgAAAAmxAAG4AXOwNSsA//8A2wAABBUFwgAnAaD/9AKVAwYAjgAAAAmxAAG4ApWwNSsAAAQAQAAABIsGcgAVACwAUQBaALJAEwsFAgABQQEEBUcBAwsDTA4BAUpLsAlQWEA0AAEAAYUAAAUAhQAIBAsECHIACwMDC3ANBwIEBAVhCQEFBRpNDAoCAwMCYg8GDgMCAhsCThtANgABAAGFAAAFAIUACAQLBAgLgAALAwQLA34NBwIEBAVhCQEFBRpNDAoCAwMCYg8GDgMCAhsCTllAJS4tFxZaWVNSS0lGRT88ODYzMi1RLlAnJCAeHRsWLBcrJhAQCBgrASInAyY1NDYzMhcXNzYzMhYVFAcDBgEiJjU0NjMzESMiJjU0NjMzMhIREAIjISI1NDcBIxUUBiMiNTU2NjMhMhYVFAYHASE1NjYzMhYVERYGIyUyNjY1NCYmIwO5GAekBxgNEQaOcQYRDhcHhgf8oRkaGRkZFRgYGRlu3cbL2gH/IwsBQ9wcESkBEyYBLBoQAgH+wgEDAhsREB4BHhb8lIOJMjaJfwUdCwEbBwoMEgnR0QkSDAoH/uUL+uMbEBAbA+caEBEb/ur+0v7D/u4nFSMD3uQUFDH6FSIoFAoRA/wd5BgZFhr++hkcVnHhp57dcwAABABAAAAEnAT8ABUALAA1AFwBq0AbBQEFAQsBAARFAQkLUgEDDVk4AgIDBUwOAQFKS7ALUFhAPwABBQGFAAAECwQAC4AACgkNCQpyAA0DAw1wBwEEBAVhAAUFGk0ACQkLXwALCx1NDAYCAwMCYg8IDgMCAhsCThtLsAxQWEBBAAEFAYUAAAQLBAALgAAKCQ0JCg2AAA0DCQ0DfgcBBAQFYQAFBRpNAAkJC18ACwsdTQwGAgMDAmIPCA4DAgIbAk4bS7ANUFhAQAABBQGFAAAECwQAC4AACgkNCQpyAA0DCQ0DfgcBBAQFYQAFBRpNAAkJC18ACwsdTQwGAgMDAmIPCA4DAgIbAk4bS7AnUFhAQQABBQGFAAAECwQAC4AACgkNCQoNgAANAwkNA34HAQQEBWEABQUaTQAJCQtfAAsLHU0MBgIDAwJiDwgOAwICGwJOG0A/AAEFAYUAAAQLBAALgAAKCQ0JCg2AAA0DCQ0DfgALAAkKCwloBwEEBAVhAAUFGk0MBgIDAwJiDwgOAwICGwJOWVlZWUAlNzYXFlZUUVBKR0JAPTw2XDdbNTQuLSckIB4dGxYsFysmEBAIGCsBIicDJjU0NjMyFxc3NjMyFhUUBwMGASImNTQ2MzMRIyImNTQ2MzMyEhEQAiM3MjY2NTQmJiMBIjU0NjcBIwcGBiMiJjU1NDYzITIWFRQGBwEzNzY2MzIWFRUUBiMDvRgHuAcYDREGoqMGEQ4XB7gH/J0ZGhkZGRUYGBkZbt3Gy9oHg4kyNol/Ajs4DQQBC8sIARkQEB0cEgEzIxoNBf7wzQsBGxAQGSESA6cLARsHCgwSCdHRCRIMCgf+5Qv8WRsQEBsD5xoQERv+6v7S/sP+7lZx4aee3XP7wzsRGAkCR50WFxkZuhIcHBENFgr9qLESFBQW0RMbAAAAAgAG//ME+gSTACUATADIS7AnUFhADkIBAQxBAQcBSQEAAgNMG0AOQgEBDEEBBwFJAQYCA0xZS7AnUFhAOQAMAwEDDAGAAAEHAwEHfgoIBQMDAwRfCQEEBBpNCwEHBwBiDgYNAwAAIU0AAgIAYQ4GDQMAACEAThtANQAMAwEDDAGAAAEHAwEHfgoIBQMDAwRfCQEEBBpNCwEHBwZgDgEGBhtNAAICAGENAQAAIQBOWUAlJyYBAEZEPz49Ozc0MC4tKyZMJ0shHxsYFBIODAgGACUBJQ8IFisFIiY1NTQ2MzIWFRUUMzI2NjURISImNTQ2MyEyFhUUBiMjERQGBiUiJjU0NjMzESMiJjU0NjMhMhYVFAYjIxEhMjcTNjYzMhYVEQYGIwN6Y3IfEhIdfkJEGf7oGBgYGQG9GRkYGUc0c/xlGRoZGScvGRgZGQElGhkZGZgBFQcBBwMeERQfBCQgDWJWcBYXFhdxZjSBcwLRGhARGxoREBv9MpOmQw0bEBAbA+caEBEbGxEQGvwZDQEiFhUZGP7DHCYAAwA+/ssEXASTACcAMwBLALq1IwEBBgFMS7AbUFhAPwAGCwELBgGAAAoPAQkKCWYEAQICA2EIAQMDGk0OAQcHA2EIAQMDGk0ACwsMXwAMDB1NBQEBAQBfDQEAABsAThtAPQAGCwELBgGAAAwACwYMC2cACg8BCQoJZgQBAgIDYQgBAwMaTQ4BBwcDYQgBAwMaTQUBAQEAXw0BAAAbAE5ZQCk1NCkoAQBHREA+Ozk0SzVLLy0oMykzIR8ZGBcVEQ4KCAcFACcBJhAIFiszIiY1NDYzMxEjIiY1NDYzITIWFRQGIyMRITI2NxM2NjMyFhUDBgYjASImNTQ2MzIWFRQGASImNTQ2MzI2NREhIiY1NDYzITIVERQGcRkaGRmRZxkYGRkBNRoZGRlwASQRFgIiAx4RFB8eAiYgAS8iMTEiIy8v/rcZGh0dg5r+9hYWFRMBSiTMGxAQGwPnGhARGxsREBr8GQ4XARQWFRkY/rkcJgPuMCIjMDAjIjD63RwQERxodALcGxAPGB385Y2eAAAAAAEAHv/wBPoEkwBMAbu2IAQCCQMBTEuwCVBYQDIACQMAAwkAgAsHBQMDAwRfBgEEBBpNAgEAAAFhDQwIAwEBG00ACgoBYQ0MCAMBARsBThtLsA5QWEA0AAkDAAMJAIALBwUDAwMEXwYBBAQaTQIBAAABYQgBAQEbTQAKCgFhCAEBARtNDQEMDCEMThtLsBFQWEAyAAkDAAMJAIALBwUDAwMEXwYBBAQaTQIBAAABYQ0MCAMBARtNAAoKAWENDAgDAQEbAU4bS7AYUFhANAAJAwADCQCACwcFAwMDBF8GAQQEGk0CAQAAAWEIAQEBG00ACgoBYQgBAQEbTQ0BDAwhDE4bS7AbUFhAMgAJAwADCQCACwcFAwMDBF8GAQQEGk0CAQAAAWENDAgDAQEbTQAKCgFhDQwIAwEBGwFOG0uwJVBYQDQACQMAAwkAgAsHBQMDAwRfBgEEBBpNAgEAAAFhCAEBARtNAAoKAWEIAQEBG00NAQwMIQxOG0AuAAkDAAMJAIALBwUDAwMEXwYBBAQaTQIBAAABXwABARtNAAoKCGENDAIICCEITllZWVlZWUAYAAAATABMSUhEQj07JCQ0IzQhJDQlDggfKwUiJicBETMyFhUUBiMjIiY1NDYzMxEjIiY1NDYzMzIXAREjIiY1NDYzITIWFRQGIyMRFAYGIyImNTU0NjMyFhUVFBYzMjY2NREhERQGAnYQIQf+qUQZGBkZxhkZGBkkOBkYGRm2IAgBGU8ZGBoZAs4ZGRgZRzpdNDhsHxISHToXGioa/oUdEBMTBBL8LhsQEBsbEBAbA+caEBEbGPyfAyMaEBEbGhEQG/z2gYs1X2Q0FhcWFzVGKiJmZAMN+/IgHwAAAAADAB7+ywRwBJMAMwA/AFcBz0AKBAEJAyABAA0CTEuwCVBYQDsADBEBCwwLZQcFAgMDBF8KBgIEBBpNEAEJCQRfCgYCBAQaTQANDQ5fAA4OHU0CAQAAAWEPCAIBARsBThtLsA5QWEA/AAwRAQsMC2UHBQIDAwRfCgYCBAQaTRABCQkEXwoGAgQEGk0ADQ0OXwAODh1NAgEAAAFfAAEBG00PAQgIIQhOG0uwEVBYQDsADBEBCwwLZQcFAgMDBF8KBgIEBBpNEAEJCQRfCgYCBAQaTQANDQ5fAA4OHU0CAQAAAWEPCAIBARsBThtLsBhQWEA/AAwRAQsMC2UHBQIDAwRfCgYCBAQaTRABCQkEXwoGAgQEGk0ADQ0OXwAODh1NAgEAAAFfAAEBG00PAQgIIQhOG0uwG1BYQDsADBEBCwwLZQcFAgMDBF8KBgIEBBpNEAEJCQRfCgYCBAQaTQANDQ5fAA4OHU0CAQAAAWEPCAIBARsBThtAPQAOAA0ADg1nAAwRAQsMC2UHBQIDAwRfCgYCBAQaTRABCQkEXwoGAgQEGk0CAQAAAV8AAQEbTQ8BCAghCE5ZWVlZWUAlQUA1NAAAU1BMSkdFQFdBVzs5ND81PwAzADMkNCM0ISQ0JRIIHisFIiYnAREzMhYVFAYjIyImNTQ2MzMRIyImNTQ2MzMyFwERIyImNTQ2MzMyFhUUBiMjERQGASImNTQ2MzIWFRQGASImNTQ2MzI2NREjIiY1NDYzMzIVERQGArIQIQf+i0QZGBkZ5BkZGBlCVhkYGRnUIAgBN08ZGBoZ4xkZGBg4HQFWIjExIiMvL/6tGRodHYOauhYWFRP6JMwQExMEEvwuGxAQGxsQEBsD5xoQERsY/J8DIxoQERsbERAa+/IgHwP+MCIjMDAjIjD63RwQERxodALcGxAPGB385Y2eAAAAAAMAQAAABIsEkwAWADsARACTQAorAQIDMQEBCQJMS7AJUFhAKgAGAgkCBnIACQEBCXALBQICAgNhBwEDAxpNCggCAQEAYg0EDAMAABsAThtALAAGAgkCBgmAAAkBAgkBfgsFAgICA2EHAQMDGk0KCAIBAQBiDQQMAwAAGwBOWUAjGBcBAERDPTw1MzAvKSYiIB0cFzsYOhEOCggHBQAWARUOCBYrMyImNTQ2MzMRIyImNTQ2MzMyEhEQAiMhIjU0NwEjFRQGIyI1NTY2MyEyFhUUBgcBITU2NjMyFhURFgYjJTI2NjU0JiYjcxkaGRkZFRgYGRlu3cbL2gH/IwsBQ9wcESkBEyYBLBoQAgH+wgEDAhsREB4BHhb8lIOJMjaJfxsQEBsD5xoQERv+6v7S/sP+7icVIwPe5BQUMfoVIigUChED/B3kGBkWGv76GRxWceGnnt1zAAAAAwBAAAAEiQSTABYAHwBGAVxADy8BBwk8AQELQyICAAEDTEuwC1BYQDIACAcLBwhyAAsBAQtwBQECAgNhAAMDGk0ABwcJXwAJCR1NCgQCAQEAYg0GDAMAABsAThtLsAxQWEA0AAgHCwcIC4AACwEHCwF+BQECAgNhAAMDGk0ABwcJXwAJCR1NCgQCAQEAYg0GDAMAABsAThtLsA1QWEAzAAgHCwcIcgALAQcLAX4FAQICA2EAAwMaTQAHBwlfAAkJHU0KBAIBAQBiDQYMAwAAGwBOG0uwJ1BYQDQACAcLBwgLgAALAQcLAX4FAQICA2EAAwMaTQAHBwlfAAkJHU0KBAIBAQBiDQYMAwAAGwBOG0AyAAgHCwcIC4AACwEHCwF+AAkABwgJB2cFAQICA2EAAwMaTQoEAgEBAGINBgwDAAAbAE5ZWVlZQCMhIAEAQD47OjQxLConJiBGIUUfHhgXEQ4KCAcFABYBFQ4IFiszIiY1NDYzMxEjIiY1NDYzMzISERACIzcyNjY1NCYmIwEiNTQ2NwEjBwYGIyImNTU0NjMhMhYVFAYHATM3NjYzMhYVFRQGI3MZGhkZGRUYGBkZbt3Gy9oHg4kyNol/Ajs4DQQBC8sIARkQEB0cEgEzIxoNBf7wzQsBGxAQGSESGxAQGwPnGhARG/7q/tL+w/7uVnHhp57dc/vDOxEYCQJHnRYXGRm6EhwcEQ0WCv2osRIUFBbRExsAAAAAAgD9//AEZAMtADEAPACYQA8OAQMCNjUCBgEvAQUGA0xLsCdQWEAvAAMCAQIDAYAAAQYCAQZ+AAYFAgYFfgACAgRhAAQEI00KCAIFBQBhBwkCAAAhAE4bQC0AAwIBAgMBgAABBgIBBn4ABgUCBgV+AAQAAgMEAmkKCAIFBQBhBwkCAAAhAE5ZQB0zMgEAMjwzPC0rJSMgHhgWEhANCwgHADEBMQsIFisFIiY1ND4CNzU0JiMiBwYGIyImNTQ2MzIWFhURFBYzMjY3NjMyFhUUBwYGIyImJwYGJzI2NzUOAhUUFgHrcX1jo8dkVHd5ZAQaJB8dwZt3gTIhExw6DwsNDxYKH1MuKk4NLq5jWak2kNBwWBB8ZlxkLRAHFG2ELUZVKh5cdlmlc/7IJxUhEAwaEA8KISgqTjRNUUM51A4dR01QQQD//wD9//AEZAUXACYBswz+AwYAmgAAAAmxAAG4//6wNSsAAAD//wD9//AEZASCACYBtwIGAwYAmgAAAAixAAGwBrA1K///AP3/8ARkBSUAJgG1//0DBgCaAAAACbEAAbj//bA1KwAAAP//APb/8ARkBSsAJgGrykYDBgCaAAAACLEAArBGsDUr//8A/f/wBGQETAAmAbD21QMGAJoAAAAJsQACuP/VsDUrAAAA//8A/f/wBGQE/gAnAbIB6gABAwYAmgAAAAixAAGwAbA1KwAA//8A/f/wBGQEggAmAawcBgMGAJoAAAAIsQABsAawNSv//wD9//AEZAQmACYBuv7HAwYAmgAAAAmxAAG4/8ewNSsAAAD//wD9/lMEZAMtACcBvAER/+oDBgCaAAAACbEAAbj/6rA1KwD//wD9//AEZAUkACYBuP/fAwYAmgAAAAmxAAK4/9+wNSsAAAD//wD9//AEZASCACYBuSb/AwYAmgAAAAmxAAG4//+wNSsAAAAAAwB3/+8EYgMtADkAQwBQAVBLsCVQWEAPHBACAwJHAQgGNwEHCANMG0APHBACAwJHAQgNNwEHCANMWUuwJVBYQDUAAwIBAgMBgAAIBgcGCAeACgEBDQEGCAEGaQsBAgIEYQUBBAQjTQ8MAgcHAGEJDgIAACEAThtLsCdQWEA6AAMCAQIDAYAACA0HDQgHgAAGDQEGVwoBAQANCAENaQsBAgIEYQUBBAQjTQ8MAgcHAGEJDgIAACEAThtLsCpQWEA4AAMCAQIDAYAACA0HDQgHgAUBBAsBAgMEAmkABg0BBlcKAQEADQgBDWkPDAIHBwBhCQ4CAAAhAE4bQDkAAwIKAgMKgAAIDQcNCAeABQEECwECAwQCaQAKAAYNCgZnAAEADQgBDWkPDAIHBwBhCQ4CAAAhAE5ZWVlAJ0VEAQBLSkRQRVBAPjs6NTMuLCgmJSMgHhoYFBIODAgHADkBORAIFisFIiYmNTQ2Njc1NCYmIyIGBwYGIyImNTQ2MzIWFzY2MzIWFRQjBRIzMjY2NzYzMhUUBwYGIyImJwYGEyUuAiMiDgIBMjY3JiYnDgIVFBYBTzZjP3TNhBhIRzpTEQQYIhwchJFWdw0igFNkj0j+fwvaIy0wJBQSJBA3gC9VgCMooOYBdwMZQ0REUioR/stJkCINEAGMn0BSETZjQ3NnHwclRGo9FghGZCoeXHZcT1BboaRQDv6zDCQlESQXEz8nUkBGTAHeDTF4WDZUXf5IQkMqZDgIHUtMQU4AAAACAGf/7wQYBJwAJQA0AIJADQ4BBAIyMRsDBAUGAkxLsCdQWEAlAAIDBAMCBIAAAwMgTQAGBgRhAAQEI00IAQUFAGEBBwIAACEAThtAJwACAwQDAgSAAAQABgUEBmkAAwMgTQABARtNCAEFBQBhBwEAACEATllAGScmAQAvLSY0JzQfHRkYCwoHBQAlASUJCBYrBSImJxQGIyImNREHBgYjIiY1NDY3NzY2MzIVETY2MzIWFhUUBgYnMjY2NTQmJiMiBgcRFhYCol+VMCATEBmABQoFEhUPEr0GCgQpOINhdapbWad4XX0+QIBgX4gvLI0RRjFMHhwyA/kIAQIXDwwZBBMBASf+TjA6bLx3ebtrUlyYWVmXXUY7/ng+UwAAAP//AGf/7wQYBbsAJwGg/7wCjgMGAKcAAAAJsQABuAKOsDUrAAABALf/7wPTAy0AJQBpS7AnUFhAJQACAwUDAgWAAAUEAwUEfgADAwFhAAEBI00ABAQAYQYBAAAhAE4bQCMAAgMFAwIFgAAFBAMFBH4AAQADAgEDaQAEBABhBgEAACEATllAEwEAHx0aGBQSDgwIBgAlASUHCBYrBSImNTQ2NjMyFhUUBiMiJicmJiMiBhUUFjMyNjc2MzIVFAcOAgJ4yPl7zXyVwx0fJBMLNWQyr8TBmF98OxEYIxIlc3wR4ceAtmByhyIub1saE6yYrqg0NxApFhQoNhwAAP//ALf/7wPTBRcAJgGzlv4DBgCpAAAACbEAAbj//rA1KwAAAP//ALf/7wPTBSUAJgG2iv0DBgCpAAAACbEAAbj//bA1KwAAAP//ALf+awPTAy0AJwG7AaT//AMGAKkAAAAJsQABuP/8sDUrAP//ALf/7wPTBSUAJgG1iv0DBgCpAAAACbEAAbj//bA1KwAAAP//ALf/7wPTBEwAJwGg/8IBHwMGAKkAAAAJsQABuAEfsDUrAAACAMH/7wR5BJ4AJQA0AKhAEiopIwsEAgUYAQQCAkwNDAIBSkuwJVBYQCAAAgUEBQIEgAAFBQFhAAEBI00HAQQEAGEDBgIAACEAThtLsCdQWEAkAAIFBAUCBIAABQUBYQABASNNAAMDG00HAQQEAGEGAQAAIQBOG0AiAAIFBAUCBIAAAQAFAgEFaQADAxtNBwEEBABhBgEAACEATllZQBcnJgEALiwmNCc0ISAaGQkHACUBJQgIFisFIiYmNTQ2NjMyFhcRBwYmNTQ2Nzc2FhURNzIWFRQGBwciJycGBicyNjcRJiYjIgYGFRQWFgI7dapbXKl1YYQ3lBIVERfGGRSaFRMTE8ErAwQsml1liisviF9fgUBBfhFru3l3vGw6MAGACwEYDwwbAhUCGBH74AsVDg4cAhQyPDVHUlM+AYg7Rl2XWVmYXAD//wDB/+8E/ASmAiYArwAAAQcBpAIk/6YACbECAbj/prA1KwAAAgDB/+8EeQSeADMAQgDOQBI4NzELBAYJJgEIBgJMFBMCA0pLsCVQWEAqAAYJCAkGCIAEAQMFAQIBAwJpAAkJAWEAAQEjTQsBCAgAYQcKAgAAIQBOG0uwJ1BYQC4ABgkICQYIgAQBAwUBAgEDAmkACQkBYQABASNNAAcHG00LAQgIAGEKAQAAIQBOG0AsAAYJCAkGCIAEAQMFAQIBAwJpAAEACQYBCWkABwcbTQsBCAgAYQoBAAAhAE5ZWUAfNTQBADw6NEI1Qi8uKCclIyEfEhAODAkHADMBMwwIFisFIiYmNTQ2NjMyFhc1IyI1NDMzNQcGJjU0Njc3NhYVFTMyFRQjIxE3MhYVFAYHByInJwYGJzI2NxEmJiMiBgYVFBYWAjt1qltcqXVhhDfCMzLDlBIVERfGGRRGMS9ImhUTExPBKwMELJpdZYorL4hfX4FAQX4Ra7t5d7xsOjDIJSNwCwEYDwwbAhUCGBGiIyX8ygsVDg4cAhQyPDVHUlM+AYg7Rl2XWVmYXP//AMH/7wR5BbsAJwGgABoCjgMGAK8AAAAJsQABuAKOsDUrAAADAD//8ASJBJwAKwBSAF8EdUuwCVBYQB4PAQECOwoCBw1XAQgHVkgpAwQLHAEMBE8uAgAMBkwbS7AOUFhAHg8BAQI7CgIHDVcBCAdWSCkDBAscAQwETy4CBgwGTBtLsBFQWEAeDwEBAjsKAgcNVwEIB1ZIKQMECxwBDARPLgIADAZMG0uwGFBYQB4PAQECOwoCBw1XAQgHVkgpAwQLHAEMBE8uAgYMBkwbS7AbUFhAHg8BAQI7CgIHDVcBCAdWSCkDBAscAQwETy4CAAwGTBtLsCdQWEAeDwEBAjsKAgcNVwEIB1ZIKQMECxwBDARPLgIGDAZMG0AeDwEBAjsKAgcNVwEIB1ZIKQMECxwBDARPLgIFDAZMWVlZWVlZS7AJUFhATQACAwEDAgGAAAgHCwcIcgALBAQLcAADAyBNAA0NAWEAAQEjTQAHBwlfAAkJHU0KAQQEAGIPBgUOBAAAIU0QAQwMAGEPBgUOBAAAIQBOG0uwC1BYQEgAAgMBAwIBgAAIBwsHCHIACwQEC3AAAwMgTQANDQFhAAEBI00ABwcJXwAJCR1NCgEEBAZgDwEGBhtNEAEMDABhBQ4CAAAhAE4bS7AMUFhASgACAwEDAgGAAAgHCwcIC4AACwQHCwR+AAMDIE0ADQ0BYQABASNNAAcHCV8ACQkdTQoBBAQGYA8BBgYbTRABDAwAYQUOAgAAIQBOG0uwDVBYQEkAAgMBAwIBgAAIBwsHCHIACwQHCwR+AAMDIE0ADQ0BYQABASNNAAcHCV8ACQkdTQoBBAQGYA8BBgYbTRABDAwAYQUOAgAAIQBOG0uwDlBYQEoAAgMBAwIBgAAIBwsHCAuAAAsEBwsEfgADAyBNAA0NAWEAAQEjTQAHBwlfAAkJHU0KAQQEBmAPAQYGG00QAQwMAGEFDgIAACEAThtLsBFQWEBPAAIDAQMCAYAACAcLBwgLgAALBAcLBH4AAwMgTQANDQFhAAEBI00ABwcJXwAJCR1NCgEEBABiDwYFDgQAACFNEAEMDABhDwYFDgQAACEAThtLsBhQWEBKAAIDAQMCAYAACAcLBwgLgAALBAcLBH4AAwMgTQANDQFhAAEBI00ABwcJXwAJCR1NCgEEBAZgDwEGBhtNEAEMDABhBQ4CAAAhAE4bS7AbUFhATwACAwEDAgGAAAgHCwcIC4AACwQHCwR+AAMDIE0ADQ0BYQABASNNAAcHCV8ACQkdTQoBBAQAYg8GBQ4EAAAhTRABDAwAYQ8GBQ4EAAAhAE4bS7AnUFhASgACAwEDAgGAAAgHCwcIC4AACwQHCwR+AAMDIE0ADQ0BYQABASNNAAcHCV8ACQkdTQoBBAQGYA8BBgYbTRABDAwAYQUOAgAAIQBOG0BGAAIDAQMCAYAACAcLBwgLgAALBAcLBH4AAQANBwENaQAJAAcICQdnAAMDIE0KAQQEBWIPBgIFBRtNEAEMDABhDgEAACEATllZWVlZWVlZWUArVFMtLAEAW1lTX1RfTEpHRkA9ODYzMixSLVEnJR8dGhkMCwgGACsBKxEIFisFIiYmNTQ2MzIWFxEHBgYjIiY1NDY3NzY2MzIVETczMhYVFAYHByMiJycGBiUiNTQ2NwEjBwYGIyImNTU0NjMhMhYVFAYHATM3NjYzMhYVFRQGIyUyNjcRJiYjIgYVFBYBNkJxRIdlLGIsgAUKBRIVDxK9BgoEKTgGFRMTE14HLAMDKGEBwTgNBAELywgBGRAQHRwSATMjGg0F/vDNCwEbEBAZIRL86CpaIy5bJ0hOWhBpu3q+4TAzAXkIAQIXDwwZBBMBASf74AYVDg4aBA8yPEA7EDsRGAkCR50WFxkZuhIcHBENFgr9qLESFBQW0RMbPElNAZk7ObKfn7MAAAQAP//wBJwE/AAVAEEAaAB1BS5LsAlQWEAnBQEFASULAgAEUSACCQ9tAQoJbF4/AwYNMgEOBmVEAgIOB0wOAQFKG0uwDlBYQCcFAQUBJQsCAARRIAIJD20BCglsXj8DBg0yAQ4GZUQCCA4HTA4BAUobS7ARUFhAJwUBBQElCwIABFEgAgkPbQEKCWxePwMGDTIBDgZlRAICDgdMDgEBShtLsBhQWEAnBQEFASULAgAEUSACCQ9tAQoJbF4/AwYNMgEOBmVEAggOB0wOAQFKG0uwG1BYQCcFAQUBJQsCAARRIAIJD20BCglsXj8DBg0yAQ4GZUQCAg4HTA4BAUobS7AnUFhAJwUBBQElCwIABFEgAgkPbQEKCWxePwMGDTIBDgZlRAIIDgdMDgEBShtAJwUBBQElCwIABFEgAgkPbQEKCWxePwMGDTIBDgZlRAIHDgdMDgEBSllZWVlZWUuwCVBYQFkAAQUBhQAEBQAFBACAAAADBQADfgAKCQ0JCnIADQYGDXAABQUgTQAPDwNhAAMDI00ACQkLXwALCx1NDAEGBgJiEQgHEAQCAiFNEgEODgJhEQgHEAQCAiECThtLsAtQWEBUAAEFAYUABAUABQQAgAAAAwUAA34ACgkNCQpyAA0GBg1wAAUFIE0ADw8DYQADAyNNAAkJC18ACwsdTQwBBgYIYBEBCAgbTRIBDg4CYQcQAgICIQJOG0uwDFBYQFYAAQUBhQAEBQAFBACAAAADBQADfgAKCQ0JCg2AAA0GCQ0GfgAFBSBNAA8PA2EAAwMjTQAJCQtfAAsLHU0MAQYGCGARAQgIG00SAQ4OAmEHEAICAiECThtLsA1QWEBVAAEFAYUABAUABQQAgAAAAwUAA34ACgkNCQpyAA0GCQ0GfgAFBSBNAA8PA2EAAwMjTQAJCQtfAAsLHU0MAQYGCGARAQgIG00SAQ4OAmEHEAICAiECThtLsA5QWEBWAAEFAYUABAUABQQAgAAAAwUAA34ACgkNCQoNgAANBgkNBn4ABQUgTQAPDwNhAAMDI00ACQkLXwALCx1NDAEGBghgEQEICBtNEgEODgJhBxACAgIhAk4bS7ARUFhAWwABBQGFAAQFAAUEAIAAAAMFAAN+AAoJDQkKDYAADQYJDQZ+AAUFIE0ADw8DYQADAyNNAAkJC18ACwsdTQwBBgYCYhEIBxAEAgIhTRIBDg4CYREIBxAEAgIhAk4bS7AYUFhAVgABBQGFAAQFAAUEAIAAAAMFAAN+AAoJDQkKDYAADQYJDQZ+AAUFIE0ADw8DYQADAyNNAAkJC18ACwsdTQwBBgYIYBEBCAgbTRIBDg4CYQcQAgICIQJOG0uwG1BYQFsAAQUBhQAEBQAFBACAAAADBQADfgAKCQ0JCg2AAA0GCQ0GfgAFBSBNAA8PA2EAAwMjTQAJCQtfAAsLHU0MAQYGAmIRCAcQBAICIU0SAQ4OAmERCAcQBAICIQJOG0uwJ1BYQFYAAQUBhQAEBQAFBACAAAADBQADfgAKCQ0JCg2AAA0GCQ0GfgAFBSBNAA8PA2EAAwMjTQAJCQtfAAsLHU0MAQYGCGARAQgIG00SAQ4OAmEHEAICAiECThtAUgABBQGFAAQFAAUEAIAAAAMFAAN+AAoJDQkKDYAADQYJDQZ+AAMADwkDD2kACwAJCgsJaAAFBSBNDAEGBgdiEQgCBwcbTRIBDg4CYRABAgIhAk5ZWVlZWVlZWVlALWppQ0IXFnFvaXVqdWJgXVxWU05MSUhCaENnPTs1MzAvIiEeHBZBF0EmEBMIGCsBIicDJjU0NjMyFxc3NjMyFhUUBwMGASImJjU0NjMyFhcRBwYGIyImNTQ2Nzc2NjMyFRE3MzIWFRQGBwcjIicnBgYlIjU0NjcBIwcGBiMiJjU1NDYzITIWFRQGBwEzNzY2MzIWFRUUBiMlMjY3ESYmIyIGFRQWA70YB7gHGA0RBqKjBhEOFwe4B/1gQnFEh2UsYiyABQoFEhUPEr0GCgQpOAYVExMTXgcsAwMoYQHBOA0EAQvLCAEZEBAdHBIBMyMaDQX+8M0LARsQEBkhEvzoKlojLlsnSE5aA6cLARsHCgwSCdHRCRIMCgf+5Qv8SWm7er7hMDMBeQgBAhcPDBkEEwEBJ/vgBhUODhoEDzI8QDsQOxEYCQJHnRYXGRm6EhwcEQ0WCv2osRIUFBbRExs8SU0BmTs5sp+fswACANT/7wPyBQgAMQA+AGpADywmIxYQDQYBAgoBAwQCTEuwJ1BYQBwAAgEChQAEBAFhAAEBI00GAQMDAGEFAQAAIQBOG0AaAAIBAoUAAQAEAwEEagYBAwMAYQUBAAAhAE5ZQBUzMgEAOjgyPjM+Hx0HBQAxATEHCBYrBSImNTQ2MzIWFhcmJicHBiMiJjU0NzcmJicmNTQ2MzIXFhYXNzYzMhYVFAcHFhIVFAInMjY1NCYmIyIGFRQWAlqx1dK5Lm9tLCimUokKCxAZEHcwSAsGHhAFBCxNIosJCREbDnq1fsfRlaNWi1GRm6cR4Lu76B5TUJLfTF4HHBASDFMoMAkFCBEoAxw4HWEGIBERClOo/rSj1v8AUrGVcZdMsqKdqQACANT/7wP3Ay0AHwAoAG1LsCdQWEAmAAQCAwIEA4AABQACBAUCZwAGBgFhAAEBI00AAwMAYQcBAAAhAE4bQCQABAIDAgQDgAABAAYFAQZpAAUAAgQFAmcAAwMAYQcBAAAhAE5ZQBUBACclISAXFhMRDw0JBwAfAR8ICBYrBSImJjU0NjYzMhYVFAYjIRYWMzI2NzYzMhYVFAcOAgEhLgMjIgYCmYXNc3nJeJvNKiP9iwXElEmSOhUUEhYSJXR//moCagIUN2tZkrURZb6FgLZgqqQlMqOkNjcRGhIWFCg2HAHiJVtUNor//wDU/+8D9wTuACYBs7/VAwYAtgAAAAmxAAG4/9WwNSsAAAD//wDU/+8D9wSCACYBt7QGAwYAtgAAAAixAAGwBrA1K///ANT/7wP3BSUAJgG2sv0DBgC2AAAACbEAAbj//bA1KwAAAP//ANT/7wP3BPwAJgG1stQDBgC2AAAACbEAAbj/1LA1KwAAAP//ANT/7wP3BSsAJgGr0EYDBgC2AAAACLEAArBGsDUr//8A1P/vA/cETAAmAbCq1QMGALYAAAAJsQACuP/VsDUrAAAA//8A1P/vA/cETAAnAaD/4gEfAwYAtgAAAAmxAAG4AR+wNSsA//8A1P/vA/cE1QAnAbIBnv/YAwYAtgAAAAmxAAG4/9iwNSsA//8A1P/vA/cEggAmAawgBgMGALYAAAAIsQABsAawNSv//wDU/+8D9wQmACYBurLHAwYAtgAAAAmxAAG4/8ewNSsAAAD//wDU/lID9wMtACYBvDPpAwYAtgAAAAmxAAG4/+mwNSsAAAAAAQEZAAAEEgSkADQAsEuwE1BYQCoABQYDBgVyAAYGBGEABAQgTQgBAgIDXwcBAwMdTQkBAQEAXwoBAAAbAE4bS7AnUFhAKwAFBgMGBQOAAAYGBGEABAQgTQgBAgIDXwcBAwMdTQkBAQEAXwoBAAAbAE4bQCkABQYDBgUDgAcBAwgBAgEDAmcABgYEYQAEBCBNCQEBAQBfCgEAABsATllZQBsBAC8tLComJCAfHBoVExAOCggHBQA0ATMLCBYrISImNTQ2MzMRIyImNTQ2MzM1NDYzMhYVFRQGIyImNTUOAhUVITIWFRQGIyERITIWFRQGIwFHFxcVFd3AFxcVFcTmzRciHxISHXSDNAE1FBQVFP7MAWoUExQUGhAPGQJaGhAPGUi1qRsYdRwcGhpdCDx0XUIaDxAZ/aYaDxAZ//8BGQAABBIFwwAnAaAAEgKWAwYAwgAAAAmxAAG4ApawNSsAAAMBFP6iBJEDbQA3AEQAUwDeQBIYAQcDIwEGBw4BBAYHAQkFBExLsBtQWEAyAAIAAwcCA2kLAQYABAUGBGkABwcBYQABASNNAAUFCV8ACQkbTQwBCAgAYQoBAAAfAE4bS7AnUFhAMAACAAMHAgNpCwEGAAQFBgRpAAUACQgFCWcABwcBYQABASNNDAEICABhCgEAAB8AThtALgACAAMHAgNpAAEABwYBB2kLAQYABAUGBGkABQAJCAUJZwwBCAgAYQoBAAAfAE5ZWUAjRkU5OAEATUtFU0ZTQD44RDlEMS4qKCIhHRsWFAA3ATcNCBYrASImJjU0NjcmJjU0NjY3JiY1NDY2MzIWFzc2NjMyFhUUBiMHFhYVFAYjIgYVFBYzMzIWFhUUBgYDMjY2NTQmIyIGFRQWEzI2NjU0JiMjDgIVFBYCSU+MWEYxLTEyRBtOXlqTVkJ9MJgjPRkkFjpLqRseqqZNcDNiXXGdU3i7YD1sRItcXIWAU0eSYm2RuBMoG2v+oiNZT0tpGRY7Lic/KQMgXlhcdzknKGUXEyATFR5KIlAvhXg4KSEwIV9fUmgyAscdTERtWFhlW1r9ixxBOVw/BzdEHVc7//8BFP6iBJEFVwAmAbMkPgMGAMQAAAAIsQABsD6wNSv//wEU/qIEkQTCACYBtxpGAwYAxAAAAAixAAGwRrA1K///ART+ogSRBWUAJgG1Fz0DBgDEAAAACLEAAbA9sDUrAAQBFP6iBJEFawAXAE8AXABrAP5AEjABCQU7AQgJJgEGCB8BCwcETEuwG1BYQDwABAAFCQQFaQ0BCAAGBwgGaQABAQBhAAAAIE0ACQkDYQADAyNNAAcHC18ACwsbTQ4BCgoCYQwBAgIfAk4bS7AnUFhAOgAEAAUJBAVpDQEIAAYHCAZpAAcACwoHC2cAAQEAYQAAACBNAAkJA2EAAwMjTQ4BCgoCYQwBAgIfAk4bQDgABAAFCQQFaQADAAkIAwlpDQEIAAYHCAZpAAcACwoHC2cAAQEAYQAAACBNDgEKCgJhDAECAh8CTllZQCVeXVFQGRhlY11rXmtYVlBcUVxJRkJAOjk1My4sGE8ZTyQZDwgYKwEyFhUUBw4CFTIWFRQGIyImNTQ2Njc2AyImJjU0NjcmJjU0NjY3JiY1NDY2MzIWFzc2NjMyFhUUBiMHFhYVFAYjIgYVFBYzMzIWFhUUBgYDMjY2NTQmIyIGFRQWEzI2NjU0JiMjDgIVFBYC0AsRDBU6LCw+OSMtOTpWKQOAT4xYRjEtMTJEG05eWpNWQn0wmCM9GSQWOkupGx6qpk1wM2JdcZ1TeLtgPWxEi1xchYBTR5JibZG4EygbawVrEAsMCQ8xOx8qMTAlMTw6a1IUAvk3I1lPS2kZFjsuJz8pAyBeWFx3OScoZRcTIBMVHkoiUC+FeDgpITAhX19SaDICxx1MRG1YWGVbWv2LHEE5XD8HN0QdVzsA//8BFP6iBJEEjAAnAaAATwFfAwYAxAAAAAmxAAG4AV+wNSsAAAEAcQAABHUEnAA8AHy1FgEBCAFMS7AnUFhAJwACAwQDAgSAAAMDIE0ACAgEYQAEBCNNCQcFAwEBAF8GCgIAABsAThtAJQACAwQDAgSAAAQACAEECGkAAwMgTQkHBQMBAQBfBgoCAAAbAE5ZQBsBADc1MS8sKiYjHx0aGBQTCQgHBQA8ATsLCBYrMyImNTQ2MzMRBwYmNTQ2Nzc2NjMyFRE2NjMyFhURMzIWFRQGIyEiJjU0NjMzETQmIyIGBhURMzIWFRQGI8QXFxUVbJQSFQ8SvQYKBCkmrmeRiG0UFBUV/qcXFxUVkllbYJBQaRgYGRkbEA8YA/EJARYPDBwBEwEBJ/4KSmSVg/49GQ8QGhsQDxgByllmSmw0/mEZDxAaAAEAcQAABHUEnABKAJi1JAEBDAFMS7AnUFhAMQAEBQMFBAOABgEDBwECCAMCaQAFBSBNAAwMCGEACAgjTQ0LCQMBAQBfCg4CAAAbAE4bQC8ABAUDBQQDgAYBAwcBAggDAmkACAAMAQgMaQAFBSBNDQsJAwEBAF8KDgIAABsATllAIwEARUM/PTo4NDEtKygmIyEfHRsaEA8ODAoIBwUASgFJDwgWKzMiJjU0NjMzESMiNTQzMzUHBiY1NDY3NzY2MzIVFTMyFRQjIxE2NjMyFhURMzIWFRQGIyEiJjU0NjMzETQmIyIGBhURMzIWFRQGI8QXFxUVbHgzMnmUEhUPEr0GCgQpkDEvkiauZ5GIbRQUFRX+pxcXFRWSWVtgkFBpGBgZGRsQDxgDOSUjcAkBFg8MHAETAQEnoiMl/vRKZJWD/j0ZDxAaGxAPGAHKWWZKbDT+YRkPEBr//wBxAAAEdQaUACcBtf/AAWwDBgDKAAAACbEAAbgBbLA1KwAAAgD5AAAEbASTAAsAKwB6tRQBBAUBTEuwJ1BYQCUABAUDBQQDgAcBAAABYQABARpNAAUFI00GAQMDAmAIAQICGwJOG0AnAAUABAAFBIAABAMABAN+BwEAAAFhAAEBGk0GAQMDAmAIAQICGwJOWUAZDQwBACYkIh8ZFRMRDCsNKgcFAAsBCwkIFisBIiY1NDYzMhYVFAYBIiY1NDYzIREFIgYjIiY1NDY3JTYzMhURITIWFRQGIwK0IjExIiMvL/5QFxcVFQF0/rMCAwIUFRAQAY4DCCQBTRQUFRQD7jAiIzAwIyIw/BIbEA8YAn0tARoQDhgCNwEg/UcaDxAZAAAAAAEA/QAABHADKwAfAFe1CAECAwFMS7AnUFhAGgACAwEDAgGAAAMDI00EAQEBAGAFAQAAGwBOG0AXAAMCA4UAAgEChQQBAQEAYAUBAAAbAE5ZQBEBABoYFhMNCQcFAB8BHgYIFishIiY1NDYzIREFIgYjIiY1NDY3JTYzMhURITIWFRQGIwErFxcVFQF0/rMCAwIUFRAQAY4DCCQBTRQUFRQbEA8YAn0tARoQDhgCNwEg/UcaDxAZAP//AP0AAARwBO4AJgGzCNUDBgDOAAAACbEAAbj/1bA1KwAAAP//AP0AAARwBIIAJgG3/gYDBgDOAAAACLEAAbAGsDUr//8A/QAABHAE/AAmAbX71AMGAM4AAAAJsQABuP/UsDUrAAAA//8A/QAABHAFKwAmAatKRgMGAM4AAAAIsQACsEawNSv//wD9AAAEcARMACYBsPzVAwYAzgAAAAmxAAK4/9WwNSsAAAD//wEDAAAEFQYTAiYAMgAAAQcBoAAOAuYACbEBAbgC5rA1KwD//wD9AAAEcATVACcBsgHm/9gDBgDOAAAACbEAAbj/2LA1KwD//wD9AAAEcASCACYBrEoGAwYAzgAAAAixAAGwBrA1K///AP0AAARwBCYAJgG6+scDBgDOAAAACbEAAbj/x7A1KwAAAP//APn+YwRsBJMAJgG8+PoDBgDNAAAACbEAAbj/+rA1KwAAAP//AP0AAARwBIIAJgG5Iv8DBgDOAAAACbEAAbj//7A1KwAAAAADAIv+ygQSBJMACwAXAEMA/EuwE1BYQC0ABQ4BBAUEZQ0CDAMAAAFhAwEBARpNCgEGBgtfAAsLHU0JAQcHCF8ACAgbCE4bS7AWUFhAMA0CDAMAAAFhAwEBARpNCgEGBgtfAAsLHU0JAQcHCF8ACAgbTQAFBQRhDgEEBB8EThtLsBtQWEAtAAUOAQQFBGUNAgwDAAABYQMBAQEaTQoBBgYLXwALCx1NCQEHBwhfAAgIGwhOG0ArAAsKAQYHCwZnAAUOAQQFBGUNAgwDAAABYQMBAQEaTQkBBwcIXwAICBsITllZWUAnGRgNDAEAPjs3NTQyLisnJSQjHx0YQxlDExEMFw0XBwUACwELDwgWKwEiJjU0NjMyFhUUBiEiJjU0NjMyFhUUBgEiJjU0NjMyNjY1ESERMzIWFRQGIyEiJjU0NjMhESMiJjU0NjMhMhURFAYGAhkiMTEiIy8vAX8iMTEiIy8v/mIZGh0dWKZt/pV2FBQVFP39FxcVFQEytBQVEBACxCSD1APuMCIjMDAjIjAwIiMwMCMiMPrcHBARHC1iTQLc/XcaDxAZGxAPGAKJGxAOGR385V6GRwAAAAACASv+ygN/BJMACwAnALBLsBNQWEAeAAMHAQIDAmUGAQAAAWEAAQEaTQAEBAVfAAUFHQROG0uwFlBYQCEGAQAAAWEAAQEaTQAEBAVfAAUFHU0AAwMCYQcBAgIfAk4bS7AbUFhAHgADBwECAwJlBgEAAAFhAAEBGk0ABAQFXwAFBR0EThtAHAAFAAQDBQRnAAMHAQIDAmUGAQAAAWEAAQEaAE5ZWVlAFw0MAQAhHhoYExEMJw0nBwUACwELCAgWKwEiJjU0NjMyFhUUBgEiJjU0NjMyPgI1ESEiJjU0NjMhMhURFA4CAyIiMTEiIy8v/ioZGh0dQpOCUv44FhYVEwIIJF6cugPuMCIjMDAjIjD63BwQERwZNVQ6AtwbEA8YHfzlRm9OKAAAAAEBK/7KA38DLQAbAIRLsBNQWEATAAEEAQABAGUAAgIDXwADAx0CThtLsBZQWEAWAAICA18AAwMdTQABAQBhBAEAAB8AThtLsBtQWEATAAEEAQABAGUAAgIDXwADAx0CThtAGQADAAIBAwJnAAEAAAFZAAEBAGEEAQABAFFZWVlADwEAFRIODAcFABsBGwUIFisBIiY1NDYzMj4CNREhIiY1NDYzITIVERQOAgFvGRodHUKTglL+OBYWFRMCCCRenLr+yhwQERwZNVQ6AtwbEA8YHfzlRm9OKAAAAP//ASv+ygN/BSUAJgG1r/0DBgDcAAAACbEAAbj//bA1KwAAAAABAJYAAARoBJ4AQwCIQA0IAQIDOzopGAQBBAJMS7AnUFhAKAACAwUDAgWAAAMDIE0GAQQEBV8ABQUdTQoJBwMBAQBfCAsCAAAbAE4bQCYAAgMFAwIFgAAFBgEEAQUEaQADAyBNCgkHAwEBAF8ICwIAABsATllAHQEAPjw5NzMwLCooJiIfGxkWEgwJBwUAQwFCDAgWKzMiJjU0NjMzEQcGIyImNTQ2NzcyNjMyFREBIyImNTQ2MyEyFhUUBiMjBQEzMhYVFAYjISImNTQ2MzMBBxUzMhYVFAYjyBYYFRWsqgMEFBUQEOoCBgQkAX9nFRUXFwE9FhMXEVn+wwFVVxQUFBT+xxUVFxdu/tV+RxQTFBQaEA8ZA+gYARoQDhgCKgEg/REBJRkQEBocEg0Y9v6UGg8QGRoPEBkBPlziGg8QGQAAAP//AJb94wRoBJ4AJwGt//X+tQMGAN4AAAAJsQABuP61sDUrAAABAJYAAARoAwcAPgBuQAk2NSQTBAECAUxLsCdQWEAdBgQCAgIDXwUBAwMdTQoJBwMBAQBfCAsCAAAbAE4bQBsFAQMGBAICAQMCaQoJBwMBAQBfCAsCAAAbAE5ZQB0BADk3NDIuKyclIyEdGhYUEQ4KCAcFAD4BPQwIFiszIiY1NDYzMxEjIiY1NDYzMzIVEQEjIiY1NDYzITIWFRQGIyMBATMyFhUUBiMhIiY1NDYzMwEHFTMyFhUUBiPIFhgVFayvGRITFO8kAYNrFRUXFwE9FhMXEV/+ywFTVxQUFBT+xxUVFxdu/tyFRxQTFBQaEA8ZAmIaEA4aJv6VAT8ZEBAaHBINGP79/qEaDxAZGg8QGQExZM0aDxAZAAAAAAEA1AAABEoEngAgADRAMQgBAgMBTAACAwEDAgGAAAMDIE0EAQEBAF8FAQAAGwBOAQAbGRcTDQkHBQAgAR8GCBYrISImNTQ2MyERBSIGIyImNTQ2NyUyNjMyFREhMhYVFAYjAQIXFxUVAXH+nwIDAhQVEBABogIFBCQBVBQTFBQaEA8ZA/AcARoQDhgCJgEg+9QaDxAZAAD//wDUAAAESgaIACcBs//wAW8DBgDhAAAACbEAAbgBb7A1KwD//wDUAAAEUgSmAiYA4QAAAQcBpAF6/6YACbEBAbj/prA1KwD//wDU/eMESgSeACcBrQAV/rUDBgDhAAAACbEAAbj+tbA1KwD//wCqAAAFKwSeACcBVgS4AE4BBgDh1gAACLEAAbBOsDUrAAAAAwBi/ssEOQSeACAALABEAOpLsDFQWLUIAQIDAUwbtQgBAgYBTFlLsBtQWEAzAAIDBQMCBYAACA0BBwgHZQwBBQUDYQYBAwMgTQAJCQpfAAoKHU0EAQEBAF8LAQAAGwBOG0uwMVBYQDEAAgMFAwIFgAAKAAkBCglnAAgNAQcIB2UMAQUFA2EGAQMDIE0EAQEBAF8LAQAAGwBOG0A1AAIGBQYCBYAACgAJAQoJZwAIDQEHCAdlAAMDIE0MAQUFBmEABgYaTQQBAQEAXwsBAAAbAE5ZWUAlLi0iIQEAQD05NzQyLUQuRCgmISwiLBsZFxMNCQcFACABHw4IFiszIiY1NDYzMxEHIgYjIiY1NDY3JTI2MzIVETMyFhUUBiMBIiY1NDYzMhYVFAYBIiY1NDYzMjY1ESEiJjU0NjMhMhURFAaSFxcVFe7qAgMCFBUQEAErAgUEJNwUExQUATAiMTEiIy8v/pwZGh0dg5r+9hYWFRMBSiTMGhAPGQPwHQEaEA4YAicBIPvUGg8QGQPuMCIjMDAjIjD63RwQERxodALcGxAPGB385Y2eAAEA1AAABEoEngA0ADxAORIBAgMsIxELCAUBAgJMAAIDAQMCAYAAAwMgTQQBAQEAXwUBAAAbAE4BAC8tIR0XEwcFADQBMwYIFishIiY1NDYzIREHBiMiJjU0NzcRBSIGIyImNTQ2NyUyNjMyFRE3NjMyFhUUBwcRITIWFRQGIwECFxcVFQFxvAwFEhgY3/6fAgMCFBUQEAGiAgUEJLEJBxEUFNIBVBQTFBQaEA8ZAgZNBBsQFwpaAZUcARoQDhgCJgEg/lZIAxoQFwlW/dMaDxAZAAAAAQAsAAAEwAMtAFMA9kAJHRcLCAQBBwFMS7ALUFhAHgoBBwcCYQQDAgICI00LCAUDAQEAYAkGDAMAABsAThtLsA5QWEAiAAICI00KAQcHA2EEAQMDI00LCAUDAQEAYAkGDAMAABsAThtLsCJQWEAeCgEHBwJhBAMCAgIjTQsIBQMBAQBgCQYMAwAAGwBOG0uwJ1BYQCIAAgIjTQoBBwcDYQQBAwMjTQsIBQMBAQBgCQYMAwAAGwBOG0AjAAIDBwMCB4AEAQMKAQcBAwdpCwgFAwEBAGAJBgwDAAAbAE5ZWVlZQB8BAE5MSEZBPjo4NDItKiYkIR8bGRUUBwUAUwFSDQgWKzMiJjU0NjMzEQcGIyImNTQ2Nzc2MzIXFzY2MzIWFzY2MzIWFREzMhYVFAYjIyImNRE0JiMiBgYHETMyFhUUBiMjIiY1ETQmIyIGBgcRMzIWFRQGI2sXFxUVbGwKChIVDxKkDgQlAgUdZEA5Xxcjbj5Pbm0UFBUVnRcXNS4rVTgBdhQUFRWmFxc8LStRNANVGBgZGRsQDxgCcxYDFw8MGQQhAid4U1tNUk5RiY/+PRkPEBobEAHxaFc/ZTr+VRkPEBobEAHxaFdBaDv+WxkPEBr//wAsAAAEwARMACcBoP/yAR8DBgDoAAAACbEAAbgBH7A1KwAAAQCDAAAEcwMtAD0A37cXCwgDAQcBTEuwC1BYQBsABwcCYQMBAgIjTQgGBAMBAQBgBQkCAAAbAE4bS7AOUFhAHwACAiNNAAcHA2EAAwMjTQgGBAMBAQBgBQkCAAAbAE4bS7AiUFhAGwAHBwJhAwECAiNNCAYEAwEBAGAFCQIAABsAThtLsCdQWEAfAAICI00ABwcDYQADAyNNCAYEAwEBAGAFCQIAABsAThtAIAACAwcDAgeAAAMABwEDB2kIBgQDAQEAYAUJAgAAGwBOWVlZWUAZAQA4NjIwLSsnJCAeGxkVFAcFAD0BPAoIFiszIiY1NDYzMxEHBiMiJjU0Njc3NjMyFxc2NjMyFhURMzIWFRQGIyEiJjU0NjMzETQmIyIGBhURMzIWFRQGI8IXFxUVbGwKChIVDxKkDgQlAgUmsWiRiG0UFBUV/qcXFxUVkllbYJBQaRgYGRkbEA8YAnMWAxcPDBkEIQIneEpklYP+PRkPEBobEA8YAcpZZkhpM/5bGQ8QGgAAAP//AIMAAARzBRcAJgGzzP4DBgDqAAAACbEAAbj//rA1KwAAAP//AIMAAARzBRgAJwFO/xQEZAMGAOoAAAAJsQABuARksDUrAP//AIMAAARzBSUAJgG2wP0DBgDqAAAACbEAAbj//bA1KwAAAP//AIP94wRzAy0AJwGt//H+tQMGAOoAAAAJsQABuP61sDUrAAADABn+ywRwBJMACwAjAGECWbc7LywDBwQBTEuwCVBYQDAAAxABAgMCZQ8BAAABYQABARpNDQEEBAVhCQgCBQUjTQ4MCgMHBwZgCxECBgYbBk4bS7ALUFhAOgADEAECAwJlDwEAAAFhAAEBGk0NAQQECGEJAQgII00NAQQEBV8ABQUdTQ4MCgMHBwZgCxECBgYbBk4bS7AOUFhANAADEAECAwJlDwEAAAFhAAEBGk0ACAgjTQ0BBAQFYQkBBQUjTQ4MCgMHBwZgCxECBgYbBk4bS7ARUFhAMAADEAECAwJlDwEAAAFhAAEBGk0NAQQEBWEJCAIFBSNNDgwKAwcHBmALEQIGBhsGThtLsBhQWEA6AAMQAQIDAmUPAQAAAWEAAQEaTQ0BBAQIYQkBCAgjTQ0BBAQFXwAFBR1NDgwKAwcHBmALEQIGBhsGThtLsBtQWEAwAAMQAQIDAmUPAQAAAWEAAQEaTQ0BBAQFYQkIAgUFI00ODAoDBwcGYAsRAgYGGwZOG0uwIlBYQDUABQgEBVcAAxABAgMCZQ8BAAABYQABARpNDQEEBAhhCQEICCNNDgwKAwcHBmALEQIGBhsGThtLsCdQWEA0AAMQAQIDAmUPAQAAAWEAAQEaTQAICCNNDQEEBAVhCQEFBSNNDgwKAwcHBmALEQIGBhsGThtANQAIBQQFCASACQEFDQEEBwUEaQADEAECAwJlDwEAAAFhAAEBGk0ODAoDBwcGYAsRAgYGGwZOWVlZWVlZWVlALSUkDQwBAFxaVlRRT0tIREI/PTk4KykkYSVgHxwYFhMRDCMNIwcFAAsBCxIIFisBIiY1NDYzMhYVFAYBIiY1NDYzMjY1ESMiJjU0NjMzMhURFAYBIiY1NDYzMxEHBiMiJjU0Njc3NjMyFxc2NjMyFhURMzIWFRQGIyMiJjU0NjMzETQmIyIGBhURMzIWFRQGIwQUIjExIiMvL/61GRodHYOauhYWFRP6JMz8tBcXFRU6OgoKEhUPEnIOBCUCBSZhaJF0MRQUFRXhFxcVFVZFW2BoKEsYGBkZA+4wIiMwMCMiMPrdHBARHGh0AtwbEA8YHfzljZ4BNRsQDxgCcwoDFw8MGQQVAid4SmSVg/49GQ8QGhsQDxgByllmSGkz/lsZDxAaAP//AIMAAARzBFkAJgG559YDBgDqAAAACbEAAbj/1rA1KwAAAAABAJn+zAP0Ay0APgDxtzMnJAMDAgFMS7ALUFhAHwABCAEAAQBlAAICBmEHAQYGI00FAQMDBGAABAQbBE4bS7AOUFhAIwABCAEAAQBlAAYGI00AAgIHYQAHByNNBQEDAwRgAAQEGwROG0uwIlBYQB8AAQgBAAEAZQACAgZhBwEGBiNNBQEDAwRgAAQEGwROG0uwJ1BYQCMAAQgBAAEAZQAGBiNNAAICB2EABwcjTQUBAwMEYAAEBBsEThtAJAAGBwIHBgKAAAcAAgMHAmkAAQgBAAEAZQUBAwMEYAAEBBsETllZWVlAFwEANzUxMCMhHRoWFBAOBwUAPgE+CQgWKwEiJjU0NjMyPgI1ETQmIyIGBhURMzIWFRQGIyEiJjU0NjMzEQcGIyImNTQ2Nzc2MzIXFzY2MzIWFREUDgIB5BkaHR1Ck4JSWVtgkFBpGBgZGf7RFxcVFWxsCgoSFQ8SpA4EJQIFJrFokYhenLr+zBwQERwZNVQ6AhtZZkhpM/5bGQ8QGhsQDxgCcxYDFw8MGQQhAid4SmSVg/3iRm9OKAAAAAIAxP/vBBQDLQANABkATUuwJ1BYQBcAAwMBYQABASNNBQECAgBhBAEAACEAThtAFQABAAMCAQNpBQECAgBhBAEAACEATllAEw8OAQAVEw4ZDxkIBgANAQ0GCBYrBSImJjU0NjMyFhUUBgYnMjY1NCYjIgYVFBYCbH++a+q+vuprvn+XpaWXl6WlEWa7fsDf38B+u2ZSu5KSu7uSkrsAAP//AMT/7wQUBO4AJgGzvdUDBgDyAAAACbEAAbj/1bA1KwAAAP//AMT/7wQUBIIAJgG3swYDBgDyAAAACLEAAbAGsDUr//8AxP/vBBQE/AAmAbWw1AMGAPIAAAAJsQABuP/UsDUrAAAA//8AxP/vBBQFKwAmAasARgMGAPIAAAAIsQACsEawNSv//wDE/+8EFARMACYBsLHVAwYA8gAAAAmxAAK4/9WwNSsAAAD//wDE/+8EFATVACcBsgGc/9gDBgDyAAAACbEAAbj/2LA1KwD//wDE/+8EFAUrAiYBtABGAQYA8gAAAAixAAKwRrA1K///AMT/7wQUBIIAJgGsAAYDBgDyAAAACLEAAbAGsDUr//8AxP/vBBQEJgAmAbqwxwMGAPIAAAAJsQABuP/HsDUrAAAAAAMAxP9yBBQDpgAgACkAMgCCQBsSAQECFQ0CBAExMCUkBAUEHgUCAwUCAQADBUxLsCdQWEAhAAIBAoUGAQADAIYABAQBYQABASNNBwEFBQNhAAMDIQNOG0AfAAIBAoUGAQADAIYAAQAEBQEEaQcBBQUDYQADAyEDTllAFysqAQAqMisyKCYdGxEPDAoAIAEgCAgWKwUiNTQ3NyYmNTQ2MzIXNzYzMhUUBwcWFhUUBgYjIicHBgMUFhcBJiMiBgEyNjU0JicBFgF8IQM7Y3LqvlNHPAcUIQM6Y3Brvn9QRjwKYEpFASE1P5elATyXpUlE/uA0jiIHBnwwv4LA3xZ+ESIGBnkxvYN+u2YWfhUCHGGXKQJcErv+IbuSYJYq/aQR//8AxP/vBBQEWQAmAbnY1gMGAPIAAAAJsQABuP/WsDUrAAAAAAMAY//2BHADLAAqADEAPQDzS7AsUFhACwsBBgcoHQIEAwJMG0ALCwEGBygdAggDAkxZS7AJUFhAIwAGAAMEBgNnCQEHBwFhAgEBASNNCwgCBAQAYQUKAgAAGwBOG0uwJ1BYQCMABgADBAYDZwkBBwcBYQIBAQEjTQsIAgQEAGEFCgIAACEAThtLsCxQWEAhAgEBCQEHBgEHaQAGAAMEBgNnCwgCBAQAYQUKAgAAIQBOG0AsAgEBCQEHBgEHaQAGAAMIBgNnCwEICABhBQoCAAAhTQAEBABhBQoCAAAhAE5ZWVlAHzMyAQA5NzI9Mz0wLiwrJiQaGBYUDw0JBwAqASoMCBYrBSImJjU0NjYzMhYXNjYzMhYWFRQGIwUWFjMyNzYzMhYVFAcGBiMiJicGBhMlNCYjIgYBMjY1NCYjIgYVFBYBekaAUVOCR0qNHyOPSz5wSCoj/ogFgFJiUwkODhwPOXg6U4kjJY7iAW1oPj5w/spGdHRGRnR0Clu1iIm1W2J6e2ZIlHElMgWipGUKExAOEj80X3h1YgHSBIWLjP34o6OjoqKjo6MAAAAAAgCO/o4EKwMtAC4APQENQAs7OiYYDAgGBgcBTEuwC1BYQCMABwcCYQMBAgIjTQkBBgYEYQAEBCFNBQEBAQBfCAEAAB8AThtLsA5QWEAnAAICI00ABwcDYQADAyNNCQEGBgRhAAQEIU0FAQEBAF8IAQAAHwBOG0uwIlBYQCMABwcCYQMBAgIjTQkBBgYEYQAEBCFNBQEBAQBfCAEAAB8AThtLsCdQWEAnAAICI00ABwcDYQADAyNNCQEGBgRhAAQEIU0FAQEBAF8IAQAAHwBOG0AoAAIDBwMCB4AAAwAHBgMHaQkBBgYEYQAEBCFNBQEBAQBfCAEAAB8ATllZWVlAGzAvAQA4Ni89MD0pJyQiHBoWFQcFAC4BLQoIFisTIiY1NDYzMxEHBgYjIiY1NDY3NzYzMhcXNjYzMhYWFRQGBiMiJicRMzIWFRQGIxMyNjY1NCYmIyIGBxEWFt0VFRQUWmwFCgUSFQ8SpA4EJQIDMJdfdqdZW6p1YYM42BUVFxdCYIBAPn1dZY0sL4j+jhoQDxkD5BUBAhcPDBkEIQInRTFKa7t5d7xsOjD+hxgPEBsBs12YWFqXXFM+/ng7RgAA//8Ajv6OBCsETAAnAaD/2QEfAwYA/wAAAAmxAAG4AR+wNSsAAAIAYP6OBC8EngAvAD4AlkANCAECAzw7JxkEBwgCTEuwJ1BYQC8AAgMEAwIEgAADAyBNAAgIBGEABAQjTQoBBwcFYQAFBSFNBgEBAQBfCQEAAB8AThtALQACAwQDAgSAAAQACAcECGkAAwMgTQoBBwcFYQAFBSFNBgEBAQBfCQEAAB8ATllAHTEwAQA5NzA+MT4qKCUjHRsXEw0JBwUALwEuCwgWKxMiJjU0NjMzEQciBiMiJjU0Njc3MjYzMhURNjYzMhYWFRQGBiMiJicRMzIWFRQGIxMyNjY1NCYmIyIGBxEWFuEVFRQUWqkDAwIUFBAQ6gIFBCQwkV92p1lbqnVhgzjYFRUXF0JggEA+fV1ljSwviP6OGhAPGQVaGAEaEA4YAioBIP40MUpru3l3vGw6MP6HGA8QGwGzXZhYWpdcUz7+eDtGAAACAMj+jgRAAy0AJAAzAH9ACSkoFggEBgcBTEuwJ1BYQCMABwcDYQQBAwMjTQkBBgYCYQACAiFNBQEBAQBfCAEAAB8AThtAKAAEAwcDBAeAAAMABwYDB2kJAQYGAmEAAgIhTQUBAQEAXwgBAAAfAE5ZQBsmJQEALSslMyYzHx0aGBQSDAoHBQAkASMKCBYrASImNTQ2MzMRBgYjIiYmNTQ2NjMyFhc0NjMyFhURMzIWFRQGIwEyNjcRJiYjIgYGFRQWFgKKFxcVFdg3hGF1qVxZqHVflTAgExAZWhQUFRX+Ml+ILyuOZV18P0CB/o4bEA8YAXkwOmy8d3m7a0YxTR0aMvwMGQ8QGgGzRjsBiD5TXJdaWJhdAAAAAQDbAAAD+AMtADABHkAOCAECBhcBBQIoAQEFA0xLsAtQWEAmAAIGBQYCBYAABQEGBXAABgYDYQQBAwMjTQcBAQEAYAgBAAAbAE4bS7AOUFhAKgACBgUGAgWAAAUBBgVwAAMDI00ABgYEYQAEBCNNBwEBAQBgCAEAABsAThtLsCJQWEAnAAIGBQYCBYAABQEGBQF+AAYGA2EEAQMDI00HAQEBAGAIAQAAGwBOG0uwJ1BYQCsAAgYFBgIFgAAFAQYFAX4AAwMjTQAGBgRhAAQEI00HAQEBAGAIAQAAGwBOG0AsAAMEBgQDBoAAAgYFBgIFgAAFAQYFAX4ABAAGAgQGaQcBAQEAYAgBAAAbAE5ZWVlZQBcBACspJiUiIBsZFBMMCQcFADABLwkIFishIiY1NDYzMxEHBiMiJjU0Nzc2MzIWFxc2NjMyFhUVFAYjIiY1NSIGBxEhMhYVFAYjAQkXFxUVt3oECBQUHqsOCRgNAQQ1wJMyJh4TER6A0ykBUBQUFRQaEA8ZAnMZARkPIAYiAx8ZaFJdHx2KHBwaGnhlaP5EGRAPGgAA//8A2wAAA/gFFwAmAbO7/gMGAQMAAAAJsQABuP/+sDUrAAAA//8A2wAAA/gFJQAmAbau/QMGAQMAAAAJsQABuP/9sDUrAAAA//8A2/3jA/gDLQAnAa3/4P61AwYBAwAAAAmxAAG4/rWwNSsA//8A2wAAA/gFKwAmAav+RgMGAQMAAAAIsQACsEawNSv//wDbAAAD+ASCACYBrDAGAwYBAwAAAAixAAGwBrA1KwABAQr/7wPSAy0AQgCEQAwzLiYDBgcDAQMCAkxLsCdQWEAsAAcHBGEFAQQEI00ABgYEYQUBBAQjTQACAgFhAAEBG00AAwMAYQgBAAAhAE4bQCUABwYEB1kFAQQABgIEBmkAAgIBYQABARtNAAMDAGEIAQAAIQBOWUAXAQA3NTEvKykkIhYUDw0IBgBCAUIJCBYrBSImJxUUBiMiJjU1NDYzMhYVFBYWMzI2NTQmJyUmJjU0NjYzMhYXNSY2MzIWFRUGIyImJyYmIyIGFRQWFwUWFhUUBgKMVqU7Fg4PGRkNDhZRi1ZwezJE/vZedGCUTlaiHwEbEBAZBSUaDQEcm2hYfDRLAQNXc7gRNEM8FhQVEuIcGBEjOVo1RkowQQ00El1YWmInNCglGRkYGcklKitCOzdLKzsRNBFfbnRtAAAA//8BCv/vA9IFFwAmAbPU/gMGAQkAAAAJsQABuP/+sDUrAAAA//8BCv/vA9IFJQAmAbbH/QMGAQkAAAAJsQABuP/9sDUrAAAA//8BCv5rA9IDLQAnAbsB4f/8AwYBCQAAAAmxAAG4//ywNSsA//8BCv/vA9IFJQAmAbXH/QMGAQkAAAAJsQABuP/9sDUrAAAA//8BCv3SA9IDLQAnAa3/+P6kAwYBCQAAAAmxAAG4/qSwNSsA//8BCv/vA9IETAAnAaD/6gEfAwYBCQAAAAmxAAG4AR+wNSsAAAEAXv//BBwEpABDAEBAPTsBAQIBTAACAAEEAgFpAAMDB2EABwcgTQYBBAQAYQUIAgAAGwBOAQA0Mi4sKCUhHxsZFBIODABDAUIJCBYrBSI1NDY3PgI1NCYmIyImNTQ2MzI2NjU0JiMiBgYVETMyFhUUBiMhIiY1NDYzMxE0NjYzMhYWFRQGBgceAhUUBgcGAsYvHh86aUNvrFwYFxYZNndTeV9HcUGcGhcbGP6FGBsXGoNhm1hUj1c/Xi5PlmKzlQUBLRYLBQkvYlRldzMdEBEYLmJNY21Jrpn9kBIaFhAQFhoSAmrB01REg19DZ0MOD0iEapGWFwEAAQDc/+8D5wQiAC0AW0uwJ1BYQB0AAwIDhQUBAQECXwQBAgIdTQAGBgBhBwEAACEAThtAGwADAgOFBAECBQEBBgIBaQAGBgBhBwEAACEATllAFQEAIR8cGhYUEQ8NCwcFAC0BLQgIFisFIiYmNREjIiY1NDYzMzQ2MzIWFRUhMhYVFAYjIREUFjMyNjc2MzIWFRQHDgICm0V2R48XFxUVkxAsGQsBdBQTFBT+jWZGR5guBAcOHAUUZocRM1UyAgsbEA8YoXsbEu8aDxAZ/hhMPzIjBCIRCAcYMSAAAAEA3P/vA+cEIgA/AHdLsCdQWEAnAAQDBIUHAQEICwIACQEAaQYBAgIDXwUBAwMdTQAJCQphAAoKIQpOG0AlAAQDBIUFAQMGAQIBAwJpBwEBCAsCAAkBAGkACQkKYQAKCiEKTllAHQEAOzktKygmIiAfHRkXFBIQDgoIBwUAPwE/DAgWKwEiJjU0NjMzNSMiJjU0NjMzNDYzMhYVFSEyFhUUBiMhFSEyFhUUBiMhFRQWMzI2NzYzMhYVFAcOAiMiJiY1EQFAHBIQGl2PFxcVFZMQLBkLAXQUExQU/o0BBBkOEBn+/mZGR5guBAcOHAUUZodGRXZHAawZDg4XvBsQDxihexsS7xoPEBm8Fw4OGeBMPzIjBCIRCAcYMSAzVTIBAwAAAP//ANz/7wS2BKYCJgERAAABBwGkAd7/pgAJsQEBuP+msDUrAP//ANz90gPnBCIAJwGt/9j+pAMGAREAAAAJsQABuP6ksDUrAP//ANz/7wPnBUEAJwGg/94CFAMGAREAAAAJsQABuAIUsDUrAAABAG3/7wSEAyUALwBUQA0iAQECAUwtFxYEBAJKS7AlUFhAEgACAQKFAAEBAGEDBAIAACEAThtAFgACAQKFAAMDG00AAQEAYQQBAAAhAE5ZQA8BACsqJCMTEQAvAS8FCBYrBSImNREHBiY1NDc3NhYVERQWMzI2NjcRBwYmNTQ3NzYWFRE3MhYVFAYHByInJwYGAjGKmWYfHCSvGBZgZDt7ZBZnHh0mtBQUmhUTExPBLAMFK60Rm3wBvBQGHxAfByMFFw7+A1NvLEsvAdsVBh8QIAckBBcO/VULFQ4OHAIUMldAV///AG3/7wSEBRcAJgGzyv4DBgEWAAAACbEAAbj//rA1KwAAAP//AG3/7wSEBIIAJgG3wAYDBgEWAAAACLEAAbAGsDUr//8Abf/vBIQFJQAmAbW9/QMGARYAAAAJsQABuP/9sDUrAAAA//8Abf/vBIQFKwAmAavQRgMGARYAAAAIsQACsEawNSv//wBt/+8EhARMACYBsL7VAwYBFgAAAAmxAAK4/9WwNSsAAAD//wBt/+8EhAT+ACcBsgGoAAEDBgEWAAAACLEAAbABsDUrAAD//wBt/+8EhAUrACYBtAxGAwYBFgAAAAixAAKwRrA1K///AG3/7wSEBIIAJgGsDAYDBgEWAAAACLEAAbAGsDUr//8Abf/vBIQEJgAmAbq8xwMGARYAAAAJsQABuP/HsDUrAAAA//8Abf5WBIQDJQAnAbwA7f/tAwYBFgAAAAmxAAG4/+2wNSsA//8Abf/vBIQFJAAmAbi93wMGARYAAAAJsQACuP/fsDUrAAAA//8Abf/vBIQEggAmAbnk/wMGARYAAAAJsQABuP//sDUrAAAAAAEAgv/yBF0DBgAnAFK1FAEAAQFMS7AnUFhAFQYEAwMBAQJfBQECAh1NBwEAACEAThtAEwUBAgYEAwMBAAIBaQcBAAAhAE5ZQBUBACQiHhsXFRMRDQoGBAAnAScICBYrBSImJwEjIiY1NDYzITIWFRQGIyMBEyMiJjU0NjMhMhYVFAYjIwEGBgKHFCUX/tplGRESHAE7GQ4OGG0BC/RVGQ4PGQEFHREQGln+9RMhDhcyAnkaDxAZGhAPGf2oAlgZDxAaGRAPGv2CLhYAAAEAGv/yBNkDBgBBAGZACT4mFRQEAAEBTEuwJ1BYQBkJBwYEAwUBAQJfCAUCAgIdTQoLAgAAIQBOG0AXCAUCAgkHBgQDBQEAAgFpCgsCAAAhAE5ZQB0BADs5NjQwLSknJSMfHBgWExENCgYEAEEBQQwIFisFIiYnAyMiJjU0NjMzMhYVFAYjIxMTJyMiJjU0NjMzMhYVFAYjIxMTIyImNTQ2MzMyFhUUBiMjAwYGIyImJwMDBgYBsxQrEdFOGRESHOsZDg4YNLapMTMZERIc/hkODhht1KlBGQ4PGd0dERAaRcAOJhQUKROHkBEjDhYzAnkaDxAZGhAPGf2oAc+JGg8QGRoQDxn9qAJYGQ8QGhkQDxr9gi4WFzIBdv6FLhYA//8AGv/yBNkFFwAmAbPL/gMGASQAAAAJsQABuP/+sDUrAAAA//8AGv/yBNkFJQAmAbW+/QMGASQAAAAJsQABuP/9sDUrAAAA//8AGv/yBNkETAAmAbC+1QMGASQAAAAJsQACuP/VsDUrAAAA//8AGv/yBNkE/gAnAbIBqgABAwYBJAAAAAixAAGwAbA1KwAAAAEAqwAABEIDBgBDAHJACTsqGQgEAQIBTEuwJ1BYQB4HBQQDAgIDXwYBAwMdTQsKCAMBAQBfCQwCAAAbAE4bQBwGAQMHBQQDAgEDAmkLCggDAQEAXwkMAgAAGwBOWUAfAQA+PDo4NDEtKyknIyAcGhgWEg8LCQcFAEMBQg0IFiszIiY1NDYzMwEDIyImNTQ2MzMyFhUUBiMjFzcjIiY1NDYzITIWFRQGIyMDATMyFhUUBiMhIiY1NDYzMwMDMzIWFRQGI9kcEhAaVAER+lgcEhAa7RgODxkoyLwtHBIQGgELGQ4PGmL3ASBHGRgZGv77HBwaGVDh3TsYDg8ZGhAPGQFEAR4aEA8ZGQ8QGt/fGhAPGRkPEBr+3/6/GQ8QGhoQDxkBAv7+GQ8QGgAAAAEAlv6XBEYDBgAwAF+2HQoCAQIBTEuwJ1BYQBoHBQQDAgIDXwYBAwMdTQABAQBhCAEAAB8AThtAGAYBAwcFBAMCAQMCaQABAQBhCAEAAB8ATllAFwEALSsnJCAeHBoWEw8NBwUAMAEwCQgWKwEiJjU0NjMyNjc3JgInIyImNTQ2MyEyFhUUBiMjExMjIiY1NDYzITIWFRQGIyMBBgYBcysZHCg5YxA2UphPXRkQEhwBJBoPDhlm/+RZGQ4PGQEJHREQGk/+0S6K/pchExMdTSuLqgFfrRkPEBoaEA8Z/asCVRkPEBoZEA8a/Pl1oQAA//8Alv6XBEYFFwAmAbO//gMGASoAAAAJsQABuP/+sDUrAAAA//8Alv6XBEYFJQAmAbWz/QMGASoAAAAJsQABuP/9sDUrAAAA//8Alv6XBEYETAAmAbCz1QMGASoAAAAJsQACuP/VsDUrAAAA//8Alv6XBEYE/gAnAbIBngABAwYBKgAAAAixAAGwAbA1KwAAAAEBEQAAA+YDBAAkANJADg4BAQMaAQQFIQEABANMS7AJUFhAIwACAQUBAnIABQQEBXAAAQEDXwADAx1NAAQEAGAGAQAAGwBOG0uwC1BYQCQAAgEFAQJyAAUEAQUEfgABAQNfAAMDHU0ABAQAYAYBAAAbAE4bS7AnUFhAJQACAQUBAgWAAAUEAQUEfgABAQNfAAMDHU0ABAQAYAYBAAAbAE4bQCMAAgEFAQIFgAAFBAEFBH4AAwABAgMBZwAEBABgBgEAABsATllZWUATAQAeHBkYExALCQYFACQBIwcIFishIjU0NwEhBwYGIyImNTU0NjMhMhYVFAcBITc2NjMyFhURFAYjAU44EQIW/jMIARkQEB0cEgJBIxoS/dgCAwsBGxAQGSESOx8TAkfFFhcZGeISHBwRGxL9qO0SFBQW/vMTGwAA//8BEQAAA+YFFwAmAbPY/gMGAS8AAAAJsQABuP/+sDUrAAAA//8BEQAAA+YFJQAmAbbL/QMGAS8AAAAJsQABuP/9sDUrAAAA//8BEQAAA+YETAAnAaD/+AEfAwYBLwAAAAmxAAG4AR+wNSsAAAIAXwAABKwEpABCAE4A6EuwE1BYQDgABQ0DBgVyAAYGBGEABAQgTRABDQ0OYQAODhpNCwECAgNhBwEDAx1NDAoIAwEBAF8JDwIAABsAThtLsCdQWEA5AAUNAw0FA4AABgYEYQAEBCBNEAENDQ5hAA4OGk0LAQICA2EHAQMDHU0MCggDAQEAXwkPAgAAGwBOG0A3AAUNAw0FA4AHAQMLAQIBAwJpAAYGBGEABAQgTRABDQ0OYQAODhpNDAoIAwEBAF8JDwIAABsATllZQClEQwEASkhDTkROPTs6OTg2Mi8rKSYkIB8cGhUTEA4KCAcFAEIBQREIFiszIiY1NDYzMxEjIiY1NDYzMzU0NjMyFhUVFAYjIiY1NQ4CFRUhMhYVETMyFhUUBiMhIiY1NDYzMxEhETMyFhUUBiMBIiY1NDYzMhYVFAaNFxcVFWxcFxcVFWDCzRciHxISHXRxIgJ3FBuIFBQVFP53FxcVFab9ud8UExQUAY0iMTEiIy8vGhAPGQJaGhAPGUi1qRsYdRwcGhpdCDx0XUILFP1zGg8QGRsQDxgCWv2mGg8QGQPuMCIjMDAjIjAAAAAAAQB2AAAEhwSUAD4Ad0uwJ1BYQCYACAgEXwAEBBpNCgECAgNhCQEDAx1NCwcFAwEBAF8GDAIAABsAThtAJAkBAwoBAgEDAmkACAgEXwAEBBpNCwcFAwEBAF8GDAIAABsATllAHwEAOTc2NDAuKykoJiIfGxkWExAOCggHBQA+AT0NCBYrMyImNTQ2MzMRIyImNTQ2MzM1NDYzITIWFREzMhYVFAYjISImNTQ2MzMRIyIGFRUzMhYVFAYjIxEzMhYVFAYjpBcXFRV5XBcXFRVgv8sBJxQbZxQTFBT+vRcXFRWB9K98lRQUFRSVyxQTFBQaEA8ZAloaEA8ZSLObDBT73hoPEBkaEA8ZA/N5jEIaDxAZ/aYaDxAZAAIBaQEAA60DLAAvADoAUEBNDgECATQzLSMIBQQCAkwAAgEEAQIEgAADAAECAwFpCAYCBAAABFkIBgIEBABhBQcCAAQAUTEwAQAwOjE6KykfHRgWEhANCwAvAS8JCRYrASImNTQ+Ajc1NCYjIgcGBiMiJjU0NjMyFhUVFBYzMjY3NjMyFhUUBwYjIiYnBgYnMjY3NQ4CFRQWAghMU0JthEI4T1BDAhIYFBOAZ3ZQFg0SJwoHCQoPBy48HDQJHnVBO3AkYIpKOgEAU0U9RB4KBQ5JWB4vORwUPk+Ec9EbDhYLCBELCgcxHDUjNDctJo4JFDAzNisAAAAAAgGl/+wD0QIRAAsAFwAxQC4AAQADAgEDaQUBAgAAAlkFAQICAGEEAQACAFENDAEAExEMFw0XBwUACwELBgkWKwUiJjU0NjMyFhUUBicyNjU0JiMiBhUUFgK+fZycfXyXl3xVW1tVVl5eFJV+f5OWfHyXTXFVVW9uVldvAAEAbf6pBIQDJQA6AEJAPzIhAgECOAEABAJMLBYVAwQCSgACAQKFAAMBBAEDBIAAAQAEAAEEaQUBAAAUAE4BADAuKikjIhIQADoBOgYHFisBIjURBwYmNTQ3NzYWFREUFjMyNjY3EQcGJjU0Nzc2FhURNzIWFRQGBwciJycGBiMiJiceAhcWFRQGAUc5Zh8cJK8YFmBkO3tkFmceHSa0FBSaFRMTE8EsAwUrrWBKcSUIFBAEAif+qVcDwhQGHxAfByMFFw7+A1NvLEsvAdsVBh8QIAckBBcO/VULFQ4OHAIUMldAVy4qPodtFhAFIx4AAAIA6P/wA/AEowATACMALUAqAAMDAWEAAQEgTQUBAgIAYQQBAAAhAE4VFAEAHRsUIxUjCwkAEwETBggWKwUiLgI1ND4CMzIeAhUUDgInMjY2NTQmJiMiBgYVFBYWAmtgkWExMWKRX2CSYTIyYpFgYoJBQoJhYYJAQYEQZqvXcHHXrWZmrddxcNerZlWW64GC7ZeX7YKB65YAAQDkAAAEWgSZAB4AI0AgEwsIAwFKAgEBAQBfAwEAABsATgEAGRcHBQAeAR0ECBYrISImNTQ2MyERBQYjIiY1NDclNjMyFhURITIWFRQGIwESFxcVFQFx/rEICRIXGAGUCAwPGgFUFBMUFBoQDxkD25gEHRAZCrQEFRr76BoPEBkAAAAAAQEIAAADywSjAC4AbLUkAQMEAUxLsAtQWEAkAAEABAABBIAABAMDBHAAAAACYQACAiBNAAMDBWAGAQUFGwVOG0AlAAEABAABBIAABAMABAN+AAAAAmEAAgIgTQADAwVgBgEFBRsFTllADgAAAC4ALSMYJCQsBwgbKyEmJjU0PgQ1NCYjIgYHBgYjIiY1NDYzMhYVFA4DByE3NjYzMhYVFRQGIwEXAgVThJOEU4V3Mmg1CxMkHx3Bm5O6Ypakhx8B8AwCIBIRGx8XCRELTJeVko+LQnBSFBpbai4ih3KFjFuooZ+lWLYVGBgb0BcbAAAAAQEH/+8DtgSjADsAUUBOBAECAQFMAAYFCAUGCIAAAQMCAwECgAAIBAEDAQgDaQAFBQdhAAcHIE0AAgIAYQkBAAAhAE4BADY1LiwmJCEfFhQTEQ0LCAYAOwE7CggWKwUiJiY1NDYzMh4CMzI2NTQmIyIGIyI1NDc+AjU0JiMiDgIjIiY1ND4CMzIWFRQOAgcyFhUUBgYCIESBVBURIScpRj+OpYlzFkQJJh9QhE9SXFRNIiAmFBVCY2gncZs7VlYbnqdsuBElOR8IGRYcFqmAcYIIJRcSMVBZPjdYHiYeFgskOCYUd208XkYvDbGKb6pgAAAAAAIAzwAABBAEmwAmACkANkAzKQEDAgFMBwEDBAEBAAMBZwACAiBNBQEAAAZfCAEGBhsGTgAAKCcAJgAlESUTKBElCQgcKyEiJjU0NjMhESEiJjU0NwE2NjMyFhURMzIWFRQGIyMRMzIWFRQGIwEhEQGkDA0MDAEg/jIOGAoB/wIVDQ4ZyhESEhPIngwMDQz9ggGBFQ0MEwEyGxEPDQLUAwkWIP1cFxAPGP7OEwwNFQHBAjoAAAEBOf/vA/ME7AA5ANZACi8BBAMFAQIBAkxLsBtQWEA1AAYFBQZwAAQDAQMEAYAAAQIDAQJ+AAcHBV8ABQUaTQADAwhhAAgIHU0AAgIAYQkBAAAhAE4bS7AdUFhAMwAGBQUGcAAEAwEDBAGAAAECAwECfgAIAAMECANpAAcHBV8ABQUaTQACAgBhCQEAACEAThtAMgAGBQaFAAQDAQMEAYAAAQIDAQJ+AAgAAwQIA2kABwcFXwAFBRpNAAICAGEJAQAAIQBOWVlAGQEAMzEsKiYkIiAaGRYUDgwJBwA5ATkKCBYrBSImJyY1NDYzMhcWFjMyNjY1NCYmIyIGBwYjIiY1EzQ2MyE2NjMyFhUUBiMhIhUDNjYzMhYWFRQGBgJDRXowGxgQDQsyczJKlWREbDxMjSAHHA0YFFcxAUQOExISGygl/o4IIzp9PFeUWXTEESYhExkRFwglHEaNaWN6N00/FhERAkYsEDUkEBE6UAj+STAtVJlmfrplAAAAAgEB/+8EAwTlABoAKgBgtRIBAwQBTEuwIFBYQBwAAQIBhQAEBAJhAAICHU0GAQMDAGEFAQAAIQBOG0AaAAECAYUAAgAEAwIEagYBAwMAYQUBAAAhAE5ZQBUcGwEAJCIbKhwqFhQKCAAaARoHCBYrBSImNTQSNjc2MzIWFRQHDgIHNjYzMhYVFAYnMjY2NTQmJiMiBgYVFBYWAojIv3K4aA4OEhwMTZlwEjqnUqm+0apcfkE1c1xjj0w8ghH0x74BKepeDB0RDQtAtN1/TUnWqqvLUlCETU6MV1OGTk6JVAABARL/+QPLBJMAHgBVtRYBAQMBTEuwC1BYQBgAAgEAAQJyAAEBA18AAwMaTQQBAAAbAE4bQBkAAgEAAQIAgAABAQNfAAMDGk0EAQAAGwBOWUAPAQATEQ0LCAcAHgEeBQgWKwUiJjU0EhI3IRUUBiMiJjU1NDMhMhYVFAcGAgIVFAYCaxMfVYdL/hIfEhIdOAJWExgHU4hQHQccGtYBawE9kKkaGxobyTYlFxENoP7I/qPWGxoAAAAAAwEE/+8D/gSjAB0AKwA8ADVAMjUWCAMDAgFMAAICAWEAAQEgTQUBAwMAYQQBAAAhAE4tLAEALDwtPCUjEA4AHQEdBggWKwUiJiY1NDY2Ny4CNTQ2MzIWFRQGBgceAhUUBgYDNjY1NCYjIgYGFRQWFhMyNjY1NC4CJw4CFRQWFgKCYK9vYYY1NnZSv4uYxk1wNUCIXmataWKKjW09cUhFdk9BgFU9XmcqL39gWYcRNYBuUXpbHyJQbUuMloOPTnRXJSRXeFRpfTcCjDh7W21XJ1VHRFpI/aEeVVI7WUQ2GBpSakBWXSIAAAIA+v/AA/wEowAaACoAXrUJAQMEAUxLsBZQWEAaBgEDAAEAAwFpAAQEAmEAAgIgTQUBAAAhAE4bQBoFAQABAIYGAQMAAQADAWkABAQCYQACAiAETllAFRwbAQAkIhsqHCoTEQ0LABoBGgcIFisFIiY1NDc+AjcGBiMiJjU0NjMyFhUUAgYHBhMyNjY1NCYmIyIGBhUUFhYCTBIcDE6ZcRI6p1KpvtKpyL9zuGkNA2SOTDyBalt/QTVzQB4QDgpBqtR+TUnXqavL88i+/uDfXwwCP1OHTU+IVFCDTk6LWAAAAQDz/xMD5QSVAA8AGUAWAgEBAAGGAAAAGgBOAAAADwAPFwMIFysFIiY1NDcBNjMyFhUUBwEGASIRHgQCmwsaER0G/WgN7RgSCQgFMhUVEgkM+tIYAAAAAAMAIgAABJ8EXwAeAC4AWgDHsQZkREAKCAEHBFIBCAkCTEuwE1BYQEAABAcEhQAGBQAFBgCAAAkCCAgJcgwBAwgKCAMKgAAHAAUGBwVqAQEACwECCQACZwAIAwoIVwAICApgDQEKCApQG0BBAAQHBIUABgUABQYAgAAJAggCCQiADAEDCAoIAwqAAAcABQYHBWoBAQALAQIJAAJnAAgDCghXAAgICmANAQoIClBZQCQvLyAfAAAvWi9ZVlRRUEdFQD88OigmHy4gLgAeAB0YFyUOCBcrsQYARBMiJjU0NjMzEQcGIyImNTQ3NzYzMhYVETMyFhUUBiMDIiY1NDcBNjMyFhUUBwEGBSYmNTQ+AzU0JiMiBwYGIyImNTQ2MzIWFhUUDgMHITc2NjMyFRUUI04QEQ8PfHsGBg0REa4GCAsTag4ODw4vDRYDAmQJEg0WBP2eCwGpAQNDY2JDUjs8PAcKFhMRd0k1YkA6WV5LDgEZBwETCxsgAVQUCwsRAoI4AxUMEgdMAw8T/VISCwsT/s4SDQkFA/wQDw4ICPwGEiIHDQlIdWRbWTBBRCFIQyQbUlAoUDw9YlVVYT1oERIofCgAAAAABAAiAAEEpARfAB4ALgBUAFcAbbEGZERAYlcIAgAEAUwABAAEhQ0BAwUKBQMKgAEBAAwBAgcAAmcLAQcIAQYFBwZpCQEFAwoFVwkBBQUKXw4BCgUKTy8vIB8AAFZVL1QvU05NTEpFRDg3NjQoJh8uIC4AHgAdGBclDwgXK7EGAEQTIiY1NDYzMxEHBiMiJjU0Nzc2MzIWFREzMhYVFAYjAyImNTQ3ATYzMhYVFAcBBgUiJjU0NjMzNSEiJjU0NwE2MzIWFREzMhYVFAYjIxUzMhYVFAYjATMRThARDw98ewYGDRERrgYICxNqDg4PDhQNFgMCZAkSDRYE/Z4LAZ8NDg0NsP7xCxMIATUFFwsUdw4NDw51fA4ODw7+YNoBVBQLCxECgjgDFQwSB0wDDxP9UhILCxP+zhINCQUD/BAPDggI/AYSIRMMCxS2FQ0JDQHtChEZ/jMRCwoSthMLDBQBLAFuAAAEABAAAQS8BGIANgBGAGwAbwCdsQZkRECSFgEDCG8BAQMEAQIBA0wABgUIBQYIgAABAwIDAQKAEwEJCxALCRCACgEHAAUGBwVpAAgEAQMBCANpAAISAQANAgBpEQENDgEMCw0MaQ8BCwkQC1cPAQsLEF8UARALEE9HRzg3AQBubUdsR2tmZWRiXVxQT05MQD43RjhGMjErKSMiHx0VExEQDAoIBgA2ATYVCBYrsQYARBMiJiY1NDYzMhYWMzI2NTQmIyIGIyI1NDc2NjU0JiMiDgIjIiY1NDY2MzIWFRQGBgcWFhUUBhMiJjU0NwE2MzIWFRQHAQYFIiY1NDYzMzUhIiY1NDcBNjMyFhURMzIWFRQGIyMVMzIWFRQGIwEzEdAtWToQDR8eMDhfbFlNDi4HHBZQcjU9ODMVFxsPD0xkIk1qPE0bZWygMQ0WAwJkCRINFgT9ngsBpA0ODQ2w/vELEwgBNQUXCxR3Dg0PDnV8Dg4PDv5g2gE5GSgWBxIYGG9USlUGHBENMkk9IzkUGRQQCSIuF1FKMksxDQR2WnCP/ukSDQkFA/wQDw4ICPwGEiETDAsUthUNCQ0B7QoRGf4zEQsKErYTCwwUASwBbgAAAAEBqAGMAxgElgAdACBAHQgBAEoBAQAAAl8DAQICKwJOAAAAHQAcGBclBAkXKwEiJjU0NjMzEQcGIyImNTQ3NzYzMhYVETMyFhUUIwHUEBIQD3x8BgYNEBGtBggLE2oODh0BjBMLCxICgTcDFAwSB0wDDxP9UxMLHQAAAAABAZ4BjANnBKMALABstSMBAwQBTEuwEVBYQCQAAQAEAAEEgAAEAwMEcAAAAAJhAAICKk0AAwMFYAYBBQUrBU4bQCUAAQAEAAEEgAAEAwAEA34AAAACYQACAipNAAMDBWAGAQUFKwVOWUAOAAAALAArIxkkIysHCRsrASYmNTQ+AzU0JiMiBwYGIyImNTQ2MzIWFhUUDgMHITc2NjMyFhUVFCMBqAEESGtrSFhAQz8HDBcUE4BPOWtFP2BmUQ8BMAcBFQwLEiIBjAgNCk5/bGFhNEdII05IJx1ZVixWQUJrXl9rQnoRFBMYhisAAAEBkAF6A2QEowA2AFVAUhYBAwgEAQIBAkwABgUIBQYIgAABAwIDAQKAAAgEAQMBCANpAAUFB2EABwcqTQACAgBhCQEAAC0ATgEAMjErKSMiHx0VExEQDAoIBgA2ATYKCRYrASImJjU0NjMyFhYzMjY1NCYjIgYjIjU0NzY2NTQmIyIOAiMiJjU0NjYzMhYVFAYGBxYWFRQGAlAtWToQDR8eMDhfbVpNDi4HHBZQczY9ODMWFhsPD0xkIk1qPE0bZWygAXoZKBYHEhgYb1RKVQYcEQ0yST0jORQZFBAJIi4XUUoySzENBHZacI8AAgFoAYwDeASfACUAKAAuQCsoAQJKBgECAwEBAAIBaQQBAAAFXwcBBQUrBU4AACcmACUAJBElHBElCAkbKwEiJjU0NjMzNSEiJjU0NwE2MzIWFREzMhYVFAYjIxUzMhYVFAYjATMRAeYNDg0NsP7xCxMIATUFFwsUdw4NDw51fA4ODw7+YNoBjBMMCxSmFQ0JDQHtChEZ/jMRCwoSphMLDBQBHAFuAAAAAQIC//AC1gDDAAsAGkAXAAEBAGECAQAAIQBOAQAHBQALAQsDCBYrBSImNTQ2MzIWFRQGAmwuPD0tLT09EDsuLjw9LS47AAAAAQH5/y4C2AC0ABYAE0AQAAEBAGEAAAAbAE4kGAIIGCsFIiY1NDc2NjUiJjU0NjMyFhUUBgYHBgIVChIMIE0sQD8jLUM6VikD0hEKDAkXVS4sMTAvPTw6a1EVAgACAhv/8ALuAysACwAXAE1LsCdQWEAXBAEAAAFhAAEBI00AAwMCYQUBAgIhAk4bQBUAAQQBAAMBAGkAAwMCYQUBAgIhAk5ZQBMNDAEAExEMFw0XBwUACwELBggWKwEiJjU0NjMyFhUUBgMiJjU0NjMyFhUUBgKELjs8LS09PS0uOzwtLT09Alg7Li48PS0uO/2YOy4uPD0tLjsAAAACAhv/TgL0AysACwAhAEyzDAECSUuwJ1BYQBYEAQAAAWEAAQEjTQADAwJhAAICGwJOG0AUAAEEAQADAQBpAAMDAmEAAgIbAk5ZQA8BABsZFRQHBQALAQsFCBYrASImNTQ2MzIWFRQGAyImNTQ3NjY1IiY1NDYzMhYVFAYHBgKELjs8LS09PWwRGBEgQSw7OiMtQ1g+CwJYOy4uPD0tLjv89hcNEgwVOi4pKioqPTxXcCAGAP//AJr/8AQ8AMMAJwFNAWYAAAAmAU3+AAAHAU3+mAAAAAICB//3AtIEowAPABsBT0uwC1BYQBcEAQAAAWEAAQEgTQADAwJhBQECAhsCThtLsA5QWEAXBAEAAAFhAAEBIE0AAwMCYQUBAgIhAk4bS7ARUFhAFwQBAAABYQABASBNAAMDAmEFAQICGwJOG0uwFlBYQBcEAQAAAWEAAQEgTQADAwJhBQECAiECThtLsBhQWEAXBAEAAAFhAAEBIE0AAwMCYQUBAgIbAk4bS7AdUFhAFwQBAAABYQABASBNAAMDAmEFAQICIQJOG0uwHlBYQBcEAQAAAWEAAQEgTQADAwJhBQECAhsCThtLsB9QWEAXBAEAAAFhAAEBIE0AAwMCYQUBAgIhAk4bS7AgUFhAFwQBAAABYQABASBNAAMDAmEFAQICGwJOG0AXBAEAAAFhAAEBIE0AAwMCYQUBAgIhAk5ZWVlZWVlZWVlAExEQAQAXFRAbERsJBwAPAQ8GCBYrASI1NAI1NDYzMhYVFAIVFAMiJjU0NjMyFhUUBgJuGComHBslKBkrOzsrKzo6AVgkugFqrzIiIjKt/pO5JP6fOysrOTkrKzsAAAACAgf+vgLSA2oACwAbAFFLsBtQWEAVBAEAAAECAAFpBQECAgNhAAMDHwNOG0AbBAEAAAECAAFpBQECAwMCWQUBAgIDYQADAgNRWUATDQwBABUTDBsNGwcFAAsBCwYIFisBMhYVFAYjIiY1NDYTMhUUEhUUBiMiJjU0EjU0AmwrOzsrKzo6KhgqJR0bJSgDajsrKzk5Kys7/p8kuv6XsDIiIjKtAW64JAACASz/9wOJBKQAJgAyAelLsAtQWEAmAAIBAAECAIAGAQAFAQAFfgABAQNhAAMDIE0ABQUEYQcBBAQbBE4bS7AOUFhAJgACAQABAgCABgEABQEABX4AAQEDYQADAyBNAAUFBGEHAQQEIQROG0uwEVBYQCYAAgEAAQIAgAYBAAUBAAV+AAEBA2EAAwMgTQAFBQRhBwEEBBsEThtLsBZQWEAmAAIBAAECAIAGAQAFAQAFfgABAQNhAAMDIE0ABQUEYQcBBAQhBE4bS7AYUFhAJgACAQABAgCABgEABQEABX4AAQEDYQADAyBNAAUFBGEHAQQEGwROG0uwHVBYQCYAAgEAAQIAgAYBAAUBAAV+AAEBA2EAAwMgTQAFBQRhBwEEBCEEThtLsB5QWEAmAAIBAAECAIAGAQAFAQAFfgABAQNhAAMDIE0ABQUEYQcBBAQbBE4bS7AfUFhAJgACAQABAgCABgEABQEABX4AAQEDYQADAyBNAAUFBGEHAQQEIQROG0uwIFBYQCYAAgEAAQIAgAYBAAUBAAV+AAEBA2EAAwMgTQAFBQRhBwEEBBsEThtAJgACAQABAgCABgEABQEABX4AAQEDYQADAyBNAAUFBGEHAQQEIQROWVlZWVlZWVlZQBcoJwEALiwnMigyHBoWFA8NACYBJggIFisBIiY1ND4DNzY1NCYjIgYHDgIjIiY1NDYzMhYVFA4DFRQGAyImNTQ2MzIWFRQGAh8ZCTJLTz0KA3RlIUspAwgbIhsWmHmPvUNiYkMLDys7OysrOjoBUiEWQ2BPTl9CFBJZbgoTKVk9MCBldI6MT3VdU1c1GR/+pTsrKzo5Kys8AAIBLP+1A4kEYgALADIAv0uwCVBYQB8ABAIDAgQDgAYBAAABAgABaQADAAUDBWYHAQICHQJOG0uwFlBYQCEABAIDAgQDgAADAAUDBWYAAQEAYQYBAAAaTQcBAgIdAk4bS7AnUFhAHwAEAgMCBAOABgEAAAECAAFpAAMABQMFZgcBAgIdAk4bQCkHAQIBBAECBIAABAMBBAN+BgEAAAECAAFpAAMFBQNZAAMDBWIABQMFUllZWUAXDQwBACgmIiAbGQwyDTIHBQALAQsICBYrATIWFRQGIyImNTQ2EzIWFRQOAwcGFRQWMzI2Nz4CMzIWFRQGIyImNTQ+AzU0NgKQKzs7Kys6OjEZCTJLTz0KA3VkIUspAwgcIRsWl3qPvUNiYkMLBGI7Kys6OSsrPP6lIBdDYE9OX0ITE1hvChMpWT0wIGV0j4tPdV1TVzUaHgAAAAH/zgIXAHMCvAALAB9AHAABAAABWQABAQBhAgEAAQBRAQAHBQALAQsDCBYrEyImNTQ2MzIWFRQGISIxMSIjLy8CFzAiIzAwIyIwAAABAXwAxQNdAqkACwAfQBwAAQAAAVkAAQEAYQIBAAEAUQEABwUACwELAwgWKyUiJjU0NjMyFhUUBgJwb4WFb2uCgsWDb2+Dh2tshgAABgEkAdYEAARZAA8AHwArADcARwBYAKpADhsNBQMFAVZOOwMIBAJMS7AYUFhAKg0DDAMABQkFAAmAAgEBEAoPAwgBCGULAQkJHU0OBwIEBAVhBgEFBSMEThtAMw0DDAMABQkFAAmACwEJBAUJBH4CAQEFCAFZBgEFDgcCBAgFBGkCAQEBCGEQCg8DCAEIUVlAL0lIOTgsLBAQAQBSUEhYSVhAPzhHOUcsNyw3MzImJSEgEB8QHxkXCQcADwEPEQgWKwEiJycmNTQ2MzIXFxYVFAYzIiY1NDc3NjMyFhUUBwcGBSImNTQ2MxcWFRQHBScmNTQ3NzIWFRQGASImNTQ3NzYzMhYVFAcHBjMiJycmJjU0NjMyFxcWFRQGAlYUD3cGNRwcDE4FG2YRGgROCx0dNAV3D/50GRkZGcYpKQGzxikpxhkYGP4eHDUGdw0WERsETg38HwlOAQQaERYPdgY1A1MVmwwJHCUVtAwJERcXEQcOtBUmGwsKmxV8KRcYKRYFJiYDFxcDJiYFFikYFyn+/yYcCAycExYRCAy0Fha0BQkGERYTnAwIHCYAAAACANv/hQQIBRwARwBLAJFADCkfAgMEQwUCCwACTEuwJ1BYQCgGAQQDBIUQDQILAAuGDgkCAQwKAgALAQBnDwgCAgIDXwcFAgMDHQJOG0AvBgEEAwSFEA0CCwALhgcFAgMPCAICAQMCaA4JAgEAAAFXDgkCAQEAXwwKAgABAE9ZQB4AAEtKSUgARwBHRUQ+PTs5NDMlFhIWEiURJRYRCB8rBSImNTQ3EyMiJjU0NjMzNyMiJjU0NjMzEzYzMhYVFAcDIRM2MzIWFRQHAzMyFhUUBiMjBzMyFhUUBiMjAwYjIiY1NDcTIQMGEyE3IQEcDhcBd3UPEBAPijeXDxAQD62ABx8PGgF+AQGABx8PGgF+dxAPDw+NOJoQDw8Qr3oHIg4XAXf+/3oHlgEBN/8AexANBQMB1xsQEBrbGxAQGgH8GhEOBQL+EAH8GhEOBQL+EBsQEBrbGhAQG/4hHRANBQMB1/4hHQJR2wABAPP/EwPlBJUADwAZQBYCAQEAAYYAAAAaAE4AAAAPAA8XAwgXKwUiJjU0NwE2MzIWFRQHAQYBIhEeBAKbCxoRHQb9aA3tGBIJCAUyFRUSCQz60hgAAAAAAQDy/xMD4wSVAA8AGkAXAgEAAQCGAAEBGgFOAQAJBwAPAQ8DCBYrBSInASY1NDYzMhcBFhUUBgO1GQ39aAUdERoKApsEHe0YBS4KCxIVFfrOCAkSGAAA//8AMgIXANcCvAAGAVZkAP///wYCcf+rAxYBBwFW/zgAWgAIsQABsFqwNSsAAQFHAaIDqQH0AA0AH0AcAAEAAAFXAAEBAF8CAQABAE8BAAgFAA0BDAMIFisBIiY1NDYzITIWFRQGIwF7IhISIgH7IRIRIgGiGg8QGRkQDxoAAAAAAQDuAaED6wH3AA0AH0AcAAEAAAFXAAEBAF8CAQABAE8BAAgFAA0BDAMIFisBIiY1NDYzITIWFRQGIwEbFhcXFgKjFxYWFwGhGxARGhoREBsAAAAAAQCaAb8EPwIVAA0AH0AcAAEAAAFXAAEBAF8CAQABAE8BAAgFAA0BDAMIFisTIiY1NDYzITIWFRQGI8cWFxcWA0sXFhYXAb8bEBEaGhEQGwABAMQAAAQVAFsADQAnsQZkREAcAAEAAAFXAAEBAF8CAQABAE8BAAgFAA0BDAMIFiuxBgBEMyImNTQ2MyEyFhUUBiPxFhcXFgL3FxYWFx0RERwcEREdAAAAAQHk/3ADAgUEABkAHkAbFwEAAQFMAAEAAYUCAQAAdgEACwkAGQEZAwgWKwUiJyYCNTQSNzYzMhYVFAcGAhUUEhcWFRQGAtMSDWtlZWsNEhIdBl5cXF4GHZARjQFY1NQBWI0RHhAICG/+o8DA/qNvBwkQHgABAeT/cAMCBQQAGQAeQBsNAQABAUwAAQABhQIBAAB2AQARDwAZARkDCBYrBSImNTQ3NhI1NAInJjU0NjMyFxYSFRQCBwYCExIdBl9bW18GHRISDWtlZWsNkB4QCQdvAV3AwAFdbwgIEB4Rjf6o1NT+qI0RAAEBiv8dA3gE9gA7AD1AOiwBAQIBTAADAAQCAwRpAAIAAQUCAWkABQAABVkABQUAYQYBAAUAUQEANjUjIRwbEhAMCgA7ATsHCBYrBSImJjU0NjY1NCYjIiY1NDYzMjY1NCYmNTQ2NjMyFhUUBiMiBhUUFhYVFAYHFhYVFAYGFRQWMzIWFRQGA1yhmC0fHzFKFhkWGUoxHx8tmKEODg4OlHMeHhdCQhceHnOUDg4O4zVpTUiAdzomLCcXFSMjJTp3gUdOaTUaEBAaNko7iIxBLkkND1AuQI2IO0k3GhAQGgAAAQF//x0DbQT2ADsAPEA5EAEEAwFMAAIAAQMCAWkAAwAEAAMEaQAABQUAWQAAAAVhBgEFAAVRAAAAOwA7MjAsKiEfGhklBwgXKwUiJjU0NjMyNjU0JiY1NDY3JiY1NDY2NTQmIyImNTQ2MzIWFhUUBgYVFBYzMhYVFAYjIgYVFBYWFRQGBgGbDg4ODpRzHh4XQkIXHh5zlA4ODg6hmC0fHzJJFxgWGUkyHx8tmOMaEBAaN0k7iI1ALkkND1AuQYyIO0o2GhAQGjVoTkeBdzolLScXFSMiJjp3gEhNajUAAAABAgP/bAM+BTMAFQArQCgAAQACAwECZwADAAADVwADAwBfBAEAAwBPAQAPDg0LBgQAFQEUBQgWKwUiNRE0MzMyFhUUBiMjETMyFhUUBiMCOjc36A4ODg6/vw4ODg6UOgVQPRoQEBr64RoQEBoAAAAAAQGo/2wC4wUzABUAKEAlAAIAAQACAWcAAAMDAFcAAAADXwQBAwADTwAAABUAFDURJQUIGSsFIiY1NDYzMxEjIiY1NDYzMzIVERQjAcQODg4Ov78ODg4O6Dc3lBoQEBoFHxoQEBo6+rA9AAAAAQH5/y4C2AC0ABYAE0AQAAEBAGEAAAAbAE4kGAIIGCsFIiY1NDc2NjUiJjU0NjMyFhUUBgYHBgIVChIMIE0sQD8jLUM6VikD0hEKDAkXVS4sMTAvPTw6a1EVAgACAcT/FgMSAO0ACwAXADZAMxYVDgoJAgYAAQFMAwEBAAABWQMBAQEAYQUCBAMAAQBRDQwBABMRDBcNFwcFAAsBCwYIFisFIicDJjYzMhYVAwYjIicDJjYzMhYVAwYC2BgBIAIlFhYkIgHxFwEgAiUWFiQiAeoUAYwcGxkZ/m8UFAGMHBsZGf5vFAAAAAIBUQMGA1gEowAXAC8AK0AoAwEBAAABWQMBAQEAYQUCBAMAAQBRGRgBACsqGC8ZLxMSABcBFwYIFisBIiY1NDY2NzYzMhYVFAcOAhUyFhUUBiEiJjU0NjY3NjMyFhUUBw4CFTIWFRQGAuktQzpWKQMHCxEMFTMlLEA//rUtQzpWKQMHCxEMFTMlLEA/AwY9PDp2XhQCEAsMCQ89Rh8sMTAvPTw6dl4UAhALDAkPPUYfLDEwLwAAAAACAWIDBgNpBKMAFwAvABlAFgIBAAABYQMBAQEgAE4oJiIhJBkECBgrASImNTQ3PgI1IiY1NDYzMhYVFAYGBwYhIiY1NDc+AjUiJjU0NjMyFhUUBgYHBgKmChIMFjIlLEA/Iy1DOlYpA/7RChIMFjIlLEA/Iy1DOlYpAwMGEQoMCRA8Rh8sMTAvPTw6dl0VAhEKDAkQPEYfLDEwLz08OnZdFQIAAAECCQMGAugEowAXAB9AHAABAAABWQABAQBhAgEAAQBRAQATEgAXARcDCBYrASImNTQ2Njc2MzIWFRQHDgIVMhYVFAYCeS1DOlYpAwcLEQwVMyUsQD8DBj08OnZeFAIQCwwJDz1GHywxMC8AAAECGgMGAvkEowAXABNAEAAAAAFhAAEBIABOJBkCCBgrASImNTQ3PgI1IiY1NDYzMhYVFAYGBwYCNgoSDBYyJSxAPyMtQzpWKQMDBhEKDAkQPEYfLDEwLz08OnZdFQIAAAIArADKA+IDVAAUACkATbYlEAIAAQFMS7AbUFhADwUCBAMAAAFhAwEBASMAThtAFQMBAQAAAVkDAQEBAGEFAgQDAAEAUVlAExYVAQAgHhUpFikLCQAUARQGCBYrJSInASY1NDclNjMyFhUUBwUFFhUUISInASY1NDclNjMyFhUUBwUFFhUUA7wUEv6oJiYBThAOERcY/r8BSh/+bhQS/qgmJgFOEA4RFxj+vwFKH8oOAQMdGhsd/wsVDxUS9vQXGiQOAQMdGhsd/wsVDxUS9vQXGiQAAgDCAMMD+ANNABQAKQBNthsGAgABAUxLsCBQWEAPBQIEAwAAAWEDAQEBIwBOG0AVAwEBAAABWQMBAQEAYQUCBAMAAQBRWUATFhUBACEfFSkWKQwKABQBFAYIFislIiY1NDclJSY1NDMyFwEWFRQHBQYhIiY1NDclJSY1NDMyFwEWFRQHBQYCZhAYGAFB/rYfJhQSAVgmJv6yEP6GEBgYAUH+th8mFBIBWCYm/rIQwxUPFRL29BcaJA7+/R0aGx3/CxUPFRL29BcaJA7+/R0aGx3/CwABAM8A0gOdA00AFQAWQBMTEAIASgEBAAB2AAAAFQAVAggWKyUiJwEmNTQ3ATYzMhYVFAcFBRYVFAYDcg0P/aQrKwJSCQsSGSH93AItKhfSBgEDEiUlEgEABBgQGg7q6hMeDxcAAQESAM0D4ANIABUAILUJBgADAElLsCVQWLUAAAAjAE4bswAAAHZZsysBCBcrJSImNTQ3JSUmNTQ2MzIXARYVFAcBBgFPEhkhAiT90yoYEw0PAlwrK/2uCc0YEBoO6uoTHg8XBv79EiUlEv8ABAAAAAIBxAK9AxIElAALABcAMEAtFhUOCgkCBgABAUwFAgQDAAABYQMBAQEaAE4NDAEAExEMFw0XBwUACwELBggWKwEiJwMmNjMyFhUDBiMiJwMmNjMyFhUDBgLYGAEgAiUWFiQiAfAYASACJRYWJCIBAr0UAYwcGxkZ/m8UFAGMHBsZGf5vFAAAAAABAjECvQKmBJQACwAiQB8KCQIDAAEBTAIBAAABYQABARoATgEABwUACwELAwgWKwEiJwMmNjMyFhUDBgJsGAEgAiUWFiQiAQK9FAGMHBsZGf5vFAABAQP/LQQTBKQANQB6tSQBBgUBTEuwJ1BYQCcAAgEAAQIAgAABCQEAAQBlAAYGBWEABQUgTQgBAwMEXwcBBAQdA04bQCUAAgEAAQIAgAcBBAgBAwEEA2cAAQkBAAEAZQAGBgVhAAUFIAZOWUAZAQAwLiopIR8aGBUTDw4LCgcFADUBNQoIFisFIjc3NjYzMhYHBzI2NxMjIiY1NDMzNzY2MzIWBwcGBiMiJjc3DgIHBzMyFhUUIyMDDgMBKCUDCwIcDw4WAQhAbAo2kREQJJUGEcG4FSICCgEfEg8aAQhJbUMKBqoPDiWpNghDYmvTJYMPDwwLZUdwAoQYDy1AtakYFnoPDwwMaAYucm9DFQ4x/X5aaTIOAAAAAgBT/4wEtQRLAEQAUQCNQAwiIRQDBQk8AQcCAkxLsCdQWEAmAAEABgQBBmkLCAIFAwECBwUCaQAHCgEABwBlAAkJBGEABAQdCU4bQCwAAQAGBAEGaQAEAAkFBAlpCwgCBQMBAgcFAmkABwAAB1kABwcAYQoBAAcAUVlAH0dFAQBNS0VRR1E4Ni8tJyUeHBgWEhAKCABEAUMMCBYrBSImJjU0PgIzMhYWFRQGBiMiJicGBiMiJjU0NjMyFhYXAwYVFjMyNjY1NCYmIyIOAhUUFhYzMjY3NjMyFhUUBwYGIwMzMjY1NCYjIgYVFBYCibv8f1Sg4o6T54Q1fGkzOg8jXjBQgH9qRlw5Dh0BBkZOTRptuHN2vYVGZsyZWpouCg0RExNWm1YUAWBDNVpTRUN0n/6OeOu/cnvmoWqxbDc3OziSg5KkMz8U/tQFCjproVF7sF9kp81oedaGMhcFGA4VDDYkAXuegUxKkl5PdgAAAAADALr/4ASBBKUARABRAGMB2EuwCVBYQBcTAQQGWiECAwReVTwlBQUHA0IBAAcETBtLsA5QWEAXEwEEBlohAgMEXlU8JQUFBwNCAQEHBEwbS7ARUFhAFxMBBAZaIQIDBF5VPCUFBQcDQgEABwRMG0uwGFBYQBcTAQQGWiECAwReVTwlBQUHA0IBAQcETBtLsBtQWEAXEwEEBlohAgMEXlU8JQUFBwNCAQAHBEwbQBcTAQQGWiECAwReVTwlBQUHA0IBAQcETFlZWVlZS7AJUFhAIQAEBQEDBwQDaQAGBgJhAAICIE0JAQcHAGEBCAIAACEAThtLsA5QWEAlAAQFAQMHBANpAAYGAmEAAgIgTQkBBwcBYQABASFNCAEAACEAThtLsBFQWEAhAAQFAQMHBANpAAYGAmEAAgIgTQkBBwcAYQEIAgAAIQBOG0uwGFBYQCUABAUBAwcEA2kABgYCYQACAiBNCQEHBwFhAAEBIU0IAQAAIQBOG0uwG1BYQCEABAUBAwcEA2kABgYCYQACAiBNCQEHBwBhAQgCAAAhAE4bQCUABAUBAwcEA2kABgYCYQACAiBNCQEHBwFhAAEBIU0IAQAAIQBOWVlZWVlAG1NSAQBSY1NjTUs4NjEvKikbGQkHAEQBRAoIFisFIicmJicGBiMiJjU0NDc+AzcuAjU0NjMyFhUUBgYHHgIXPgI3IyImNTQ2MyEyFhUUBiMjDgIHHgIXFhUUBgE+AjU0JiMiBhUUFhMyNjcuAycOAgcGFBUUFgQuCQolcjU9oXeQsAEEOU5JFB1EL39tdIVLaS4mcnYtHTooAoQQEhAQARIREhITOwMzRB4aSkUSGBz9pyRXP2M1M2NKSFaVLSdhX00UG1ZFBAGNIAUUYytEU5WLCA8IOWhYQBAnY283cYyPcU12WSU2jH8lHGZyLhsQDxgaDxAZQHxuKxY+Nw0QFxEbAsYaTmE0Yk5KWUCS/WNKNSBmcWIbFVVlLgcPB3ZjAAAAAAIA6AAABFgEkwAZAB0AOEA1AAIGAQYCAYAABgYDXwADAxpNBQQCAQEAXwcBAAAbAE4BAB0cGxoUEhEPCQgHBQAZARgICBYrISImNTQ2MzMRIiYmNTQ2NjMhETMyFhUUBiMlMxEjAU0UFRMU0WKKSEWObwFQtxQTFRT+TZ6eGxAPGAIRVoZIRHtN+78YDxAbUgPvAAACAYr/7wNIBKYAPQBNAENAQEY4GQMBBAFMAAQFAQUEAYAAAQIFAQJ+AAUFA2EAAwMgTQACAgBhBgEAACEATgEAKykmJCAeDAoHBQA9AT0HCBYrBSImJjU0MzIXFhYzMjY1NCcmJicmJjU0NjcmJjU0NjMyFhYVFCMiJyYmIyIGFRQXFhYXFhYVFAYHFhYVFAYTNjY1NCcmJicGBhUUFxYWAl8xYkIpIwsOPC4tQhYndC8dMy8tGS9yVTFiQiglCg4+LixCFyZ0MB0yLywYLm8FExMXImEuExMWI2ERJEIuKB8lLzUrLCZCazokWzs4YxUjWTZRaCRDLicfJi41LCsmQms7JFo7OGMVIls1UmcBmA81GSQoPmg4EDQYJic9agADADAADQSpBIYACwAXAEUAdrEGZERAayMBCAUqIgIHCAJMAAoHCQcKCYAAAQADBQEDaQAIBwUIWQYBBQAHCgUHaQAJDQEEAgkEaQwBAgAAAlkMAQICAGILAQACAFIZGA0MAQA9Ozg2MjAuLCclIB4YRRlFExEMFw0XBwUACwELDggWK7EGAEQlIAAREAAhIAAREAAlMhI1NAIjIgIVFBI3IiY1NDY2MzIWFzU0NjMyFhUVFAYjIicmIyIGFRQWMzI2NzYzMhYVFAYVDgICbP7x/tMBLQEPARABLf7S/vHz+vvy8vr5+pO7WZlgSnEYFAsLExELFggvp3aMkW1adx4JEwsTAQtNfA0BKAEQARABMf7P/vD+8P7YRgEG7u8BC/707u7++pXEqGaeWj8sRg4PDw+yDQ4bmqV6kJtTSxQPDAEDAjFhQQAABAAwAA0EqQSGAAsAFwBNAFcAd7EGZERAbC8BCg0BTAABAAMGAQNpAAYOAQUNBgVpAA0ACgQNCmkLCQcDBBEMAggCBAhnEAECAAACWRABAgIAYQ8BAAIAURgYDQwBAFdVUE4YTRhMR0ZFQj89ODYyMCkmISAfHRMRDBcNFwcFAAsBCxIIFiuxBgBEJSAAERAAISAAERAAJTISNTQCIyICFRQSNyImNTQ2MzMRIyImNTQ2MzMyFhYVFAYHEzMyFhUUBiMjIiY1NDYzMwMOAiMjETMyFhUUBiMDMzI2NjU0JiMjAmz+8f7TAS0BDwEQAS3+0v7x8/r78vL6+QMODw8NQDAODg4PtlJ6RUYsaCUWDxAUkw8ODg0dWAMsMQ4vWw4ODg5bOzBfP3FmMg0BKAEQARABMf7P/vD+8P7YRgEG7u8BC/707u7++qITCQoSAkETCgoUG1FQRE0R/uISCQoTEwoJEgERAQUD/vgSCgkTAXoMMztaKwAAAAIAQAJGBGoElQA4AFwAw0AWCgEBAk4xKwMNAREBCA1ZNSADBgAETEuwEFBYQDoPAQ0BCAENcgAIAAEIAH4OAwICEAwEAwENAgFpEQsJBwUFAAYGAFkRCwkHBQUAAAZfFBITCgQGAAZPG0A7DwENAQgBDQiAAAgAAQgAfg4DAgIQDAQDAQ0CAWkRCwkHBQUABgYAWRELCQcFBQAABl8UEhMKBAYABk9ZQCg5OQAAOVw5W1hWVVRSUExJRENBQD89ADgANzQyIyQjISQmIyEkFQYfKwEiJjU0MzMRIyI1NDYzMzIXExM2NjMzMhYVFCMjETMyFRQGIyMiJjU0MzMRBwYjIicDETMyFRQGIyEiJjU0MzMRIwcGIyImNTc2MyEyFxcUBiMiJycjETMyFRQGIwIUDQ4aPyscDw1fEQiOmQUKClwODRspPhoNDrcNDhozeggbGgdxMRsODv3YDQ4bP1MKAxwNGQYBFQFcFgIFGgwbAwxSPBoNDgJGFg4mAbsnDhUV/tIBMQgKFQ4n/kUmDhYWDiYBV/sbGAEE/qMmDhYWDiYBuoUcEw+qICCqDxMchf5GJg4WAAAAAgHAAm8DtgRhAA8AGwA5sQZkREAuAAEAAwIBA2kFAQIAAAJZBQECAgBhBAEAAgBRERABABcVEBsRGwkHAA8BDwYIFiuxBgBEASImJjU0NjYzMhYWFRQGBicyNjU0JiMiBhUUFgK6U284OnJTU203OXBKR0NHSEhGTgJvR3E9P3RKSHE/PnNJYFo9PlxcPj1aAAAAAAECf/+QAvcE6QALAB5AGwgBAAEBTAABAAGFAgEAAHYBAAcFAAsBCwMIFisFIjURNDYzMhcRFAYCuzwnFzUFKHA4BPAZGDH7BRYXAAACAkH/rwKYBLMADQAbAF1ADAsEAgABGRICAgMCTEuwLFBYQBQAAwUBAgMCZQQBAAABYQABASAAThtAGgABBAEAAwEAaQADAgIDWQADAwJhBQECAwJRWUATDw4BABYUDhsPGwgGAA0BDQYIFisBIiY1ETQ2MzIWFREUBgMiJjURNDYzMhYVERQGAm0QHBwQEBsbEBAcHBAQGxsCpw0MAdQQDw8Q/iwMDf0IDA0B1BAPDxD+LA0MAAAAAQEo/5ADsQTBAB0AfbURAQIDAUxLsBhQWEAYBgEAAQCGAAMDIE0FAQEBAl8EAQICHQFOG0uwG1BYQBYGAQABAIYEAQIFAQEAAgFnAAMDIANOG0AeAAMCA4UGAQABAIYEAQIBAQJXBAECAgFfBQEBAgFPWVlAEwEAGhgUEg8NCwkFAwAdAR0HCBYrBSI1ESMiJjU0NjMzETQzMhYXETMyFhUUBiMjERQGAnMw7hYXFxbuMRkUAuEXFhYX4RxwOAMjDhYXCwFfMRoX/qELFxYO/NIWFwABAVD/kAOJBMEALwCjtRoBBAUBTEuwGFBYQCIKAQABAIYIAQIJAQEAAgFnAAUFIE0HAQMDBF8GAQQEHQNOG0uwG1BYQCAKAQABAIYGAQQHAQMCBANnCAECCQEBAAIBZwAFBSAFThtAKAAFBAWFCgEAAQCGBgEEBwEDAgQDZwgBAgEBAlcIAQICAV8JAQECAU9ZWUAbAQAsKiYkIyEdGxgWFBIODAsJBQMALwEvCwgWKwUiNREjIiY1NDYzMxEjIiY1NDYzMxE0MzIWFxEzMhYVFAYjIxEzMhYVFAYjIxEUBgJzMMYWFxcWxsYWFxcWxjEZFAK5FxYWF7m5FxYWF7kccDgBTQ0WFwwBkA4WFwsBXzEaF/6hCxcWDv5wDBcWDf6oFhcAAgC3/xQD0wPeAC8ANgCRS7AnUFhAMwADAgOFAAUGCAYFCIAACAcGCAd+DAEAAQCGCwEGBgJhBAECAiNNCgEHBwFhCQEBASEBThtAMQADAgOFAAUGCAYFCIAACAcGCAd+DAEAAQCGBAECCwEGBQIGaQoBBwcBYQkBAQEhAU5ZQB8BADU0MzIsKyYkISAfHhoYFBMQDgsKBQQALwEvDQgWKwUiJjU1JiY1NDY2NzU0NjMyFhUVFhYVFAYjIiYnJiYnETY2NzYzMhUUBwYGBxUUBgEUFhcRBgYCehIJvupywHYJEhMHi7QdHyQTCzNeME9uNREYIxIzrUwJ/oy3kZys7BYYrQjfwXuyYwWLFBMREY8Fc4EiLm9bGRMB/WcFNDEQKRYUNz0FrRQbAoOpqAUCmQuqAAACATgBAAOVA10ALAA4AF9AExYQAgMAIBwKBQQCAywmAgECA0xLsCdQWEATBAECAAECAWUAAwMAYQAAACMDThtAGgAAAAMCAANpBAECAQECWQQBAgIBYQABAgFRWUAPLi00Mi04LjgqKBQSBQgWKwEGJiY3NyYmNTQ3JyY2NhcXNjYzMhYXNzYWFgcHFhUUBxcWBgYnJwYGIyImJzcyNjU0JiMiBhUUFgFzDyELEFYbGjVWEAwhD1UfTzEyTh5UECALEFQuNVoQCx8RWR5PMC5NHZ1cXVxeXltgAQ8PCiAQViFSK1tEVhAfCxBVFxwbGFMQCyEQVEFXWkRaDyEKEFkWGxgVCnBQUHR0UE9xAAAAAAMBDP9ZBCEFQABLAFQAXAB3QHQjAQgCNjMmAwUIVk03EAQBBUoPAgkBRwEACUABBwAGTAADAgOFAAcAB4YACAgCYQQBAgIgTQAFBQJhBAECAiBNAAEBAGEGCgIAACFNAAkJAGEGCgIAACEATgEAWFdPTkRCPz4wLiknIB4ZGAgGAEsBSwsIFisFIiY1ETQ2MzIWFRUUFhYXEScuAjU0NjYzMjM1NDYzMhYVFRYWFzQzMhYVFRQGIyImNTUmJicRFxYWFRQGBgcVFAYjIiY1NSYmJxQTFxEGBhUUFhYXJxE2NjU0JgE8GRcaEhIcUIBKSU+BTV6dXgcGFQ0MFTpyJjQUFBsTERwIf0wskqBioFwVDA0VSpwv/Bl8ijNpxRholngRHysBOhgXGBl3Jkw4CAHpGRtCblxkiEaADg8PDoQGKCpcHyf9GxoYF1tCSQn+Mw8yh4BzjUIDfA0NDQ1/CD0yegKtCQG6AnRhRUovpgj+KwNsfGFcAAABADz/7wRJBKMAUQIdtRsBBwgBTEuwCVBYQEAADgENAQ4NgAsBAgwBAQ4CAWkACAgFYQYBBQUgTQAHBwVhBgEFBSBNCgEDAwRhCQEEBB1NAA0NAGEPAQAAIQBOG0uwDlBYQD4ADgENAQ4NgAsBAgwBAQ4CAWkACAgFYQAFBSBNAAcHBmEABgYaTQoBAwMEYQkBBAQdTQANDQBhDwEAACEAThtLsBFQWEBAAA4BDQEODYALAQIMAQEOAgFpAAgIBWEGAQUFIE0ABwcFYQYBBQUgTQoBAwMEYQkBBAQdTQANDQBhDwEAACEAThtLsBhQWEA+AA4BDQEODYALAQIMAQEOAgFpAAgIBWEABQUgTQAHBwZhAAYGGk0KAQMDBGEJAQQEHU0ADQ0AYQ8BAAAhAE4bS7AbUFhAQAAOAQ0BDg2ACwECDAEBDgIBaQAICAVhBgEFBSBNAAcHBWEGAQUFIE0KAQMDBGEJAQQEHU0ADQ0AYQ8BAAAhAE4bS7AdUFhAPgAOAQ0BDg2ACwECDAEBDgIBaQAICAVhAAUFIE0ABwcGYQAGBhpNCgEDAwRhCQEEBB1NAA0NAGEPAQAAIQBOG0A8AA4BDQEODYAJAQQKAQMCBANpCwECDAEBDgIBaQAICAVhAAUFIE0ABwcGYQAGBhpNAA0NAGEPAQAAIQBOWVlZWVlZQCUBAEhHREJAPjw6NDIwLiwqJyUgHhkXFRMREAkHBQMAUQFREAgWKwUiJicjIjU0MzMmJjU0NDcjIjU0MzM2NjMyFhc1NDYzMhYVERQGIyInJiYjIgYHMzIVFCMjBgYVFBYXMzIVFCMjFhYzMjY3NjMyFhUUBw4DApPB6yNPOTlFAgIBQjk5Sh/2yHeRKB8SEx4dESQIF5iGrLkayTc30QEBAgLPNzfEIL+QkaIxChwRGgIVPGGVEe7QJScZMxoOGw0nJ83zYkpqGRkZGv7bGBcve5fIoicnDx4QGS8XJyWtu4+QHBYPAwg9fWg/AAIA+v/vBBcEoABUAGEAckBvDwELDV5YRwMECgsCTAAGBwQHBgSAAAsNCg0LCoAIAQQJAQMCBANnAAIADQsCDWkABwcFYQAFBSBNDwwCCgoAYQEOAgAAIQBOVlUBAFxaVWFWYU9NSklAPjk4MzEtLCUjHRsWFQ0LBwUAVAFUEAgWKwUiJicGBiMiJjU0NjMyFhc2NTQmJicjIiY1NDYzMyYmNTQ2NjMyFhcWFhUUBiMiLgIjIgYVFBYXMzIWFRQGIyMeAhUUBgcWFjMyNjYzMhYVFAYGJTI2NyYmIyIGBxUUFgNQVWxEMGQsPVRQPCpgLgwfOimpDA0LDI4WNFKHT1mDKgsLMyETGiM+OEZ7KRfrDAwNDM0JPDYNETlpQg0iLh4UID1b/hUaQSQrQxkfIgIpESwtLipORDRFKjAXLTWPjjMZDw4XNGVJT3ZCHjINEhQiKiw5K15oPnQyGA4OGRlsj08iRCEuHSsrJBUuKgtBHyUpIigXBh8rAAAAAQB8AAAEXASTAFQAYUBeKgEFBgFMDAEFDQEEAwUEZw4BAw8BAgEDAmcLCQgDBgYHXwoBBwcaTRABAQEAXxEBAAAbAE4BAE9NTEpGRENBPTs6ODQxLSspJyMgHBoZFxMREA4KCAcFAFQBUxIIFishIiY1NDYzITUhIiY1NDYzITUhIiY1NDYzIQEjIiY1NDYzITIWFRQGIyMBASMiJjU0NjMhMhYVFAYjIwEzMhYVFAYjIRUhMhYVFAYjIRUzMhYVFAYjAU4ZGxkZAQX+7RkODhkBE/7tGQ4OGQEE/sBUGRkaGQFKGhkZGYgBFAEMbxkZGhkBBRoZGBk3/s/5GQ4OGf71AQsZDg4Z/vXoGBgZGRwQEBrTFw0OFokXDQ4WAgUYDg4YGA4OGP4yAc4YDg4YGQ4OF/37Fg4NF4kWDg0X0xoQEBwAAQDz/xMD5QSVAA8AF0AUAAABAIUCAQEBdgAAAA8ADxcDBhcrBSImNTQ3ATYzMhYVFAcBBgEiER4EApsLGhEdBv1oDe0YEgkIBTIVFRIJDPrSGAAAAQERAI8DxwNYAB8AUkuwGFBYQBYEAQIFAQEAAgFnBgEAAANhAAMDIwBOG0AbAAMCAANZBAECBQEBAAIBZwADAwBhBgEAAwBRWUATAQAcGhYUEQ8MCgYEAB8BHwcIFislIiY1ESEiJjU0NjMhETQ2MzIWFREzMhYVFAYjIxEUBgJtEh7+/xgTExgBAR4SEh7/GRISGf8ejxoaAQUZEA8aAQoaGhoa/vYaDxAZ/vsaGgABASoBoQOvAfcADQAfQBwAAQAAAVcAAQEAXwIBAAEATwEACAUADQEMAwYWKwEiJjU0NjMhMhYVFAYjAVcWFxcWAisXFhYXAaEbEBEaGhEQGwAAAAABAa4A2gPJAvUAIwBKQAkhGA8GBAABAUxLsCdQWEAOAwQCAAABYQIBAQEdAE4bQBQCAQEAAAFZAgEBAQBhAwQCAAEAUVlADwEAHx0TEQ0LACMBIwUIFislIiY1NDc3JyY1NDYzMhcXNzYzMhYVFAcHFxYVFAYjIicnBwYB4BQeD7e3Dx4UFQ+3uA8VFB4PuLgPHhQVD7i3D9oeFBQPubcPFRQeD7i4Dx4UFQ+3uQ8UFB4PuLgPAAAAAwEtAMEDqwOJAAsAGQAlAEFAPgABBgEAAwEAaQADBwECBQMCZwAFBAQFWQAFBQRhCAEEBQRRGxoNDAEAIR8aJRslFBEMGQ0YBwUACwELCQgWKwEiJjU0NjMyFhUUBgUiJjU0NjMhMhYVFAYjASImNTQ2MzIWFRQGAmoiMjIiIy8v/s4WGBYYAiMXFhYX/uwiMjIiIy8vAuUwIiMvLyMiMO8eExIbHBMTHP7LMiIjLy8jIjIAAgEoAQADsQKxAA0AGwAwQC0AAQQBAAMBAGcAAwICA1cAAwMCXwUBAgMCTw8OAQAWEw4bDxoIBQANAQwGCBYrASImNTQ2MyEyFhUUBiMBIiY1NDYzITIWFRQGIwFVFhcXFgIvFxYWF/3RFhcXFgIvFxYWFwJWHRERHBwRER3+qh0RERwcEREdAAEBEv/EA68DxgAzAKRLsAlQWEAqAAQDAwRwCgEJAAAJcQUBAwYBAgEDAmgHAQEAAAFXBwEBAQBfCAEAAQBPG0uwClBYQCkABAMDBHAKAQkACYYFAQMGAQIBAwJoBwEBAAABVwcBAQEAXwgBAAEATxtAKAAEAwSFCgEJAAmGBQEDBgECAQMCaAcBAQAAAVcHAQEBAF8IAQABAE9ZWUASAAAAMwAzJCEkJhIkISQmCwYfKwUiJjU0NxMjIiY1NDYzMzchIiY1NDYzIRM2MzIWFRQHBzMyFhUUBiMjByEyFhUUBiMhAwYBfBEeBYCTFhcXFsF+/ssWFxcWAWKACxoRHQZsdhcWFhekfQEXFxYWF/68kg08GBEICgEBHRERHPsdEREcAQAVFRIJDNkcEREd+xwRER3+3BgAAAEAwACEBIQDyAAXABBADQkGAgBJAAAAdisBCBcrNyImNTQ3AQEmNTQ2MzIXARYWFRQGBwEG/BEbFQMp/M0bGhIHBwNwDQ0ODPycBoQjExgIAUgBTQsbEyAD/pYFHxESIAX+lwIAAAAAAQA9AIQEAQPIABcAFkATFRICAEoBAQAAdgEAABcBFwIIFislIicBJiY1NDY3ATYzMhYVFAcBARYVFAYD1QYI/JANDQ4MA2QGBBEbFfzXAzMbGoQDAWoFHxESIAUBaQIjExgI/rj+swsbEyAAAgC1AAAEAQOCABcAJQAsQCkJBgICAAFMAAACAIUAAgEBAlcAAgIBXwMBAQIBTxkYIB0YJRkkKwQGFys3IiY1NDcBASY1NDYzMhcBFhYVFAYHAQYHIiY1NDYzITIWFRQGI+ESGhsCu/1PFRsRBAYC7AwODQ39CAcEFhcXFgLLFxYWF8ogExkNAQcBAgoWEyMC/t0EIRIRHwX+3APKGxARGhoREBsAAAAAAgC1AAAEAQOCABcAJQAwQC0VEgIASgMBAAIAhQACAQECVwACAgFfBAEBAgFPGRgBACAdGCUZJAAXARcFBhYrJSInASYmNTQ2NwE2MzIWFRQHAQEWFRQGBSImNTQ2MyEyFhUUBiMD1QYI/QgNDQ4MAuwGBBEbFf1PArsbGv0MFhcXFgLLFxYWF8oDASQFHxESIQQBIwIjExgI/v7++QkdEyDKGxARGhoREBsAAAIBEQAAA8cDWAAfAC0AaUuwGFBYQCEEAQIFAQEAAgFnCAEAAANhAAMDI00ABwcGXwkBBgYbBk4bQB8EAQIFAQEAAgFnAAMIAQAHAwBpAAcHBl8JAQYGGwZOWUAbISABACglIC0hLBwaFhQRDwwKBgQAHwEfCggWKyUiJjU1ISImNTQ2MyE1NDYzMhYVFTMyFhUUBiMjFRQGBSImNTQ2MyEyFhUUBiMCbRIe/v8YExMYAQEeEhIe/xkSEhn/Hv69GRISGQJgGRITGLcaGvEZEA8a9hoaGhr2Gg8QGfEaGrcZEA8aGg8QGQACATACDwOoA5gAIQBDAFpAVxoBAQIJAQADPAEHBisBBAUETAACAAEDAgFpAAMIAQAGAwBpAAcFBAdZAAYABQQGBWkABwcEYQkBBAcEUSMiAQA4NjQyJyUiQyNDFhQSEAUDACEBIQoGFisBIiYmIyIGBwYjIiY1NDc2NjMyFhYzMjY3NjMyFhUUBwYGByImJiMiBgcGIyImNTQ3NjYzMhYWMzI2NzYzMhYVFAcGBgL8NGljLBwyFAYNDh0BIVQuNW5oLBwuEQUMDyIBKFYtNGljLBwyFAYNDh0BIVQuNW5oLBwuEQUMDyIBKFYC4y4uHSQKFAoEAUo3LC0bIQkYCwMBRTXULi0dJAoUCgQBSjcsLBohCRgLAwFFNAAAAAEBXgKmBBgDmgAcAJixBmRES7AlUFhAGwUBAwABBAMBaQAEAAAEWQAEBABhAgYCAAQAURtLsCdQWEAiAAUDAQMFAYAAAwABBAMBaQAEAAAEWQAEBABhAgYCAAQAURtAKQAFAwEDBQGAAAIEAAQCAIAAAwABBAMBaQAEAgAEWQAEBABhBgEABABRWVlAEwEAGBYTEQ8NCAcFAwAcARwHCBYrsQYARAEiJiYjIgYGIyImNTQ2MzIWFjMyPgIzMhYVFAYDaEKAcSwoJhcUEx9ZPlKGZB0kKxwaExQeZgKmPj03NxETVW4+PiEsIRETVW0AAAEA/ACeA5YCIgARAEhLsAlQWEAXAwEAAQEAcQACAQECVwACAgFfAAECAU8bQBYDAQABAIYAAgEBAlcAAgIBXwABAgFPWUANAQANCgYEABEBEQQIFislIiY1NSEiJjU0NjMhMhURFAYDZBId/fgbFhcaAi08H54aGvoaEBEbOv7uHBwAAAEBPAGHA5wD+gAZACixBmREQB0XAwIBAAFMAAABAIUDAgIBAXYAAAAZABknKQQIGCuxBgBEASImNTQ2NxM2NjMyFhcTFhUUBiMiJicDAwYBZBAYBAbwDx4ODhsO7gYdExAXBszeEQGHGBUJFQsB5x8XEx7+AxAIExoTDAG1/k8jAAAAAAMAhAHWBFQDWQAbACkANwBNQEo0IBgKBAQFAUwCAQEHAQUEAQVpCgYJAwQAAARZCgYJAwQEAGEDCAIABABRKyodHAEAMS8qNys3JSMcKR0pFRMPDQcFABsBGwsGFisBIiY1NDYzMhYWFz4CMzIWFRQGIyImJicOAicyNjY3LgIjIgYVFBYhMjY1NCYjIgYGBx4CATpbW1pZO3NkIyRjcztZWltbOnNjIiJjciocV1ogIFpXHDIzMwJ0MjMyMxxXWSEhWVcB1npJSHgsOBISOCx4SUl5KjcSEjcqWSgzDg8yJ0InJ0FBKCdBJzIPDjMoAAEBB/8tBBMEpAAmAD9APB0BBAMDAQACAkwAAgEAAQIAgAADAAQBAwRpAAECAAFZAAEBAGEFAQABAFEBABoYExEMCwgGACYBJgYGFisFIiY1NzY2MzIWBwcyNjcTNjYzMhYHBwYGIyImNTcOAgcDDgMBMhoRCgIcDw4XAghAbApDD8O4FSICCgEfEg8ZCEltQwpDCENgZtMYGnYPDw0PYEdwAxi1qRgWeg8PDAxoBi5yb/znWmkyDgACASsBTQOtBAgAEgAVADBALRUBAgEDAQACAkwAAQIBhQACAAACVwACAgBfAwEAAgBPAQAUEwoIABIBEQQGFisBIiY1NDcTNjYzMhYXExYVFAYjJSEDAWwZKAfwCyYdGyUJ7gYdE/4mAafLAU0jGg0PAh4aKikW/ccQCBMYSQH6AAEAXQAABHsEkwAxAEBAPQADCAQCAgEDAmkJBwUDAQAAAVkJBwUDAQEAXwYKAgABAE8BACwqKSgnJSEeGhgXFREOCggHBQAxATALBhYrMyImNTQ2MzMRIyImNTQ2MyEyFhUUBiMjETMyFhUUBiMhIiY1NDYzMxEhETMyFhUUBiOPGRkYGHxsGRkZGQOsGRkZGWRkGRkZGf7aGRkYGGT95GQYGBkZHBAQGgPnGxAQGxoPERz8GRoREBscEBAaA+f8GRkPER0AAAAAAQBt/qkEhAMmADUAYUAOMiECAQIBTCwWFQMEAkpLsCVQWEAXAAIBAoUAAQEDYQQBAwMbTQUBAAAfAE4bQBsAAgEChQADAxtNAAEBBGEABAQhTQUBAAAfAE5ZQBEBADAuKikjIhIQADUBNQYIFisBIjURBwYmNTQ3NzYWFREUFjMyNjY3EQcGJjU0Nzc2FhURNzIWFRQGBwciJycGBiMiJicTFgYBRzljIR0krxgWYGQ7e2QWZR8eJrIVFZoVExMTwSwDBSutYElxJjAHLP6pVwPCFQchEB8HIwUXDv4DU28sSy8B2xUGHxAgByQFGA79VQsVDg4cAhQyV0BXLyn+sC0hAAAEAIX/DQRLBIoAJgAzAEEATwBpQGYKBQIBAwIBAAcCTAsBAAcAhgADBgEBBQMBaQwBBQACCgUCaQAIAAoJCAppAAQEGk0OAQkJB2ENAQcHIQdOQ0I1NCgnAQBKSEJPQ088OjRBNUEvLSczKDMfHhoXEhAJBwAmASYPCBYrBSI1NDcBBgYjIicWFhcUBgYjIiY1NDY2MzMyNjY3NjMyFhUUBwEGAzI2NjU0JiMiBhUUFgEiJjU0NjYzMhYVDgInMjY2NTQmIyIGBhUUFgFLIwUB8y6MTzk/JiMBNV9AP1E7Z0IqbLqJIwkUDhcE/c8MTCk9ISMkPk8nAnpIQzRlSENEATRiPSk/IyAlK0EkI/MkDQsEkCIkCxdcLEOJW25LWJZbEEJLExURCwn62RwDBlByNC9Zkmo0Tv3gdk9JkmJ3SlWTWTlPdzs1UVF2NzZTAAAGADz/DQSlBIoAJgA0AEIAUABeAGwAwLUGAQACAUxLsCdQWEA4DwEEBwSGAAIGAQAFAgBpEAEFAAEMBQFpCgEIDgEMCwgMagADAxpNFA0TAwsLB2ESCREDBwchB04bQD4AAAIGBgByDwEEBwSGAAIABgUCBmkQAQUAAQwFAWkKAQgOAQwLCAxqAAMDGk0UDRMDCwsHYRIJEQMHByEHTllANWBfUlFEQzY1KCcAAGdlX2xgbFlXUV5SXktJQ1BEUD07NUI2Qi8tJzQoNAAmACYUNSYoFQgaKxciJjU0NwEGBiMjFhYVFAYGIyImNTQ2NjMzMjY2NzYzMhYVFAcBBhMyNjY1NCYjIgYGFRQWASImNTQ2NjMyFhUUBgYhIiY1NDY2MzIWFRQGBiUyNjY1NCYjIgYGFRQWITI2NjU0JiMiBgYVFBaqDhcEAa06YzIcHxw2WTZHPjljPSpKdVojCBQOGAT+FQoCJTkhHiEkPCQfAZ5FPjdiQEM7Nl8BU0U+N2JAQzs2X/44JDwjHSAmPiQgAbQkPCMdICc9JCDzFhILCQSQKhEcUi5FiltmSEudbBBCSxMXEQoI+tkcAwZVezgyRFZ8ODFD/eBrSkqaaWhJS5xqa0pKmmloSUucajlbgjkwQVl+OjFFW4I5MEFZfjoxRQAAAAIBXwAhA3kEpQAPABMAG0AYExIRCQEFAQABTAAAAQCFAAEBdhcUAgYYKyUDEzY2MzIWFxMDBgYjIiYTAxMTAiTFzQwnFBMiDMXNDCcUEyI/vLa8UwIQAgsgFxIg/fD99R8YEwQj/gz+DAH0AAIBwQPSA7UEdwALABcAM7EGZERAKAMBAQAAAVkDAQEBAGEFAgQDAAEAUQ0MAQATEQwXDRcHBQALAQsGCBYrsQYARAEiJjU0NjMyFhUUBiEiJjU0NjMyFhUUBgNjIjExIiMvL/6OIjExIiMvLwPSMCIjMDAjIjAwIiMwMCMiMAAAAQIxAogC1gMtAAsAJ7EGZERAHAABAAABWQABAQBhAgEAAQBRAQAHBQALAQsDCBYrsQYARAEiJjU0NjMyFhUUBgKEIjExIiMvLwKIMCIjMDAjIjAAAQAGA88BmgT9ABMAILEGZERAFQABAAGFAgEAAHYBAAoJABMBEwMIFiuxBgBEASInJiYnJjU0NjMyFxYWFxYVFAYBeQgEU7FQEyQWEQtGokwKEwPPBDBwMg0SFSQKPH0zBg8NFgAAAAABAfUD0gNoBRkADgAYsQZkREANCgICAEkAAAB2JgEIFyuxBgBEASI1NDcBNjMyFhUUBwUGAg0YBwEPDhEXJw7+vgQD0hYIBwEUDigVEgrqBAAAAAACASwDigOsBOUADgAdACCxBmREQBUZEQoCBAFJAAABAIUAAQF2LSYCCBgrsQYARAEiNTQ3EzYzMhYVFAcFBiEiNTQ3ATYzMhYVFAcFBgFDFwbnDhIXJg7+5gQBBxcGAQ8OEhcmDv6+BAOKFgkGASgOKBUSCv4EFgkGARQOKBUSCuoEAAABAfkDegLYBQAAFgAYQBUAAQAAAVkAAQEAYQAAAQBRJBgCBhgrASImNTQ3NjY1IiY1NDYzMhYVFAYGBwYCFQoSDCBNLEA/Iy1DOlYpAwN6EQoMCRdVLiwxMC89PDprURUCAAAAAQHdA9MDmgUoABUAJLEGZERAGRMNAgEAAUwAAQFJAAABAIUAAQF2JicCCBgrsQYARAEiJjU0NxM2MzIXExYVFAYjIicnBwYCAg0YB7gIFxkHuAcXDhEGo6IGA9MRDAoHARsMDP7lBwoMEQnR0QkAAAEB3QPTA5oFKAAVACSxBmREQBkLBQIAAQFMDgEBSgABAAGFAAAAdiYQAggYK7EGAEQBIicDJjU0NjMyFxc3NjMyFhUUBwMGArsYB7gHGA0RBqKjBhEOFwe4BwPTCwEbBwoMEgnR0QkSDAoH/uULAAABAf4DygN0BHwAFwA3sQZkREAsBAECAQFMAwEBAgGFAAIAAAJZAAICAGEEAQACAFEBABIQDQsIBgAXARcFCBYrsQYARAEiJiY1NDYzMhcWFjMyNjc2MzIWFRQGBgK5HllEFgwSBQhNLS1NCAUSDBZEWAPKGUM+CQ8QMzU1MxAPCT5DGQACAhAD8QNnBUUACwAXADmxBmREQC4AAQADAgEDaQUBAgAAAlkFAQICAGEEAQACAFENDAEAExEMFw0XBwUACwELBggWK7EGAEQBIiY1NDYzMhYVFAYnMjY1NCYjIgYVFBYCu1VWWVVVVFdQMC4wMTEwNQPxaT9Ba2lAQGtBPioqPz8qKT8AAAAAAQGZA9EDkgSDACMAOrEGZERALx4BAAEMAQMCAkwAAQAAAgEAaQACAwMCWQACAgNhBAEDAgNRAAAAIwAjJRo1BQgZK7EGAEQBIicmJicmIyIGBwYjIiY1NDY2MzIXHgIzMjY3NjMyFgcGBgMRCRI6dCgDBhMeDgYQDRwlOB8EDCNdUxUXHQ0EDRAjAw88A9EED0UJASQgDBAMHT0qAgYwKzMZCBgOJ1YAAQHWBAkDogRfAAkAJ7EGZERAHAABAAABVwABAQBfAgEAAQBPAQAGAwAJAQgDCBYrsQYARAEiNTQzITIVFCMCCTMyAWkxLwQJKysrKwAAAAACASwDigOsBOUADgAdAD+xBmREQDQcDQIBAgFMAAIAAQACAYAAAAIBAFkAAAABYQUDBAMBAAFRDw8AAA8dDx0XFgAOAA4XBggXK7EGAEQBIiclJjU0NjMyFxMWFRQhIiclJjU0NjMyFwEWFRQDlQcE/uYOJhcSDucG/tsHBP6+DiYXEg4BDwYDigT+ChIVKA7+2AYJFgTqChIVKA7+7AYJFgAAAAEBsQPKAycEfAAXADexBmREQCwLAQADAUwCBAIAAwCGAAEDAwFZAAEBA2EAAwEDUQEAFBIPDQgGABcBFwUIFiuxBgBEASImNTQ2NjMyFhYVFAYjIicmJiMiBgcGAdMMFkRZHh9YRBYMEgUITS0tTQgFA8oPCT9CGRlCPwkPEDM1NTMQAAECGv8uAvkAqAAXACCxBmREQBUAAQAAAVkAAQEAYQAAAQBRJBkCCBgrsQYARAUiJjU0Nz4CNSImNTQ2MzIWFRQGBgcGAjYKEgwWOSwsPjkjLTk6VikD0hEKDAkQMDsfKjEwJTE8OmtRFQIAAAEAHP5vALQAAAAJACaxBmREQBsCAQABAUwAAQABhQIBAAB2AQAGBQAJAQkDCBYrsQYARBMiNTQ3EzMDBgZNMQhrJSkFJf5vNhEYATL+vy4iAAAAAAEB9/5pAuEAFAAWAC6xBmREQCMAAQIBhQACAAACWQACAgBhAwEAAgBRAQATDwgHABYBFgQIFiuxBgBEASImNTQ2NjczDgMVFBYzMzIyFRQGAmcvQShOOSkIJioeKBgXESBK/mkxPR9yfS8SSVhSGyEPDhozAAAAAAIBwQPSA7UEdwALABcAM7EGZERAKAMBAQAAAVkDAQEBAGEFAgQDAAEAUQ0MAQATEQwXDRcHBQALAQsGCBYrsQYARAEiJjU0NjMyFhUUBiEiJjU0NjMyFhUUBgNjIjExIiMvL/6OIjExIiMvLwPSMCIjMDAjIjAwIiMwMCMiMAAAAQIxAoYC1gMrAAsAJ7EGZERAHAABAAABWQABAQBhAgEAAQBRAQAHBQALAQsDCBYrsQYARAEiJjU0NjMyFhUUBgKEIjExIiMvLwKGMCIjMDAjIjAAAQAGA88BmgT9ABMAILEGZERAFQABAAGFAgEAAHYBAAoJABMBEwMIFiuxBgBEASInJiYnJjU0NjMyFxYWFxYVFAYBeQgEU7FQEyQWEQtGokwKEwPPBDBwMg0SFSQKPH0zBg8NFgAAAAABAfUD0gNoBRkADgAYsQZkREANCgICAEkAAAB2JgEIFyuxBgBEASI1NDcBNjMyFhUUBwUGAg0YBwEPDhEXJw7+vgQD0hYIBwEUDigVEgrqBAAAAAACASwDigOsBOUADgAdACCxBmREQBUZEQoCBAFJAAABAIUAAQF2LSYCCBgrsQYARAEiNTQ3EzYzMhYVFAcFBiEiNTQ3ATYzMhYVFAcFBgFDFwbnDhIXJg7+5gQBBxcGAQ8OEhcmDv6+BAOKFgkGASgOKBUSCv4EFgkGARQOKBUSCuoEAAABAd0D0wOaBSgAFQAksQZkREAZEw0CAQABTAABAUkAAAEAhQABAXYmJwIIGCuxBgBEASImNTQ3EzYzMhcTFhUUBiMiJycHBgICDRgHuAgXGQe4BxcOEQajogYD0xEMCgcBGwwM/uUHCgwRCdHRCQAAAQHdA9MDmgUoABUAJLEGZERAGQsFAgABAUwOAQFKAAEAAYUAAAB2JhACCBgrsQYARAEiJwMmNTQ2MzIXFzc2MzIWFRQHAwYCuxgHuAcYDREGoqMGEQ4XB7gHA9MLARsHCgwSCdHRCRIMCgf+5QsAAAEB/gPKA3QEfAAXADexBmREQCwEAQIBAUwDAQECAYUAAgAAAlkAAgIAYQQBAAIAUQEAEhANCwgGABcBFwUIFiuxBgBEASImJjU0NjMyFxYWMzI2NzYzMhYVFAYGArkeWUQWDBIFCE0tLU0IBRIMFkRYA8oZQz4JDxAzNTUzEA8JPkMZAAICEAPxA2cFRQALABcAObEGZERALgABAAMCAQNpBQECAAACWQUBAgIAYQQBAAIAUQ0MAQATEQwXDRcHBQALAQsGCBYrsQYARAEiJjU0NjMyFhUUBicyNjU0JiMiBhUUFgK7VVZZVVVUV1AwLjAxMTA1A/FpP0FraUBAa0E+Kio/PyopPwAAAAABAZkD0QOSBIMAIwA6sQZkREAvHgEAAQwBAwICTAABAAACAQBpAAIDAwJZAAICA2EEAQMCA1EAAAAjACMlGjUFCBkrsQYARAEiJyYmJyYjIgYHBiMiJjU0NjYzMhceAjMyNjc2MzIWBwYGAxEJEjp0KAMGEx4OBhANHCU4HwQMI11TFRcdDQQNECMDDzwD0QQPRQkBJCAMEAwdPSoCBjArMxkIGA4nVgABAdYECQOiBF8ACQAnsQZkREAcAAEAAAFXAAEBAF8CAQABAE8BAAYDAAkBCAMIFiuxBgBEASI1NDMhMhUUIwIJMzIBaTEvBAkrKysrAAAAAAEAHP5vALQAAAAJACaxBmREQBsCAQABAUwAAQABhQIBAAB2AQAGBQAJAQkDCBYrsQYARBMiNTQ3EzMDBgZNMQhrJSkFJf5vNhEYATL+vy4iAAAAAAEB9/5pAuEAFAAWAC6xBmREQCMAAQIBhQACAAACWQACAgBhAwEAAgBRAQATDwgHABYBFgQIFiuxBgBEASImNTQ2NjczDgMVFBYzMzIyFRQGAmcvQShOOSkDJSwiKBgXESBK/mkxPR9yfS8HR11aGyEPDhozAAAAAAAADQCiAAMAAQQJAAAAqgAAAAMAAQQJAAEAFgCqAAMAAQQJAAIADgDAAAMAAQQJAAMAOgDOAAMAAQQJAAQAJgEIAAMAAQQJAAUAVAEuAAMAAQQJAAYAJAGCAAMAAQQJAAgAGAGmAAMAAQQJAAkAGAGmAAMAAQQJAAsAPAG+AAMAAQQJAAwAPAG+AAMAAQQJAA0BIgH6AAMAAQQJAA4ANgMcAEMAbwBwAHkAcgBpAGcAaAB0ACAAMgAwADEAMgAgAFQAaABlACAAQwB1AHQAaQB2AGUAIABQAHIAbwBqAGUAYwB0ACAAQQB1AHQAaABvAHIAcwAgACgAaAB0AHQAcABzADoALwAvAGcAaQB0AGgAdQBiAC4AYwBvAG0ALwBnAG8AbwBnAGwAZQBmAG8AbgB0AHMALwBjAHUAdABpAHYAZQBtAG8AbgBvACkAQwB1AHQAaQB2AGUAIABNAG8AbgBvAFIAZQBnAHUAbABhAHIAMQAuADEAMQAwADsAbgBlAHcAdAA7AEMAdQB0AGkAdgBlAE0AbwBuAG8ALQBSAGUAZwB1AGwAYQByAEMAdQB0AGkAdgBlACAATQBvAG4AbwAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAxADEAMAA7ACAAdAB0AGYAYQB1AHQAbwBoAGkAbgB0ACAAKAB2ADEALgA4AC4ANAAuADcALQA1AGQANQBiACkAQwB1AHQAaQB2AGUATQBvAG4AbwAtAFIAZQBnAHUAbABhAHIAVgBlAHIAbgBvAG4AIABBAGQAYQBtAHMAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAG4AZQB3AHQAeQBwAG8AZwByAGEAcABoAHkALgBjAG8ALgB1AGsAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAaQBzACAAYQB2AGEAaQBsAGEAYgBsAGUAIAB3AGkAdABoACAAYQAgAEYAQQBRACAAYQB0ADoAIABoAHQAdABwAHMAOgAvAC8AbwBwAGUAbgBmAG8AbgB0AGwAaQBjAGUAbgBzAGUALgBvAHIAZwBoAHQAdABwAHMAOgAvAC8AbwBwAGUAbgBmAG8AbgB0AGwAaQBjAGUAbgBzAGUALgBvAHIAZwACAAAAAAAA/k0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcQAAAAkAMkBAgDHAQMAYgCtAQQBBQEGAGMArgCQACUBBwAmAP0A/wBkAQgBCQAnAQoBCwEMAOkAKABlAQ0BDgDIAQ8AygEQAMsBEQESARMAKQEUACoBFQD4ARYBFwEYACsBGQEaACwBGwDMARwAzQEdAM4A+gDPAR4BHwEgASEALQEiAC4BIwAvASQBJQEmAScA4gAwASgAMQEpASoBKwBmASwAMgDQAS0A0QEuAGcA0wEvATABMQCRAK8AsAAzATIA7QA0ADUBMwE0ATUBNgE3ADYBOADkAPsBOQE6ATsBPAA3AT0BPgE/AUAAOADUAUEA1QFCAGgA1gFDAUQBRQFGAUcBSAA5ADoBSQFKAUsBTAA7ADwA6wFNALsBTgA9AU8A5gFQAVEBUgFTAVQBVQFWAVcBWABEAGkBWQBrAVoAbABqAVsBXAFdAG4AbQCgAEUBXgBGAP4BAABvAV8BYABHAWEBAQFiAWMBZADqAEgAcAFlAWYAcgFnAHMBaABxAWkBagFrAEkBbABKAW0A+QFuAW8BcABLAXEBcgBMANcAdAFzAHYBdAB3AXUAdQF2AXcBeAF5AXoATQF7AXwATgF9AX4ATwF/AYABgQGCAYMA4wBQAYQAUQGFAYYBhwGIAYkAeAGKAFIAeQGLAHsBjAB8AHoBjQGOAY8AoQB9ALEAUwGQAO4AVABVAZEBkgGTAZQBlQBWAZYA5QD8AZcBmAGZAIkAVwGaAZsBnAGdAFgAfgGeAIABnwCBAH8BoAGhAaIBowGkAaUAWQBaAaYBpwGoAakAWwBcAOwBqgC6AasAXQGsAOcBrQDAAMEAnQCeAa4AEwAUABUAFgAXABgAGQAaABsAHAC8APQA9QD2Aa8BsAGxAbIAAwGzAbQAEQAPAB0AHgCrAAQAowAiAKIAwwCHAA0ABgASAD8BtQG2ABAAsgCzAEIACwAMAF4AYAA+AEAAxADFALQAtQC2ALcAqQCqAL4AvwAFAAoApgAjAAkAiACGAIsAigCMAIMAXwDoAIIAwgCEAL0ABwG3AIUAlgG4AA4A7wDwALgAIACPACEAHwCVAJQAkwCnAGEApABBAJIAnAG5AJoBugAIAMYAuQG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsAjgDcAEMAjQDfANgA4QDbAN0A2QDaAN4A4AHMAc0BzgHPAdAB0QHSBkFicmV2ZQd1bmkwMjAwB3VuaTAyMDIHQW1hY3JvbgdBb2dvbmVrB3VuaTFFMDILQ2NpcmN1bWZsZXgKQ2RvdGFjY2VudAZEY2Fyb24GRGNyb2F0B3VuaTFFMEEGRWJyZXZlBkVjYXJvbgd1bmkwMjA0CkVkb3RhY2NlbnQHdW5pMDIwNgdFbWFjcm9uB0VvZ29uZWsHdW5pMUUxRQd1bmkwMUY0C0djaXJjdW1mbGV4B3VuaTAxMjIKR2RvdGFjY2VudARIYmFyC0hjaXJjdW1mbGV4AklKBklicmV2ZQd1bmkwMjA4B3VuaTAyMEEHSW1hY3JvbgdJb2dvbmVrBkl0aWxkZQtKY2lyY3VtZmxleAd1bmkwMTM2BkxhY3V0ZQZMY2Fyb24HdW5pMDEzQgRMZG90B3VuaTFFNDAGTmFjdXRlBk5jYXJvbgd1bmkwMTQ1A0VuZwZPYnJldmUHdW5pMDIwQw1PaHVuZ2FydW1sYXV0B3VuaTAyMEUHT21hY3Jvbgd1bmkxRTU2BlJhY3V0ZQZSY2Fyb24HdW5pMDE1Ngd1bmkwMjEwB3VuaTAyMTIGU2FjdXRlC1NjaXJjdW1mbGV4B3VuaTAyMTgHdW5pMUU2MAd1bmkxRTlFBFRiYXIGVGNhcm9uB3VuaTAyMUEHdW5pMUU2QQZVYnJldmUHdW5pMDIxNA1VaHVuZ2FydW1sYXV0B3VuaTAyMTYHVW1hY3JvbgdVb2dvbmVrBVVyaW5nBlV0aWxkZQZXYWN1dGULV2NpcmN1bWZsZXgJV2RpZXJlc2lzBldncmF2ZQtZY2lyY3VtZmxleAZZZ3JhdmUGWmFjdXRlClpkb3RhY2NlbnQHdW5pMDFDNAd1bmkwMUM1B3VuaTAxQzcHdW5pMDFDOAd1bmkwMUNBB3VuaTAxQ0IHdW5pMDFGMQd1bmkwMUYyBmFicmV2ZQd1bmkwMjAxB3VuaTAyMDMHYW1hY3Jvbgdhb2dvbmVrB3VuaTFFMDMLY2NpcmN1bWZsZXgKY2RvdGFjY2VudAZkY2Fyb24HdW5pMUUwQgd1bmkwMUYzB3VuaTAxQzYGZWJyZXZlBmVjYXJvbgd1bmkwMjA1CmVkb3RhY2NlbnQHdW5pMDIwNwdlbWFjcm9uB2VvZ29uZWsHdW5pMUUxRgd1bmkwMUY1C2djaXJjdW1mbGV4B3VuaTAxMjMKZ2RvdGFjY2VudARoYmFyC2hjaXJjdW1mbGV4BmlicmV2ZQd1bmkwMjA5CWkubG9jbFRSSwd1bmkwMjBCB2ltYWNyb24HaW9nb25lawZpdGlsZGUCaWoHdW5pMDIzNwtqY2lyY3VtZmxleAd1bmkwMTM3DGtncmVlbmxhbmRpYwZsYWN1dGUGbGNhcm9uB3VuaTAxM0MEbGRvdAd1bmkwMUM5B3VuaTFFNDEGbmFjdXRlC25hcG9zdHJvcGhlBm5jYXJvbgd1bmkwMTQ2B3VuaTAxQ0MDZW5nBm9icmV2ZQd1bmkwMjBEDW9odW5nYXJ1bWxhdXQHdW5pMDIwRgdvbWFjcm9uB3VuaTFFNTcGcmFjdXRlBnJjYXJvbgd1bmkwMTU3B3VuaTAyMTEHdW5pMDIxMwZzYWN1dGULc2NpcmN1bWZsZXgHdW5pMDIxOQd1bmkxRTYxBHRiYXIGdGNhcm9uB3VuaTAyMUIHdW5pMUU2QgZ1YnJldmUHdW5pMDIxNQ11aHVuZ2FydW1sYXV0B3VuaTAyMTcHdW1hY3Jvbgd1b2dvbmVrBXVyaW5nBnV0aWxkZQZ3YWN1dGULd2NpcmN1bWZsZXgJd2RpZXJlc2lzBndncmF2ZQt5Y2lyY3VtZmxleAZ5Z3JhdmUGemFjdXRlCnpkb3RhY2NlbnQHdW5pMDNCQwd1bmkwMEI5B3VuaTAwQjIHdW5pMDBCMwd1bmkyMDc0B3VuaTAwQTACQ1IWcGVyaW9kY2VudGVyZWQubG9jbENBVBtwZXJpb2RjZW50ZXJlZC5sb2NsQ0FULmNhc2UERXVybwd1bmkyMjE1B3VuaTIyMDYHdW5pMDBCNQd1bmkwMzA4B3VuaTAzMDcJZ3JhdmVjb21iCWFjdXRlY29tYgd1bmkwMzBCC3VuaTAzMEMuYWx0B3VuaTAzMDIHdW5pMDMwQwd1bmkwMzA2B3VuaTAzMEEJdGlsZGVjb21iB3VuaTAzMDQHdW5pMDMwRgd1bmkwMzExB3VuaTAzMjYHdW5pMDMyNwd1bmkwMzI4B3VuaTAwOTEHdW5pMDA5Mgd1bmkwMDkzB3VuaTAwOTQHdW5pMDA5QQd1bmkwMDlCB3VuaTAwOUQAAAEAAf//AA8AAQACAA4AAABIAAAAYAACAAkAPwBAAAEAQwBIAAEArwCyAAEA3ADdAAEA4QDlAAEA5wDnAAEBEQEVAAEBMwE0AAIBnwGvAAMACAACABAAEAABAAIBMwE0AAEABAABAmwAAQACAAAADAAAABwAAgACAZ8BowAAAaUBrAAFAAEAAgGtAa4AAQAAAAoAJgAYAAJERkxUADBsYXRuAIAABgAmAC4ANgA+AEYAUAADa2VybgBMbWFyawBabWttawBSAIQAAAACAAgAAQDIAAQAAAABAIQABAAAAAEAiAAEAAAAAQCMAAYAEAABAJAAAQAGABAAAQCSAAAAAAABAAAAAAACAAQABQAAAAMAAQACAAMANAAIQVpFIAA0Q0FUIAA0Q1JUIAA0S0FaIAA0TU9MIAA0Uk9NIAA0VEFUIAA0VFJLIAA0AAD//wADAAAAAQACAAEAWgEQAAEAaAE+AAEAfgEEAAEBmgFmAAEANgCqAAEAPADMAAEANgA2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'
