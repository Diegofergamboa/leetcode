/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = m - 1;
    let j: number = n - 1;
    let k: number = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i -= 1;
        } else {
            nums1[k] = nums2[j];
            j -= 1;
        }
        k -= 1;
    }
};