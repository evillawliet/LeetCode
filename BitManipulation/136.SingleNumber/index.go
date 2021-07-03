package singlenumber

func singleNumber(nums []int) int {
	singleOne := 0
	for _, val := range nums {
		singleOne ^= val
	}
	return singleOne
}
