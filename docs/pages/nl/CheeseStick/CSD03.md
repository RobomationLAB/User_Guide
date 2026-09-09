---
title: CSD-03 Draaipotentiometer
---

# CSD-03 Draaipotentiometer

## Instantie declareren {#instance}

Voeg je een CSD-03 Draaipotentiometer(CSD03)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Invoerpoort instellen {#set_input_port}

Stelt de poort in waarop CSD03 (potentiometer) is aangesloten.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort waarop wordt aangesloten | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Invoerbereik instellen {#set_input_range}

Rekent de invoerwaarde van de gekozen poort om naar het opgegeven bereik van minimum tot maximum.  
Het bereik van de invoerwaarde is 0 ~ 255.  
Het bereik waarnaar kan worden omgerekend is -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Doelpoort | Sa, Sb, Sc | - |
| src_min | Invoer (veld) | Minimum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| src_max | Invoer (veld) | Maximum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| dst_min | Invoer (veld) | Minimum na de omrekening | geheel getal -100 ~ 100 | - |
| dst_max | Invoer (veld) | Maximum na de omrekening | geheel getal -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Invoerbereik met middenwaarde instellen {#set_input_range_median}

Rekent de invoerwaarde van de gekozen poort om naar het opgegeven bereik van minimum via middenwaarde tot maximum.  
Het bereik van de invoerwaarde is 0 ~ 255.  
Het bereik waarnaar kan worden omgerekend is -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Doelpoort | Sa, Sb, Sc | - |
| src_min | Invoer (veld) | Minimum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| src_median | Invoer (veld) | Middenwaarde van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| src_max | Invoer (veld) | Maximum van de oorspronkelijke waarde | geheel getal 0 ~ 255 | - |
| dst_min | Invoer (veld) | Minimum na de omrekening | geheel getal -100 ~ 100 | - |
| dst_median | Invoer (veld) | Middenwaarde na de omrekening | geheel getal -100 ~ 100 | - |
| dst_max | Invoer (veld) | Maximum na de omrekening | geheel getal -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Invoerwaarde {#get_input}

De invoerwaarde van de draaipotentiometer op de gekozen poort  
Heb je geen eigen invoerbereik ingesteld, dan is het bereik van de invoerwaarde 0 ~ 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Poort die wordt uitgelezen | Sa, Sb, Sc | de poort van de laatste `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
