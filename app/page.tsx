import { ArrowDown, ArrowRight, MessageCircle, Sparkles, Star } from "lucide-react";
import Image from "next/image";

import ServiceMenu from "./ServiceMenu";
import SiteHeader from "./SiteHeader";
import logo from "./logo.svg";

const whatsapp = "https://wa.me/5511913727742?text=Oi%2C%20LuaNail!%20Quero%20conhecer%20seu%20trabalho.";

const work = [
  { label: "cerejinha", alt: "Unhas decoradas em rosa com nail art delicada", src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85", className: "md:translate-y-10" },
  { label: "brilho próprio", alt: "Unhas com esmaltação moderna em tom suave", src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85", className: "" },
  { label: "pink mood", alt: "Detalhe de manicure e nail art", src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85", className: "md:translate-y-10" },
];

function WhatsAppLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a href={whatsapp} target="_blank" rel="noreferrer" className={className}>{children}</a>;
}

export default function Home() {
  return (
    <main id="inicio" className="overflow-x-clip">
      <div className="bg-ink px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[.18em] text-cream sm:text-xs">unhas com personalidade. você com mais ainda. ✳︎</div>
      <SiteHeader whatsappUrl={whatsapp} />

      <section className="hero-grid relative mx-3 overflow-hidden rounded-[1.7rem] border-2 border-ink bg-[#A9DCFF] sm:mx-5 lg:mx-8">
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-8 px-6 py-14 sm:px-10 md:grid-cols-[1.02fr_.98fr] md:py-12 lg:px-14">
          <div className="relative z-[1] max-w-xl">
            <div className="mb-5 inline-flex -rotate-2 items-center gap-2 border-2 border-ink bg-cream px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] shadow-[3px_3px_0_#102A43] sm:text-xs"><Sparkles size={14} /> seu momento, suas regras</div>
            <h1 className="font-display text-[clamp(3.5rem,9vw,7.6rem)] font-extrabold leading-[.83] tracking-[-.09em]">unhas<br />que <span className="outline-text">falam.</span></h1>
            <p className="mt-7 max-w-md text-base leading-relaxed sm:text-lg">Um toque de cor, um tanto de atitude e <strong>100% você.</strong> Vem criar sua próxima nail art favorita comigo.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppLink className="group inline-flex items-center gap-3 rounded-full border-2 border-ink bg-ink px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-[4px_4px_0_#F5FAFF] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><MessageCircle size={17} /> falar com a Lua <ArrowRight size={16} className="transition group-hover:translate-x-1" /></WhatsAppLink>
              <a href="#trabalhos" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider underline decoration-2 underline-offset-4">ver trabalhos <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="relative mx-auto flex h-[360px] w-full max-w-[470px] items-center justify-center md:h-[470px]">
            <div className="absolute h-[76%] w-[76%] rotate-[-8deg] rounded-[48%_52%_43%_57%/50%_43%_57%_50%] border-2 border-ink bg-lime shadow-sticker" />
            <div className="relative h-[78%] w-[70%] rotate-[5deg] overflow-hidden rounded-[48%_52%_44%_56%/45%_42%_58%_55%] border-2 border-ink bg-[#D7E9FF] shadow-sticker">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=90" alt="Inspiração de manicure para o portfólio LuaNail" />
            </div>
            <div className="absolute right-0 top-[12%] grid h-[76px] w-[76px] animate-float place-items-center rounded-full border-2 border-ink bg-cream text-center font-display text-[10px] font-extrabold uppercase leading-tight shadow-sticker sm:right-2">Best<br />nails<br /><span className="text-berry">arts</span></div>
            <div className="absolute bottom-[4%] left-[2%] -rotate-12 rounded-lg border-2 border-ink bg-berry px-4 py-2 font-display text-sm font-extrabold text-white shadow-sticker">unha feliz = eu feliz</div>
            <Star className="absolute left-[8%] top-[8%] fill-cream text-ink" size={35} strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex items-center justify-between border-t-2 border-ink bg-cream px-6 py-3 text-[9px] font-bold uppercase tracking-[.16em] sm:px-10 sm:text-[10px]"><span>nail design com amor & personalidade</span><span className="hidden sm:inline">feito à mão, pensado pra você</span><span>✳︎ 100% luaNail</span></div>
      </section>

      <section id="sobre" className="scroll-mt-24 mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-10 md:grid-cols-[.8fr_1.2fr] md:items-center lg:px-14 lg:py-28">
        <div className="relative mx-auto w-full max-w-sm rotate-[-3deg] border-2 border-ink bg-[#B8D5FF] p-3 shadow-sticker">
          <div className="grain absolute inset-0 opacity-40" /><div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-2 border-ink bg-[#D7E9FF]"><img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=850&q=85" alt="Unhas feitas à mão com cuidado e criatividade" /></div>
          <div className="relative flex items-center justify-between pt-3 font-display text-xs font-extrabold uppercase"><span>feito com carinho</span><span>✳︎ lua</span></div>
        </div>
        <div className="max-w-xl md:pl-5"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-berry">oi, eu sou a Lua! ✳︎</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-6xl">unhas bonitas.<br /><span className="text-berry">energia lá em cima.</span></h2><p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">Acredito que uma unha bem feita pode mudar o seu dia. Cada detalhe é pensado com cuidado pra você sair daqui se sentindo ainda mais você do seu jeitinho.</p><div className="mt-7 inline-flex rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-lime px-4 py-2 text-xs font-extrabold uppercase shadow-[3px_3px_0_#102A43]"><Sparkles size={14} /> criatividade em cada detalhe</div></div>
      </section>

      <section id="servicos" className="scroll-mt-24 border-y-2 border-ink bg-[#EAF4FF] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-berry">qual vai ser a sua? ✳︎</p><h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-.07em] sm:text-6xl">o menu das unhas</h2></div><p className="max-w-xs text-sm leading-relaxed text-ink/70">Uma ideia na cabeça? Me chama e a gente conversa sobre suas duvidas.</p></div>
          <ServiceMenu />
        </div>
      </section>

      <section id="trabalhos" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-berry">um pouquinho do meu mundo ✳︎</p><h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-.07em] sm:text-6xl">feito na LuaNail</h2></div><p className="max-w-[250px] text-sm leading-relaxed text-ink/70">Cada unha é uma tela em branco. Aqui vão algumas inspirações.</p></div>
        <div className="mt-9 grid gap-7 sm:grid-cols-2 md:grid-cols-3">{work.map((item, index) => <figure key={item.label} className={`gallery-card group ${item.className}`}><div className={`relative aspect-[.86] overflow-hidden border-2 border-ink ${index === 1 ? "bg-lime" : index === 2 ? "bg-[#BDEBFF]" : "bg-[#8BBEFF]"}`}><img className="gallery-image h-full w-full object-cover" src={item.src} alt={item.alt} /><span className="absolute left-3 top-3 rotate-[-4deg] border-2 border-ink bg-cream px-3 py-1 font-display text-xs font-extrabold">✳︎ {item.label}</span></div><figcaption className="mt-3 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[.14em]"><span>ideia pra salvar ✷︎</span><span>0{index + 1} / 03</span></figcaption></figure>)}</div>
      </section>

      <section id="contato" className="mx-3 mb-3 overflow-hidden rounded-[1.7rem] border-2 border-ink bg-lime sm:mx-5 lg:mx-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-14 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14 lg:py-20"><div className="grain absolute inset-0 opacity-30" /><div className="relative max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[.2em]">sua próxima unha favorita começa aqui ✳︎</p><h2 className="mt-4 font-display text-5xl font-extrabold leading-[.9] tracking-[-.08em] sm:text-7xl">vamos falar<br />de unhas?</h2><p className="mt-5 max-w-md text-sm leading-relaxed sm:text-base">Conta pra mim o que você tá imaginando. Vai ser um prazer criar algo com a sua cara.</p></div><WhatsAppLink className="group relative inline-flex shrink-0 items-center gap-3 rounded-full border-2 border-ink bg-berry px-7 py-5 text-sm font-extrabold uppercase tracking-wide text-white shadow-[5px_5px_0_#102A43] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"><MessageCircle size={19} /> chamar no WhatsApp <ArrowRight size={17} className="transition group-hover:translate-x-1" /></WhatsAppLink><Star className="absolute right-8 top-8 hidden fill-berry text-ink md:block" size={42} strokeWidth={1.5} /></div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left lg:px-14"><a href="#inicio" aria-label="LuaNail, início" className="shrink-0"><Image src={logo} alt="" priority className="h-9 w-32 object-contain" /></a><p className="text-[10px] font-semibold uppercase tracking-wider text-ink/60">feito com carinho, cor e um tantinho de glitter ✳︎</p><div className="flex items-center gap-4"><WhatsAppLink className="inline-flex items-center gap-2 text-xs font-bold"><MessageCircle size={17} /> WhatsApp</WhatsAppLink><a href="#inicio" aria-label="Voltar ao início" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-lime shadow-[3px_3px_0_#102A43] transition hover:translate-y-[-2px] hover:shadow-[5px_5px_0_#102A43] sm:bottom-7 sm:right-7"><ArrowDown className="rotate-180" size={17} /></a></div></footer>
    </main>
  );
}
