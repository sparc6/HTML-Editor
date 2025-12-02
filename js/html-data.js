// HTML-101 Chapters Data
window.HTML_CHAPTERS = {
  "1": {
    "id": "1",
    "number": 1,
    "title": "Bölüm 1 - HTML'e Giriş",
    "shortTitle": "HTML'e Giriş",
    "summary": "HTML'in temellerini öğrenin: etiketler, yapı ve ilk web sayfanız.",
    "objectives": [
      "HTML'in ne olduğunu ve nasıl çalıştığını öğrenmek",
      "Temel HTML etiketlerini kullanmak",
      "İlk web sayfanızı oluşturmak"
    ],
    "tasks": [
      {
        "title": "İlk HTML Sayfam",
        "description": "İlk HTML sayfanızı oluşturun. Basit bir 'Merhaba Dünya' sayfası yapın.",
        "starterCode": {
          "html": "",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Merhaba Dünya</title>\n</head>\n<body>\n  <h1>Merhaba Dünya!</h1>\n  <p>Bu benim ilk HTML sayfam.</p>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "HTML sayfası oluşturmak için <!DOCTYPE html>, <html>, <head> ve <body> etiketlerine ihtiyacınız var.",
        "longHint": `# İlk HTML Sayfası Nasıl Oluşturulur?

Her HTML sayfası temel bir yapıya sahiptir:

## Temel Yapı:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Sayfa Başlığı</title>
</head>
<body>
  <!-- İçerik buraya gelir -->
</body>
</html>
\`\`\`

## Etiket Açıklamaları:
- **<!DOCTYPE html>**: Tarayıcıya bu dosyanın HTML5 olduğunu söyler
- **<html>**: HTML belgesinin kök öğesidir
- **<head>**: Sayfa meta bilgilerini içerir (başlık, stil, vb.)
- **<title>**: Tarayıcı sekmesinde görünen başlık
- **<body>**: Sayfada görünen tüm içerik buradadır

## Göreviniz:
1. Yukarıdaki yapıyı kullanın
2. <h1> ile bir başlık ekleyin: "Merhaba Dünya!"
3. <p> ile bir paragraf ekleyin: "Bu benim ilk HTML sayfam."`,
        "expectedOutput": "Merhaba Dünya başlığı ve paragraf içeren basit bir sayfa",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "h1", "exists": true, "message": "Sayfada bir <h1> başlık olmalı" },
            { "selector": "p", "exists": true, "message": "Sayfada bir <p> paragraf olmalı" }
          ]
        },
        "chapter": 1,
        "order": 1,
        "id": "1-1",
        "points": 10,
        "difficulty": 1,
        "category": "Bölüm 1",
        "level": "Temel"
      },
      {
        "title": "Başlıklar ve Paragraflar",
        "description": "Farklı seviyedeki başlıklar (h1-h6) ve paragraflar kullanarak bir sayfa oluşturun.",
        "starterCode": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Başlıklar</title>\n</head>\n<body>\n  <!-- Burada farklı başlık seviyelerini kullanın -->\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Başlıklar</title>\n</head>\n<body>\n  <h1>Ana Başlık</h1>\n  <p>Bu bir paragraftır.</p>\n  <h2>Alt Başlık</h2>\n  <p>Bu başka bir paragraftır.</p>\n  <h3>Daha Küçük Başlık</h3>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "HTML'de 6 seviye başlık var: h1 (en büyük) - h6 (en küçük)",
        "longHint": `# HTML Başlıkları

HTML'de başlıklar h1'den h6'ya kadar sıralanır:

## Başlık Seviyeleri:
\`\`\`html
<h1>En Büyük Başlık</h1>
<h2>Alt Başlık</h2>
<h3>Daha Küçük Başlık</h3>
<h4>H4 Başlık</h4>
<h5>H5 Başlık</h5>
<h6>En Küçük Başlık</h6>
\`\`\`

## Paragraflar:
\`\`\`html
<p>Bu bir paragraftır.</p>
\`\`\`

## Göreviniz:
1. En az 3 farklı başlık seviyesi kullanın (h1, h2, h3)
2. Her başlıktan sonra bir paragraf ekleyin`,
        "expectedOutput": "Farklı seviyede başlıklar ve paragraflar içeren sayfa",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "h1", "exists": true, "message": "Bir h1 başlık ekleyin" },
            { "selector": "h2", "exists": true, "message": "Bir h2 başlık ekleyin" },
            { "selector": "h3", "exists": true, "message": "Bir h3 başlık ekleyin" },
            { "selector": "p", "minCount": 2, "message": "En az 2 paragraf olmalı" }
          ]
        },
        "chapter": 1,
        "order": 2,
        "id": "1-2",
        "points": 15,
        "difficulty": 1,
        "category": "Bölüm 1",
        "level": "Temel"
      }
    ]
  },
  "2": {
    "id": "2",
    "number": 2,
    "title": "Bölüm 2 - Metin Biçimlendirme",
    "shortTitle": "Metin Biçimlendirme",
    "summary": "Metinleri kalın, italik, altı çizili yapma ve diğer biçimlendirme teknikleri.",
    "objectives": [
      "Metin biçimlendirme etiketlerini kullanmak",
      "Strong, em, mark gibi semantik etiketleri öğrenmek",
      "Liste yapıları oluşturmak"
    ],
    "tasks": [
      {
        "title": "Metin Stilleri",
        "description": "Kalın, italik ve altı çizili metinler oluşturun.",
        "starterCode": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Metin Stilleri</title>\n</head>\n<body>\n  <p>Bu normal metindir.</p>\n  <!-- Burada farklı metin stilleri kullanın -->\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Metin Stilleri</title>\n</head>\n<body>\n  <p>Bu normal metindir.</p>\n  <p>Bu <strong>kalın</strong> metindir.</p>\n  <p>Bu <em>italik</em> metindir.</p>\n  <p>Bu <u>altı çizili</u> metindir.</p>\n  <p>Bu <mark>vurgulu</mark> metindir.</p>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "Kalın için <strong>, italik için <em>, altı çizili için <u> kullanın.",
        "longHint": `# HTML Metin Biçimlendirme

## Temel Etiketler:
\`\`\`html
<strong>Kalın Metin</strong>
<em>İtalik Metin</em>
<u>Altı Çizili Metin</u>
<mark>Vurgulu Metin</mark>
<small>Küçük Metin</small>
<del>Silinmiş Metin</del>
\`\`\`

## Göreviniz:
1. En az 4 farklı metin stili kullanın
2. Her birini ayrı paragrafta gösterin`,
        "expectedOutput": "Farklı metin stilleri içeren paragraflar",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "strong", "exists": true, "message": "<strong> etiketi ekleyin" },
            { "selector": "em", "exists": true, "message": "<em> etiketi ekleyin" },
            { "selector": "u", "exists": true, "message": "<u> etiketi ekleyin" }
          ]
        },
        "chapter": 2,
        "order": 1,
        "id": "2-1",
        "points": 15,
        "difficulty": 1,
        "category": "Bölüm 2",
        "level": "Temel"
      }
    ]
  },
  "3": {
    "id": "3",
    "number": 3,
    "title": "Bölüm 3 - Linkler ve Görseller",
    "shortTitle": "Linkler ve Görseller",
    "summary": "Web sayfalarına link ve görsel ekleyerek zengin içerikler oluşturun.",
    "objectives": [
      "Hyperlink oluşturmayı öğrenmek",
      "Görsel eklemeyi öğrenmek",
      "Alt attribute kullanımı"
    ],
    "tasks": [
      {
        "title": "İlk Linklerim",
        "description": "Farklı web sitelerine linkler oluşturun.",
        "starterCode": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Linkler</title>\n</head>\n<body>\n  <h1>Favori Web Sitelerim</h1>\n  <!-- Burada linkler ekleyin -->\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Linkler</title>\n</head>\n<body>\n  <h1>Favori Web Sitelerim</h1>\n  <p><a href=\"https://www.google.com\">Google</a></p>\n  <p><a href=\"https://www.youtube.com\" target=\"_blank\">YouTube</a></p>\n  <p><a href=\"https://www.github.com\">GitHub</a></p>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "Link oluşturmak için <a href=\"URL\">Link Metni</a> kullanın.",
        "longHint": `# HTML Linkleri

## Link Oluşturma:
\`\`\`html
<a href="https://www.google.com">Google'a Git</a>
\`\`\`

## Yeni Sekmede Açma:
\`\`\`html
<a href="URL" target="_blank">Yeni Sekmede Aç</a>
\`\`\`

## Göreviniz:
1. En az 3 farklı link oluşturun
2. Linklerden birini yeni sekmede açılacak şekilde yapın`,
        "expectedOutput": "Çalışan linkler içeren sayfa",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "a", "minCount": 3, "message": "En az 3 link olmalı" },
            { "selector": "a[href]", "exists": true, "message": "Linklerin href özelliği olmalı" }
          ]
        },
        "chapter": 3,
        "order": 1,
        "id": "3-1",
        "points": 15,
        "difficulty": 1,
        "category": "Bölüm 3",
        "level": "Temel"
      }
    ]
  }
};

// Category-based quick start tasks
window.QUICK_START_TASKS = [
  {
    id: "quick-1",
    title: "Hızlı Başlangıç - Temel HTML",
    description: "HTML'in temellerini öğrenin",
    category: "Temel",
    level: "Temel",
    taskCount: 5,
    icon: "🚀"
  },
  {
    id: "quick-2",
    title: "Orta Seviye - Formlar ve Tablolar",
    description: "Formlar ve tablolar ile çalışın",
    category: "Orta",
    level: "Orta",
    taskCount: 5,
    icon: "⚡"
  },
  {
    id: "quick-3",
    title: "İleri Seviye - Semantic HTML",
    description: "Modern HTML5 semantik etiketler",
    category: "İleri",
    level: "İleri",
    taskCount: 5,
    icon: "🎯"
  }
];

