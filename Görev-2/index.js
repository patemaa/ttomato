document.addEventListener('DOMContentLoaded', function() {
    // İsim ve Ünvan
    document.getElementById('adSoyad').addEventListener('input', function() {
        document.getElementById('sağÜstKutuİsim').textContent = this.value;
    });
    document.getElementById('ünvan').addEventListener('input', function() {
        document.getElementById('sağÜstKutuÜnvan').textContent = this.value;
    });

    // İletişim Bilgileri
    document.getElementById('telefon').addEventListener('input', function() {
        document.getElementById('telefonBilgisi').textContent = this.value;
    });
    document.getElementById('mail').addEventListener('input', function() {
        document.getElementById('mailBilgisi').textContent = this.value;
    });
    document.getElementById('web').addEventListener('input', function() {
        document.getElementById('webBilgisi').textContent = this.value;
    });
    document.getElementById('adres').addEventListener('input', function() {
        document.getElementById('adresBilgisi').textContent = this.value;
    });

    // Eğitim Bilgileri
    document.getElementById('egitimAciklama').addEventListener('input', function() {
        document.getElementById('egitimBilgisi').textContent = this.value;
    });

    // Hakkımda
    document.getElementById('hakkimdaAciklama').addEventListener('input', function() {
        document.getElementById('hakkimdaBilgisi').textContent = this.value;
    });

    // İş Deneyimi
    document.getElementById('isDeneyimiAciklama').addEventListener('input', function() {
        document.getElementById('isDeneyimiBilgisi').textContent = this.value;
    });

    // Yetenek Sayısı (Bu kısımda yeteneklerin dinamik olarak eklenmesi gerekiyor)
    document.getElementById('yetenekSayisi').addEventListener('change', function() {
        let yetenekSayisi = parseInt(this.value, 10);
        let yetenekListesi = document.getElementById('yetenekBilgisi');
        yetenekListesi.innerHTML = ''; // Önceki yetenekleri temizle
        for (let i = 0; i < yetenekSayisi; i++) {
            let li = document.createElement('li');
            li.textContent = 'Yetenek ' + (i + 1);
            yetenekListesi.appendChild(li);
        }
    });
});



    // Orta Kolon Seçimleri
    document.getElementById('arkaplanRengi').addEventListener('input', function() {
        document.querySelector('.sagKolon').style.backgroundColor = this.value;
    });
    document.getElementById('solKolonRengi').addEventListener('input', function() {
        document.querySelector('.solKısım').style.backgroundColor = this.value;
    });
    document.getElementById('isimKutusuRengi').addEventListener('input', function() {
        document.querySelector('.sağÜstKutu').style.backgroundColor = this.value;
    });

    document.getElementById('isimKutusuYazıRengi').addEventListener('input', function() {
        document.getElementById('sağÜstKutuİsim').style.color = this.value;
    });

    document.getElementById('isimKutusuYazıRengi').addEventListener('input', function() {
        document.getElementById('sağÜstKutuÇizgi').style.color = this.value;
    });

    document.getElementById('isimKutusuYazıRengi').addEventListener('input', function() {
        document.getElementById('sağÜstKutuÜnvan').style.color = this.value;
    });

    document.getElementById('yaziTipi').addEventListener('change', function() {
        document.querySelector('.sagKolon').style.fontFamily = this.value;
    });






    // document.getElementById('çizgiRengi').addEventListener('change', function(){
    //     document.getElementById('sozcukAltindakiCizgi').style.color = this.value;
    // });





