---
title: Text
---

# Text {#text}

Här är några exempel på text:
- "thing #1"
- "March 12, 2010"
- "" (tom text)

Text kan innehålla stora och små bokstäver, siffror, skiljetecken, andra symboler och mellanrum mellan orden.  

<BlockImage module="common/text" id="text" />

## Skapa text med {#text_join}

Blocket **skapa text med** slår ihop (sammanfogar) värdena från flera texter till en ny text.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Lägga till text {#text_append}

Blocket **lägga till text** lägger till den angivna texten i den valda variabeln.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Längden på text {#text_length}

Blocket **längden på** räknar tecknen, siffrorna med mera i en text och returnerar den totala längden.  
Nedan är längden på `abc` 3, och längden på en tom text är 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Är tom {#text_isEmpty}

Blocket **är tom** kontrollerar om den angivna texten är tom (om längden är 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Hitta text {#text_indexOf}

De här blocken kontrollerar om en viss text finns inuti en annan text, och returnerar positionen om den gör det.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Hämta ett tecken {#text_charAt}

Hämtar ett tecken från en viss position i en text.  
Det finns flera alternativ: första, sista, en slumpmässig position, tecken nummer N med flera.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Hämta en textdel {#text_getSubstring}

Med blocket **få textdel från** kan du hämta ut texten i ett visst intervall.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Ändra skiftläge {#text_changeCase}

Det här blocket omvandlar den angivna texten till något av följande format:

- **VERSALER**: gör om alla tecken till stora bokstäver
- **gemener**: gör om alla tecken till små bokstäver
- **Versala Initialer**: gör om första bokstaven i varje ord till stor bokstav och resten till små

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # VERSALER
TEXT.lower() # gemener
TEXT.title() # Versala Initialer
```

## Ta bort mellanrum {#text_trim}

Följande block tar bort mellanrum från de här positionerna i en text:
- båda sidorna
- vänster sida
- höger sida

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # båda sidorna
TEXT.lstrip()   # vänster sida
TEXT.rstrip()   # höger sida
```

## Räkna förekomster i text {#text_count}

Räknar hur många gånger en viss deltext förekommer i den angivna texten och returnerar antalet.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Ersätt text {#text_replace}

Byter ut alla förekomster av en viss deltext mot en annan text.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Vänd på text {#text_reverse}

Returnerar en ny text där tecknens ordning är omvänd.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Skriv text {#text_print}

Blocket **skriv** visar det angivna värdet i ett popup-fönster.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Fråga efter inmatning {#text_prompt_ext}

Följande block öppnar ett popup-fönster som ber användaren om en inmatning, och det inmatade värdet sparas i en variabel.  
Du kan be om text eller om ett tal.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
