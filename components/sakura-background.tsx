"use client"

import { useEffect, useRef } from "react"

interface Petal {
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  opacity: number
  rotationSpeed: number
}

export function SakuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create petals
    const petals: Petal[] = []
    const petalCount = Math.floor(window.innerWidth / 15) // Adjust density based on screen width

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        rotationSpeed: (Math.random() - 0.5) * 2,
      })
    }

    // Draw a petal
    function drawPetal(petal: Petal) {
      if (!ctx) return

      ctx.save()
      ctx.translate(petal.x, petal.y)
      ctx.rotate((petal.rotation * Math.PI) / 180)
      ctx.beginPath()

      // Draw a petal shape
      ctx.fillStyle = `rgba(255, 218, 224, ${petal.opacity})`
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(petal.size / 2, -petal.size / 2, petal.size, -petal.size / 4, petal.size, 0)
      ctx.bezierCurveTo(petal.size, petal.size / 4, petal.size / 2, petal.size / 2, 0, 0)
      ctx.fill()
      ctx.restore()
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      petals.forEach((petal) => {
        petal.y += petal.speed
        petal.x += Math.sin(petal.y / 50) * 0.5
        petal.rotation += petal.rotationSpeed

        // Reset petal when it goes off screen
        if (petal.y > canvas.height) {
          petal.y = -petal.size
          petal.x = Math.random() * canvas.width
        }

        drawPetal(petal)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
