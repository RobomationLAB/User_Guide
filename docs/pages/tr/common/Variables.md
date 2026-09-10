---
title: Değişkenler
---

# Değişkenler

«Değişken» terimini matematikteki ve diğer programlama dillerindeki anlamıyla kullanıyoruz.  
Yani **bir değeri saklayan ve değiştirilebilen adlandırılmış bir öğe**.  
  
Değişkenler birkaç yolla oluşturulabilir.  

- [ile sayılır](Loops#controls_for) ve [her öğe için](Loops#controls_forEach) gibi bazı bloklar bir değişken kullanır ve o değişkenin değerini kendisi belirler.  
Bu değişkenlere geleneksel olarak **döngü değişkeni (loop variable)** denir.  
- [Kullanıcı tanımlı fonksiyonlar](Functions#procedures_defnoreturn) da parametreleri, yani argümanları tanımlamak için değişken kullanır.
- Kullanıcı istediği anda **ayarla** bloğuyla değişken oluşturabilir; böyle oluşturulan değişken **genel değişken (global variable)** olarak bildirilir.  
- RobomationLAB'in blok kodlama ortamı **yerel değişkenleri (local variable)** desteklemez.  

Değişken bloğundaki açılır listeye tıkladığınızda şu seçenekler görünür.  

- Programda tanımlı tüm değişkenlerin adları.  
- **«Değişkeni yeniden adlandır»**: bu değişkenin adını programın tamamında değiştirir. Bu seçeneği seçtiğinizde yeni adı yazabileceğiniz bir pencere açılır.  
- **«Değişkeni sil»**: programda bu değişkene başvuran tüm blokları siler. 


## Ayarla {#variables_set}

**ayarla** bloğu bir değişkene değer atar.  
Kodda böyle bir değişken yoksa önce yeni bir değişken bildirir, sonra ona değer atar.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Göre değiştir {#math_change}

**göre değiştir** bloğu değişkenin değerine bir sayı ekler.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Değeri al {#variables_get}

Aşağıdaki blok değişkende saklanan değeri verir ama onu değiştirmez.  
Bu bloğu atama bloğu olmadan da kullanabilirsiniz; ancak bu doğru bir programlama yöntemi değildir.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
