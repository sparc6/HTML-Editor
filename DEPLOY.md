# 🚀 GitHub Pages Deployment Guide

## Git Kurulduktan Sonra:

### 1. Terminal'de bu klasöre git:
```bash
cd "c:\Erhan Abi\HTML Editor\HTML-Editor.github.io"
```

### 2. Git repository başlat:
```bash
git init
git add .
git commit -m "Initial commit: HTML Editor MVP"
```

### 3. GitHub'a bağla:
```bash
# YOUR_USERNAME yerine kendi GitHub kullanıcı adını yaz
git remote add origin https://github.com/YOUR_USERNAME/HTML-Editor.github.io.git
git branch -M main
git push -u origin main
```

### 4. GitHub Pages Aktif Et:
1. GitHub.com'da repository'ye git
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Save

### 5. Canlı URL:
```
https://YOUR_USERNAME.github.io/HTML-Editor.github.io/
```

## 🔄 Güncellemeler İçin:

Her değişiklikten sonra:
```bash
git add .
git commit -m "Update: açıklama buraya"
git push
```

2-3 dakika içinde değişiklikler yayınlanır!

## 🎯 Alternatif: GitHub Desktop

Daha kolay yol:
1. GitHub Desktop'ı aç
2. "Add Local Repository" → bu klasörü seç
3. "Publish repository" → Push
4. Settings → Pages'ten aktif et

Hepsi bu kadar! 🎉




