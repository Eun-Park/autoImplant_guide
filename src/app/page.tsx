/**
 * Onboarding / Home
 * E=mc² Biotech — keyword-rich entry point with paths to the pitch deck and 3D demo.
 * Server component (no client state) so all content is in the server-rendered HTML for SEO.
 */

import Image from 'next/image';
import Link from 'next/link';

const pillars = [
    {
        no: '01',
        kicker: 'Hardware',
        title: 'MYQ Flapless Implant',
        body: 'The EMC2 / MYQ Flapless Implant System is a US-made, one-body flapless implant built from Titanium Grade 4 with an SLA-treated surface. Optimized for immediate loading, it enables a drill-free, suction-free 3-minute procedure with broad indications across bone qualities.',
    },
    {
        no: '02',
        kicker: 'Software',
        title: 'AI Auto-Planning',
        body: 'Our software turns CT and intraoral scan data into a ready-to-print surgical guide in minutes. A formula-based AI engine determines the optimal dead-center implant position automatically, applying clinical clearance rules — with no manual positioning required.',
    },
    {
        no: '03',
        kicker: 'Platform',
        title: 'Network & Support',
        body: 'A cloud mentorship and franchise network lets general practitioners share difficult cases, learn standardized flapless implant protocols, and operate on a unified system — so no doctor works alone.',
    },
];

const tags = ['US-MADE', 'ONE-BODY FLAPLESS', 'AI-AUTOMATED', 'SCAN-TO-PRINT'];

export default function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0a1424] text-white">
            {/* Brand edge bar (matches the pitch deck's cyan accent rail) */}
            <div className="fixed left-0 top-0 z-50 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-cyan-500/70 to-transparent" />

            {/* Ambient background: grid, cyan glow, E=mc² watermark */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                        maskImage: 'radial-gradient(ellipse at 50% 0%, black 35%, transparent 78%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 35%, transparent 78%)',
                    }}
                />
                <div
                    className="absolute -top-40 left-[15%] h-[720px] w-[720px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10), transparent 60%)' }}
                />
                <div
                    className="absolute bottom-16 right-4 select-none font-bold leading-none tracking-tighter"
                    style={{ fontSize: '13rem', color: 'rgba(255,255,255,0.022)' }}
                >
                    E=mc²
                </div>
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between border-b border-white/5 px-6 py-6 md:px-12">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-md border border-white/15">
                        <Image src="/logo.jpg" alt="E=mc2 Biotech Logo" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">E=mc² Biotech</span>
                </Link>
                <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                    <Link href="/pitch" className="text-slate-400 transition-colors hover:text-cyan-300">
                        Pitch Deck
                    </Link>
                    <Link href="/main" className="text-cyan-300 transition-colors hover:text-cyan-200">
                        3D Demo →
                    </Link>
                </nav>
            </header>

            {/* Hero */}
            <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-12 md:pt-28">
                <p className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-400/90">
                    <span className="text-cyan-400">▸</span> E=mc² Biotech · Sunnyvale, California
                </p>

                <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl">
                    AutoImplant Guide<span className="text-cyan-400">.</span>
                    <br />
                    <span className="text-slate-500">Automated by design.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
                    E=mc² Biotech pairs a US-made <strong className="font-semibold text-white">one-body flapless implant</strong>{' '}
                    (the MYQ / EMC2 Implant System) with <strong className="font-semibold text-white">AI-driven, automated
                    surgical guide design</strong> — taking you from CT scan to a ready-to-print implant guide in minutes.
                </p>

                {/* Credential tag strip */}
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                    {tags.map((t, i) => (
                        <span key={t} className="flex items-center gap-6">
                            {i > 0 && <span className="text-cyan-500/40">/</span>}
                            <span>{t}</span>
                        </span>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/pitch"
                        className="group inline-flex items-center justify-center gap-3 rounded-sm border border-white/15 px-8 py-4 font-medium transition-all hover:border-cyan-400/50 hover:bg-cyan-400/[0.04] hover:text-cyan-200"
                    >
                        View Pitch Deck
                        <span className="text-cyan-400 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <Link
                        href="/main"
                        className="group inline-flex items-center justify-center gap-3 rounded-sm bg-cyan-400 px-8 py-4 font-semibold text-[#06101e] shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-300"
                    >
                        Launch 3D Demo
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </main>

            {/* Three pillars — numbered, accent-rail cards (crawlable SEO content) */}
            <section className="relative z-10 border-t border-white/5 bg-black/20 px-6 py-20 md:px-12">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-400/90">
                        The Ecosystem
                    </p>
                    <h2 className="mb-14 max-w-3xl text-2xl font-bold tracking-tight md:text-3xl">
                        A complete ecosystem for fast, predictable implant dentistry
                    </h2>

                    <div className="grid grid-cols-1 gap-px overflow-hidden md:grid-cols-3">
                        {pillars.map((p) => (
                            <div
                                key={p.no}
                                className="group relative border-l border-white/10 px-6 py-2 transition-colors hover:border-cyan-400/60"
                            >
                                <span className="font-mono text-sm text-cyan-400/70">{p.no}</span>
                                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                                    {p.kicker}
                                </p>
                                <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 px-6 py-10 md:px-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h3 className="font-bold text-lg tracking-tight">E=mc² Biotech</h3>
                        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                            Automated Implant Guide Design
                        </p>
                        <nav className="mt-4 flex gap-5 font-mono text-xs uppercase tracking-widest">
                            <Link href="/pitch" className="text-slate-400 transition-colors hover:text-cyan-300">Pitch Deck</Link>
                            <Link href="/main" className="text-slate-400 transition-colors hover:text-cyan-300">3D Demo</Link>
                        </nav>
                    </div>
                    <div className="space-y-1 text-sm text-slate-400 md:text-right">
                        <p><span className="text-slate-600">CEO</span> &nbsp;Eun Park</p>
                        <p><span className="text-slate-600">Email</span> &nbsp;<a href="mailto:ekpark@emc2-biotech.com" className="transition-colors hover:text-cyan-300">ekpark@emc2-biotech.com</a></p>
                        <p><span className="text-slate-600">Phone</span> &nbsp;<a href="tel:+16504000800" className="transition-colors hover:text-cyan-300">+1 650-400-0800</a></p>
                        <p><span className="text-slate-600">Address</span> &nbsp;1055 Stewart Dr, #113, Sunnyvale, CA 94085</p>
                    </div>
                </div>
                <div className="mx-auto mt-8 max-w-6xl border-t border-white/5 pt-5">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">
                        © 2025 E=mc² Biotech · All rights reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}
