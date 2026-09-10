---
title: Текст
---

# Текст {#text}

Примеры текста:
- "thing #1"
- "March 12, 2010"
- "" (пустой текст)

Текст может содержать прописные и строчные буквы, цифры, знаки препинания, другие символы и пробелы между словами.  

<BlockImage module="common/text" id="text" />

## Создать текст {#text_join}

Блок **создать текст из** соединяет значения нескольких текстов в один новый текст.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Добавить текст {#text_append}

Блок **добавить текст** дописывает заданный текст к указанной переменной.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Длина текста {#text_length}

Блок **длина** считает буквы, цифры и прочие знаки текста и возвращает их общее количество.  
Ниже длина текста `abc` равна 3, а длина пустого текста равна 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Проверка пустого текста {#text_isEmpty}

Блок **пуст** проверяет, пуст ли заданный текст, то есть равна ли его длина 0.

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Поиск текста {#text_indexOf}

Эти блоки проверяют, встречается ли один текст внутри другого, и если да, возвращают его положение.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Получение одного символа {#text_charAt}

Берёт из текста один символ в указанном месте.  
На выбор есть несколько вариантов: первый, последний, случайный или N-й символ.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Получение части текста {#text_getSubstring}

Блок **взять подстроку** позволяет вырезать из текста фрагмент нужного диапазона.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Изменение регистра {#text_changeCase}

Этот блок переводит заданный текст в один из следующих видов:

- **ЗАГЛАВНЫЕ БУКВЫ**: делает все буквы прописными
- **строчные буквы**: делает все буквы строчными
- **Первые Заглавные Буквы**: делает первую букву каждого слова прописной, а остальные строчными

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # заглавные буквы
TEXT.lower() # строчные буквы
TEXT.title() # первые заглавные буквы
```

## Обрезка пробелов {#text_trim}

Блок ниже убирает пробелы из текста в выбранном месте:
- с двух сторон
- слева
- справа

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # с двух сторон
TEXT.lstrip()   # слева
TEXT.rstrip()   # справа
```

## Подсчёт вхождений текста {#text_count}

Считает, сколько раз заданный фрагмент встречается в тексте, и возвращает это число.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Замена фрагмента текста {#text_replace}

Заменяет все вхождения заданного фрагмента в тексте на другой текст.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Разворот текста {#text_reverse}

Возвращает новый текст с обратным порядком символов.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Вывод текста {#text_print}

Блок **напечатать** показывает заданное значение во всплывающем окне.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Ввод данных пользователем {#text_prompt_ext}

Блок ниже открывает окно, в котором пользователь вводит данные; введённое значение сохраняется в переменной.  
Можно запросить текст или число.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
