// if ... else
{
  const el = document.getElementById('foo');

  if (el) {
    el;
    el.innerHTML = 'Party Time'.blink();
  } else {
    el;
    alert('No element #foo');
  }
}

// отброс или возвращение из ветки
{
  const el = document.getElementById('foo');

  if (!el) throw new Error('Unable to find #foo');
  el;
  el.innerHTML = 'Party Time'.blink();
}

// instanceof
{
  function contains_V1(text: string, search: string | RegExp) {
    if (search instanceof RegExp) {
      search;
      return !!search.exec(text);
    }
    search;
    return text.includes(search);
  }
}

// проверка свойств
{
  type A = { a: number };
  type B = { b: number };

  function pickAB(ab: A | B) {
    if ('a' in ab) {
      ab;
    } else {
      ab;
    }
    ab;
  }
}

// Array.isArray
{
  function contains_V2(text: string, terms: string | string[]) {
    const termList = Array.isArray(terms) ? terms : [terms];
    termList;
    // ...
  }
}

// но ...
{
  const el = document.getElementById('foo');
  if (typeof el === 'object') {
    el;
  }
}

// но но но...
{
  function foo(x?: number | string | null) {
    if (!x) {
      x;
    }
  }
}

// добавление явного тега
{
  type UploadEvent = {
    type: 'upload';
    filename: string;
    contents: string;
  };
  type DownloadEvent = {
    type: 'download';
    filename: string;
  };

  type AppEvent = UploadEvent | DownloadEvent;

  function handleEvent(e: AppEvent) {
    switch (e.type) {
      case 'download':
        e;
        break;
      case 'upload':
        e;
        break;
    }
  }
}

// Если TypeScript не может выявить тип
{
  function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el;
  }

  function getElementContent(el: HTMLElement) {
    if (isInputElement(el)) {
      el; // тип HTMLInputElement
      return el.value;
    }
    el; // тип HTMLElement
    return el.textContent;
  }
}

// неудачный поиск
{
  const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];

  const members = ['Janet', 'Michael'].map((who) => jackson5.find((n) => n === who));
}

// filter
{
  const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];

  const members = ['Janet', 'Michael']
    .map((who) => jackson5.find((n) => n === who))
    .filter((who) => who !== undefined); // тип (string | undefined)[]
}

// filter с хелпером
{
  const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];

  function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
  }
  const members = ['Janet', 'Michael']
    .map((who) => jackson5.find((n) => n === who))
    .filter(isDefined); // тип string[]
}
