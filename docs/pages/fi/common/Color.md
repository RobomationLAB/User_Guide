---
title: Väri
---

# Väri

Värejä käytetään monissa graafisissa ohjelmissa. 


## Perusväri {#color_picker}

Yksinkertaisin tapa saada väri on käyttää **väripalettia**.  
Kun napsautat valkoista pyöreäkulmaista ruutua, väripaletti tulee näkyviin ja voit valita haluamasi värin.

<BlockImage module="common/color" id="color_picker" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Väri | Valmiit värit | musta(black), punainen(red), keltainen(yellow), vihreä(green),<br>syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | - |

### Python
```python
# esim. kun valitset punaisen värin
Utils.color('red')
```

## Liukusäätimen väri {#color_slider}

Lohkolla **liukusäätimen väri** voit koota värin itse pyörän ja liukusäätimen avulla.  
Kun napsautat valkoista pyöreäkulmaista ruutua, näkyviin tulee pyöreä väriympyrä, jossa säädät **punaisen (R), vihreän (G) ja sinisen (B)** arvoja, sekä liukusäädin, jolla säädät **kirkkautta**.

<BlockImage module="common/color" id="color_slider" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Väri | Väriympyrä + kirkkauden liukusäädin | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# väriympyrästä valitsemasi väri → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB-väri {#color_rgb}

Lohko **RGB-väri** luo RGB-taulukon antamistasi punaisen, vihreän ja sinisen arvoista.

<BlockImage module="common/color" id="color_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| r | Syöte (lohko) | Punaisen arvo | Kokonaisluku välillä 0 ja 255 | - |
| g | Syöte (lohko) | Vihreän arvo | Kokonaisluku välillä 0 ja 255 | - |
| b | Syöte (lohko) | Sinisen arvo | Kokonaisluku välillä 0 ja 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Satunnainen väri {#color_random}

Lohko **satunnainen väri** luo satunnaisen RGB-värin joka kerta, kun sitä kutsutaan.

<BlockImage module="common/color" id="color_random" />

### Parametrit

(ei mitään)

### Python
```python
Utils.random_color()
```
