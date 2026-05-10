'use client';

import React, { useState } from 'react';
import { Heart, Phone, Mail, MessageCircle, Globe, FileHeart, Scale, Stethoscope, Users, ShieldCheck, Menu, X, CheckCircle, Send } from 'lucide-react';

const CONTACT = {
  phone: '077-711-6118',
  whatsapp: '077-711-6118',
  email: 'OFFICE@YADOTEFET.COM',
  website: 'WWW.YADOTEFET.COM',
};

const nav = [
  { id: 'home', label: 'בית' },
  { id: 'about', label: 'אודות' },
  { id: 'services', label: 'השירותים שלנו' },
  { id: 'process', label: 'איך זה עובד' },
  { id: 'contact', label: 'צור קשר' },
];

const servicesData = [
  { title: 'ליווי אישי', text: 'בירור מצב, מיפוי צרכים, איסוף מסמכים ובניית תהליך מותאם אישית.', icon: <FileHeart /> },
  { title: 'ביטוח לאומי', text: 'סיוע בהגשת תביעה, פתיחת תיק, הכנה לוועדות ומעקב שוטף.', icon: <ShieldCheck /> },
  { title: 'גורמים רפואיים', text: 'הכוונה לאנשי מקצוע מתאימים וקידום תורים וטיפול נדרש.', icon: <Stethoscope /> },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 shadow-md">
        <Heart className="h-8 w-8 fill-white text-white" />
        <div className="absolute -bottom-1 -left-1 h-5 w-5 rounded-full bg-rose-700" />
      </div>
      <div>
        <div className="text-3xl font-black tracking-tight text-slate-900">יד עוטפת</div>
        <div className="text-sm font-bold text-rose-700">עכשיו זכותך לקבל</div>
      </div>
    </div>
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <button className="rounded-xl border p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="תפריט">
          {open ? <X /> : <Menu />}
        </button>
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <button key={item.id} onClick={() => setPage(item.id)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${page === item.id ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      {open && (
        <div className="border-t bg-white px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <button key={item.id} onClick={() => { setPage(item.id); setOpen(false); }} className="block w-full rounded-xl px-3 py-3 text-right font-bold hover:bg-slate-100">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function CTA({ setPage }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <button onClick={() => setPage('contact')} className="rounded-2xl bg-rose-700 px-7 py-4 font-black text-white shadow-lg transition hover:bg-rose-800">ליצירת קשר ראשונית</button>
      <a href={`tel:${CONTACT.phone}`} className="rounded-2xl border border-teal-500 px-7 py-4 text-center font-black text-teal-700 hover:bg-teal-50">חייגו עכשיו</a>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-teal-50">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">עכשיו זכותך לקבל</h1>
          <p className="mt-4 text-2xl font-black text-slate-900">עם ״יד עוטפת״</p>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-700">חברה בעלת ניסיון רב עם התמחות מיוחדת בתביעות פוסט־טראומה בעקבות המלחמה.</p>
          <div className="mx-auto mt-7 grid max-w-3xl gap-3 text-right md:grid-cols-3">
            {['ליווי אישי ומקצועי', 'הגדלת סיכויי הצלחה', 'מענה מהיר ומסודר'].map((t) => (
              <div key={t} className="flex items-center justify-center gap-2 rounded-2xl bg-white p-3 font-bold shadow-sm"><CheckCircle className="h-5 w-5 text-teal-600" />{t}</div>
            ))}
          </div>
          <CTA setPage={setPage} />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle title="השירותים שלנו" subtitle="מעטפת מקצועית במקום אחד" />
        <div className="grid gap-5 md:grid-cols-3">
          {servicesData.map((service) => <Feature key={service.title} {...service} />)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-5 rounded-3xl bg-slate-50 p-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-slate-900">למה לבחור ביד עוטפת?</h2>
            <ul className="mt-5 space-y-3 text-lg font-semibold text-slate-700">
              <li>✓ ניסיון רב בתחום תביעות פוסט־טראומה</li>
              <li>✓ שירות אישי, אנושי ומסודר</li>
              <li>✓ ליווי מול אנשי מקצוע והגופים הרלוונטיים</li>
              <li>✓ מיצוי מיטבי של הזכויות המגיעות לכם</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900">צרו איתנו קשר</h3>
            <p className="mt-3 leading-8 text-slate-600">אנחנו כאן כדי לעזור לכם לקבל את מה שמגיע לכם.</p>
            <button onClick={() => setPage('contact')} className="mt-5 rounded-2xl bg-rose-700 px-6 py-3 font-black text-white">דברו איתנו עכשיו</button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-3xl border bg-white p-7 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">{React.cloneElement(icon, { className: 'h-8 w-8' })}</div>
      <h3 className="text-2xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-lg leading-8 text-slate-700">{text}</p>
    </div>
  );
}

function About() {
  return <Page title="אודות יד עוטפת" subtitle="ליווי מקצועי, אישי ואנושי" icon={<Users />} paragraphs={['יד עוטפת מעניקה מענה נגיש, מסודר ואישי לאנשים המתמודדים עם פוסט־טראומה וצריכים ליווי במימוש זכויותיהם.', 'אנחנו מאמינים שתהליך נכון מתחיל בהקשבה, ממשיך באיסוף מסמכים מדויק, ומסתיים בליווי מקצועי עד למיצוי הזכויות.', 'המטרה שלנו היא להוריד מכם עומס, לעשות סדר, ולוודא שאתם לא נשארים לבד מול הבירוקרטיה.']} />;
}

function Services() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle title="השירותים שלנו" subtitle="מעטפת מלאה במקום אחד" />
      <div className="grid gap-5 md:grid-cols-3">
        {servicesData.map((service) => <Feature key={service.title} {...service} />)}
      </div>
    </main>
  );
}

function Process() {
  const steps = ['שיחת היכרות ואבחון ראשוני', 'איסוף מסמכים ובניית תיק', 'הגשת התביעה והפניות לגורמים הרלוונטיים', 'ליווי אישי עד לקבלת החלטה ומיצוי זכויות'];
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <SectionTitle title="איך זה עובד" subtitle="תהליך פשוט, ברור ומלווה" />
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={step} className="flex gap-4 rounded-3xl border bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-700 text-xl font-black text-white">{i + 1}</div>
            <div className="text-2xl font-black text-slate-900">{step}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <SectionTitle title="צרו איתנו קשר" subtitle="השאירו פרטים ונחזור אליכם בהקדם" />
      <div className="grid gap-5 md:grid-cols-2">
        <ContactCard icon={<Mail />} title="מייל" text={CONTACT.email} href={`mailto:${CONTACT.email}`} />
        <ContactCard icon={<MessageCircle />} title="ווטסאפ המשרד" text={CONTACT.whatsapp} href="https://wa.me/972777116118" />
        <ContactCard icon={<Phone />} title="טלפון המשרד" text={CONTACT.phone} href={`tel:${CONTACT.phone}`} />
        <ContactCard icon={<Globe />} title="אתר" text={CONTACT.website} href="https://www.yadotefet.com" />
      </div>
      <form className="mt-8 rounded-3xl border bg-white p-6 shadow-sm" onSubmit={(e) => { e.preventDefault(); alert('הטופס דמו כרגע. בהמשך ניתן לחבר אותו למייל / CRM / וואטסאפ.'); }}>
        <h3 className="text-2xl font-black text-slate-900">טופס פנייה מהיר</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border p-3" placeholder="שם מלא" />
          <input className="rounded-xl border p-3" placeholder="טלפון" />
          <input className="rounded-xl border p-3 md:col-span-2" placeholder="מייל" />
          <textarea className="min-h-28 rounded-xl border p-3 md:col-span-2" placeholder="איך אפשר לעזור?" />
        </div>
        <button className="mt-5 flex items-center gap-2 rounded-2xl bg-rose-700 px-6 py-3 font-black text-white"><Send className="h-5 w-5" /> שליחה</button>
      </form>
    </main>
  );
}

function ContactCard({ icon, title, text, href }) {
  return (
    <a href={href} className="rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">{React.cloneElement(icon, { className: 'h-7 w-7' })}</div>
      <h3 className="text-2xl font-black text-slate-900">{title}</h3>
      <p className="mt-2 text-xl font-bold text-rose-700">{text}</p>
    </a>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-black text-slate-900">{title}</h2>
      <p className="mt-3 text-xl font-semibold text-slate-600">{subtitle}</p>
    </div>
  );
}

function Page({ title, subtitle, icon, paragraphs }) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">{React.cloneElement(icon, { className: 'h-8 w-8' })}</div>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="space-y-5 text-xl leading-9 text-slate-700">
          {paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-slate-950 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <Logo />
        <div className="text-center text-sm text-slate-300 md:text-left">© יד עוטפת · מימוש זכויות וליווי אישי</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const pages = { home: <Home setPage={setPage} />, about: <About />, services: <Services />, process: <Process />, contact: <Contact /> };
  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <Header page={page} setPage={setPage} />
      {pages[page]}
      <a href="https://wa.me/972777116118" className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl" aria-label="וואטסאפ">
        <MessageCircle className="h-8 w-8" />
      </a>
      <Footer />
    </div>
  );
}
