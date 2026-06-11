'use client';

/**
 * Pitch Deck Page
 * E=mc² Biotech Business Presentation (slide viewer).
 * Styled to match the onboarding home (Technical Blueprint: deep navy + subtle cyan).
 */

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const slides = [
    {
        id: 1,
        subtitle: 'PAGE 01',
        image: '/slides/01.jpeg',
        alt: 'The Problem — why US dental implant adoption is slow: market gap, complex two-body flap surgery, and manual guide design delays',
    },
    {
        id: 2,
        subtitle: 'PAGE 02',
        image: '/slides/02.jpeg',
        alt: 'Why Now — regulatory, technology, and market forces converging toward automated implant dentistry',
    },
    {
        id: 3,
        subtitle: 'PAGE 03',
        image: '/slides/03.jpeg',
        alt: 'Our Solution — E=mc² Biotech three-pillar ecosystem: one-body flapless implant hardware, AI auto-planning software, and cloud platform',
    },
    {
        id: 4,
        subtitle: 'PAGE 04',
        image: '/slides/04_myq.jpeg',
        alt: 'Hardware Innovation — MYQ Flapless Implant System in Titanium Grade 4 with SLA surface, optimized for immediate loading',
    },
    {
        id: 5,
        subtitle: 'PAGE 05',
        image: '/slides/05.jpeg',
        alt: 'Software Disruption — AI auto-planning that turns CT scans into ready-to-print implant surgical guides in minutes',
    },
    {
        id: 6,
        subtitle: 'PAGE 06',
        image: '/slides/06.jpeg',
        alt: 'Network Effect & Platform — cloud mentorship and franchise system for standardized flapless implant care',
    },
    {
        id: 7,
        subtitle: 'PAGE 07',
        image: '/slides/07.jpeg',
        alt: 'Business Model — diversified revenue from implant sales, SaaS planning software, guide printing, and franchise network',
    },
    {
        id: 8,
        subtitle: 'PAGE 08',
        image: '/slides/08.jpeg',
        alt: 'Competitive Advantage — one-body flapless system with AI-based fully automated guide design versus traditional two-piece implants',
    },
    {
        id: 9,
        subtitle: 'PAGE 09',
        image: '/slides/09.jpeg',
        alt: 'Market Adoption Roadmap — four-phase rollout: foundation, FDA validation, network launch, and nationwide scale',
    },
];

const pad = (n: number) => String(n).padStart(2, '0');

export default function PitchPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index: number) => setCurrentSlide(index);

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a1424] text-white">
            {/* Brand edge bar */}
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
                    className="absolute bottom-12 right-4 select-none font-bold leading-none tracking-tighter"
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
                    <span className="text-lg font-bold tracking-tight">E=mc² Biotech</span>
                </Link>
                <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                    <Link href="/" className="text-slate-400 transition-colors hover:text-cyan-300">
                        Home
                    </Link>
                    <Link href="/main" className="text-cyan-300 transition-colors hover:text-cyan-200">
                        3D Demo →
                    </Link>
                </nav>
            </header>

            {/* Main */}
            <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-6 py-12 md:px-12">
                {/* Title row */}
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-cyan-400/90">
                            <span className="text-cyan-400">▸</span> E=mc² Biotech · Business Presentation
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                            Pitch Deck<span className="text-cyan-400">.</span>
                        </h1>
                    </div>
                    <div className="hidden font-mono text-sm tracking-widest text-slate-500 md:block">
                        <span className="text-cyan-400">{pad(currentSlide + 1)}</span> / {pad(slides.length)}
                    </div>
                </div>

                {/* Slide viewer */}
                <div className="relative rounded-md border border-white/10 bg-white/[0.02] p-3 shadow-2xl md:p-5">
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/15 bg-[#0a1424]/80 text-slate-300 backdrop-blur transition-all hover:border-cyan-400/60 hover:text-cyan-300"
                        aria-label="Previous slide"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/15 bg-[#0a1424]/80 text-slate-300 backdrop-blur transition-all hover:border-cyan-400/60 hover:text-cyan-300"
                        aria-label="Next slide"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].alt}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Indicators */}
                <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="mr-3 font-mono text-xs tracking-widest text-slate-500 md:hidden">
                        <span className="text-cyan-400">{pad(currentSlide + 1)}</span> / {pad(slides.length)}
                    </span>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all ${
                                index === currentSlide ? 'w-8 bg-cyan-400' : 'w-3 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 flex flex-col items-center gap-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                        Experience the system
                    </p>
                    <Link
                        href="/main"
                        className="group inline-flex items-center justify-center gap-3 rounded-sm bg-cyan-400 px-8 py-4 font-semibold text-[#06101e] shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] transition-all hover:bg-cyan-300"
                    >
                        Launch 3D Demo
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 px-6 py-10 md:px-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-lg font-bold tracking-tight">E=mc² Biotech</h2>
                        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                            Automated Implant Guide Design
                        </p>
                        <nav className="mt-4 flex gap-5 font-mono text-xs uppercase tracking-widest">
                            <Link href="/" className="text-slate-400 transition-colors hover:text-cyan-300">Home</Link>
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
