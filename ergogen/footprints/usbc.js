module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    A12: { type: 'net', value: 'GND' },
    A5: { type: 'net', value: 'CC1' },
    A9: { type: 'net', value: 'VCC' },
    B12: { type: 'net', value: 'GND' },
    B5: { type: 'net', value: 'CC2' },
    B9: { type: 'net', value: 'VCC' },
    SH1: { type: 'net', value: '' },
    SH2: { type: 'net', value: '' },
    SH3: { type: 'net', value: '' },
    SH4: { type: 'net', value: '' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint CUI_UJC-HP2-3-SMT-TR`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "SH1" thru_hole oval (at -4.32 ${flipN(flip, -3.8)} ${flipR(flip, p.r + 0)}) (size 1.0 1.6) (drill oval 0.6 1.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.102) ${p.SH1})`);
fp.push(`(pad "SH2" thru_hole oval (at -4.32 ${flipN(flip, 0.0)} ${flipR(flip, p.r + 0)}) (size 1.0 1.6) (drill oval 0.6 1.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.102) ${p.SH2})`);
fp.push(`(pad "SH3" thru_hole oval (at 4.32 ${flipN(flip, -3.8)} ${flipR(flip, p.r + 0)}) (size 1.0 1.6) (drill oval 0.6 1.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.102) ${p.SH3})`);
fp.push(`(pad "SH4" thru_hole oval (at 4.32 ${flipN(flip, 0.0)} ${flipR(flip, p.r + 0)}) (size 1.0 1.6) (drill oval 0.6 1.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.102) ${p.SH4})`);
fp.push(`(pad "A12" smd rect (at 2.75 ${flipN(flip, -4.09)} ${flipR(flip, p.r + 0)}) (size 0.8 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.A12})`);
fp.push(`(pad "B12" smd rect (at -2.75 ${flipN(flip, -4.09)} ${flipR(flip, p.r + 0)}) (size 0.8 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.B12})`);
fp.push(`(pad "B9" smd rect (at -1.52 ${flipN(flip, -4.09)} ${flipR(flip, p.r + 0)}) (size 0.76 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.B9})`);
fp.push(`(pad "A9" smd rect (at 1.52 ${flipN(flip, -4.09)} ${flipR(flip, p.r + 0)}) (size 0.76 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.A9})`);
fp.push(`(pad "A5" smd rect (at -0.5 ${flipN(flip, -4.09)} ${flipR(flip, p.r + 0)}) (size 0.7 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.A5})`);
fp.push(`(pad "B5" smd rect (at 0.5 ${flipN(flip, -4.09)} ${flipR(flip, p.r + 0)}) (size 0.7 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.B5})`);

// // Drawings on F.CrtYd
// fp.push(`(fp_line (start -5.07 ${flipN(flip, -5.04)}) (end 5.07 ${flipN(flip, -5.04)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
// fp.push(`(fp_line (start 5.07 ${flipN(flip, -5.04)}) (end 5.07 ${flipN(flip, 2.85)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
// fp.push(`(fp_line (start 5.07 ${flipN(flip, 2.85)}) (end -5.07 ${flipN(flip, 2.85)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
// fp.push(`(fp_line (start -5.07 ${flipN(flip, 2.85)}) (end -5.07 ${flipN(flip, -5.04)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

// // Drawings on F.Fab
// fp.push(`(fp_text value CUI_UJC-HP2-3-SMT-TR (at 8.2 ${flipN(flip, -5.885)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1.0 1.0) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(fp_line (start -4.47 ${flipN(flip, -4.2)}) (end -4.47 ${flipN(flip, 2.6)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
// fp.push(`(fp_line (start -4.47 ${flipN(flip, 2.6)}) (end 4.47 ${flipN(flip, 2.6)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
// fp.push(`(fp_line (start 4.47 ${flipN(flip, 2.6)}) (end 4.47 ${flipN(flip, -4.2)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
// fp.push(`(fp_line (start 4.47 ${flipN(flip, -4.2)}) (end -4.47 ${flipN(flip, -4.2)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);

// Drawings on F.SilkS
// fp.push(`(fp_text reference REF** (at -1.325 ${flipN(flip, -7.385)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1.0 1.0) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 1.12)}) (end -4.47 ${flipN(flip, 2.6)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 2.6)}) (end 4.47 ${flipN(flip, 2.6)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
fp.push(`(fp_line (start 4.47 ${flipN(flip, 2.6)}) (end 4.47 ${flipN(flip, 1.12)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, -2.68)}) (end -4.47 ${flipN(flip, -1.12)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
fp.push(`(fp_line (start 4.47 ${flipN(flip, -2.68)}) (end 4.47 ${flipN(flip, -1.12)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);

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