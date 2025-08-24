# דביר דלויה - אתר פייטן ומלמד בר מצווה

אתר רשמי של דביר דלויה - פייטן וחזן מקצועי לאירועים מיוחדים.

## 🚀 התקנה מהירה

### דרישות מקדימות
- Node.js 18+ 
- npm או yarn

### התקנה
```bash
# שכפול הפרויקט
git clone <repository-url>
cd dvir

# התקנת תלויות
npm install

# הרצה בסביבת פיתוח
npm run dev

# בנייה לפרודקשן
npm run build

# הרצה בפרודקשן
npm start
```

## 🌐 פתרון בעיות 404

האתר הוא Single Page Application (SPA) עם React Router. כדי לפתור שגיאות 404 שגוגל מזהה, הקובץ `vercel.json` מטפל בראוטינג.

### איך זה עובד
הקובץ `vercel.json` מכיל:
- **rewrites**: מפנה את כל הנתיבים ל-`index.html` (סטטוס 200)
- **headers**: מוסיף headers אבטחה
- **redirects**: מטפל ב-redirects מ-www

כשמישהו נכנס לכתובת כמו `/about`, Vercel מחזיר את `index.html` ו-React Router מציג את הדף הנכון.

## 📁 מבנה הפרויקט

```
dvir/
├── public/                 # קבצים סטטיים
│   ├── robots.txt         # SEO configuration
│   ├── sitemap.xml       # Sitemap
│   └── .well-known/      # Security files
├── src/                   # קוד המקור
│   ├── components/        # קומפוננטים
│   ├── pages/            # דפי האתר
│   └── App.tsx           # אפליקציה ראשית
├── vercel.json            # Vercel configuration
└── index.html             # דף הבית
```

## 🔧 סקריפטים זמינים

- `npm run dev` - הרצה בסביבת פיתוח
- `npm run build` - בנייה לפרודקשן
- `npm run preview` - תצוגה מקדימה של הבנייה
- `npm run lint` - בדיקת קוד



## 📱 תכונות

- ✨ עיצוב מודרני ורספונסיבי
- 🌐 תמיכה בעברית ו-RTL
- 🚀 ביצועים מהירים עם Vite
- 📱 PWA עם תמיכה offline
- ♿ נגישות מלאה
- 🔍 SEO מותאם

## 🌍 תמיכה בשרתים

האתר מוכן לעבודה עם:
- ✅ Vercel (מומלץ)
- ✅ GitHub Pages
- ✅ Netlify
- ✅ שרתים סטטיים אחרים

## 📞 תמיכה

לשאלות ותמיכה טכנית, פנה אל:
- 📧 [אימייל]
- 📱 [טלפון]

## 📄 רישיון

פרויקט זה מוגן בזכויות יוצרים © 2025 דביר דלויה
