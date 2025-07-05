function recursiveSum(A, i, j) {
	// Base case: if the indices are equal, return the single element
	if (i === j) {
		return A[i];
	} else {
		// Find the midpoint (assume integer division)
		const m = Math.floor((i + j) / 2);
		// Recur for the left and right subarrays and combine the results
		return recursiveSum(A, i, m) + recursiveSum(A, m + 1, j);
	}
}

// Example usage:
const A = [3, 4, 1, 2];
const total = recursiveSum(A, 0, A.length - 1);
console.log("Total sum:", total); // Output should be 10
