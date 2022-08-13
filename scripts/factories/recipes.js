const recipeFactory = (recipeDatas) => {
  const { name, ingredients, time, description } = recipeDatas

  /* Create a recipe card from datas */
  const getRecipeCardDOM = () => {
    /* Create DOM elements */
    const anchor = document.createElement('a')
    anchor.href = '#'

    const article = document.createElement('article')
    article.classList.add('recipe')

    const img = createImgDOM(
      'asset/recipe_placeholder.png',
      name,
      'recipe__img'
    )

    const details = document.createElement('div')
    details.classList.add('recipe__details')

    const splitDetailsA = document.createElement('div')
    splitDetailsA.classList.add('recipe__split-details')

    const h2 = document.createElement('h2')
    h2.classList.add('recipe__title')

    const ingredientsList = document.createElement('ul')
    ingredientsList.classList.add('recipe__ingredients')

    const splitDetailsB = document.createElement('div')
    splitDetailsB.classList.add('recipe__split-details')

    const timeContainer = document.createElement('div')
    timeContainer.classList.add('recipe__time')

    const timeIcon = createImgDOM('asset/timer.svg', 'Timer')

    const descriptionContainer = document.createElement('p')
    descriptionContainer.classList.add('recipe__short')

    /* Add content to elements */
    h2.textContent = name

    createIngredientsListDOM(ingredientsList)

    timeContainer.textContent = `${time} min`

    descriptionContainer.textContent = description + '.'

    /* Add elements to DOM */
    anchor.append(article)

    article.append(img)
    article.append(details)

    details.append(splitDetailsA)
    details.append(splitDetailsB)

    splitDetailsA.append(h2)
    splitDetailsA.append(ingredientsList)

    splitDetailsB.append(timeContainer)
    splitDetailsB.append(descriptionContainer)

    timeContainer.prepend(timeIcon)

    return anchor
  }

  /* Fill the ingredients list in recipe card */
  const createIngredientsListDOM = (ingredientsList) => {
    ingredients.forEach((item) => {
      const itemUnit = item.unit ? item.unit : ''
      const itemQuantity = item.quantity ? item.quantity : ''
      const spanContent = item.quantity
        ? `${item.ingredient}: `
        : `${item.ingredient}`

      const li = document.createElement('li')
      li.textContent = `${itemQuantity} ${itemUnit}`

      const span = document.createElement('span')
      span.classList.add('recipe__ingredient')

      ingredientsList.append(li)

      li.prepend(span)

      span.textContent = spanContent
    })
  }

  /* Create an img tag with filled attribute */
  const createImgDOM = (src, alt, imgClass) => {
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    if (imgClass) img.classList.add(imgClass)

    return img
  }

  return { getRecipeCardDOM }
}

export { recipeFactory }
