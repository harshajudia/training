function IsEmpty() {
    let n=document.getElementById('name');
    let c=document.getElementById('comments');
    let g=document.getElementsByName('gender');
        if(n.value==""){
            alert("Please enter your name");
            n.focus();
            n.style.borderColor="red";
            return false;
        }
        else if(c.value==""){
            alert("Please enter comment");
            c.focus();
            c.style.borderColor="red";
            return false;
        }
        else if(!(g[0].checked || g[1].checked)){
            alert("Please select your gender");
            document.getElementById('female').focus();
            return false;
        }
        
    

}