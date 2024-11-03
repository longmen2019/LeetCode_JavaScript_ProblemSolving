Array.prototype.last = function() {
    // If the array has elements (length > 0)
    if (this.length > 0) {
      // Return the last element by accessing the index `length - 1`
      return this[this.length - 1];
    } else {
      // If the array is empty, return -1
      return -1;
    }
  };
  
  const nums1 = [null, {}, 3];
  const nums2 = [];
  
  console.log(nums1.last()); // Output: 3
  console.log(nums2.last()); // Output: -1