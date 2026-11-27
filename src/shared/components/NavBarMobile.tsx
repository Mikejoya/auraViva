import { ShoppingCartIcon } from 'lucide-react';

export function NavBarMobile() {
    return (
        <header className="header w-100% w-full">
            <nav className="navbar w-100% h-20 flex justify-between items-center bg-[#541E2B] text-[#B18A62]">
                <section>
                    <a href="/" aria-label="Aura Viva - Inicio">
                        Aura Viva
                    </a>
                </section>
                <section>
                    <ul className="flex gap-4">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/catalogo">Catálogo</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </section>
                <section>
                    <picture>
                        <ShoppingCartIcon />
                    </picture>
                </section>
            </nav>
        </header>
    );
}
