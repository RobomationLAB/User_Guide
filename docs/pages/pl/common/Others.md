---
title: Inne
---

# Inne

W programowaniu blokowym **bloki z kategorii Inne** to kod, który nie wpływa na działanie robota.  
Pozwalają dodawać komentarze albo zakończyć wykonywanie kodu.  

## Komentarz jednowierszowy {#comment}

Blok **komentarz jednowierszowy** pozwala dodać **opis**, który nie wpływa na wykonywanie kodu.  
Komentarze zwiększają czytelność kodu i ułatwiają jego utrzymanie.

<BlockImage module="common/others" id="comment" />

### Python
```python
# treść komentarza
```

## Komentarz wielowierszowy {#long_comment}

Blok **komentarz wielowierszowy** pozwala wpisać naraz komentarz złożony z wielu wierszy.  
Każdy wiersz jest automatycznie oznaczany jako komentarz, a puste wiersze zostają zachowane.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
pierwszy wiersz
drugi wiersz

czwarty wiersz
"""
```

## Link {#link}

Blok **link** pozwala dodać w **komentarzu** **odnośnik do strony**, którą chcesz otworzyć.  
Po kliknięciu przycisku **otwórz** przechodzisz na stronę spod wpisanego adresu.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Zakończ {#exit}

Blok **zakończ** natychmiast przerywa wykonywanie kodu w programie.  
Przydaje się, gdy chcesz dodać wymuszone zakończenie po spełnieniu określonego warunku.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
