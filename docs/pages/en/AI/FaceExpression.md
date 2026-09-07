---
title: Face Expression
---

# Face Expression

## Instance declaration {#instance}

When you add a Face Expression block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
face_expression = FaceExpression(0)
# When there are multiple instances
face_expression_1 = FaceExpression(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for age, gender, and expression recognition.

<BlockImage module="AI/FaceExpression" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Load the model {#load_model}

Loads the trained age, gender, and expression model. This step is required in order to use the features of the 'Face Expression' module.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| wait | Checkbox | Whether to wait for loading to complete | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Detect once {#detect_once}

Analyzes the faces currently on screen and shows the predicted age, gender, and expression just once.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps analyzing the faces currently on screen and shows the predicted age, gender, and expression on the screen.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Show the detection result {#display}

Decides whether or not to show the age, gender, and expression recognition result on the camera screen.

<BlockImage module="AI/FaceExpression" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Age {#age}

The age

<BlockImage module="AI/FaceExpression" id="age" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Gender {#gender}

The gender

<BlockImage module="AI/FaceExpression" id="gender" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Expression {#expression}

The expression

<BlockImage module="AI/FaceExpression" id="expression" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Whether the gender was detected {#gender_detected}

Whether the gender was recognized

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Is it a particular gender? {#gender_check}

Returns whether the recognized gender matches the specified value as **true (True) / false (False)**.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Gender | male, female | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Gender confidence {#gender_confidence}

The probability (confidence) that it is the selected gender

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Gender | male, female | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Whether the expression was detected {#expression_detected}

Whether the expression was recognized

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Is it a particular expression? {#expression_check}

Returns whether the recognized expression matches the specified value as **true (True) / false (False)**.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Expression | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Expression confidence {#expression_confidence}

The probability (confidence) that it is the selected expression

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Expression | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Model state {#model_state}

Returns the loading state of the age, gender, and expression model.  
It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parameters

(none)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
