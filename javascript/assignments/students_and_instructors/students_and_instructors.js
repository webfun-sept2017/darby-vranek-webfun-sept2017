function printStudents(students) {
	for (idx in students) {
		console.log(students[idx].first_name, students[idx].last_name);
	}
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

printUsers(users);