// Copyright (c) 2023 Vladislav Trofimenko <foss@slashfast.dev>

// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import pdfMake from "https://ga.jspm.io/npm:pdfmake@0.2.8/build/pdfmake.js";
import { optimize } from "https://ga.jspm.io/npm:svgo@3.0.0/dist/svgo.browser.js";
import { SVG } from "https://ga.jspm.io/npm:@svgdotjs/svg.js@3.2.0/dist/svg.esm.js";
pdfMake.fonts = {
  // NotoSans: {
  //     normal: 'https://cdn.statically.io/gh/slashfast/noto-math/main/NotoSansMath-Regular.ttf',
  //     bold: 'https://cdn.statically.io/gh/slashfast/noto-math/main/NotoSansMath-Medium.ttf',
  //     italics: 'https://cdn.statically.io/gh/slashfast/noto-math/main/NotoSansMath-Italic.ttf',
  //     bolditalics: 'https://cdn.statically.io/gh/slashfast/noto-math/main/NotoSansMath-ItalicMedium.ttf'
  // },
  // Roboto: {
  //     normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.8/fonts/Roboto/Roboto-Regular.ttf',
  //     bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.8/fonts/Roboto/Roboto-Medium.ttf',
  //     italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.8/fonts/Roboto/Roboto-Italic.ttf',
  //     bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.8/fonts/Roboto/Roboto-MediumItalic.ttf'
  // },
  FiraSans: {
    normal:
      "http://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VfkILKSTbndQ.ttf",
    bold: "http://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKvuQR37fF3Wlg.ttf",
    italics:
      "http://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkojOazP3dUTP.ttf",
    bolditalics:
      "http://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrA6Qhf_XljGllLX.ttf",
  },
};

function mmToPt(size) {
  return size * 2.8346438836889;
}

function pxToPt(size) {
  return size * 0.75;
}

function genTemplate1(svg) {
  // Установить максимальный размер для svg по измерениям x, у
  const maxSize = {
    x: mmToPt(175),
    y: mmToPt(175),
  };
  // Толщина линии рамки
  const lineWidth = 2;

  // Непосредственно описание шаблона. Документация: https://pdfmake.github.io/docs/0.1/document-definition-object/
  const template1 = [
    // Рамка чертежа по ГОСТ
    {
      type: "rect",
      x: 0,
      y: 0,
      w: mmToPt(185),
      h: mmToPt(287),
      lineColor: "black",
      lineWidth: lineWidth,
    },
    // Далее основная надпись по ГОСТ
    {
      type: "line",
      x1: 0,
      y1: mmToPt(247),
      x2: mmToPt(185),
      y2: mmToPt(247),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(252),
      x2: mmToPt(65),
      y2: mmToPt(252),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(257),
      x2: mmToPt(65),
      y2: mmToPt(257),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(262),
      x2: mmToPt(185),
      y2: mmToPt(262),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(267),
      x2: mmToPt(65),
      y2: mmToPt(267),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(135),
      y1: mmToPt(267),
      x2: mmToPt(185),
      y2: mmToPt(267),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(272),
      x2: mmToPt(65),
      y2: mmToPt(272),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(135),
      y1: mmToPt(272),
      x2: mmToPt(185),
      y2: mmToPt(272),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(277),
      x2: mmToPt(65),
      y2: mmToPt(277),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: 0,
      y1: mmToPt(282),
      x2: mmToPt(65),
      y2: mmToPt(282),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(7),
      y1: mmToPt(247),
      x2: mmToPt(7),
      y2: mmToPt(262),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(17),
      y1: mmToPt(247),
      x2: mmToPt(17),
      y2: mmToPt(287),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(40),
      y1: mmToPt(247),
      x2: mmToPt(40),
      y2: mmToPt(287),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(55),
      y1: mmToPt(247),
      x2: mmToPt(55),
      y2: mmToPt(287),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(65),
      y1: mmToPt(247),
      x2: mmToPt(65),
      y2: mmToPt(287),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(135),
      y1: mmToPt(262),
      x2: mmToPt(135),
      y2: mmToPt(287),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(140),
      y1: mmToPt(267),
      x2: mmToPt(140),
      y2: mmToPt(272),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(145),
      y1: mmToPt(267),
      x2: mmToPt(145),
      y2: mmToPt(272),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(150),
      y1: mmToPt(262),
      x2: mmToPt(150),
      y2: mmToPt(272),
      lineWidth: lineWidth,
    },
    {
      type: "line",
      x1: mmToPt(167),
      y1: mmToPt(262),
      x2: mmToPt(167),
      y2: mmToPt(272),
      lineWidth: lineWidth,
    },
  ];

  // На вход лучше подавать только оптимизированный svg из SVGO (удаляет метаданные редакторов и прочий мусор)
  const target = SVG(svg);

  // Получаем viewbox из SVG, размеры которого могут отличаться от width и height
  const box = target.viewbox();

  // Получаем размеры SVG
  let width = target.width();
  let height = target.height();

  // Если размер SVG не задан, то берем его из viewbox
  if (width == 0 || height == 0) {
    width = box.width;
    height = box.height;
  }

  // Расчет коэффициента масштабирования по самой длинной стороне SVG
  const q = height > width ? maxSize.y / height : maxSize.x / width;

  // Тут сравниваются размеры из box и из width, height, так как если viewbox больше, то лучше поменять непосредственно размеры (выведено опытным путем)
  // (масштабирование просто изменяет координаты SVG)
  if (box.width < target.width() || box.height < target.height()) {
    target.scale(q, 0, 0);
  } else {
    target.width(width * q);
    target.height(height * q);
  }

  // Создание PDF-документа
  return pdfMake.createPdf({
    // Размер листов
    pageSize: "A4",
    // Отступы с краев по ГОСТ
    pageMargins: [mmToPt(20), mmToPt(5), mmToPt(5), mmToPt(5)],
    // Изменения шрифта по умолчанию (Roboto), можно раскоментить другие шрифты и использовать их или добавить свои
    defaultStyle: {
      font: "FiraSans",
    },
    content: [
      // Вставка SVG
      {
        // Получаем SVG в виде строки и передаем в svg
        svg: target.svg(),
        // Положение отсчитвается с левого верхнего угла, с учетом отступов листа. Для абсолютного местоположения использовать absolutePosition
        relativePosition: {
          // Выравнивание по горизонтали (левая часть выражения в скобках найдена опытным путем)
          x: (mmToPt(185 - 40 - 2.5) - pxToPt(width * q)) / 2,
          // Выравнивание по вертикали (левая часть выражения в скобках найдена опытным путем)
          y: (mmToPt(287 - 40 - 20) - pxToPt(height * q)) / 2,
        },
      },
      // Вставка шаблона
      {
        canvas: template1,
      },
    ],
  });
}

function loadSVG() {
  const reader = new FileReader();
  const file = document.querySelector("input[type=file]").files[0];

  reader.readAsText(file);

  const selectedTemplate = document.getElementById("templateSelect").value;
  let selectedTemplateGenerator;

  // Выбор функции на основе выбранного значения в <select>
  switch (selectedTemplate) {
    case "template1":
      selectedTemplateGenerator = genTemplate1;
  }

  reader.onload = () => {
    const optimizedSVG = optimize(reader.result, {
      plugins: [
        // Переопределение пресета по умолчанию. Документация: https://svgo.dev/docs/preset-default/
        {
          name: "preset-default",
          params: {
            overrides: {
              // Удалять параметр на свой страх и риск! Без переопределения данного параметра по умолчанию некоторые файлы не будут корректно сжиматься
              removeViewBox: false,
            },
          },
        },
      ],
    });
    try {
      selectedTemplateGenerator(optimizedSVG.data).open();
    } catch {
      console.log(`Not implemented for ${selectedTemplate}`);
    }
  };
}
document.getElementById("input").addEventListener("change", loadSVG, false);
