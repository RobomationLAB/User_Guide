---
title: Muut
---

# Muut

Lohkokoodauksessa **muut lohkot** koostuvat koodista, joka ei vaikuta robotin toimintaan.  
Niillä voit kirjoittaa kommentteja tai lopettaa koodin suorituksen.  

## Yksirivinen kommentti {#comment}

Lohkolla **yksirivinen kommentti** voit lisätä **selityksen** vaikuttamatta koodin suoritukseen.  
Kommentit tekevät koodista helpompaa luettavaa ja helpompaa ylläpitää.

<BlockImage module="common/others" id="comment" />

### Python
```python
# kommentin sisältö
```

## Monirivinen kommentti {#long_comment}

Lohkolla **monirivinen kommentti** voit kirjoittaa usean rivin kommentin kerralla.  
Jokainen rivi merkitään automaattisesti kommentiksi, ja tyhjät rivit säilyvät sellaisinaan.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
ensimmäinen rivi
toinen rivi

neljäs rivi
"""
```

## Linkki {#link}

Lohkolla **linkki** voit **kommentin** avulla lisätä **linkin sivulle**, jonka haluat avata.  
Kun napsautat painiketta **avaa**, siirryt linkin osoittamalle sivulle.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Lopeta {#exit}

Lohko **lopeta** pysäyttää koodin suorituksen ohjelmassa välittömästi.  
Se on kätevä, kun haluat keskeyttää suorituksen tietyissä tilanteissa.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
