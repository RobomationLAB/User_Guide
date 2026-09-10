---
title: Pętle
---

# Pętle

Instrukcje sterujące powtarzaniem dzielą się na dwa rodzaje:  
**instrukcje warunkowe** i **pętle** (czyli te, które na podstawie wartości zmiennych decydują, ile razy wykonać wnętrze bloku)


## Powtórz {#controls_repeat}

Najprostszy blok **powtórz** wykonuje kod umieszczony w jego wnętrzu określoną liczbę razy. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Licz z {#controls_for}

Blok **licz z** (najczęściej nazywany **pętlą for**) zwiększa zmienną od pierwszej wartości do trzeciej o wartość kroku (drugą wartość) i wykonuje wnętrze bloku raz dla każdej z tych wartości.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Dla każdego elementu {#controls_forEach}

Blok **dla każdego elementu** działa podobnie, ale zamiast kolejnych liczb używa po kolei wartości z listy.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Powtarzaj dopóki / aż {#controls_while}

Blok **powtarzaj dopóki** powtarza wnętrze tak długo, jak długo warunek jest prawdziwy.  
Blok **powtarzaj aż** powtarza wnętrze tak długo, jak długo warunek jest fałszywy, i wychodzi z pętli w chwili, gdy warunek stanie się prawdziwy.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Przerwij / kontynuuj {#controls_flow_statements}

Blok **przerwij** pozwala **wcześniej wyjść z pętli**.  
Blok **kontynuuj** (w większości języków programowania **continue**) pomija pozostały kod we wnętrzu pętli i rozpoczyna następny przebieg.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
