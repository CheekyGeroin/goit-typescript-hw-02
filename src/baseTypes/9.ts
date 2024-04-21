/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

const page1:FirstPage = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}


type FirstPage = {
  title: string,
  likes: number,
  accounts: string[],
  status: string
  details: {
    createAt: Date, updateAt: Date
  }
}

const page2:SecondPage = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

type SecondPage = {
  title: string,
  likes: number,
  accounts: string[],
  status:string
}

type TwoPages = FirstPage & SecondPage;

const Pages: TwoPages = {
  ...page1, ...page2
}

export {};