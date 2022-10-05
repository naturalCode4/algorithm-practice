def lbs_to_kg(weight):
    return weight*.45

def kg_to_lbs(weight):
    return weight/.45

#function gets largest number in list
def get_largest(list_of_numbers):
    max = list_of_numbers[0]
    for number in list_of_numbers:
        if number > max:
            max = number
    return max