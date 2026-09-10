---
title: Üst menü
---

# Üst menü

**Üst menüde** dongle ile robotu bağlamak, dosya kaydetmek ve açmak gibi programda sık kullanılan işlevler toplanmıştır.  
Aşağıda her menünün işlevi sırayla anlatılır. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Programın logosudur.  
Logoya tıkladığınızda sayfa yenilenir. 

**Blok kodlama düzenleyicisi** etkinken logoda **Block Composer** yazar.  

<BlockImage module="program/Menu" id="logo-python" /><br>

**Python düzenleyicisi** etkinken logoda **Script Composer** yazar.  

<br>

## Donanım Kilidi {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Robotla iletişim kuracak **dongle'ı arayıp programa bağlayabilirsiniz**.

Programda robotu denetlemek için önce robotla iletişim kuracak dongle'ı programa bağlamanız gerekir.  
Bu işleme **eşleştirme** denir. 

**Donanım Kilidi** düğmesine bastığınızda bilgisayarda kullanılabilen dongle'ların listesi görünür.  
Listeden istediğiniz dongle'ı seçip **bağlan** düğmesine tıkladığınızda dongle programa bağlanır.  

### Dongle bağlantı durumunu görme {#dongle-status}

Programa bir kez bağlanmış olan dongle, sonraki kullanımlarda kendiliğinden bağlanır.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Dongle programa düzgün bağlandığında simge **açık mavi** olur.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Tarayıcı sekmesinde aşağıdaki görseldeki gibi bir simge varsa dongle'ın bağlı olduğunu anlarsınız.  

<br>

**⚠️ Dikkat**  

Dongle başka bir programa ya da başka bir sayfaya zaten bağlıysa programa bağlanmaz.  
Bu durumda dongle'ın bağlı olduğu programı bulup bağlantısını kesin, sonra bu sayfaya dönüp yeniden bağlanmayı deneyin.

<br>

## Robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Programda **kullanılacak robotu seçebilir** ve o **robotun bilgilerini, kendine özgü bloklarını / betik kodlarını kaydedebilirsiniz**. 

Programda robotu denetlemek için önce kullanacağınız robotun bilgilerini ve bloklarını programa eklemeniz gerekir.

<BlockImage module="program/Menu" id="robot-select" /><br>

**Robot** düğmesine bastığınızda açılan pencerede programda kullanılabilen robotların listesi görünür.  

İstediğiniz robotu seçip **Ekle** düğmesine tıkladığınızda o robotun bilgileri ve kendine özgü blokları / betik kodları programa kaydedilir.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Robot eklendiğinde şunlar oluşur: 


- **Block Composer**: soldaki [**blok paletinde**](Editor#block-editor) o robota özgü **bloklar** oluşur 
- **Script Composer**: soldaki [**kod paletinde**](Editor#python-editor) o robota özgü **betik kodları** oluşur

Böylece sensör, motor, LED gibi gerçek robot donanımını dilediğiniz gibi hareket ettirip denetleyebilirsiniz.  

<br>

**⚙️ Not**

RobomationLAB'de robotun türü ve sayısı ne olursa olsun istediğiniz kadar robot bağlayıp kullanabilirsiniz.  

Ancak birden çok robotu aynı anda bağlayıp kullanmak isterseniz, kullanmak istediğiniz robot sayısı kadar dongle'ın programa bağlı olması ve o sayıda robotun programa eklenmiş olması gerekir.  

<br>

## Uzantı {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Uzantı modülleri **konuşma tanıma, görüntü tanıma, görsel çözümleme gibi yapay zekâ tabanlı ek işlevler** sağlayan modüllerdir.  
Programda **kullanılacak uzantı modülünü seçebilir** ve o **uzantı modülünün bilgilerini, kendine özgü bloklarını / betik kodlarını kaydedebilirsiniz**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

**Uzantı** düğmesine bastığınızda açılan pencerede programda kullanılabilen uzantı modüllerinin listesi görünür.  
- Konuşmayı Metne Dönüştürme
- Yüz Algılama
- Ayrıntılı Yüz Algılama
- Yüz İfadesi
- El Algılama
- Vücut Algılama
- Nesne Algılama
- Renk Algılama
- ArUco İşaretçisi Algılama
- Kamerayla Otonom Sürüş

İstediğiniz modüle tıkladığınızda, [**Robot**](#robot) menüsündeki gibi o uzantı modülünün bilgileri ve kendine özgü blokları / betik kodları programa kaydedilir. 

**Yüz Algılama, El Algılama** gibi kamera kullanan bir uzantı modülünü programa eklediğinizde  
[**Önizleme - Kamera**](Preview#camera) sekmesinde bir kamera modülü oluşur ve programa kamera bağlayıp kullanabilirsiniz.  

Seçtiğiniz uzantı modülüne artık gerek yoksa **sağ tıklama → Kaldır** ile modülü listeden çıkarabilirsiniz.

<br>

## Ses {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Kodlamada kullanacağınız sesi seçebilir ya da bilgisayarınızdaki bir sesi programa ekleyebilirsiniz.

### Ses seçme {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

**Ses** düğmesine bastığınızda programın sunduğu çeşitli sesleri seçebileceğiniz ekran açılır.  
Şunları yapabilirsiniz:  
- Ses arama
- ▶ Sesi önceden dinleme
- Ses listesine (soldaki panel) ses ekleme

### Ek işlevler {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Sol alttaki **ek işlev** düğmesine (kırmızı kutu) tıkladığınızda ya da fareyi üzerine getirdiğinizde üç ek işlev seçeneği görünür.  
Şunları yapabilirsiniz:
- Yerel dosya ekleme: bilgisayarınızdaki bir ses dosyasını ekler 
- Ses kaydetme: kendiniz kayıt yaparak ses ekler
- Rastgele ses ekleme: bütün ses listesinden rastgele seçilen bir sesi ekler

### Kodlamada ses kullanma {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Ses listesine (soldaki panel) eklenen sesleri kodlamada kullanabilirsiniz.

- **Blok kodlamada**, **sesini çal** bloğunun açılır listesinden istediğiniz sesi seçebilirsiniz.  

- **Betik kodlamada**, **Kodlar - Ses** kategorisindeki **'sesini çal'** fonksiyonunun alt seçeneklerinden istediğiniz sesi seçebilirsiniz.  

Kod çalıştığında seçtiğiniz ses bilgisayarınızın hoparlöründen çalınır.

<br>

## Örnek {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Programa bir robot eklenmişse, robotlara göre basit örnekleri açıp deneyebilirsiniz.

### Örnek seçme {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Örnek düğmesine bastığınızda yukarıdaki gibi bir **Örnek Seç** ekranı açılır.   
**Kategori ayrımı** ve **arama** işlevleriyle istediğiniz örneği hızlıca bulabilirsiniz. 

### Örnek açma {#example-load}
1. **Örnek** menüsüne tıklayıp **Örnek Seç** ekranını açın ve istediğiniz örneği seçin. 
2. Ekran yenilenir ve örnek kodlama alanında görünür.   
3. Örneği açtıktan sonra başka bir işlem yapmadan **çalıştırma düğmesine (▶)** basarak sonucu görebilirsiniz. 

<br>

## Düzenle {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Yaptığınız işlemi geri alabileceğiniz ya da yineleyebileceğiniz işlevlerdir.
- Kopyala (Ctrl+C): seçtiğiniz bloğu ya da kodu kopyalar.
- Yapıştır (Ctrl+V): kopyaladığınız bloğu ya da kodu çalışma alanına yapıştırır.
- Geri Al (Ctrl+Z): son işlemi geri alır.
- Yinele (Ctrl+Y): geri aldığınız işlemi yeniden yapar. 

<br>

## Dosya {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Yeni kod oluşturabilir, yazdığınız kodu dosya olarak kaydedip açabilir, yani dosyalarınızı yönetebilirsiniz.

- Yeni  
O an yazmakta olduğunuz kodu sıfırlar ve yeni bir kod oluşturur.

- Projeyi Kaydet  
O an üzerinde çalıştığınız proje dosyasını kaydeder.  
Dosya bilgisayarınızın 'İndirilenler' klasörüne kaydedilir ve uzantısı '.block' olur.

- Python Kodunu Dışa Aktar  
O an üzerinde çalıştığınız projenin Python kodunu çıkarıp dosya olarak kaydeder.  
Dosya bilgisayarınızın 'İndirilenler' klasörüne kaydedilir ve uzantısı '.py' olur.  
Kaydedilen dosyayı VSCode gibi dış Python geliştirme ortamlarında açıp çalıştırabilirsiniz.

- Projeyi Aç  
Bilgisayarınızdaki bir proje dosyasını ya da Python kod dosyasını açar.  
Açılabilen dosya uzantıları '.block' ve '.py' dosyalarıdır.  
'.block' dosyası blok kodlama düzenleyicisinde, '.py' dosyası Python düzenleyicisinde açılır.  
'.py' dosyası açılırken Block Composer'ın kod biçimine uymuyorsa ya da sözdizimi hatası varsa dosya düzgün açılmayabilir, dikkat edin.

<br>

## Kodu çalıştırma / durdurma {#run-stop}

### Çalıştır (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

O an etkin olan düzenleyicide yazılmış blok kodunu ya da betik kodunu yorumlayıp çalıştırır.  

Yazdığınız koda göre programa bağlı robotu denetleyebilirsiniz.  
Kod çalışırken yazılmış kodu değiştiremezsiniz.

### Durdur (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Kodun çalışmasını durdurur.


<br>

## Yapay Zekâ ile Kodlama {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Üst menüdeki **Yapay Zekâ ile Kodlama** düğmesine bastığınızda ekranın sağında yapay zekâ sohbet paneli açılır.  
RobomationLAB'in içindeki **yapay zekâ sohbet botuyla** konuşarak yapay zekâyla birlikte kod yazabilirsiniz.

Şunları yapabilirsiniz:
- Kod yazma ve değiştirme yolları, sözdizimi, kavramlar gibi kodlamayla ilgili her şeyi sorabilirsiniz.
- **Kod çalışırken bir hata oluştuğunda** yapay zekâya hatanın nedenini ve çözümünü sorup sorunu hızlıca giderebilirsiniz.
- Yapay zekânın verdiği kodu, kod bloğunun sağındaki kopyalama düğmesiyle kolayca kopyalayabilirsiniz.
- Konuşma kaydedilir ve kaldığınız yerden sürdürebilirsiniz; **yeni bir konuşma** da başlatabilirsiniz.
- Panelin sol kenarını sürükleyerek panelin genişliğini ayarlayabilirsiniz.

<br>

## Kodu Kopyala {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

O an etkin olan düzenleyicide yazılmış kodu panoya kopyalayabilirsiniz.  

### Block Composer (blok kodlama) {#copy-block}

**[Python önizlemesi](Preview#python-preview)** sekmesinde görünen Python kodu kopyalanır.

### Script Composer (Python) {#copy-python}
Python düzenleyicisinde yazılı olan kod olduğu gibi kopyalanır.  

Kopyaladığınız kodu Ctrl+V ile istediğiniz yere yapıştırabilirsiniz.

<br>

## Düzenleyici seçimi {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

**Blok** ve **Python** düzenleyicilerinden istediğinizi seçerek kod yazabilirsiniz.  

Düzenleyiciyi değiştirseniz de daha önce yazdığınız kod olduğu gibi kalır ve istediğiniz zaman kaldığınız yerden sürdürebilirsiniz. 

**※ Blok kodlama düzenleyicisiyle Python düzenleyicisi bire bir karşılık gelir; düzenleyiciyi değiştirdiğinizde yazdığınız kod karşılıklı dönüşerek sürer.**

### Blok kodlama düzenleyicisi {#editor-settings-block}
Blok'u seçtiğinizde logo **Block Composer** olur.  
Blok kodlama düzenleyicisinde yazdığınız bloklar anlık olarak Python koduna dönüşür ve dönüşümün sonucunu **Önizleme - Python önizlemesi** sekmesinde görebilirsiniz.  

### Python düzenleyicisi {#editor-settings-python}
Python'u seçtiğinizde logo **Script Composer** olur.  
Python düzenleyicisinde yazdığınız kod, yeniden **blok kodlama düzenleyicisine** geçtiğinizde bloklara dönüşür.  

> Ancak Python → blok dönüşümü yalnızca bloklarla anlatılabilen kod için gerçekleşir.  
> Sözdizimi hatalıysa ya da bloklara dönüştürülemeyen bir kodsa blok kodlama düzenleyicisine geçilemeyebilir; bu durumda geçişin neden başarısız olduğu da gösterilir.

<br>

## Ayarlar {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Programın temel ayarlarını yapabilirsiniz.

### Dil {#settings-language}
Programda görünen dili (ülkeyi) değiştirir.  
Toplam 21 dil arasından kullanmak istediğinizi seçebilirsiniz.

### Donanım kilidi {#settings-dongle}
- Bağlantıyı kes: programa bağlı bütün dongle'ların bağlantısını keser.
- Bağlan: programa dongle'ı yeniden bağlar.

### Sıfırlama {#settings-reset}
- Programı Sıfırla: programa kayıtlı bütün veriler (robot bilgileri, blok/betik kodları, ayarlar vb.) sıfırlanır.

<br>

## Destek {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Programı kullanmak için gereken kılavuzlara ve dış kaynaklara ulaşabilirsiniz.  

- Eğitim: programı ilk kez kullananlar için bir eğitim sunar.
- Yardım: program içinde blokların ve Python kodlarının kullanımını ve örneklerini hemen görebilirsiniz.
- Kullanıcı Rehberi: RobomationLAB kullanım kılavuzu Wiki sayfasına gider.  
Programın bölümleri ve kullanımı, her blok/betik kodunun işlevi ve sözdizimi gibi konularda ayrıntılı açıklama sunar.
- Robomation Laboratuvarı: RobomationLAB ana sayfasına gider.
- Ana Sayfa: Robomation'ın resmî kurumsal sayfasına gider.
- YouTube: Robomation'ın YouTube sayfasına gider.
- Alışveriş Merkezi: Robomation'ın alışveriş sayfasına gider.
- Hakkında: programın sürümünü ve güncelleme geçmişini, kullanım koşullarını, gizlilik ilkelerini görebilirsiniz.
- Bize Ulaşın: programı kullanırken aklınıza takılanları ya da hataları iletebilirsiniz.

<br>
