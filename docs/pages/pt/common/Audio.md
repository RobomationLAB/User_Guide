---
title: Áudio
---

# Áudio

Com os blocos de áudio podes reproduzir todo o tipo de efeitos sonoros e de voz.


## Reproduzir som {#play_sound}

Reproduz o som que quiseres com o **volume** indicado.  
Se ativares a caixa **repetir**, o som escolhido é reproduzido continuamente.

<BlockImage module="common/audio" id="play_sound" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clip de som | Nome de um clip da biblioteca de sons | - |
| volume | Entrada (campo) | Volume | inteiro 0 ~ 100 | 100 |
| repeat | Caixa de verificação | Reproduzir repetidamente | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Definir idioma e voz {#set_tts}

Define o **idioma** e a **voz** com que o **TTS** é reproduzido.  
Escolhendo idiomas e vozes diferentes podes obter uma voz mais natural.

<BlockImage module="common/audio" id="set_tts" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| lang | Opção de lista | Código de idioma | Códigos de idioma TTS dos 21 idiomas que o programa suporta (p. ex. `'ko-KR'`, `'en-US'`) | - |
| voice | Opção de lista | Nome da voz | Nome de uma voz TTS do sistema (p. ex. `'Google português'`) | - |

### Python
```python
Utils.set_tts('pt-BR', '')
```

## Falar {#speak}

Converte o texto introduzido em som e fala-o.

<BlockImage module="common/audio" id="speak" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| text | Entrada | O texto que é falado | texto | - |

### Python
```python
Utils.speak('Olá')
```
