"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  rotation: number
  rotationSpeed: number
  type: "dna" | "cell" | "molecule" | "sakura"
}

export function BioAnimation() {
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

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.floor(window.innerWidth / 10) // Adjust density based on screen width

    // Colors
    const colors = [
      "#4FD1C5", // teal
      "#63B3ED", // blue
      "#9F7AEA", // purple
      "#F687B3", // pink
      "#68D391", // green
    ]

    // Create different types of particles
    for (let i = 0; i < particleCount; i++) {
      const type =
        Math.random() < 0.25 ? "dna" : Math.random() < 0.5 ? "cell" : Math.random() < 0.75 ? "molecule" : "sakura"

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 5,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        type,
      })
    }

    // Draw a DNA helix
    function drawDNA(x: number, y: number, size: number, rotation: number, color: string, opacity: number) {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.globalAlpha = opacity

      // Draw the double helix
      const width = size * 1.5
      const height = size * 2

      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = 2

      // First strand
      ctx.beginPath()
      for (let i = 0; i < height; i += 5) {
        const xPos = Math.sin(i * 0.2) * (width / 2)
        ctx.lineTo(xPos, i - height / 2)
      }
      ctx.stroke()

      // Second strand
      ctx.beginPath()
      for (let i = 0; i < height; i += 5) {
        const xPos = -Math.sin(i * 0.2) * (width / 2)
        ctx.lineTo(xPos, i - height / 2)
      }
      ctx.stroke()

      // Connecting lines
      for (let i = 0; i < height; i += 10) {
        ctx.beginPath()
        const xPos1 = Math.sin(i * 0.2) * (width / 2)
        const xPos2 = -Math.sin(i * 0.2) * (width / 2)
        ctx.moveTo(xPos1, i - height / 2)
        ctx.lineTo(xPos2, i - height / 2)
        ctx.stroke()
      }

      ctx.restore()
    }

    // Draw a cell
    function drawCell(x: number, y: number, size: number, color: string, opacity: number) {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)
      ctx.globalAlpha = opacity

      // Cell membrane
      ctx.beginPath()
      ctx.fillStyle = `${color}33` // Very transparent
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      ctx.arc(0, 0, size, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      // Nucleus
      ctx.beginPath()
      ctx.fillStyle = `${color}66` // Semi-transparent
      ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2)
      ctx.fill()

      // Organelles
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * size * 0.5 + size * 0.2
        const orgSize = size * 0.15

        ctx.beginPath()
        ctx.fillStyle = `${color}99` // More opaque
        ctx.arc(Math.cos(angle) * distance, Math.sin(angle) * distance, orgSize, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }

    // Draw a molecule
    function drawMolecule(x: number, y: number, size: number, rotation: number, color: string, opacity: number) {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.globalAlpha = opacity

      // Atoms
      const atomPositions = [
        { x: 0, y: 0 },
        { x: size, y: 0 },
        { x: size * 0.5, y: size * 0.866 },
        { x: -size * 0.5, y: size * 0.866 },
        { x: -size, y: 0 },
        { x: -size * 0.5, y: -size * 0.866 },
        { x: size * 0.5, y: -size * 0.866 },
      ]

      // Draw bonds (lines)
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = 2

      for (let i = 0; i < atomPositions.length; i++) {
        // Connect to center
        ctx.moveTo(0, 0)
        ctx.lineTo(atomPositions[i].x, atomPositions[i].y)
      }

      ctx.stroke()

      // Draw atoms (circles)
      for (let i = 0; i < atomPositions.length; i++) {
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(atomPositions[i].x, atomPositions[i].y, size * 0.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Center atom
      ctx.beginPath()
      ctx.fillStyle = `${color}CC` // More opaque
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    // Draw a sakura petal
    function drawSakura(x: number, y: number, size: number, rotation: number, color: string, opacity: number) {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.globalAlpha = opacity

      // Draw a petal shape
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(size / 2, -size / 2, size, -size / 4, size, 0)
      ctx.bezierCurveTo(size, size / 4, size / 2, size / 2, 0, 0)
      ctx.fill()

      // Add some detail
      ctx.beginPath()
      ctx.strokeStyle = `${color}66` // Semi-transparent
      ctx.lineWidth = 1
      ctx.moveTo(0, 0)
      ctx.lineTo(size * 0.8, 0)
      ctx.stroke()

      ctx.restore()
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw based on particle type
        switch (particle.type) {
          case "dna":
            drawDNA(particle.x, particle.y, particle.size, particle.rotation, particle.color, particle.opacity)
            break
          case "cell":
            drawCell(particle.x, particle.y, particle.size, particle.color, particle.opacity)
            break
          case "molecule":
            drawMolecule(particle.x, particle.y, particle.size, particle.rotation, particle.color, particle.opacity)
            break
          case "sakura":
            drawSakura(particle.x, particle.y, particle.size, particle.rotation, particle.color, particle.opacity)
            break
        }
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
      style={{ opacity: 0.7 }}
    />
  )
}
