async function mimariAlgila() {
    const adEl = document.getElementById('archName');
    const bilgiEl = document.getElementById('archInfo');
    const noktaEl = document.getElementById('nokta2');

    // Bekleme sırasında noktaları animasyonlu göster
    let sayac = 0;
    const noktaInterval = setInterval(() => {
        sayac = (sayac + 1) % 4;
        if (noktaEl) noktaEl.textContent = '.'.repeat(sayac);
    }, 500);

    let bitness = null;      // "64" | "32"
    let architecture = null; // "arm" | "x86" vb.
    const ua = navigator.userAgent || '';

    // 1) Modern tarayıcılar (Chrome/Edge Android) - User-Agent Client Hints API
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
        try {
            const hints = await navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness', 'model', 'platformVersion']);
            bitness = hints.bitness || null;
            architecture = hints.architecture || null;
        } catch (e) {
            // Client Hints desteklenmiyor veya izin verilmedi, alt yönteme geçilecek
        }
    }

    // 2) Alt yöntem: User-Agent metnini analiz et
    if (!bitness) {
        if (/wow64|win64|x64|x86_64|amd64|aarch64|arm64/i.test(ua)) {
            bitness = '64';
        } else if (/i686|i386|x86(?!_64)/i.test(ua) || /armv7/i.test(ua)) {
            bitness = '32';
        }
    }
    if (!architecture) {
        if (/aarch64|arm64/i.test(ua)) architecture = 'ARM (64-bit)';
        else if (/armv7|arm(?!64)/i.test(ua)) architecture = 'ARM (32-bit)';
        else if (/x86_64|amd64/i.test(ua)) architecture = 'x86_64';
        else if (/x86|i686|i386/i.test(ua)) architecture = 'x86';
    }

    clearInterval(noktaInterval);
    if (noktaEl) noktaEl.textContent = '';

    if (bitness === '64') {
        adEl.textContent = '64 Bit Destekleniyor';
        bilgiEl.textContent =
            `Mimari: ${architecture || 'Bilinmiyor'} • Cihazınız 64-bit çalışıyor. ` +
            `Android'de 64-bit cihazların büyük çoğunluğu ARM mimarisi (arm64-v8a) kullanır ve ` +
            `genellikle geriye dönük uyumluluk için 32-bit (armeabi-v7a) uygulamaları da çalıştırabilir.`;
    } else if (bitness === '32') {
        adEl.textContent = 'Sadece 32 Bit Destekleniyor';
        bilgiEl.textContent =
            `Mimari: ${architecture || 'Bilinmiyor'} • Cihazınız yalnızca 32-bit çalışıyor gibi görünüyor. ` +
            `64-bit uygulamalar bu cihazda çalışmayabilir.`;
    } else {
        adEl.textContent = 'Kesin Olarak Belirlenemedi';
        bilgiEl.textContent =
            'Tarayıcınız bu bilgiyi paylaşmıyor. Günümüzde satılan Android cihazların büyük çoğunluğu ' +
            '64-bit\'tir ve genellikle 32-bit uygulamalarla da uyumludur, ancak bu cihaz için kesin ' +
            'doğrulama yapılamadı.';
    }
}

document.addEventListener('DOMContentLoaded', mimariAlgila);
