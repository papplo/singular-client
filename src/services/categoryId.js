export default async (categories, categoryName) => {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name === categoryName) return categories[i].pk_category_id;
  }
}