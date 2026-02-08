import React, { useMemo, useState } from 'react';

const fortunes = {
  positive: [
    'Bugün cesur bir karar, yarın büyük bir fırsat getirir.',
    'Kalbini dinlediğinde doğru yolu bulacaksın.',
    'Sürpriz bir teklif motivasyonunu tazeleyecek.',
    'Hayal ettiğin plan, beklenmedik bir destekle büyür.',
  ],
  calm: [
    'Küçük bir adım, büyük bir dönüşüm başlatır.',
    'Sevgi ve emek birleştiğinde bereket artar.',
    'Yolun, yeni bir dostlukla aydınlanıyor.',
    'Bugün sakinlik, iç sesini daha net duymanı sağlar.',
  ],
  uplifting: [
    'Yükünü hafifleten bir haber kapıda, sabrın ödüllenecek.',
    'İçindeki ışık, bugün sana en doğru yolu gösterecek.',
    'Yavaşla; kendine şefkat gösterdiğinde her şey değişir.',
    'Gönlün ferahladıkça güzel sürprizler çoğalır.',
  ],
  playful: [
    'Enerjin yüksek, şansın da seninle dalga geçmeyecek!',
    'Bugün evrenin esprisi sensin; gülümse ve devam et.',
    'Merakın seni harika bir keşfe sürükleyecek.',
    'Şansın kıpır kıpır; bir anda parlayabilirsin.',
  ],
};

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

const positiveWords = [
  'mutlu',
  'neşeli',
  'heyecanlı',
  'harika',
  'güzel',
  'enerjik',
  'umut',
  'keyifli',
];
const negativeWords = [
  'üzgün',
  'kırgın',
  'yorgun',
  'kötü',
  'stres',
  'endişe',
  'kaygı',
  'karamsar',
];

const toneLabels = {
  uplifting: 'Umut verici ve nazik',
  playful: 'Enerjik ve esprili',
  calm: 'Dengeli ve sakin',
  positive: 'Pozitif ve net',
};

function App() {
  const [fortune, setFortune] = useState(fortunes.positive[0]);
  const [mood, setMood] = useState(72);
  const [note, setNote] = useState('');
  const [completedRituals, setCompletedRituals] = useState([]);
  const [moodInput, setMoodInput] = useState('');
  const [tone, setTone] = useState('positive');
  const [dreamInput, setDreamInput] = useState('');
  const [dreamResult, setDreamResult] = useState(null);
  const [notifications, setNotifications] = useState([]);

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

  const currentFortunePool = fortunes[tone] || fortunes.positive;

  const handleNewFortune = () => {
    const next =
      currentFortunePool[Math.floor(Math.random() * currentFortunePool.length)];
    setFortune(next);
  };

  const toggleRitual = (item) => {
    setCompletedRituals((prev) =>
      prev.includes(item) ? prev.filter((ritual) => ritual !== item) : [...prev, item],
    );
  };

  const analyzeMood = () => {
    const text = moodInput.toLowerCase();
    const positiveScore = positiveWords.filter((word) => text.includes(word)).length;
    const negativeScore = negativeWords.filter((word) => text.includes(word)).length;

    let nextTone = 'calm';
    if (positiveScore > negativeScore) {
      nextTone = 'playful';
    } else if (negativeScore > positiveScore) {
      nextTone = 'uplifting';
    } else if (text.length > 0) {
      nextTone = 'positive';
    }

    setTone(nextTone);
    setFortune(
      fortunes[nextTone][Math.floor(Math.random() * fortunes[nextTone].length)],
    );
  };

  const interpretDream = () => {
    if (!dreamInput.trim()) {
      setDreamResult(null);
      return;
    }
    const themes = [
      'özgürlük arzusu',
      'değişime hazırlık',
      'yaratıcı bir döneme giriş',
      'kalbini rahatlatma ihtiyacı',
    ];
    const highlight = themes[Math.floor(Math.random() * themes.length)];
    setDreamResult({
      summary: `Rüyan, ${highlight} ile ilgili güçlü bir mesaj taşıyor.`,
      prompt: `Mor bulutlar, yumuşak ışıklar ve sembolik detaylarla rüya sahnesi: ${dreamInput}`,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    });
  };

  const scheduleNotification = () => {
    const alerts = [
      'Merkür retrosu başladı: iletişimde dikkatli ol.',
      'Venüs geçişi: ilişkilerde yumuşak bir dönem.',
      'Ay büyüyor: yeni niyetler için ideal zaman.',
    ];
    setNotifications((prev) => [
      ...prev,
      alerts[Math.floor(Math.random() * alerts.length)],
    ]);
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
              <span className="fortune-tone">Ton: {toneLabels[tone]}</span>
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
              <h3>Duygu Analizi</h3>
              <p>Yazdıklarından ruh halini analiz edip falın tonunu günceller.</p>
              <textarea
                className="note"
                placeholder="Şu an kendimi..."
                value={moodInput}
                onChange={(event) => setMoodInput(event.target.value)}
              />
              <div className="note-footer">
                <span>Ton: {toneLabels[tone]}</span>
                <button className="primary small" onClick={analyzeMood}>
                  Analiz Et
                </button>
              </div>
              <p className="tool-footnote">
                İleride yüz ifadesi analizi için TensorFlow.js entegrasyonu
                yapılabilir.
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

        <section className="section dream">
          <div className="section-header">
            <h2>Rüya Tabircisi</h2>
            <p>
              Rüyanı anlat, sana özel yorum ve görselleştirilmiş bir rüya sahnesi
              oluşturalım.
            </p>
          </div>
          <div className="dream-grid">
            <div className="dream-input">
              <textarea
                className="note"
                placeholder='Örn: "Uçuyordum ve mor bulutlar vardı."'
                value={dreamInput}
                onChange={(event) => setDreamInput(event.target.value)}
              />
              <button className="primary" onClick={interpretDream}>
                Rüyamı Yorumla
              </button>
            </div>
            <div className="dream-output">
              {dreamResult ? (
                <>
                  <h3>Yorum</h3>
                  <p>{dreamResult.summary}</p>
                  <div className="dream-image">
                    <img src={dreamResult.image} alt="Rüya görselleştirmesi" />
                    <span>Örnek görsel • API entegrasyonu planlı</span>
                  </div>
                  <p className="dream-prompt">{dreamResult.prompt}</p>
                </>
              ) : (
                <p>
                  Rüyanı yazdığında yorum ve görsel burada görünecek.
                  (Stable Diffusion / DALL·E entegrasyonu ile güçlendirilebilir.)
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="section ar">
          <div className="section-header">
            <h2>AR Tarot Masası</h2>
            <p>
              Telefon kameranı masaya tuttuğunda sanal tarot kartlarını
              görebileceğin bir deneyim tasarlıyoruz.
            </p>
          </div>
          <div className="ar-card">
            <div>
              <h3>WebXR + AR.js Yol Haritası</h3>
              <p>
                Şu an demo modundayız. WebXR destekli cihazlarda gerçek zamanlı
                kart yerleşimi ve dokunarak seçim sunacağız.
              </p>
            </div>
            <button className="ghost">Demo Takvimini Gör</button>
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

        <section className="section notifications">
          <div className="section-header">
            <h2>Gezegen Bildirimleri</h2>
            <p>
              Doğum haritan ve anlık transitlere göre kişisel bildirimler planla.
            </p>
          </div>
          <div className="notifications-grid">
            <button className="primary" onClick={scheduleNotification}>
              Bildirim Oluştur
            </button>
            <div className="notification-list">
              {notifications.length === 0 ? (
                <p>Henüz bildirim yok. İlkini oluştur!</p>
              ) : (
                <ul>
                  {notifications.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <p className="tool-footnote">
            NASA API'leri veya Swiss Ephemeris ile tam entegrasyon mümkün.
          </p>
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
