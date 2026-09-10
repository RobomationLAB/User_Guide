---
title: Matematiikka
---

# Matematiikka

Tämä dokumentti kertoo, mitä eri matematiikkalohkot tekevät ja miten niitä käytetään.  
Täältä löydät lohkoja moniin matemaattisiin toimintoihin: lukujen laskemiseen, listojen käsittelyyn, todennäköisyyteen, kulmien laskemiseen ja muuhun.

## Lukuarvo {#math_number}

Lohko, joka palauttaa antamasi **lukuarvon** sellaisenaan.  
Tällä lohkolla voit tallentaa tietyn luvun muuttujaan tai käyttää sitä muissa laskuissa.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Taulukon luominen ja laskeminen {#math_array}

Lohko, joka luo **taulukon**.
Se palauttaa taulukon, jonka alkioina ovat `[]`-merkkien sisään kirjoittamasi arvot.
Voit luoda listan kirjoittamalla haluamasi arvot `[]`-merkkien sisään, ja tekstin on oltava " "-merkkien sisällä.

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Peruslaskutoimitukset {#math_arithmetic}

Lohko, joka tekee **laskutoimituksia** (yhteen-, vähennys-, kerto- ja jakolasku sekä potenssi) kahdella lukuarvolla.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Yhden arvon operaatiot {#math_single}

Lohko, joka tekee **yhden arvon operaatioita**, kuten neliöjuuren, itseisarvon, merkin vaihdon sekä eksponentti- ja logaritmifunktiot.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # neliöjuuri
math.fabs(NUM)  # itseisarvo
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Trigonometriset funktiot {#math_trig}

Lohko, joka laskee **trigonometristen funktioiden** arvoja, kuten sinin, kosinin ja tangentin.

<BlockImage module="common/math" id="math_trig" />

### Python
```python
math.sin(NUM / 180.0 * math.pi) # sin
math.cos(NUM / 180.0 * math.pi) # cos
math.tan(NUM / 180.0 * math.pi) # tan
math.asin(NUM) / math.pi * 180  # asin
math.acos(NUM) / math.pi * 180  # acos
math.atan(NUM) / math.pi * 180  # atan
```

## Vakiot {#math_constant}

Palauttaa **erityiset vakiot**, joita tarvitset laskuissa (π, e, kultainen leikkaus, √2, √(1/2), ääretön).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # kultainen leikkaus
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # ääretön
```

## Ehto {#math_number_property}

Päättelee, onko antamasi luku parillinen, pariton, alkuluku, kokonaisluku, positiivinen, negatiivinen vai tietyn luvun monikerta, ja palauttaa **toden/epätoden**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (parillinen)
NUM % 2 == 1           # ODD (pariton)
math_isPrime(NUM)      # PRIME (alkuluku)
NUM % 1 == 0           # WHOLE (kokonaisluku)
NUM > 0                # POSITIVE (positiivinen)
NUM < 0                # NEGATIVE (negatiivinen)
NUM % DIVISOR == 0     # DIVISIBLE_BY (monikerta)

def math_isPrime(n):
    if not isinstance(n, Number):
        try: n = float(n)
        except: return False
    if n == 2 or n == 3: return True
    if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0: return False
    for x in range(6, int(math.sqrt(n)) + 2, 6):
        if n % (x - 1) == 0 or n % (x + 1) == 0: return False
    return True
```

## Pyöristäminen {#math_round}

Palauttaa antamasi luvun **pyöristettynä (round), ylöspäin pyöristettynä (ceil) tai alaspäin pyöristettynä (floor)**.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # pyöristys
math.ceil(NUM)    # pyöristys ylöspäin
math.floor(NUM)   # pyöristys alaspäin
```

## Listan laskutoimitukset {#math_on_list}

Laskee listalle summan, pienimmän arvon, suurimman arvon, keskiarvon, mediaanin, tyyppiarvon ja keskihajonnan sekä poimii siitä satunnaisen alkion.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # summa
min(list)                          # pienin arvo
max(list)                          # suurin arvo
math_mean(list)                    # keskiarvo
math_median(list)                  # mediaani
math_modes(list)                   # tyyppiarvo (useimmin esiintyvä arvo)
math_standard_deviation(list)      # keskihajonta
random.choice(list)                # satunnainen alkio listasta

def math_mean(myList):
    localList = [e for e in myList if isinstance(e, Number)]
    if not localList: return
    return float(sum(localList)) / len(localList)

def math_median(myList):
    localList = sorted([e for e in myList if isinstance(e, Number)])
    if not localList: return
    if len(localList) % 2 == 0:
        return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0
    else:
        return localList[(len(localList) - 1) // 2]

def math_modes(some_list):
    modes = []
    counts = []
    maxCount = 1
    for item in some_list:
        found = False
        for count in counts:
            if count[0] == item:
                count[1] += 1
                maxCount = max(maxCount, count[1])
                found = True
        if not found:
            counts.append([item, 1])
    for counted_item, item_count in counts:
        if item_count == maxCount:
            modes.append(counted_item)
    return modes

def math_standard_deviation(numbers):
    n = len(numbers)
    if n == 0: return
    mean = float(sum(numbers)) / n
    variance = sum((x - mean) ** 2 for x in numbers) / n
    return math.sqrt(variance)
```

## Jakojäännös {#math_modulo}

Lohko, joka laskee kahden luvun jakolaskun **jakojäännöksen**.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Pienin ja suurin arvo {#math_constrain}

Rajoittaa antamasi arvon niin, ettei se mene määrittämäsi **pienimmän ja suurimman arvon** ulkopuolelle.  
Alueen ulkopuoliset arvot siirretään lähimpään raja-arvoon.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Satunnainen kokonaisluku {#math_random_int}

Lohko, joka luo **satunnaisen kokonaisluvun** määrittämältäsi väliltä.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Satunnainen murtoluku {#math_random_float}

Luo **satunnaisen murtoluvun** väliltä 0 ja 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Lohko, joka laskee kulman (atan2) origon (0,0) ja annettujen koordinaattien (x, y) välillä.  
Voit käyttää sitä suunnan päättelemiseen sijainnin perusteella.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
