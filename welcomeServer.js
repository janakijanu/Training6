var httpmodule=require("http");
var urlmodule=require("url");
var fs=require("fs");
var studModule=require("./Student.js")
var server=httpmodule.createServer(f1);
server.listen(9091);
console.log("HTTP Request");
function f1(request,response){
    var requestedPath=request.url;
    var pathNeeded=urlmodule.parse(requestedPath).pathname;
    console.log("path: "+pathNeeded);

    response.writeHeader(200, {"content-type":"text/html"});
    response.write("<html>")
    response.write("<body>")
    response.write("<h1>Welcome</h1>")
    if(pathNeeded=='/Register'){
        response.write("<h2>We Will send the OTP for Registration</h2>");
        response.write("<hr>")
    }else if(pathNeeded=='/AboutUs'){
        response.write("We have office in Chennai,Kolkatta");
    }else if(pathNeeded=='/Enquiry'){
        response.write("<h2>Contact US:1800-200-200</h2>")
    }else if(pathNeeded=='/'){
        var str=fs.readFileSync("./home.html");
        response.write(str);
    }else if(pathNeeded=="/list"){
        //students display code
        var sm=new studModule.StudentManager();
        var stud1=new studModule.Student(1,"Janu",20,30,40);
        var stud2=new studModule.Student(2,"Sheela",40,20,40);
        var stud3=new studModule.Student(3,"Abi",30,40,60);
        sm.addStudent(stud1);
        sm.addStudent(stud2);
        sm.addStudent(stud3);
        var studs=sm.getAllStudents();
        response.write("<table>");
        for(i=0;i<studs.length;i++){
            response.write("<tr>");
            response.write("<td>"+studs[i].id+"</td>");
            response.write("<td>"+studs[i].name+"</td>");
            response.write("<td>"+studs[i].mark1+"</td>");
            response.write("<td>"+studs[i].mark2+"</td>");
            response.write("<td>"+studs[i].mark3+"</td>");
            response.write("</tr>");
        }
        response.write("</table>");
    }
    response.write("</body>")
    response.write("</html>")
}