// Pure Web Audio API micro-interactions (Zero asset latency, no external audio files)

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

// Safe lazy initialization on first user interaction
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("dentalarc_sound");
    if (stored !== null) {
      return stored === "true";
    }
  }
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (typeof window !== "undefined") {
    localStorage.setItem("dentalarc_sound", String(enabled));
  }
}

export function toggleSound(): boolean {
  const nextState = !isSoundEnabled();
  setSoundEnabled(nextState);
  if (nextState) {
    playSnap(520, 0.08);
  }
  return nextState;
}

/**
 * Crisp high-precision mechanical tick (like a Leica focus ring or Rolex bezel click)
 * Used on draggable Before/After slider and fine step controls
 */
export function playTick(frequency = 2400, volume = 0.04): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Highpass to eliminate low thuds and preserve crisp click
    filter.type = "highpass";
    filter.frequency.setValueAtTime(1400, ctx.currentTime);

    osc.type = "triangle";
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.012);

    // Micro envelope (12ms)
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.012);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.014);
  } catch {
    // Fail silently if browser audio is restricted
  }
}

/**
 * Tactile acoustic snap (used for modal popups, accordion toggles, button clicks)
 */
export function playSnap(frequency = 420, volume = 0.07): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.028);

    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.028);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  } catch {
    // Fail silently
  }
}

/**
 * Warm subtle chime for successful actions / concierge selection
 */
export function playTone(frequency = 580, volume = 0.05): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch {
    // Fail silently
  }
}
