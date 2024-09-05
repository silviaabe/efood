class Dish {
  id: number
  image: string
  infos: string[]
  title: string
  grade: string
  description: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    grade: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.grade = grade
    this.description = description
  }
}

export default Dish
