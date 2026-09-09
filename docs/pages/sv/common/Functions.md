---
title: Funktioner
---

# Funktioner

En **funktion** är en **samling kommandon (block)** som utför en viss uppgift.  
Om du samlar ett återkommande beteende i en funktion blir koden **kortare och lättare att hantera**.

En funktion har följande egenskaper.  
- **Återanvändbar**: när den väl är definierad kan du anropa den hur många gånger som helst.  
- **In- och utdata**: den kan ta emot parametrar (indata), bearbeta dem och returnera ett resultat (utdata).  
- **Bättre läsbarhet**: den låter dig bygga upp programmets flöde på ett logiskt sätt.


## setup {#setup}

**Funktionen setup** anropas bara en enda gång, i samma stund som koden börjar köras.  
I setup-funktionen skriver du oftast kod som initierar variabler eller robotens läge och inställningar.  
När du styr en robot som rör sig med hjulen kan du till exempel ställa in hjulens starthastighet i setup-funktionen.  

<BlockImage module="common/functions" id="setup" />
  
Med funktionen `Utils.wait(...)` kan du skriva kod som körs i tidsordning, steg för steg. Tillsammans med **funktionen loop**, som fungerar som en parallell körning, ger det dig kraftfulla möjligheter att programmera roboten — inte bara enkel sekventiell körning.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Funktionen loop** anropas om och om igen, var tionde millisekund, så länge programmet körs.  
I loop-funktionen skriver du oftast kod som upprepat sätter värden på variabler eller känner av och hanterar händelser hos roboten.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definiera en funktion {#procedures_defnoreturn}

Med blocket som definierar en funktion kan du skapa en **ny funktion**.  
En funktion utan returvärde utför en viss åtgärd men **returnerar inget värde**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definiera en funktion med returvärde {#procedures_defreturn}

En funktion med returvärde utför en uppgift och **returnerar sedan ett värde** som du kan använda i andra block.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Funktionen nedan **tar emot parametrarna x och y och returnerar resultatet av x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Anropa en funktion {#procedures_callnoreturn}

När du har definierat en funktion skapas automatiskt ett **block för den egna funktionen**.  
Med det kan du anropa och köra den **funktion du har definierat i förväg**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Om ... returnera {#procedures_ifreturn}

Ett block som **returnerar ett värde direkt och avslutar funktionen** när ett visst villkor är uppfyllt.  
Blocket kan **bara användas inuti en funktion** och är inaktiverat på andra ställen.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
