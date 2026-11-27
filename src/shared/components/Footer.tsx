
export function Footer() {
    return (
        <footer className="footer w-100% h-20 mt-auto flex-col items-center bg-[#541E2B]">
            <div className="flex flex-col items-center  text-[#B18A62] text-center font-montserrat gap-1 mt-1">
                <section>
                    <h2 className="font-allura text-3xl">Aura Viva</h2>
                    <p className="text-sm">Detalles que hablan de ti.</p>
                </section>

                <section>
                    <p className="text-xs">© {new Date().getFullYear()} Aura Viva</p>
                </section>
            </div>
        </footer>
    );
}
