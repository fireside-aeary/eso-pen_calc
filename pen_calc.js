document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the values from the inputs
    const basePen = 0; // Base penetration value
    const attribute1 = document.getElementById('attribute1').checked;
    const attribute2 = document.getElementById('attribute2').checked;
    const attribute3 = document.getElementById('attribute3').checked;
    const attribute4 = document.getElementById('attribute4').checked;
    const attribute5 = document.getElementById('attribute5').checked;
    const attribute6 = document.getElementById('attribute6').checked;
    const attribute7 = document.getElementById('attribute7').checked;
    const attribute8 = document.getElementById('attribute8').checked;
    const attribute9 = document.getElementById('attribute9').checked;
    const herald = document.getElementById('herald').value;
    const attribute11 = document.getElementById('attribute11').checked;
    const attribute12 = document.getElementById('attribute12').checked;
    const attribute13 = document.getElementById('attribute13').checked;
    const dwMaces = document.getElementById('dwMaces').value;
    const lightArmor = document.getElementById('lightArmor').value;
    const gearPen = document.getElementById('gearPen').value;

    // Calculate penetration
    let totalPen = basePen;

    // Apply effects based on checkbox selections
    if (attribute1) {
        totalPen += 5948; // Maj. Breach
    }
    if (attribute2) {
        totalPen += 2984; // Min. Breach
    }
    if (attribute3) {
        totalPen += 2108; // Crusher
    }
    if (attribute4) {
        totalPen += 2200; // Runic Sunder
    }
    if (attribute5) {
        totalPen += 1000; // Crystal Weapon
    }
    if (attribute6) {
        totalPen += 2640; // Tremor
    }
    if (attribute7) {
        totalPen += 3541; // Crimson Oath
    }
    if (attribute8) {
        totalPen += 6000; // Alkosh
    }
    if (attribute9) {
        totalPen += 1650; // Velothi
    }
        if (gearPen) {
        gearPenAmount = parseFloat(document.getElementById('gearPen').value);
        totalPen += gearPenAmount * 1487; // Gear Penetration (1487 per piece)
    }
    if (lightArmor) {
        lightArmorAmount = parseFloat(document.getElementById('lightArmor').value);
        totalPen += lightArmorAmount * 939; // Light Armor (939 per piece)
    }
    if (herald) {
        heraldAmount = parseFloat(document.getElementById('herald').value);
        totalPen += heraldAmount * 1240; // Herald (1240 per piece)
    }
    if (attribute11) {
        totalPen += 3271; // Grave Lord
    }
    if (attribute12) {
        totalPen += 700; // Piercing
    }
    if (attribute13) {
        totalPen += 1980; // Force of Nature
    }
    if (dwMaces) {
        dwMacesAmount = parseFloat(document.getElementById('dwMaces').value);
        totalPen += dwMacesAmount * 1487; // Dual Wield Maces (1487 per piece)
    }


    // Display the result
    document.getElementById('result').textContent = `Penetration: ${totalPen}`;
});