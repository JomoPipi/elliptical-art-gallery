
const S = Math.min(w2, h2) / 3.0

export function run() {
    const t = Date.now()
    ctx.clearRect(0,0,W,H)
    const t2 = t / 10.0
    const t3 = (t / 1000 | 0) % 25 + 26
    const A = Math.sin(t2 / 500.0)
    const aweight = (1 + Math.sin(t2 / 318.0)) / 2.0
    const N = (1 + A) * aweight * 50
    for (let i = 0; i < N; i++)
    {
        const c = A * i
        const R = 155 + Math.sin(c ** 1.1) * 100
        const G = 155 + Math.sin(c ** 1.2) * 100
        const B = 155 + Math.sin(c ** 1.3) * 100
        ctx.fillStyle = ctx.strokeStyle = `rgb(${R},${G},${B})`
        const b = (t2 + i) / 50.0
        const a = ((t + i * 100) / 200.0) % 10
        const a2 = i / (Math.sin(t / 200.0) * 2 + 5.0)
        // const aweight = Math.sin(t2 / 2000)
        // console.log(aweight)
        const a3 = a2 /// aweight > 0.5 ? a : a2
        // const a3 = aweight * a + (1 - aweight) * a2 
        
        const rx = (1 + Math.sin(b)) * S + 5
        const ry = (1 + Math.sin(b + 2)) * S + 5
        ellipse(w2, h2, rx, ry, a3)
    }
}