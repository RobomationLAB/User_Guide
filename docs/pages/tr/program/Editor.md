---
title: Düzenleyici
---

# Düzenleyici

**Düzenleyici**, **blok** ya da **betik kodu** kullanarak robotu denetleyecek kodu yazabileceğiniz bölümdür.  
Aşağıda **blok kodlama / betik (Python) kodlama** ortamlarında kod yazma yolları ve dikkat edilmesi gereken noktalar anlatılır.

## Blok kodlama düzenleyicisi {#block-editor}

### Blok kategorileri {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

RobomationLAB'in sunduğu blokların **kategorilere** ayrıldığı bölümdür.  
Bir kategoriye tıkladığınızda o kategorinin **blok paletini** görebilirsiniz.  

Temel olarak sunulan blok kategorileri şunlardır:  

- Mantık
- Döngüler
- Matematik
- Metin
- Liste
- Renk
- Ses
- Kontrol
- Değişkenler
- Fonksiyonlar
- Diğerleri

Bunların dışında [**Robot**](Menu#robot) ya da [**Uzantı**](Menu#extension) modülü eklediğinizde programda o modüle özgü blok paletini de kullanabilirsiniz.  

<br>

**⚙️ Not**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Programa eklediğiniz bloklardan artık kullanmadığınız kategorileri **sağ tıklama → Kaldır** ile blok kategorilerinden çıkarabilirsiniz.

<br>

### Blok paleti {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Her kategorinin bütün bloklarının toplandığı bölümdür.  
Blok paletindeki blokları **sürükle-bırak** yöntemiyle kodlama alanına taşıyabilirsiniz.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Not**  
Bir bloğun nasıl kullanıldığını öğrenmek isterseniz **sağ tıklama → Yardım** ile her bloğun kullanımını anlatan yardım sayfasını açabilirsiniz.  

<br>

### Kodlama alanı {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Blok paletinden getirdiğiniz blokları birleştirebileceğiniz bölümdür.  


Birleştirdiğiniz bloklar anlık olarak **Python koduna** dönüşür;  
kodu çalıştırdığınızda bu kodlar yorumlanarak robot hareket ettirilir ve denetlenir.  

<br>

### Blokların temel yapısı {#block-structure}

Blok kodlama düzenleyicisinde kod yazarken aşağıdaki temel yapıya uymanız gerekir.

<BlockImage module="program/Editor" id="block-structure" /><br>

Blok kodlama düzenleyicisi yalnızca **setup fonksiyonu** ve **loop fonksiyonu** bloklarının içindeki kodu yorumlayıp çalıştırır.  
Bu yüzden kodu, **setup fonksiyonu** ve **loop fonksiyonu** bloklarının içine blok koyarak yazmalısınız.  

**setup fonksiyonu**  
setup fonksiyonu bloğunun içinde, kod çalıştığında en başta yapılacak işlemler tanımlanır.  
**bekle** bloğunu kullanarak işlemlerin zaman sırasına göre yapılmasını sağlayabilirsiniz.  

**loop fonksiyonu**  
loop fonksiyonu bloğunun içinde, kod çalıştığı sürece yinelenerek yapılacak işlemler tanımlanır.  
Tanımlanan işlemler 10 ms'de bir yinelenerek yapılır.  

**⚙️ Not**  
(**Fonksiyonlar kategorisiyle** oluşturduğunuz özel fonksiyonlar dışında)  
**setup fonksiyonu** ya da **loop fonksiyonu** bloklarının dışında kalan blokların kod çalışırken hiçbir etkisi olmaz.  

<br>

### Blokları kullanma {#block-usage}

**Blok ekleme**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Eklemek istediğiniz bloğu **blok paletinden sürükleyip** **düzenleyiciye bıraktığınızda** o blok eklenir.   
<br>

**Blok kopyalama/yapıştırma**  

Düzenleyicide blok kopyalayıp yapıştırmanın iki yolu vardır.  

1. Bloğu seçip **Ctrl+C** tuşlarına bastığınızda seçtiğiniz blok **kopyalanır**.  
**Ctrl+V** tuşlarına bastığınızda en son kopyaladığınız blok düzenleyiciye **yapıştırılır**.  

2. Bloğu seçip **Düzenle** menüsünde **'Kopyala Ctrl+C'** düğmesine bastığınızda seçtiğiniz blok **kopyalanır**.  
**Düzenle** menüsünde **'Yapıştır Ctrl+V'** düğmesine bastığınızda en son kopyaladığınız blok düzenleyiciye **yapıştırılır**.

<br>

**Blok silme**  

Düzenleyicide blok silmenin üç yolu vardır.

1. Bloğu seçip **Backspace** tuşuna bastığınızda seçtiğiniz blok silinir.<br>  

2. Silmek istediğiniz bloğu **düzenleyiciden sürükleyip** **blok kategorilerine bıraktığınızda** o blok silinir.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Silmek istediğiniz bloğu **düzenleyiciden sürükleyip** **çöp kutusuna bıraktığınızda** o blok silinir.  
Sildiğiniz bloğu **çöp kutusunda** yeniden görebilirsiniz.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Birden çok bloğu aynı anda seçme**  

Düzenleyicide birden çok bloğu aynı anda seçmenin iki yolu vardır.

1. **Shift** tuşunu basılı tutarak çalışma alanını sürüklerseniz ya da blokları tek tek tıklarsanız  
birden çok bloğu aynı anda seçebilirsiniz.  

2. Çalışma alanının sağ altındaki **onay düğmesine** tıklayarak 'birden çok blok seçme' kipini açıp kapatabilirsiniz.  
Düğme renkle doluysa kip açıktır.  
Düğme renkle dolu değilse kip kapalıdır.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

'Birden çok blok seçme' kipi açıkken yalnızca blok seçme işlemi yapabilirsiniz.   
Seçtiğiniz blokları aynı anda taşımak ya da düzenlemek için seçimi bitirdikten sonra kipi kapatmalısınız.  

<br>

**Ek seçenekler**

Bunların dışında bir bloğa **sağ tıkladığınızda**  
**bloğu daraltma/genişletme, etkinleştirme/devre dışı bırakma, yardım** gibi çeşitli ek seçenekleri görebilirsiniz.  

<br>

## Python düzenleyicisi {#python-editor}

### Kod paleti {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Robot kodlaması için gereken **temel fonksiyonların** ve robot / uzantı modüllerine özgü **Python kodlarının** **kategorilere** ayrıldığı bölümdür.  


Kodlar (Codes) bölümünde sunulan kod kategorileri şunlardır:  

- Mantık (logic)
- Döngüler (loops)
- Matematik (math)
- Metin (text)
- Liste (lists)
- Renk (color)
- Ses (audio)
- Kontrol (control)

Kodlar bölümündeki kodlar, blok kodlama düzenleyicisindeki temel blokların hepsiyle aynı işi yapar.  

<br>

**⚙️ Not**  
Kod paletini kullanarak Python düzenleyicisinde kod yazmayı [**Kod paletini kullanma**](#python-codes-usage) bölümünde görebilirsiniz.

<br>

### Kod düzenleyicisi {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Robotu denetleyecek kodu yazabileceğiniz bölümdür.  


[**Düzenleyici seçiminde**](Menu#editor-settings) **Python** düzenleyicisini seçtiğinizde Python kodu yazabilirsiniz.

<br>

### Kodun temel yapısı {#python-structure}

Kod düzenleyicisinde kod yazarken aşağıdaki temel yapıya uymanız gerekir.

```python
from robomation import *

# (kullanılacak bir robot varsa örnek olarak bildirin, örnek)
hamster_s = HamsterS(0)

# bir kez çalıştırılacak başlangıç kodunu buraya yazın:
def setup():
    pass

# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:
def loop():
    pass
```

Kod düzenleyicisi yalnızca **setup** ve **loop** fonksiyonlarının içindeki kodu yorumlayıp çalıştırır.  
Bu yüzden kodu **setup** ve **loop** fonksiyonlarının içine yazmalısınız.  
Ayrıca robotu denetlemek için kodun en üstüne `from robomation import *` satırını koymalı ve kullanacağınız robotu örnek olarak bildirmelisiniz.

**setup**  

setup fonksiyonunun içinde, kod çalıştığında en başta yapılacak işlemler tanımlanır.  
**Utils.wait** fonksiyonunu kullanarak işlemlerin zaman sırasına göre yapılmasını sağlayabilirsiniz.  

**loop**  
loop fonksiyonunun içinde, kod çalıştığı sürece yinelenerek yapılacak işlemler tanımlanır.  
Tanımlanan işlemler 10 ms'de bir yinelenerek yapılır.  


<br>

### Kod paletini kullanma {#python-codes-usage}

Aşağıda basit örneklerle **kod paletini kodlamada kullanma** yolları anlatılır.  

### İstediğiniz kodu bulma {#python-codes-find}

Kod paleti robot kodlaması için gereken çeşitli fonksiyonları ve kodları sunar.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

**Kodlar** kategorisindeki menülere baktığınızda <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> simgesi olan menüler görürsünüz.  

**Mantık** menüsüne bir kez tıkladığınızda simge <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> olur ve içindeki **alt menüler** açılarak görünür.  
Alt menüsü olan bu tür menülere '**kategori**' denir.  

**Mantık** kategorisindeki **üçlü** gibi bir menüde <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> simgesi yoksa, o menünün içinde **artık alt menü olmadığı** anlamına gelir.  
Alt menüsü olmayan bu tür menülere '**kod**' denir.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Alt menüleri açılmış bir kategoriye yeniden tıkladığınızda simge yine <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> olur ve alt menüler gizlenir.  

Kategorileri bu yolla izleyerek kod paletinde istediğiniz kodu bulabilirsiniz.

<br>

### Düzenleyiciye kod ekleme {#python-codes-insert}

Düzenleyiciye kod eklemenin yolu şudur.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Menü adının solunda <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> simgesi varsa, o menüde seçilebilecek bir **kod seçeneği** yok demektir.  
Alt menüsü olan **kategori** menüleri çoğunlukla böyledir.

Menü adının solunda <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> simgesi varsa, o menüde **kod seçeneği** seçilebilir demektir.  
Alt menüsü olmayan **kod** menüleri çoğunlukla böyledir.

Düzenleyiciye eklemek istediğiniz koda fareyle **sağ tıkladığınızda** seçebileceğiniz seçenekleri görürsünüz.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Bir **kod** menüsüne sağ tıkladığınızda, temel fonksiyon ya da robot / uzantı modülüne özgü kod ayrımı olmadan aynı seçenekleri görürsünüz.

- **Kod Ekle**: seçtiğiniz kodu düzenleyicideki imlecin bulunduğu yere ekler.
- **Yardım**: o kodun kullanımını anlatan yardım sayfasını açar.
- **İptal**: seçenek menüsünü kapatır.

Robot / uzantı modülüne özgü kodlarda **Kod Ekle** seçeneği, o robot örneğinin bir yöntem çağrısı biçiminde eklenmesini sağlar.  
( örneğin Hamster S'in `set_wheel_speed` kodu → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Not**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Programa eklediğiniz robot / uzantı modülüne özgü kodlardan artık kullanmadığınız kod kategorilerini  
**sağ tıklama → Kaldır** ile kod paletinden çıkarabilirsiniz.

<br>
