---
title: Cheese Stick
---

# Cheese Stick

## Declarar a instância {#instance}

Se acrescentares um bloco de Cheese Stick(CheeseStick) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
# se existirem várias instâncias
cheesestick_1 = CheeseStick(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir o modo de entrada {#set_input_mode}

Define o modo de entrada da porta escolhida.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de entrada | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Opção de lista | Modo de entrada | entrada makey(makey), entrada de botão(button), digital pull-up(digital_pullup), digital pull-down(digital_pulldown), analógica(analog), tensão analógica(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Definir o intervalo da entrada {#set_input_range}

Converte o valor de entrada da porta escolhida para o intervalo indicado de mínimo a máximo.  
O intervalo do valor de entrada é 0 ~ 255.  
O intervalo para o qual se pode converter é -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de entrada | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Entrada (campo) | Mínimo do valor original | inteiro 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo do valor original | inteiro 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo depois da conversão | inteiro -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo depois da conversão | inteiro -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Definir o intervalo da entrada com valor médio {#set_input_range_median}

Converte o valor de entrada da porta escolhida para o intervalo indicado de mínimo a máximo, passando por um valor médio.  
O intervalo do valor de entrada é 0 ~ 255.  
O intervalo para o qual se pode converter é -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de entrada | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Entrada (campo) | Mínimo do valor original | inteiro 0 ~ 255 | - |
| src_median | Entrada (campo) | Valor médio do valor original | inteiro 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo do valor original | inteiro 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo depois da conversão | inteiro -100 ~ 100 | - |
| dst_median | Entrada (campo) | Valor médio depois da conversão | inteiro -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo depois da conversão | inteiro -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valor de entrada {#get_input}

O valor de entrada da porta escolhida

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de entrada | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Definir o modo de entrada de impulsos {#set_pulse_input_mode}

Define o modo de entrada de impulsos da porta escolhida.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de entrada de impulsos | Sc, Lc | - |
| option | Opção de lista | Modo pull | impulso (default), impulso (pull-up) (pull-up), impulso (pull-down) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Valor de entrada de impulsos {#get_pulse_input}

Se foi detetada uma entrada de impulsos na porta escolhida

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de entrada de impulsos | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Definir a saída digital {#set_digital_output}

Define o valor de saída digital da porta indicada.  
Os valores que podes escolher são 0 ou 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de saída digital | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Opção de lista | Valor de saída | 0 ou 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Definir a saída PWM {#set_pwm_output}

Define o valor de saída PWM da porta indicada.  
O intervalo dos valores que podes escolher é 0 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de saída PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Entrada (campo) | Valor PWM | inteiro 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Alterar a saída PWM {#change_pwm_output}

Altera o valor de saída PWM da porta indicada.  
O intervalo dos valores que podes escolher é -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de saída PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Entrada (campo) | Diferença de PWM da alteração | inteiro -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Definir a frequência do som {#sound_buzz}

Define a frequência do som do Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloco) | Frequência (Hz) | decimal 0 ~ 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Tocar uma nota {#sound_note}

O Cheese Stick toca a nota indicada.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#(C#), Ré(D), Ré#(D#), Mi(E), Fá(F), Fá#(F#), Sol(G), Sol#(G#), Lá(A), Lá#(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Reproduzir um som {#sound_clip}

O Cheese Stick reproduz um clipe de som.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clipe de som | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Desligar o som {#sound_off}

Desliga o som do Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Valor da aceleração {#acceleration}

O valor da aceleração da gravidade num determinado eixo

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Valor do sensor de temperatura {#temperature}

O valor do sensor de temperatura

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## O estado mudou? {#state_change}

Se o estado do robô mudou

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de estado | 0 ~ 7 (ver a tabela seguinte) | - |

| unit | Condição |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (evento de toque) |
| 7 | `fall()` (evento de queda) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
