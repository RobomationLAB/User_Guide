---
title: Text
---

# Text {#text}

Beispiele für Text sind:
- "thing #1"
- "March 12, 2010"
- "" (leerer Text)

Text kann Groß- und Kleinbuchstaben, Zahlen, Satzzeichen, andere Symbole und Leerzeichen zwischen Wörtern enthalten.  

<BlockImage module="common/text" id="text" />

## Text erstellen {#text_join}

Der Block **erstelle Text aus** verbindet (verkettet) die Werte mehrerer Texte zu einem neuen Text.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Text anhängen {#text_append}

Der Block **Text anhängen** fügt den angegebenen Text an eine bestimmte Variable an.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Länge des Textes {#text_length}

Der Block **Länge von** zählt Buchstaben, Zahlen usw. in jedem Text und gibt die Gesamtlänge zurück.  
Die Länge von `abc` unten ist 3, die Länge eines leeren Textes ist 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Leeren Text prüfen {#text_isEmpty}

Der Block **ist leer** prüft, ob der angegebene Text leer ist (Länge 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Text suchen {#text_indexOf}

Diese Blöcke prüfen, ob ein bestimmter Text in einem anderen Text vorkommt, und geben die Position zurück, falls er vorhanden ist.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Einzelnen Buchstaben nehmen {#text_charAt}

Nimmt einen Buchstaben an einer bestimmten Position aus dem Text.  
Es gibt verschiedene Optionen: erster, letzter, zufälliger Buchstabe, N-ter usw.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Teiltext nehmen {#text_getSubstring}

Mit dem Block **nimm Teil ab** kannst du einen Text in einem bestimmten Bereich herausnehmen.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Groß-/Kleinschreibung umwandeln {#text_changeCase}

Dieser Block wandelt den eingegebenen Text in eine der folgenden Formen um:

- **GROSSBUCHSTABEN**: wandelt alle Buchstaben in Großbuchstaben um
- **kleinbuchstaben**: wandelt alle Buchstaben in Kleinbuchstaben um
- **Erster Buchstabe Groß**: wandelt nur den ersten Buchstaben jedes Wortes in einen Großbuchstaben um, den Rest in Kleinbuchstaben

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # GROSSBUCHSTABEN
TEXT.lower() # kleinbuchstaben
TEXT.title() # Erster Buchstabe Groß
```

## Leerzeichen entfernen {#text_trim}

Die folgenden Blöcke entfernen Leerzeichen an diesen Stellen im Text:
- Anfang und Ende (links und rechts)
- Anfang (links)
- Ende (rechts)

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # Anfang und Ende
TEXT.lstrip()   # Anfang
TEXT.rstrip()   # Ende
```

## Vorkommen eines Textes zählen {#text_count}

Zählt, wie oft ein bestimmter Teiltext im angegebenen Text vorkommt, und gibt die Anzahl zurück.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Bestimmten Text ersetzen {#text_replace}

Ersetzt einen bestimmten Teiltext im Text überall durch einen anderen Text.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Text umkehren {#text_reverse}

Gibt einen neuen Text zurück, in dem die Reihenfolge des Textes umgekehrt ist.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Text ausgeben {#text_print}

Der Block **gib aus** zeigt den eingegebenen Wert in einem Pop-up-Fenster an.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Benutzereingabe abfragen {#text_prompt_ext}

Der folgende Block erzeugt ein Pop-up-Fenster, das den Benutzer zu einer Eingabe auffordert; der eingegebene Wert wird in einer Variablen gespeichert.  
Es kann Text oder eine Zahl eingegeben werden.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
