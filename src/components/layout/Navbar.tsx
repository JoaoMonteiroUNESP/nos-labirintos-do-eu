'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, purchaseLinks } from '@/data/links'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fechar menu ao navegar
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Nome do autor (plataforma) */}
            <Link href="/" className="flex flex-col leading-none group" aria-label="Página inicial">
              <span className="font-serif text-lg md:text-xl text-graphite tracking-tight group-hover:text-teal transition-colors duration-400">
                Marco Aurélio Monteiro
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-gold mt-0.5">
                Pesquisador · Autor
              </span>
            </Link>

            {/* Navegação desktop */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-caption uppercase tracking-widest transition-all duration-400 hover:text-teal relative py-1
                    ${pathname === link.href
                      ? 'text-teal after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold'
                      : 'text-graphite-light'
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Comprar */}
              <Link
                href="/comprar"
                id="nav-buy-cta"
                className="btn-primary !py-2.5 !px-6 !text-xs ml-4"
              >
                Comprar o livro
              </Link>
            </nav>

            {/* Botão menu mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              id="mobile-menu-toggle"
            >
              <span
                className={`block w-6 h-px bg-graphite transition-all duration-400 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-graphite transition-all duration-400 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-graphite transition-all duration-400 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-sm flex flex-col items-center justify-center gap-2 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col items-center gap-6 text-center" aria-label="Menu mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-heading-md transition-colors duration-300 hover:text-teal
                      ${pathname === link.href ? 'text-teal' : 'text-graphite'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="/comprar"
                  className="btn-primary"
                  id="mobile-buy-cta"
                >
                  Comprar o livro
                </Link>
              </motion.div>
            </nav>

            {/* Linha decorativa */}
            <div className="absolute bottom-8 flex flex-col items-center gap-2">
              <span className="font-sans text-caption text-gold uppercase tracking-[0.2em]">
                Nos Labirintos do Eu
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
