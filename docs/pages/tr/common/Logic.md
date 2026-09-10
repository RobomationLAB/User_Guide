---
title: Mantık
---

# Mantık

Mantık blokları genellikle **koşul ifadesi** ve [**döngü**](Loops) bloklarını yönetmek için kullanılır.

## Koşul ifadesi (eğer ~ ise) {#controls_if}

Koşul ifadesi bloğuyla bir **koşul** ve koşul sağlandığında yapılacak **işlem** belirlenir.

<BlockImage module="common/logic" id="controls_if" />

Örneğin şöyle bir kod yazabilirsiniz.  
**x** değişkeninin değeri 100'den büyükse koşul **true** olur ve "Büyük bir sayı." yazısı görüntülenir.  
**x** değeri 100'den büyük değilse koşul **false** olur ve "Büyük bir sayı değil." görüntülenir.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Karşılaştırmalar {#logic_compare}

Altı karşılaştırma işleci vardır.  
Her biri iki giriş değeri (genellikle sayı) alır ve bu değerlerin birbirine göre durumuna bakarak doğru ya da yanlış döndürür.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Mantıksal işlemler {#logic_operation}

**ve** bloğu yalnızca iki giriş değeri de doğruysa doğru döndürür.  
**veya** bloğu giriş değerlerinden en az biri doğruysa doğru döndürür.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Değil {#logic_negate}

**değil** bloğu mantıksal değeri tersine çevirir.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Mantıksal değer {#logic_boolean}

Mantıksal değeri, **true** ya da **false** seçilen açılır listeli tek bir blokla elde edebilirsiniz.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Üç terimli işleç {#logic_ternary}

Üç terimli blok basit bir koşul ifadesi gibi çalışır.  
Üç giriş değeri alır.  
Birincisi sınanacak mantıksal koşul, ikincisi koşul **true** olduğunda döndürülecek değerdir.  
Üçüncüsü koşul **false** olduğunda döndürülecek değerdir.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
