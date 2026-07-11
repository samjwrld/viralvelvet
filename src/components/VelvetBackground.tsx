import { useEffect, useRef } from "react";

// WebGL helper: Compile shader
function compileShader(gl: WebGLRenderingContext, source: string, type: number): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

// WebGL helper: Create program
function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram | null {
  const vs = compileShader(gl, vsSource, gl.VERTEX_SHADER);
  const fs = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

interface DustParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function VelvetBackground() {
  const webglCanvasRef = useRef<HTMLCanvasElement>(null);
  const dustCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const hasMovedRef = useRef(false);

  // High-fidelity touch interactive arrays
  const touchSparksRef = useRef<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    color: string;
    decay: number;
    gravity: number;
  }[]>([]);

  const touchRipplesRef = useRef<{
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    alpha: number;
    speed: number;
  }[]>([]);

  // Emitters
  const spawnSparks = (x: number, y: number, count: number, isTouch: boolean) => {
    const sparks = touchSparksRef.current;
    if (sparks.length > 200) {
      sparks.splice(0, sparks.length - 200);
    }

    const baseSize = isTouch ? 2.8 : 1.5;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * (isTouch ? 4.0 : 2.0) + 0.6;
      
      const golds = [
        "rgba(255, 215, 0,",   // Pure Gold
        "rgba(230, 195, 100,",  // Muted Gold
        "rgba(244, 164, 96,",   // Sandy Amber
        "rgba(212, 175, 55,",   // Metallic Gold
        "rgba(255, 223, 0,",    // Golden Yellow
      ];
      const selectedGold = golds[Math.floor(Math.random() * golds.length)];

      sparks.push({
        x,
        y,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.3,
        vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.3,
        size: Math.random() * baseSize + 0.5,
        alpha: 1.0,
        color: selectedGold,
        decay: Math.random() * 0.025 + 0.012,
        gravity: isTouch ? 0.03 : 0.01, // slow elegant gold leaf floating down
      });
    }
  };

  const spawnRipple = (x: number, y: number, isTouch: boolean) => {
    const ripples = touchRipplesRef.current;
    if (ripples.length > 8) {
      ripples.shift();
    }
    ripples.push({
      x,
      y,
      radius: 4,
      maxRadius: isTouch ? 110 : 70,
      alpha: 0.9,
      speed: isTouch ? 3.2 : 2.2,
    });
  };

  // Mouse and Touch movement listener
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let moveThreshold = 12; // spawn trail if finger moves enough pixels to prevent clumping

    const handleMouseMove = (e: MouseEvent) => {
      targetXRef.current = e.clientX;
      targetYRef.current = e.clientY;
      hasMovedRef.current = true;

      // Subtle desktop hover sparkles
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > moveThreshold) {
        if (Math.random() < 0.25) {
          spawnSparks(e.clientX, e.clientY, 1, false);
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        targetXRef.current = touch.clientX;
        targetYRef.current = touch.clientY;
        hasMovedRef.current = true;

        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Continuously spawn beautiful stardust trail along the dragging motion
        if (dist > moveThreshold - 4) {
          spawnSparks(touch.clientX, touch.clientY, 3, true);
          lastX = touch.clientX;
          lastY = touch.clientY;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        targetXRef.current = touch.clientX;
        targetYRef.current = touch.clientY;
        hasMovedRef.current = true;
        
        lastX = touch.clientX;
        lastY = touch.clientY;

        // Rich tap-burst feedback on mobile touch
        spawnSparks(touch.clientX, touch.clientY, 18, true);
        spawnRipple(touch.clientX, touch.clientY, true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  // WebGL Velvet and Golden Kintsugi Shader Effect
  useEffect(() => {
    const canvas = webglCanvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext | null;
    if (!gl) {
      console.warn("WebGL not supported, falling back to basic rendering mode");
      return;
    }

    // Vertex Shader: Full screen quad
    const vsSource = `
      attribute vec2 position;
      varying vec2 v_uv;
      void main() {
        v_uv = position * 0.5 + 0.5;
        // Flip Y for standard screen coordinates
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: High-performance velvet drapes & golden kintsugi cracks with cinematic noise
    const fsSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_has_moved;

      varying vec2 v_uv;

      // Pseudo-random noise functions
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      // Fractional Brownian Motion for procedural fabric textures & cracks
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        // Rotate to reduce axial bias
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < 4; ++i) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      // Ridge/Crease noise for golden kintsugi marble cracks
      float ridgeNoise(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.6), sin(0.6), -sin(0.6), cos(0.6));
        for (int i = 0; i < 5; ++i) {
          float n = noise(p);
          v += a * (1.0 - abs(n * 2.0 - 1.0));
          p = rot * p * 2.1 + shift;
          a *= 0.48;
        }
        return v;
      }

      // Velvet Drapery Heightmap Generator
      // Produces flowing diagonal/sweeping curves similar to heavy velvet curtains
      float getVelvetHeight(vec2 uv, float t) {
        // Slow fabric breathing motion
        float slowBreathing = sin(t * 0.4) * 0.05;
        
        // Base coordinate distortion to curve the folds (swooping left-to-bottom)
        vec2 p = uv;
        p.y += sin(p.x * 2.3 + t * 0.15) * (0.2 + slowBreathing);
        p.x -= p.y * 0.18;

        // Overlay multiple harmonics for realistic cloth thickness/draping behavior
        float h = sin(p.y * 5.5 + p.x * 1.5) * 0.45;
        h += sin(p.y * 11.0 - p.x * 3.0) * 0.12;
        h += cos(p.x * 8.0 + p.y * 4.0 + t * 0.1) * 0.04;
        h += fbm(p * 4.0) * 0.08;

        return h;
      }

      void main() {
        vec2 uv = v_uv;
        float time = u_time * 0.7; // steady motion

        // 1. Compute surface normal of velvet drapery folds (finite differences)
        float eps = 0.008;
        float hc = getVelvetHeight(uv, time);
        float hx = getVelvetHeight(uv + vec2(eps, 0.0), time);
        float hy = getVelvetHeight(uv + vec2(0.0, eps), time);

        // Calculate custom tangent space normal with smoother transitions
        float bumpiness = 1.4; // controls dramatic fold shadow depth
        vec3 N = normalize(vec3((hc - hx) * bumpiness, (hc - hy) * bumpiness, eps));

        // 2. Light calculations
        // Default spotlight sweeping slowly in upper-right quadrant
        vec2 lightPos = vec2(0.72 + sin(time * 0.8) * 0.18, 0.35 + cos(time * 0.5) * 0.08);

        // Interpolate mouse position if user moved their mouse
        if (u_has_moved > 0.5) {
          lightPos = u_mouse / u_resolution;
        }

        vec3 L = normalize(vec3(lightPos - uv, 0.12)); // light vector
        vec3 V = vec3(0.0, 0.0, 1.0);                  // view vector (pointing out of screen)
        vec3 H = normalize(L + V);                     // half-angle vector

        // Velvet reflection/absorption BRDF
        float NdotL = max(dot(N, L), 0.0);
        float NdotV = max(dot(N, V), 0.0);

        // Deep rich grazing angle sheen characteristic of micro-fiber velvet pile
        float sheen = pow(1.0 - NdotV, 3.2) * 0.82;
        float rimHighlight = pow(1.0 - NdotL, 4.5) * sheen * 1.5;

        // Matte fabric body diffuse (absorbing light)
        float diffuse = pow(NdotL, 1.8) * 0.65;

        // 3. Texture and color design (matching the gorgeous velvet-red #4B0B14)
        vec3 shadowColor = vec3(0.06, 0.004, 0.008); // Near-black burgundy
        vec3 baseColor   = vec3(0.29, 0.043, 0.078); // Rich Velvet Red (#4B0B14)
        vec3 peakColor   = vec3(0.48, 0.066, 0.117); // Bright Lustrous Crimson (#7A111E)
        vec3 goldSheen   = vec3(0.92, 0.78, 0.44);   // Royal Gold highlight for rim reflection

        // Blend colors across folds
        float foldMask = hc * 0.5 + 0.5;
        vec3 fabricColor = mix(shadowColor, baseColor, foldMask);
        fabricColor = mix(fabricColor, peakColor, diffuse);
        
        // Combine fabric shading models
        vec3 finalColor = fabricColor + rimHighlight * goldSheen * 0.42;

        // Apply global vignetting & luxury dark ambient gradient
        float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y) * 16.0;
        vignette = mix(0.12, 1.0, pow(vignette, 0.6));
        finalColor *= vignette;

        // 4. Procedural Golden Kintsugi Veins & Marble Fractures
        // Generate high-quality lightning-like fractures based on crease/ridge noise
        vec2 crackUv = uv * 3.8;
        // Distort coordinates with FBM for organic liquid gold look
        crackUv += vec2(fbm(crackUv * 1.2), fbm(crackUv + 12.0)) * 0.32;
        
        float cracks = ridgeNoise(crackUv);
        // Isolate thin, highly sharp fracture lines
        float crackWidth = 0.012;
        float sharpCrack = smoothstep(0.91, 0.94, cracks);

        // Position mask: Focus cracks in top-right and down the diagonal (mirroring the reference image)
        float crackRegionMask = smoothstep(0.18, 0.95, uv.x + (1.0 - uv.y) * 0.5);
        sharpCrack *= crackRegionMask;

        // Dual gold layering (glowing orange-yellow core under bright white-gold shine)
        vec3 goldCrackCore = vec3(1.0, 0.88, 0.55);
        vec3 goldCrackGlow = vec3(0.85, 0.55, 0.15);
        vec3 crackColor = mix(goldCrackGlow * 1.8, goldCrackCore, sharpCrack);

        // Compositing kintsugi cracks onto the velvet textile
        if (sharpCrack > 0.05) {
          finalColor = mix(finalColor, crackColor, sharpCrack * 0.95);
        }

        // 5. Clean output without any grain or weave structure distortion
        gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);
      }
    `;

    // Create shader program
    const program = createProgram(gl, vsSource, fsSource);
    if (!program) return;

    // Set up geometry (full-screen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Look up uniforms and attributes
    const positionLocation = gl.getAttribLocation(program, "position");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const hasMovedLocation = gl.getUniformLocation(program, "u_has_moved");

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Resize handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = Math.floor(entryWidth);
        height = Math.floor(entryHeight);
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    });

    const parentElement = canvas.parentElement;
    if (parentElement) {
      resizeObserver.observe(parentElement);
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }

    const startTime = performance.now();

    const drawWebGL = () => {
      if (!canvas || !gl) return;

      const currentTime = (performance.now() - startTime) / 1000;

      gl.clearColor(0.035, 0.004, 0.008, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      // Set up position attribute
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Bind uniforms
      gl.uniform2f(resolutionLocation, width, height);
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(mouseLocation, mouseXRef.current, mouseYRef.current);
      gl.uniform1f(hasMovedLocation, hasMovedRef.current ? 1.0 : 0.0);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // Update Mouse position interpolation
      mouseXRef.current += (targetXRef.current - mouseXRef.current) * 0.045;
      mouseYRef.current += (targetYRef.current - mouseYRef.current) * 0.045;

      animationFrameId = requestAnimationFrame(drawWebGL);
    };

    drawWebGL();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  // Soft Golden Dust Overlay Renderer (HTML5 Canvas 2D)
  useEffect(() => {
    const canvas = dustCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const particlesCount = 38;
    const particles: DustParticle[] = [];

    const initParticles = (w: number, h: number) => {
      particles.length = 0;
      for (let i = 0; i < particlesCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.45,
          speedY: -(Math.random() * 0.12 + 0.03),
          speedX: Math.random() * 0.08 - 0.04,
          opacity: Math.random() * 0.38 + 0.12,
          pulseSpeed: Math.random() * 0.012 + 0.005,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = Math.floor(entryWidth);
        height = Math.floor(entryHeight);
        canvas.width = width;
        canvas.height = height;
        initParticles(width, height);
      }
    });

    const parentElement = canvas.parentElement;
    if (parentElement) {
      resizeObserver.observe(parentElement);
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    }

    const renderDust = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render normal floating background gold dust particles
      ctx.save();
      particles.forEach((p) => {
        p.pulsePhase += p.pulseSpeed;
        const currentOpacity = p.opacity * (0.45 + Math.sin(p.pulsePhase) * 0.55);

        let currentX = p.x;
        let currentY = p.y;

        // Gravitational drag toward mouse/finger
        if (hasMovedRef.current) {
          const dx = mouseXRef.current - p.x;
          const dy = mouseYRef.current - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 260) {
            const pullForce = (260 - dist) / 2200;
            currentX += dx * pullForce;
            currentY += dy * pullForce;
          }
        }

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);

        ctx.shadowColor = "#E6C575";
        ctx.shadowBlur = 4;
        ctx.fillStyle = `rgba(230, 195, 100, ${currentOpacity})`;
        ctx.fill();

        // Slow float upward
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around viewport edges
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;
      });
      ctx.restore();

      // 2. Render highly interactive expanding tactile touch/pointer ripples
      ctx.save();
      const ripples = touchRipplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= r.speed / r.maxRadius; // gradual fade out

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(230, 195, 117, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#E6C575";
        ctx.shadowBlur = 8;
        ctx.stroke();

        // Subtle inner echo ring
        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 12, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(230, 195, 117, ${r.alpha * 0.45})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      ctx.restore();

      // 3. Render active, physics-based golden touch sparks & stardust trail
      ctx.save();
      const sparks = touchSparksRef.current;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += s.gravity; // drift gravity
        s.vx *= 0.98;       // friction resistance
        s.vy *= 0.98;
        s.alpha -= s.decay; // fade-out over lifetime

        if (s.alpha <= 0 || s.size <= 0.15) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.shadowColor = "#E6C575";
        ctx.shadowBlur = s.size * 3.5;
        ctx.fillStyle = s.color + `${s.alpha})`;
        ctx.fill();

        // Star-like horizontal/vertical cross glints for premium larger sparks
        if (s.size > 2.4 && s.alpha > 0.45) {
          ctx.strokeStyle = `rgba(255, 235, 150, ${s.alpha * 0.7})`;
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 2.8, s.y);
          ctx.lineTo(s.x + s.size * 2.8, s.y);
          ctx.moveTo(s.x, s.y - s.size * 2.8);
          ctx.lineTo(s.x, s.y + s.size * 2.8);
          ctx.stroke();
        }
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(renderDust);
    };

    renderDust();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div id="velvet-container" className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
      {/* High-Performance WebGL Layer: Renders 3D Velvet Drapes & Golden Kintsugi Veins */}
      <canvas ref={webglCanvasRef} className="absolute inset-0 w-full h-full block" />
      
      {/* Golden Dust Particles Layer (HTML5 Canvas 2D) */}
      <canvas ref={dustCanvasRef} className="absolute inset-0 w-full h-full block mix-blend-screen" />
      
      {/* Deep luxury ambient shadow vignette to secure typography readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/30 via-transparent to-[#050505]/70 pointer-events-none" />
    </div>
  );
}
