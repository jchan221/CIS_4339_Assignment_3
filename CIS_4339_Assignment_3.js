const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    create() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0,
            Math.PI * 2, false)
            context.fillStyle = this.color
            context.fill()

    }
}
class Golfball {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    create() {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0,
            Math.PI * 2, false)
            context.fillStyle = this.color
            context.fill()
        }
}

const player = new Player (100, 100, 30, 'red')
player.create()

console.log(player)

window.addEventListener('click', (event) => {
    const golfball = new Golfball(
        event.clientX, event.clientY, 5, 'blue', null
    )
    golfball.create()
})

