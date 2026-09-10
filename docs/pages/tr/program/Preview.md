---
title: Önizleme
---

# Önizleme

**Önizleme**, **robot bağlantı durumunu** görebileceğiniz; kod, kamera ve konsol gibi robot kodlamasına yardımcı olan bölümdür.  
Aşağıda her sekmede kullanabileceğiniz işlevler anlatılır.

## Robot bağlantı durumu {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Bağlantılar sekmesinde o an bağlı olan robotların bilgilerini görebilirsiniz.   
**Gerçek Zamanlı Sensör Değerini Göster** üzerine tıkladığınızda robotun sensör değerlerini grafikle ya da sayıyla anlık olarak izleyebilirsiniz.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. İzlenecek sensörü seçebilirsiniz; desteklenen sensör türleri robota göre değişir.  
Seçtiğiniz sensöre göre grafik ve veri gösterimi o sensörün değerlerine uyacak biçimde kendiliğinden değişir. 

2. Sensör değerinin kaç saniyede bir okunacağını ya da kaydedileceğini seçebilirsiniz.  
Seçtiğiniz aralığa göre veri kaydedilebilecek ve grafikte gösterilebilecek en uzun süre değişir. 
3. Fareyi sensör grafiğinin üzerine getirdiğinizde o andaki sensör değerini anlık olarak görebilirsiniz. 
4. Kaydı başlat/durdur: sensör verilerini kaydeder. 
5. Dışa aktar: kaydedilen sensör verilerini (.csv) ve grafik görüntüsünü (.png) dosya olarak kaydeder.  
Bu işlev yalnızca veri kaydedildikten sonra kullanılabilir. 
6. Ekran görüntüsü: o anki grafik görüntüsünü (.png) anında kaydeder.  
Sensör değerlerinin değişimini kaydedebilir, kaydedilen veri dosyasını ve grafik görüntüsünü dosya olarak saklayabilirsiniz.    

<br>

## Python önizlemesi {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Python önizlemesinde blok eklediğinizde ya da kaldırdığınızda bunun **Python** koduna nasıl dönüştüğünü anlık olarak görebilirsiniz.  
Blokların koda nasıl dönüştüğünü birlikte izleyerek kodlama sözdizimini daha kolay öğrenebilirsiniz. 

※ Python önizlemesi yalnızca **blok kodlama düzenleyicisinde** vardır.  
Python düzenleyicisinde kodu kullanıcı kendisi yazdığı için önizleme sunulmaz.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Kamera sekmesinde bilgisayara bağlı kameranın görüntüsünü anlık olarak izleyebilirsiniz.  

Bu işlev yalnızca **kamera kullanan bir uzantı modülü programa eklendiğinde** etkinleşir ve kamera sekmesinde bir kamera modülü oluşur.  

Her kamera modülünde şunları yapabilirsiniz:
- Bilgisayarda kullanılabilen kameralardan birini seçip görüntüsünü gösterebilirsiniz.
- **Açık / Kapalı** düğmesiyle kamera görüntüsünü açabilir ya da durdurabilirsiniz.
- **Kamera çözünürlüğünü** değiştirebilirsiniz.

<br>

## Konsol {#console}

Konsol sekmesinde program çalışırken yazdırılan günlük (Log) iletilerini ve grafik (Scope) çizimlerini anlık olarak izleyebilirsiniz.  
Bu sekme hata ayıklama, sensör değerlerini izleme ve grafiğe dayalı çözümleme için kullanılır.  

### Günlük {#console-log}
**Günlüğe yaz** bloğuyla, belirlediğiniz etiketle birlikte metin ya da sayı değerlerini konsolun günlük bölümüne yazdırabilirsiniz.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Grafik {#console-scope}

**Grafikte göster** bloğuyla, etiketlere göre sayı değerlerini **anlık grafik** olarak gösterebilirsiniz.  
En küçük değeri, en büyük değeri ve grafik rengini ayarlayarak istediğiniz değerin değişimini görsel olarak izleyebilirsiniz. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
