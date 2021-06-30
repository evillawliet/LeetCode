package hammingdistance

func hammingDistance(x int, y int) int {
	distance := 0
	for diff := x ^ y; diff != 0; diff &= diff - 1 {
		distance++
	}
	return distance
}
