export default {
  trailingComma: 'all', // запятая в конце объекта/массива
  semi: false, // без ;
  tabWidth: 2, // 2 пробела
  singleQuote: true, // одинарные кавычки
  printWidth: 80, // длина строки
  endOfLine: 'auto', // чтобы не было конфликтов CRLF/LF
  arrowParens: 'always', // (x) => {}
  plugins: ['prettier-plugin-tailwindcss'], // сортировка tailwind-классов
}
