module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "gateron-ks27-choc-v1-mx-hotswap"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "" np_thru_hole circle (at 5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Mask" "${(flip ? "B" : "F")}.Cu" "In1.Cu" "${(flip ? "F" : "B")}.Cu") )`);
fp.push(`(pad "" np_thru_hole circle (at -5.08 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Mask" "${(flip ? "B" : "F")}.Cu" "In1.Cu" "${(flip ? "F" : "B")}.Cu") )`);
fp.push(`(pad "" np_thru_hole circle (at -5 ${flipN(flip, 3.8)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 3.81 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 180)}) (size 3 3) (drill 3) (layers "*.Mask" "${(flip ? "B" : "F")}.Cu" "In1.Cu" "${(flip ? "F" : "B")}.Cu") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Mask" "${(flip ? "B" : "F")}.Cu" "In1.Cu" "${(flip ? "F" : "B")}.Cu") )`);
fp.push(`(pad "" np_thru_hole circle (at -4.4 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 5 5) (drill 5) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 2.6 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at -5 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "*.Mask" "${(flip ? "B" : "F")}.Cu" "In1.Cu" "${(flip ? "F" : "B")}.Cu") )`);
fp.push(`(pad "" np_thru_hole circle (at -2.54 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 180)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 5.9)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 5.22 ${flipN(flip, -4.2)} ${flipR(flip, p.r + 0)}) (size 0.9906 0.9906) (drill 0.9906) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 5.5 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.7018 1.7018) (drill 1.7018) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at -5.5 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.7018 1.7018) (drill 1.7018) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "1" smd rect (at -6.29 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 180)}) (size 2.55 2.5) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.P1})`);
fp.push(`(pad "1" smd rect (at -7.675 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.P1})`);
fp.push(`(pad "1" smd rect (at -8.275 ${flipN(flip, 3.8)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at 7.56 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 180)}) (size 2.55 2.5) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.P2})`);
fp.push(`(pad "2" smd rect (at 5.875 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.P2})`);
fp.push(`(pad "2" smd rect (at 3.275 ${flipN(flip, 5.9)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.P2})`);

// // Drawings on B.Fab
// fp.push(`(fp_text user "\${REFERENCE}" (at 0.1 ${flipN(flip, -8.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? "" : " mirror"})) )`);
// fp.push(`(fp_line (start -5.08 ${flipN(flip, 2.54)}) (end 0 ${flipN(flip, 2.54)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start 3.81 ${flipN(flip, 6.985)}) (end -5.08 ${flipN(flip, 6.985)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start 6.35 ${flipN(flip, 0.635)}) (end 6.35 ${flipN(flip, 4.445)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start 6.35 ${flipN(flip, 1.27)}) (end 8.89 ${flipN(flip, 1.27)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start -7.62 ${flipN(flip, 6.35)}) (end -7.62 ${flipN(flip, 3.81)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start -5.08 ${flipN(flip, 6.985)}) (end -5.08 ${flipN(flip, 2.54)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start -5.08 ${flipN(flip, 6.35)}) (end -7.62 ${flipN(flip, 6.35)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start 8.89 ${flipN(flip, 3.81)}) (end 6.35 ${flipN(flip, 3.81)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start 6.35 ${flipN(flip, 0.635)}) (end 2.54 ${flipN(flip, 0.635)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_line (start -7.62 ${flipN(flip, 3.81)}) (end -5.08 ${flipN(flip, 3.81)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_arc (start 6.35 ${flipN(flip, 4.445)}) (mid 5.606051 ${flipN(flip, 6.241051)}) (end 3.81 ${flipN(flip, 6.985)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);
// fp.push(`(fp_arc (start 2.464162 ${flipN(flip, 0.61604)}) (mid 1.563147 ${flipN(flip, 2.002042)}) (end 0 ${flipN(flip, 2.54)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.12) )`);

// // Drawings on F.Fab
// fp.push(`(fp_text value "gateron-ks27-choc-v1-mx-hotswap" (at 0 ${flipN(flip, 8.5)} ${flipR(flip, p.r) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
// fp.push(`(fp_line (start 7.5 ${flipN(flip, 7.5)}) (end 7.5 ${flipN(flip, -7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
// fp.push(`(fp_line (start -7.5 ${flipN(flip, -7.5)}) (end -7.5 ${flipN(flip, 7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
// fp.push(`(fp_line (start -7.5 ${flipN(flip, 7.5)}) (end 7.5 ${flipN(flip, 7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
// fp.push(`(fp_line (start 7.5 ${flipN(flip, -7.5)}) (end -7.5 ${flipN(flip, -7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);

// Drawings on B.SilkS
// fp.push(`(fp_line (start -5.08 ${flipN(flip, 2.54)}) (end 0 ${flipN(flip, 2.54)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start -7 ${flipN(flip, 5.6)}) (end -7 ${flipN(flip, 6.2)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start 5.969 ${flipN(flip, 0.635)}) (end 6.35 ${flipN(flip, 0.635)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start 2.464162 ${flipN(flip, 0.635)}) (end 4.191 ${flipN(flip, 0.635)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start -5.08 ${flipN(flip, 6.985)}) (end -5.08 ${flipN(flip, 6.604)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start -5.08 ${flipN(flip, 3.556)}) (end -5.08 ${flipN(flip, 2.54)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start 6.35 ${flipN(flip, 1.016)}) (end 6.35 ${flipN(flip, 0.635)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start 6.35 ${flipN(flip, 4.445)}) (end 6.35 ${flipN(flip, 4.064)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_line (start 3.81 ${flipN(flip, 6.985)}) (end -5.08 ${flipN(flip, 6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_arc (start 6.35 ${flipN(flip, 4.445)}) (mid 5.606051 ${flipN(flip, 6.241051)}) (end 3.81 ${flipN(flip, 6.985)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
// fp.push(`(fp_arc (start 2.464162 ${flipN(flip, 0.61604)}) (mid 1.563147 ${flipN(flip, 2.002042)}) (end 0 ${flipN(flip, 2.54)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);

// Drawings on F.SilkS
// fp.push(`(fp_text reference "REF**" (at 0.1 ${flipN(flip, -8.5)} ${flipR(flip, p.r) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on Eco2.User
// fp.push(`(fp_line (start 1.8 ${flipN(flip, -6.3)}) (end -3.2 ${flipN(flip, -6.3)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start -7 ${flipN(flip, -7)}) (end -7 ${flipN(flip, 7)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start 7 ${flipN(flip, 7)}) (end 7 ${flipN(flip, -7)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start -3.2 ${flipN(flip, -6.3)}) (end -3.2 ${flipN(flip, -3.1)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start 7 ${flipN(flip, -7)}) (end -7 ${flipN(flip, -7)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start -7 ${flipN(flip, 7)}) (end 7 ${flipN(flip, 7)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start 1.8 ${flipN(flip, -6.3)}) (end 1.8 ${flipN(flip, -3.1)}) (layer "Eco2.User") (width 0.12) )`);
// fp.push(`(fp_line (start 1.8 ${flipN(flip, -3.1)}) (end -3.2 ${flipN(flip, -3.1)}) (layer "Eco2.User") (width 0.12) )`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

