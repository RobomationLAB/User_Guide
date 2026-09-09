---
title: Sonstiges
---

# Sonstiges

In der Blockprogrammierung bestehen die **sonstigen Blöcke** aus Code, der das Verhalten des Roboters nicht beeinflusst.  
Damit kannst du Kommentare hinzufügen oder die Ausführung des Codes beenden.  

## Einzeiliger Kommentar {#comment}

Mit dem Block **einzeiliger Kommentar** kannst du eine **Erklärung** hinzufügen, ohne die Ausführung des Codes zu beeinflussen.  
Kommentare erhöhen die Lesbarkeit des Codes und erleichtern die Wartung.

<BlockImage module="common/others" id="comment" />

### Python
```python
# Inhalt des Kommentars
```

## Mehrzeiliger Kommentar {#long_comment}

Mit dem Block **mehrzeiliger Kommentar** kannst du mehrere Kommentarzeilen auf einmal eingeben.  
Jede Zeile wird automatisch als Kommentar markiert, Leerzeilen bleiben erhalten.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
Erste Zeile
Zweite Zeile

Vierte Zeile
"""
```

## Link {#link}

Mit dem Block **Link** kannst du über einen **Kommentar** einen **Link zu einer Seite** hinzufügen, die du öffnen möchtest.  
Wenn du auf die Schaltfläche **öffnen** klickst, gelangst du zur Seite des eingegebenen Links.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Beenden {#exit}

Der Block **beenden** bricht die Ausführung des Codes im Programm sofort ab.  
Das ist nützlich, wenn du unter bestimmten Bedingungen einen erzwungenen Abbruch einbauen willst.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
