function konteynerDuzenle() {
    const konteyner = document.querySelector('.platform-container');
    if (konteyner) {
        konteyner.style.setProperty('flex-direction', 'column', 'important');
        konteyner.style.setProperty('align-items', 'center', 'important');
    }
}

async function mimariAlgila() {
    konteynerDuzenle();
    const adEl = document.getElementById('archName');
    const bilgiEl = document.getElementById('archInfo');
    const noktaEl = document.getElementById('nokta2');

    let sayac = 0;
    const noktaInterval = setInterval(() => {
        sayac = (sayac + 1) % 4;
        if (noktaEl) noktaEl.textContent = '.'.repeat(sayac);
    }, 500);

    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);

    let bitness = null;
    let architecture = null;

    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
        try {
            const hints = await navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness', 'model', 'platformVersion']);
            bitness = hints.bitness || null;
            architecture = hints.architecture || null;
        } catch (e) {}
    }

    if (!bitness) {
        if (/aarch64|arm64|wow64|x86_64|amd64/i.test(ua)) {
            bitness = '64';
        } else if (/armv7|i686|i386/i.test(ua)) {
            bitness = '32';
        }
    }
    if (!architecture) {
        if (/aarch64|arm64/i.test(ua)) architecture = 'arm64';
        else if (/armv7/i.test(ua)) architecture = 'armv7';
        else if (/x86_64|amd64/i.test(ua)) architecture = 'x86_64';
        else if (/x86|i686|i386/i.test(ua)) architecture = 'x86';
    }

    clearInterval(noktaInterval);
    if (noktaEl) noktaEl.textContent = '';

    if (!isAndroid) {
        adEl.textContent = 'Android Cihazı Değil';
        bilgiEl.textContent = 'Bu kart Android cihazlar için hazırlanmıştır.';
        return;
    }

    if (bitness === '64') {
        adEl.textContent = '32 Bit + 64 Bit Destekleniyor';
        bilgiEl.textContent = `Mimari: ${architecture || 'arm64'} • Cihazınız 64-bit çalışıyor ve genellikle 32-bit uygulamalarla da uyumludur.`;
    } else if (bitness === '32') {
        adEl.textContent = 'Sadece 32 Bit Destekleniyor';
        bilgiEl.textContent = `Mimari: ${architecture || 'armv7'} • Cihazınız yalnızca 32-bit çalışıyor, 64-bit uygulamalar çalışmayabilir.`;
    } else {
        adEl.textContent = 'Kesin Olarak Belirlenemedi';
        bilgiEl.textContent = 'Tarayıcı bu bilgiyi paylaşmıyor. Cihazınız muhtemelen 64-bit ve 32-bit uyumlu.';
    }
}

document.addEventListener('DOMContentLoaded', mimariAlgila);
