export default function sortArrayByDate(arr) {
  let sortedArray = [...arr].sort(function compare(a, b) {
    var dateA = new Date(a.created_date)
    var dateB = new Date(b.created_date)
    return dateB - dateA
  })
  return sortedArray
}
