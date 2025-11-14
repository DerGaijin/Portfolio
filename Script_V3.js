document.addEventListener("DOMContentLoaded", () => {
    SetupBackground();
});

window.onscroll = function () {
    // AttachHeaderContent();
};

function AttachHeaderContent() {
    var MH_Content = document.getElementById("MH_Content");

    if (window.scrollY >= 292) {
        MH_Content.classList.add("MH_ContentFixed");
    } else {
        MH_Content.classList.remove("MH_ContentFixed");
    }
}

function SetupBackground() {
    // Tiny starfield with subtle parallax & twinkle — tuned for perf
    const canvas = document.getElementById("BackgroundStars");
    const ctx = canvas.getContext("2d", { alpha: true });
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let stars = [];
    let w = 0,
        h = 0;
    let mouseX = 0,
        mouseY = 0; // for gentle parallax

    const STAR_COUNT = 220; // adjust density here

    function resize() {
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(a, b) {
        return a + Math.random() * (b - a);
    }

    function createStars() {
        stars = new Array(STAR_COUNT).fill(0).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: rand(0.4, 1.6),
            a: rand(0.3, 0.9), // base alpha
            tw: rand(0.002, 0.008), // twinkle speed
            phase: Math.random() * Math.PI * 2,
            z: Math.random() * 0.6 + 0.4, // depth for parallax
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const px = (mouseX - w / 2) * 0.002;
        const py = (mouseY - h / 2) * 0.002;
        for (const s of stars) {
            const twinkle = (Math.sin(performance.now() * s.tw + s.phase) + 1) / 2; // 0..1
            const alpha = s.a * (0.6 + 0.4 * twinkle);
            const sx = s.x + px * (1 - s.z) * 50; // gentle parallax
            const sy = s.y + py * (1 - s.z) * 50;

            // soft star
            const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 2.5 * s.r);
            grad.addColorStop(0, `hsla(260, 80%, 80%, ${alpha})`);
            grad.addColorStop(1, "hsla(260, 80%, 80%, 0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(sx, sy, 2.5 * s.r, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    function onMove(e) {
        if (e.touches && e.touches[0]) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    }

    window.addEventListener("resize", () => {
        resize();
        createStars();
    });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    resize();
    createStars();
    draw();
}
