/**
 * this ws something going on twitter, need to get it out of my system.
 */

const results = [
  `⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️`,
  `🔵⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️`,
  `🔵🔵⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️`,
  `🔵🔵🔵⚪️⚪️⚪️⚪️⚪️⚪️⚪️`,
  `🔵🔵🔵🔵⚪️⚪️⚪️⚪️⚪️⚪️`,
  `🔵🔵🔵🔵🔵⚪️⚪️⚪️⚪️⚪️`,
  `🔵🔵🔵🔵🔵🔵⚪️⚪️⚪️⚪️`,
  `🔵🔵🔵🔵🔵🔵🔵⚪️⚪️⚪️`,
  `🔵🔵🔵🔵🔵🔵🔵🔵⚪️⚪️`,
  `🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪️`,
  `🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵`,
]

const metered = (percentage: number) => {
  const index = Math.min(10,Math.max(0,Math.floor(percentage * 10)))
  return results[index]
}


console.log(metered(.1))


console.log(metered(.5))


console.log(metered(.95))


console.log(metered(1))


console.log(metered(-3))
