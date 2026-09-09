---
title: Detecção de marcadores ArUco
---

# Detecção de marcadores ArUco

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção de marcadores ArUco(ArucoMarker) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
aruco_marker = ArucoMarker(0)
# se existirem várias instâncias
aruco_marker_1 = ArucoMarker(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para a deteção de marcadores ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Definir número máximo de marcadores {#max_count}

Determina quantos marcadores podem ser reconhecidos no máximo. O intervalo do número de marcadores é 0 ~ 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Número máximo de marcadores | inteiro 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Detetar marcador uma vez {#detect_once}

Procura os marcadores na imagem atual e marca as suas zonas exatamente uma vez.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Iniciar / parar a deteção contínua de marcadores {#detect_continuous}

Segue os marcadores na imagem atual continuamente e marca as suas zonas no ecrã.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção de marcadores é mostrado na imagem da câmara ou não.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Dados do marcador {#marker_data}

Devolve a posição e o tamanho do marcador com o ID indicado.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | ID do marcador | inteiro ≥ 0 | - |
| unit | Opção de lista | Tipo de medida | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Distância entre dois marcadores {#marker_to_marker}

Devolve a distância entre dois marcadores.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (bloco) | ID do primeiro marcador | inteiro ≥ 0 | - |
| unit2 | Entrada (bloco) | ID do segundo marcador | inteiro ≥ 0 | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # distância
aruco_marker.get_distance(0, 2, 'horizontal')  # distância horizontal
```

## Marcador detetado? {#marker_detected}

Se foi encontrado um marcador com o valor de ID indicado

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | ID do marcador | inteiro ≥ 0 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
