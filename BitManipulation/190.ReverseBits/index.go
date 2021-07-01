package reversebits

func reverseBits(num uint32) uint32 {
	var rev uint32
	for i := 0; i < 32; i++ {
		rev = rev<<1 | num&1
		num >>= 1
	}
	return rev
}
