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
     * Mono: Latin on Cascadia/Consolas, CJK on 思源宋体. Without an explicit CJK
     * face the generic monospace fallback lands on SimSun, whose thin strokes
     * disappear on the dark scanline themes; 思源宋体 keeps the Song skeleton
     * but carries a Medium weight, so the horizontals survive the scanlines.
     */
    const FONT_MONO =
      'ui-monospace,"Cascadia Mono","SFMono-Regular",Consolas,"Noto Serif SC","Songti SC","华文中宋",monospace'
    /**
     * CRT layer — the terminal voice of the theme. VT323 is a digitisation of
     * DEC's VT320 screen font: fixed-pitch, slightly squared bowls, one weight.
     * It is used only for code and short machine text; CJK falls through to
     * 思源黑体, because a Song fallback would fight the pixel grid.
     */
    const FONT_CRT =
      '"VT323","Share Tech Mono","Cascadia Mono",Consolas,"Source Han Sans SC","思源黑体",monospace'
    /**
     * Sage body: Latin on Goudy Old Style — the warm Arts-and-Crafts book face
     * of early twentieth-century presses — and CJK on 华文中宋, whose crisp
     * thick-thin is the Chinese counterpart of that old-press cut.
     */
    const FONT_SAGE_BODY =
      '"Goudy Old Style",Centaur,Garamond,"Century Schoolbook",Georgia,"华文中宋","STZhongsong","宋体","SimSun","Noto Serif SC","Source Han Serif SC","Songti SC","STSong",serif'
    /**
     * Sage headings: Latin on Bodoni MT for the hairline contrast of an old
     * title page, CJK on 方正小标宋 — a display Song cut made for title lines.
     */
    const FONT_SAGE_HEAD =
      '"Bodoni MT",Elephant,"Bookman Old Style",Georgia,"方正小标宋简体","FZXiaoBiaoSong-B05S","华文中宋","Noto Serif SC","Songti SC",SimSun,serif'
    /**
     * Hei (黑体) — the modern print gothic. 思源黑体 (Source Han Sans SC) is
     * installed at user level here and leads the stack; YaHei, DengXian and
     * SimHei remain as fallbacks for machines that lack it.
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
     * Cool indigo headings: Bricolage Grotesque at its display optical size —
     * angled terminals, a squeezed counter, close to a newspaper nameplate of
     * the 1970s. Set at 700 with negative tracking so it locks up as a line.
     */
    const FONT_MIST_HEAD =
      '"Bricolage Grotesque","Archivo","Franklin Gothic Medium","Source Han Sans SC","思源黑体","Microsoft YaHei","PingFang SC",sans-serif'
    /**
     * Cool indigo body: Bitter is a slab — thick horizontals, square feet, the
     * look of type pushed into paper. It holds a .56 x-height, so at 13.5px it
     * reads heavier than any grotesque without being bold.
     */
    const FONT_MIST_BODY =
      '"Bitter","Archivo","Source Han Sans SC","思源黑体","Noto Sans SC","Microsoft YaHei","PingFang SC","SimHei",serif'
    /**
     * Moss headings: Fraunces, the soft/wonky revival. SOFT rounds the serif
     * corners, WONK turns on the deliberate asymmetries — the face reads hand-cut
     * rather than engraved, which is the point on a 铜版 green.
     */
    const FONT_MOSS_HEAD =
      '"Fraunces","Playfair Display","Bodoni MT","方正小标宋简体","FZXiaoBiaoSong-B05S","华文中宋","Noto Serif SC","Songti SC",serif'
    /**
     * Moss body: Alegreya is a calligraphic old-style — the strokes start and
     * finish the way a pen would, so long paragraphs keep a handwriting pulse
     * that a book Garamond loses at 13.5px.
     */
    const FONT_MOSS_BODY =
      '"Alegreya","EB Garamond","Archivo","Source Han Sans SC","思源黑体","Microsoft YaHei","PingFang SC",serif'
    /**
     * Editorial-poster family (3.9.0). Three single-ink pages, each with one
     * typographic idea instead of one colour idea: a newspaper masthead, a
     * cyanotype plate, and a two-drum risograph print.
     *
     * Ink headings: Archivo Black is the poster grotesque — tight, flat-sided,
     * built for a nameplate. The Han under it is 方正小标宋, a display Song cut
     * for exactly this job: hairlines thick enough to survive 34px, wedge
     * terminals that hold the line. Latin uppercase, Han as drawn.
     */
    const FONT_INK_HEAD =
      '"Archivo Black","Archivo","Franklin Gothic Heavy","方正小标宋简体","FZXiaoBiaoSong-B05S","Noto Serif SC","Songti SC",serif'
    /**
     * Ink body: Libre Franklin is the 1912 newspaper grotesque — a large
     * x-height and open counters, so 13.5px stays readable in a narrow column
     * where a book face would go grey.
     */
    const FONT_INK_BODY =
      '"Libre Franklin","Archivo","Franklin Gothic Book","Source Han Sans SC","思源黑体","Microsoft YaHei","PingFang SC",sans-serif'
    /**
     * Cobalt headings: Bodoni MT — the Didone of engraved title pages, where
     * the hairline serifs are the point. The Han is 华文中宋, whose sharp
     * thick–thin is the Chinese equivalent of that engraving.
     */
    const FONT_COBALT_HEAD =
      '"Bodoni MT","Playfair Display","华文中宋","STZhongsong","经典宋体简","Songti SC","Noto Serif SC",serif'
    /**
     * Cobalt body: Archivo at text size — a neutral grotesque that lets the
     * Didone headings do the talking; the Han stays 思源黑体 for the same reason.
     */
    const FONT_COBALT_BODY =
      '"Archivo","思源黑体","Source Han Sans SC","Microsoft YaHei","PingFang SC",sans-serif'
    /**
     * Riso headings: Archivo Black again, but set at 900 with negative tracking
     * so it locks up as a solid block — the drum-printed poster voice. The Han
     * is 思源黑体 Heavy: on a risograph the headline is a slab of ink, not a
     * drawn letter.
     */
    const FONT_RISO_HEAD =
      '"Archivo Black","Archivo","Franklin Gothic Heavy","思源黑体","Source Han Sans SC","Microsoft YaHei",sans-serif'
    /**
     * Riso body: Space Grotesk, whose slightly off-square bowls read as
     * machine-set rather than typeset — the right register under a 900 block.
     */
    const FONT_RISO_BODY =
      '"Space Grotesk","思源黑体","Source Han Sans SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif'

    /**
     * Palettes. Color tokens carry both schemes; `font`, `heading`, `code` and
     * `texture` describe that palette's own print character.
     */
    const PALETTES = [
      {
        id: 'seal',
        nameKey: 'sealName',
        descKey: 'sealDesc',
        texture: 'paper',
        font: 'serif',
        heading: 'serif',
        code: 'sepia(.3) saturate(.82) contrast(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F7F4EC', dark: '#14120F' },
          '--dsw-alias-bg-layer-1': { light: '#FFFDF8', dark: '#1C1916' },
          '--dsw-alias-bg-layer-2': { light: '#EFEADF', dark: '#262119' },
          '--dsw-alias-bg-overlay': { light: '#FFFEFA', dark: '#221E1A' },
          '--dsw-alias-border-l1': { light: '#DDD5C6', dark: '#332E27' },
          '--dsw-alias-border-l2': { light: '#B9AF9C', dark: '#4C4438' },
          '--dsw-alias-brand-primary': { light: '#B23A2E', dark: '#E4695A' },
          '--dsw-alias-label-primary': { light: '#1E1B16', dark: '#F2ECE0' },
          '--dsw-alias-label-secondary': { light: '#5F584C', dark: '#ADA294' },
          '--dsw-alias-state-error-primary': { light: '#A62B22', dark: '#E0685C' },
          '--dsw-alias-state-idle-primary': { light: '#8A8375', dark: '#8B8377' },
          '--dsw-alias-state-success-primary': { light: '#3F5F42', dark: '#7E9C77' },
          '--dsw-alias-state-warn-primary': { light: '#8A6118', dark: '#D9A959' },
          '--dsw-specific-sidebar-fill': { light: '#F0EBE0', dark: '#191612' },
        },
      },
      {
        id: 'sage',
        nameKey: 'sageName',
        descKey: 'sageDesc',
        texture: 'paper',
        font: 'serif',
        heading: 'serif',
        fontStack: FONT_SAGE_BODY,
        headingStack: FONT_SAGE_HEAD,
        headWeight: 400,
        headTracking: '.045em',
        code: 'saturate(.92) sepia(.06)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F4F4EA', dark: '#131410' },
          '--dsw-alias-bg-layer-1': { light: '#FBFBF2', dark: '#1A1B16' },
          '--dsw-alias-bg-layer-2': { light: '#E8EADD', dark: '#22241C' },
          '--dsw-alias-bg-overlay': { light: '#FDFDF6', dark: '#20221A' },
          '--dsw-alias-border-l1': { light: '#D9DCCB', dark: '#2D2F26' },
          '--dsw-alias-border-l2': { light: '#B9C0A7', dark: '#434735' },
          '--dsw-alias-brand-primary': { light: '#5F7A4E', dark: '#A6C083' },
          '--dsw-alias-label-primary': { light: '#232A1F', dark: '#E8EBDD' },
          '--dsw-alias-label-secondary': { light: '#5B6452', dark: '#A7AE99' },
          '--dsw-alias-state-error-primary': { light: '#A64B3C', dark: '#E08A72' },
          '--dsw-alias-state-idle-primary': { light: '#8B9580', dark: '#7E8773' },
          '--dsw-alias-state-success-primary': { light: '#4E7040', dark: '#9BC07C' },
          '--dsw-alias-state-warn-primary': { light: '#99703A', dark: '#D9B173' },
          '--dsw-specific-sidebar-fill': { light: '#ECEEE1', dark: '#0F100C' },
        },
      },
      {
        /**
         * Cool white + indigo: the second half of the two-plate pair. Nothing
         * warm in the substrate — the white leans blue and the type is set Hei
         * for headings over a Song body, so a cool page never reads as ivory.
         */
        id: 'mist',
        nameKey: 'mistName',
        descKey: 'mistDesc',
        texture: 'paper',
        font: 'serif',
        heading: 'sans',
        fontStack: FONT_MIST_BODY,
        headingStack: FONT_MIST_HEAD,
        headWeight: 700,
        headTracking: '-.01em',
        // Bricolage is variable on two axes: the display optical size is what
        // gives the headline its angled cuts, and a slightly narrow width keeps
        // it in the job-print register instead of the fashion-poster one.
        headVariation: "'opsz' 96,'wdth' 88",
        // Bricolage carries a .56 x-height of its own and the Han is at .54, so
        // the pair needs no font-size-adjust fudge — only a medium body weight,
        // which is what stops the column reading thin.
        bodyWeight: 450,
        code: 'sepia(.08) saturate(.78)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F8FAFC', dark: '#0E1218' },
          '--dsw-alias-bg-layer-1': { light: '#FDFEFF', dark: '#151A21' },
          '--dsw-alias-bg-layer-2': { light: '#F1F3F6', dark: '#1B222B' },
          '--dsw-alias-bg-overlay': { light: '#FFFFFF', dark: '#19212B' },
          '--dsw-alias-border-l1': { light: '#DCE0E6', dark: '#232A34' },
          '--dsw-alias-border-l2': { light: '#B7BEC9', dark: '#3B4552' },
          '--dsw-alias-brand-primary': { light: '#546DA1', dark: '#9FB4DE' },
          '--dsw-alias-label-primary': { light: '#242A31', dark: '#E7EBF1' },
          '--dsw-alias-label-secondary': { light: '#6B7078', dark: '#9BA3AE' },
          '--dsw-alias-state-error-primary': { light: '#A64438', dark: '#DE8478' },
          '--dsw-alias-state-idle-primary': { light: '#8E939B', dark: '#6F7681' },
          '--dsw-alias-state-success-primary': { light: '#4E7A5A', dark: '#86B596' },
          '--dsw-alias-state-warn-primary': { light: '#8A6A2A', dark: '#D9B172' },
          '--dsw-specific-sidebar-fill': { light: '#F1F3F6', dark: '#10151B' },
        },
      },
      {
        /**
         * Pale grey-green + moss: the same two-plate idea turned green, with the
         * type pairing flipped — Song display headings over a Hei body — so the
         * pair reads as two presses rather than one palette recoloured.
         */
        id: 'moss',
        nameKey: 'mossName',
        descKey: 'mossDesc',
        texture: 'paper',
        font: 'sans',
        heading: 'serif',
        fontStack: FONT_MOSS_BODY,
        headingStack: FONT_MOSS_HEAD,
        headWeight: 600,
        headTracking: '.005em',
        // Fraunces is the "wonky" revivals axis set: SOFT rounds the corners of
        // the serifs, WONK switches on the deliberate asymmetries (the R leg,
        // the g ear). Both default to 0, which is why the sober face looks plain.
        headVariation: "'SOFT' 60,'WONK' 1,'opsz' 40",
        // Fraunces' .50 x-height clears 小标宋's .46, and Alegreya's .48 clears
        // 思源黑体 — no adjust needed, just a medium body weight so the pale green
        // page still holds its grey.
        bodyWeight: 500,
        code: 'saturate(.9) sepia(.04)',
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
        id: 'crt',
        nameKey: 'crtName',
        descKey: 'crtDesc',
        texture: 'scan',
        font: 'mono',
        heading: 'mono',
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
        id: 'indigo',
        nameKey: 'indigoName',
        descKey: 'indigoDesc',
        texture: 'paper',
        font: 'sans',
        heading: 'serif',
        code: 'sepia(.16) saturate(.86)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F3EFE4', dark: '#0F1319' },
          '--dsw-alias-bg-layer-1': { light: '#FBF8F0', dark: '#151A22' },
          '--dsw-alias-bg-layer-2': { light: '#E8E2D2', dark: '#1D232C' },
          '--dsw-alias-bg-overlay': { light: '#FEFCF6', dark: '#1A2029' },
          '--dsw-alias-border-l1': { light: '#D8D1BE', dark: '#2A3240' },
          '--dsw-alias-border-l2': { light: '#B3A98F', dark: '#414C5E' },
          '--dsw-alias-brand-primary': { light: '#1F3A5F', dark: '#C8A465' },
          '--dsw-alias-label-primary': { light: '#1A2028', dark: '#E9E6DD' },
          '--dsw-alias-label-secondary': { light: '#565F6B', dark: '#A3A9B2' },
          '--dsw-alias-state-error-primary': { light: '#A3352C', dark: '#DE7060' },
          '--dsw-alias-state-idle-primary': { light: '#8B8E8A', dark: '#7C838D' },
          '--dsw-alias-state-success-primary': { light: '#2F6B5E', dark: '#7FA89A' },
          '--dsw-alias-state-warn-primary': { light: '#82631A', dark: '#D6AE6A' },
          '--dsw-specific-sidebar-fill': { light: '#EDE8DA', dark: '#131922' },
        },
      },
      {
        id: 'amber',
        nameKey: 'amberName',
        descKey: 'amberDesc',
        texture: 'scan',
        font: 'mono',
        heading: 'mono',
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
        id: 'phosphor',
        nameKey: 'phosphorName',
        descKey: 'phosphorDesc',
        texture: 'scan',
        font: 'mono',
        heading: 'mono',
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
        id: 'ibm',
        nameKey: 'ibmName',
        descKey: 'ibmDesc',
        texture: 'scan',
        font: 'mono',
        heading: 'mono',
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
        id: 'c64',
        nameKey: 'c64Name',
        descKey: 'c64Desc',
        texture: 'scan',
        font: 'mono',
        heading: 'mono',
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
      {
        id: 'eink',
        nameKey: 'einkName',
        descKey: 'einkDesc',
        texture: 'paper',
        font: 'serif',
        heading: 'serif',
        code: 'grayscale(.28) contrast(.96)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#EDE8DC', dark: '#1C1B18' },
          '--dsw-alias-bg-layer-1': { light: '#F7F3E9', dark: '#242320' },
          '--dsw-alias-bg-layer-2': { light: '#E0DACB', dark: '#2C2A25' },
          '--dsw-alias-bg-overlay': { light: '#FBF7EE', dark: '#282623' },
          '--dsw-alias-border-l1': { light: '#CFC8B8', dark: '#3A3832' },
          '--dsw-alias-border-l2': { light: '#A9A292', dark: '#55524A' },
          '--dsw-alias-brand-primary': { light: '#33302A', dark: '#D8D2C4' },
          '--dsw-alias-label-primary': { light: '#1B1916', dark: '#EDE8DC' },
          '--dsw-alias-label-secondary': { light: '#57524A', dark: '#A8A296' },
          '--dsw-alias-state-error-primary': { light: '#8A3A32', dark: '#D07A6A' },
          '--dsw-alias-state-idle-primary': { light: '#8C877C', dark: '#8A8578' },
          '--dsw-alias-state-success-primary': { light: '#3F5A44', dark: '#8FB08A' },
          '--dsw-alias-state-warn-primary': { light: '#7A6218', dark: '#D6B46A' },
          '--dsw-specific-sidebar-fill': { light: '#E6E0D2', dark: '#1E1D19' },
        },
      },
      {
        id: 'darkroom',
        nameKey: 'darkroomName',
        descKey: 'darkroomDesc',
        texture: 'paper',
        font: 'sans',
        heading: 'serif',
        code: 'sepia(.2) saturate(.9)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F5EEEA', dark: '#1A0E0C' },
          '--dsw-alias-bg-layer-1': { light: '#FDF7F3', dark: '#241412' },
          '--dsw-alias-bg-layer-2': { light: '#EADFD9', dark: '#2E1A17' },
          '--dsw-alias-bg-overlay': { light: '#FFFBF8', dark: '#281613' },
          '--dsw-alias-border-l1': { light: '#D8C7BE', dark: '#3E211C' },
          '--dsw-alias-border-l2': { light: '#B49E93', dark: '#5C322A' },
          '--dsw-alias-brand-primary': { light: '#9E2B20', dark: '#C0392B' },
          '--dsw-alias-label-primary': { light: '#241512', dark: '#F2D9D2' },
          '--dsw-alias-label-secondary': { light: '#5E463F', dark: '#B99A92' },
          '--dsw-alias-state-error-primary': { light: '#A32018', dark: '#E05A48' },
          '--dsw-alias-state-idle-primary': { light: '#8C7A72', dark: '#8A6E66' },
          '--dsw-alias-state-success-primary': { light: '#4F6B4A', dark: '#8FA87A' },
          '--dsw-alias-state-warn-primary': { light: '#8A5A12', dark: '#D8A85A' },
          '--dsw-specific-sidebar-fill': { light: '#EFE4DE', dark: '#1E100E' },
        },
      },
      {
        /**
         * 墨黑 — the newspaper itself. No accent colour at all: brand is the
         * ink, so links, buttons and the mark are all the same black the text
         * is set in. The page reads by weight and rule, the way a front page
         * does when the press ran one plate.
         */
        id: 'ink',
        nameKey: 'inkName',
        descKey: 'inkDesc',
        texture: 'paper',
        font: 'sans',
        heading: 'serif',
        fontStack: FONT_INK_BODY,
        headingStack: FONT_INK_HEAD,
        // Archivo Black carries its own weight; asking for 700 on top would
        // only synthesise a bolder one. Same for 小标宋, which has one cut.
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
         * 钴蓝 — a cyanotype. Daylight is a bone sheet printed in one cobalt
         * ink; dark mode is the same plate under the wash, Prussian blue with
         * the type showing through as exposed paper. Nothing warm anywhere.
         */
        id: 'cobalt',
        nameKey: 'cobaltName',
        descKey: 'cobaltDesc',
        texture: 'paper',
        font: 'sans',
        heading: 'serif',
        fontStack: FONT_COBALT_BODY,
        headingStack: FONT_COBALT_HEAD,
        headWeight: 400,
        headTracking: '.015em',
        bodyWeight: 400,
        sectionRule: '3px double var(--dsw-alias-border-l2)',
        code: 'sepia(.1) saturate(.7) contrast(1.02)',
        tokens: {
          '--dsw-alias-bg-base': { light: '#F3F0E4', dark: '#0A1E33' },
          '--dsw-alias-bg-layer-1': { light: '#FAF8EE', dark: '#0F2740' },
          '--dsw-alias-bg-layer-2': { light: '#E7E2D2', dark: '#14314E' },
          '--dsw-alias-bg-overlay': { light: '#FDFBF3', dark: '#112B45' },
          '--dsw-alias-border-l1': { light: '#D3CDBA', dark: '#1E3A56' },
          '--dsw-alias-border-l2': { light: '#ABA48C', dark: '#2F5474' },
          '--dsw-alias-brand-primary': { light: '#1B3FA6', dark: '#9CC2EC' },
          '--dsw-alias-label-primary': { light: '#141C2E', dark: '#DCE9F6' },
          '--dsw-alias-label-secondary': { light: '#4E5668', dark: '#93A9C0' },
          '--dsw-alias-state-error-primary': { light: '#A3352C', dark: '#E07C6C' },
          '--dsw-alias-state-idle-primary': { light: '#8A8B85', dark: '#647A93' },
          '--dsw-alias-state-success-primary': { light: '#2C6357', dark: '#7FBFA6' },
          '--dsw-alias-state-warn-primary': { light: '#86621A', dark: '#D9B36A' },
          '--dsw-specific-sidebar-fill': { light: '#EDE9DB', dark: '#081828' },
        },
      },
      {
        /**
         * 孔版 — two drums, one spot. The black is the key plate; the pink is
         * the second run, so it appears only where a second run would: section
         * rules, links, buttons, the mark's misregistration. Everything else
         * stays ink and paper.
         */
        id: 'riso',
        nameKey: 'risoName',
        descKey: 'risoDesc',
        texture: 'paper',
        font: 'sans',
        heading: 'sans',
        fontStack: FONT_RISO_BODY,
        headingStack: FONT_RISO_HEAD,
        headWeight: 900,
        headTracking: '-.012em',
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
    ]

    /**
     * Per-palette finish defaults: corners, rules and rhythm travel with the
     * palette unless the user overrides them (each row's "follow palette" option).
     * The mark is not one of them: every palette draws its own (see MARK_ART).
     */
    const PALETTE_FINISH = {
      seal: { shape: 'round', rule: 'hairline', density: 'normal' },
      sage: { shape: 'round', rule: 'hairline', density: 'normal' },
      mist: { shape: 'round', rule: 'hairline', density: 'normal' },
      moss: { shape: 'round', rule: 'double', density: 'normal' },
      crt: { shape: 'square', rule: 'hairline', density: 'compact' },
      indigo: { shape: 'round', rule: 'double', density: 'normal' },
      amber: { shape: 'round', rule: 'hairline', density: 'normal' },
      phosphor: { shape: 'square', rule: 'hairline', density: 'compact' },
      ibm: { shape: 'square', rule: 'hairline', density: 'compact' },
      c64: { shape: 'round', rule: 'hairline', density: 'normal' },
      eink: { shape: 'round', rule: 'hairline', density: 'normal' },
      darkroom: { shape: 'round', rule: 'double', density: 'normal' },
      // The poster three: a nameplate is set square with heavy rules, an
      // engraved plate is set round with hairlines, a drum print is square and
      // tight. Their section rules travel with the palette (see sectionRule).
      ink: { shape: 'square', rule: 'double', density: 'normal' },
      cobalt: { shape: 'round', rule: 'hairline', density: 'normal' },
      riso: { shape: 'square', rule: 'hairline', density: 'normal' },
    }

    const finishOf = (palette) => PALETTE_FINISH[palette?.id] ?? PALETTE_FINISH.seal

    const TEXTURES = ['auto', 'none', 'paper', 'scan']
    const SHAPES = ['auto', 'round', 'square']
    const FONTS = ['auto', 'host', 'serif', 'headline', 'mono']
    const RULES = ['auto', 'hairline', 'double']
    const DENSITIES = ['auto', 'normal', 'compact']
    const MOTIONS = ['on', 'off']
    const MARKS = ['auto', 'native']
    const GLOWS = ['on', 'off']
    const DEFAULTS = {
      palette: 'seal',
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
        // never an adjective phrase, so the twelve read as one drawer of plates.
        sealName: '朱印',
        sealDesc: '暖白纸、墨黑字，一点朱红',
        sageName: '鼠尾草',
        sageDesc: '鼠尾草绿、亚麻白，华文中宋配 Goudy 的老铅字',
        mistName: '靛蓝',
        mistDesc: '冷白、靛蓝，报头感：Bricolage 700 标题配 Bitter 石板衬线正文',
        mossName: '苔绿',
        mossDesc: '浅灰绿、苔绿，Fraunces 软衬线标题配 Alegreya 书写体正文，中文小标宋与思源黑体',
        crtName: '显像管',
        crtDesc: '深色走琥珀字符，浅色保持素净',
        indigoName: '铜青',
        indigoDesc: '米白、深靛蓝、铜金，港埠印刷的冷调子',
        amberName: '琥珀',
        amberDesc: '米黄纸做底、深褐字，白天的显像管',
        phosphorName: '磷光',
        phosphorDesc: '近黑底配 P1 荧光绿，老终端',
        ibmName: '主机蓝',
        ibmDesc: '深蓝底、青白字，大型机终端',
        c64Name: '八位紫',
        c64Desc: '紫蓝底、米白字，八十年代家用电脑',
        einkName: '墨水屏',
        einkDesc: '米灰纸面无彩色，久读最省眼',
        darkroomName: '暗房红',
        darkroomDesc: '褐色暗调，安全灯的红',
        inkName: '墨黑',
        inkDesc: '只有一种墨：报纸头版，小标宋 + Archivo，粗细全靠字重与规则线',
        cobaltName: '钴蓝',
        cobaltDesc: '骨白纸上一版钴蓝，深色是蓝晒法；Bodoni 与华文中宋的铜版刻线',
        risoName: '孔版',
        risoDesc: '黑版 + 一版荧光粉：粗黑标题、粉色段落线，孔版印刷的双色',
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
        sealName: 'Vermilion seal',
        sealDesc: 'Warm white paper, black ink, one vermilion mark',
        sageName: 'Sage linen',
        sageDesc: 'Sage green, linen white, set in old letterpress Latin',
        mistName: 'Cool indigo',
        mistDesc: 'Cool white and indigo, nameplate register: Bricolage 700 headings over a Bitter slab body',
        mossName: 'Moss green',
        mossDesc: 'Pale grey-green and moss: Fraunces soft-serif headings over a calligraphic Alegreya body',
        crtName: 'CRT amber',
        crtDesc: 'Amber characters in the dark, plain grey in daylight',
        indigoName: 'Brass indigo',
        indigoDesc: 'Rice white, deep indigo and brass, the cool register of a treaty-port press',
        amberName: 'Daylight amber',
        amberDesc: 'Amber paper, dark ink — the daylight CRT',
        phosphorName: 'P1 phosphor',
        phosphorDesc: 'Near-black with P1 green, an old terminal',
        ibmName: 'Mainframe blue',
        ibmDesc: 'Deep blue with cyan-white type, a mainframe terminal',
        c64Name: 'Eight-bit violet',
        c64Desc: 'Violet blue with off-white type, a home computer',
        einkName: 'E-ink',
        einkDesc: 'Grey paper, no colour, easiest on the eyes',
        darkroomName: 'Darkroom red',
        darkroomDesc: 'Brown dark tones and safelight red',
        inkName: 'Ink only',
        inkDesc: 'One ink, nothing else: a front page in 小标宋 and Archivo, weight and rules doing all the work',
        cobaltName: 'Cobalt',
        cobaltDesc: 'One cobalt plate on bone paper, cyanotype in the dark; engraved Bodoni and 华文中宋',
        risoName: 'Risograph',
        risoDesc: 'Key plate plus one fluorescent pink drum: 900 block headings and a pink section rule',
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
          `body pre,body pre code,body code,body kbd,body samp{font-family:${FONT_CRT}!important}`,
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


    /** Colonial indigo: a two-plate print, one plate off register. */
    function indigoArt(id, compact) {
      const fit = whaleFit(compact ? 19.4 : 20.4)
      const shift = compact ? 0.85 : 0.7
      return h(
        'g',
        null,
        whale({ ...fit, x: fit.x + shift, y: fit.y + shift }, { fill: MARK_INK.brand, opacity: 0.42 }),
        whale(fit, { fill: MARK_INK.brand }),
      )
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

    /** E-ink: one ink, no colour, the whale as printed. */
    function einkArt(id, compact) {
      return whale(whaleFit(compact ? 19.6 : 20.8), { fill: MARK_INK.ink })
    }

    /** Darkroom red: the print rising out of the tray. */
    function darkroomArt(id, compact) {
      const fit = whaleFit(compact ? 19.2 : 19.6)
      return h(
        'g',
        null,
        whale(fit, {
          fill: MARK_INK.paper,
          stroke: MARK_INK.paper,
          strokeWidth: compact ? 2.4 : 2.8,
          strokeLinejoin: 'round',
        }),
        whale(fit, { fill: MARK_INK.brand }),
        h('rect', {
          x: 1.6,
          y: compact ? 19.8 : 19.6,
          width: 20.8,
          height: compact ? 1.6 : 1.2,
          fill: MARK_INK.ink,
          opacity: 0.5,
        }),
      )
    }



    /** Cool indigo: the whale above a printed register rule, plate-mark style. */
    function mistArt(id, compact) {
      const fit = whaleFit(compact ? 19.2 : 20)
      return h(
        'g',
        null,
        whale({ ...fit, y: fit.y - (compact ? 0.6 : 0.8) }, { fill: MARK_INK.brand }),
        h('rect', {
          x: 2.2,
          y: compact ? 20.2 : 20.4,
          width: 19.6,
          height: compact ? 1 : 0.8,
          fill: MARK_INK.brand,
          opacity: 0.55,
        }),
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
    const MARK_ART = {
      seal: plainArt,
      sage: plainArt,
      mist: mistArt,
      moss: mossArt,
      crt: plainArt,
      indigo: indigoArt,
      amber: amberArt,
      phosphor: phosphorArt,
      ibm: plainArt,
      c64: plainArt,
      eink: einkArt,
      darkroom: darkroomArt,
      ink: inkArt,
      cobalt: cobaltArt,
      riso: risoArt,
    }

    /** The brand seat's mark: one palette's whale on the 24-unit grid. */
    function MarkArt({ palette, size }) {
      const draw = MARK_ART[palette] ?? MARK_ART.seal
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
      const draw = MARK_ART[palette] ?? MARK_ART.seal
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
          const sheet = colorsInSheet
            ? `${tokenDeclarations(palette)}\n${finishCss(state, palette)}`
            : finishCss(state, palette)
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
