import { ShoppingCartIcon } from 'lucide-react';

export function NavBar() {
    return (
        <header className="header w-100% w-full">
            <nav className="navbar w-100% h-20 flex justify-between items-center bg-[#541E2B] text-[#B18A62]">
                <section className="font-allura text-5xl p-6">
                    <a href="/" aria-label="Aura Viva - Inicio">
                        Aura Viva
                    </a>
                </section>
                <section>
                    <ul className="font-montserrat flex gap-4">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/catalogo">Catálogo</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                    </ul>
                </section>
                <section className="p-6">
                    <picture>
                        <ShoppingCartIcon />
                    </picture>
                </section>
            </nav>
        </header>
    );
}
