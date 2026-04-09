export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 720 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        {/* Glow filter — teal */}
        <filter id="glow-t" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Strong glow for shield */}
        <filter id="glow-s" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Glow for lock (intense) */}
        <filter id="glow-l" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Shield gradient */}
        <linearGradient id="shield-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="shield-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
        </linearGradient>
        {/* Shield outer glow halo */}
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
        </radialGradient>
        {/* Left packet gradient — warm muted */}
        <radialGradient id="pkt-left" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#64748b" stopOpacity="0.6" />
        </radialGradient>
        {/* Right packet gradient — encrypted teal */}
        <radialGradient id="pkt-right" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
        </radialGradient>
        {/* Lock symbol as reusable shape */}
        <symbol id="lock" viewBox="-7 -10 14 20">
          {/* Body */}
          <rect x="-5.5" y="-2" width="11" height="9" rx="2" fill="currentColor" />
          {/* Shackle */}
          <path d="M-3.5,-2 L-3.5,-5 A3.5,3.5 0 0,1 3.5,-5 L3.5,-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          {/* Keyhole */}
          <circle cx="0" cy="2.5" r="1.5" fill="rgba(6,10,20,0.8)" />
          <rect x="-1" y="2.5" width="2" height="2.5" fill="rgba(6,10,20,0.8)" />
        </symbol>

        {/* Paths for motion — three streams */}
        <path id="p-top-l"    d="M60,100 C160,100 210,130 310,130" />
        <path id="p-mid-l"    d="M60,130 L310,130" />
        <path id="p-bot-l"    d="M60,160 C160,160 210,130 310,130" />
        <path id="p-top-r"    d="M410,130 C510,130 560,100 660,100" />
        <path id="p-mid-r"    d="M410,130 L660,130" />
        <path id="p-bot-r"    d="M410,130 C510,130 560,160 660,160" />
      </defs>

      {/* ── Shield halo pulse ─────────────────────────── */}
      <ellipse cx="360" cy="130" rx="130" ry="100" fill="url(#halo)">
        <animate attributeName="rx" values="110;145;110" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="85;115;85" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3.2s" repeatCount="indefinite" />
      </ellipse>

      {/* ── Stream guide lines (dashed) ──────────────── */}
      {/* Top stream */}
      <path d="M60,100 C160,100 210,130 310,130" stroke="rgba(148,163,184,0.12)" strokeWidth="1" strokeDasharray="5 8" />
      {/* Middle stream */}
      <line x1="60" y1="130" x2="310" y2="130" stroke="rgba(148,163,184,0.12)" strokeWidth="1" strokeDasharray="5 8" />
      {/* Bottom stream */}
      <path d="M60,160 C160,160 210,130 310,130" stroke="rgba(148,163,184,0.12)" strokeWidth="1" strokeDasharray="5 8" />
      {/* Right — top */}
      <path d="M410,130 C510,130 560,100 660,100" stroke="rgba(0,212,170,0.15)" strokeWidth="1" strokeDasharray="5 8" />
      {/* Right — middle */}
      <line x1="410" y1="130" x2="660" y2="130" stroke="rgba(0,212,170,0.15)" strokeWidth="1" strokeDasharray="5 8" />
      {/* Right — bottom */}
      <path d="M410,130 C510,130 560,160 660,160" stroke="rgba(0,212,170,0.15)" strokeWidth="1" strokeDasharray="5 8" />

      {/* ── Source node (Your Device) ─────────────────── */}
      <circle cx="60" cy="130" r="13" fill="rgba(148,163,184,0.06)" stroke="rgba(148,163,184,0.25)" strokeWidth="1.2" />
      <circle cx="60" cy="130" r="13" fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="1.2">
        <animate attributeName="r" values="13;22;13" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="130" r="5" fill="rgba(148,163,184,0.5)" />

      {/* ── Destination node (Internet) ──────────────── */}
      <circle cx="660" cy="130" r="13" fill="rgba(0,212,170,0.06)" stroke="rgba(0,212,170,0.25)" strokeWidth="1.2" />
      <circle cx="660" cy="130" r="13" fill="none" stroke="rgba(0,212,170,0.2)" strokeWidth="1.2">
        <animate attributeName="r" values="13;22;13" dur="3s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="660" cy="130" r="5" fill="rgba(0,212,170,0.6)" />

      {/* ── Shield body ───────────────────────────────── */}
      <path
        d="M360 64 L404 81 L404 118 C404 150 385 170 360 178 C335 170 316 150 316 118 L316 81 Z"
        fill="url(#shield-fill)"
        stroke="url(#shield-stroke)"
        strokeWidth="1.8"
        filter="url(#glow-s)"
      />
      {/* Shield scan line */}
      <line x1="320" y1="90" x2="400" y2="90" stroke="rgba(0,212,170,0.45)" strokeWidth="1">
        <animate attributeName="y1" values="90;165;90" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="y2" values="90;165;90" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.6s" repeatCount="indefinite" />
      </line>
      {/* Shield checkmark */}
      <path
        d="M344 128 L355 139 L378 116"
        fill="none"
        stroke="#00d4aa"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-t)"
      >
        <animate attributeName="opacity" values="0.75;1;0.75" dur="2.2s" repeatCount="indefinite" />
      </path>

      {/* ── INCOMING DATA PACKETS (left → shield) ────── */}
      {/* Top stream — size 5 */}
      <circle r="5" fill="url(#pkt-left)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
          <mpath href="#p-top-l" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.4s" repeatCount="indefinite" begin="0s" />
      </circle>
      {/* Top stream — size 3 */}
      <circle r="3" fill="url(#pkt-left)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.9s">
          <mpath href="#p-top-l" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.4s" repeatCount="indefinite" begin="0.9s" />
      </circle>
      {/* Mid stream — size 6 */}
      <circle r="6" fill="url(#pkt-left)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.4s">
          <mpath href="#p-mid-l" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.4s" repeatCount="indefinite" begin="0.4s" />
      </circle>
      {/* Mid stream — size 4 */}
      <circle r="4" fill="url(#pkt-left)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.3s">
          <mpath href="#p-mid-l" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.4s" repeatCount="indefinite" begin="1.3s" />
      </circle>
      {/* Bot stream — size 3.5 */}
      <circle r="3.5" fill="url(#pkt-left)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.7s">
          <mpath href="#p-bot-l" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.4s" repeatCount="indefinite" begin="0.7s" />
      </circle>
      {/* Bot stream — size 5 */}
      <circle r="5" fill="url(#pkt-left)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.8s">
          <mpath href="#p-bot-l" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.4s" repeatCount="indefinite" begin="1.8s" />
      </circle>

      {/* ── TRANSFORM BURST at shield entry ──────────── */}
      {/* Burst ring every ~2.4s as packets enter */}
      <circle cx="326" cy="130" r="4" fill="none" stroke="rgba(0,212,170,0.7)" strokeWidth="1.5">
        <animate attributeName="r" values="4;16;4" dur="2.4s" repeatCount="indefinite" begin="0.55s" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" begin="0.55s" />
      </circle>
      <circle cx="326" cy="130" r="4" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="1">
        <animate attributeName="r" values="4;22;4" dur="2.4s" repeatCount="indefinite" begin="0.95s" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" begin="0.95s" />
      </circle>

      {/* ── OUTGOING ENCRYPTED (shield → right) ─────── */}
      {/* Top-right — lock icon */}
      <use href="#lock" width="14" height="20" x="-7" y="-10" color="#00d4aa" filter="url(#glow-l)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.55s">
          <mpath href="#p-top-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="0.55s" />
      </use>
      {/* Top-right — small circle */}
      <circle r="3" fill="url(#pkt-right)" filter="url(#glow-t)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.45s">
          <mpath href="#p-top-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="1.45s" />
      </circle>
      {/* Mid-right — lock icon */}
      <use href="#lock" width="14" height="20" x="-7" y="-10" color="#06b6d4" filter="url(#glow-l)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.95s">
          <mpath href="#p-mid-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="0.95s" />
      </use>
      {/* Mid-right — circle */}
      <circle r="4.5" fill="url(#pkt-right)" filter="url(#glow-t)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.85s">
          <mpath href="#p-mid-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="1.85s" />
      </circle>
      {/* Bot-right — small circle */}
      <circle r="3.5" fill="url(#pkt-right)" filter="url(#glow-t)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.25s">
          <mpath href="#p-bot-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="1.25s" />
      </circle>
      {/* Bot-right — lock icon */}
      <use href="#lock" width="14" height="20" x="-7" y="-10" color="#00d4aa" filter="url(#glow-l)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.2s">
          <mpath href="#p-bot-r" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.05;0.15;0.85;1" dur="2.4s" repeatCount="indefinite" begin="0.2s" />
      </use>

      {/* ── Labels ───────────────────────────────────── */}
      <text x="60" y="158" fill="rgba(148,163,184,0.5)" fontSize="9.5" textAnchor="middle" fontFamily="var(--font-body, system-ui)" letterSpacing="0.06em">YOUR DEVICE</text>
      <text x="360" y="200" fill="rgba(0,212,170,0.55)" fontSize="9.5" textAnchor="middle" fontFamily="var(--font-body, system-ui)" letterSpacing="0.06em">VPN SHIELD</text>
      <text x="660" y="158" fill="rgba(0,212,170,0.5)" fontSize="9.5" textAnchor="middle" fontFamily="var(--font-body, system-ui)" letterSpacing="0.06em">INTERNET</text>
    </svg>
  );
}
