'use client';

import { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import { Logo } from '../../atoms/Logo';
import { HeaderNav } from './HeaderNav';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="w-full py-4 md:py-8.25 lg:px-18">
        <Container className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <HeaderNav className="hidden lg:flex" />
          <div className="hidden lg:flex">
            <Button variant="outline">Contatti</Button>
          </div>

          {/* Mobile Button */}
          <Button
            variant="outline"
            isCircle
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </Button>
        </Container>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-4">
            <Container className="flex flex-col gap-4">
              <HeaderNav mobile />
              <Button variant="outline" className="w-full">
                Contatti
              </Button>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
