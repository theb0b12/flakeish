module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "gateron-ks27-hotswap-reversible"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "" np_thru_hole circle (at -2.6 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at -4.4 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 4.4 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 5 5) (drill 5) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 2.6 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "F&B.Cu" "*.Mask") )`);

fp.push(`(pad "1" smd rect (at -7.675 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.from})`);
// fp.push(`(pad "1" smd rect (at -5.875 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.from})`);
fp.push(`(pad "2" smd rect (at 5.875 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.to})`);
// fp.push(`(pad "2" smd rect (at 7.675 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Paste" "${(flip ? "F" : "B")}.Mask")  ${p.to})`);

// fp.push(`(pad "1" smd rect (at -7.675 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(!flip ? "F" : "B")}.Cu" "${(!flip ? "F" : "B")}.Paste" "${(!flip ? "F" : "B")}.Mask")  ${p.from})`);
fp.push(`(pad "1" smd rect (at -5.875 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(!flip ? "F" : "B")}.Cu" "${(!flip ? "F" : "B")}.Paste" "${(!flip ? "F" : "B")}.Mask")  ${p.from})`);
// fp.push(`(pad "2" smd rect (at 5.875 ${flipN(flip, 5.75)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(!flip ? "F" : "B")}.Cu" "${(!flip ? "F" : "B")}.Paste" "${(!flip ? "F" : "B")}.Mask")  ${p.to})`);
fp.push(`(pad "2" smd rect (at 7.675 ${flipN(flip, 4.7)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(!flip ? "F" : "B")}.Cu" "${(!flip ? "F" : "B")}.Paste" "${(!flip ? "F" : "B")}.Mask")  ${p.to})`);


// Drawings on F.Fab
// fp.push(`(fp_text value "gateron-ks27-hotswap-reversible" (at 0 ${flipN(flip, 8.5)} ${flipR(flip, p.r) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
// fp.push(`(fp_line (start 7.5 ${flipN(flip, 7.5)}) (end 7.5 ${flipN(flip, -7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
// fp.push(`(fp_line (start -7.5 ${flipN(flip, -7.5)}) (end -7.5 ${flipN(flip, 7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
// fp.push(`(fp_line (start -7.5 ${flipN(flip, 7.5)}) (end 7.5 ${flipN(flip, 7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
// fp.push(`(fp_line (start 7.5 ${flipN(flip, -7.5)}) (end -7.5 ${flipN(flip, -7.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);

// // Drawings on F.SilkS
// fp.push(`(fp_text reference "REF**" (at 0.1 ${flipN(flip, -8.5)} ${flipR(flip, p.r ) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// // Drawings on Eco2.User
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

