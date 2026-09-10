---
title: Mowa na tekst
---

# Mowa na tekst

## Deklaracja instancji {#instance}

Po dodaniu bloku Mowa na tekst(ASR) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
asr = ASR(0)
# Gdy instancji jest więcej
asr_1 = ASR(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw język {#lang}

Ustawia język rozpoznawania mowy. Nawet bez ustawienia język zostanie dobrany automatycznie.

<BlockImage module="AI/ASR" id="lang" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Kod języka rozpoznawania | Kody 21 języków obsługiwanych przez program (np. `'pl-PL'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('pl-PL')
```

## Uruchom / zatrzymaj rozpoznawanie mowy {#listen}

Uruchamia albo zatrzymuje rozpoznawanie mowy.

<BlockImage module="AI/ASR" id="listen" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Wynik rozpoznawania mowy {#result}

Wynik rozpoznawania mowy

<BlockImage module="AI/ASR" id="result" />

### Parametry

(brak)

### Python
```python
asr = ASR(0)

asr.result()
```

## Czy rozpoznawanie mowy jest aktywne {#state}

Zwraca **prawdę (True) lub fałsz (False)** w zależności od tego, czy rozpoznawanie mowy jest aktywne.

<BlockImage module="AI/ASR" id="state" />

### Parametry

(brak)

### Python
```python
asr = ASR(0)

asr.is_active()
```
