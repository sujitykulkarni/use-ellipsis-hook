# use-ellipsis-hook
Custom React hook for deriving character length (number) to be used for applying 'ellipsis' effect on the text elements.
This hook calculates the screen width, and gives you a number that'll be the width of your text, beyond which, rest of the content will be truncated.

### Problem Statement
Apply ellipsis effect on the text, only after certain number of charcters, differently for different device sizes. For example, ellipsize a text only after 24 characters on `md` screens, after 30 characters on `lg` screen and so on. 

### Usage
In your component

    import useEllipsisThreshold from 'use-ellipsis-hook';
    ...

    const ellipsisAfter = useEllipsisThreshold({
        responsivenessFactor: 64,
        lowerLimit: 12,
    });

    ...

    return (
        ...
        <SomeTextComponent style={{width: `${ellipsisAfter}`ch}} className="my-ellipsis-class">Lorem ipsum dolor sit amet</SomeTextComponent>
    )
    ...

In your CSS

    ...
    .my-ellipsis-class {
      // NOT setting width in the CSS
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    ...


### Parameters

|Parameter|Description|Type|
|---|---|---|
|responsivenessFactor|Random integer that divides your screen width and derives the thteshold value|number|
|lowerLimit|Minimum number of characters to be always displayed| number|

### Installation

NPM

`npm i use-ellipsis-hook --save`

Yarn

`yarn add use-ellipsis-hook`

#### License
MIT

---

### Contribution
Feel free to log issues and raise PRs in order to make this package stable and relevant.
