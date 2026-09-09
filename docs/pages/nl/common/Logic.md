---
title: Logica
---

# Logica

Logicablokken worden meestal gebruikt om **voorwaarden** en [**Lussen**](Loops)-blokken te besturen.

## Voorwaarde (als ~ dan) {#controls_if}

Met het voorwaardeblok kun je een **voorwaarde** instellen en de **actie** die wordt uitgevoerd als eraan wordt voldaan.

<BlockImage module="common/logic" id="controls_if" />

Je kunt de code bijvoorbeeld zo schrijven.  
Als de waarde van de variabele **x** groter is dan 100, is de voorwaarde **waar** en wordt de tekst "Groot getal." weergegeven.  
Als de waarde van **x** niet groter is dan 100, is de voorwaarde **onwaar** en wordt "Geen groot getal." weergegeven.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Vergelijking {#logic_compare}

Er zijn zes vergelijkingsoperatoren.  
Elke operator neemt twee invoerwaarden (meestal getallen) en geeft waar of onwaar terug, afhankelijk van hoe de invoerwaarden zich tot elkaar verhouden.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Logische bewerking {#logic_operation}

Het blok **en** geeft alleen waar terug als beide invoerwaarden waar zijn.  
Het blok **of** geeft waar terug als ten minste één van de twee invoerwaarden waar is.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## niet {#logic_negate}

Het blok **niet** verandert een booleaanse invoerwaarde in het tegendeel.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Booleaanse waarde {#logic_boolean}

Met één blok met een keuzelijst voor **waar** of **onwaar** kun je een booleaanse waarde krijgen.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternaire operator {#logic_ternary}

Het ternaire blok werkt als een eenvoudig voorwaardeblok.  
Het neemt drie invoerwaarden.  
De eerste is de booleaanse voorwaarde die wordt getest, de tweede is de waarde die wordt teruggegeven als de voorwaarde **waar** is.  
De derde is de waarde die wordt teruggegeven als de voorwaarde **onwaar** is.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
