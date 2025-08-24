# הוראות התקנה לפתרון בעיות 404 - Vercel

## הבעיה
האתר הוא Single Page Application (SPA) עם React Router, אבל השרת לא יודע איך לטפל בנתיבים כמו `/about`, `/contact` וכו'. זה גורם לשגיאות 404 שגוגל מזהה.

## הפתרון
האתר מאוחסן ב-GitHub ויוצא ל-Vercel. הקובץ `vercel.json` מטפל בראוטינג של SPA.

## איך זה עובד

### 1. קובץ `vercel.json`
הקובץ מכיל:
- **rewrites**: מפנה את כל הנתיבים ל-`index.html` (סטטוס 200)
- **headers**: מוסיף headers אבטחה
- **redirects**: מטפל ב-redirects מ-www

### 2. איך Vercel מטפל בזה
כשמישהו נכנס לכתובת כמו `/about`:
1. Vercel מחפש קובץ בשם `about`
2. לא מוצא אותו
3. מפעיל את ה-rewrite rule
4. מחזיר את `index.html`
5. React Router לוקח שליטה ומציג את הדף הנכון

## בדיקה
לאחר ההתקנה:
1. בדוק שכל הנתיבים עובדים (למשל `/about`, `/contact`)
2. בדוק בגוגל Search Console שהשגיאות 404 נעלמו
3. שלח בקשה לאינדקס מחדש של הדפים

## הערות חשובות
- וודא שה-SSL מופעל (HTTPS)
- וודא שה-redirects מ-www ל-non-www עובדים
- בדוק שה-sitemap מעודכן ומכיל את כל הדפים
- האתר צריך להיות מוגדר כ-SPA ב-Vercel

## תמיכה
אם יש בעיות:
1. בדוק את הלוגים ב-Vercel Dashboard
2. וודא שה-build עובר בהצלחה
3. בדוק שה-deployment הושלם
