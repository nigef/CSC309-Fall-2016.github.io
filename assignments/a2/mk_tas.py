import random
import json

# A file containing lines of the format "family name, given name"
nfile = open('turing_names.txt', 'r')

# The output file
ofile = open('turing_tas.json', 'w')

statuses = ['PhD', 'MSc', 'Undergrad', 'MScAc', 'MEng']

# year is range 1-6
# stunum is 9 digit numbe

# Grab the list of possible courses
fp = open("courses.json", "r")
course_obj = json.load(fp)
courses = course_obj['courses']

tas = []
seen_stunum = []
for line in nfile:
    ta_obj = {}
    line = line.strip()
    names = line.split(',')
    #print(names)
    
    # create a unique student number
    stunum = random.randint(0,999999999) + 1000000000
    while stunum in seen_stunum:
        stunum = random.randint(0,999999999) + 1000000000
    seen_stunum.append(stunum)
    ta_obj['stunum'] = str(stunum)
    
    ta_obj['givenname'] = names[1].strip()
    ta_obj['familyname'] = names[0].strip()
    ta_obj['year'] = str(random.randint(1, 6))
    ta_obj['status'] = str(random.choice(statuses))
    
    # Add some courses
    num_courses = random.randint(1,10)
    ta_courses = []
    seen_courses = []
    for num in range(0, num_courses):
        code = random.choice(courses)
        if code in seen_courses:
            continue
        seen_courses.append(code)
        c = {}
        c['code'] = code
        c['rank'] = str(random.randint(1,5))
        c['experience'] = str(random.randint(0,3))
        ta_courses.append(c)
    ta_obj['courses'] = ta_courses
  
    
    tas.append(ta_obj)

# create the outer object before writing it to a JSON file
outer_obj = { 'tas' : tas }
json.dump(outer_obj, ofile, separators=(',', ': '), indent=4)