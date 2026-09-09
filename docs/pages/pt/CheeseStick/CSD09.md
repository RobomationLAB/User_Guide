---
title: CSD-09 Motor
---

# CSD-09 Motor

## Declarar a instância {#instance}

Se acrescentares um bloco de CSD-09 Motor(CSD09) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Iniciar o servomotor {#start_servo_motor}

Indica a porta em que o servomotor é usado.  
Sem indicar a porta, o motor não funciona corretamente.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do servomotor | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Definir o ângulo do servomotor {#set_servo_motor}

Define o ângulo do servomotor da porta indicada.  
O intervalo dos valores que podes escolher é 0 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do servomotor | Sa, Sb, Sc | a porta do último `start_servo_motor` |
| value | Entrada (campo) | Ângulo de rotação (graus) | inteiro 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Alterar o ângulo do servomotor {#change_servo_motor}

Altera o ângulo do servomotor da porta indicada.  
O intervalo dos valores que podes escolher é -180 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do servomotor | Sa, Sb, Sc | a porta do último `start_servo_motor` |
| value | Entrada (campo) | Diferença de ângulo da alteração | inteiro | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Parar o servomotor {#stop_servo_motor}

Desliga a alimentação do servomotor da porta indicada.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do servomotor | Sa, Sb, Sc | a porta do último `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Iniciar o motor CC {#start_DC_motor}

Permite controlar o motor CC através da porta indicada.
Este bloco tem de ser chamado uma vez antes de usares outros blocos do motor CC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do motor CC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Definir a velocidade do motor CC {#set_DC_motor}

Define o valor de saída PWM do motor CC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do motor CC | Mab, Mcd | a porta do último `start_dc_motor` |
| value | Entrada (campo) | Valor de saída PWM | inteiro 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Alterar a velocidade do motor CC {#change_DC_motor}

Soma a alteração introduzida ao valor de saída PWM atual do motor CC e define assim um valor novo.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do motor CC | Mab, Mcd | a porta do último `start_dc_motor` |
| value | Entrada (campo) | Diferença de PWM da alteração | inteiro | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Parar o motor CC {#stop_DC_motor}

Para a saída do motor CC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta do motor CC | Mab, Mcd | a porta do último `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Iniciar o motor de passo {#start_step_motor}

Usa o motor de passo.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Definir o modo do motor de passo {#set_step_motor_mode}

Define o modo em que o motor de passo é controlado.  
Se não definires um modo próprio, está definido por predefinição o modo «Power».  
Atenção! Não mudes o modo enquanto o motor de passo estiver a girar.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Modo de funcionamento | off (desligado), normal(wave_step), Power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Definir a velocidade do motor de passo {#set_step_motor_speed}

Define a velocidade do motor de passo.  
O intervalo dos valores que podes escolher é -1000 ~ 1000.  
Com um valor negativo, o motor gira no sentido contrário.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Velocidade de rotação (PPS) | inteiro ≥ 0 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Girar o motor de passo {#rotate_step_motor}

Define o número de impulsos que o motor de passo gira.  
O intervalo dos valores que podes escolher é 0 ~ 65535.  
Se não tiveres escolhido uma velocidade para o motor de passo, ele não gira.  
Se marcares «aguardar», aguarda-se até a rotação terminar.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Número de passos | inteiro | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Alterar a velocidade do motor de passo {#change_step_motor_speed}

Altera a velocidade do motor de passo.  
O intervalo dos valores que podes escolher é -2000 ~ 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Diferença de PPS da alteração | inteiro | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Parar o motor de passo {#stop_step_motor}

Para o motor de passo ou desliga a sua alimentação.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Forma de parar | parar(stop), desligar a alimentação(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Número de passos {#step_motor_steps}

Devolve o número total de passos que o motor de passo girou até agora.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
