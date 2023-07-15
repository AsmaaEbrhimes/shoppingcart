let products = [
    {
      id: 1,
      title: "clockDigital",
      desc:"Lorem  dolor sit amet consectetur, adipisicing elit. Atque, culpa?",
      img_src: "imges/Canon_4245B001_PowerShot_SX210_IS_Digital_675599 copy 2.jpg",
      size:"large",
      qty: 1,
      me:'no'
    },
    {
      id: 2,
      title: "labtop desktop",
      desc:"Lorem  dolor sit amet consectetur, adipisicing elit. Atque, culpa?",
      img_src: "imges/th.jpg",
      size:"small",
      qty: 1,
      me:'no'
    },
    {
      id: 3,
      title: "head phone",
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, culpa?",
      img_src: "imges/th copy.jpg",
      size:"medium",
      qty: 1,
      me:'no'
    }
  ]
  if (!localStorage.getItem('data_api')) {
    localStorage.setItem('data_api', JSON.stringify(products))
}