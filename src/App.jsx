import React, { useMemo, useState } from 'react';

const fortunes = [
  'Bugün cesur bir karar, yarın büyük bir fırsat getirir.',
  'Kalbini dinlediğinde doğru yolu bulacaksın.',
  'Yolun, yeni bir dostlukla aydınlanıyor.',
  'Sürpriz bir teklif motivasyonunu tazeleyecek.',
  'Küçük bir adım, büyük bir dönüşüm başlatır.',
  'Sevgi ve emek birleştiğinde bereket artar.',
  'Yakında güzel bir haber sabrını ödüllendirecek.',
  'Hayal ettiğin plan, beklenmedik bir destekle büyür.',
];

const insights = [
  {
    title: 'Gökyüzü Rehberi',
    description:
      'Yıldız haritanı modern yorumlarla keşfet; kişisel ritmini yakala.',
  },
  {
    title: 'Kahve Falı',
    description:
      'Her fincanda yeni bir hikâye. Detaylar artık seninle konuşuyor.',
  },
  {
    title: 'Enerji Dengesi',
    description:
      'Günlük ritüellerle zihnini sadeleştir, enerjini yeniden hizala.',
  },
];

const steps = [
  'Niyetini belirle ve bir soru seç.',
  'Falını keşfet ve sembolleri incele.',
  'Günün rehberliğini kişisel notlarına ekle.',
];

const tarotCards = [
  'Güneş',
  'Ay',
  'Yıldız',
  'Kader Çarkı',
  'Aşıklar',
  'İmparatoriçe',
  'Bilge',
  'Güç',
  'Denge',
];

const ritualChecklist = [
  'Derin bir nefes al ve niyetini yaz.',
  'Bir bardak su içerek enerjini tazele.',
  'Bugün için tek bir pozitif hedef belirle.',
  'Fal notunu günlüğüne kaydet.',
];

function App() {
  const [fortune, setFortune] = useState(fortunes[0]);
  const [mood, setMood] = useState(72);
  const [note, setNote] = useState('');
  const [completedRituals, setCompletedRituals] = useState([]);

  const luckyNumbers = useMemo(() => {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }, [fortune]);

  const tarotPick = useMemo(() => {
    return tarotCards[Math.floor(Math.random() * tarotCards.length)];
  }, [fortune]);

  const handleNewFortune = () => {
    const next = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(next);
  };

  const toggleRitual = (item) => {
    setCompletedRituals((prev) =>
      prev.includes(item) ? prev.filter((ritual) => ritual !== item) : [...prev, item],
    );
  };

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <span className="logo">FortuneTeller</span>
          <div className="nav-links">
            <a href="#ozellikler">Özellikler</a>
            <a href="#araclar">Fal Araçları</a>
            <a href="#deneyim">Deneyim</a>
            <a href="#iletisim">İletişim</a>
          </div>
          <button className="nav-button">Şimdi Keşfet</button>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">🔮 Yeni nesil fal deneyimi</p>
            <h1>
              Kişisel rehberin <span>gökyüzünden</span> ilham alıyor.
            </h1>
            <p className="subtitle">
              FortuneTeller, modern tasarım ve zamansız gelenekleri bir araya
              getirerek sana özel bir fal yolculuğu sunar. Günlük rehberlik,
              sezgisel analizler ve huzur veren ritüeller burada.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={handleNewFortune}>
                Falımı Yenile
              </button>
              <button className="ghost">Uygulamayı İncele</button>
            </div>
            <div className="fortune-card">
              <p className="fortune-title">Günün Mesajı</p>
              <p className="fortune-text">“{fortune}”</p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb" />
            <div className="glass-card">
              <p className="glass-title">Bugünkü Enerji</p>
              <p className="glass-score">%86 Uyum</p>
              <p className="glass-detail">
                Sezgilerin güçlü. Yaratıcı kararlar için ideal zaman.
              </p>
              <div className="glass-tags">
                <span>İlham</span>
                <span>Netlik</span>
                <span>Denge</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="ozellikler">
          <div className="section-header">
            <h2>Modern ritüeller, net rehberlik</h2>
            <p>
              Tasarım odaklı deneyimimizle falına her baktığında sakinlik ve
              merak hissi yaşarsın.
            </p>
          </div>
          <div className="card-grid">
            {insights.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="link">Detayları gör →</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section tools" id="araclar">
          <div className="section-header">
            <h2>Fal araçlarıyla ritüelini güçlendir</h2>
            <p>
              Günlük enerji ölçer, tarot seçimi, uğurlu sayılar ve not defteriyle
              fal deneyimini kişiselleştir.
            </p>
          </div>
          <div className="tools-grid">
            <article className="tool-card">
              <h3>Enerji Ölçer</h3>
              <p>Bugün nasıl hissediyorsun? Ruh halini ayarla.</p>
              <input
                className="range"
                type="range"
                min="0"
                max="100"
                value={mood}
                onChange={(event) => setMood(Number(event.target.value))}
              />
              <div className="range-meta">
                <span>Sakin</span>
                <strong>%{mood}</strong>
                <span>Yüksek</span>
              </div>
              <p className="tool-footnote">
                {mood >= 70
                  ? 'Yaratıcılık yükseliyor, yeni kararlar için ideal.'
                  : 'Dinlenmeye zaman ayır, enerjini dengede tut.'}
              </p>
            </article>

            <article className="tool-card">
              <h3>Tarot Seçimi</h3>
              <p>Falını yeniledikçe kartın değişir.</p>
              <div className="tarot-card">
                <span>Bugünün kartı</span>
                <strong>{tarotPick}</strong>
              </div>
              <button className="ghost small" onClick={handleNewFortune}>
                Yeni Kart Çek
              </button>
            </article>

            <article className="tool-card">
              <h3>Uğurlu Sayılar</h3>
              <p>Günün enerjisine göre seçilen sayılar.</p>
              <div className="lucky-numbers">
                {luckyNumbers.map((number) => (
                  <span key={number}>{number}</span>
                ))}
              </div>
              <button className="ghost small" onClick={handleNewFortune}>
                Sayıları Yenile
              </button>
            </article>

            <article className="tool-card">
              <h3>Ritüel Listesi</h3>
              <p>Bugün için mini ritüellerini tamamla.</p>
              <ul className="checklist">
                {ritualChecklist.map((item) => (
                  <li key={item}>
                    <label>
                      <input
                        type="checkbox"
                        checked={completedRituals.includes(item)}
                        onChange={() => toggleRitual(item)}
                      />
                      <span>{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </article>

            <article className="tool-card full">
              <h3>Kişisel Notlar</h3>
              <p>Falınla ilgili aklına gelenleri buraya yaz.</p>
              <textarea
                className="note"
                placeholder="Bugünün mesajı bana şunu hatırlattı..."
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
              <div className="note-footer">
                <span>{note.length} karakter</span>
                <button className="primary small" onClick={() => setNote('')}>
                  Temizle
                </button>
              </div>
            </article>
          </div>
        </section>

        <section className="section highlight" id="deneyim">
          <div>
            <h2>3 adımda ritüelini oluştur</h2>
            <p>
              Kişiselleştirilmiş akışımız, fal deneyimini günlük planına kolayca
              dahil etmeni sağlar.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="iletisim">
          <div className="cta">
            <div>
              <h2>Fal yolculuğunu kişiselleştir</h2>
              <p>
                Her gün yeni bir mesaj, yeni bir enerji. FortuneTeller ile
                sezgilerini güçlendir.
              </p>
            </div>
            <button className="primary">Ücretsiz Başla</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 FortuneTeller. Tüm hakları saklıdır.</p>
        <div className="footer-links">
          <a href="#ozellikler">Özellikler</a>
          <a href="#araclar">Fal Araçları</a>
          <a href="#deneyim">Deneyim</a>
          <a href="#iletisim">İletişim</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
