
const S = Math.min(w2, h2) / 3.0

export function run() {
    const t = Date.now()
    ctx.clearRect(0,0,W,H)
    const t2 = t / 10.0
    const A = Math.sin(t2 / 100.0)
    for (let i = 0; i < 50; i++)
    {
        const c = A * i
        const R = 155 + Math.sin(c ** 1.1) * 100
        const G = 155 + Math.sin(c ** 1.2) * 100
        const B = 155 + Math.sin(c ** 1.3) * 100
        ctx.fillStyle = ctx.strokeStyle = `rgb(${R},${G},${B})`
        const b = (t2 + i) / 50.0
        const a = i / (Math.sin(t2 / 200.0) * 2 + 5.0)
        const rx = (1 + Math.sin(b)) * S + 5
        const ry = (1 + Math.sin(b + 2)) * S + 5
        ellipse(w2, h2, rx, ry, a)
    }
}