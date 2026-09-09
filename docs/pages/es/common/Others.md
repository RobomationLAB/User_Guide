---
title: Otros
---

# Otros

En la programación con bloques, los **bloques de otros** están formados por código que no afecta al comportamiento del robot.  
Puedes añadir comentarios o terminar la ejecución del código.  

## Comentario de una línea {#comment}

Con el bloque **comentario de una línea** puedes añadir una **explicación** sin afectar a la ejecución del código.  
Los comentarios hacen que el código sea más legible y más fácil de mantener.

<BlockImage module="common/others" id="comment" />

### Python
```python
# contenido del comentario
```

## Comentario multilínea {#long_comment}

Con el bloque **comentario multilínea** puedes escribir de una vez un comentario de varias líneas.  
Cada línea recibe automáticamente la marca de comentario; las líneas vacías se conservan.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
primera línea
segunda línea

cuarta línea
"""
```

## Enlace {#link}

Con el bloque **enlace** puedes añadir mediante un **comentario** el **enlace a una página** que quieras abrir.  
Si haces clic en el botón **abrir**, vas a la página del enlace introducido.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Salir {#exit}

El bloque **salir** detiene inmediatamente la ejecución del código del programa.  
Es útil si quieres añadir una salida forzada bajo determinadas condiciones.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
