---
title: Variabler
---

# Variabler

Vi bruker ordet variabel i samme betydning som i matematikken og i andre programmeringsspråk.  
Altså **et navngitt element som lagrer en verdi, og der verdien kan endres**.  
  
Du kan lage variabler på flere måter.  

- Noen blokker, som [tell med](Loops#controls_for) og [for hvert element](Loops#controls_forEach), bruker en variabel og bestemmer verdien til den variabelen.  
Slike variabler kalles tradisjonelt **løkkevariabler (loop variables)**.  
- [Egendefinerte funksjoner](Functions#procedures_defnoreturn) bruker også variabler til å definere parametere eller argumenter.
- Du kan når som helst lage en variabel med blokken **sett ... til**, og variabelen du lager, blir erklært som en **global variabel (global variable)**.  
- Blokkodingsmiljøet i RobomationLAB støtter ikke **lokale variabler (local variables)**.  

Klikker du på nedtrekksmenyen i en variabelblokk, kommer disse valgene fram.  

- Navnene på alle variablene som allerede er definert i programmet, vises.  
- **"Gi variabelen nytt navn"**: endrer navnet på variabelen i hele programmet. Velger du dette, kommer det fram et vindu der du kan skrive det nye navnet.  
- **"Slett variabelen"**: sletter alle blokker i programmet som viser til denne variabelen. 


## Sette en variabel {#variables_set}

Blokken **sett ... til** gir variabelen en verdi.  
Er variabelen ikke erklært i koden fra før, blir den erklært først og får så verdien.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Endre en verdi {#math_change}

Blokken **endre ... ved** legger et tall til verdien i variabelen.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Hente en verdi {#variables_get}

Blokken nedenfor gir deg verdien som er lagret i variabelen, men endrer den ikke.  
Du kan bruke blokken uten en sett-blokk, men det er ikke god programmeringsskikk.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
