---
title: Variabler
---

# Variabler

Vi bruger ordet variabel i samme betydning som i matematikken og i andre programmeringssprog.  
Altså **et navngivet element, der gemmer en værdi, og som kan ændres**.  
  
Der er flere måder at oprette en variabel på.  

- Nogle blokke, som [tæl med](Loops#controls_for) og [for hvert element](Loops#controls_forEach), bruger en variabel og fastsætter selv dens værdi.  
Sådanne variabler kaldes traditionelt **løkkevariabler (loop variables)**.  
- [Egne funktioner](Functions#procedures_defnoreturn) bruger også variabler til at definere parametre eller argumenter.
- Du kan når som helst oprette en variabel med blokken **sæt variabel**, og variabler, der oprettes på den måde, erklæres som **globale variabler (global variables)**.  
- Blokprogrammeringsmiljøet i RobomationLAB understøtter ikke **lokale variabler (local variables)**.  

Når du klikker på rullemenuen i en variabelblok, vises følgende muligheder.  

- Navnene på alle eksisterende variabler, der er defineret i programmet, vises.  
- **"Omdøb variablen"**: omdøber variablen i hele programmet. Når du vælger denne mulighed, åbnes et vindue, hvor du kan skrive det nye navn.  
- **"Slet variablen"**: sletter alle blokke i programmet, der bruger denne variabel. 


## Sæt variabel {#variables_set}

Blokken **sæt variabel** tildeler en værdi til en variabel.  
Hvis variablen ikke allerede er erklæret i koden, erklæres en ny variabel, som derefter får værdien.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Skift værdi {#math_change}

Blokken **skift** lægger et tal til variablens værdi.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Hent værdi {#variables_get}

Blokken nedenfor giver dig den værdi, der er gemt i variablen, men ændrer den ikke.  
Det kan lade sig gøre at bruge blokken uden en sæt-blok, men det er ikke god programmeringsskik.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
