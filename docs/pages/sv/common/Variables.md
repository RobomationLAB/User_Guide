---
title: Variabler
---

# Variabler

Vi använder ordet variabel i samma betydelse som i matematiken och i andra programmeringsspråk.  
Det vill säga **ett namngivet element som lagrar ett värde och som kan ändras**.  
  
Det finns flera sätt att skapa en variabel.  

- Vissa block, som [räkna med](Loops#controls_for) och [för varje föremål](Loops#controls_forEach), använder en variabel och bestämmer själva dess värde.  
Sådana variabler kallas traditionellt **loopvariabler (loop variables)**.  
- [Egna funktioner](Functions#procedures_defnoreturn) använder också variabler för att definiera parametrar eller argument.
- Du kan när som helst skapa en variabel med blocket **ange variabel**, och variabler som skapas på det sättet deklareras som **globala variabler (global variables)**.  
- Blockprogrammeringsmiljön i RobomationLAB stöder inte **lokala variabler (local variables)**.  

När du klickar på rullgardinsmenyn i ett variabelblock visas följande alternativ.  

- Namnen på alla befintliga variabler som är definierade i programmet visas.  
- **"Byt namn på variabeln"**: byter namn på variabeln i hela programmet. När du väljer det här alternativet öppnas ett fönster där du kan skriva in det nya namnet.  
- **"Ta bort variabeln"**: tar bort alla block i programmet som använder den här variabeln. 


## Ange variabel {#variables_set}

Blocket **ange variabel** tilldelar ett värde till en variabel.  
Om variabeln inte redan är deklarerad i koden deklareras en ny variabel som sedan tilldelas värdet.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Ändra värde {#math_change}

Blocket **ändra** lägger till ett tal till variabelns värde.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Hämta värde {#variables_get}

Blocket nedan ger dig värdet som är lagrat i variabeln, men ändrar det inte.  
Det går att använda blocket utan ett ange-block, men det är inget bra sätt att programmera på.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
