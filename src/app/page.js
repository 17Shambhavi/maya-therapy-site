const images = {
  maya: "/image1.png",
  officeSofa: "/image2.jpg",
  officeWindow: "/image3.jpg",
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Our Office", href: "#office" },
];

const services = [
  {
    title: "Anxiety & Panic Therapy",
    image: images.officeSofa,
    position: "object-left",
    text: "When constant worry, tension in your body, or trouble sleeping have become your normal, therapy can help. We work on both the emotional and physical sides of what you are feeling, using CBT, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    title: "Trauma Therapy",
    image: images.officeWindow,
    position: "object-center",
    text: "I work with adults who have experienced single-incident trauma as well as long-standing patterns from childhood, relationships, or chronic stress. Our pace is careful, with an emphasis on safety, stabilization, and feeling more regulated in daily life.",
  },
  {
    title: "Burnout & Perfectionism Counseling",
    image: images.officeSofa,
    position: "object-right",
    text: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of living and working.",
  },
];

const approaches = [
  {
    title: "Cognitive-Behavioral Therapy (CBT)",
    text: "Evidence-based work on the thoughts and habits that keep anxiety, stress, and overthinking going, so you can respond to them differently.",
  },
  {
    title: "EMDR",
    text: "A structured, evidence-based method that helps process painful experiences, so that they feel less overwhelming and less present in your daily life.",
  },
  {
    title: "Mindfulness-Based Practices",
    text: "Practical tools to slow down, notice what is happening in the moment, and meet it with more steadiness and self-compassion.",
  },
  {
    title: "Body-Oriented Techniques",
    text: "Stress and trauma show up in the body, too. We work with the physical side of what you are experiencing to help you feel calmer and more regulated.",
  },
];

function Script({ children }) {
  return (
    <span className="font-script text-accent text-[1.35em] leading-none">
      {children}
    </span>
  );
}

function PillButton({ children, href = "#contact" }) {
  return (
    <a
      href={href}
      className="inline-block rounded-full border border-text px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] transition hover:bg-primary hover:border-primary hover:text-bg-alt"
    >
      {children}
    </a>
  );
}

function LinkButton({ children, href = "#contact" }) {
  return (
    <a
      href={href}
      className="inline-block border-b border-text pb-0.5 text-[11px] uppercase tracking-[0.18em] hover:text-primary hover:border-primary"
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-8 md:px-[75px]">
      <a href="#" className="leading-none">
        <div className="font-serif text-[28px] text-text md:text-[32px]">
          Dr. Maya Reynolds
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-primary">
          PsyD &middot; Clinical Psychologist
        </div>
      </a>
      <nav className="flex items-center gap-8 text-[11px] uppercase tracking-[0.15em]">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hidden hover:text-primary md:block"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full border border-text px-6 py-2.5 hover:bg-primary hover:border-primary hover:text-bg-alt"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:gap-16">
      <img
        src={images.maya}
        alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
        className="h-[420px] w-full object-cover object-top md:h-[520px] md:w-[35%]"
      />
      <div className="px-6 py-10 md:flex-1 md:px-0 md:py-0">
        <p className="mb-16 max-w-md text-[11px] uppercase tracking-[0.18em] text-primary md:mb-24">
          Anxiety &amp; trauma therapy in Santa Monica, CA
        </p>
        <h1 className="max-w-xl font-serif text-[36px] leading-[1.15] md:text-[46px]">
          Anxiety and trauma therapy in Santa Monica, to help you slow down and
          reconnect with <Script>yourself.</Script>
        </h1>
        <p className="mt-6 max-w-md text-[14px] leading-6">
          Licensed clinical psychologist offering in-person sessions in Santa
          Monica and secure telehealth across California for adults who feel
          overwhelmed, stressed, or stuck in overthinking.
        </p>
        <div className="mt-12">
          <LinkButton>Book a consultation</LinkButton>
        </div>
      </div>
      <img
        src={images.officeWindow}
        alt=""
        className="hidden h-[520px] w-[9%] object-cover object-right md:block"
      />
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="px-6 py-20 md:px-[75px] md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <h2 className="max-w-md font-serif text-[32px] leading-tight md:text-[38px]">
          You seem fine on the outside, while quietly feeling exhausted inside.
        </h2>
        <img
          src={images.officeSofa}
          alt="Calm therapy office with a sofa and bookshelf in Santa Monica"
          className="h-[300px] w-full object-cover"
        />
      </div>
      <div className="mt-14 grid gap-8 text-[14px] leading-6 md:grid-cols-3">
        <p className="text-[11px] uppercase leading-6 tracking-[0.18em] text-primary">
          Hi, I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist
          based in Santa Monica, California.
        </p>
        <p>
          Many of the people I work with are high-achieving, thoughtful, and
          self-aware, but internally feel exhausted, stuck in overthinking, or
          emotionally on edge.
        </p>
        <p>
          Clients often come to me feeling functional on the outside while
          quietly dealing with constant worry, tension in the body, difficulty
          sleeping, or a sense that they are always bracing for something to go
          wrong. My approach is warm, collaborative, and grounded.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-bg-alt px-6 py-20 md:px-[75px] md:py-28">
      <h2 className="font-serif text-[38px]">
        How I can <Script>help</Script>
      </h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:px-[130px]">
        {services.map((item) => (
          <div key={item.title}>
            <img
              src={item.image}
              alt={item.title}
              className={`h-[300px] w-full object-cover ${item.position}`}
            />
            <h3 className="mt-10 font-serif text-[20px]">{item.title}</h3>
            <p className="mt-4 text-[13px] leading-6">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="px-6 py-20 md:px-[110px] md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <h2 className="font-serif text-[34px]">
          My <Script>approach</Script> includes...
        </h2>
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {approaches.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-[20px]">{item.title}</h3>
              <p className="mt-4 text-[13px] leading-6">{item.text}</p>
              <div className="mt-8">
                <LinkButton>Learn more</LinkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Office() {
  return (
    <section id="office" className="bg-secondary px-6 py-20 md:px-[75px] md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-primary">
            Our office
          </p>
          <h2 className="font-serif text-[36px] leading-tight md:text-[42px]">
            A calm, private <Script>space</Script> for healing
          </h2>
          <p className="mt-6 max-w-md text-[14px] leading-6">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding, with natural light and a comfortable,
            uncluttered environment. Clients often share that the space itself
            helps them feel more at ease when they arrive.
          </p>
          <ul className="mt-8 space-y-3 text-[13px] leading-6">
            <li>
              <span className="text-[11px] uppercase tracking-[0.18em] text-primary">
                In person
              </span>
              <br />
              123th Street 45 W, Santa Monica, CA 90401
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.18em] text-primary">
                Online
              </span>
              <br />
              Secure telehealth sessions for clients located in California
            </li>
            <li>
              <span className="text-[11px] uppercase tracking-[0.18em] text-primary">
                Comfort &amp; privacy
              </span>
              <br />
              A safe, private room where you can slow down and be yourself
            </li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <img
            src={images.officeWindow}
            alt="Therapy room with large windows, brick wall, and natural light"
            className="h-[300px] w-full object-cover md:h-[420px]"
          />
          <img
            src={images.officeSofa}
            alt="Comfortable seating and bookshelf in the counseling office"
            className="h-[300px] w-full object-cover md:mt-12 md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row md:items-center md:gap-16"
    >
      <img
        src={images.officeWindow}
        alt=""
        className="hidden h-[380px] w-[12%] object-cover object-left md:block"
      />
      <div className="px-6 py-14 md:flex-1 md:px-0 md:py-0">
        <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-primary">
          Book a consultation
        </p>
        <h2 className="max-w-lg font-serif text-[34px] leading-tight md:text-[40px]">
          Find the support that helps you feel <Script>grounded.</Script>
        </h2>
        <p className="mt-8 max-w-lg text-[13px] leading-6">
          I believe therapy works best when you feel respected, understood, and
          actively involved in the process. My goal is not just symptom relief,
          but helping you develop insight, resilience, and a stronger
          relationship with yourself over time. If you are looking for a
          therapist who combines practical tools with depth-oriented work, I may
          be a good fit.
        </p>
        <div className="mt-12">
          <PillButton>Book now</PillButton>
        </div>
      </div>
      <img
        src={images.maya}
        alt="Dr. Maya Reynolds"
        className="h-[380px] w-full object-cover object-top md:w-[34%]"
      />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-alt px-6 py-20 md:px-[85px]">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="font-serif text-[36px] leading-none">
            Dr. Maya Reynolds
          </div>
          <div className="mt-3 text-[11px] uppercase tracking-[0.35em] text-primary">
            PsyD &middot; Clinical Psychologist
          </div>
          <p className="mt-8 max-w-xs text-[13px] leading-6">
            Therapy for adults dealing with anxiety, trauma, and burnout, in
            person in Santa Monica or online across California.
          </p>
        </div>
        <div>
          <h4 className="mb-5 text-[11px] uppercase tracking-[0.18em]">
            Navigate
          </h4>
          <ul className="space-y-2 text-[13px]">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-[11px] uppercase tracking-[0.18em]">
            Services
          </h4>
          <ul className="space-y-2 text-[13px]">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-5 text-[11px] uppercase tracking-[0.18em]">
            Office
          </h4>
          <p className="text-[13px] leading-6">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </p>
          <p className="mt-6 text-[13px] italic leading-6">
            In-person sessions in Santa Monica and secure telehealth for clients
            located in California
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Approach />
      <Office />
      <Schedule />
      <Footer />
    </main>
  );
}