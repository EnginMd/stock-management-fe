# Proje İçeriği
- Aşağıdaki stok seviyesi düşen ürünleri dönen API'den Axios kütüphanesi ile veri çekilir. Projede React kullanılmıştır.

        http://localhost:5229/products/low-stock
-   Dönen ürünlerin stock miktarları roma rakamlarına çevrilerek ekrana yazdırılır.
- Algoritma aşağıdaki tablo baz alınarak kurgulanmıştır. Sayı bu tablodaki 1. elemandan başlanarak kontrol edilir. Eğer ona eşit veya büyükse sembolü yazılır ve sayıdan sembolün değeri çıkarılır. Sayı halen bu değerden büyükse sembol tekrar eklenir ve sayı tekrar eksiltilir. Sayı sembolün değerinden küçük olana kadar bu devam eder. Sayı küçüldükten sonra sonraki sembolün değeri ile aynı kontrol ve işlemler yapılarak devam edilir. İlgii toRoman JavaScript fonksiyonu yukarıda repoda, App.jsx dosyasındadır.

  ```javascript
    const romanMap = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
    ];

