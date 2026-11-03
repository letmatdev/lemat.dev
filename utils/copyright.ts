export async function copyright() {
  'use cache'

  const currentDate = await new Date().getFullYear()

  return `2021 - ${currentDate}, letmatdev`
}
