---
title: Funktioner
---

# Funktioner

En **funktion** er en **samling af kommandoer (blokke)**, der udfører en bestemt opgave.  
Hvis du samler en handling, du bruger igen og igen, i én funktion, bliver koden **kortere og lettere at holde styr på**.

En funktion har følgende egenskaber.  
- **Genbrugelig**: når den først er defineret, kan du kalde den så mange gange, du vil.  
- **Ind- og uddata**: den kan modtage parametre (inddata), behandle dem og returnere et resultat (uddata).  
- **Bedre læsbarhed**: den lader dig bygge programmets forløb op på en logisk måde.


## setup {#setup}

**Funktionen opsætning** kaldes kun én eneste gang, i samme øjeblik koden begynder at køre.  
I setup-funktionen skriver du oftest kode, der klargør variabler eller robottens tilstand og indstillinger.  
Når du styrer en robot, der kører på hjul, kan du for eksempel indstille hjulenes starthastighed i setup-funktionen.  

<BlockImage module="common/functions" id="setup" />
  
Med funktionen `Utils.wait(...)` kan du skrive kode, der kører i tidsrækkefølge, trin for trin. Sammen med **funktionen løkke**, der fungerer som en parallel kørsel, giver det dig stærke muligheder for at programmere robotten — ikke bare enkel sekventiel kørsel.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Funktionen løkke** kaldes igen og igen, hvert tiende millisekund, så længe programmet kører.  
I loop-funktionen skriver du oftest kode, der gentagne gange sætter værdier på variabler eller registrerer og håndterer hændelser hos robotten.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definér en funktion {#procedures_defnoreturn}

Med blokken, der definerer en funktion, kan du oprette en **ny funktion**.  
En funktion uden returværdi udfører en bestemt handling, men **returnerer ingen værdi**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definér en funktion med returværdi {#procedures_defreturn}

En funktion med returværdi udfører en opgave og **returnerer derefter en værdi**, som du kan bruge i andre blokke.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Funktionen nedenfor **modtager parametrene x og y og returnerer resultatet af x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Kald en funktion {#procedures_callnoreturn}

Når du har defineret en funktion, oprettes der automatisk en **blok for den egne funktion**.  
Med den kan du kalde og køre den **funktion, du har defineret på forhånd**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Hvis ... returnér {#procedures_ifreturn}

En blok, der **returnerer en værdi med det samme og afslutter funktionen**, når en bestemt betingelse er opfyldt.  
Blokken kan **kun bruges inde i en funktion** og er deaktiveret andre steder.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
