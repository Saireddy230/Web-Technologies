document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // To Get form values
    var name = document.getElementById('name').value;
    var empId = document.getElementById('empId').value;
    var department = document.getElementById('department').value;
    var salary = document.getElementById('salary').value;
    var address = document.getElementById('address').value;
    
    // For the purpose of this lab, let's just log the data to the console output.
    document.write('Name:', name,"<br>");
    document.write('Employee ID:', empId);
    document.write('Department:', department);
    document.write('Salary:', salary);
    document.write('Address:', address);
    
    //To Clear form inputs
    document.getElementById('name').value = '';
    document.write("<br>");
    document.getElementById('empId').value = '';
    document.write("<br>");
    document.getElementById('department').value = '';
    document.write("<br>");
    document.getElementById('salary').value = '';
    document.write("<br>");
    document.getElementById('address').value = '';
   });