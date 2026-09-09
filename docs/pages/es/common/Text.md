---
title: Texto
---

# Texto {#text}

Ejemplos de texto son:
- "thing #1"
- "March 12, 2010"
- "" (texto vacío)

El texto puede contener letras mayúsculas o minúsculas, cifras, signos de puntuación, otros símbolos y espacios entre palabras.  

<BlockImage module="common/text" id="text" />

## Crear texto {#text_join}

El bloque **crear texto con** une (concatena) los valores de varios textos y crea con ellos un texto nuevo.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Añadir texto {#text_append}

El bloque **añade el texto** añade el texto dado a la variable indicada.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Longitud del texto {#text_length}

El bloque **longitud de** cuenta las letras, cifras y demás de un texto y devuelve la longitud total.  
La longitud de `abc` a continuación es 3; la longitud del texto vacío es 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Comprobar si el texto está vacío {#text_isEmpty}

El bloque **está vacío** comprueba si el texto dado está vacío (si su longitud es 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Buscar texto {#text_indexOf}

Estos bloques comprueban si un texto concreto aparece dentro de otro texto y, si es así, devuelven su posición.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Obtener una sola letra {#text_charAt}

Obtiene de un texto una letra en una posición concreta.  
Hay varias opciones: la primera, la última, una posición aleatoria, la N-ésima y más.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Obtener una parte del texto {#text_getSubstring}

Con el bloque **obtener subcadena** puedes obtener el texto de un rango concreto.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Cambiar mayúsculas y minúsculas del texto {#text_changeCase}

Este bloque convierte el texto introducido a una de las formas siguientes:

- **MAYÚSCULAS**: convierte todas las letras a mayúsculas
- **minúsculas**: convierte todas las letras a minúsculas
- **Iniciales En Mayúscula**: convierte solo la primera letra de cada palabra a mayúscula y el resto a minúsculas

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # MAYÚSCULAS
TEXT.lower() # minúsculas
TEXT.title() # Iniciales En Mayúscula
```

## Quitar espacios {#text_trim}

El bloque siguiente quita los espacios de estas posiciones del texto:
- de ambos lados
- de la izquierda
- de la derecha

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # de ambos lados
TEXT.lstrip()   # de la izquierda
TEXT.rstrip()   # de la derecha
```

## Contar las apariciones de un texto en otro {#text_count}

Cuenta cuántas veces aparece un subtexto concreto en el texto dado y devuelve ese número.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Reemplazar un texto dentro de otro {#text_replace}

Reemplaza en un texto todas las apariciones de un subtexto concreto por otro texto.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Invertir el texto {#text_reverse}

Devuelve un texto nuevo con el orden del texto invertido.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Imprimir texto {#text_print}

El bloque **imprimir** muestra el valor introducido en una ventana emergente.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Solicitar la entrada del usuario {#text_prompt_ext}

El bloque siguiente crea una ventana emergente que pide una entrada al usuario; el valor introducido se guarda en una variable.  
Puedes pedir texto o un número.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
