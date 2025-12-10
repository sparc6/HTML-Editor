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
        "title": "Kişisel Tanıtım Sayfası",
        "description": "Kendin için basit bir kişisel tanıtım sayfası oluştur. HTML'in en temel yapısını ve metin etiketlerini kullan.",
        "starterCode": {
          "html": "",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <title>Kişisel Tanıtım</title>\n</head>\n<body>\n  <h1>Ahmet Yılmaz</h1>\n  <p>Merhaba! Ben <strong>Ahmet</strong>. Web geliştirme konusunda <em>tutkulu</em> bir öğrenciyim.<br>HTML öğrenmeye yeni başladım ve bu alanda kendimi geliştirmek istiyorum.</p>\n  <h2>Hobilerim</h2>\n  <ul>\n    <li>Kod yazmak</li>\n    <li>Kitap okumak</li>\n    <li>Müzik dinlemek</li>\n  </ul>\n  <p><a href=\"https://www.google.com\">Favori Web Sitem</a></p>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "HTML sayfası için <!DOCTYPE html>, <html>, <head>, <body>, <title> etiketlerini kullan. Metin için <h1>, <h2>, <p>, <strong>, <em>, <br> kullan. Liste için <ul> ve <li>, link için <a> kullan.",
        "longHint": `# Kişisel Tanıtım Sayfası Oluşturma

## Temel HTML Yapısı:
\`\`\`html
<!DOCTYPE html>
<html lang="tr">
<head>
  <title>Sayfa Başlığı</title>
</head>
<body>
  <!-- İçerik buraya gelir -->
</body>
</html>
\`\`\`

## Gerekli Etiketler:

### Başlıklar:
\`\`\`html
<h1>Ana Başlık (Adın)</h1>
<h2>Alt Başlık (Hobilerim)</h2>
\`\`\`

### Metin Biçimlendirme:
\`\`\`html
<p>Paragraf metni <strong>kalın</strong> ve <em>italik</em> kelimeler içerir.<br>Satır sonu için br kullan.</p>
\`\`\`

### Liste:
\`\`\`html
<ul>
  <li>Hobi 1</li>
  <li>Hobi 2</li>
  <li>Hobi 3</li>
</ul>
\`\`\`

### Link:
\`\`\`html
<a href="https://www.example.com">Link Metni</a>
\`\`\`

## Göreviniz:
1. Temel HTML yapısını oluşturun
2. Adınızı <h1> içinde yazın
3. Kendinizi tanıtan bir paragraf ekleyin (içinde <strong> ve <em> kullanın)
4. Hobilerinizi <ul> ve <li> ile listeleyin
5. Bir web sitesine link ekleyin`,
        "expectedOutput": "Kişisel tanıtım sayfası: ad, tanıtım paragrafı, hobiler listesi ve link",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "h1", "exists": true, "message": "En üstte adınızı içeren bir <h1> başlık olmalı" },
            { "selector": "h2", "exists": true, "message": "Hobiler için bir <h2> başlık olmalı" },
            { "selector": "p", "exists": true, "message": "Kendinizi tanıtan bir <p> paragraf olmalı" },
            { "selector": "strong", "exists": true, "message": "Paragraf içinde <strong> ile kalın bir kelime olmalı" },
            { "selector": "em", "exists": true, "message": "Paragraf içinde <em> ile italik bir kelime olmalı" },
            { "selector": "ul", "exists": true, "message": "Hobiler için bir <ul> listesi olmalı" },
            { "selector": "li", "minCount": 1, "message": "Listede en az bir <li> öğe olmalı" },
            { "selector": "a", "exists": true, "message": "En altta bir <a> link olmalı" }
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
        "title": "Blog Yazısı Sayfası",
        "description": "Bir blog yazısı sayfası oluştur. Semantik etiketler, görsel, tablo ve diğer yapıları kullan. Bu görev 1. görevin devamı gibi düşünülebilir.",
        "starterCode": {
          "html": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Blog Yazısı</title>\n</head>\n<body>\n  <!-- Blog yazınızı buraya ekleyin -->\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Blog Yazısı</title>\n</head>\n<body>\n  <header>\n    <h1>HTML Öğrenme Yolculuğum</h1>\n    <p>Yazar: Ahmet Yılmaz</p>\n  </header>\n  <main>\n    <section>\n      <p>HTML öğrenmeye başladığımda çok heyecanlıydım. Web geliştirme dünyasına ilk adımımı atıyordum.</p>\n      <blockquote>\"Kod yazmak bir sanattır.\"</blockquote>\n      <p>İlk öğrendiğim etiket <code>&lt;h1&gt;</code> oldu. Bu etiket başlık oluşturmak için kullanılıyor.</p>\n    </section>\n    <section>\n      <h2>Blog Görseli</h2>\n      <img src=\"https://via.placeholder.com/400x200\" alt=\"Blog görseli\">\n    </section>\n    <section>\n      <h2>Okuma İstatistikleri</h2>\n      <table>\n        <tr>\n          <th>Gün</th>\n          <th>Okunan Sayfa</th>\n          <th>Süre (dk)</th>\n        </tr>\n        <tr>\n          <td>Pazartesi</td>\n          <td>15</td>\n          <td>30</td>\n        </tr>\n        <tr>\n          <td>Salı</td>\n          <td>20</td>\n          <td>45</td>\n        </tr>\n      </table>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; 2024 Tüm hakları saklıdır.</p>\n  </footer>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "Semantik etiketler: <header>, <main>, <section>, <footer>. Görsel için <img>, tablo için <table>, <tr>, <th>, <td>. Alıntı için <blockquote>, kod için <code> kullan.",
        "longHint": `# Blog Yazısı Sayfası Oluşturma

## Semantik Etiketler:
\`\`\`html
<header>
  <h1>Blog Başlığı</h1>
  <p>Yazar Adı</p>
</header>
<main>
  <section>
    <!-- İçerik -->
  </section>
</main>
<footer>
  <p>Telif hakkı bilgisi</p>
</footer>
\`\`\`

## Görsel Ekleme:
\`\`\`html
<img src="resim-yolu.jpg" alt="Açıklama">
\`\`\`

## Tablo Oluşturma:
\`\`\`html
<table>
  <tr>
    <th>Başlık 1</th>
    <th>Başlık 2</th>
  </tr>
  <tr>
    <td>Veri 1</td>
    <td>Veri 2</td>
  </tr>
</table>
\`\`\`

## Alıntı ve Kod:
\`\`\`html
<blockquote>Alıntı metni</blockquote>
<code>kod metni</code>
\`\`\`

## Göreviniz:
1. <header> içinde blog başlığı ve yazar adı
2. <main> içinde <section> bölümleri
3. Bir <blockquote> alıntı ekleyin
4. Bir <code> etiketi kullanın
5. Bir <img> görsel ekleyin
6. Bir <table> tablosu oluşturun
7. <footer> içinde telif hakkı bilgisi`,
        "expectedOutput": "Blog yazısı sayfası: header, main, sections, görsel, tablo, blockquote, code ve footer",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "header", "exists": true, "message": "En üstte bir <header> etiketi olmalı" },
            { "selector": "main", "exists": true, "message": "Bir <main> etiketi olmalı" },
            { "selector": "section", "minCount": 1, "message": "En az bir <section> etiketi olmalı" },
            { "selector": "footer", "exists": true, "message": "En altta bir <footer> etiketi olmalı" },
            { "selector": "img", "exists": true, "message": "Bir <img> görsel etiketi olmalı" },
            { "selector": "table", "exists": true, "message": "Bir <table> tablosu olmalı" },
            { "selector": "tr", "minCount": 1, "message": "Tabloda en az bir <tr> satır olmalı" },
            { "selector": "th", "exists": true, "message": "Tabloda <th> başlık hücreleri olmalı" },
            { "selector": "td", "exists": true, "message": "Tabloda <td> veri hücreleri olmalı" },
            { "selector": "blockquote", "exists": true, "message": "Bir <blockquote> alıntı etiketi olmalı" },
            { "selector": "code", "exists": true, "message": "Bir <code> kod etiketi olmalı" }
          ]
        },
        "chapter": 1,
        "order": 2,
        "id": "1-2",
        "points": 20,
        "difficulty": 2,
        "category": "Bölüm 1",
        "level": "Orta"
      },
      {
        "title": "Kayıt & İletişim Formu",
        "description": "Siteye bir kayıt & iletişim formu ve medya alanı ekle. Form sistemleri, medya etiketleri ve etkileşimli yapıları kullan. Bu görev önceki görevlerin üstüne eklenebilir.",
        "starterCode": {
          "html": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Kayıt Formu</title>\n</head>\n<body>\n  <!-- Form ve medya alanını buraya ekleyin -->\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Kayıt & İletişim Formu</title>\n</head>\n<body>\n  <div>\n    <h1>Kayıt & İletişim Formu</h1>\n    <form>\n      <div>\n        <label for=\"ad\">Ad:</label>\n        <input type=\"text\" id=\"ad\" name=\"ad\">\n      </div>\n      <div>\n        <label for=\"soyad\">Soyad:</label>\n        <input type=\"text\" id=\"soyad\" name=\"soyad\">\n      </div>\n      <div>\n        <label for=\"email\">E-posta:</label>\n        <input type=\"email\" id=\"email\" name=\"email\">\n      </div>\n      <div>\n        <label for=\"sifre\">Şifre:</label>\n        <input type=\"password\" id=\"sifre\" name=\"sifre\">\n      </div>\n      <div>\n        <span>Cinsiyet:</span>\n        <input type=\"radio\" id=\"erkek\" name=\"cinsiyet\" value=\"erkek\">\n        <label for=\"erkek\">Erkek</label>\n        <input type=\"radio\" id=\"kadin\" name=\"cinsiyet\" value=\"kadin\">\n        <label for=\"kadin\">Kadın</label>\n      </div>\n      <div>\n        <input type=\"checkbox\" id=\"abonelik\" name=\"abonelik\">\n        <label for=\"abonelik\">Bülten aboneliği</label>\n      </div>\n      <div>\n        <label for=\"dogum\">Doğum Tarihi:</label>\n        <input type=\"date\" id=\"dogum\" name=\"dogum\">\n      </div>\n      <div>\n        <label for=\"ulke\">Ülke:</label>\n        <select id=\"ulke\" name=\"ulke\">\n          <option value=\"tr\">Türkiye</option>\n          <option value=\"us\">ABD</option>\n          <option value=\"uk\">İngiltere</option>\n        </select>\n      </div>\n      <div>\n        <label for=\"mesaj\">Mesaj:</label>\n        <textarea id=\"mesaj\" name=\"mesaj\" rows=\"4\"></textarea>\n      </div>\n      <div>\n        <button type=\"submit\">Gönder</button>\n        <button type=\"reset\">Sıfırla</button>\n      </div>\n    </form>\n  </div>\n  <div>\n    <h2>Medya</h2>\n    <audio controls>\n      <source src=\"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3\" type=\"audio/mpeg\">\n      Tarayıcınız audio etiketini desteklemiyor.\n    </audio>\n    <video controls width=\"400\">\n      <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n      Tarayıcınız video etiketini desteklemiyor.\n    </video>\n  </div>\n  <div>\n    <details>\n      <summary>Daha Fazla Bilgi</summary>\n      <p>Bu form hakkında ek bilgiler burada yer alır.</p>\n    </details>\n    <progress value=\"60\" max=\"100\">60%</progress>\n  </div>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "Form için <form>, <label>, <input> (text, email, password, radio, checkbox, date), <select>, <option>, <textarea>, <button> kullan. Medya için <audio> ve <video>. Etkileşim için <details>, <summary>, <progress>, <div>, <span> kullan.",
        "longHint": `# Kayıt & İletişim Formu Oluşturma

## Form Yapısı:
\`\`\`html
<form>
  <label for="ad">Ad:</label>
  <input type="text" id="ad" name="ad">
  
  <label for="email">E-posta:</label>
  <input type="email" id="email" name="email">
  
  <label for="sifre">Şifre:</label>
  <input type="password" id="sifre" name="sifre">
  
  <input type="radio" id="erkek" name="cinsiyet" value="erkek">
  <label for="erkek">Erkek</label>
  
  <input type="checkbox" id="abonelik" name="abonelik">
  <label for="abonelik">Abonelik</label>
  
  <label for="dogum">Doğum Tarihi:</label>
  <input type="date" id="dogum" name="dogum">
  
  <label for="ulke">Ülke:</label>
  <select id="ulke" name="ulke">
    <option value="tr">Türkiye</option>
    <option value="us">ABD</option>
  </select>
  
  <label for="mesaj">Mesaj:</label>
  <textarea id="mesaj" name="mesaj" rows="4"></textarea>
  
  <button type="submit">Gönder</button>
  <button type="reset">Sıfırla</button>
</form>
\`\`\`

## Medya Etiketleri:
\`\`\`html
<audio controls>
  <source src="ses.mp3" type="audio/mpeg">
</audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

## Etkileşimli Etiketler:
\`\`\`html
<details>
  <summary>Açılır Başlık</summary>
  <p>İçerik burada</p>
</details>

<progress value="60" max="100">60%</progress>

<div>Blok seviyesi container</div>
<span>Satır içi container</span>
\`\`\`

## Göreviniz:
1. Form alanları: ad, soyad, email, password, radio, checkbox, date, select, textarea
2. Gönder ve Sıfırla butonları
3. Bir <audio> ses oynatıcı
4. Bir <video> video oynatıcı
5. Bir <details> + <summary> açılır alan
6. Bir <progress> ilerleme çubuğu`,
        "expectedOutput": "Kayıt formu: tüm input türleri, select, textarea, butonlar, audio, video, details, progress",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "form", "exists": true, "message": "Bir <form> etiketi olmalı" },
            { "selector": "label", "minCount": 1, "message": "En az bir <label> etiketi olmalı" },
            { "selector": "input[type=\"text\"]", "exists": true, "message": "En az bir text input olmalı" },
            { "selector": "input[type=\"email\"]", "exists": true, "message": "Bir email input olmalı" },
            { "selector": "input[type=\"password\"]", "exists": true, "message": "Bir password input olmalı" },
            { "selector": "input[type=\"radio\"]", "exists": true, "message": "En az bir radio input olmalı" },
            { "selector": "input[type=\"checkbox\"]", "exists": true, "message": "En az bir checkbox input olmalı" },
            { "selector": "input[type=\"date\"]", "exists": true, "message": "Bir date input olmalı" },
            { "selector": "select", "exists": true, "message": "Bir <select> dropdown olmalı" },
            { "selector": "option", "minCount": 1, "message": "Select içinde en az bir <option> olmalı" },
            { "selector": "textarea", "exists": true, "message": "Bir <textarea> mesaj alanı olmalı" },
            { "selector": "button[type=\"submit\"]", "exists": true, "message": "Bir submit butonu olmalı" },
            { "selector": "button[type=\"reset\"]", "exists": true, "message": "Bir reset butonu olmalı" },
            { "selector": "audio", "exists": true, "message": "Bir <audio> etiketi olmalı" },
            { "selector": "video", "exists": true, "message": "Bir <video> etiketi olmalı" },
            { "selector": "details", "exists": true, "message": "Bir <details> etiketi olmalı" },
            { "selector": "summary", "exists": true, "message": "Bir <summary> etiketi olmalı" },
            { "selector": "progress", "exists": true, "message": "Bir <progress> etiketi olmalı" },
            { "selector": "div", "minCount": 1, "message": "En az bir <div> container olmalı" },
            { "selector": "span", "minCount": 1, "message": "En az bir <span> etiketi olmalı" }
          ]
        },
        "chapter": 1,
        "order": 3,
        "id": "1-3",
        "points": 30,
        "difficulty": 3,
        "category": "Bölüm 1",
        "level": "Zor"
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
  },
  "4": {
    "id": "4",
    "number": 4,
    "title": "Bölüm 4 - Listeler ve Tablolar",
    "shortTitle": "Listeler ve Tablolar",
    "summary": "Sıralı ve sırasız listeler oluşturmayı ve veri tabloları yapmayı öğrenin.",
    "objectives": [
      "Sıralı ve sırasız listeler oluşturmak",
      "İç içe listeler yapmak",
      "Temel tablo yapıları oluşturmak"
    ],
    "tasks": [
      {
        "title": "Liste Yapıları",
        "description": "Sıralı ve sırasız listeler oluşturun.",
        "starterCode": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Listeler</title>\n</head>\n<body>\n  <h1>Alışveriş Listesi</h1>\n  <!-- Burada listeler oluşturun -->\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "solution": {
          "html": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Listeler</title>\n</head>\n<body>\n  <h1>Alışveriş Listesi</h1>\n  <ul>\n    <li>Elma</li>\n    <li>Muz</li>\n    <li>Portakal</li>\n  </ul>\n  <h2>Yapılacaklar</h2>\n  <ol>\n    <li>HTML öğren</li>\n    <li>CSS öğren</li>\n    <li>JavaScript öğren</li>\n  </ol>\n</body>\n</html>",
          "css": "",
          "js": ""
        },
        "shortHint": "Sırasız liste için <ul>, sıralı liste için <ol> kullanın. Her öğe <li> ile belirtilir.",
        "longHint": `# HTML Listeleri

## Sırasız Liste (Unordered List):
\`\`\`html
<ul>
  <li>Öğe 1</li>
  <li>Öğe 2</li>
  <li>Öğe 3</li>
</ul>
\`\`\`

## Sıralı Liste (Ordered List):
\`\`\`html
<ol>
  <li>İlk öğe</li>
  <li>İkinci öğe</li>
  <li>Üçüncü öğe</li>
</ol>
\`\`\`

## Göreviniz:
1. En az bir sırasız liste oluşturun
2. En az bir sıralı liste oluşturun
3. Her listede en az 3 öğe olsun`,
        "expectedOutput": "Sıralı ve sırasız listeler içeren sayfa",
        "validation": {
          "type": "structure",
          "rules": [
            { "selector": "ul", "exists": true, "message": "Bir sırasız liste (<ul>) ekleyin" },
            { "selector": "ol", "exists": true, "message": "Bir sıralı liste (<ol>) ekleyin" },
            { "selector": "li", "minCount": 3, "message": "En az 3 liste öğesi olmalı" }
          ]
        },
        "chapter": 4,
        "order": 1,
        "id": "4-1",
        "points": 15,
        "difficulty": 2,
        "category": "Bölüm 4",
        "level": "Orta"
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

