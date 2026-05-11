function setup() {
    createCanvas(1000, 900);
}

function draw() {
    background(0);
    
    // Stars
    strokeWeight(2);
    stroke(255);
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        point(x, y);
    }

    let centerX = width / 2;
    let centerY = height / 2;
    
    // Sun diameter in km and drawn size
    let sunDiameterKm = 1391000;
    let sunDrawnSize = 30;

    // Sun
    let sunColor1 = color(255, 204, 0);
    let sunColor2 = color(255, 128, 0);
    let blend = (sin(frameCount * 0.05) + 1) / 2;
    fill(lerpColor(sunColor1, sunColor2, blend));
    noStroke();
    ellipse(centerX, centerY, sunDrawnSize, sunDrawnSize);

    // Orbits
    noFill();
    stroke(255, 150);
    strokeWeight(1);
    let planets = [
        {name: 'Mercury', diameter: 4879, period: 88, color: color(200, 200, 200)},
        {name: 'Venus', diameter: 12104, period: 225, color: color(255, 165, 0)},
        {name: 'Earth', diameter: 12742, period: 365, color: color(0, 0, 255)},
        {name: 'Mars', diameter: 6779, period: 687, color: color(255, 0, 0)},
        {name: 'Jupiter', diameter: 139820, period: 4333, color: color(255, 215, 0)},
        {name: 'Saturn', diameter: 116460, period: 10759, color: color(255, 255, 0)},
        {name: 'Uranus', diameter: 50724, period: 30687, color: color(0, 255, 255)},
        {name: 'Neptune', diameter: 49244, period: 60182, color: color(0, 0, 128)}
    ];

    for (let i = 0; i < planets.length; i++) {
        let orbitRadius = 80 + (i + 1) * 45;
        let orbitDiameter = orbitRadius * 2;
        ellipse(centerX, centerY, orbitDiameter, orbitDiameter);
    }

    for (let i = 0; i < planets.length; i++) {
        let planet = planets[i];
        let angle = (TWO_PI * frameCount) / (planet.period * 30);
        let orbitRadius = 80 + (i + 1) * 45;
        let x = centerX + orbitRadius * cos(angle);
        let y = centerY + orbitRadius * sin(angle);

        let size = max(5, (planet.diameter / sunDiameterKm) * sunDrawnSize * 1.8);
        fill(planet.color);
        noStroke();
        ellipse(x, y, size, size);
    }
}