package binarysubarrayswithsum

func numSubarraysWithSum(nums []int, goal int) int {
	count := map[int]int{}
	sum := 0
	result := 0
	for _, num := range nums {
		count[sum]++
		sum += num
		result += count[sum-goal]
	}
	return result
}
