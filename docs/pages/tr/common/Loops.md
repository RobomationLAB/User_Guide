---
title: Döngüler
---

# Döngüler

Yineleme deyimleri iki türlüdür:  
**koşul ifadeleri** ve **döngüler** (değişkenlerin değerine bakarak gövdenin kaç kez çalışacağını belirleyenler)


## Tekrarla {#controls_repeat}

En basit **tekrarla** bloğu, gövdesindeki kodu belirtilen sayıda çalıştırır. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## İle sayılır {#controls_for}

**ile sayılır** bloğu (çoğunlukla **for döngüsü** denir) değişkeni birinci değerden üçüncü değere kadar adım değeri (ikinci değer) kadar artırır ve gövdeyi bu değerlerin her biri için bir kez çalıştırır.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Her öğe için {#controls_forEach}

**her öğe için** bloğu benzer biçimde çalışır; ancak ardışık sayılar yerine listedeki değerleri sırayla kullanır.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## İken / kadar tekrarla {#controls_while}

**iken tekrarla** bloğu, koşul doğru olduğu sürece gövdeyi yineler.  
**kadar tekrarla** bloğu, koşul yanlış olduğu sürece gövdeyi yineler ve koşul doğru olduğu anda döngüden çıkar.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Döngüden çık / devam et {#controls_flow_statements}

**döngüden çık** bloğu **döngüden erken çıkmanızı** sağlar.  
**devam et** bloğu (çoğu programlama dilinde **continue**) gövdedeki kalan kodu atlar ve bir sonraki turu başlatır.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
