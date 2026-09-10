---
title: Diğerleri
---

# Diğerleri

Blok kodlamada **Diğerleri kategorisindeki bloklar**, robotun çalışmasını etkilemeyen koddur.  
Yorum eklemenizi ya da kodun çalışmasını sonlandırmanızı sağlar.  

## Tek satırlı yorum {#comment}

**tek satırlı yorum** bloğu, kodun çalışmasını etkilemeyen bir **açıklama** eklemenizi sağlar.  
Yorumlar kodu daha okunur kılar ve bakımını kolaylaştırır.

<BlockImage module="common/others" id="comment" />

### Python
```python
# yorum metni
```

## Çok satırlı yorum {#long_comment}

**çok satırlı yorum** bloğu, birden çok satırlık yorumu bir kerede yazmanızı sağlar.  
Her satır otomatik olarak yorum işaretiyle başlar, boş satırlar da olduğu gibi korunur.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
birinci satır
ikinci satır

dördüncü satır
"""
```

## Bağlantı {#link}

**bağlantı** bloğu, açmak istediğiniz **sayfa bağlantısını** bir **yorum** içinde eklemenizi sağlar.  
**aç** düğmesine tıkladığınızda yazdığınız adresteki sayfaya gidersiniz.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Çıkış {#exit}

**çıkış** bloğu programdaki kodun çalışmasını hemen durdurur.  
Belirli bir koşulda zorla sonlandırma eklemek istediğinizde işe yarar.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
