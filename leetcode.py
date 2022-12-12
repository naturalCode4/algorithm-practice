# Bubble sort. 
# It is a comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.
# Swap the elements to arrange in order

def bubble_sort(list):
    for indecies in range(len(list)-1,0,-1):
        for index in range(indecies):
            print(index, indecies)
            print(list)
            if list[index] > list[index+1]:
                original_val = list[index]
                list[index] = list[index+1]
                list[index+1] = original_val
list1 = [19,2,31,45,6,11,121,27]
list2 = [3,6,-2,9,30,-1000,1,4,3]
bubble_sort(list2)
# print(list2)

# Contains duplicate (return boolean)


list1 = [1,2,3,3,4]

def containsDuplicate(list):
    if len(list) != len(set(list)):
        return True
    else:
        return False

def containsDuplicate2(list):
    for item in list:
        if list.count(item) > 1:
            return True
    return False
        
def containsDuplicate3(list):
    non_dup_list = []
    for item in list:
        if item not in non_dup_list:
            non_dup_list.append(item)
    if list == non_dup_list:
        return False
    else:
        return True
            
print(containsDuplicate(list1))
print(containsDuplicate2(list1))
print(containsDuplicate3(list1))

print()
# Contains Duplicate II
# def contains_duplicate_and_arithmetic(arr, k) -> bool:
#     for i in range(len(arr)):
#         for j in range(len(arr)):
#             if i != j and arr[i] == arr[j] and abs(i - j) <= k:
#                 return True
#     return False

def contains_duplicate_and_arithmetic(arr, k) -> bool:
    for i in range (len(arr)):
        if arr.count(arr[i]) >= 2:
            obj = list(enumerate(arr))
            print (obj)
            # for instance1 in obj:
            #     for instance2 in obj:
            #         if abs(obj[instance1][0] - obj[instance2][0]) <= k:
            #             return True
    return False
            
print(contains_duplicate_and_arithmetic(arr = [1,2,3,1,2,3], k = 2))
print(contains_duplicate_and_arithmetic(arr = [1,0,1,1], k = 1))

# Shuffle array (actually not leet code)
# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].

# divide list in 2 (if odd, precedence to first half).
# Iterate a number from 0 to length of first list
# In new array, add from first at index[iterative], add from second at index[iterative]
# return new array

def divide_array_in_half(arr): #helper function
    length = len(arr)
    mid_idx = None
    if length % 2 == 0:
        mid_idx = int(len(arr)/2-1)
    else: # length is odd
        mid_idx = int(len(arr)//2)
    print(mid_idx)
    arr1 = arr[0:mid_idx+1]
    arr2 = arr[mid_idx+1:]
    return [arr1, arr2]

arr = [0,1,2,3,4,5,6,7,8]

def shuffle_array(arr):
    arrs = divide_array_in_half(arr)
    shuffled = []
    for i in range(len(arrs[0])-1):
        shuffled.append(arrs[0][i])
        if i < len(arrs[1]):
            shuffled.append(arrs[1][i])
    return shuffled
        
# print(shuffle_array(arr))

# 287. Find the Duplicate Number

def find_duplicate(nums):
    for num in nums:
        if nums.count(num) >= 2:
            return num
    else:
        return False
    
print(find_duplicate([1,2,3,4,5,3]))

# find majority element

def majorityElement(nums):
    nums.sort()
    curr_num, high_freq_num, curr_freq, high_freq = nums[0], nums[0], 0, 0
    print(nums, curr_num, high_freq_num, curr_freq, high_freq)
    for num in nums:
        if num != curr_num:
            curr_num = num
            curr_freq = 1
        else:
            curr_freq += 1
            if curr_freq > high_freq:
                high_freq = curr_freq
                high_freq_num = curr_num
        print(curr_freq)
    return high_freq_num
            
print(majorityElement([1,22,33,33,4,5]))

[info: {
    [this, that],
    [this, [this, that]]
}]

# Happy Number. Incomplete...

# class Solution:
#     def isHappy(self, n: int) -> bool:
#         print('hello', type(n))
#         if n == 1: 
#             return True
#         if len(str(n)) == 1 and n != 1:
#             return False
#         else:
#             n = str(n)
#             n = list(n)
#             n = map(square_number, n)
#             n = list(n)
#             print(n)
#             n = sum_digits(n)
#             self.isHappy(n)

# def sum_digits(arr):
#     sum = 0
#     for n in arr:
#         sum += n
#     return sum

# def square_number(x):
#     x = int(x)
#     x *= x
#     return x