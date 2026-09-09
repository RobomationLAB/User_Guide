---
title: Funksjoner
---

# Funksjoner

En **funksjon (Function)** er **en samling kommandoer (blokker)** som utfører en bestemt oppgave.  
Definerer du en handling du bruker om og om igjen, som én funksjon, blir koden **kortere og lettere å holde styr på**.

En funksjon har disse egenskapene.  
- **Kan gjenbrukes**: når du har definert den én gang, kan du kalle den så mange ganger du vil.  
- **Inndata og utdata**: den kan ta imot parametere (inndata), behandle dem og returnere et resultat (utdata).  
- **Bedre lesbarhet**: du kan bygge opp programmet på en logisk måte.


## setup {#setup}

**Funksjonen setup** kalles bare én eneste gang, i det øyeblikket du kjører koden.  
I funksjonen setup skriver du hovedsakelig kode som klargjør variabler eller robotens tilstand og innstillinger.  
Når du for eksempel styrer en robot som beveger seg på hjul, kan du sette hjulenes starthastighet i funksjonen setup.  

<BlockImage module="common/functions" id="setup" />
  
Med funksjonen `Utils.wait(...)` kan du skrive kode som kjører sekvensielt og dermed i tidsrekkefølge. Med denne muligheten kan du ikke bare lage enkel sekvensiell kjøring, men også programmere roboter effektivt sammen med **funksjonen loop**, som står for den parallelle kjøringen.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Funksjonen loop** kalles om igjen hvert 10. ms så lenge programmet kjører.  
I funksjonen loop skriver du hovedsakelig kode som setter verdien av variabler gjentatte ganger, eller som fanger opp og håndterer bestemte hendelser fra roboten.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definere en funksjon {#procedures_defnoreturn}

Med blokken som definerer en funksjon, kan du lage en **ny funksjon**.  
En funksjon uten returverdi utfører en bestemt handling, men **returnerer ingen verdi**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definere en funksjon med returverdi {#procedures_defreturn}

En funksjon med returverdi utfører en bestemt oppgave og **returnerer** deretter resultatet, som du kan bruke i andre blokker.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Funksjonen nedenfor **tar imot parameterne x og y og returnerer resultatet av x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Kalle en funksjon {#procedures_callnoreturn}

Når du har definert en funksjon, lages det automatisk en **blokk for den egendefinerte funksjonen**.  
Med den kan du kalle og kjøre **den funksjonen du har definert på forhånd**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Hvis ... returner {#procedures_ifreturn}

En blokk som **returnerer en verdi med det samme og avslutter funksjonen når en bestemt betingelse er oppfylt**.  
Denne blokken kan **bare brukes inne i en funksjon**, og andre steder er den deaktivert.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
